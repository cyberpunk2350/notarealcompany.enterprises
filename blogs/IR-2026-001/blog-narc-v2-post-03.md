# ![NARC Banner](../images/narc-banner.svg)

# IT Operations Report — Project Documentation Standards and AI Consultant Engagement Review
## NARC Infrastructure Refresh 2026-001: Governance, Knowledge Management, and Lessons Noted

**Document Owner:** IT Operations — Computational Resources & Uptime Division (ITCRuD)
**IT Director:** [REDACTED]
**Reviewed By:** Robert Lee, COO / Dr. Sylvia Sparks, Head of R&D
**Approved By:** ![Approved by the Computer](../images/seals/approved-by-computer.svg)
**Version:** 1.0
**Date:** 2026-03-21
**Classification:** ![Internal](../images/seals/internal.svg) INTERNAL — Red Clearance and Above

---

> *This document discusses documentation. Citizens who find this recursive are correct. Citizens who find this unnecessary have not yet experienced the consequences of undocumented infrastructure decisions. Victor Watchful has. He does not discuss it.*

---

## Executive Summary

This report documents the knowledge management framework established for Infrastructure Refresh Initiative 2026-001, including the project repository structure, Architecture Decision Record system, AI consultant engagement methodology, and session continuity protocol. It also contains an honest assessment of what worked, what required correction, and what ITCRuD would do differently — a category of document the division has decided to call a **Lessons Noted Report**, distinct from a Lessons Learned Report in that the lessons have been noted but implementation is ongoing.

---

## 1. The Documentation Problem

ITCRuD, like many departments of its size and staffing level, has historically maintained infrastructure documentation in a format best described as **distributed cognitive storage** — that is, in the memory of division personnel, which is singular, biological, and subject to degradation over time.

This approach has known failure modes:

- Personnel periodically forget why specific configuration decisions were made
- Choices implemented under constraints that no longer apply continue to govern systems because the constraints were never recorded
- "I set this up and I'm not sure what it does anymore" is an operational status that occurs more frequently than Robert Lee would prefer to hear about in stand-up

Mary Johnson (CTO) noted during a quarterly review that "blinking status lights are easier to monitor than undocumented decisions." This observation was found to be correct. It has been filed.

The NARC Knowledge Management Office — which is ITCRuD, wearing a different hat — determined that a structured, persistent documentation system was required for a project of this scope. The system was built. This document is part of it.

---

## 2. The Project Repository

ITCRuD maintains Infrastructure Refresh 2026-001 documentation in a Gitea repository. The structure was ratified during the planning phase and is reproduced here for reference:

```
narc-lab-refresh/
├── README.md                       — Project overview and workstream status
├── PROJECT_PLAN.md                 — 8-phase plan with task-level checklists
├── architecture/
│   ├── hardware-inventory.md       — All hardware assets, specs, and status
│   ├── storage-design.md           — Pool layouts, rationale, known risks
│   └── network-layout.md           — NIC allocation and topology notes
├── docs/decisions/
│   ├── ADR-001 through ADR-006     — Architecture Decision Records
└── workstreams/
    ├── 01-nas-build/               — Active workstream task tracker
    └── 02 through 06/              — Parked workstreams, stubs ready
```

All documentation is plain Markdown. No special tooling is required to read it. It will remain readable on whatever replaces Gitea, whenever that occurs. Dr. Sylvia Sparks (R&D) has suggested that whatever replaces Gitea will itself eventually be replaced, and that documentation longevity is therefore a philosophical question. Dr. Sparks was thanked for this contribution and asked to return to her lab.

---

## 3. Architecture Decision Records

### 3.1 What They Are

An Architecture Decision Record (ADR) is a short document capturing a single significant decision. The format originated in software engineering. ITCRuD has determined it applies equally well to infrastructure, and that the homelab community's general practice of making consequential architectural choices without written rationale represents an optimization opportunity.

Each ADR records:

- **Context** — the problem being solved and the constraints in effect
- **Decision** — what was chosen
- **Rationale** — why this over the alternatives
- **Alternatives rejected** — what was considered and why it lost
- **Consequences** — what this decision creates, forecloses, or requires

### 3.2 Why They Work

A decision captured at the time it is made, with reasoning intact, is worth significantly more than a decision reconstructed from memory months later. Reconstruction is almost always less accurate than the original reasoning and is subject to post-hoc rationalization — the tendency to remember decisions as more deliberate than they were.

The ADR for ZFS pool layout (ADR-002) records not just that RAIDZ2 was chosen, but that mirrors were evaluated, that the resilver window on 26TB recertified drives was explicitly considered, and that the decision was made specifically because the content is rebuildable. Six months from now, if anyone questions the pool layout, the answer is in the record. The answer is not in ITCRuD's memory. ITCRuD's memory is not a primary source.

### 3.3 Current ADR Inventory

| ADR | Decision |
|---|---|
| ADR-001 | NAS OS selection — TrueNAS SCALE in Proxmox VM |
| ADR-002 | ZFS pool layout — RAIDZ2 for media pool |
| ADR-003 | NIC allocation for pve5 |
| ADR-004 | PERC H710 IT mode flash |
| ADR-005 | TrueNAS VM specification |
| ADR-006 | Datto S4P2 selected for Proxmox Backup Server role |

> *Note: ADR-001 through ADR-005 are currently in Draft status. The post-planning review identified additional decisions not yet reflected in the ADR files. Updates are pending. Citizens who notice this inconsistency are correct. The inconsistency has been noted. It will be resolved. This is not the first time ITCRuD has noted something and then resolved it. It will not be the last.*

---

## 4. The AI Consultant Engagement — Extended Review

### 4.1 Engagement Summary

ITCRuD engaged [Claude](https://claude.ai) (Anthropic) as an external planning consultant under NARC Emerging Technology Policy, Article 1: *The organization may use tools that are useful.* The policy is brief. It was written to be brief. Brevity, in policy, is a feature.

The consultant was tasked with facilitating structured decision-making across a multi-topic planning session, generating Architecture Decision Records and project documentation, and identifying gaps in ITCRuD's reasoning before they became operational problems.

Dr. Sylvia Sparks (R&D) asked whether the consultant could also be tasked with "prototyping some ideas she had." This request was forwarded to the appropriate channel, which is to say it was not forwarded anywhere.

### 4.2 What the Consultant Is Good At

The engagement was most valuable in three areas:

**Context retention.** A planning session covering NAS OS selection, storage architecture, network design, VM specification, backup infrastructure, cluster expansion, and project documentation structure — in sequence, with decisions from earlier in the conversation affecting later ones — benefits from a participant that doesn't lose the thread. The consultant maintained context reliably across a long session.

**Decision structuring.** The Architecture Decision Records were generated during the session rather than reconstructed afterward. The format — context, decision, rationale, alternatives rejected, consequences — produced records that are directly useful rather than records that describe what happened without capturing why.

**Gap identification.** The blind spot analysis conducted at session close identified several things ITCRuD had gotten wrong:

- Hardware described as "installed" had in several cases only been received and not physically placed. The distinction between "received" and "installed" was not previously tracked in the project plan.
- The dependency chain for TrueNAS VM creation was found incomplete — the full chain (CPU swap → IOMMU enabled → IOMMU groupings verified → NUMA identified → VM creation) was not reflected in the blocking dependencies column of the task list.
- The Proxmox cluster master/quorum role of pve1 was not identified as a blocking question for the decommission phase, despite pve1 being the system scheduled for decommission. This would have caused a problem. It did not cause a problem because the analysis caught it.

Victor Watchful reviewed the gap findings and noted that "assumptions treated as facts are a security concern." This observation was filed alongside Mary Johnson's status light comment. The filing cabinet is getting full.

### 4.3 What the Consultant Is Not Good At

The consultant does not have physical access to the lab. It cannot verify hardware state. It produces technically plausible content that requires independent validation. On at least one occasion it produced a recommendation that required correction on review.

More fundamentally: the consultant does not know NARC. It does not know the specific operational tolerances, the risk posture, the history of decisions that preceded this project, or the fact that the "prod-but-actually-test" environment is named after a movie character and is sacred. These things require human judgment. ITCRuD provides the judgment. The consultant provides the structure.

Linda Park (HR) has asked whether the consultant is eligible for the NARC Employee Wellness Program. It is not. Chuck Cheerful has nonetheless included it in the quarterly morale survey distribution. Chuck Cheerful's mandate extends further than most people realize.

### 4.4 The Self-Evaluation System

At the close of each planning session, the following quality assurance sequence is conducted:

1. **Handoff Report** — structured document capturing all decisions, tasks, open questions, assumptions, and a bootstrap block enabling a future session to resume without context loss
2. **Blind Spot Analysis** — structured prompt requiring the consultant to identify gaps in its own report before the session closes
3. **Blind Spot Supplement** — corrections document derived from the analysis; takes precedence over the main report where conflicts exist
4. **Patched Bootstrap** — revised entry-point brief incorporating all supplement corrections
5. **Base Checklist Evaluation** — 67-item validation checklist assessing report completeness and structural compliance
6. **Project-Specific Addendum Evaluation** — 30-item infrastructure-specific checklist addressing hardware state, firmware baselines, multi-system state capture, and dependency chain completeness

This process is more elaborate than most homelab projects require. For a project touching six hosts, involving a data migration, and running across weeks to months, ITCRuD considers the overhead justified. Robert Lee has not objected. Robert Lee's non-objection is treated as approval.

---

## 5. Lessons Noted

In the interest of institutional learning:

**Start ADRs at project inception.** Several decisions in this project were made before the documentation system was established. Those ADRs required reconstructing rationale from memory. Reconstructed rationale is less accurate than contemporaneous capture. Future ITCRuD projects will establish the ADR format before making significant decisions.

**The blind spot analysis belongs in the formal closeout sequence.** An informal gap review was conducted before the structured analysis in the first session. This produced partially-applied corrections that the subsequent analysis then had to identify and complete. The correct sequence — report, blind spot analysis, supplement, patched bootstrap, checklists, manifest finalization — should be executed in order. Improvisation in the closeout sequence introduces the kind of inconsistency the closeout sequence is designed to prevent.

**The project-specific checklist should precede the first session close, not follow it.** The infrastructure-specific addendum was written based on gaps found in the first session's report. Had it existed during that session, it would have caught those gaps. This is noted as a known limitation of the first-session bootstrap problem. It has been documented for the benefit of future ITCRuD personnel who face the same situation. They will face the same situation. This is now in the record.

---

*Post 4 will document the physical build — Phase 1a through 1d — with operational honesty about what matched the plan and what did not. Post 4 does not yet exist. It will exist when the build exists. The Computer is patient. Mostly.*

---

*IT Operations — Computational Resources & Uptime Division (ITCRuD)*
*Not A Real Company (NARC) — Making Fake Work Feel Real Since 2025*
*© 2025 NARC — All rights pretend.*

---

**References**
- [Claude](https://claude.ai) — Anthropic
- [TrueNAS SCALE 24.10 (Electric Eel) Documentation](https://www.truenas.com/docs/scale/24.10/) — iXsystems
- [Proxmox VE Documentation](https://pve.proxmox.com/pve-docs/) — Proxmox
- [Project Repository — Gitea](https://gitea.notarealcompany.enterprises) *(placeholder — update with actual URL)*