# ![NARC Banner](../images/narc-banner.svg)

---

**NOT A REAL COMPANY (NARC)**
**INTERNAL MEMORANDUM**

| | |
|---|---|
| **TO:** | All Interested Parties, Red Clearance and Above |
| **FROM:** | IT Operations — Computational Resources & Uptime Division (ITCRuD) |
| **IT Director:** | [REDACTED] |
| **CC:** | Robert Lee, COO; Alex Firewall, CISO |
| **RE:** | Infrastructure Refresh 2026-001 — Storage Architecture and Network Allocation |
| **DATE:** | 2026-03-21 |
| **CLASSIFICATION:** | ![Internal](../images/seals/internal.svg) INTERNAL — Red Clearance and Above |
| **APPROVED BY:** | ![Approved by the Computer](../images/seals/approved-by-computer.svg) |

**Summary:** ZFS pool layout for the primary media pool has been ratified as RAIDZ2 (6-wide, ~104TB usable). The secondary sensitive data pool will use mirror pairs at installation time. The PERC H710 D1 Mini has been flashed to IT mode using the fohdeesha crossflash guide. NIC allocation assigns the 10GbE port 1 to TrueNAS VM passthrough. All decisions are recorded in Architecture Decision Records ADR-002 through ADR-005. The vdev layout is permanent. This has been noted in at least four separate documents now.

*Alex Firewall reviewed this memo and confirmed that "permanent" means what it says.*

---

## ZFS: Why It, and How We're Using It

If you're building a NAS in 2026 and you're not using ZFS, you owe yourself an explanation. ZFS provides end-to-end data integrity — it checksums every block at write time, verifies at read time, and can detect and repair corruption automatically when redundancy is available. It handles snapshots natively (instantaneous, space-efficient copy-on-write). It has built-in RAID management. And its Adaptive Replacement Cache (ARC) uses available RAM as a read cache, which is why giving the TrueNAS VM 64GB of RAM matters — that's 64GB of hot data cache for a NAS that's primarily going to be serving large media files.

There's good introductory ZFS material in the [TrueNAS documentation](https://www.truenas.com/docs/scale/24.10/) if you want a deeper dive. What follows is the specific decisions I made and why.

---

## Deciding How to Arrange Six 26TB Drives

This is the decision that's worth the most explanation, because it's also the one you can't undo.

ZFS organizes drives into "vdevs" — virtual devices — and pools are built from one or more vdevs. The layout of a vdev is **permanent**. You can add vdevs to a pool, but you can't change the layout of an existing vdev without destroying and recreating it. This is the most important thing to know before you run `zpool create`.

For six 26TB drives, the two realistic options were:

**RAIDZ2 (6-wide):** All six drives in a single parity vdev with double-parity. Any two drives can fail simultaneously and the pool survives. ~104TB usable. 67% space efficiency.

**3× Mirror pairs:** Three pairs of mirrored drives. One drive per pair can fail. ~78TB usable. 50% space efficiency. Resilver time: hours. Resilver time on RAIDZ2 with 26TB drives: potentially 48–96+ hours.

That resilver gap is the crux of the decision. When a drive fails in a RAIDZ2 pool, the system reconstructs the missing data by reading every block from every remaining drive and recalculating parity. On 26TB drives under real load, that takes days, not hours. During those days, if a second drive fails — you lose the pool.

The conventional argument is that mirrors are safer for large drives, and it's correct. But the conventional argument doesn't account for *what's in the pool*. My primary pool is a media library: movies, TV shows, content that's annoying to lose but fully rebuildable from original sources. The ~26TB I'd give up to use mirrors instead of RAIDZ2 is a real cost for a media library. So I went with RAIDZ2, eyes open on the resilver risk.

The second pool — 5× 12TB drives from the old NAS, used for actual sensitive data — will use mirror pairs. Different content, different tolerance for risk, different call. That layout decision will be made when those drives are installed, after running SMART checks on them. They're coming off a failing system, so not assuming anything about their health.

All of this is in [ADR-002](../../../docs/decisions/ADR-002-zfs-pool-layout.md).

---

## ZFS Configuration Defaults

A few settings that apply to all pools:

**LZ4 compression** — enabled on all datasets. The CPU overhead is negligible on modern hardware. The I/O reduction is real. There's no reason not to.

**Weekly scrubs** — ZFS scrubs read every block and verify checksums, catching silent corruption before it becomes a problem. Weekly is the right cadence for drives at this scale with this much data on them. Monthly isn't frequent enough.

**Snapshots** — scheduled on all pools. Snapshots protect against accidental deletion and filesystem corruption. They're not a backup substitute (they're on the same pool), but they're valuable and essentially free. Retention policy is being designed separately before the pools are created.

**Deduplication** — off. ZFS dedup has substantial RAM requirements and provides near-zero benefit for media files. For anyone curious, TrueNAS 24.10 (Electric Eel) introduced "Fast Dedup" which significantly reduces the memory overhead. It's still experimental. I'm not testing experimental dedup on a production media library.

---

## The PERC H710 D1 Mini — Flashing to IT Mode

This is the one that requires the most explanation for anyone who hasn't done it before.

The R720xd came with a Dell PERC H710 D1 Mini — a hardware RAID controller. In its default configuration, it presents drives to the OS as virtual RAID volumes. That's great for traditional RAID setups and completely incompatible with ZFS.

ZFS needs to own the drives directly. It needs to see SMART data, sector information, drive-level errors. It needs to manage redundancy itself. A hardware RAID controller sitting between ZFS and the drives defeats the entire integrity model.

The fix is to flash the H710 from RAID mode to **IT mode** (Internal Target mode — HBA pass-through). In IT mode, the controller steps aside and presents each drive as an individual block device. ZFS sees the drives directly. Problem solved.

The resource I used: **[fohdeesha.com/docs/perc.html](https://fohdeesha.com/docs/perc.html)**, with the card-specific procedure at **[fohdeesha.com/docs/H710-D1.html](https://fohdeesha.com/docs/H710-D1.html)**. This guide is the one you want for Dell PERC cards specifically. The reason you can't just use a generic LSI crossflash guide is that iDRAC checks the PCI vendor values of cards in the dedicated storage slot before allowing the server to boot. The fohdeesha guide solves this specifically, with a prepackaged ISO that handles both the FreeDOS and Debian flashing steps.

A few things to know before you do this:

- **It's a one-way operation** in practice. You can re-flash back to RAID mode, but there's no quick undo. Have the firmware files archived before you start.
- **Remove the RAID battery** before flashing. The IT firmware doesn't know the battery exists, and in some cases it can interfere with the flash process.
- **Remove all drives** from the front bays before starting. Drives don't get touched by the flash, but their presence can cause the process to fail.
- **Disable Virtualization Technology and SR-IOV in BIOS** before flashing, then re-enable them afterward.
- **Switch to BIOS boot mode** (not UEFI) for the flash procedure, then switch back.

Two performance benefits worth knowing about, from the fohdeesha guide: IT mode switches the OS driver from MegaRAID to the much simpler `mpt3sas` driver, which is what enables correct SMART data access. And the adapter's queue depth jumps from 25 (stock Dell firmware) to 600. For a ZFS pool under sustained I/O, that difference is real.

Post-flash, drives present as individual block devices in Proxmox. Confirmed operational.

One important physical detail: **the rear-bay SATA ports on the R720xd route through the onboard Intel SATA controller, not the H710.** The Proxmox OS drives (rear bay SSDs) are on a completely independent path. When the H710 gets passed through to the TrueNAS VM, it takes only the front-bay drives. The OS drives are unaffected. This needs to be physically verified before the VM is created — it's in the Phase 1a checklist.

---

## NIC Allocation

The R720xd has: one dedicated iDRAC port, one dual-port 10GbE card, and four onboard 1GbE ports.

With TrueNAS running as a VM and Proxmox needing its own management network, the allocation needs to be deliberate.

| Port | Assignment | Why |
|---|---|---|
| iDRAC | iDRAC management only | Always isolated. Alex Firewall. Non-negotiable. |
| 10GbE port 1 | PCIe passthrough → TrueNAS VM | Full line rate on NAS traffic; no hypervisor overhead |
| 10GbE port 2 | Proxmox host bridge | Host management and general VM traffic |
| 1GbE × 2 | Proxmox management bond | Redundant management — 802.3ad or active-backup |
| 1GbE × 2 | VM bridge | General VM/LXC connectivity |

The key call is passing the 10GbE port directly to TrueNAS rather than using a VirtIO NIC through Proxmox's bridge. PCIe passthrough gives TrueNAS the physical NIC at driver level — full line rate, no virtualization overhead in the data path. For a NAS serving 10GbE clients, this is the right architecture.

The prerequisite is that the 10GbE card sits in its own IOMMU group. If both ports of the dual-port card share an IOMMU group, passing port 1 takes port 2 with it, and Proxmox loses its 10GbE. IOMMU grouping verification is a Phase 1a task. The fallback — a VirtIO NIC — works fine and has near-negligible overhead at 10GbE, so it's a real option if needed, not just a consolation.

If the switch supports it, configure MTU 9000 (jumbo frames) end-to-end on the 10GbE NAS path. Large sequential transfers — exactly what a media NAS does — benefit from reduced packet overhead. The catch: every endpoint in the path has to match. TrueNAS, the Proxmox bridge or passthrough NIC, and the switch port all need to be set to 9000. One mismatch and you get packet loss that's annoying to diagnose.

For the [Proxmox PCIe passthrough documentation](https://pve.proxmox.com/wiki/PCI(e)_Passthrough), that wiki page is your reference for the IOMMU setup steps and verification commands.

---

## TrueNAS VM Spec

For reference:

| Parameter | Value |
|---|---|
| Machine type | q35 |
| BIOS | OVMF (UEFI) |
| vCPU | 8, type: host |
| RAM | 64GB |
| Boot disk | 32GB VirtIO — separate from data pool |
| Storage controller | H710 PCIe passthrough |
| NIC | 10GbE PCIe passthrough (VirtIO fallback) |
| NUMA | Pinned to socket owning H710 and 10GbE |

On NUMA: the R720xd is dual-socket. Memory access that crosses NUMA boundaries — accessing RAM attached to the other socket — has a measurable latency and bandwidth penalty. Pinning the TrueNAS VM's vCPUs and RAM to the same NUMA node as the PCIe devices being passed through avoids this. It's a configuration step that's easy to skip because the system works without it — just not as well. More detail in [ADR-005](../../../docs/decisions/ADR-005-truenas-vm-config.md).

---

*Post 3 covers the project documentation approach — Architecture Decision Records, the Gitea repository, and what it looks like to use an AI assistant as a planning partner for an infrastructure project.*

---

**References**
- [Dell PowerEdge R720/R720xd Owner's Manual](https://www.dell.com/support/manuals/en-us/poweredge-r720/720720xdom-v3) — Dell Support
- [PERC H310/H710/H710P/H810 IT Crossflashing Guide](https://fohdeesha.com/docs/perc.html) — fohdeesha.com
- [H710 D1 Mini Specific Procedure](https://fohdeesha.com/docs/H710-D1.html) — fohdeesha.com
- [TrueNAS SCALE 24.10 (Electric Eel) Documentation](https://www.truenas.com/docs/scale/24.10/) — iXsystems
- [TrueNAS SCALE Download](https://www.truenas.com/download-truenas-scale/) — iXsystems
- [Proxmox VE PCIe Passthrough](https://pve.proxmox.com/wiki/PCI(e)_Passthrough) — Proxmox Wiki
- [Intel Xeon E5-2695 v2 Specifications](https://www.intel.com/content/www/us/en/products/sku/75281/intel-xeon-processor-e52695-v2-30m-cache-2-40-ghz/specifications.html) — Intel ARK

---

*IT Operations — Computational Resources & Uptime Division (ITCRuD)*
*Not A Real Company (NARC) — Making Fake Work Feel Real Since 2025*
*© 2025 NARC — All rights pretend.*