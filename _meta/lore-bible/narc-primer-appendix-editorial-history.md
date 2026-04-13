# NARC Lore Primer — Appendix: Editorial History

> This appendix records resolved conflicts, model observations, and ratification notes removed from the main section files during the BR-001 production conversion. It is a historical record, not reference material. Decisions are canonical; the reasoning here is for context only.

**Compiled:** BR-001 lore-consolidation review, 2026-03-22 — 2026-03-28

---

## Section 01 — What NARC Is

**Clearance level spectrum — resolution**
Full Paranoia RPG spectrum adopted: Infrared (lowest), Red, Orange, Yellow, Green, Blue, Indigo, Violet. Implementation mechanics deliberately undefined. Orange and Green confirmed in site content; Red confirmed via session 09 content; full spectrum ratified BR-001. Ultraviolet added as Founder-reserved level. Prior conflict: session 08 used individual colours without defining the full spectrum; session 09 cited the full Paranoia spectrum. Site source partially confirmed individual colours; full spectrum is now ratified as canonical.

---

## Section 02 — Canonical Org Structure

**Leadership roster conflict — resolution**
Sessions 01–04 (ChatGPT) did not define named characters. Session 05a established a different executive title structure (CEO/CTO/COO/CSO/CRO) with division codes NOPS/NIS/NSEC/NRD but no named individuals. Session 09 read `leadership.html` directly and confirmed the named character set. Site source file wins. The CSO and CRO titles are not canonical for the website. The ten named characters from `leadership.html` are the canonical leadership roster.

**John Smith character note — resolution**
"Does this cost money" beat originated in session 09 content, used twice (PR-2026-001 and meeting minutes), then documented as a consistent character convention. It was never explicitly established — it emerged from two uses. Ratified as a tendency, not a hard rule.

**Max Pitchman reply-all — resolution**
Attendance at IT planning meeting via reply-all incident established in MIN-2026-001 (session 09). No prior source. Ratified as a recurring structural joke.

**Division codes — resolution**
Codes (NOPS/NIS/NSEC/NRD) do not appear in site HTML pages; they appear in session-generated governance documents. Retained as a parallel internal taxonomy — the ambiguity between division codes and the five site departments is intentional and becomes a running joke.

**ITCRuD — resolution**
Prior sessions may have referenced the IT department differently. ITCRuD does not appear in any site source file. Ratified as an established sub-division of IT Operations, introduced site-wide.

**ARIA and NARC-Brew 3000 — resolution**
Both created entirely in session 09; not in any site source file. Ratified as site-wide characters. NARC-Brew 3000 location conflict: session 09 primer described it as "present in meeting rooms" (plural); lore dump and meeting minutes placed it specifically in Conference Room B. Resolved: fleet, not a single unit — everywhere. Conference Room B was the first documented location, not a fixed canonical location.

**Chuck Cheerful title — resolution**
Session 08 used "Mandatory Happiness Officer" in an R&D Plan approval table. Site-confirmed title is "Happiness Officer." "Mandatory" is cultural flavor, not a title modifier.

**The Computer direct-speech patterns — resolution**
Prior session content included direct-speech patterns: "The Computer has reviewed and authorized…", "The Computer does not reward assumptions.", "This is by order of the Computer." All invalidated. Employees do not speak The Computer's name directly.

**Internal Security Bureaucrat — status**
Role mentioned in README contributing section alongside the Happiness Officer. No named character has been assigned to this role. Remains unresolved pending future character development.

---

## Section 03 — Voice and Tone Rules

**NARC v1 blog style — resolution**
Session 09 lore dump flagged v1 as running hotter than site tone, created before site files were read, and recommended human review. The session 09 primer retained v1 as a valid production style without caveat. Two outputs from the same session in direct conflict. Resolution: v1 retired as a production style and archived. Three existing posts remain as a record of the experiment. Hybrid confirmed as the primary blog production style.

**Tone inconsistency across early sessions — closed**
Sessions 01, 02, 05a independently flagged tone inconsistency: some documents purely formal, others overtly satirical. Resolved by site source review in session 09: both registers are valid; the choice should be deliberate and consistent within a document. The tone spectrum in Section 03 formalizes this.

**"Citizens are reminded that…" — retired**
Phrase retired as a consequence of the Citizens → Employees terminology ruling. Replaced with "Employees are reminded that…"

**"Treason Event" — retired**
Phrase retired as a consequence of the Treason → Termination terminology ruling. Replaced with "Termination Event."

**Rule 11 — prior version superseded**
Prior Rule 11 stated: "Maximum two direct references to The Computer per document." Superseded by the "never named aloud" ruling established in BR-001. The Computer is acknowledged only through seals, stamps, and structural approval rows — never by name in employee-authored text.

---

## Section 04 — Document File Naming Convention

**`Corporate-Governance-` prefix — resolution**
Session 05b flagged that `Corporate-Governance-Internal-DocumentationStandards.md` uses a prefix that violates the `Corp-` convention defined in its own content. Site source files use `Corp-` consistently. `Corp-` is canonical. BR-002 action: rename the file.

**`IT-Operations-` vs `IT-` prefix — resolution**
Projects used `IT-Operations-` as a compound department code; formal documents used `IT-` alone. The `IT-Operations-` compound prefix breaks the site parser design. `IT-` is the sole canonical prefix for all IT documents and project cards. BR-002 action: rename all `IT-Operations-*` project card files.

---

## Section 05 — Document Format Templates Part A

**Metadata line break style — resolution**
Session 09 documents used `<br>` after metadata fields; original site documents used trailing spaces or plain newlines. Standardized on `<br>` — more explicit and universally supported. Existing site documents do not need retroactive fixing.

**Classification level strings — resolution**
Sessions 02 and 05b listed `TOP SECRET – INTERNAL` as a classification level alongside `TOP SECRET`. Resolved: `TOP SECRET` is the sole canonical top-secret string. If a document is Top Secret it is implicitly internal — the qualifier is redundant. `top-secret.svg` seal confirmed in site.

**Seal path inconsistency — resolution**
Session 05b documents used three different path patterns (`../images/seals/`, `../branding/seals/`, `branding/images/`). Canonical path from all `assets/` subdirectories is `../images/seals/[filename]`. Non-canonical paths flagged to BR-002 for correction; treated as reversible pending BR-002 scope decisions.

**Project card Status and Clearance fields — resolution**
Session 09 primer template added `Status` and `Clearance` fields; no existing site project cards had them. Adopted as new standard for all new project cards. Existing cards to be updated in BR-002.

**Timeline table format — resolution**
Three formats existed: 2-column (Phase / Target) from Project X; 3-column (Phase / Deliverable / Target) from MCP Media plan; 4-column (Phase / Workstream / Status / Dependencies) from session 09. 4-column adopted as default; project-flexible. Existing 2 and 3-column docs not retrofitted.

**`narc-seal.svg` in base memo format — note**
The site base format for the Official Memo references `./images/narc-seal.svg`. This seal is being retired (see Section 07). Documents using this base format should be updated to use `narc-internal-use-only-seal.svg` instead. BR-002 action.

---

## Section 06 — Document Format Templates Part B

**NARC v1 blog style — resolution**
See Section 03 editorial note. v1 retired as a production style; archived. Three posts remain as a record of the experiment.

**Project card structure — resolution**
Session 08 used `## Description` instead of `## Overview` and omitted `## TODO`. Session 09 verified from site source files that `## Overview`, `## Features`, `## Notes`, `## TODO` is the standard pattern. Site source wins.

---

## Section 07 — Available Seal and Image Assets

**Logo variant relationships — resolution**
Multiple sessions flagged logo variant inconsistency. Resolved via visual review. `narc-logo.svg` and `narc-banner.svg` are the active document assets. `logo2.svg` is repo-only. `logo1.svg` and `logo4.svg` are inactive pending design briefs. `logo3.svg` is experimental with no plans. `narc-logo-old.svg` is archived. `narc-seal.svg` is being retired.

**`confidential.svg` vs `confidential2.svg` — resolution**
Both present in site; purpose of `confidential2.svg` was unclear. Resolved: `confidential2.svg` matches the current seal style and is canonical. `confidential.svg` retired. BR-002 action: replace all references.

**`operations.svg` officer portrait — resolution**
File exists but no leadership character has a standalone "operations" role distinct from Robert Lee (COO). Confirmed as an old model with no current character assignment. Retired. BR-002 action: remove from active use.

**Architecture diagram aesthetic — resolution**
`architecture-mediamcpservers.svg` uses a green-on-black terminal aesthetic. No prior NARC architecture diagrams existed for comparison. Ratified as the NARC standard for all architecture diagrams.

---

## Section 08 — Blog Post Styles

**Blog section path — resolution**
Blog section does not yet exist on the site. All 12 existing blog posts have relative paths that assume a specific directory depth. Interim path set to `blogs/` from site root. Final path and structure owned by BR-004. All 12 posts will need relative path adjustments before going live.

**NARC v1 blog style — resolution**
See Section 03 editorial note.

---

## Section 10 — Model Observations

All model observations from this section resolved or closed during BR-001 review. See the production version of Section 10 for resolution summaries. Full rationale for each decision is distributed across the relevant section entries in this appendix.

---

## Section 11 — Part 2: Project-Specific Sections

**Session 09 docs Gitea push status — resolution**
IR-2026-001 project card was listed in the session 09 primer's `assets/projects/index.json`, implying it had been committed. It was not present in the site source zip used for this consolidation. Confirmed: session 09 documents are local files only, not yet pushed to Gitea or the live site.

---

## Section 12 — Part 3: Artifact Inventory

**`Corp-Template-LetterheadOfficial-Memo.md` naming error — resolution**
Both `Corp-Template-LetterheadOfficial-Memo.md` and `Corp-Templates-LetterheadOfficial-Memo.md` were present in the site. The missing `s` is a naming error. BR-002 action: rename to `Corp-Templates-LetterheadOfficial-Memo.md` and update `assets/index.json`.

**`Cybersecurity-Internal-PenTestSim.md` in assets/docs/ — resolution**
Listed in session 01 file manifest as a document in `assets/docs/`. Not found there in site source. A project card of the same name exists in `assets/projects/`. Confirmed as a session 01 manifest error — the file never existed in `assets/docs/`. The project card is the correct artifact.

**Session 09 documents push status — resolution**
See Section 11 editorial note.

---

## Section 13 — Appendix A: Open Questions Register

All 19 questions resolved. See production version of Section 13 for resolution summaries.

---

## Section 14 — Appendix B: Parking Lot

No editorial conflicts in this section. BR-002 action items consolidated from across all sections during BR-001 review.

---

*End of editorial history. All items recorded here are resolved. This document is for reference only.*

---

## BR-003 — Staff Dossiers (2026-04-10)

**Mary Johnson (CTO) — character notes established**
Lore Bible Section 02 had no extended character notes for the CTO beyond the site description. A ChatGPT character brief was reviewed and reconciled against site canon in BR-003. One conflict resolved: the site description "secretly fond of blinking status lights (non-blinking variant)" was interpreted as canonical — she is fond of status lights specifically in the non-blinking state (Option 2). The ChatGPT brief's inversion of this preference was rejected. Character notes added: translation layer role, Status Light Doctrine, management approach, relationship notes (Sparks, Lee, Doe, Firewall). Ratified BR-003 staff-dossiers, 2026-04-10.

**ITCRuD Director — character details confirmed**
The ITCRuD Director's entry in Section 02 previously contained only structural notes (name withheld by policy, reports to COO, responsible for servers/storage/networking/etc.). BR-003 human input confirmed: clearance Indigo; personnel file classification Violet (institutional anomaly, never acknowledged); Employee ID NARC-000 (origin unknown; investigations quietly closed); Start Date UNK (longest-serving non-founding employee; rumors of earlier tenure disregarded). Three lore beats added: COO relationship subtext (subtle, never acknowledged, definitively not there), clearance anomaly (quietly assumed, never confirmed), institutional deference (subtle tone shift, nothing stated). Ratified BR-003 staff-dossiers, 2026-04-10.

**Director, ITCRuD — title standardised**
Prior site content (MIN-2026-001 and other IR-2026-001 documents) used "IT Director, ITCRuD" as a title variant. Canonical title confirmed as "Director, ITCRuD". All instances in MIN-2026-001 corrected in BR-003. Remaining IR-2026-001 documents flagged for site-wide lore audit (future branch). Ratified BR-003 staff-dossiers, 2026-04-10.

**NARC-Brew 3000 — serial number system and usage authorisation added**
Fleet serial number format established: `NB3K-[LOCATION]-[BREW COUNT]-[SUFFIX]`. Location codes (CFR, BRK, SRV, EXC, LAB) and suffix registry (EP, DC, FR, CF, AM, PO, LX) defined. Five canonical unit examples registered. Usage authorisation confirmed as Infrared — all employees and guests authorised; consumption practically mandatory. Ratified BR-003 staff-dossiers, 2026-04-10.

**ARIA — NARC-Brew 3000 attendance logging convention established**
ARIA records NARC-Brew 3000 fleet units in meeting attendance by serial number only. Serial number appears in attendance list and nowhere else in the minutes. Multiple units in the same room listed as #1, #2, etc. Inter-unit advisory transmissions are logged by ARIA in appendix sections. No human attendee has acknowledged inter-unit transmissions. Ratified BR-003 staff-dossiers, 2026-04-10.

**The Computer — direct reference corrected in MIN-2026-001**
ARIA appendix in MIN-2026-001 contained the phrase "The Computer has been notified." This violates Rule 11 (employees do not invoke The Computer by name). Corrected to "Approval was obtained through established channels." Ratified BR-003 staff-dossiers, 2026-04-10.

**Alex Firewall — pronouns confirmed**
He/him and they/them are both canonical for Alex Firewall. He presents as masculine. No consistency requirement between or within documents. Confirmed BR-003 staff-dossiers, 2026-04-11.

---

# BR-001 Issues Register — Archived

All 31 issues raised during the lore-consolidation review. All resolved. Transferred from `narc-primer-index.md` during production conversion.

| ID | Section | Type | Summary | Q-Ref | Resolution |
|----|---------|------|---------|-------|------------|
| ISS-001 | 01 | Conflict | Clearance level spectrum — full Paranoia vs confirmed individual colours only. | Q-01 | Full spectrum adopted. Ultraviolet reserved for Founder. |
| ISS-002 | 02 | Model Flag | John Smith "does this cost money" — two uses, never explicitly established. Rule or tendency? | Q-05 | Tendency. Penny-pitcher; do not overplay. |
| ISS-003 | 02 | Model Flag | Max Pitchman reply-all attendance — no prior source. Recurring or one-off? | Q-06 | Recurring structural joke. |
| ISS-004 | 02 | Conflict | Division codes NOPS/NIS/NSEC/NRD — not in site HTML. Retain, reconcile, or retire? | Q-02 | Retained as pun-forward growing meta-joke. |
| ISS-005 | 02 | Model Flag | ARIA and NARC-Brew 3000 — session 09 only. Scope to IR-2026-001 or site-wide? | Q-04 | Site-wide. ARIA required for all meeting minutes. Brew-3000 is a fleet. |
| ISS-006 | 02 | Conflict | NARC-Brew 3000 location — "meeting rooms" (primer) vs Conference Room B (lore dump/minutes). | — | Fleet, not a single unit. Conference Room B was first documented location only. |
| ISS-007 | 02 | Model Flag | ITCRuD — not in site source. Add to HTML or keep docs-only? | Q-03 | Site-wide. Add to site HTML. |
| ISS-008 | 02 | Open Question | The Computer — develop lore or remain undefined? | Q-16 | Never named aloud. Dark urban legend. Presence through seals only. |
| ISS-009 | 02 | Conflict | "Mandatory Happiness Officer" (session 08) vs "Happiness Officer" (site). | — | "Happiness Officer" canonical. "Mandatory" is cultural flavor only. Motto: "Happiness is Mandatory." |
| ISS-010 | 03 | Conflict | NARC v1 blog style — lore dump flags it; primer retains it. Same session, direct conflict. | Q-08 | Retired and archived. Hybrid is primary; v2 for lore-leaning. |
| ISS-011 | 04 | Conflict | `Corporate-Governance-` prefix violates `Corp-` convention. | — | `Corp-` canonical. BR-002: rename file. |
| ISS-012 | 04 | Conflict | `IT-Operations-` vs `IT-` prefix inconsistency. | Q-13 | `IT-` sole canonical prefix. BR-002: rename all `IT-Operations-*` project cards. |
| ISS-013 | 05 | Conflict | Metadata line break style — `<br>` vs trailing spaces. | — | `<br>` standard. |
| ISS-014 | 05 | Conflict | `TOP SECRET – INTERNAL` vs `TOP SECRET` — one string or two levels? | — | `TOP SECRET` only. Qualifier redundant. |
| ISS-015 | 05 | Conflict | Seal path inconsistency — three patterns in session 05b docs. | — | `../images/seals/[filename]` canonical. BR-002: correct rogue paths. |
| ISS-016 | 05 | Conflict | Project card Status/Clearance fields — session 09 added them; no existing cards have them. | Q-19 | Adopted as new standard. BR-002: update existing cards. |
| ISS-017 | 05 | Conflict | Timeline table format — 2-col, 3-col, 4-col all in use. | Q-15 | 4-column default; project-flexible. Existing docs not retrofitted. |
| ISS-018 | 06, 08 | Conflict | NARC v1 blog style — cross-section duplicate of ISS-010. | Q-08 | Same resolution as ISS-010. |
| ISS-019 | 07, 10 | Conflict | Logo variant relationships — no documented use cases for numbered variants. | Q-07 | Use cases documented. `narc-seal.svg` retiring. See Section 07. |
| ISS-020 | 07 | Open Question | `confidential.svg` vs `confidential2.svg` — which canonical? | Q-14 | `confidential2.svg` canonical. `confidential.svg` retired. BR-002 action. |
| ISS-021 | 07 | Conflict | `operations.svg` — no matching leadership character. Duplicate or placeholder? | Q-11 | Old model; no character. Retired. BR-002 action. |
| ISS-022 | 08, 09 | Open Question | Blog section path — not yet built. Blocks 12 posts going live. | Q-17 | Interim: `blogs/` from site root. BR-004 owns final decision. |
| ISS-023 | 10 | Model Flag | Session 08 coinages in committed site docs — accept or flag non-expandable? | Q-09 | Accepted as NARC lore. NARC Lexicon to be created. |
| ISS-024 | 10 | Model Flag | Architecture diagram aesthetic — ratify green-on-black as standard? | Q-10 | Ratified as NARC diagram standard. |
| ISS-025 | 11, 12 | Open Question | Session 09 docs — pushed to Gitea or still local? | Q-18 | Local only. Not pushed to site. |
| ISS-026 | 12 | Conflict | `Corp-Template-` vs `Corp-Templates-` — duplicate or naming error? | Q-12 | Naming error. BR-002: rename and update index.json. |
| ISS-027 | 12 | Missing Artifact | `Cybersecurity-Internal-PenTestSim.md` in `assets/docs/` — never existed? | — | Session 01 manifest error. Project card in `assets/projects/` is the correct artifact. |
| ISS-028 | 02, 03 | Superseded | Direct-speech Computer references superseded by "never named aloud" ruling. | — | Applied to Sections 02 and 03. |
| ISS-029 | 01, 03 | Superseded | "Citizens" terminology superseded by "Employees." | — | Applied throughout. |
| ISS-030 | 01, 03 | Superseded | "Treason / Treason Event" superseded by "Termination." | — | Applied throughout. |
| ISS-031 | 02 | Open Question | `[REDACTED]` Founder — lore baseline needed. | — | Founder lore established. They/them. Ghost story mythology. See Section 02. |

---

# BR-001 Lore Rulings — Archived

All decisions made during the BR-001 review session. Transferred from `narc-primer-index.md` during production conversion. These rulings are now reflected in the canonical section text.

| Ruling | Decision | Issues resolved |
|--------|----------|-----------------|
| The Computer — use pattern | Omnipresent but never named aloud by employees. Dark urban legend. Presence felt through seals, stamps, approval blocks only. Direct-speech patterns invalidated. | ISS-008, ISS-028 |
| Terminology: Citizens → Employees | "Citizens" is governmental framing; NARC is corporate. "Employees" throughout. | ISS-029 |
| Terminology: Treason / Treason Event → Termination | "We don't really kill people, just their will to live." Termination and variants throughout. | ISS-030 |
| Terminology: Corporate clones → Corporate drones | Drones, not clones. | — |
| Clearance level spectrum | Full Paranoia RPG spectrum: Infrared (lowest), Red, Orange, Yellow, Green, Blue, Indigo, Violet. Ultraviolet reserved for `[REDACTED]` Founder only. Implementation mechanics undefined. | ISS-001 |
| Founded: 2025 | Ratified as canonical. Founding page planned. | — |
| Footer variants | Theme, not fixed strings. New footers match register, not copy exactly. | — |
| `[REDACTED]` Founder lore baseline | They/them. Ghost story mythology. Probably exists; no one has seen them; anyone claiming to have is obviously lying. CEO is functional top of visible org. Deflect if referenced. Canonical: founding page only. Two distinct `[REDACTED]` identities: Founder (Ultraviolet) and ITCRuD Director. | ISS-031 |
| John Smith — character tendency | Penny-pitcher tendency, not a catchphrase. Do not overplay. | ISS-002 |
| Max Pitchman — recurring structural joke | Corporate used-car salesman energy. Marketing ends up in technical meetings via bureaucratic accident. | ISS-003 |
| Division structure | Pun-forward, growing meta-joke. List grows, never fully acknowledged. Founding set NOPS/NIS/NSEC/NRD retained. | ISS-004 |
| ITCRuD — site-wide | Introduced site-wide. Add to site HTML. | ISS-007 |
| ARIA — site-wide, required for meeting minutes | Site-wide. Required for all meeting minutes. Project card and lore bio needed. | ISS-005 (partial) |
| NARC-Brew 3000 — fleet, ambient, largely ignored | Fleet, not a single unit. Everywhere. Not looming. ARIA logs advisories; everyone else ignores them. R&D origin (CoffeeBot AI project card). | ISS-005 (partial), ISS-006 |
| Chuck Cheerful — title and motto | Formal title: Happiness Officer. Motto: "Happiness is Mandatory." | ISS-009 |
| NARC v1 blog style — retired | Archived. Hybrid is primary production style; v2 for lore-leaning. | ISS-010, ISS-018 |
| Corp- prefix — canonical | Sole canonical prefix for corporate/governance docs. `Corporate-Governance-` retired. | ISS-011 |
| IT- prefix — standardized | Sole canonical IT prefix. `IT-Operations-` retired. BR-002: rename all affected files. | ISS-012 |
| Metadata line break style: `<br>` | Standard for all new document headers. | ISS-013 |
| Classification level: TOP SECRET only | Single canonical top-secret string. `TOP SECRET – INTERNAL` retired. | ISS-014 |
| Seal paths: `../images/seals/[filename]` canonical | From all `assets/` subdirectories. Reversible pending BR-002. | ISS-015 |
| Project card Status and Clearance fields | New standard for all new project cards. Existing cards updated in BR-002. | ISS-016 |
| Timeline table: 4-column default, project-flexible | Default for new documents; fewer columns permitted if content warrants. | ISS-017 |
| Logo variant canonical use cases | Documented per logo. `narc-logo.svg` and `narc-banner.svg` active. `narc-seal.svg` retiring. See Section 07. | ISS-019 |
| `confidential2.svg` canonical | `confidential.svg` retired. BR-002: replace all references. | ISS-020 |
| `operations.svg` portrait retired | Old model; no character. BR-002: remove from active use. | ISS-021 |
| Blog section interim path: `blogs/` | From site root. BR-004 owns final decision. | ISS-022 |
| Session 08 coinages accepted as NARC lore | Complexity Points, Approved Language Registry, Class 2 Infraction, Form 27-C. NARC Lexicon to be created. | ISS-023 |
| Green-on-black terminal aesthetic: NARC diagram standard | Ratified. All architecture diagrams follow this aesthetic. | ISS-024 |
| Session 09 docs: local only | Not pushed to Gitea or live site. | ISS-025 |
| `Corp-Template-` naming error | BR-002: rename to `Corp-Templates-`. | ISS-026 |
| `Cybersecurity-Internal-PenTestSim.md` — never existed in docs | Session 01 manifest error. No action needed. | ISS-027 |

---

*End of BR-001 archived records.*