# ![NARC Banner](../images/narc-banner.svg)

# IT Operations Report — Storage Architecture and Network Resource Allocation
## NARC Infrastructure Refresh 2026-001: Technical Design Decisions

**Document Owner:** IT Operations — Computational Resources & Uptime Division (ITCRuD)<br>
**IT Director:** [REDACTED]<br>
**Reviewed By:** Robert Lee, COO / Alex Firewall, CISO<br>
**Approved By:** ![Approved by the Computer](../../images/seals/approved-by-computer.svg)<br>
**Version:** 1.0<br>
**Date:** 2026-03-21<br>
**Classification:** ![Internal](../../images/seals/internal.svg) INTERNAL — Red Clearance and Above<br>

---

> *This document contains technical content. Citizens who find ZFS confusing are reminded that confusion is a learning opportunity. Citizens who find ZFS obvious are reminded that overconfidence is a security risk. Alex Firewall monitors both conditions.*

---

## Executive Summary

This report documents the storage architecture and network allocation decisions ratified by ITCRuD for Infrastructure Refresh Initiative 2026-001. Decisions covered include ZFS pool layout, storage controller configuration, NIC allocation, and TrueNAS VM specification. All decisions are recorded in the project Architecture Decision Records (ADRs) available in the Gitea repository. This document provides the narrative context behind those records for the benefit of future ITCRuD personnel and/or Citizens who prefer prose to YAML.

---

## 1. ZFS — The Storage Platform of Record

Following evaluation, ZFS was ratified as the filesystem for all NARC storage pools. This decision was not controversial. ZFS provides end-to-end data integrity through checksumming at write and verification at read, native snapshot and replication capabilities, integrated redundancy management, and an adaptive read cache (ARC) that scales with available RAM. Further reading: [TrueNAS SCALE 24.10 ZFS documentation](https://www.truenas.com/docs/scale/24.10/).

NARC now has 256GB of RAM. The ARC is expected to perform well. The Computer is pleased.

Any storage platform that does not provide these capabilities was evaluated and found to be an insufficient commitment to **Happy Packets** — ITCRuD's internal metric for data that arrives intact. The metric was named by Chuck Cheerful during a joint department meeting and has not been un-named despite several attempts.

---

## 2. ZFS Pool Layout Decisions

### 2.1 Primary Media Pool — 6× 26TB Drives

The Storage Architecture sub-committee of ITCRuD (the division, a whiteboard, and approximately 45 minutes) evaluated two vdev layout options for the six 26TB drives.

**Option A — RAIDZ2 (6-wide)**
- Usable capacity: ~104TB
- Fault tolerance: any two simultaneous drive failures
- Resilver time on 26TB drives: 48–96+ hours under load
- Space efficiency: 67%

**Option B — 3× Mirror Pairs**
- Usable capacity: ~78TB
- Fault tolerance: one drive per pair
- Resilver time: hours, not days
- Space efficiency: 50%

The sub-committee noted that resilver duration on 26TB recertified drives presents a non-trivial exposure window. During a 72-hour resilver, a second drive failure would result in total pool loss. On recertified drives — drives with prior operational history and elevated failure correlation — this is a real risk. The sub-committee found this finding technically correct, noted it in the record, and then made the following determination:

The primary pool holds media content — movies, television, entertainment assets. This content is rebuildable. Loss of the pool would cost time and bandwidth, not irreplaceable data. The ~26TB capacity advantage of RAIDZ2 over mirrors is meaningful for a media library.

**Ratified: RAIDZ2 (6-wide).** The risk is accepted. The rationale is documented. The vdev layout is permanent.

This last point bears repeating: *the vdev layout cannot be changed after pool creation without destroying and recreating the pool.* This has been documented in ADR-002, in the Phase 1b task list, in the VM specification, and now in this report. If it is still wrong at implementation time, ITCRuD will have done everything it could.

### 2.2 Secondary Sensitive Data Pool — 5× 12TB Drives

The five 12TB drives being repurposed from the legacy platform (pve1) will form a second, independent pool for non-media data. Mirror pairs are the target layout for this pool — the inverse reasoning applies. Sensitive data warrants faster resilver time and a smaller exposure window, even at the cost of usable capacity.

Final layout will be confirmed at installation time, following SMART assessment of the drives. These drives are coming off a system ITCRuD has described in official communications as "older and failing." Pre-installation health verification is mandatory. The sub-committee does not anticipate surprises. The sub-committee is prepared for surprises.

### 2.3 Standard ZFS Configuration

The following defaults apply to all NARC pools:

| Parameter | Value | Notes |
|---|---|---|
| Compression | LZ4 | Near-zero CPU overhead; real I/O reduction |
| Scrub schedule | Weekly | Monthly is insufficient for drives at this scale |
| Deduplication | Disabled | No benefit for media; RAM overhead is prohibitive |
| Snapshots | Scheduled | Retention policy to be ratified before pool creation |

On deduplication: Dr. Sylvia Sparks (R&D) requested that deduplication be evaluated for the sensitive data pool "for science." The evaluation was conducted. The RAM requirements were found to be substantial. The request was declined. Dr. Sparks has been provided with the SMART data from the 12TB drives as a consolation research dataset.

---

## 3. The PERC H710 — Authorized Controller Mode Transition

### 3.1 The Problem With Hardware RAID and ZFS

The R720xd arrived equipped with a Dell PERC H710 RAID controller. In factory configuration, the H710 presents drives to the operating system as virtual RAID volumes rather than individual block devices. This is appropriate for traditional RAID deployments and fundamentally incompatible with ZFS.

ZFS manages storage integrity end-to-end. It checksums data at write, verifies at read, and handles its own redundancy. To function correctly, it requires direct access to individual drives — including SMART data, sector information, and drive-level error reporting. A hardware RAID controller sitting between ZFS and the drives breaks this model entirely.

Alex Firewall initially proposed that this was "a security boundary, not a problem." Alex Firewall was thanked for the perspective. The H710 was flashed to IT mode regardless.

### 3.2 IT Mode — What It Is

IT mode (Internal Target mode, sometimes called HBA mode) converts the H710 from a RAID controller into a simple pass-through HBA. In IT mode, every drive appears as an individual block device. ZFS sees the drives directly. SMART data is accessible. The controller gets out of the way and performs its function quietly and without complaint, which is the ideal operational posture for any component of NARC infrastructure.

The H710 D1 Mini was flashed using the procedure documented by fohdeesha at [fohdeesha.com/docs/perc.html](https://fohdeesha.com/docs/perc.html), with the card-specific guide at [fohdeesha.com/docs/H710-D1.html](https://fohdeesha.com/docs/H710-D1.html). This guide is required reading for this specific card — iDRAC checks PCI vendor values in the storage slot before allowing the server to boot, which means generic LSI crossflash guides do not apply. The fohdeesha guide solves this. It has been added to the ITCRuD reference library.

Two additional benefits worth noting: IT mode switches the OS driver from MegaRAID to `mpt3sas`, which is what enables correct SMART data access, and increases the adapter's queue depth from 25 (stock Dell firmware) to 600. For a ZFS pool under sustained load, queue depth is a real performance metric. The Compliance Bot has been informed. The Compliance Bot does not currently track queue depth. This has been noted as a monitoring gap.

The flash procedure has been completed and confirmed. Drives present correctly as individual block devices in Proxmox.

**Change record summary:**

| Field | Value |
|---|---|
| Change type | Firmware flash — RAID to IT mode |
| Reversibility | Not reversible without re-flashing |
| Rollback plan | Re-flash from archived firmware |
| Post-implementation status | Confirmed — operational |
| Approval | Approved by the Computer |

### 3.3 Critical Implementation Detail

The rear-bay SATA ports on the R720xd route through the onboard Intel SATA controller, not the H710. The Proxmox OS drives (rear bay SSDs) are therefore on a completely independent controller from the data drives. When the H710 is passed through to the TrueNAS VM, it takes only the front-bay data drives — the OS drives are unaffected.

This separation is architecturally important and must be physically verified before VM creation. The verification step is in the Phase 1a checklist. It is also now in this document. ITCRuD considers this an appropriate level of documentation for a step that, if skipped, would be problematic.

---

## 4. Network Resource Allocation

### 4.1 Available Assets

The R720xd's network inventory:

- 1× iDRAC dedicated management port
- 1× dual-port 10GbE card
- 4× onboard 1GbE ports

### 4.2 Allocation — Ratified by ITCRuD

| Port | Assignment | Notes |
|---|---|---|
| iDRAC | Dedicated iDRAC management | Isolated per standing directive. Non-negotiable. Alex Firewall. |
| 10GbE port 1 | PCIe passthrough → TrueNAS VM | Full line rate on NAS data path |
| 10GbE port 2 | Proxmox host bridge | Host management and VM traffic |
| 1GbE × 2 | Proxmox management bond (802.3ad) | Redundant host management |
| 1GbE × 2 | VM bridge | General VM/LXC connectivity |

Passing 10GbE port 1 directly to the TrueNAS VM — rather than presenting a virtualized NIC through Proxmox — eliminates hypervisor overhead on the storage network path and provides full physical line rate. For a NAS expected to serve media at 10GbE speeds to authorized personnel, this is the correct architecture.

**Prerequisite:** The 10GbE card must sit in its own IOMMU group, or port isolation must be achievable. If both ports share an IOMMU group, passing port 1 means Proxmox loses port 2 as well. IOMMU grouping verification is a Phase 1a task. The fallback — VirtIO NIC on a Proxmox bridge — is functional and has been documented in ADR-003 for cases where passthrough is not viable. Citizens implementing this configuration should consult the [Proxmox PCIe Passthrough documentation](https://pve.proxmox.com/wiki/PCI(e)_Passthrough) for IOMMU setup and verification commands.

**On jumbo frames:** MTU 9000 configuration on the 10GbE NAS path is recommended, pending switch capability confirmation. Large sequential transfers — the primary workload of a media NAS — benefit from reduced packet overhead at larger frame sizes. All endpoints must match: TrueNAS, the Proxmox bridge or passthrough NIC, and the switch port. One mismatch produces packet loss. The switch model has not been confirmed. This is an open item. It has been documented as an open item. Documentation of open items is itself a form of progress. The Compliance Bot agrees.

---

## 5. TrueNAS VM Specification

The following VM specification was ratified by ITCRuD and is documented in ADR-005:

| Parameter | Value |
|---|---|
| Machine type | q35 |
| BIOS | OVMF (UEFI) |
| vCPU | 8, type: host |
| RAM | 64GB |
| Boot disk | 32GB VirtIO — separate from data pool |
| Storage controller | H710 PCIe passthrough |
| NIC | 10GbE PCIe passthrough (VirtIO fallback) |
| NUMA | Pinned to socket owning H710 and 10GbE card |

On NUMA pinning: the R720xd is dual-socket. Memory access across NUMA boundaries carries measurable performance penalties. The TrueNAS VM's vCPUs and RAM must be pinned to the same NUMA node as the PCIe devices being passed through. This is a non-obvious step that produces a system which works but performs suboptimally in ways that are difficult to diagnose after the fact.

Robert Lee (COO) asked during review whether this was "the kind of thing that would only matter later." The answer is yes. It has been documented accordingly.

---

*Post 3 covers the project documentation approach — the Gitea repository, Architecture Decision Records, and the AI-assisted planning system. It is recommended reading for Citizens interested in governance, documentation culture, and why ITCRuD produces more paperwork than any other division in an organization of this size.*

---

*IT Operations — Computational Resources & Uptime Division (ITCRuD)*
*Not A Real Company (NARC) — Making Fake Work Feel Real Since 2025*
*© 2025 NARC — All rights pretend.*

---

**References**
- [Dell PowerEdge R720/R720xd Owner's Manual](https://www.dell.com/support/manuals/en-us/poweredge-r720/720720xdom-v3) — Dell Support
- [Dell PowerEdge R720/R720xd Owner's Manual (PDF)](https://dl.dell.com/topicspdf/poweredge-r720_owners-manual_en-us.pdf) — Dell
- [Intel Xeon E5-2695 v2 Specifications](https://www.intel.com/content/www/us/en/products/sku/75281/intel-xeon-processor-e52695-v2-30m-cache-2-40-ghz/specifications.html) — Intel ARK
- [PERC H310/H710/H710P/H810 IT Crossflashing Guide](https://fohdeesha.com/docs/perc.html) — fohdeesha.com
- [H710 D1 Mini Specific Procedure](https://fohdeesha.com/docs/H710-D1.html) — fohdeesha.com
- [TrueNAS SCALE 24.10 (Electric Eel) Documentation](https://www.truenas.com/docs/scale/24.10/) — iXsystems
- [TrueNAS SCALE Download](https://www.truenas.com/download-truenas-scale/) — iXsystems
- [Proxmox VE PCIe Passthrough](https://pve.proxmox.com/wiki/PCI(e)_Passthrough) — Proxmox Wiki