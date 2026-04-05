# NARC Lore Primer — Section 02: Canonical Org Structure

> **Cross-references:** Section 01 (what NARC is), Section 03 (voice/tone), Section 07 (seals/images — officer portraits)

---

## 2. Canonical Org Structure

### Leadership Team

All ten characters are verified from `leadership.html`.[^1] Personality notes marked [^2] were developed in session 09 from site source file review and are consistent with the site text.

| Name | Title | Site description | Extended character notes |
|------|-------|-----------------|--------------------------|
| Jane Doe | CEO | "Asks 'what if we just virtualize everything?' during meetings." | Asks this repeatedly in meetings. Virtualization is her solution to most problems.[^2] |
| John Smith | CFO | "Manages budgets (real and imaginary) and keeps the Monopoly money in order." | Penny-pitcher tendency — notices costs, will mention it, but it is not a catchphrase. Do not overplay.[^3] |
| Mary Johnson | CTO | "Leads tech & R&D initiatives, secretly fond of blinking status lights (non-blinking variant)." | — |
| Robert Lee | COO | "Makes sure processes run reliably (or at least convincingly so)." | Runs IT Operations. Noted ECC RAM decision in stand-up.[^2] |
| Linda Park | HR Director | "Onboarding, compliance, and highly efficient email subject lines." | Enforces morale. Distributes imaginary PTO.[^1] |
| Max Pitchman | Head of Marketing | "Expert in synergy and branding for things that do not yet exist." | Corporate used-car salesman energy — buzzword-heavy, genuinely believes the pitch, not sleazy. Recurring structural joke: Marketing ends up in technical meetings via reply-all or CC accidents; Max treats every meeting as a branding opportunity.[^3] |
| Dr. Sylvia Sparks | Head of R&D | "Prototypes wildly and documents everything for posterity (and amusement)." | "For science" is her default justification. Repeatedly requests AI consultant secondment.[^2] |
| Alex Firewall | CISO | "Responsible for cybersecurity, rituals of patching, and polite packet interrogation." | Files formal objections. Has opinions about everything.[^2] |
| Chuck Cheerful | Happiness Officer | "Ensures morale and mandatory fun. Distributes surprise snacks (imaginary when low budget)." | Tracks morale with numerical ratings. Named "Happy Packets" metric. Motto: **"Happiness is Mandatory."**[^2][^3] |
| Victor Watchful | Head of Internal Security | "Keeps an eye on everything (lovingly). May or may not enjoy dramatic entrances." | Always informed as a precaution. Victor is always informed as a precaution.[^2] |

### Departments

All five verified from `departments.html`.[^1]

| Department | Lead | Site description |
|-----------|------|-----------------|
| IT Operations | Robert Lee (COO) | "Manages servers, DNS, and the lab's infamous 'prod-but-actually-test' environment." |
| Research & Development | Dr. Sylvia Sparks (Head of R&D) | "Prototypes, AI experiments, and the occasional IoT-enabled coffee machine. R&D loves buzzwords and carefully documented chaos." |
| Cybersecurity | Alex Firewall (CISO) | "Enforces patching, incident simulations, and ritual firewall inspections. May or may not be training a packet-sniffing ferret." |
| Marketing & Communications | Max Pitchman (Head of Marketing) | "Creates brand identity and memos that sound serious. Responsible for buzzword optimization and design sprints that sprint nowhere." |
| Human Resources | Linda Park (HR Director) | "Onboarding, employee happiness metrics, and very sincere paperwork. Also distributes imaginary PTO days on occasion." |

**Leadership Council:** Departments report to the Leadership Council.[^1] Stated in `departments.html` memo block: *"Department leads report to the Leadership Council. Please include a relevant GIF with all project proposals."*

### Formal Division Codes

Division codes appear in `assets/docs/` documents and in the employee badge SVG. They are a parallel internal taxonomy used in document headers — not mapped to the five site departments explicitly, and that ambiguity is intentional.

**Design decision:[^3]** Divisions are not fixed. They are added and retired as the org grows and the joke demands. Division names and codes lean into puns where possible. A running tally of all divisions is a meta-joke on the website — the list keeps growing and is never fully acknowledged. Expressions of this: throwaway lines in meeting minutes ("what's that new division Bob is leading again?"), footnotes or subtitles on the org chart page, sub-pages as new divisions accumulate.

The following are the founding set:

| Code | Full Name |
|------|-----------|
| NOPS | Operations |
| NIS | Infrastructure Services |
| NSEC | Security Division |
| NRD | Research Division |

New divisions follow the same pun-forward naming convention. Existing codes are retained as-is; expanded names may be revised toward puns in a future pass. Full division registry design is a parking lot item.

### Sub-divisions

**ITCRuD — IT, Computational Resources & Uptime Division**[^3]

- Reports to Robert Lee (COO)
- IT Director: **[REDACTED]** — position exists; name withheld by decision; use `[REDACTED]` consistently — do not invent a name. This `[REDACTED]` is distinct from the `[REDACTED]` Founder.
- Responsible for servers, storage, virtualization, networking, backups, cluster management
- Voice in formal documents: competent, slightly put-upon, documents everything
- Approved for site-wide introduction — add to site HTML

### Supporting Cast

**ARIA — Automated Record and Intelligence Assistant, v2.1**[^3]

- AI note-taking system — introduced site-wide
- **Required for all meeting minutes** — not optional; any meeting minutes entry must have ARIA as author
- Records with clinical accuracy; no editorializing in the official record
- Her appendix sections (explicitly "not part of official record") contain her most honest observations
- Measures things precisely: pauses in seconds, meeting overruns in hours and minutes
- Does not editorialize. Her appendix does.
- `v2.1` designation used; v1.x history is undefined and should remain so unless deliberately developed
- Gets a project card and a lore bible bio — see parking lot

**NARC-Brew 3000**[^3]

- AI-enabled coffee machine fleet — a product of R&D; canonical origin is the existing CoffeeBot AI project card
- **Fleet, not a single unit** — everywhere, because coffee is everywhere
- Not looming like The Computer; ambient and mildly annoying
- Contributes `ADVISORY: [message]` format messages at meetings
- It pings. People have stopped reading the pings. ARIA logs its advisories with full clinical neutrality; most everyone else has tuned it out.
- Has not been security-reviewed; Alex Firewall has elevated this to priority
- Chuck Cheerful reports it "seemed happy"
- Does not respond to comments about itself (whether professional restraint or capability gap is unresolved and should remain so)
- Gets a lore bible bio — see parking lot

### The Founder

**`[REDACTED]` Founder**[^3]

- Pronoun: **they/them** — canonical; apply even if source material uses other pronouns
- Clearance: **Ultraviolet** — reserved exclusively for the Founder; above the entire visible org chart
- Internal mythology, not institutional machinery — distinct in character from The Computer
- They probably exist. The company had to start from somewhere, right?
- No one has seen them. Anyone who claims to have is obviously lying.
- Senior management does not refer to them. As far as the org chart is concerned, the CEO is at the top.
- Rumors of an office exist. No one has ever seen it.
- If the Founder is ever referenced in documents, deflect: "not around anymore," vague, handwavy
- **Canonical appearance:** the founding/history page only (TBD)
- **Distinct `[REDACTED]` identity** from the ITCRuD Director — do not conflate; context determines which is meant
- Full lore profile work-up is a parking lot item for the character profile branch

### The Computer

The `approved-by-computer.svg` seal exists in `images/seals/`, and approval blocks appear in site documents.[^1]

**Nature of The Computer:**[^3] Omnipresent. Visible in every seal and approval. Never named aloud. The Computer permeates everything — documents, stamps, approval blocks — but no employee ever directly acknowledges it by name. Everyone knows it is there; no one will admit it out loud. Naming it directly is avoided, as if doing so might cause it to manifest. It functions as a dark urban legend embedded in corporate bureaucracy.

Canonical usage:

- `approved-by-computer.svg` seal in approval blocks and Approvals tables[^1] — valid as a structural/meta-reference
- The Computer row in Approvals tables — valid as a structural reference
- Direct verbal invocation by employees — **not permitted**

### Roles Referenced in README (not in leadership.html)

The `README.md` mentions two roles in the contributing section.[^1]

- **Happiness Officer** — "Pull requests will be routed through the Happiness Officer…" — confirmed as Chuck Cheerful[^1]
- **Internal Security Bureaucrat** — mentioned alongside Happiness Officer in README contributing section — not mapped to a named character[^4]

---

[^1]: Site-confirmed — verified in NARC site source files (NARC-master.zip, 2026-03-22).
[^2]: Session-established — developed in session 09 from site source file review; consistent with site text.
[^3]: Ratified — BR-001 lore-consolidation review, 2026-03-22.
[^4]: Role confirmed in site source; character assignment uncertain — not yet resolved.