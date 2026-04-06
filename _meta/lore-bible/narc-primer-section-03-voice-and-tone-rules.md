# NARC Lore Primer — Section 03: Voice and Tone Rules

> **Cross-references:** Section 01 (what NARC is — core tone rule), Section 02 (org structure — character beats), Section 08 (blog styles — tone calibration)

---

## 3. Voice and Tone Rules

These are prescriptive rules synthesized from site source files and session observations. A cold session should read this section and know exactly what to do.

### The Foundation: Commitment

**Never break the frame.** The humor lives in the gap between the corporate seriousness of the writing and the obviously fictional/homelab subject matter. The moment the text acknowledges it is being funny, it stops being funny.

The NARC author voice is a mid-level compliance officer. This person believes the procedures are reasonable. They are not satirically incompetent — they are earnestly bureaucratic, and that earnestness is the joke.

### Rule 1: Straight face, always

Every sentence is written as if it is policy. Absurd consequences are named as formal categories, not described. "Termination Event" is more effective than "will be punished" because it implies an entire institutional apparatus without specifying it.

- ✓ "Attempts to access Unauthorized Directories are a Termination Event."
- ✓ "Employees advised to watch fewer films." *(in a risk mitigation column)*
- ✗ "Ha, as if you'd try to access an unauthorized directory! But seriously, don't."

### Rule 2: Jokes go in subordinate positions

Factual content is straight. Humor is delivered in parentheticals, footnotes, risk table mitigation cells, and subordinate clauses. The column format or table structure implies seriousness; placing the absurd entry there makes it land harder.

- ✓ "Free Coffee (if the coffee machine is working)" *(in a benefits table)*
- ✓ "Employees must not publish packages in an unapproved order." *(matter-of-fact, in a deliverables list)*
- ✓ Risk table mitigation: "Do not make eye contact."

### Rule 3: Bureaucratic escalation of the mundane

Treat mundane homelab tasks with the formality reserved for critical corporate operations. Every process has a form. Every decision has been approved. Every anomaly has been noted.

- ✓ A homelab VPN guide referenced as a required provisioning step for new associates
- ✓ Action items include "Refill coffee reserves in Conference Room B — Open — Unassigned" alongside real technical items, both treated with equal seriousness

### Rule 4: Compliance framing of user benefit

Features are things the organization *permits* or *approves*, not things the user gains. Approval is structural and implicit — it appears as a seal. Employees comply.

- ✓ "Formats approved for internal use" *(not "your preferred format")*
- ✓ "Delegating tasks to AI is Efficiency-Compliant behaviour and will be noted positively in their Quarterly Loyalty Assessment"

### Rule 5: Specificity over generality

Specific absurd details outperform vague silliness. Measurements, thresholds, and names land harder than general humor.

- ✓ "ARIA timed the IT Director's 2.3-second pause."
- ✓ "Victor Watchful was informed as a precaution. Victor Watchful is always informed as a precaution."
- ✗ "The security person was watching, as usual."

### Rule 6: Cumulative deadpan

Multiple straight-faced sentences in sequence where absurdity compounds. Each sentence is individually plausible; together they are clearly a joke. The NARC-Brew 3000's three meeting contributions work because each escalates while remaining in the `ADVISORY:` format.

### Rule 7: Characters used for specific moments

Deploy characters once per section with a contribution matching their personality, then let them disappear. Overuse within a single document weakens the effect. Alex Firewall files objections. Chuck Cheerful tracks morale with numbers. John Smith asks if it costs money. These are beats, not running commentary.

Do not make characters cartoonish. Each has a defined role; their contribution should reflect that role specifically. Generic bureaucratic behavior assigned to a named character wastes the character.[^1]

### Rule 8: "Has been noted" is a universal tool

Apply to anything embarrassing, risky, or awkward — including the fact that something has already been noted multiple times. "This has been decided. Do not reopen it." works the same way. These are complete sentences that shut down discussion bureaucratically.

### Rule 9: Passive voice for things that went wrong

When documenting failures, near-misses, or awkward decisions, passive voice is the appropriate corporate instrument. The thing was found to be a certain way. Nobody caused it.

- ✓ "The backup posture was found to be insufficiently documented."[^1]
- ✓ "Non-ECC RAM was determined to be present in the configuration."
- ✗ "We found out the backups weren't documented."

### Rule 10: Everything gets filed

Objections, opinions, feelings, concerns — all of them get filed. Characters don't just have opinions; their opinions are on record.

- ✓ "Alex Firewall has opinions. They are on file."[^1]
- ✓ "The IT Director's reservations have been noted and will be reviewed at the next available compliance window."
- ✓ Clearance levels appear at the top of documents and in footers — they frame every document as an artifact of the institutional apparatus

### Rule 11: The Computer — never named aloud[^2]

The Computer is present everywhere and acknowledged nowhere. Employees do not invoke it by name in documents. Its presence is structural: it appears as a seal, a stamp, an approval row. The effect comes from what is not said.

- Effective: an approval table row bearing the seal and nothing else.
- Effective: a document that defers to an unnamed authority with institutional weight.
- Not effective: any sentence where an employee directly invokes The Computer by name.

### Tone Calibration: The Spectrum

NARC content exists on a spectrum. Both ends are valid; the choice should be deliberate and consistent within a document.

**Restrained end** (existing site documents as baseline):
VPN Setup Guide, Password Rotation Policy, HR Handbook. Corporate formal structure, very light satirical touches, humor embedded in single phrases ("Avoid workplace sabotage (even for fun)"). Could pass for a real document with minor editing.

**Heightened end** (Alpha Complex flavor):
MCP Media R&D Plan, Media MCP System Design. Full Paranoia framing, clearance levels, Termination Events, employees addressed formally. Clearly satirical in register but internally consistent — still never winks at the camera.

**Blog production styles:[^2]**

- **Hybrid** — primary style for project and tech-focused blog posts. Genuine utility, NARC framing, accessible to a general reader. Memo header structure, first-person technical body.
- **NARC v2** — for lore-leaning posts if that content type develops. Calibrated against site tone; does not saturate.
- **NARC v1** — archived. Three posts exist as a record of the experiment. Ran too hot; hard to follow for a general reader. No new v1 content to be commissioned.

### What Works (confirmed from site content)

- Memo callouts: `<div class="memo">` blocks on site pages — brief, deadpan, in-universe notices[^3]
- "Compliance Bot is watching gently." — from `index.html` memo block[^3]
- "Please ensure your imaginary badge is visible at all times." — from `index.html`[^3]
- "Please include a relevant GIF with all project proposals." — from `departments.html` memo[^3]
- Risk tables with absurd mitigation cells[^3]
- Benefit listed alongside a realistic caveat: "Free Coffee (if the coffee machine is working)"[^3]
- ARIA's clinical measurements in meeting minutes[^1]
- Termination Events as consequence labels[^1][^2]
- Action items with absurd entries alongside real ones, equal weight[^1]

### What Does Not Work

- Acknowledging the joke inside the document body
- Emoji inside formal documents (site pages use emoji in navigation buttons; content documents do not)
- Overuse of any single character within one document — rotate clearance levels, Compliance Bot, characters
- Naming The Computer directly in employee-authored content — it appears through seals and structure only
- Making characters cartoonish rather than specific — each has a defined role; use them accordingly[^1]
- Generic corporate-speak without the specific NARC details that make it land[^1]
- Slapstick or absurdist humor that breaks plausibility within the corporate frame
- Explicitly calling something "funny" or "satirical" in document content

### Established Recurring Bits — Usage Guidance

| Bit / Phrase | Usage |
|---|---|
| "Compliance Bot is watching gently." | Site page memo blocks; tone-setting for in-universe notices.[^3] |
| "Imaginary badge" | Onboarding, welcome content, casual references.[^3] |
| "Mandatory fun" | Chuck Cheerful's domain; tone element in HR/morale content.[^3] |
| "Happiness is Mandatory." | Chuck Cheerful's department motto; cultural flavor, not a title modifier.[^2] |
| Approval seal / "Approved by the Computer" row | Document approval blocks and Approvals tables — structural reference only; employees do not speak the name.[^2][^3] |
| "Has been noted" | Acknowledge anything awkward or risky; can be used for things already noted multiple times.[^1] |
| "This has been decided. Do not reopen it." | Settled questions; bureaucratic finality.[^1] |
| "Employees are reminded that…" | Policy notices, gentle warnings, rules.[^2] |
| "Termination Event" | Serious violation consequence label.[^2][^3] |
| Carrier pigeon | Recurring experimental option that never gets implemented.[^3] |
| "prod-but-actually-test" environment named after a movie character, treated as sacred | IT Operations references.[^3] |
| "Happy Packets" | ITCRuD internal metric for data integrity; named by Chuck Cheerful despite attempts to un-name it.[^3] |
| "For science" | Dr. Sylvia Sparks's justification for risky experiments.[^3] |
| "Packet-sniffing ferret" | Alex Firewall character beat.[^3] |
| "Essentially vibes" | Retired phrase — former backup strategy; do not reuse.[^1] |
| "Buzzword optimization" | Max Pitchman / Marketing character beat.[^3] |
| NARC-Brew 3000 `ADVISORY:` format | `ADVISORY: [message]` — fleet-wide coffee machine advisory format; logged by ARIA, largely ignored by everyone else.[^2] |
| John Smith cost awareness | CFO penny-pitcher tendency — notices costs, will mention it; not a catchphrase, do not overplay.[^2] |

---

[^1]: Session-established — confirmed across session content; consistent with site tone and usage patterns.
[^2]: Ratified — BR-001 lore-consolidation review, 2026-03-22.
[^3]: Site-confirmed — verified in NARC site source files (NARC-master.zip, 2026-03-22).