# NARC Content Generation Kickoff Prompt
## Version: 1.0
## Date: 2026-04-24

---

```
I need your help creating content for the NARC website.

NARC (Not A Real Company) is a mock-corporate homelab environment at
notarealcompany.enterprises. It presents real infrastructure documentation inside
a fictional corporate framing. The humor comes from playing the corporate register
completely straight — the author voice never breaks character.

---

## Step 1 — Read the Lore Bible Before Writing Anything

The lore bible is located at:
  /projects/narc-website/_meta/lore-bible/

Read the following before producing any content:

  narc-primer-index.md          — structure overview and section map
  narc-primer-section-01-what-narc-is.md
  narc-primer-section-02-canonical-org-structure.md
  narc-primer-section-03-voice-and-tone-rules.md

If producing blog posts, also read:
  narc-primer-section-08-blog-styles.md     — style definitions and format rules

If producing document artifacts, also read the relevant section for that document
type (change requests, runbooks, memos, etc.) — check the primer index for the
correct section number.

Do not begin writing until you have read the applicable sections. Confirm you have
read them before proceeding.

---

## Step 2 — Review Existing Examples

Before writing new content, read at least one existing example of the output type
you are producing. Use these as format references — do not copy content.

Blog post examples (live, lore-compliant):
  /projects/narc-website/blogs/IR-2026-001/blog-narc-v2-post-01.md
  /projects/narc-website/blogs/IR-2026-001/blog-narc-v2-post-02.md
  /projects/narc-website/blogs/IR-2026-001/blog-hybrid-post-01.md
  /projects/narc-website/blogs/IR-2026-001/blog-hybrid-post-02.md

Document artifact examples (live, lore-compliant):
  /projects/narc-website/assets/projects/it/IR-2026-001/
  (contains: change requests, runbooks, memos, meeting minutes, purchase requests,
  hardware acceptance records, project plan, system design)

---

## Step 3 — Understand the Two Content Types

### Blog Posts

Two production styles. Choose based on the brief provided:

**Hybrid** (primary style — use by default unless told otherwise)
- NARC memo header table (TO / FROM / IT Director / CC / RE / DATE /
  CLASSIFICATION / APPROVED BY)
- One-paragraph summary in straight corporate voice
- Single italicized NARC aside below the summary
- Body: first-person technical narrative — the person doing the work, not an
  institution filing paperwork — with section headings, tables, code blocks as
  needed
- References block at the end
- ITCRuD footer

**NARC v2** (for lore-leaning or formal-register posts)
- NARC banner image header
- Document metadata block (Document Owner, IT Director, Reviewed By, Approved By
  seal, Version, Date, Classification)
- Compliance callout blockquote at top
- Body: ITCRuD filing an official report — numbered sections, formal register,
  decisions "ratified," tables for specs
- References block at the end
- ITCRuD footer

**NARC v1 is archived.** Do not produce new v1 content.

### Document Artifacts

Artifacts are formal NARC internal documents. Types and their formats are defined
in the primer. When producing an artifact:

- Use the correct document type template from the primer
- Assign the next available reference number in the correct series:
    CR-[YEAR]-[NNN]   Change Request
    ICR-[YEAR]-[NNN]  Incident Report
    HAR-[YEAR]-[NNN]  Hardware Acceptance Record
    PR-[YEAR]-[NNN]   Purchase Request
    MIN-[YEAR]-[NNN]  Meeting Minutes
- Check existing files in the project directory to determine the current highest
  number before assigning a new one
- Cross-reference all related documents in the Related Documents footer
- Output files to the correct directory:
    Blog posts:    /projects/narc-website/blogs/[PROJECT-ID]/
    Artifacts:     /projects/narc-website/assets/projects/[dept]/[PROJECT-ID]/

---

## Step 4 — Mandatory Voice Compliance Checks

Before outputting any content, verify against these hard rules from the lore bible.
Violations must be corrected before the file is written.

**Terminology**
- "Employees" — not "Citizens" (retired, BR-001)
- "Termination Event" — not "Treason Event" (retired, BR-001)
- "Employees are reminded that..." — not "Citizens are reminded that..."

**The Computer (Rule 11 — non-negotiable)**
- Employees never name The Computer directly in document body text
- The Computer appears only as: the approval seal image, or a row in an Approvals
  table
- Invalid: "The Computer recommends it." / "The Computer is pleased." /
  "The Computer approved of the thoroughness." / any sentence where an employee
  speaks The Computer's name
- Valid replacement: "Approval was obtained through established channels." /
  "Continuation has been approved through established channels." / no sentence at
  all — remove the line

**NARC-Brew 3000 advisory format**
- Format: `ADVISORY: [message]`
- Scope: beverage-adjacent commentary only
- `SESSION SUMMARY:` label belongs to ARIA, not the Brew 3000

**ARIA**
- Required author of all meeting minutes — no exceptions
- Official record: sterile, complete, formally authoritative
- Appendix: observational, non-authoritative, more frequently consulted; explicitly
  marked "not part of official record"

**John Smith (CFO)**
- Notices costs; will mention it; not a catchphrase — do not overplay
- Documented quote register: "Does this cost what I think it costs?" — treat as a
  register template, not a line to reproduce verbatim

---

## Step 5 — Output Requirements

- Write files directly to the filesystem at the correct paths
- Use targeted edits if modifying existing files — do not rewrite entire files
- File naming: follow the established convention
    Blog posts:  blog-[style]-post-[NN].md  or  blog-[style]-[slug].md
    Artifacts:   [Dept]-[DocType]-[Visibility]-[Title]-[Year].md
- After completing each logical batch of files, confirm what was written and the
  paths used

---

## What I Need From You Now

[REPLACE THIS SECTION WITH YOUR SPECIFIC REQUEST]

Examples:
- "Write a hybrid and NARC v2 blog post about [topic] for project [ID]."
- "Generate a change request for [change description] — the next CR number is
  CR-2026-004."
- "Produce meeting minutes for the [session name] session — attendees were [list]."
- "Create a purchase request for [items] — this is PR-2026-002."

Provide:
1. The topic or event to document
2. The project ID and any relevant reference numbers already in use
3. Any specific technical content, decisions, or characters to include
4. Any reference links to include in a references block
5. The target output style (hybrid / NARC v2 / artifact type)

Do not begin writing until I have provided this information and you have confirmed
you have read the applicable lore bible sections.
```

---

## Usage Notes (not part of the prompt)

**What this prompt does:**
Establishes the correct reading sequence (lore bible → examples → write), enforces
the hard compliance rules that most sessions violate (The Computer, terminology,
Brew 3000 scope), and provides a clear handoff point where the user specifies the
actual task.

**What the user needs to provide after sending this prompt:**
- Topic / event / change being documented
- Project ID (e.g. IR-2026-001)
- Next reference numbers in each series (check existing files first)
- Technical content — decisions made, hardware involved, people in the room
- Any external reference links (manufacturer docs, guides, etc.)
- Style choice: hybrid, NARC v2, or artifact type

**Lore bible dependency:**
This prompt assumes the lore bible at `/projects/narc-website/_meta/lore-bible/`
is current and accessible via filesystem MCP. If running in a session without
filesystem access, the user must paste the relevant primer sections directly into
the conversation before the model begins writing.

**Known issue — hybrid posts:**
As of 2026-04-24, the hybrid blog posts in IR-2026-001 retain some pre-consolidation
language ("Citizens" in the memo summary block; a direct Computer invocation in
post-01). These have not yet been corrected. When producing new hybrid posts, follow
the lore-compliant format, not the existing hybrid examples for those specific lines.
The NARC v2 posts and project artifact files are lore-compliant and safe to use as
format references without reservation.

**Section 08 blog styles:**
If `narc-primer-section-08-blog-styles.md` does not yet exist in the lore bible,
the session should use `narc-primer-section-03-voice-and-tone-rules.md` (which
contains the tone calibration and blog style notes) and the existing example files
as the combined format reference.
