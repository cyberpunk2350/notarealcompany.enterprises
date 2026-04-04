# ![NARC Banner](../images/narc-banner.svg)

---

**NOT A REAL COMPANY (NARC)**
**INTERNAL MEMORANDUM**

| | |
|---|---|
| **TO:** | All Interested Parties, Red Clearance and Above |
| **FROM:** | IT Operations — Computational Resources & Uptime Division (ITCRuD) |
| **IT Director:** | [REDACTED] |
| **CC:** | Robert Lee, COO; Dr. Sylvia Sparks, Head of R&D |
| **RE:** | Infrastructure Refresh 2026-001 — Project Documentation Standards and AI Consultant Review |
| **DATE:** | 2026-03-21 |
| **CLASSIFICATION:** | ![Internal](../images/seals/internal.svg) INTERNAL — Red Clearance and Above |
| **APPROVED BY:** | ![Approved by the Computer](../images/seals/approved-by-computer.svg) |

**Summary:** A structured documentation framework has been established for Infrastructure Refresh 2026-001, comprising a Gitea project repository, Architecture Decision Records, a phased project plan, and a session continuity protocol. An AI planning consultant was engaged and produced measurable value, particularly in identifying gaps in ITCRuD's assumptions before they became operational problems. This memo summarizes the framework; the narrative below provides context for why it exists and how it actually worked.

*Dr. Sparks has been informed that the AI consultant is not available for R&D secondment at this time. She has submitted a formal request anyway. It is in the queue.*

---

## Why Bother Documenting Like This

I'll be honest: most homelab projects don't need this level of documentation. A wiki page, maybe a runbook, and you're fine.

This project is bigger than that. It touches six hosts. It involves a live data migration from a failing system. It's running across weeks or months. And I'm using AI tooling to assist with planning — which introduces a specific problem that doesn't exist when you're doing everything yourself: **the AI doesn't remember anything between sessions**.

Every time I start a new conversation, that context is gone. Without a structured way to transfer it, I'd spend the first part of every session re-explaining what was decided and why, which is both inefficient and increasingly inaccurate as sessions accumulate. The documentation system I built for this project solves that problem. It also solves the older, more familiar problem of "why did I set this up this way and what was I thinking."

---

## The Project Repository

The documentation lives in a Gitea repository. Here's the structure:

```
narc-lab-refresh/
├── README.md                       — project overview, workstream status
├── PROJECT_PLAN.md                 — 8-phase plan with task checklists
├── architecture/
│   ├── hardware-inventory.md       — all hardware, specs, and status
│   ├── storage-design.md           — pool layouts, rationale, known risks
│   └── network-layout.md           — NIC allocation
├── docs/decisions/
│   ├── ADR-001 through ADR-006     — Architecture Decision Records
└── workstreams/
    ├── 01-nas-build/               — active task tracker
    └── 02 through 06/              — parked workstreams, stubs ready
```

Everything is plain Markdown. No special tooling required to read it, no database, no dependencies. The reason for that is simple: I want this to be readable in ten years regardless of what tools exist then.

---

## Architecture Decision Records

An ADR (Architecture Decision Record) is a short document that captures a single significant decision. The format comes from software engineering, but it works just as well for infrastructure. Each one covers:

- **Context** — what problem was being solved, what constraints were in effect
- **Decision** — what was chosen
- **Rationale** — why this over the alternatives
- **Alternatives rejected** — what else was considered and why it lost
- **Consequences** — what this creates, forecloses, or requires

The value isn't having a record that a decision was made. It's having a record of *why* — with the reasoning intact at the time it was made, not reconstructed from memory months later. Reconstructed rationale is almost always less accurate, and tends to make decisions look more deliberate than they actually were.

A concrete example: [ADR-002](../../../docs/decisions/ADR-002-zfs-pool-layout.md) records not just that RAIDZ2 was chosen for the media pool, but that mirror pairs were explicitly considered, that the resilver window on 26TB recertified drives was weighed, and that the decision was made specifically because the content is rebuildable. Six months from now, if I'm wondering whether to restructure the pool, the answer is in the ADR: the vdev layout is permanent, this was a deliberate tradeoff, and the reasoning still applies or it doesn't.

Current ADR inventory:

| ADR | Decision |
|---|---|
| [ADR-001](../../../docs/decisions/ADR-001-nas-os-selection.md) | NAS OS selection — TrueNAS SCALE in Proxmox VM |
| [ADR-002](../../../docs/decisions/ADR-002-zfs-pool-layout.md) | ZFS pool layout — RAIDZ2 for media pool |
| [ADR-003](../../../docs/decisions/ADR-003-nic-allocation.md) | NIC allocation for pve5 |
| [ADR-004](../../../docs/decisions/ADR-004-perc-it-mode.md) | PERC H710 D1 Mini — IT mode flash |
| [ADR-005](../../../docs/decisions/ADR-005-truenas-vm-config.md) | TrueNAS VM specification |
| [ADR-006](../../../docs/decisions/ADR-006-datto-s4p2-pbs-role.md) | Datto S4P2 selected for Proxmox Backup Server |

---

## Using Claude for Infrastructure Planning — An Honest Assessment

I used [Claude](https://claude.ai) (Anthropic) as a planning partner throughout the design phase. I want to be specific about what that actually looked like, because "I used AI" covers a lot of ground from "it wrote my commit messages" to "it designed my whole system," and those are very different things.

**What I actually used it for:**
- Working through tradeoffs on storage layout, VM architecture, and NIC allocation in a structured way
- Generating the ADRs and project documentation during the planning session rather than reconstructing them afterward
- Maintaining context across a long session that covered NAS OS selection, storage design, network design, VM specification, backup infrastructure planning, cluster expansion, and documentation structure — in sequence, with earlier decisions affecting later ones
- Identifying gaps in my own planning before they became problems

On that last point: at the end of each planning session, I had it conduct a structured "blind spot analysis" — a review of its own output looking for things I hadn't captured, assumptions I'd treated as facts, and dependency chains that were incomplete. This found several things:

- Hardware I'd described as "installed" had in some cases only been *received*. The distinction matters when you're writing a task list.
- The dependency chain for TrueNAS VM creation was incomplete — I hadn't captured that it depends on IOMMU verification, which depends on the CPU swap, which depends on BIOS compatibility confirmation.
- The Proxmox cluster master role of pve1 hadn't been identified as a blocking question for the decommission phase, despite pve1 being the system we're decommissioning. That would have caused a real problem.

Victor Watchful reviewed the blind spot findings and described assumptions treated as facts as "a threat model." He's not wrong.

**What it's not good for:**
It doesn't have physical access to the lab. It can't verify hardware state. It produced a technically plausible answer on one occasion that was wrong on a detail I caught during review. The judgment calls — what tradeoffs are acceptable for *this* specific setup, this specific risk tolerance, this specific workload — are mine. It has no context for those unless I give it the context, and even then it can only approximate.

The honest summary: it's a capable thinking partner and documentation generator for complex planning work. It's not a replacement for engineering judgment, and I wouldn't treat its output as authoritative without reviewing it. Used correctly, it meaningfully improved the quality of planning documentation I'd have produced on my own in the same time.

---

## The Session Continuity System

Because AI sessions have no memory, each session that works on this project generates a structured handoff report. The report covers:

- All decisions made and their rationale
- Task status — complete, in progress, outstanding, and what each outstanding task depends on
- Open questions and who needs to answer them
- Assumptions that are unverified and what happens if they're wrong
- A "bootstrap block" — a dense briefing designed to bring a new session up to full context in a single prompt

The system includes a validation checklist (67 items covering structural compliance, content fidelity, and bootstrap quality) and a project-specific addendum (30 items covering infrastructure-specific gaps the general checklist doesn't catch — hardware state confirmation, firmware baselines, multi-system state capture).

This is more overhead than most projects need. For a project of this scope, running across multiple sessions, it's been worth it. The checklist and blind spot analysis together have caught real gaps that would have caused real problems.

---

## What I'd Do Differently

**Start ADRs before the first decision, not after.** Several of the ADRs in this project required reconstructing rationale from memory because the documentation system wasn't established yet when those decisions were made. Contemporaneous capture is more accurate.

**Run the blind spot analysis before the checklist, not after.** In the first session I did an informal gap review before the formal analysis, which produced partially-applied corrections that the analysis then had to sort out. The right order: generate report → blind spot analysis → apply corrections → run checklists. Don't improvise the sequence.

**Write the project-specific checklist addendum before the first session closes.** I wrote the infrastructure-specific addendum based on gaps found in the first session. If it had existed during that session, it would have caught those gaps. The chicken-and-egg problem is real, but a general infrastructure template written upfront would have helped.

---

*Post 4 will document the actual build — what matched the plan and what didn't. It doesn't exist yet. It will exist when the build does.*

---

**References**
- [Claude — Anthropic](https://claude.ai) — AI planning assistant used during design phase
- [TrueNAS SCALE 24.10 (Electric Eel) Documentation](https://www.truenas.com/docs/scale/24.10/) — iXsystems
- [Proxmox VE Documentation](https://pve.proxmox.com/pve-docs/) — Proxmox
- [Project Repository — Gitea](https://gitea.notarealcompany.enterprises) — NARC internal *(placeholder — update with actual URL)*

---

*IT Operations — Computational Resources & Uptime Division (ITCRuD)*
*Not A Real Company (NARC) — Making Fake Work Feel Real Since 2025*
*© 2025 NARC — All rights pretend.*