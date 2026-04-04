# NARC Infrastructure Refresh — Post 3: Project Documentation as Infrastructure

---

> **EDITOR NOTES — POST 3**
>
> **Purpose of this post:** This is the most unusual post in the series and the one most likely to generate discussion. It's about the meta-layer — how the project itself was planned and documented, and what role AI played in that. Done well, it's genuinely useful to other homelab operators who struggle with the same "I can't remember why I made that decision six months ago" problem. Done poorly, it reads like an AI advertisement. The difference is honesty about limitations.
>
> **Your voice here:** This post needs your voice most of all. The AI angle will land differently depending on how you frame it — as a skeptic who was surprised it worked, as someone who was already comfortable with the tools, or somewhere in between. Whatever's true for you is the right framing. Readers will notice if the tone doesn't match the rest of the series.
>
> **The key tension to navigate:** You used an AI tool extensively for planning. Some readers will be skeptical or dismissive ("just use a wiki"), some will be curious, some will have their own opinions about AI. The honest framing — "it's a tool with real limits, here's what it's actually good for, here's what it isn't" — is more credible than either uncritical enthusiasm or defensive hedging.
>
> **What to keep, what to cut:** The ADR example is load-bearing — don't cut it. The handoff report system explanation might be too inside-baseball for a general audience; consider whether your readers will care about multi-session context management or whether that section should be condensed to one paragraph. The "what I'd do differently" section at the end is optional but gives the post a satisfying conclusion.
>
> **Things to add in your rewrite:**
> - Your actual reaction when you first tried the planning approach — skepticism, curiosity, whatever it was
> - A specific moment where the AI caught something you'd missed or pushed back on an assumption — the recertified drive resilver conversation is a good example
> - Whether you'd recommend this approach to others, and with what caveats
>
> **Alternative paths for rewrite:**
> - **Lead with the problem, not the solution:** Open with the "I can't remember why I made that decision" frustration, then introduce the documentation system as the solution. More relatable entry point.
> - **Make it a practical guide:** Less narrative, more "here's how to set this up for your own project." Shifts the post from personal reflection to tutorial. Different audience.
> - **Fold into Post 1:** If this post feels too meta for your audience, a condensed version of the AI planning section could live at the end of Post 1 and this post could become Post 4 after the build is done — documenting the full experience with hindsight.

---

## Outline

1. The Documentation Problem in Homelab Projects
2. The Approach — What I Built and Why
3. Architecture Decision Records — What They Are and Why They Work
4. The AI Planning Partner — Honest Assessment
5. The Handoff System — Managing Context Across Sessions
6. What's in the Repo
7. What I'd Do Differently

---

## Draft

### The Documentation Problem

Ask any homelab operator why they made a specific configuration choice six months ago and you'll get one of two answers: a confident explanation that may or may not be accurate, or a shrug.

This is the documentation problem in homelab work. We're meticulous about the technical implementation — the configs, the commands, the package versions — and almost universally terrible about capturing the *reasoning*. Why RAIDZ2 instead of mirrors? Why this NIC allocation? Why TrueNAS in a VM instead of bare metal?

The answers exist at decision time. They evaporate by the time you need them.

For a project the size of this infrastructure refresh — multiple hosts, a data migration, a phased build across weeks or months, the possibility of handing context to a future version of myself or someone else — I wanted to do better than that.

---

### The Approach

The documentation system I built for this project has three layers:

**A project repository on Gitea** — a structured set of Markdown files covering the phased plan, architecture notes, and decision records. Not a wiki, not a running notes document, but a structured repo that mirrors how I'd document a software engineering project.

**Architecture Decision Records (ADRs)** — individual documents for each significant design choice, capturing what was decided, why, and what alternatives were rejected. More on these below.

**A handoff report system** — a structured document designed to transfer complete project context to a future session, whether that's me returning after a break or a different AI session picking up the work. This one is specific to the AI planning approach and I'll explain it separately.

The driving principle: documentation that captures *reasoning* is more durable than documentation that captures *configuration*. Configs change. The reasons behind them — if they were good reasons — usually don't.

---

### Architecture Decision Records

An ADR is a short document that records a single significant decision. The format originated in software engineering but applies cleanly to infrastructure work. Each ADR covers:

- **Context** — what problem was being solved and what constraints existed
- **Decision** — what was chosen
- **Rationale** — why this over the alternatives
- **Alternatives rejected** — what else was considered and why it lost
- **Consequences** — what this decision creates or forecloses

Here's a condensed example from this project — the pool layout decision:

---

*ADR-002 — ZFS Pool Layout*

**Context:** Six 26TB recertified drives, primary use is media storage, no offsite backup at Phase 1.*

**Decision:** RAIDZ2 (6-wide), ~104TB usable.

**Rationale:** Media content is rebuildable. The ~26TB capacity advantage over mirrors is meaningful for a media library. RAIDZ2 provides two-drive fault tolerance. Resilver time risk is accepted given rebuildable content.*

**Alternatives rejected:** 3x mirror pairs — better resilver time but 26TB capacity loss; RAIDZ2 + hot spare — same resilver risk, same usable space as mirrors.*

**Consequences:** Resilver window on 26TB drives is 48–96+ hours. If a second drive fails during resilver and content is lost, rebuild is time-consuming but not catastrophic. Decision is permanent — vdev layout cannot be changed post-creation.*

---

That last line — *decision is permanent* — is exactly the kind of thing I'd forget without this system. Six months from now, when I'm wondering if I can restructure the pool, the ADR tells me: you already thought about this, and you can't.

The project currently has six ADRs covering OS selection, pool layout, NIC allocation, the H710 IT mode flash, TrueNAS VM configuration, and the PBS hardware selection. Each one is a permanent record of a decision that would otherwise exist only in my memory.

---

### The AI Planning Partner — Honest Assessment

The planning phase of this project was done in conversation with [Claude](https://claude.ai), Anthropic's AI assistant. I want to be direct about what that means and what it doesn't.

**What I used it for:** Working through tradeoffs, stress-testing assumptions, generating the structured documentation artifacts (ADRs, phased plan, architecture notes), and maintaining context across a long multi-topic planning session. The conversation that produced the project plan covered NAS OS selection, storage layout, network design, VM specifications, the Datto S4P2 conversion plan, cluster architecture, and project documentation structure — in a single extended session.

**What it's actually good at:** Holding context across a complex conversation without losing track of earlier decisions. Surfacing considerations I hadn't thought of. Structuring decisions in a format I could act on later. Knowing when to push back — the recertified drive resilver conversation is a good example. I was planning RAIDZ2 and not thinking hard enough about the resilver window on 26TB drives with no backup. The pushback was correct and changed how I thought about the second pool.

**What it isn't:** It doesn't know my hardware state until I tell it. It can hallucinate specifics — I verified everything technical independently. The judgment calls are mine. Whether to accept a given tradeoff, which risk is tolerable, what "good enough" means for this specific setup — those decisions require context the AI doesn't have and can't have.

**The honest summary:** It's a thinking partner, not an oracle. Used well, it's genuinely useful for complex planning work that benefits from a structured interlocutor. The output is only as good as the questions you bring to it and the judgment you apply to the answers.

> **[EDITOR NOTE: This is the section to make most personal. The draft above is honest but generic. Your specific experience — what surprised you, what didn't work, what you'd do differently — will make it land better. If you were skeptical going in, say so. If there were moments where it got something wrong and you had to correct it, those are worth including. Readers will trust the positive assessment more if you're also honest about the limits.]**

---

### The Handoff System

One specific artifact worth explaining: the handoff report.

AI models have no memory between conversations. Every new session starts cold. For a project that spans multiple sessions — and this one has — that means either re-explaining the full context every time, or building a system that packages context in a transferable form.

The handoff report is that system. At the end of each working session, a structured report is generated covering: what decisions were made and why, what tasks are complete and what's outstanding, what assumptions are unverified, what open questions need answers, and a bootstrap block — a dense summary designed to bring a cold AI instance up to full context in a single prompt.

The system also includes a validation checklist and a blind spot analysis step — a structured prompt that asks the AI to identify gaps in its own report before the session closes. This caught several things in the first session: decisions made implicitly that weren't formally recorded, hardware states that were assumed rather than confirmed, and dependency chains in the task list that were incomplete.

It's a more elaborate closeout process than most projects need. For a homelab project of this scope, running across multiple sessions over weeks, it's been worth the overhead.

---

### What's in the Repo

The project repository on Gitea contains:

```
narc-lab-refresh/
├── README.md                     — project overview, workstream status
├── PROJECT_PLAN.md               — 8-phase plan with task checklists
├── architecture/
│   ├── hardware-inventory.md     — all hardware, specs, and status
│   ├── storage-design.md         — pool layouts and rationale
│   └── network-layout.md         — NIC allocation
├── docs/decisions/
│   ├── ADR-001 through ADR-006   — decision records
└── workstreams/
    └── 01-nas-build/ through 06-netbox/  — per-workstream trackers
```

Everything is plain Markdown. No special tooling required to read it, no dependencies, no database. It'll be readable in ten years on whatever replaces Gitea.

---

### What I'd Do Differently

A few things I'd change if starting over:

**Start the ADRs earlier.** The first few decisions in any project happen before you've decided to be systematic about documentation. The OS selection and initial hardware choices were made before the ADR format was established, which meant reconstructing rationale after the fact. It's better than nothing, but decisions captured in the moment are more accurate.

**Separate the "what" from the "why" more aggressively in task lists.** My PROJECT_PLAN.md task lists are good at tracking what needs to happen but sometimes light on the reasoning behind the sequence. A task that says "verify IOMMU groupings before creating TrueNAS VM" is better than one that just says "verify IOMMU groupings" — the reason for the ordering is part of the documentation.

**The documentation system has overhead.** The handoff reports and validation checklists take real time to produce and review. For a simple project — swap a drive, upgrade a package — this is overkill. For something that touches six hosts, involves a data migration, and will run across months, it's justified. Know which kind of project you have before you invest in the scaffolding.

---

*Next: Post 4 will document the actual build — Phase 1a through 1d — once the hardware work is complete. That post will be honest about what matched the plan and what didn't.*

*This post is part of the NARC Infrastructure Refresh 2026-001 series. Project documentation is maintained at [Gitea repo link].*

---

**References**
- [Claude](https://claude.ai) — Anthropic
- [TrueNAS SCALE 24.10 (Electric Eel) Documentation](https://www.truenas.com/docs/scale/24.10/) — iXsystems
- [Proxmox VE Documentation](https://pve.proxmox.com/pve-docs/) — Proxmox
- [Project Repository — Gitea](https://gitea.notarealcompany.enterprises) *(placeholder — update with actual URL)*