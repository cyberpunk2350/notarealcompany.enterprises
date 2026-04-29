# NARC Lore Primer — Section 06: Document Format Templates (Part B: §5.6–5.11)

> **Cross-references:** Section 05 (document format templates Part A: §5.1–5.5), Section 03 (voice and tone), Section 08 (blog post styles — full style descriptions), Appendix I (content generation kickoff prompt)

---

## 5. Document Format Templates (continued)

### 5.6 Change Request

Extended format.[^1] Site forms (`assets/forms/IT-Templates-Form-ChangeRequest.md`) use a simpler version.

Site-confirmed base fields: Requester, Department, Date, Change Description, Reason for Change, Impact Assessment, Approval, Scheduled Date.

Extended format adds: Change Summary table, Rollback Plan table, Post-Implementation Verification, Approvals table with Computer seal.

Key characteristics:[^1]

- Completed CRs include post-implementation verification results and status: Completed
- Pending CRs have populated prerequisites checklist and rollback plan
- Alex Firewall's approval note reflects his character — approves most things, notes reservations on file
- Cross-reference related CRs and ADRs in Related Documents footer
- Reference numbering: CR-[YEAR]-[NNN]; ICR-[YEAR]-[NNN] for incidents

### 5.7 Meeting Minutes

[^1]

Key structural elements: Attendees table, Agenda (distributed vs conducted), Discussion Notes with timestamps, Decisions Summary table, Action Items table, ARIA Appendix (explicitly "not part of official record").

ARIA is always listed as Minutes Prepared By.

Additional characteristics:[^1]

- Attendee table includes all AI systems present — ARIA, consultants, NARC-Brew 3000 ("present involuntarily")
- Agenda shows "as distributed" vs "as conducted" — divergence expected and documented
- NARC-Brew 3000 contributions logged as `ADVISORY:` messages
- External AI consultants contribute via text interface; submissions quoted verbatim
- IT Director's frustration with scope creep expressed once, in action items: "follow-up session — IT Operations staff only"
- Reference numbering: MIN-[YEAR]-[NNN]

### 5.8 Purchase Request

Extends the site form template.[^1]

Key additions:[^1]

- Line Items table with **Link** column — manufacturer spec page preferred; seller listing acceptable; PRs double as parts lists for blog posts
- Delivery and Receipt Tracking table cross-references HAR open items
- Finance note: John Smith penny-pitcher tendency — may notice and comment on cost; do not overplay[^2]
- Request Type: Initial / Supplemental / Amended — replace missed items / change-driven
- Leave `[cost]` if genuinely unknown; do not invent figures
- Template includes "delete before submitting" usage notes block
- Reference numbering: PR-[YEAR]-[NNN]

### 5.9 Runbook

Site has a form template (`IT-Templates-Forms-RunBook.md`) but the session 09 format is more fully specified.[^1]

Structure: Purpose, Prerequisites Checklist, numbered phases with numbered steps, code blocks for commands, expected result / if-wrong callouts, Phase exit criteria checklist, Rollback Procedures table, Validation section.

Key characteristics:[^1]

- Technical content should be correct and usable — NARC voice used in specific moments, not throughout
- Decision points called out explicitly with fallback options
- Phase exit criteria as a checklist at end of each phase

### 5.10 Hardware Acceptance Record

[^1]

Structure: Purpose, Asset Information table, Component Verification tables by category, Open Items table, Discrepancies table, SMART Baseline Record, Acceptance Sign-Off table.

Key characteristics:[^1]

- Component tables use explicit **Pending** status for unverified items — partial acceptance with documented open items is preferred over false completeness
- Open Items table — each entry references the blocking Phase step
- Discrepancies table — include even if empty
- SMART baseline table for storage drives — pre-populate with commands if data not yet available
- Alex Firewall sign-off typically gated on firmware/BIOS baseline items
- Reference numbering: HAR-[YEAR]-[NNN]

**Established document status vocabulary**[^1] for content tracking tables:

| Status | Meaning |
|--------|---------|
| Complete | Document finished and accurate |
| Complete — open items pending | Document exists and correct; tracked items within it still outstanding |
| Complete — awaiting execution | Document and approvals done; physical work not yet performed |
| Complete — links pending | Document complete; specific fields (e.g. purchase URLs) not yet filled |
| Pending | Document not yet created |

### 5.11 Blog Post — Three Production Styles

[^2]

| Style | File prefix | Tone position | Status |
|-------|-------------|--------------|--------|
| Neutral | `blog-post-NN-` | Restrained — no NARC framing in structure | Available |
| NARC v1 | `blog-narc-post-NN-` | Heightened — archived experiment | Retired |
| NARC v2 | `blog-narc-v2-post-NN-` | Calibrated against site tone | Available — lore-leaning content |
| Hybrid | `blog-hybrid-post-NN-` | Structural formality, first-person body | **Primary production style** |

**Style descriptions:**

**Neutral** — First-person technical. No corporate persona. Section headings, prose, tables. No NARC header block. Occasional dry observation is fine. Ends with references block. Use for general technical audience or syndication.

**NARC v1** — Archived. Three posts exist as a record of the experiment. No new v1 content to be commissioned.[^2]

**NARC v2** — Same structure as v1, more restrained prose. Humor lands through specific absurd details rather than density. Closer to the site's existing document tone. Ends with ITCRuD footer + references block. For lore-leaning posts if that content type develops.

**Hybrid** — Primary NARC website blog style.[^2] Full TO/FROM/CC memo header, then first-person technical body with dry humor appearing naturally. Key distinction: body written as the person doing the work, not an institution filing paperwork. Genuine utility, NARC framing, accessible to a general reader.

**Hybrid memo header template:**[^1]

```markdown
**NOT A REAL COMPANY (NARC)**
**INTERNAL MEMORANDUM**

| | |
|---|---|
| **TO:** | [Recipients], [Clearance] and Above |
| **FROM:** | IT Operations — Computational Resources & Uptime Division (ITCRuD) |
| **IT Director:** | [REDACTED] |
| **CC:** | [relevant leadership] |
| **RE:** | [Project ref] — [Subject] |
| **DATE:** | YYYY-MM-DD |
| **CLASSIFICATION:** | ![Internal](../images/seals/internal.svg) INTERNAL — [Clearance] and Above |
| **APPROVED BY:** | ![Approved by the Computer](../images/seals/approved-by-computer.svg) |

**Summary:** [One paragraph, straight corporate voice.]

*[Single dry NARC aside in italics.]*

---
```

---

[^1]: Session-established — introduced in session 09; adopted as standard format.
[^2]: Ratified — BR-001 lore-consolidation review, 2026-03-22.