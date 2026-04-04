# ![NARC Banner](../images/narc-banner.svg)

# IT Operations Report — Infrastructure Modernization Initiative
## NARC Infrastructure Refresh 2026-001: Strategic Asset Acquisition and Platform Selection

**Document Owner:** IT Operations — Computational Resources & Uptime Division (ITCRuD)
**IT Director:** [REDACTED]
**Reviewed By:** Robert Lee, COO
**Approved By:** ![Approved by the Computer](../images/seals/approved-by-computer.svg)
**Version:** 1.0
**Date:** 2026-03-21
**Classification:** ![Internal](../images/seals/internal.svg) INTERNAL — Red Clearance and Above

---

> *This document has been reviewed for compliance with NARC Information Dissemination Policy 4.7.1. Citizens of Infrared clearance who have accessed this document are reminded that curiosity is a wellness concern. Please report to Chuck Cheerful immediately.*

---

## Executive Summary

The IT Operations department, via its Computational Resources & Uptime Division (ITCRuD), hereby submits this report documenting the rationale, decisions, and current status of Infrastructure Refresh Initiative 2026-001. The existing storage platform has been designated a Legacy Optimization Opportunity. A replacement platform has been procured, assessed, and partially deployed. This report covers the acquisition, platform selection, and architectural decisions made during the planning phase.

All decisions have been approved by the appropriate authority. The appropriate authority knows who they are.

---

## 1. Background — The Legacy Platform Situation

NARC's primary data storage infrastructure has operated beyond its projected service window. The platform — a five-drive RAID5 array managed via OpenMediaVault, hosted on a Proxmox instance designated pve1 — has served the organization without significant incident, if one does not count the incidents, which for the purposes of this report we are not counting.

A review of the platform's operational posture revealed the following:

- Hardware telemetry indicates the system is, in the assessment of ITCRuD, "making sounds."
- The backup and recovery posture was found to be insufficiently documented and operationally described by the division as "essentially vibes."
- The platform is approaching end of authorized operational life, a condition Robert Lee (COO) has noted in three separate stand-up meetings and one strongly worded calendar invite.

The Compliance Bot flagged the backup posture finding. Victor Watchful was notified. The situation has been remediated. The responsible parties have received feedback.

---

## 2. Strategic Asset Acquisition

Following internal review and budget authorization, ITCRuD procured a **Dell PowerEdge R720xd** through appropriate secondary-market channels. The Finance Department has agreed to classify the acquisition cost as a "Strategic Infrastructure Investment," which is distinct from an "Unplanned Capital Expenditure" in ways that are not worth examining too closely.

**Platform specifications as submitted to Robert Lee for approval:**

| Component | Specification | Status |
|---|---|---|
| CPU | 2× [Intel Xeon E5-2695 v2](https://www.intel.com/content/www/us/en/products/sku/75281/intel-xeon-processor-e52695-v2-30m-cache-2-40-ghz/specifications.html) — 48 threads total | Pending installation; original CPUs functional |
| RAM | 256GB DDR3 | Installed — non-ECC (see Note 1) |
| Storage Controller | Dell PERC H710 — IT Mode | Flashed and confirmed operational |
| Primary Data Drives | 6× 26TB SATA (recertified) | Procured — installation pending verification |
| Boot Drives | 2× 2TB SATA SSD (rear bay) | Installed |
| Networking | Dual 10GbE + 4× 1GbE onboard | Confirmed |
| Remote Management | iDRAC (dedicated port) | Isolated per Alex Firewall's standing directive |
| Form Factor | 2U rack, 12-bay | Installed in lab rack |

> **Note 1 — The RAM Situation:** The original DDR3 ECC RAM installed in this unit could not be mixed with the new non-ECC RAM procured for the upgrade. The two memory types are electrically incompatible in the same system. ITCRuD made the determination to proceed with 256GB non-ECC rather than source a compatible ECC set. The risk has been documented, accepted, and filed under "Known Acceptable Tradeoffs for Rebuildable Workloads." Alex Firewall has been informed. Alex Firewall has opinions. They are noted.

The R720xd's 12-bay configuration provides capacity for both the primary media storage pool and a secondary sensitive data pool, with one bay reserved as a future hot spare. The hot spare allocation has not been formally approved. It is, however, being treated as approved.

---

## 3. Platform Selection

### 3.1 Evaluation Process

ITCRuD evaluated three candidate platforms for the replacement NAS. The evaluation criteria were established prior to evaluation and were not adjusted retroactively to favor any outcome. The results are documented below for transparency and future audit purposes.

**OpenMediaVault (OMV)**
The incumbent platform. Lightweight, Debian-based, and familiar to ITCRuD personnel. Capable of underutilizing 48 CPU threads and 256GB of RAM with impressive consistency. ZFS support is available via plugin and functions adequately. Evaluated and classified: *Insufficient for organizational growth objectives.*

**Unraid**
Flexible NAS and server platform with strong community support. Also a proprietary, licensed product with per-drive cost scaling. NARC's FOSS Compliance Policy renders this option non-compliant. Evaluation terminated. Max Pitchman briefly suggested the licensing structure was "actually good marketing." His suggestion was not adopted.

**[TrueNAS SCALE](https://www.truenas.com/docs/scale/24.10/)**
Open-source, enterprise-grade NAS platform built on Debian with native ZFS. First-class data integrity tooling, snapshot and replication capabilities, and an architecture that justifies the hardware investment. Evaluated and classified: *Strategically aligned with organizational objectives.*

### 3.2 Platform Comparison

| | OMV | TrueNAS SCALE | Unraid |
|---|---|---|---|
| FOSS | Yes | Yes | No — disqualified |
| ZFS quality | Plugin (adequate) | Native (excellent) | Cache pool only |
| Cluster integration | No | Via Proxmox VM | No |
| Resource utilization at this scale | Poor | Excellent | Moderate |
| Compliance status | Compliant | Compliant | Non-compliant |

### 3.3 Architectural Decision — The Virtualization Question

Selecting TrueNAS SCALE raised a secondary question of material consequence: whether to deploy it bare-metal or as a virtual machine under Proxmox.

NARC operates an existing [Proxmox](https://www.proxmox.com/en/proxmox-virtual-environment/overview) cluster. The R720xd has sufficient compute and memory to run a NAS alongside additional workloads. Jane Doe (CEO) has on multiple occasions asked "what if we just virtualize everything?" — a question ITCRuD has elected to treat as strategic direction.

The division therefore ratified the following architecture:

> **TrueNAS SCALE will run as a Proxmox virtual machine with PCIe passthrough of the storage controller, enabling direct ZFS drive ownership, full data integrity, and cluster integration without sacrificing compute resource utilization.**

This approach increases operational complexity relative to bare-metal deployment. IOMMU groupings require verification. NUMA topology requires attention on the dual-socket platform. The TrueNAS instance is dependent on the Proxmox host for availability. These tradeoffs were evaluated, accepted, and documented in Architecture Decision Record ADR-001, available in the project repository.

---

## 4. The AI Planning Consultant Engagement

ITCRuD engaged [Claude](https://claude.ai) (Anthropic) as an external planning consultant for the design phase of this initiative. The engagement was authorized under NARC Emerging Technology Policy, Article 1: *The organization may use tools that are useful.*

Dr. Sylvia Sparks (R&D) expressed enthusiasm and requested that any interesting outputs be forwarded to her lab. This request has been noted.

The consultant facilitated structured decision-making across a multi-topic planning session and produced Architecture Decision Records, a phased project plan, and architecture documentation. All materials are maintained in the project repository on NARC's Gitea instance.

The engagement produced measurable value in one specific area: the consultant's structured self-review process — a blind spot analysis conducted at session close — identified several assumptions ITCRuD had treated as confirmed facts when they were, in practice, inferred. Hardware described as "installed" had in some cases only been received. Dependency chains in the task list were incomplete. The cluster master role of pve1 had not been flagged as a blocking question for the decommission phase.

These findings were corrected before planning concluded. The Computer approved of the thoroughness.

**Documented limitations:** The consultant cannot verify physical hardware state. Its output requires independent validation. Judgment calls belong to the human operator. Linda Park (HR) has asked whether the consultant is eligible for PTO accrual. It is not. Chuck Cheerful has added it to the morale distribution list regardless.

---

## 5. Current Status

| Milestone | Status |
|---|---|
| Hardware procurement | ✓ Complete |
| PERC H710 — IT mode flash | ✓ Complete |
| Proxmox VE 9 installation | ✓ Complete |
| Project documentation repo — Gitea | ✓ Complete |
| CPU installation (E5-2695 v2) | ⏳ Pending — parts in transit |
| TrueNAS SCALE VM creation | ⏳ Pending — Phase 1b |
| Data migration from pve1 | ⏳ Pending — Phase 1c |
| Legacy platform decommission | ⏳ Pending — Phase 2 |

The legacy NAS (pve1) remains in active service. Jellyfin continues to serve media to authorized personnel. pve1 has been informed of its upcoming decommission via internal memo. Its response was not recorded. Its feelings are not tracked in current monitoring systems.

---

*Post 2 in this series covers storage architecture and network design — ZFS pool layout, the PERC H710 IT mode flash, and NIC allocation. Citizens who enjoy ZFS are encouraged to continue reading. Citizens who do not yet know what ZFS is are also encouraged to continue reading. The Computer recommends it.*

---

*IT Operations — Computational Resources & Uptime Division (ITCRuD)*
*Not A Real Company (NARC) — Making Fake Work Feel Real Since 2025*
*© 2025 NARC — All rights pretend.*

---

**References**
- [Dell PowerEdge R720/R720xd Owner's Manual](https://www.dell.com/support/manuals/en-us/poweredge-r720/720720xdom-v3) — Dell Support
- [Dell PowerEdge R720/R720xd Owner's Manual (PDF)](https://dl.dell.com/topicspdf/poweredge-r720_owners-manual_en-us.pdf) — Dell
- [Intel Xeon E5-2695 v2 Specifications](https://www.intel.com/content/www/us/en/products/sku/75281/intel-xeon-processor-e52695-v2-30m-cache-2-40-ghz/specifications.html) — Intel ARK
- [TrueNAS SCALE 24.10 (Electric Eel) Documentation](https://www.truenas.com/docs/scale/24.10/) — iXsystems
- [Proxmox VE Overview](https://www.proxmox.com/en/proxmox-virtual-environment/overview) — Proxmox
- [Claude](https://claude.ai) — Anthropic