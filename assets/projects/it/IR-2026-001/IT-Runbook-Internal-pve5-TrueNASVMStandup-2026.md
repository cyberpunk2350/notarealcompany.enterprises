# ![NARC Logo](../images/narc-logo.svg)
# Runbook — pve5 TrueNAS SCALE VM Standup (Phase 1a / 1b)

**Document Owner:** IT Operations — Computational Resources & Uptime Division (ITCRuD)<br>
**IT Director:** [REDACTED]<br>
**Version:** 1.0<br>
**Last Updated:** 2026-03-21<br>
**Classification:** ![Internal](../images/seals/internal.svg) INTERNAL — Red Clearance and Above<br>
**Approved By:** ![Approved by the Computer](../images/seals/approved-by-computer.svg)

---

## Purpose

Step-by-step procedure for completing Phase 1a (Proxmox host preparation) and Phase 1b (TrueNAS SCALE VM creation and storage pool build) of Infrastructure Refresh 2026-001 on pve5 (Dell PowerEdge R720xd).

This runbook assumes the following are already complete:
- Proxmox VE 9 installed on rear bay SSD 1 (ext4) — ✓ Done
- PERC H710 D1 Mini flashed to IT mode (CR-2026-002) — ✓ Done
- Hardware acceptance record completed and signed (IT-HardwareAcceptance-Internal-pve5-2026.md)

This runbook does not cover data migration (Phase 1c) or sensitive data pool creation (Phase 1d). Those are separate procedures.

Citizens who attempt to execute Phase 1b steps before Phase 1a exit criteria are met will find the experience unrewarding and the results unsupported.

---

## Prerequisites Checklist

Complete all items before beginning. Do not proceed with a partially completed checklist.

- [ ] E5-2695 v2 CPUs installed and POST verified (CR-2026-003)
- [ ] Hardware acceptance record completed (IT-HardwareAcceptance-Internal-pve5-2026.md)
- [ ] Physical access to pve5 confirmed OR iDRAC remote console verified functional
- [ ] 6× 26TB drives confirmed installed in front bays 1–6
- [ ] Rear bay SATA controller routing confirmed (onboard Intel, not H710) — see Section 1.3
- [ ] Proxmox VE 9 accessible via web UI or SSH
- [ ] TrueNAS SCALE 24.10 ISO downloaded: https://www.truenas.com/download-truenas-scale/
- [ ] ISO uploaded to Proxmox local storage

---

## Phase 1a — Proxmox Host Preparation

### 1.1 Verify CPU Topology Post-Swap

After E5-2695 v2 installation, confirm Proxmox recognizes the correct topology before proceeding.

```bash
# Verify 48 logical CPUs
lscpu | grep -E "CPU\(s\)|Thread|Socket|Core"
# Expected: 2 sockets, 12 cores/socket, 2 threads/core = 48 CPUs

# Verify via Proxmox API
pvesh get /nodes/$(hostname)/status | grep cpuinfo
```

**Expected result:** 48 logical CPUs, 2 sockets, 24 cores total.
**If wrong:** Do not proceed. Verify CPU installation. Check BIOS POST output via iDRAC.

---

### 1.2 Enable IOMMU

IOMMU must be enabled before any PCIe passthrough configuration. This step requires a reboot.

```bash
# Edit GRUB configuration
nano /etc/default/grub

# Find the line:
GRUB_CMDLINE_LINUX_DEFAULT="quiet"

# Change to:
GRUB_CMDLINE_LINUX_DEFAULT="quiet intel_iommu=on iommu=pt"

# Rebuild GRUB and initramfs
update-grub
update-initramfs -u -k all

# Reboot
reboot
```

After reboot, verify IOMMU is active:

```bash
dmesg | grep -e DMAR -e IOMMU | head -20
# Expected: lines confirming DMAR units and IOMMU enabled
```

---

### 1.3 Verify Rear Bay SATA Controller Routing

**Critical:** Confirm rear bay SSDs (Proxmox OS drives) are on the onboard Intel SATA controller, not the H710. This must be verified before passthrough configuration.

```bash
lsblk -o NAME,TRAN,MODEL,SIZE
# Rear bay SSDs should show TRAN=sata
# Cross-reference with lspci output to confirm they are on onboard controller, not H710

lspci | grep -i "SATA\|RAID\|SAS"
# Note the PCI address of the H710 vs the onboard SATA controller
```

**Expected result:** Rear bay SSDs attached to onboard Intel SATA controller. H710 controls front bay drives only.
**If wrong:** Stop. Do not configure passthrough. Investigate controller routing before proceeding.

---

### 1.4 Verify and Document IOMMU Groupings

Identify IOMMU groups for the H710 and 10GbE card. This determines whether passthrough is possible as designed or whether fallback configuration applies.

```bash
# List all IOMMU groups and their devices
find /sys/kernel/iommu_groups/ -type l | sort -V

# More readable format
for g in /sys/kernel/iommu_groups/*; do
  echo "Group ${g##*/}:"
  for d in $g/devices/*; do
    echo "  $(lspci -nns ${d##*/})"
  done
done
```

**Record the following before proceeding:**

| Device | IOMMU Group | Notes |
|---|---|---|
| H710 D1 Mini | | |
| 10GbE port 1 | | |
| 10GbE port 2 | | |
| Other devices sharing H710 group (if any) | | |
| Other devices sharing 10GbE group (if any) | | |

**Decision point:**
- If H710 is in its own group → PCIe passthrough to TrueNAS VM as designed
- If H710 shares a group with required devices → Escalate to [REDACTED] before proceeding
- If 10GbE ports share a group → Both ports go to TrueNAS VM, or fall back to VirtIO NIC (see ADR-003)

---

### 1.5 Identify NUMA Node Assignments

TrueNAS VM must be pinned to the NUMA node owning the H710 and 10GbE card.

```bash
# Check NUMA topology
numactl --hardware

# Identify which NUMA node owns each PCIe device
# Find the H710 PCI address (e.g., 0000:02:00.0)
cat /sys/bus/pci/devices/0000:XX:XX.X/numa_node
# Returns 0 or 1 — the owning NUMA node

# Repeat for 10GbE card PCI address
```

**Record the following:**

| Device | PCI Address | NUMA Node |
|---|---|---|
| H710 D1 Mini | | |
| 10GbE card | | |
| RAM on NUMA node 0 | N/A | 0 |
| RAM on NUMA node 1 | N/A | 1 |

**Required:** H710 and 10GbE card must be on the same NUMA node. If they are on different nodes, escalate to [REDACTED] — NUMA pinning strategy requires revision.

---

### 1.6 Configure Management Networking

```bash
# Create bonded management interface (1GbE × 2)
# Edit /etc/network/interfaces — example for active-backup bond:

auto bond0
iface bond0 inet manual
    bond-slaves eno1 eno2
    bond-mode active-backup
    bond-miimon 100

auto vmbr0
iface vmbr0 inet static
    address [MANAGEMENT IP]/[PREFIX]
    gateway [GATEWAY]
    bridge-ports bond0
    bridge-stp off
    bridge-fd 0

# Create VM bridge on 10GbE port 2
auto vmbr1
iface vmbr1 inet manual
    bridge-ports [10GbE_PORT_2_INTERFACE]
    bridge-stp off
    bridge-fd 0

# Apply
systemctl restart networking
# Verify management access is retained before proceeding
```

**Verify:** Proxmox web UI accessible via management IP on bonded interface.

---

### Phase 1a Exit Criteria

Before proceeding to Phase 1b, confirm all items:

- [ ] 48 CPUs recognized
- [ ] IOMMU enabled and verified (`dmesg` confirms)
- [ ] Rear bay SATA routing confirmed (onboard Intel)
- [ ] IOMMU groups documented — H710 isolation confirmed or fallback decision made
- [ ] NUMA node assignments documented — H710 and 10GbE on same node confirmed
- [ ] Management networking operational
- [ ] IOMMU group documentation saved to project repository

---

## Phase 1b — TrueNAS SCALE VM Creation

### 2.1 Create the VM

In the Proxmox web UI or via CLI:

```bash
# Via CLI — adjust IDs and paths as needed
qm create 100 \
  --name truenas \
  --machine q35 \
  --bios ovmf \
  --efidisk0 local-lvm:1,efitype=4m \
  --cpu host \
  --cores 8 \
  --sockets 1 \
  --memory 65536 \
  --net0 virtio,bridge=vmbr1 \
  --ostype other \
  --scsihw virtio-scsi-pci \
  --scsi0 local-lvm:32 \
  --ide2 local:iso/TrueNAS-SCALE-24.10.x.iso,media=cdrom \
  --boot order=ide2
```

**NUMA pinning** — add to VM config after creation:

```bash
# Edit VM config
nano /etc/pve/qemu-server/100.conf

# Add NUMA configuration (adjust node number to match documented NUMA node):
numa: 1
numanode0: cpus=0-7,hostnodes=[NUMA_NODE],memory=65536,policy=bind
```

---

### 2.2 Add PCIe Passthrough Devices

**H710 storage controller:**

```bash
# Add H710 passthrough (use PCI address from Section 1.4)
qm set 100 --hostpci0 [H710_PCI_ADDRESS],pcie=1,rombar=0
```

**10GbE NIC (if passthrough confirmed viable):**

```bash
# Add 10GbE port 1 passthrough
qm set 100 --hostpci1 [10GBE_PCI_ADDRESS],pcie=1
```

**If 10GbE passthrough not viable** (shared IOMMU group — see ADR-003 fallback):

```bash
# Use VirtIO NIC instead — remove hostpci1 if added
# Ensure net0 is set to vmbr1 (10GbE bridge)
qm set 100 --net0 virtio,bridge=vmbr1
```

---

### 2.3 Install TrueNAS SCALE

1. Start VM in Proxmox
2. Open console via Proxmox web UI (or iDRAC → VM console)
3. Follow TrueNAS SCALE installer — install to the 32GB VirtIO boot disk
4. **Do not install to any H710-connected drive** — installer will show all drives; select only the VirtIO disk
5. Complete installation and reboot
6. Note TrueNAS management IP from console

---

### 2.4 Verify Drive Visibility

After TrueNAS boots, confirm all six 26TB drives are visible:

In TrueNAS web UI → **Storage → Disks**

Expected: 6× drives, each ~26TB, presented as individual block devices.

```bash
# Also verify from TrueNAS shell (via web UI → System → Shell)
lsblk -o NAME,SIZE,MODEL,TRAN
smartctl -a /dev/sdX  # verify SMART data accessible on each drive
```

**If drives are not visible:** Verify H710 passthrough is active. Check VM config. Do not proceed to pool creation until all six drives are confirmed visible with SMART access.

---

### 2.5 Create the Media Pool

In TrueNAS web UI → **Storage → Create Pool**

| Setting | Value |
|---|---|
| Pool name | `media` (or preferred name) |
| Layout | RAIDZ2 |
| Drives | All 6× 26TB drives |
| Vdev type | Data |

**Confirm before clicking Create:**
- Drive count: 6
- Layout: RAIDZ2
- No drives accidentally excluded

**This operation is irreversible.** The vdev layout cannot be changed after pool creation without destroying the pool. Verify the drive count and layout before proceeding. Verify again. The Computer is watching.

---

### 2.6 Configure Pool and Datasets

```bash
# In TrueNAS Shell or via UI:

# Enable LZ4 compression on pool (if not set at creation)
zfs set compression=lz4 media

# Create media dataset
zfs create media/jellyfin

# Configure weekly scrub (TrueNAS UI → Data Protection → Scrub Tasks)
# Schedule: Weekly, day and time as preferred

# Configure snapshot schedule (TrueNAS UI → Data Protection → Periodic Snapshot Tasks)
# Retention policy: define before creating — see open item in project plan
```

---

### 2.7 Configure NIC and Network

In TrueNAS web UI → **Network → Interfaces**

- Configure the passthrough 10GbE NIC (or VirtIO fallback) with correct IP, subnet, gateway
- Set MTU to 9000 if switch supports jumbo frames (verify switch capability first)
- Verify TrueNAS is reachable from Proxmox host and management network

---

### Phase 1b Exit Criteria

- [ ] TrueNAS SCALE VM running and accessible via web UI
- [ ] All 6× 26TB drives visible with SMART access
- [ ] Media pool created (RAIDZ2, 6-wide) — status: ONLINE
- [ ] LZ4 compression enabled
- [ ] Weekly scrub scheduled
- [ ] Snapshot schedule configured (retention policy defined)
- [ ] NIC configured — TrueNAS reachable on network
- [ ] Pool creation recorded in project repository

---

## Rollback Procedures

| Scenario | Procedure |
|---|---|
| IOMMU not enabling | Verify GRUB edit; check `dmesg` for errors; consult Proxmox PCIe passthrough docs: https://pve.proxmox.com/wiki/PCI(e)_Passthrough |
| H710 IOMMU group conflict | Do not force passthrough; implement VirtIO fallback for storage (not recommended for ZFS) or escalate — see ADR-001 for bare-metal fallback option |
| TrueNAS install fails | Verify ISO integrity; retry install; check console for error output |
| Drives not visible in TrueNAS | Verify hostpci0 passthrough in VM config; verify H710 in IT mode (`lspci` on Proxmox host) |
| Pool creation fails | Do not retry blindly; check TrueNAS logs; verify all drives healthy in Disks view |
| Network not reachable after NIC config | Access TrueNAS via Proxmox console (not network); correct NIC configuration |

---

## Validation — Phase 1a/1b Complete

Run all checks before declaring Phase 1b complete and proceeding to Phase 1c (data migration):

```bash
# From Proxmox host:
ping [TRUENAS_IP]                    # TrueNAS reachable

# From TrueNAS shell:
zpool status media                   # Pool: ONLINE, no errors
zpool list media                     # Confirm ~104TB usable
zfs get compression media            # compression=lz4
smartctl -a /dev/sda                 # SMART accessible (repeat for each drive)

# From Proxmox host:
zpool status                         # No Proxmox ZFS pools on H710 drives
```

**All checks passing:** Proceed to Phase 1c runbook (data migration — separate document, pending).
**Any check failing:** Resolve before proceeding. Do not begin data migration on a pool with unresolved errors.

---

*IT Operations — Computational Resources & Uptime Division (ITCRuD)*
*Not A Real Company (NARC) — Making Fake Work Feel Real Since 2025*
*© 2025 NARC — All rights pretend.*

---

**Related Documents:**
- IT-Plan-Internal-InfrastructureRefresh2026.md
- IT-SystemDesign-Internal-InfrastructureRefresh2026.md
- CR-2026-001 — NAS Platform Replacement and Infrastructure Expansion
- CR-2026-002 — PERC H710 IT Mode Flash
- CR-2026-003 — CPU Swap E5-2695 v2
- ADR-003 — NIC Allocation (project Gitea repository)
- ADR-005 — TrueNAS VM Configuration (project Gitea repository)
- Proxmox PCIe Passthrough: https://pve.proxmox.com/wiki/PCI(e)_Passthrough
- TrueNAS SCALE 24.10 Documentation: https://www.truenas.com/docs/scale/24.10/