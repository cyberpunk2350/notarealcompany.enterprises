# NARC Infrastructure Refresh 2026-001 — Post 2: Storage Architecture and Network Resource Allocation — An Authorized Technical Briefing

**DOCUMENT CLASSIFICATION:** Technical — Restricted Distribution (those who care about ZFS)
**ISSUING DEPARTMENT:** Infrastructure & Computational Resources Division (ICRD)
**DOCUMENT STATUS:** Approved for Publication Pending Field Verification of Several Items
**CLEARANCE REQUIRED:** Orange and above. Citizens of lower clearance are welcome to read it but are advised that the ZFS section may cause distress.

---

> **EDITOR NOTES — POST 2 (NARC VOICE)**
>
> **The voice challenge here:** Post 2 is the most technically dense, which means the corporate voice has to carry more actual information without losing the joke. The trick is to treat every technical decision as if it went through a formal approval process. ZFS pool layout isn't a design choice — it's a "Storage Architecture Ratification." The PERC H710 flash isn't a procedure — it's an "Authorized Controller Mode Transition."
>
> **Good recurring beats for this post:**
> - "The [X] Committee convened and ratified the following" — for every decision
> - Footnotes or parenthetical asides that acknowledge the absurdity without breaking character
> - Reference to memos that don't exist yet but could: "per Memo ICR-2026-007: On the Permanence of ZFS Vdev Decisions and Why This Is Not the Division's Fault"
> - The phrase "has been noted" for anything that went slightly wrong or was awkward
>
> **Things to update before publishing:**
> - Backplane type (direct-attach vs expander) — currently unverified open question
> - BIOS version and H710 firmware version — not yet captured
> - Drive installation status — unverified
>
> **Alternative paths for rewrite:**
> - **Pure technical spec format with corporate headers:** Each section becomes a formal spec document subsection with revision history. High commitment, very funny if done well.
> - **Incident report format for the PERC flash:** Write the IT mode flash as a Change Management Request (CMR) with risk assessment, rollback plan, and post-implementation review. The "rollback: not possible" field is the punchline.
> - **FAQ format:** "Q: Why not just use RAID5 like a normal person? A: NARC thanks you for your question. NARC does not engage with hypotheticals."

---

## Preamble

This document provides an authorized technical summary of storage architecture and network resource allocation decisions ratified during the NARC Infrastructure Refresh 2026-001 planning phase. All decisions documented herein have been evaluated, reviewed, and approved through the appropriate internal governance process.

The appropriate internal governance process was thorough.

---

## Section 1 — Storage Architecture

### 1.1 Platform Selection: ZFS

Following evaluation of available storage platforms, the Infrastructure Division ratified ZFS as the filesystem of record for all NARC storage pools. This decision was not controversial. ZFS provides end-to-end data integrity via checksumming, native snapshot and replication capabilities, integrated RAID management, and an adaptive read cache that scales with available RAM — of which NARC now has 256GB.

Any platform that does not use ZFS was evaluated and found to represent an insufficient commitment to **Data Asset Preservation Excellence**. The evaluation results have been filed.

### 1.2 Pool Layout Ratification — Primary Media Pool

The Storage Architecture Committee convened to evaluate vdev layout options for the six 26TB drives allocated to the primary media pool. The committee consisted of the Infrastructure Division, a whiteboard, and approximately forty-five minutes of focused deliberation.

Two options were formally evaluated:

**Option A — RAIDZ2 (6-wide)**
- Usable capacity: approximately 104TB
- Fault tolerance: two simultaneous drive failures
- Resilver duration on 26TB drives: 48–96+ hours
- Space efficiency: 67%

**Option B — 3× Mirror Pairs**
- Usable capacity: approximately 78TB
- Fault tolerance: one drive per pair
- Resilver duration: hours, not days
- Space efficiency: 50%

The Committee noted the following regarding resilver duration: a 72-hour resilver window on recertified drives — drives which, by definition, have prior operational history and elevated failure correlation — represents a meaningful exposure period during which a second failure would result in total pool loss. The Committee found this observation technically correct and noted it in the record.

The Committee then noted that the primary pool holds media content — movies, television programming, entertainment assets — which, while operationally significant to NARC's Quality of Life Initiative, is fundamentally rebuildable. Loss of the pool would result in time expenditure and bandwidth consumption, not permanent asset destruction.

**Ratification:** RAIDZ2 (6-wide) for the primary media pool.

The 26TB of additional usable capacity relative to the mirror option was deemed sufficient justification given the rebuildable nature of the content. Citizens are advised that this reasoning does not extend to non-rebuildable data, which is why a second pool exists.

> *Per Memo ICR-2026-004: ZFS Vdev Layout Decisions Are Permanent and This Is Not a Drill — citizens are reminded that vdev layout cannot be changed after pool creation without destroying and recreating the pool. The Storage Architecture Committee has internalized this. The Committee would prefer that you also internalize it before typing zpool create.*

### 1.3 Secondary Sensitive Data Pool

The secondary pool, utilizing five 12TB drives sourced from the legacy platform (pve1), will be configured with mirror pairs rather than RAIDZ. The reasoning is the inverse of Section 1.2: the data is less rebuildable, the drives are older and of uncertain health, and faster resilver time is the correct tradeoff at this tier.

Pool layout will be finalized at installation time, following SMART assessment of the drives. The drives are coming off a system the Infrastructure Division has described, in official communications, as "older and failing." Pre-installation health verification is mandatory. The Committee does not expect surprises. The Committee is prepared for surprises.

### 1.4 Standard ZFS Configuration

The following configuration applies to all NARC storage pools and has been approved without dissent:

| Parameter | Value | Rationale |
|---|---|---|
| Compression | LZ4 | Negligible CPU cost; meaningful I/O reduction; no reason not to |
| Scrub schedule | Weekly | Monthly is insufficient at this drive scale |
| Deduplication | Disabled | Media does not deduplicate; RAM overhead is substantial; not approved |
| Snapshots | Scheduled — policy TBD | Protects against accidental deletion; schedule to be ratified |

The snapshot retention policy is pending ratification by the Infrastructure Division. The Infrastructure Division has not yet decided. The Infrastructure Division will decide before configuring pool snapshots. This is documented as an open item and not as a failure. The distinction matters.

---

## Section 2 — The PERC H710 Controller Transition

### 2.1 Background

The R720xd arrived equipped with a Dell PERC H710 RAID controller. In its factory configuration, the H710 presents drives to the operating system as virtual RAID volumes rather than individual block devices. This is appropriate for traditional RAID deployments and completely incompatible with ZFS.

ZFS requires direct drive access. It checksums data end-to-end, manages its own redundancy, and requires visibility into SMART data and drive-level error reporting to function correctly. A hardware RAID controller between ZFS and the drives undermines the entire integrity model. The Infrastructure Division considers this unacceptable.

### 2.2 The Authorized Controller Mode Transition

The H710 D1 Mini was flashed using the procedure documented by fohdeesha at [fohdeesha.com/docs/perc.html](https://fohdeesha.com/docs/perc.html), with the card-specific guide at [fohdeesha.com/docs/H710-D1.html](https://fohdeesha.com/docs/H710-D1.html). This guide addresses the Dell-specific iDRAC complication that makes generic LSI crossflash guides inapplicable to this card — iDRAC checks PCI vendor values in the storage slot before allowing boot, which requires a different approach. The guide is thorough and has been added to the ITCRuD reference library (a folder on Gitea).

Two benefits beyond ZFS compatibility: IT mode switches the OS driver from MegaRAID to `mpt3sas` — enabling correct SMART data access — and increases the adapter's queue depth from 25 (stock Dell firmware) to 600. For a ZFS pool under sustained load, queue depth is a real operational metric. The Compliance Bot has been informed. The Compliance Bot does not currently track queue depth. This has been noted as a monitoring gap.

**Change Management Summary:**

| Field | Value |
|---|---|
| Change type | Firmware flash — controller mode transition |
| Reversibility | Not reversible without re-flashing |
| Risk assessment | Acceptable — procedure is well-documented |
| Rollback plan | Re-flash (see firmware archive) |
| Post-implementation status | Confirmed successful — drives presenting as individual block devices |
| Affected parties | All future storage operations on pve5 |

The irreversibility of this change has been noted, documented, and accepted. Future Infrastructure Division personnel should not attempt to restore RAID mode without understanding that they will be re-flashing the controller from scratch. This note exists for their benefit. They are welcome.

### 2.3 Important Operational Detail

The rear-bay SATA ports on the R720xd are on the onboard Intel SATA controller, not the H710. The Proxmox OS drives (rear bay SSDs) are therefore on a completely independent controller path from the data drives. When the H710 is passed through to the TrueNAS VM, it takes only the front-bay drives with it. The OS drives are unaffected.

This separation is intentional, structurally important, and must be physically verified before VM creation proceeds. The verification procedure is documented in the Phase 1a checklist. The Infrastructure Division trusts that field personnel will complete it. The Infrastructure Division has also documented it in three separate places as a precaution.

---

## Section 3 — Network Resource Allocation

### 3.1 Available Assets

The R720xd's network assets, inventoried for allocation:

- 1× iDRAC dedicated management port
- 1× dual-port 10GbE card
- 4× onboard 1GbE ports

### 3.2 Allocation Ratification

The Network Resource Allocation Committee evaluated utilization options and ratified the following assignment:

| Port | Assignment | Authorization |
|---|---|---|
| iDRAC | Dedicated iDRAC — never bridged, never shared | Mandatory. Non-negotiable. Do not ask. |
| 10GbE port 1 | PCIe passthrough to TrueNAS VM | Ratified — full line rate on NAS data path |
| 10GbE port 2 | Proxmox host bridge | Ratified — host management and VM traffic |
| 1GbE × 2 | Proxmox management bond (802.3ad) | Ratified — redundant host management |
| 1GbE × 2 | VM bridge | Ratified — general VM/LXC connectivity |

The decision to pass 10GbE port 1 directly to the TrueNAS VM rather than presenting it as a virtualized NIC provides full physical line rate on the NAS data path with no hypervisor overhead. For a storage server serving 10GbE clients, this is the correct architecture.

**Prerequisite:** The dual-port 10GbE card must sit in its own IOMMU group, or port isolation must be achievable within the group. If both ports share an IOMMU group and cannot be separated, passing port 1 means Proxmox loses port 2. The fallback — a VirtIO NIC on a Proxmox bridge — is functional but architecturally less satisfying. IOMMU grouping verification is a Phase 1a task. The Infrastructure Division is optimistic. The Infrastructure Division is also prepared for disappointment.

### 3.3 Jumbo Frames

MTU 9000 configuration on the 10GbE NAS path is recommended pending switch capability confirmation. Large sequential transfers — the primary workload of a media NAS — benefit from reduced packet overhead at larger frame sizes. The requirement is consistent MTU configuration across TrueNAS, the Proxmox bridge or passthrough NIC, and the switch port.

The switch model and 10GbE port configuration have not yet been confirmed. This is an open item. It has been documented as an open item. The Infrastructure Division considers "has been documented" a meaningful form of progress.

---

## Section 4 — TrueNAS VM Specification

The following VM specification was ratified by the Infrastructure Division and is reproduced here for operational reference:

| Parameter | Value |
|---|---|
| Machine type | q35 |
| BIOS | OVMF (UEFI) |
| vCPU | 8, type: host |
| RAM | 64GB |
| Boot disk | 32GB VirtIO (separate from data pool) |
| Storage | H710 PCIe passthrough |
| NIC | 10GbE PCIe passthrough (VirtIO fallback) |
| NUMA | Pinned to socket owning H710 and 10GbE card |

On NUMA pinning: the R720xd is a dual-socket system. Memory access across NUMA boundaries carries measurable performance penalties. The TrueNAS VM's vCPUs and RAM must be pinned to the same NUMA node as the PCIe devices being passed through. This is a non-obvious configuration step that is easy to skip and produces a system that works but performs suboptimally in ways that are difficult to diagnose after the fact.

The Infrastructure Division has documented this requirement in the project repository, in the VM specification, in the handoff report, and now in this blog post. If it is still missed, the Infrastructure Division will have done everything it could. The Infrastructure Division will not feel responsible. The Infrastructure Division will, however, know.

Citizens wishing to implement this configuration may consult the [Proxmox PCIe Passthrough documentation](https://pve.proxmox.com/wiki/PCI(e)_Passthrough) for IOMMU setup and verification commands.

---

## Closing Remarks

The storage and network architecture for NARC Infrastructure Refresh 2026-001 has been ratified, documented, and is pending physical implementation. All decisions are recorded in the project repository in the format of Architecture Decision Records, which exist for the benefit of future Infrastructure Division personnel and/or anyone who asks "why did you do it this way."

The answer is in the repository.

*Post 3 covers the project documentation approach, the Architecture Decision Record system, and a candid assessment of AI-assisted infrastructure planning. It is recommended reading for Citizens interested in governance, documentation culture, and why the Infrastructure Division produces more paperwork than any other department in an organization with one employee.*

---

*This post is part of the NARC Infrastructure Refresh 2026-001 series.*
*All storage decisions have been ratified.*
*All network allocations have been authorized.*
*The vdev layout cannot be changed. This has been noted.*
*NARC: Making Fake Work Feel Real Since 2025.*

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