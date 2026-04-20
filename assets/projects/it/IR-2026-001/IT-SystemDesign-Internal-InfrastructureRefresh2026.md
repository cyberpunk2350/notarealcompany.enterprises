# ![NARC Logo](../../../../images/narc-logo.svg)
# System Design Document — Infrastructure Refresh 2026-001

**Classification:** INTERNAL — Red Clearance and Above<br>
**Clearance Required:** Red and above<br>
**Document Owner:** IT Operations — Computational Resources & Uptime Division (ITCRuD)<br>
**IT Director:** [REDACTED]<br>
**Version:** 1.0 — Draft<br>
**Date:** 2026-03-21<br>

---

## 1. Executive Summary

NARC's primary storage platform has been designated a Legacy Optimization Opportunity. The hardware is failing. The backup strategy was, until recently, "essentially vibes." The Compliance Bot flagged this. Victor Watchful was notified. Remediation is underway.

This document describes the target architecture for Infrastructure Refresh 2026-001: a Dell PowerEdge R720xd running Proxmox VE 9 as the primary hypervisor host, with TrueNAS SCALE operating as a virtual machine with direct PCIe passthrough of the storage controller. The design maximizes hardware utilization, preserves ZFS data integrity via native drive ownership, and integrates the new host into the existing Proxmox cluster for unified management.

All significant design decisions are documented in Architecture Decision Records (ADR-001 through ADR-006) maintained in the project Gitea repository. Citizens who wish to understand why a choice was made are directed to the relevant ADR. Citizens who do not wish to understand are still required to comply with the outcome.

---

## 2. Requirements

### Functional

- Replace pve1 OMV NAS with a ZFS-based NAS platform capable of hosting the Jellyfin media library and a separate sensitive data tier
- Migrate all existing data from pve1 to the new platform with integrity verification
- Establish a Proxmox Backup Server for VM/LXC backup coverage and sensitive data replication
- Join new host (pve5) to the existing Proxmox cluster
- Upgrade existing cluster nodes (pve2, pve3) to Proxmox VE 9
- Stand up two new cluster nodes (pve4, pve6)
- Document all infrastructure in Netbox
- Maintain FOSS compliance across all platform selections

### Non-Functional

- ZFS must have direct drive ownership — no hardware RAID abstraction layer between ZFS and the drives
- TrueNAS VM must be pinned to the correct NUMA node on the dual-socket host — crossing NUMA boundaries is not acceptable and will be noted
- iDRAC port must remain isolated at all times. Alex Firewall will know if it is not
- All tooling selections must be open source. Unraid is not open source. This has been decided. Do not reopen it
- Data migration must be validated by checksum before pve1 is decommissioned
- Legacy platform decommission is a standalone phase — it may not begin until Phase 1 exit criteria are fully met

---

## 3. Architecture

### 3.1 Host Platform — pve5 (Dell PowerEdge R720xd)

| Component | Specification |
|---|---|
| CPU | 2× Intel Xeon E5-2695 v2 — 12 cores / 24 threads each (48 total) |
| RAM | 256GB DDR3 non-ECC |
| Storage controller | Dell PERC H710 D1 Mini — flashed to IT mode (LSI mpt3sas driver) |
| Primary data drives | 6× 26TB SATA HDD (recertified) — front bays 1–6 |
| Future data drives | 5× 12TB SATA HDD (from pve1) — front bays 7–11 |
| Hot spare bay | Front bay 12 — uncommitted |
| OS drives | 2× 2TB SATA SSD — rear bays (onboard Intel SATA controller) |
| Networking | Dual-port 10GbE card + 4× onboard 1GbE + dedicated iDRAC |
| Remote management | iDRAC (dedicated port, isolated) |
| Hypervisor | Proxmox VE 9 |

**Critical implementation note:** The rear-bay SATA ports route through the onboard Intel SATA controller, not the H710. The OS drives are therefore on a completely independent controller path from the data drives. The H710, when passed through to the TrueNAS VM, takes only the front-bay drives. This must be physically verified before VM creation. It is in the Phase 1a checklist. It is also in this document. It is in four other documents as well. If it is still missed, ITCRuD will not feel responsible.

### 3.2 Network Allocation — pve5

| Port | Assignment |
|---|---|
| iDRAC | Dedicated iDRAC management — isolated, non-negotiable |
| 10GbE port 1 | PCIe passthrough → TrueNAS VM (NAS data traffic) |
| 10GbE port 2 | Proxmox host bridge (host management + VM traffic) |
| 1GbE × 2 | Proxmox management bond (802.3ad or active-backup) |
| 1GbE × 2 | VM bridge (general VM/LXC connectivity) |

### 3.3 TrueNAS SCALE VM

| Parameter | Value |
|---|---|
| Machine type | q35 |
| BIOS | OVMF (UEFI) |
| vCPU | 8 (host type) |
| RAM | 64GB |
| Boot disk | 32GB VirtIO — separate from ZFS data pools |
| Storage controller | H710 PCIe passthrough |
| NIC | 10GbE port 1 PCIe passthrough (VirtIO fallback — see ADR-003) |
| NUMA | Pinned to the socket owning H710 and 10GbE card |
| Platform | TrueNAS SCALE 24.10 (Electric Eel) |

### 3.4 ZFS Storage Pools

**Pool 1 — Media (Phase 1b)**

| Parameter | Value |
|---|---|
| Drives | 6× 26TB SATA HDD — front bays 1–6 |
| Layout | RAIDZ2 (6-wide) |
| Usable capacity | ~104TB |
| Fault tolerance | 2 simultaneous drive failures |
| Primary dataset | Jellyfin media library |
| Compression | LZ4 |
| Scrub schedule | Weekly |
| Rationale | Media is rebuildable; space efficiency of RAIDZ2 justified over mirrors — see ADR-002 |

**Pool 2 — Sensitive Data (Phase 1d)**

| Parameter | Value |
|---|---|
| Drives | 5× 12TB SATA HDD (from pve1) — front bays 7–11 |
| Layout | Mirror pairs (preferred) or RAIDZ1 — decided at install time pending SMART assessment |
| Fault tolerance | 1 drive per pair (mirrors) or 1 drive (RAIDZ1) |
| Compression | LZ4 |
| Scrub schedule | Weekly |
| Replication target | PBS on Datto S4P2 (Phase 3) |
| Rationale | Sensitive data warrants faster resilver and smaller exposure window |

### 3.5 Proxmox Backup Server — Datto S4P2

| Component | Specification |
|---|---|
| CPU | Intel Xeon D-2143IT (8 cores / 16 threads) |
| RAM | 32GB DDR4 |
| OS drive | 240GB SSD (dedicated internal) |
| Datastore drives | 2× 1TB HDD + 1× 1TB HDD spare → 3-drive RAIDZ1 ZFS datastore (~2TB usable) |
| M.2 slot | Type TBD (NVMe vs SATA) — verify before purchasing optional NVMe upgrade |
| Networking | 2× 10GbE |
| Platform | Proxmox Backup Server (latest stable) |
| Role | VM/LXC backups + sensitive data replication target from TrueNAS |

### 3.6 Proxmox Cluster — Target State

| Hostname | Hardware | Role | Status |
|---|---|---|---|
| pve1 | Legacy NAS host | Decommission (Phase 2) | Active / Legacy |
| pve2 | TBD | Existing cluster node — PVE9 upgrade (Phase 5a) | Active |
| pve3 | TBD | Existing cluster node — PVE9 upgrade (Phase 5b) | Active |
| pve4 | Dell Optiplex | New cluster node (Phase 8a) | Pending |
| pve5 | Dell R720xd | Primary NAS host + cluster node (Phase 4) | In Progress |
| pve6 | Dell R630 | New cluster node (Phase 8b) | Pending |

---

## 4. Data Flow

### 4.1 Media Serving (Jellyfin)

```
Client request → Jellyfin LXC (Proxmox)
              → NFS/SMB mount → TrueNAS VM
              → ZFS media pool (6× 26TB RAIDZ2)
              → H710 (IT mode) → Physical drives
```

### 4.2 Data Migration (Phase 1c)

```
pve1 OMV NAS → rsync or ZFS send/receive (TBD — see ADR open item)
            → TrueNAS VM media pool
            → Checksum validation
            → Jellyfin LXC mount point update
            → pve1 goes idle → Phase 2 decommission authorized
```

Transfer method (rsync vs ZFS send/receive) is an open design decision. rsync is simpler and does not preserve ZFS snapshots. ZFS send/receive preserves snapshot history but requires compatible pool state. Decision required before Phase 1c begins.

### 4.3 Backup Flow (Phase 3+)

```
Proxmox VMs/LXCs → PBS agent → Datto S4P2 (PBS datastore)
TrueNAS sensitive data pool → ZFS replication → Datto S4P2 (ZFS dataset)
```

Note: PBS speaks its own backup protocol for VM/LXC backups. TrueNAS ZFS replication to the Datto uses a separate ZFS dataset on the Datto host, not the PBS datastore. Both run on the same appliance concurrently.

### 4.4 IOMMU / PCIe Passthrough

```
Proxmox host (intel_iommu=on iommu=pt)
  └── IOMMU group [H710] → TrueNAS VM (drives)
  └── IOMMU group [10GbE port 1] → TrueNAS VM (NIC)
  └── IOMMU group [remaining] → Proxmox host / other VMs
```

IOMMU groupings must be verified post-CPU swap. If H710 or 10GbE card shares a group with other required devices, fallback configurations apply — see ADR-003 and ADR-005.

---

## 5. Security Considerations

| Concern | Design Response |
|---|---|
| iDRAC exposure | Dedicated port, isolated network segment, never bridged — Alex Firewall has issued standing orders |
| Drive access from TrueNAS VM | H710 passed directly to VM; Proxmox host has no access to data drives — separation is architectural |
| Non-ECC RAM + ZFS | Known tradeoff; accepted for media workload; documented in ADR-005; Alex Firewall's opinions are on file |
| pve1 decommission before data validation | Phase 2 is gated on Phase 1 exit criteria; pve1 must be idle and migration validated before decommission proceeds |
| Cluster quorum during pve1 decommission | pve1 cluster master role must be identified and transferred before Phase 2 — failure to do this risks cluster quorum loss; this has been elevated to a blocking open question |
| Sensitive data exposure during migration | Migration traffic stays on internal 10GbE segment; no external exposure |
| PBS datastore access | PBS on dedicated Datto appliance; replication traffic on dedicated 10GbE port |

Citizens are reminded that security is not optional. Victor Watchful is always watching. Lovingly.

---

## 6. Maintenance Plan

**ZFS scrubs:** Weekly on both pools. Monthly is insufficient for drives at this scale. This is not a suggestion.

**ZFS snapshots:** Scheduled on all datasets. Retention policy to be designed before pool creation. "Configure it later" is how retention policies never get configured.

**Firmware baselines:** R720xd BIOS version, H710 IT mode firmware, and iDRAC firmware must be recorded before Phase 1b begins. These are rollback reference points. They do not exist in the record yet. This is a known gap.

**Drive health monitoring:** SMART checks scheduled via TrueNAS. Weekly short tests; monthly long tests on media pool drives. 12TB drives from pve1 must be assessed before pool creation — they are coming off a failing system.

**PBS retention:** Backup retention policy for VM/LXC backups to be configured at PBS standup (Phase 3). Retention must balance datastore capacity (~2TB usable) against backup coverage requirements.

**ADR maintenance:** ADR-001 through ADR-005 are currently Draft status — they do not yet reflect Decisions 23–37 identified during the post-planning review. ADR updates are required before the Gitea repository is considered current. This is noted. It will be resolved.

**Cluster PVE version alignment:** All cluster nodes must reach PVE9 before cluster features requiring version parity are used. Mixed-version clusters have constraints. The upgrade sequence (Phase 5) must be completed before Phase 8 new host standups join the cluster.

---

*IT Operations — Computational Resources & Uptime Division (ITCRuD)*
*Not A Real Company (NARC) — Making Fake Work Feel Real Since 2025*
*© 2025 NARC — All rights pretend.*

---

**Related Documents:**
- IT-Plan-Internal-InfrastructureRefresh2026.md
- IT-HardwareAcceptance-Internal-pve5-2026.md (HAR-2026-001)
- IT-Runbook-Internal-pve5-TrueNASVMStandup-2026.md
- IT-MeetingMinutes-Internal-InfrastructurePlanningSession-2026.md (MIN-2026-001)
- PR-2026-001 — Infrastructure Refresh 2026-001 Primary Hardware Acquisition
- CR-2026-001 — NAS Platform Replacement and Infrastructure Expansion
- CR-2026-002 — PERC H710 D1 Mini IT Mode Flash
- CR-2026-003 — CPU Swap E5-2695 v2
- ICR-2026-003 — ECC/Non-ECC RAM Incompatibility Incident
- Project Gitea repository (ADR-001 through ADR-006): https://git.mylab.zip
