# NARC Infrastructure Refresh 2026-001 — Post 3: On the Establishment of Documentation Standards, Governance Frameworks, and the Formal Engagement of an Artificial Intelligence Planning Consultant

**DOCUMENT CLASSIFICATION:** Internal — Mandatory Reading
**ISSUING DEPARTMENT:** Infrastructure & Computational Resources Division (ICRD), in coordination with the NARC Knowledge Management Office
**DOCUMENT STATUS:** Approved. Reading is not optional. Comprehension is encouraged but not enforced.
**CLEARANCE REQUIRED:** All clearance levels. Infrared citizens may find this document confusing. This is expected.

---

> **EDITOR NOTES — POST 3 (NARC VOICE)**
>
> **The unique opportunity here:** Post 3 is the most meta post in the series — it's about how the project was documented, which means you're writing a corporate document about corporate documentation. The joke writes itself if you commit to it. The ADR section in particular is gold: a bureaucratic organization that uses Architecture Decision Records to document the decisions of its bureaucratic committees is peak bit.
>
> **The AI section:** This is where the voice has the most room to play. The "external AI consultant" framing works beautifully — treat Claude like an outside contractor who was engaged under a formal agreement, produced deliverables, and has known limitations that were disclosed at engagement. The "NARC External Consultant Engagement Policy" that was written five minutes before use is a running joke worth developing.
>
> **The handoff report system:** Frame this as NARC's "Knowledge Transfer Protocol" or "Continuity of Operations Documentation Standard." The fact that it's designed to brief AI instances reads as NARC briefing new employees — complete with onboarding checklists and the implicit threat that the new employee must confirm receipt of all materials.
>
> **Things to personalize:** The "what surprised you" section — the draft below is placeholder. Your actual experience of the blind spot analysis catching things, the gap review, the checklist process — these are worth your own words even through the corporate voice filter.
>
> **Alternative paths for rewrite:**
> - **Frame as an onboarding document:** "Welcome to NARC Infrastructure Division. This document will orient you to our documentation standards. You will be tested. The test is ongoing." Very funny if your audience gets the joke.
> - **Frame as a post-mortem:** "Following the Planning Phase of NARC-IR-2026-001, this report documents lessons learned and process improvements identified." Deadpan corporate retrospective on a project that hasn't finished yet.
> - **Add a "Consultant Performance Review" section:** Rate the AI assistant on corporate performance metrics — "Meets Expectations: Context Retention," "Exceeds Expectations: Decision Formatting," "Development Required: Physical Hardware Verification." Will land with anyone who has survived a performance review cycle.

---

## Executive Summary

NARC has implemented a structured documentation governance framework for Infrastructure Refresh 2026-001. This framework comprises a project repository, Architecture Decision Records, a phased project plan, and a Knowledge Transfer Protocol enabling operational continuity across planning sessions. An external AI consultant was engaged to facilitate the planning phase. This document summarizes the framework, its components, and an honest assessment of what worked, what requires improvement, and what the Infrastructure Division would do differently if it were starting over, which it is not, because starting over is not approved.

---

## Section 1 — The Problem This Framework Solves

NARC, like many organizations of its size and staffing level, has historically maintained infrastructure documentation in a format best described as **distributed cognitive storage** — that is, in the head of the Infrastructure Division personnel, which is singular, and which is subject to the same memory degradation and context loss as any other biological system.

This approach to documentation has known limitations:

1. The Infrastructure Division periodically forgets why it made specific decisions
2. Configuration choices made under constraints that no longer apply continue to govern systems because no one recorded what the constraints were
3. "I set this up two years ago and I have no idea what this does" is an operational status that occurs more frequently than the Quality Assurance Committee would prefer

The NARC Knowledge Management Office (also the Infrastructure Division) determined that a structured, persistent documentation system would address these limitations. The determination was made. The system was built. Citizens are invited to review the results.

---

## Section 2 — The Project Repository

NARC's infrastructure project documentation is maintained in a Gitea repository, the organizational structure of which was ratified during the planning phase:

```
narc-lab-refresh/
├── README.md                       — Project overview and status
├── PROJECT_PLAN.md                 — 8-phase plan with task-level checklists
├── architecture/
│   ├── hardware-inventory.md       — All hardware assets, specs, and status
│   ├── storage-design.md           — Pool layouts, rationale, known risks
│   └── network-layout.md           — NIC allocation and topology
├── docs/decisions/
│   ├── ADR-001 through ADR-006     — Architecture Decision Records
└── workstreams/
    ├── 01-nas-build/               — Active workstream
    └── 02 through 06/              — Parked workstreams, stubs ready
```

All documentation is plain Markdown. No special tooling is required to read it. It will be readable on whatever platform replaces Gitea in ten years, assuming NARC's infrastructure survives that long, which the Infrastructure Division considers a reasonable assumption.

The repository is version-controlled. Changes are committed. The commit history exists. The Infrastructure Division considers this an improvement over the previous documentation system, which was not version-controlled, because the previous documentation system did not exist.

---

## Section 3 — Architecture Decision Records

### 3.1 What They Are

An Architecture Decision Record (ADR) is a short, structured document capturing a single significant decision. Each ADR records:

- **Context** — the problem being solved and constraints in effect
- **Decision** — what was chosen
- **Rationale** — why this option over the alternatives
- **Alternatives rejected** — what was considered and why it was not selected
- **Consequences** — what this decision creates, forecloses, or requires

The ADR format originated in software engineering. NARC has determined that it applies equally well to infrastructure decisions, and that the homelab community's general practice of making consequential architectural choices without written rationale represents an improvement opportunity.

### 3.2 Why They Work

A decision captured at the time it is made, with the reasoning intact, is worth significantly more than a decision reconstructed from memory months later. The reconstruction is almost always less accurate than the original reasoning, and is subject to post-hoc rationalization bias — the tendency to remember the decision as more deliberate and well-reasoned than it actually was.

The ADR for ZFS pool layout, for example, records not just that RAIDZ2 was chosen, but that mirror pairs were evaluated, that the resilver window on 26TB recertified drives was explicitly considered, and that the decision was made specifically because the content is rebuildable. Six months from now, if anyone questions the pool layout, the answer is in the ADR. It is not in the Infrastructure Division's memory. The Infrastructure Division's memory is not a reliable primary source.

### 3.3 Current ADR Inventory

NARC Infrastructure Refresh 2026-001 maintains six Architecture Decision Records:

| ADR | Decision Captured |
|---|---|
| ADR-001 | NAS OS selection — TrueNAS SCALE in Proxmox VM |
| ADR-002 | ZFS pool layout — RAIDZ2 for media pool |
| ADR-003 | NIC allocation for pve5 |
| ADR-004 | PERC H710 IT mode flash |
| ADR-005 | TrueNAS VM specification and Proxmox configuration |
| ADR-006 | Datto S4P2 selected for Proxmox Backup Server role |

> *Note: ADR-001 through ADR-005 are currently designated Draft status, as the decision record expansion conducted during post-planning review identified additional decisions (Decisions 23–37) not yet reflected in the ADR files. Updates are pending. Citizens who notice this inconsistency are correct. Their observation has been noted. The inconsistency will be resolved.*

---

## Section 4 — The External AI Consultant Engagement

### 4.1 Engagement Authorization

The Infrastructure Division engaged [Claude](https://claude.ai) (Anthropic) as an external planning consultant under NARC's **Emerging Technology Utilization Policy**, Article 1, Section 1: *NARC may use any technology that is useful, subject to the Infrastructure Division's judgment regarding what constitutes "useful."*

The engagement was authorized. The engagement was productive. The engagement is ongoing across multiple sessions, which is why the Knowledge Transfer Protocol in Section 5 exists.

### 4.2 Scope of Engagement

The consultant was engaged to:

- Facilitate structured decision-making across a multi-topic planning session encompassing NAS OS selection, storage architecture, network design, VM specification, backup infrastructure planning, cluster expansion strategy, and project documentation design
- Generate Architecture Decision Records and project documentation artifacts
- Identify gaps in the Infrastructure Division's reasoning before they became operational problems

On this last point: the consultant performed as contracted. The blind spot analysis — a structured review the consultant conducts of its own planning output — identified several items the Infrastructure Division had not captured:

- Decisions made implicitly or by default that were not formally recorded (ext4 filesystem selection at install time; Jellyfin's LXC deployment model inherited from the legacy system)
- Hardware states described as confirmed that were, on closer examination, inferred (rear bay controller installation; drive installation status)
- Dependency chains in the task list that were incomplete (TrueNAS VM creation blocked on IOMMU verification, which is blocked on CPU swap, which is blocked on BIOS compatibility confirmation)
- The cluster master/quorum role of pve1, which matters significantly for the decommission phase and had not been identified as a blocking open question

The Infrastructure Division finds this a satisfactory consulting outcome. The Infrastructure Division also notes that identifying gaps in its own work is not something it had previously formalized, and that having a structured process for doing so is an improvement.

### 4.3 Limitations — Disclosed and Accepted

The consultant does not have access to NARC's physical infrastructure. It cannot verify hardware claims. It produces technically plausible content that must be independently validated. On one occasion it provided a recommendation that required correction.

More fundamentally: the consultant operates without judgment about NARC's specific operational context. It can assess tradeoffs in the abstract. It cannot assess whether a given tradeoff is acceptable for this specific organization, this specific workload, this specific tolerance for risk. Those assessments belong to the Infrastructure Division.

The consultant is a thinking partner and documentation generator. It is not an oracle. It does not replace engineering judgment. Its output is as good as the questions it is asked and the verification applied to its answers.

This assessment has been disclosed to all relevant parties. All relevant parties are the Infrastructure Division. The Infrastructure Division concurs.

### 4.4 Consultant Performance Summary

| Evaluation Criterion | Assessment |
|---|---|
| Context retention across long sessions | Exceeds expectations |
| Decision documentation quality | Meets expectations |
| Gap identification (blind spot analysis) | Meets expectations — several meaningful catches |
| Physical hardware verification | Does not apply — not a physical being |
| Unprompted opinion on topics outside scope | Acceptable — redirected when necessary |
| Overall engagement value | Authorized for continued use |

---

## Section 5 — The Knowledge Transfer Protocol

### 5.1 Background

AI planning assistants have no memory between sessions. Each new conversation begins without any knowledge of prior work. For a project spanning multiple sessions — and Infrastructure Refresh 2026-001 spans many — this presents a continuity problem.

The Knowledge Transfer Protocol addresses this problem. At the close of each working session, a structured Handoff Report is generated. The report captures:

- All decisions made and their rationale
- Task status (complete, in progress, outstanding)
- Open questions and their owners
- Assumptions that are unverified and the risk if they are wrong
- A bootstrap block — a dense, structured briefing designed to bring a new AI session to full operational context in a single prompt

### 5.2 Quality Assurance

The protocol includes validation mechanisms:

**Base checklist:** A 67-item validation checklist evaluating report completeness, structural compliance, content fidelity, and bootstrap quality. Critical checks are marked; a single critical failure results in a Fail rating requiring remediation before transfer.

**Project-specific addendum:** A 30-item supplementary checklist covering infrastructure-specific gaps not addressed by the base checklist — hardware state confirmation, firmware baselines, multi-system state capture, and dependency chain completeness.

**Blind spot analysis:** A structured prompt requiring the AI to identify gaps in its own report before session close. Findings are captured in a Blind Spot Supplement, which takes precedence over the main report where conflicts exist.

This process is more elaborate than most homelab projects require. NARC has determined that for a project of this scope — touching six hosts, involving a data migration, running across weeks to months — the overhead is justified. Smaller projects may use a proportionally smaller process. NARC will continue to use this one.

### 5.3 A Note on Self-Evaluation

The base checklist includes a note that self-evaluated reports — reports where the AI evaluates its own output in the same session — carry lower confidence for content fidelity checks. The AI cannot reliably identify what it failed to capture because it does not know what it does not know.

This is correct. The blind spot analysis mitigates it but does not eliminate it. Human review of the checklist results is recommended before using a self-evaluated report as a transfer artifact. The Infrastructure Division reviews its own work. The Infrastructure Division acknowledges the limitations of this arrangement. The Infrastructure Division is the only party available to perform the review.

---

## Section 6 — What NARC Would Do Differently

In the interest of institutional learning and the benefit of future Infrastructure Division personnel and/or AI sessions receiving this document as part of onboarding:

**Start ADRs at project inception.** The first decisions in any project occur before a documentation system is established. Several ADRs in this project required reconstructing rationale post-decision. Reconstruction is less accurate than contemporaneous capture. Future projects will establish the ADR format before making any significant decisions.

**The blind spot analysis prompt belongs in the session closeout sequence, not as an ad-hoc step.** In the first planning session, a standalone gap review was conducted before the formal blind spot analysis. This created partially-applied corrections and introduced inconsistencies that the subsequent analysis then had to identify. The correct sequence — report, blind spot analysis, supplement, patched bootstrap, checklists, manifest finalization — should be executed in order, without improvisation.

**The project-specific checklist addendum should be written before the first session closes, not after.** The addendum was written based on gaps identified in the first session's report. It would have caught those gaps if it had existed during that session. This is noted as a chicken-and-egg problem. NARC's response is: write a general infrastructure addendum early, then project-specific additions as they are identified.

---

## Closing Remarks

NARC's documentation framework for Infrastructure Refresh 2026-001 is operational. The repository is live. The ADRs are drafted. The project plan is maintained. The Knowledge Transfer Protocol is tested and in use.

Future posts in this series will document the actual build — Phase 1a through 1d — with the operational honesty that distinguishes genuine documentation from aspirational documentation. If something in the plan does not survive contact with the hardware, that will be documented. If a decision made in the planning phase turns out to be wrong, the ADR will be amended. If the Infrastructure Division encounters an unexpected problem and resolves it through a combination of technical skill and creative profanity, that will be described in appropriate terms.

The record will be accurate. Accuracy is a NARC organizational value. It is listed second, after "Making Fake Work Feel Real," but it is listed.

*Post 4 will document the physical build. It does not yet exist. It will exist when the build does. Patience is a virtue that NARC values in its Citizens.*

---

*This post is part of the NARC Infrastructure Refresh 2026-001 series.*
*All documentation has been approved.*
*All decisions have been recorded.*
*The ADRs are Draft status. This has been noted. Twice.*
*NARC: Making Fake Work Feel Real Since 2025.*

---

**References**
- [Claude](https://claude.ai) — Anthropic
- [TrueNAS SCALE 24.10 (Electric Eel) Documentation](https://www.truenas.com/docs/scale/24.10/) — iXsystems
- [Proxmox VE Documentation](https://pve.proxmox.com/pve-docs/) — Proxmox
- [Project Repository — Gitea](https://gitea.notarealcompany.enterprises) *(placeholder — update with actual URL)*