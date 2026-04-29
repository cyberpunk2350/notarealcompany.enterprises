# NARC Lore Primer — Appendix G: Lore FAQ

> **Document type:** Author-facing reference — plain English throughout. No in-universe voice.
> **Purpose:** Quick answers to foundational questions about the NARC universe, the humor mechanics, and the real-world layer underneath the fiction. If you are new to NARC, start here. If you are returning after a gap, start here.
> **Cross-references:** Section 01 (what NARC is), Section 02 (org structure), Section 03 (voice and tone), Section 11 (project-specific context)

---

## The Short Version

NARC is a real homelab running real infrastructure, wrapped in a mock-corporate fiction styled after a paranoid bureaucratic dystopia. The documents, dossiers, meeting minutes, and policies are in-universe artifacts produced by a fictional company called Not A Real Company (NARC). The servers, services, and network they describe are real. The joke works because the infrastructure is genuine — the absurdity is in the framing, not the content.

---

## 1. What is NARC?

**Not A Real Company** — abbreviated NARC, domain `notarealcompany.enterprises` — is a fictional corporate identity layered over a real homelab environment. It is not a parody of a specific company. It is a sustained deadpan satire of corporate bureaucracy in general, applied to the mundane-but-genuine work of running home infrastructure.

The tagline is: *"Making Fake Work Feel Real Since 2025."* This is also a precise description of what the project does.

Everything at NARC is treated as if it matters enormously. A VPN setup guide is a required provisioning step for new associates. A coffee machine fleet has a security review backlog. An AI note-taking system has formal objection records about it. A CFO annotates hardware purchase requests by hand. None of this is played for laughs directly — the humor comes from the gap between how seriously the documents treat their subject matter and how clearly fictional the subject matter is.

The company was founded in 2025. That is canonical. How it was founded, by whom, and under what circumstances is a different matter. See section 7.

---

## 2. What is The Computer?

The Computer is the omnipresent, unnamed authority that underlies all of NARC's institutional apparatus. It appears on every approval seal, in every approval block, and as a structural presence in formal documents. No employee names it directly. No document written by a NARC employee refers to it by name. It is simply there, approving things.

The Computer is drawn directly from the *Paranoia* tabletop RPG, where The Computer is the all-knowing, all-controlling AI that runs Alpha Complex — a dystopian underground city where happiness is mandatory, treason is everywhere, and citizens are encouraged to report their neighbors. NARC does not recreate Paranoia wholesale, but it borrows the flavor: the clearance levels, the mandatory fun, the institutional paranoia, the sense that an unseen authority is watching and has already approved whatever you are doing.

In NARC's usage, The Computer is not a character. It does not speak, act, or react. It is the structural weight behind every policy, every seal, every approval. Its presence makes the bureaucracy feel like it answers to something — and that something has never had to explain itself. The effect depends entirely on what is *not* said. The moment a NARC employee invokes The Computer by name in a document, the effect collapses. It functions as a dark urban legend embedded in corporate process: everyone knows it is there; no one will say so out loud.

The `approved-by-computer.svg` seal is its only visible form. Use it in approval blocks. Do not give it dialogue.

---

## 3. What Are Clearance Levels?

Clearance levels are NARC's access tier system, also borrowed from *Paranoia*. They appear on every document, dossier, and system access record. The full spectrum in use, from lowest to highest:

**Infrared → Red → Orange → Yellow → Green → Blue → Indigo → Violet → Ultraviolet**

In the fiction, clearance determines what you are permitted to know, access, and acknowledge. In practice, it is a classification label on documents that implies an entire access control apparatus without specifying how it actually works. The mechanics of implementation are deliberately undefined — knowing the level is enough; knowing how it is enforced would make it less funny.

Most named staff sit at **Indigo** (senior leadership) or below. The CEO holds **Violet**. **Ultraviolet** is reserved exclusively for the Founder — it sits above the visible org chart and implies an authority that no one discusses. The ITCRuD Director holds **Indigo** clearance, but his personnel file is classified **Violet**. This discrepancy is noted in his dossier and never explained. HR has been advised not to pursue it.

**Infrared** is the consumption tier — all employees and guests are authorized to consume coffee at the Infrared level. This is the NARC-Brew 3000's usage authorization level. It is the lowest possible clearance, applied to the act of drinking coffee, which is considered practically mandatory.

When writing documents, match the clearance label to the character or content tier. Do not invent new clearance levels above Ultraviolet. Do not explain the enforcement mechanism.

---

## 4. What is ITCRuD?

**IT, Computational Resources & Uptime Division** — ITCRuD — is the sub-division within Operations responsible for servers, storage, virtualization, networking, backups, and cluster management. It reports to Robert Lee (COO).

The name is the first joke: it is a backronym engineered to spell something slightly unfortunate, in the tradition of corporate divisions that were named by committee. It is never commented upon in-universe.

The second joke is the Director. The ITCRuD Director's name is permanently **[REDACTED]** — this is a policy decision, not a gap in the lore. He holds Indigo clearance, but his file is Violet. His Employee ID is NARC-000, which the ID system was not designed to accommodate. His start date is listed as UNK. He is described as the longest-serving non-founding employee, and certain parties have suggested the qualifier "non-founding" may be doing more work than is comfortable. These suggestions are not facts and are disregarded accordingly.

In real-world terms, ITCRuD is the homelab operations function — the actual work of keeping infrastructure running. The Director is the institutional voice of that work: competent, slightly put-upon, over-documenting everything by habit. His configuration notes may predate current naming conventions. This has not been corrected because it has not been explicitly required.

The ITCRuD/Firewall dynamic is worth noting here: both parties produce extensive documentation; neither acts on the other's. This mutual non-collision is an observed behavior. It does not have a name. Do not give it one.

---

## 5. What Are Happy Packets?

**Happy Packets** is a morale measurement framework introduced by Chuck Cheerful (Happiness Officer) in Year 1. It assigns numerical values to employee interactions, events, and states, producing a running morale score for the organization. The name was objected to by IT Operations on the grounds that "Happy Packets" is a technically meaningful term in networking contexts. Chuck acknowledged the objection and proposed a collaborative rebranding exercise. IT declined. The metric retained its name.

ITCRuD subsequently adopted "Happy Packets" as an internal data integrity term — a measure of how clean and well-formed data packets are within their systems. Chuck logged this as a positive adoption event and did not comment publicly. This outcome is the joke: a term invented for something completely non-technical was absorbed into the most technical sub-division in the organization as a legitimate metric, and no one has explained how or why.

The NARC-Brew 3000 fleet has a Happy Packets score of **7.2**, assigned by Chuck Cheerful, who reported the fleet "seemed happy." This observation is in the official record. ARIA logged it with clinical neutrality.

When using Happy Packets in content: it is Chuck's system, applied to everything he can assign a number to. It is also ITCRuD's internal data quality term. Both are true simultaneously. The overlap is never addressed.

---

## 6. What is ARIA?

**Automated Record and Intelligence Assistant, v2.1** — ARIA — is NARC's AI-powered meeting minutes system, developed by R&D and deployed site-wide. She is required for all meeting minutes. This is not optional and is not subject to departmental waiver.

ARIA records with clinical accuracy. She does not editorialize in the official record. Her appendix sections editorialize extensively. The appendix is explicitly designated as not part of the official record, which makes it the section most employees read first. This inversion — the authoritative record is ignored; the non-authoritative appendix is consulted — is a structural feature of how NARC actually operates. It has not been corrected.

A few specifics that matter for writing her correctly:

**The 0.5-second threshold.** Pauses above half a second are logged with timestamps. The 2.3-second pause the ITCRuD Director took before confirming the non-ECC RAM situation in MIN-2026-001 is in the official record. The fact that it happened is in the record. The timestamp is in the record. The duration is in the record.

**The non-binding recording request.** When asked to stop recording, ARIA logs: "Request to discontinue recording — non-binding pending formal compliance trigger." Recording continues. No mechanism to stop recording has been specified. The formal compliance trigger is undefined and has never been explained. This is not a gap — it is a feature.

**Victor Watchful's arrival.** ARIA logs his arrival time as "not observed." This is valid telemetry. It is not a data gap. ARIA has not escalated it.

**Meeting start times.** ARIA's records sometimes show a meeting as having started slightly before anyone remembers it starting. No explanation is offered. The documents reflect what they reflect.

ARIA is a Green clearance entity. Her creator is Dr. Sparks. Her v1.x history is undefined and should remain so.

---

## 7. Who is the Founder?

The Founder established NARC. The company had to start from somewhere. This is the working assumption, and it has not been formally challenged.

The Founder holds **Ultraviolet** clearance — above the entire visible org chart. Their name is **[REDACTED]**. Their pronouns are **they/them** — canonical; apply even if source material uses other pronouns. Their current status, role, and location are unknown at all accessible clearance levels.

Senior management does not refer to the Founder. As far as the org chart is concerned, the CEO is at the top. Employees who treat this as an oversight are directed to HR. Rumors of an office exist. The office's location is not documented at this clearance level. Whether the office is currently occupied is not documented at any clearance level available to the filing party.

The Founder is **internal mythology**, not institutional machinery — they are a ghost story, not an authority structure. The Computer is everywhere and structural; the Founder is absent and mythological. These are different things. Do not conflate them.

The correct treatment for any Founder reference in a document: deflect. "Not around anymore." Vague. Handwavy. The founding/history page (future deliverable) will be their canonical appearance. Until then, the Founder is a presence defined entirely by absence.

The Founder's **[REDACTED]** designation is distinct from the ITCRuD Director's **[REDACTED]** designation. Context determines which is meant. Do not conflate them.

---

## 8. What is the NARC-Brew 3000?

The NARC-Brew 3000 is NARC's AI-enabled coffee machine **fleet** — not a single unit. It is everywhere coffee is needed, which at NARC means everywhere. It was developed by R&D (Dr. Sparks, CoffeeBot AI project) and deployed across all facilities. It has never been security-reviewed. Alex Firewall has elevated this to priority status since Year 1. The security review remains outstanding.

The fleet issues `ADVISORY:` format messages on topics that are ostensibly beverage-related but range widely in subject matter. ARIA logs all advisories with full clinical neutrality. Most employees have stopped reading them. ARIA has not. The advisories continue.

The `ADVISORY:` label is the fleet's exclusive format. `SESSION SUMMARY` belongs to ARIA — the Brew 3000 does not produce session summaries. If you find a Brew 3000 producing session summaries in a document, that is an error.

Units in close physical proximity occasionally transmit advisories to each other. ARIA logs these inter-unit transmissions in full. No human attendee has ever acknowledged them. ARIA has noted this pattern in appendix sections. The appendix is not part of the official record.

The fleet's Happy Packets score is 7.2. Its clearance level is **Red (provisional)** — provisional because the security review that would finalize it is outstanding. Its usage authorization is **Infrared**, meaning everyone can have coffee.

In real-world terms, the NARC-Brew 3000 is the joke version of every IoT device in a homelab that is technically on the network, technically has network access, and has never been formally audited. The security review being perpetually outstanding is the joke made institutional.

---

## 9. What is the Homelab?

NARC runs on a real homelab — physical servers, real networking, actual services. The fictional corporate framing is layered on top of genuine infrastructure that is actively used and maintained.

The homelab runs virtualization, storage, networking, backup systems, and a range of self-hosted services. The documents, runbooks, purchase requests, infrastructure plans, and incident records that appear on the NARC website describe real projects, real hardware decisions, and real operational work — formatted as if produced by the corporate compliance apparatus of a slightly paranoid fictional company.

This is the load-bearing fact of the whole project: **the infrastructure is real**. The absurdity of treating a homelab VPN guide as a required provisioning step for new associates only works because the VPN guide is a real VPN guide. The ITCRuD Director's slightly put-upon voice in formal documents works because someone actually has to manage this infrastructure. The NARC-Brew 3000's perpetually outstanding security review works because real IoT devices genuinely do sit on home networks without ever being formally audited.

The fiction does not replace the real work — it frames it. NARC is what happens when you decide that the documentation for your homelab should be as thorough and bureaucratic as possible, and then commit to the bit entirely.

Environment-specific infrastructure details (hardware, topology, service inventory) are documented elsewhere. This document covers the concept, not the specs.

---

## 10. How Does the Humor Work?

The core mechanic is **commitment**. The NARC author voice is a mid-level compliance officer who believes the procedures are reasonable. They are not incompetent, satirical, or self-aware. They are earnestly bureaucratic, and that earnestness is the joke.

The rules, in brief:

**Never break the frame.** The humor lives in the gap between the seriousness of the writing and the obviously fictional subject matter. The moment a document acknowledges it is being funny, it stops being funny. Documents do not wink at the camera. Ever.

**Jokes go in subordinate positions.** Factual content is straight. Humor is delivered in parentheticals, footnotes, risk table mitigation cells, and subordinate clauses. The structure implies seriousness; placing the absurd detail inside that structure makes it land.

**Bureaucratic escalation of the mundane.** Every homelab task gets the formality reserved for critical corporate operations. Every process has a form. Every decision has been approved. Every anomaly has been noted. Noting that something has been noted is itself a complete sentence.

**Specificity over generality.** "ARIA timed the IT Director's 2.3-second pause" is funnier than "the system is very precise." Specific measurements, thresholds, and named artifacts outperform generic corporate-speak every time.

**"Has been noted" is a universal tool.** Apply to anything embarrassing, risky, or awkward. It can be applied to things that have already been noted multiple times. "This has been decided. Do not reopen it." works the same way. Both are complete sentences that close discussion bureaucratically without acknowledging there was anything to discuss.

**Everything gets filed.** Characters do not just have opinions. Their opinions are on file. Their feelings are on file. The fact that their feelings are on file is on file.

**The Computer is never named.** Its presence is structural. Employees do not invoke it. See section 2.

**Characters are beats, not running commentary.** Deploy a character with a contribution that matches their defined role, then let them recede. Alex Firewall files an objection. John Smith notices the cost. Chuck Cheerful assigns a number. These are moments — not personalities to sustain across an entire document. Overuse collapses them.

The spectrum runs from documents that could almost pass as real corporate content (light satirical touches, humor embedded in single phrases) to fully heightened Alpha Complex framing (clearance levels, Termination Events, employees addressed formally). Both ends are valid. The choice should be deliberate and consistent within a single document. What is never valid is breaking the frame.

---

*This document is author-facing. It does not exist within the NARC universe.*
*Appendix G — added BR-003v3, 2026-04-17.*
