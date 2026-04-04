# NARC Infrastructure Refresh 2026-001 — Post 1: An Approved Summary of Strategic Realignment Initiatives

**DOCUMENT CLASSIFICATION:** Internal — General Distribution
**ISSUING DEPARTMENT:** Infrastructure & Computational Resources Division (ICRD)
**DOCUMENT STATUS:** Approved for Publication
**CLEARANCE REQUIRED:** None. You may read this. We are watching to confirm that you do.

---

> **EDITOR NOTES — POST 1 (NARC VOICE)**
>
> **The voice:** Corporate memo meets Paranoia RPG. Everything is "approved," "authorized," "per directive," or "in alignment with strategic objectives." Decisions are never made — they are *ratified*. Problems are never admitted — they are *legacy infrastructure optimization opportunities*. The humor comes entirely from playing it completely straight. Never wink at the reader directly. The joke is that you never acknowledge there is a joke.
>
> **What to personalize:** The opening "Background" section especially. The frustration with the old hardware should come through — but filtered entirely through corporate euphemism. "Older and failing" becomes "approaching end of authorized operational lifecycle." "I kept putting it off" becomes "prior resource allocation priorities precluded timely remediation."
>
> **Paranoia flavor notes:**
> - Reference "The Computer" or "NARC Central Processing" only if it fits naturally — don't force it
> - "Troubleshooter" is the Paranoia term for field operative — could work for the person doing the actual physical work
> - Clearance levels (Infrared, Red, Orange, Yellow, Green, Blue, Indigo, Violet) can be dropped in as jokes — "this document is cleared for Red clearance and above; Infrared citizens should return to their assigned sectors"
> - Bureaucratic passive voice is your friend: "it was determined," "authorization was obtained," "the decision matrix yielded"
>
> **Alternative paths for rewrite:**
> - **Pure memo format:** Drop the blog post structure entirely and write it as an internal NARC memo with TO/FROM/RE/DATE header, numbered paragraphs, and action items at the end. Higher commitment to the bit, potentially very funny.
> - **Press release format:** "NARC ANNOUNCES STRATEGIC INFRASTRUCTURE MODERNIZATION INITIATIVE — Shareholder Value Expected." Shorter, punchier, easier to write.
> - **Mix of formats:** Open with a memo header, then transition to "filed report from the Infrastructure Division" for the technical sections. Gives you flexibility.

---

## Background and Strategic Context

*Submitted by the Infrastructure & Computational Resources Division, Q1 2026*

NARC's data storage infrastructure has, following comprehensive internal review, been designated an **Active Legacy Optimization Opportunity** under the NARC Infrastructure Modernization Directive (NIMD-2026-001). The existing storage platform — a five-drive RAID5 array administered via OpenMediaVault, virtualized atop Proxmox — has served the organization faithfully and without significant incident, if one does not count the incidents, which for the purposes of this report we are not counting.

The platform in question has been operating beyond its originally projected service window. Hardware telemetry indicates that continued reliance on this infrastructure presents an unacceptable risk profile relative to NARC's commitment to **Continuous Uptime Excellence** and **Data Asset Preservation** (see NARC Policy 7.4.2: *On the Importance of Not Losing Everything*).

Furthermore, a review of backup and recovery posture revealed that the organization's data protection strategy was, in the professional assessment of the Infrastructure Division, "essentially vibes." This has been noted. Remediation is underway. The responsible parties have been counseled.

---

## The Strategic Asset Acquisition

Following approval from the NARC Capital Expenditure Review Board (the author, after brief internal deliberation), procurement was authorized for a **[Dell PowerEdge R720xd](https://www.dell.com/support/manuals/en-us/poweredge-r720/720720xdom-v3)** — a 2U rack-mount server platform rated for enterprise workloads and acquired through appropriate secondary market channels at a cost the Finance Department has agreed to describe as "a reasonable investment in organizational resilience."

The platform specifications, as submitted for Board approval:

| Component | Specification | Status |
|---|---|---|
| CPU | 2× [Intel Xeon E5-2695 v2](https://www.intel.com/content/www/us/en/products/sku/75281/intel-xeon-processor-e52695-v2-30m-cache-2-40-ghz/specifications.html) (48 threads total) | Pending installation — current processors functional |
| RAM | 256GB DDR3 | Installed — non-ECC (see Memo ICR-2026-003: *The ECC Incompatibility Incident*) |
| Storage Controller | Dell PERC H710, IT Mode | Authorized and implemented |
| Data Drives | 6× 26TB SATA (recertified) | Procured — installation status pending physical verification |
| Boot Drives | 2× 2TB SATA SSD (rear bay) | Installed |
| Networking | Dual 10GbE + 4× 1GbE | Confirmed operational |
| Remote Management | iDRAC (dedicated) | Isolated per standard security posture |

> **[EDITOR NOTE: The "ECC Incompatibility Incident" memo reference is a good recurring joke format for this site — anything embarrassing becomes a memo reference. The RAM situation (ECC and non-ECC couldn't be mixed, ended up running non-ECC only) is perfect for this treatment. Consider writing a short companion memo for it.]**

The R720xd's 12-bay configuration provides capacity for both the primary media storage pool and a secondary sensitive data pool, with one bay designated as a future hot spare pending further resource allocation discussions with no one in particular.

A note on the recertified drives: the Infrastructure Division acknowledges that drives which have previously been operated, returned, and remarketed carry a statistically elevated failure correlation profile. This risk has been formally accepted, documented in the appropriate decision record, and will not be mentioned again unless something goes wrong, at which point it will be mentioned extensively.

---

## The Platform Selection Process

### Evaluation Framework

The Infrastructure Division conducted a thorough and entirely unbiased evaluation of available NAS and storage platform options. The evaluation criteria were established in advance and not retroactively adjusted to favor any predetermined outcome. The results are presented below for transparency.

**Platforms evaluated:**

**OpenMediaVault (OMV):** A Debian-based NAS platform with which NARC has prior operational experience. Lightweight, familiar, and capable of underutilizing forty-eight CPU threads and 256 gigabytes of RAM with impressive efficiency. Evaluated and found *insufficient for organizational growth objectives.*

**Unraid:** A flexible NAS/server platform with strong community support and integrated VM capabilities. Also a proprietary, licensed product that costs money per drive. The NARC FOSS Compliance Committee (the author, with strongly held opinions) determined this to be *contrary to organizational values.* Evaluation terminated.

**[TrueNAS SCALE](https://www.truenas.com/docs/scale/24.10/):** An enterprise-grade, open-source NAS platform built on Debian and ZFS. Native ZFS support, proper data integrity tooling, and an architecture that justifies the hardware investment. Evaluated and found *strategically aligned.*

### The Architecture Decision

Selecting TrueNAS SCALE led to a secondary platform decision of meaningful consequence: *where* to run it.

NARC operates an existing [Proxmox](https://www.proxmox.com/en/proxmox-virtual-environment/overview) virtualization cluster. The R720xd has sufficient resources to run both a NAS and additional workloads simultaneously. Running TrueNAS SCALE as a bare-metal installation would preclude cluster integration and waste the majority of available compute and memory resources.

The Infrastructure Division therefore ratified the following architectural approach:

> **TrueNAS SCALE will operate as a Proxmox virtual machine with PCIe passthrough of the storage controller, enabling direct ZFS drive ownership while preserving full cluster integration and resource utilization.**

This decision is documented in Architecture Decision Record ADR-001, available in the NARC project repository for the benefit of future Infrastructure Division personnel and/or future instances of the AI planning assistant (see Section 4).

The tradeoffs were acknowledged, evaluated, and accepted. Complexity increases. The NAS is dependent on the hypervisor host. IOMMU groupings require verification. NUMA topology on a dual-socket system requires attention. These concerns were logged, assigned to the appropriate parties, and will be addressed in the field.

---

## The AI Planning Initiative

### Background

The Infrastructure Division engaged an external AI consultant — [Claude](https://claude.ai), developed by Anthropic — to assist with planning, decision documentation, and project management scaffolding. This engagement was approved under NARC's **Emerging Technology Utilization Policy**, which was written approximately five minutes before the engagement began.

The AI assistant was tasked with:

- Facilitating structured decision-making across a complex, multi-topic planning session
- Generating Architecture Decision Records for all significant design choices
- Maintaining a phased project plan with task-level detail
- Producing handoff documentation enabling continuity across planning sessions
- Identifying gaps in the author's reasoning before they became operational problems

On this last point: the system performed as intended. Several assumptions were identified as unverified, dependency chains in the task list were found incomplete, and at least one implicit decision (ZFS pool layout) received appropriate pushback before being finalized. The recertified drive resilver window conversation in particular resulted in a more defensible pool design than the initial proposal.

### Honest Assessment for the Record

The AI assistant does not know the state of NARC's physical infrastructure unless informed. It cannot verify hardware claims. It produces plausible-sounding technical content that must be independently validated. The judgment calls — which tradeoffs to accept, which risks are tolerable for this specific environment — belong to the human operator.

What it is genuinely useful for: holding context across a long, multi-topic session; structuring decisions in a recoverable format; and functioning as a patient, non-judgmental interlocutor for the kind of "talk it through out loud" problem-solving that produces better decisions than silent deliberation.

The project documentation repository on NARC's internal Gitea instance is the primary artifact of this planning process. It contains the phased plan, architecture notes, and six Architecture Decision Records documenting every significant choice made during the planning phase. It will be maintained throughout the project lifecycle.

All Citizens are encouraged to review the documentation. Comprehension is not required. Acknowledgment of receipt is mandatory.

---

## Current Operational Status

As of the publication of this document, the following milestones have been achieved:

- [x] Hardware procurement authorized and executed
- [x] PERC H710 flashed to IT mode — confirmed operational
- [x] Proxmox VE 9 installed on rear bay SSD — confirmed operational
- [x] Project documentation repository established on Gitea
- [ ] CPU installation — pending (current processors remain functional and are not complaining, which is more than can be said for some members of the Infrastructure Division)
- [ ] TrueNAS SCALE VM creation — pending Phase 1b
- [ ] Data migration from legacy platform — pending Phase 1c
- [ ] Legacy platform decommission — pending Phase 2

The legacy NAS (designated pve1 in cluster nomenclature) remains in active service. It has been informed of its upcoming decommission. Its response was not recorded.

---

## Next Steps

The Infrastructure Division's Phase 1a readiness checklist includes several items requiring physical verification before VM creation proceeds. Citizens assigned to field operations are advised to confirm:

1. The rear bay controller board is physically installed (not merely "received and adjacent to the server")
2. The 26TB drives are in the front bays and not still in their shipping materials
3. The R720xd BIOS version is compatible with the incoming CPU upgrade
4. The iDRAC remote console is functional so that someone other than the person standing in front of the server can observe the inevitable troubleshooting process

Full details are available in the project documentation. Access is authorized for Red clearance and above. Infrared personnel should return to their assigned workstations.

*Post 2 covers the storage and network design decisions — ZFS pool layout, the PERC H710 IT mode flash, and NIC allocation. It contains technical content. Citizens are advised to approach it with appropriate preparation.*

---

*This post is part of the NARC Infrastructure Refresh 2026-001 series.*
*All infrastructure decisions have been approved by the appropriate authority.*
*The appropriate authority is aware of who they are.*
*NARC: Making Fake Work Feel Real Since 2025.*