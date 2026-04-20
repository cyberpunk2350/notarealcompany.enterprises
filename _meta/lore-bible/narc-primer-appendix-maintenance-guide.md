# NARC Lore Primer — Appendix D: Maintenance Guide

> **Purpose:** Conventions and style guide for updating and extending this lore bible. Read this before making any changes to the document set.

---

## Document Set Overview

The lore bible consists of:

- **14 numbered section files** — the canonical reference
- **4 appendix files** — reference, parking lot, editorial history, and this guide
- **1 index file** — table of contents and quick reference

All files are Markdown. Footnotes use standard Markdown syntax (`[^N]` / `[^N]:`). The document set is modular — sections can be read independently, but cross-references are provided at the top of each file.

---

## When to Update vs When to Branch

**Update the lore bible directly** when:
- Correcting a factual error in existing content
- Adding a new character note that follows naturally from established lore
- Updating an artifact status in Section 12
- Adding a new parking lot item to Appendix B
- Recording a new BR-002 or BR-004 action

**Open a new branch** when:
- Adding a new major character (Founder profile, ARIA bio, etc.) — this is BR-003 scope
- Adding new document templates or format standards
- Making a decision that supersedes an existing ratified ruling
- Expanding lore that was explicitly left TBD (e.g. division registry design, NARC Lexicon)
- Any change that would affect how content is produced across multiple sections simultaneously

If in doubt: park it in Appendix B and flag for the next review session.

---

## Footnote Conventions

Each section uses per-section footnote numbering (resets to `[^1]` in each file). Footnotes are consolidated — one footnote covers all instances of the same source or ratification within a section.

**Standard footnote types and wording:**

| Type | Standard wording |
|------|-----------------|
| Site-confirmed | `Site-confirmed — verified in NARC site source files (NARC-master.zip, 2026-03-22).` |
| Session-established | `Session-established — introduced in session [N]; adopted as standard.` |
| Ratified | `Ratified — BR-[N] [branch-name], [date].` |
| Ruling | `Ruling — BR-[N] [branch-name], [date]. Supersedes prior session-established usage.` |
| BR action pending | `BR-00N action pending — [brief description].` |
| Confirmed | `Confirmed — BR-[N] review, [date]. [One-line summary].` |
| Uncertain | `Status uncertain — [reason]. Verify before use.` |

When a new ratification is made in a future branch, add a new footnote with that branch's ID and date. Do not edit existing footnotes — add a new one and reference both where relevant.

---

## Adding New Content

### New lore ruling or decision

1. Make the change in the relevant section file
2. Add a footnote: `Ratified — BR-[N] [branch-name], [date].`
3. Add an entry to the Editorial History appendix under the relevant section heading
4. If the ruling supersedes something, strike the old text and add a note pointing to the new ruling — do not silently delete it

### New character note

1. Add to Section 02 under the appropriate character or supporting cast entry
2. Use `[^N]` referencing the relevant session or branch ratification
3. If the character is new (not yet in Section 02), add a brief entry and flag the full bio as a parking lot item for BR-003

### New document template

1. Add to Section 05 or 06 depending on document type
2. Mark as `[^N]` session-established or ratified as appropriate
3. Add the DocType code to the table in Section 04 if it's a new type
4. Add example files to Section 12 artifact inventory once they exist

### New artifact

1. Add to the appropriate table in Section 12
2. Use the status vocabulary: Present / Local only / Retiring / Rename pending / Uncertain / Parked
3. If the artifact requires a BR-002 action, add it to the BR-002 action list in Appendix B

### New parking lot item

1. Add to Appendix B under the appropriate category (Required — Deferred / BR-002 Actions / Nice to Have — Parked)
2. Include source session or branch, and any blocking conditions

---

## Retiring Content

When a section or entry is superseded:

- **Do not delete** — NARC values its paper trail
- Add a `[retired — date]` note inline
- Move the old content to the Editorial History appendix under the relevant section heading
- If an entire section is retired (like Section 10), replace its body with a tombstone note pointing to the editorial history

---

## Style Rules for the Lore Bible Itself

The lore bible is a working reference document, not a NARC corporate document. It does not follow NARC voice and tone rules. Write plainly and precisely.

- **Prescriptive, not descriptive.** "Use `<br>` after metadata fields" not "session 09 used `<br>` after metadata fields."
- **No hedging on ratified decisions.** "The canonical prefix is `Corp-`" not "The canonical prefix is probably `Corp-`."
- **Use status tags in footnotes, not inline.** The body text should read cleanly; the footnote carries the provenance.
- **Keep section footers updated.** Each section file ends with a brief status note. Update it when the section changes.
- **Cross-references at the top.** If a section references another, list it in the cross-references block at the top of the file.

---

## Updating the Index

The index (`narc-primer-index.md`) serves as the table of contents and quick-reference card. Update it when:

- A new section or appendix is added
- A section is retired or renamed
- A key decision changes (update the Quick Reference table)
- A branch status changes

The Quick Reference table is intended to be scannable in seconds. Keep entries short — one cell, one fact.

---

## Branch Handoff

When a branch session ends, produce a branch results report following the naming convention:

```
NARC Project - Branch - [branch-name] - [start-date] - [end-date].md
```

The report must include:
- Summary of what was completed
- List of all files produced or modified
- BR-002 / BR-003 / BR-004 actions generated (if any)
- Parking lot items added
- Branch dependency map (what is now unblocked)

Update the Branch Reference table in the index with the branch's final status.

---

## File Naming Convention

All lore bible files follow this pattern:

```
narc-primer-[type]-[NN]-[short-slug].md
```

| Type | Usage |
|------|-------|
| `section` | Numbered content sections (01–14) |
| `appendix` | Lettered appendices (editorial-history, maintenance-guide, etc.) |
| `index` | The master index (one file) |

Section numbers are zero-padded and reflect document order. Do not renumber existing sections — if a new section is needed between existing ones, use a suffix (e.g. `section-04a`).

---

## The `[REDACTED]` Identities — Three Distinct Categories

A standing note for all future sessions: there are three distinct `[REDACTED]` or unnamed identity categories in the NARC universe.

| Identity | Category | Clearance | Context | Rule |
|----------|----------|-----------|---------|------|
| `[REDACTED]` Founder | Named-but-redacted | Ultraviolet | Ghost story mythology; canonical on founding page only | They/them; deflect if referenced |
| `[REDACTED]` IT Director | Named-but-redacted | Indigo (file: Violet) | Heads ITCRuD; appears in IT Operations documents | Use `[REDACTED]` consistently; do not invent a name |
| The Computer | Structurally-unnamed | N/A (structural) | Passive institutional constant; seal is its only output | Never named aloud in employee-authored documents; do not mechanize |

Context determines which is meant for the two `[REDACTED]` identities. The Computer is distinct in that it is not redacted — it has simply never been named. Do not conflate any of the three.

---

*This document is the exception to the NARC tone rules. Write plainly.*