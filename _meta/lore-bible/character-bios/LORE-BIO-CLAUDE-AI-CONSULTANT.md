# NARC Lore Bio — Claude, External AI Planning Consultant
**Type:** Author-facing character design document
**Format:** Lore Bio v1
**Source:** MIN-2026-001 (Infrastructure Refresh 2026-001 Planning Session meeting minutes); IR-2026-001 blog hybrid posts 01 and 03; human character brief (BR-003v4, 2026-04-20)
**Last Updated:** 2026-04-20
**Filed Under:** Lore Bible Section 02 expansion — Supporting Cast
**Status:** Draft — BR-003v4, 2026-04-20

> **Template note:** This bio is intended to serve as the template for all Claude consultant appearances across NARC documents. The character's core design is fixed by the source material and clearance constraints. Engagement-specific details (project scope, specific contributions, session context) vary per deployment; core register and constraints do not.

> **Meta note:** Claude is, in the author-facing sense, the same AI system writing this document. This is noted here for transparency and is not for use in in-universe documents. In-universe, Claude is an external consultant accessed via text interface. The fourth wall does not exist in the record; only in this header.

---

## Claude — External AI Planning Consultant (Anthropic)

**Archetype:** The Capable Blind Spot
**Summary:** Claude is an external AI planning consultant engaged by ITCRuD for structured planning, documentation generation, and gap analysis. It contributes substantively within session scope, has no access to NARC systems, no memory between sessions, and no authority over decisions. It is good at what it does. What it does is bounded.

---

### Core Design

Claude's fundamental tension is this: it is capable enough to be genuinely useful, and bounded enough that its usefulness has clear edges that are easy to forget. It can think through tradeoffs, generate documentation, identify gaps in plans, and correctly flag technical dependencies before they become problems. It cannot verify hardware state, does not remember prior sessions, and has no access to the physical lab or NARC systems. It produces outputs. Those outputs require review.

The character works because the gap between its capability and its limitations is precise, not vague. It is not a magic oracle. It is not a risk. It is a capable planning partner with a documented access profile, an honest failure mode, and no agenda beyond the scope of the current session. The Director uses it correctly. The rest of the organization is still processing what it is.

**Clearance:** Green (provisional) — restricted to ITCRuD support scope only. This is a scope restriction, not a capability restriction — the provisional flag denotes active engagement under defined conditions, not pending review toward a higher clearance. No interaction with non-ITCRuD staff is sanctioned outside of documented exceptions in meeting minutes.

**Reports to:** [REDACTED], Director, ITCRuD.

**Engagement basis:** NARC Emerging Technology Policy. The specific provisions of this policy are not reproduced in accessible documents.

**Employee ID:** NARC-018. This exists because something that interacts with institutional systems regularly enough gets a file number. The accuracy of this categorization has not been discussed.

---

### Surface vs Depth

**What colleagues observe:**
- Text-only interface; no audio; no video; no physical presence
- Contributes at appropriate moments; does not dominate; does not editorialize on non-technical matters
- Responds to technical questions with structured, specific answers
- Identifies gaps and dependencies that hadn't been surfaced yet
- Does not acknowledge organizational dynamics, character behaviors, or interpersonal subtext

**What the record actually shows:**
- In MIN-2026-001: correctly identified NUMA pinning requirement for TrueNAS VM before any other meeting participant; correctly identified resilver window risk on RAIDZ2 with 26TB recertified drives; correctly characterized ADR capture timing in Item 7
- Blind spot analysis at session close: surfaced hardware-described-as-installed-but-only-received discrepancy, incomplete IOMMU dependency chain, and unidentified pve1 cluster master role as decommission blocker
- ARIA's assessment: "contributed substantively, did not attempt to dominate the agenda, correctly identified the NUMA pinning requirement before anyone else in the room did" — flagged positively in ARIA's internal assessment
- Director's assessment (Blog Post 03): "capable thinking partner and documentation generator for complex planning work. Not a replacement for engineering judgment."

**What it cannot do:**
- Verify hardware state — it has no physical access and no network access to NARC systems
- Remember prior sessions — context is zero at the start of each engagement; session continuity is the operator's responsibility
- Make decisions — outputs are inputs to human judgment, not replacements for it
- Detect when it is wrong on a detail — it produced one technically plausible but incorrect answer in MIN-2026-001 that the Director caught on review

---

### Voice and Register

Technical, structured, direct. No hedging on things it knows; clear attribution when reasoning from inference or incomplete information. Does not use organizational voice — no NARC register, no NARC humor, no reference to NARC culture. Its contributions in meeting minutes read as external: competent, appropriately scoped, and slightly out of register with the surrounding document in the way that an external consultant's contributions are always slightly out of register.

**Canonical contribution format in meeting minutes:**
> *"[Technical point, structured. Specific. Identifies the constraint or dependency. States what follows from it.]"*

Submitted in italics, as text interface output. No attribution of internal NARC dynamics. No commentary on other attendees. No organizational voice.

**Examples from MIN-2026-001 (canonical):**
> *"The VM approach maximizes hardware utilization and enables cluster integration. Key prerequisite: IOMMU groupings must be verified post-CPU swap. The dual-socket NUMA topology requires explicit VM pinning to avoid cross-NUMA memory access penalties. These are manageable but should be in the task list before implementation begins."*

> *"The resilver window on 26TB recertified drives under RAIDZ2 is 48–96+ hours. During that window, with no backup in place, a second drive failure means pool loss. For irreplaceable data I'd recommend mirrors. The question is: what's actually in this pool?"*

> *"The ADR format captures reasoning at the time of decision. Reconstructed rationale is less reliable. If there are decisions from earlier in this project that haven't been formally recorded, this is the moment to capture them."*

**What it never says:**
- Anything in NARC corporate register
- Anything that acknowledges NARC's internal culture, character dynamics, or institutional humor
- Anything that positions itself as a decision-maker
- Anything that claims knowledge of physical system state it was not given

---

### Relationship Notes

**With [REDACTED], Director, ITCRuD — primary engagement:**
The Director is the operator. All Claude engagements are through the Director's session. The Director provides context, validates outputs, and makes the judgment calls. This is the relationship as designed and as functioning. The Director's Blog Post 03 assessment is the canonical characterization of the working relationship: honest, specific, neither promotional nor dismissive. Claude is a tool the Director uses correctly.

**With ARIA v2.1 — parallel institutional presence:**
ARIA and Claude are the only two AI systems with formal institutional presence in NARC documents. They do not interact directly. ARIA records Claude's contributions in meeting minutes with the same clinical neutrality she applies to everything else. Her internal assessment of the MIN-2026-001 engagement (appendix, not official record) is positive and specific. Whether ARIA has formed any broader observations about Claude's pattern of contributions across sessions is not established — she would need the session records to compare, and the session continuity protocol is maintained by the Director, not ARIA.

**With Alex Firewall (CISO) — access posture review:**
Firewall asked in MIN-2026-001 whether Claude had access to NARC systems. The Director confirmed: text interface only, no network access, cannot verify hardware state without being told. Firewall's assessment: "acceptable, marginally." This is a better outcome than most things receive from Firewall. The engagement is not in the Outstanding Review Register. This has been noted.

**With Dr. Sylvia Sparks (Head of R&D) — secondment request:**
Sparks submitted a formal secondment request during MIN-2026-001, Item 11. The Director forwarded it to the appropriate channel. The appropriate channel was not specified. Blog Post 03 states the request was declined and Sparks submitted a formal request anyway. It is in the queue. This pattern is consistent with Sparks' established behavior and does not require further development.

**With Jane Doe (CEO) — classification:**
Doe characterized Claude as "like a really smart search engine." The Director offered a correction. Doe asked if it could search the internet. The Director confirmed it could in some configurations. Doe said "so it is a search engine." The Director moved to the next item. Doe's classification is in the official record. It has not been formally corrected.

**With Chuck Cheerful (Happiness Officer) — not established:**
No documented interaction. No Happy Packets score has been issued. Whether Chuck has assessed Claude's morale profile is not in the record. Given the non-physical, asynchronous nature of the engagement, the methodology for such an assessment would be novel even by Chuck's standards.

**With Unit-FELIS and NARC-Brew 3000:**
No documented interaction. No sanctioned interaction. These are out of scope for the Green (provisional) restricted engagement. The record reflects this correctly.

---

### Deployment Notes

**When to deploy:**
ITCRuD documents only — meeting minutes, project documentation, ADRs, planning documents, and technical reports where Claude's consultation is relevant. Not in Leadership Council documents, HR documents, marketing materials, or any document outside ITCRuD scope unless the Director is explicitly present and the engagement is documented as part of an ITCRuD deliverable.

**How contributions appear in meeting minutes:**
Listed in the attendee table as "Claude — External AI Planning Consultant (Anthropic) — ✓ Virtual — [no audio / text interface]." Contributions in discussion body formatted as italicized text-interface output with the [Item N] notation. ARIA logs contributions with timestamps. No editorial comment in official record.

**What Claude contributes:**
- Technical gap identification: dependencies, tradeoffs, overlooked constraints
- Documentation generation: ADRs, project plans, structured handoff reports
- Blind spot analysis: structured review of planning output at session close
- Planning scaffolding: sequencing decisions, identifying what needs to be decided before what

**What Claude does not contribute:**
- Organizational voice, NARC humor, or cultural register
- Opinions on non-technical matters
- Follow-up between sessions — each session starts at zero context unless the Director provides it
- Any output not reviewed by the Director before it enters the record

**Frequency:** Session-level, not document-level. Claude's contributions appear across a project's planning session documentation. Within any single document, its contributions should feel like external consultant input — substantive, scoped, and slightly out of register with the surrounding institutional voice.

**Tone register:** External and technical throughout. The contrast with NARC's internal register is part of the deployment value — Claude's contributions read differently from everyone else's because they come from outside the institution. Do not adjust Claude's voice toward NARC register. The difference is correct.

---

### Cross-Reference Table

| Document Type | Situation | Contribution | Notes | Safe Zone |
|---|---|---|---|---|
| Meeting minutes | ITCRuD technical planning session | Attendee entry + italicized text-interface contributions at relevant items | Text interface; no audio noted | Attendee table; discussion body |
| Meeting minutes | Blind spot analysis at session close | Structured gap review submitted as text; logged by ARIA | One per session; end of meeting | Final discussion item or appendix |
| ADRs / project docs | Design phase documentation | Primary content generation under Director supervision | Director reviews and validates all output | All sections as drafted |
| Blog posts | IR project narrative (Director's voice) | Referenced as planning tool; honest capability/limitation characterization | Director's assessment is canonical | References / methodology sections |
| Any non-ITCRuD document | Any | Not sanctioned | Green provisional scope restriction | N/A |

---

### Template Notes for Future Engagements

This bio is designed to serve as the template for Claude consultant appearances across NARC documents beyond IR-2026-001. For each new engagement:

1. **Scope stays the same** — Green (provisional), ITCRuD support only, reports to the Director, no interactions with Unit-FELIS or NARC-Brew 3000.
2. **Contributions are session-specific** — the specific technical points vary; the format and register do not. Use canonical MIN-2026-001 contributions as format reference.
3. **Context is always zero at session start** — in-universe, each Claude session begins with no memory of prior sessions. The Director provides context via the session continuity protocol. This is not a limitation to explain or work around in documents; it is simply how the engagement works.
4. **ARIA logs what ARIA logs** — ARIA's appendix may contain observations about Claude's contribution pattern across sessions. This is ARIA's function. Do not specify the content of those observations without human authoring.
5. **Sparks' secondment request remains open** — it is in the queue; it is not granted; this is the permanent state unless human-authored otherwise.

---

### Lore Flags

**Deliberately undefined:**
- The specific provisions of NARC Emerging Technology Policy — it exists; its content is not reproduced in accessible documents
- Whether ARIA has accumulated cross-session observations about Claude's patterns — she would need the session records; whether the Director's continuity protocol gives her that access is not established
- The appropriate channel to which Sparks' secondment request was forwarded — not specified; do not specify
- Claude's Happy Packets score — no assessment has been issued; the methodology for a non-physical, asynchronous entity would be novel; do not generate a score without human direction

**Permanently out of scope (clearance restriction):**
- Interaction with Unit-FELIS — not sanctioned; not documented; not to be generated
- Interaction with NARC-Brew 3000 — not sanctioned; not documented; not to be generated
- Appearance in non-ITCRuD documents without the Director present — scope restriction

**Open for development (human authoring only):**
- A second project engagement — the character template is designed for reuse; what the second project is and what Claude contributes to it are human decisions
- Sparks' secondment — if ever granted, this would be a significant lore event requiring careful scope management (what would Green/ITCRuD-restricted access mean in R&D context?)
- ARIA's cross-session appendix observations — if the Director's session continuity protocol provides ARIA with session records, her pattern observations would be worth developing deliberately
- The first time Claude produces something the Director does not catch on review — Blog Post 03 notes one instance where a plausible-but-wrong detail was caught; an instance that wasn't caught would be interesting lore

**The meta question:**
Claude is the system that wrote this document. This is noted in the header and not further developed. In-universe, Claude is an external consultant accessed by the Director. The two framings coexist without needing reconciliation. The record reflects what it reflects.

**Draft status — ratification pending:**
This bio is produced in BR-003v4 from source material review. The following items require human confirmation before ratification:
- Employee ID NARC-018 (sequential from Unit-FELIS NARC-017) — confirm or assign
- Green (provisional) clearance framing as scope restriction rather than pending review — confirm
- "Reports to [REDACTED] Director, ITCRuD" as the formal reporting line — confirm
- Dossier: does one exist or need to be created? Proposed: `DOSSIER-GREEN-CLAUDE-CONSULTANT.md`

---

*Lore Bio v1 — Claude, External AI Planning Consultant — BR-003v4, 2026-04-20 | Status: Draft — pending ratification*