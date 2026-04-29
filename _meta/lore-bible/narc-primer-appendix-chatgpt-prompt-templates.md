# NARC Lore Development — ChatGPT Prompt Templates
**Filed By:** BR-003 session<br>
**Date:** 2026-04-10<br>
**Purpose:** Prompts for developing character lore via ChatGPT for subsequent review and incorporation into the NARC Lore Bible.<br>

> **Usage note:** These prompts are designed to produce author-facing design documents, not in-universe content. Output should be reviewed for canon conflicts before incorporation. The Mary Johnson review process (BR-003) is the reference model — check against site descriptions first, translate author notes to assessor voice for dossiers.

---

## PROMPT 01 — Character Lore Development (Named Character)

Use for: any named character with an existing site description and minimal extended notes.

```
You are helping develop lore for a fictional corporate entity called NARC (Not A Real Company).
NARC is a mock-corporate homelab website. The tone is a cross between Paranoia TTRPG, Cyberpunk,
and corporate satire — overcorporatized, absurdist, and played completely straight. The humor
lives in the gap between corporate seriousness and obviously fictional subject matter. Characters
are never cartoonish — they are specific, earnest, and bureaucratic.

I need a character lore profile for the following character. This is an AUTHOR-FACING design
document, not in-universe content — write it as a character brief, not a personnel file.

CHARACTER:
- Name: [NAME]
- Title: [TITLE]
- Site description (canonical): "[EXACT SITE DESCRIPTION TEXT]"
- Known beats (canonical): [LIST ANY ESTABLISHED BEATS, OR "None established beyond site description"]

Please develop:
1. Core identity and archetype (2-3 sentences)
2. Personality — surface traits (what colleagues observe) vs underlying traits (what actually drives them)
3. A signature contradiction or tension that defines them
4. Relationship notes for 2-3 key colleagues they interact with
5. Behavioral quirks — specific, not generic; the more absurd the detail the better, provided it stays deadpan
6. Speech pattern and 3-5 example lines in their voice
7. A summary line (1 sentence)

Constraints:
- Do not make them cartoonish. One strong specific beat is better than five generic ones.
- Their humor must live in what they do seriously, not in what they say humorously.
- Do not break the corporate frame. No winking at the camera.
- Do not contradict the site description or known beats listed above.
```

---

## PROMPT 02 — Relationship Dynamics (Two Characters)

Use for: developing the specific texture of how two characters interact, for use in dossier Known Associates sections and future document writing.

```
You are helping develop lore for NARC (Not A Real Company), a mock-corporate homelab entity.
Tone: corporate satire played completely straight. Paranoia TTRPG meets bureaucratic deadpan.
Characters are earnest, specific, and never acknowledge that anything is absurd.

I need relationship notes for the following two NARC characters. This is an author-facing
document — write it as a relationship brief, not in-universe content.

CHARACTER A:
- Name: [NAME]
- Title: [TITLE]
- Key traits: [BRIEF SUMMARY]

CHARACTER B:
- Name: [NAME]
- Title: [TITLE]
- Key traits: [BRIEF SUMMARY]

Please develop:
1. The structural relationship (reporting line, adjacent authority, peer, etc.)
2. The functional dynamic — how do they actually work together day to day?
3. The tension or friction point, if any — what do they disagree about, and how do they handle it?
4. A defining interaction pattern — something that happens repeatedly and is specific to these two
5. What each thinks of the other (unspoken, never stated in documents)
6. One line that captures the relationship dynamic

Constraints:
- Keep it specific. Generic "they work well together" is not useful.
- Tension should be bureaucratic or professional, not personal drama.
- Neither character should be the villain. Both are earnest.
- Do not contradict established canonical details.
```

---

## PROMPT 03 — Incident or Event Development

Use for: generating plausible in-universe incidents for incident history sections, meeting minutes color, or future document content.

```
You are helping develop lore for NARC (Not A Real Company), a mock-corporate homelab entity.
Tone: corporate satire played completely straight. Everything is treated with institutional
seriousness. Absurdity is in the situation, not in how it is described.

I need a plausible NARC incident involving the following character(s). This will be used as
source material for personnel file incident history and future meeting minutes.

CHARACTERS INVOLVED: [NAMES AND TITLES]
INCIDENT DOMAIN: [e.g., IT infrastructure / HR compliance / security / R&D prototype]
ROUGH SHAPE (optional): [any seed idea, or leave blank]

Please produce:
1. Incident summary — 2-3 sentences, passive voice, bureaucratic framing
2. How each character responded (in character, consistent with their established traits)
3. Formal resolution status (closed / outstanding / under review)
4. Any paperwork, forms, or documentation generated as a result
5. What was NOT said about it afterward, and by whom

Constraints:
- No one is the villain. Things go wrong because of process, ambiguity, or NARC being NARC.
- Every incident generates documentation. That is non-negotiable.
- ARIA would have recorded it. Write it as if ARIA's transcript exists somewhere.
- The incident should be plausible enough to be real, absurd enough to be NARC.
```

---

## PROMPT 04 — Voice and Document Sample

Use for: generating in-universe document samples (memos, policy notices, meeting minutes entries) in a specific character's voice, for review and possible direct use.

```
You are writing in-universe content for NARC (Not A Real Company), a mock-corporate homelab
entity. The tone is overcorporatized, deadpan, and played completely straight. The author voice
is a mid-level compliance officer who believes the procedures are reasonable. Never break the
frame. Never acknowledge the joke.

Write a [DOCUMENT TYPE: memo / policy notice / meeting minutes excerpt / email] authored by or
concerning [CHARACTER NAME, TITLE].

Context: [BRIEF DESCRIPTION OF WHAT THE DOCUMENT IS ABOUT]

Character voice notes:
[PASTE RELEVANT SPEECH PATTERN AND EXAMPLE LINES FROM THEIR CHARACTER BRIEF]

Requirements:
- Use <br> after metadata fields in document headers
- Classification level: [LEVEL] — include as a header field
- Include an approval or filing note at the end
- Keep humor in subordinate positions: parentheticals, footnotes, table cells, subordinate clauses
- Do not editorialize. Do not wink. Do not explain the joke.
- Length: [SHORT (1 paragraph) / STANDARD (1 page) / FULL DOCUMENT]
```

---

## PROMPT 05 — Internal Security File Generation

*Added BR-003v4, 2026-04-20.*

Use for: generating populated Internal Security file data for a named character, using the `SECFILE-TEMPLATE-InternalSecurityFileTemplate.md` as the structural target. Output should be reviewed for canon conflicts before incorporation. The file content should feel like the product of passive continuous observation, not active investigation — Watchful already knows; the file records that he knows.

**Required secondary data to supply with this prompt:**
- Character's HR dossier (paste full text)
- Character's Section 02 entry from the Lore Bible (paste relevant section)
- Character's lore bio if available (paste full text or key beats)
- Any incident history involving the character (paste relevant INC entries)
- Any cross-character notes involving the character (paste relevant relationship notes)

```
You are generating content for an Internal Security file for the fictional corporate entity NARC
(Not A Real Company). NARC is a mock-corporate homelab with a tone drawn from Paranoia TTRPG
and corporate satire — overcorporatized, deadpan, played completely straight.

The Internal Security file is maintained by Victor Watchful, Head of Internal Security. It is
NOT an HR document. Where the HR dossier records what someone does officially, the security file
records what Internal Security has observed. The file knows things the HR dossier doesn't. The
HR dossier knows things the file doesn't. Neither is complete.

Victor Watchful's character register:
- Always already informed. He does not learn things; he recognizes them.
- Passive voice throughout all documentation. No attribution.
- Observations are stated as facts, not as inferences.
- Nothing is alarming. Everything is noted.
- The absence of a record is itself a record.
- Nothing is explained. Everything is documented.

File structure to populate (use the section headings below exactly):

1. IDENTITY — pull from HR dossier; note any discrepancies between HR file and observed reality
2. RISK CLASSIFICATION — a single categorical label. The label implies more than it states.
   It is not a score. No scale is published. Examples of the register: "Ambient," "Monitored,"
   "Structural," "Notable," "Consistent." The label is the complete record. Do not explain it.
3. ACCESS PATTERN — where this person goes in the facility, how often, and what Internal
   Security has noted about the pattern. Include at least one anomaly entry if the character has
   any unusual behaviors (e.g., Unit-FELIS's access pattern; Watchful's own non-logged access).
   Format as table: Location | Frequency | Pattern Notes | Anomalies
4. INCIDENT NOTATIONS — Internal Security's view of incidents involving this character. Not all
   HR incidents appear here. Some entries here have no HR counterpart. Format as table:
   Ref | Date | Nature | Disposition
   Disposition values: Noted / Monitoring / Closed — No Action
5. KNOWN ASSOCIATES — observed contact patterns. Security relevance column uses:
   Noted / Under Observation / Cleared / No Flag
   Format as table: Name | Relationship | Security Relevance | Notes
6. CONTINUITY RECORD REFERENCE — does a CONTINUITY RECORD entry exist for this subject?
   State yes (with IS-CR reference number) or "No entry on file." Do not reproduce the entry.
7. ASSESSOR NOTES — 1-3 sentences, passive voice, no authorship. States what has been observed
   and what the current standing assessment is. Ends with: "No further action is indicated at
   this time."

Character data (supply all available):

HR DOSSIER:
[PASTE FULL DOSSIER TEXT]

SECTION 02 ENTRY:
[PASTE RELEVANT SECTION 02 TEXT]

LORE BIO (key beats):
[PASTE LORE BIO OR KEY BEATS]

INCIDENT HISTORY (if any):
[PASTE RELEVANT INCIDENT ENTRIES]

CROSS-CHARACTER NOTES:
[PASTE RELEVANT RELATIONSHIP/ASSOCIATE NOTES]

Constraints:
- Passive voice throughout. No first person. No authorship.
- The file observes; it does not investigate, conclude, or recommend.
- Do not reproduce HR dossier content verbatim — the security file sees the same person
  differently, not the same information formatted differently.
- Nothing is alarming. Everything is noted. The register is flat regardless of content.
- The classification label is a single word or short phrase. Do not explain it in the file.
- Incident notation Nature field: one line, neutral framing, no judgment.
- Keep Assessor Notes to 1-3 sentences. End with the standard closing line exactly as written
  in the template.
- CONTINUITY RECORD entries exist for very few subjects. Default to "No entry on file" unless
  the character has a specific documented IS interaction (e.g., Unit-FELIS INC-FELIS-006a).
```

---

## PROMPT 06 — Risk Classification Label Generation

*Added BR-003v4, 2026-04-20.*

Use for: generating a bank of appropriate Risk Classification labels for Internal Security files. Labels are single categorical designations — no scale, no explanation, no published criteria. The label implies more than it states. This prompt generates a vocabulary set for author use; individual labels are then assigned per character at author discretion.

```
You are generating Risk Classification vocabulary for the Internal Security files of NARC
(Not A Real Company), a mock-corporate homelab entity with a Paranoia TTRPG / corporate satire
tone. The tone is deadpan, overcorporatized, and played completely straight.

Internal Security classifies each subject with a single categorical label. The label:
- Is one word or a short phrase (2-3 words maximum)
- Implies more than it states — the reader should feel they almost understand it
- Does not map to a published scale or scoring system
- Could be applied to a human, an AI system, a coffee machine, or a cat without becoming absurd
- Sounds plausible as an actual security classification — not humorous on its face
- The comedy, if any, comes from its application to a specific subject, not from the label itself

For reference, here is the range of subjects who will receive security files. The label must
work across this entire range:
- Senior executives (CEO, CFO, COO, CTO, etc.)
- Department heads (CISO, HR Director, Happiness Officer, etc.)
- AI systems (ARIA v2.1, Claude AI Consultant)
- Non-human entities (NARC-Brew 3000 fleet, Unit-FELIS the cat)
- Technical staff ([REDACTED] ITCRuD Director)
- Victor Watchful himself (if his own file exists — it may not)

Please generate 20 candidate classification labels. For each, provide:
1. The label itself
2. One sentence describing the register it implies (author-facing only — this note does NOT
   appear in the security file)
3. One example subject it would plausibly be assigned to, and why

Do not generate labels that:
- Sound like threat levels ("High Risk," "Dangerous," "Critical")
- Sound like HR performance categories ("Satisfactory," "Exceeds Expectations")
- Are self-explanatory ("Being Watched," "Suspicious")
- Break the deadpan register by being obviously funny on their own

The label should feel like it belongs in a classified filing system that knows exactly what
it means and has chosen not to explain it.
```

---

*Prompts 05 and 06 added BR-003v4, 2026-04-20. For security file template, see*
*`assets/docs/security/SECFILE-TEMPLATE-InternalSecurityFileTemplate.md`.*
*Review all output against the NARC Lore Bible before incorporation.*
