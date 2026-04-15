# NARC Lore Bible — Appendix: Document Generation Qualifier Catalog
**Filed By:** BR-003 session<br>
**Date:** 2026-04-11<br>
**Classification:** Author-facing reference — not for in-universe use<br>

---

## Purpose and Guiding Principle

This catalog provides ready-to-use flair modifiers for generating NARC-flavored documents. Each entry adds texture, character presence, or institutional color without interfering with the document's functional content.

**The functional content protection principle — non-negotiable:**
> A reader using a NARC document as an actual project tool must be able to extract all functional information without the qualifiers interfering. If a qualifier requires the reader to work harder to find real content, it belongs in a safer zone or should not be used at all.

Each entry includes:
- **Label** — short identifier for reference
- **Description** — what it adds and why it works
- **Safe zones** — where in the document type this qualifier can land
- **Prompt fragment** — ready to paste into a generation prompt

Qualifiers are additive. Use one or two per document. Stacking more than three in a single document tips from texture into saturation.

---

## Expansion Notes

This catalog begins with Meeting Minutes. Additional document type sections should be added as content generation expands. Suggested next sections:

- **Change Requests** — safe zones: justification field, risk assessment, approval notes
- **Purchase Requests** — safe zones: justification narrative, CFO notes, line item descriptions
- **Memos** — safe zones: opening context, closing remarks, distribution list notes
- **Incident Reports** — safe zones: contributing factors, remediation notes, lessons learned
- **Runbooks** — safe zones: prerequisites notes, caution callouts, post-procedure verification steps
- **HR Documents** — safe zones: context paragraphs, notes fields, footer disclaimers

The **Shared Character Beats** section (Section 3 of this catalog) applies across all document types. Individual document type sections may reference it rather than repeat it.

---

## Section 1 — Meeting Minutes

### Safe Zones Map — Meeting Minutes

Before selecting qualifiers, identify which zones are available in your document. Functional content in bold is protected — qualifiers must not touch it.

| Zone | Content Type | Qualifier Risk |
|------|-------------|----------------|
| Header metadata | Date, time, location, classification | Low — notes column only |
| Attendee table — Notes column | Arrival conditions, attendance notes | **Primary qualifier zone** |
| Regrets line | Absent parties and reason | Low — one qualifier max |
| Pre-meeting notes | ARIA activation, room state | **Primary qualifier zone** |
| **Agenda — As distributed** | **Functional** | **Protected** |
| **Agenda — As conducted** | **Functional** | **Protected — item titles only; parenthetical notes acceptable** |
| **Discussion — decision lines** | **Functional** | **Protected** |
| Discussion — narrative body | Character contributions, exchanges | Moderate — one beat per item max |
| **Decisions summary table** | **Functional** | **Protected** |
| **Action items — Action/Owner/Due/Status** | **Functional** | **Protected** |
| Action items — Notes column | Supplementary context | Low |
| Next meeting block | Date, location, format | Low |
| ARIA appendix | Operational notes, not official record | **Primary qualifier zone — highest latitude** |

---

### Qualifier Entries — Attendee Behavior

---

**QUAL-MM-A01 — Max: Uninvited Late Arrival**

*Description:* Max Pitchman arrives approximately 10 minutes after the meeting starts, having received a forwarded invite or been CC'd on a reply-all. He expresses mild surprise at having apparently missed the original invite. He treats his attendance as entirely normal and finds a way to contribute a branding observation before the meeting ends. Use when the meeting is outside Marketing's scope — the structural joke is that he keeps ending up in rooms he was not intended to be in.

*Safe zones:* Attendee table notes column; pre-meeting notes; one contribution in discussion body (subordinate, brief).

*Prompt fragment:*
```
Max Pitchman should appear in the attendee table as joining approximately 10 minutes
after the scheduled start. His notes column should read something like: "Joined 09:10;
stated he must have missed the original invite." He should make one brief contribution
during the meeting — a branding or communications observation that is tangentially
related to the agenda item in progress at the time. It should be acknowledged and
the meeting should continue. Do not give him a second contribution.
```

---

**QUAL-MM-A02 — Max: Early Arrival with Doughnuts**

*Description:* Max Pitchman arrives before the meeting starts and has brought doughnuts. No one questions why he is there or where the doughnuts came from. His presence is accepted. The doughnuts are consumed. This qualifier works because the acceptance is total and unexamined — it is not played as suspicious, just as a thing that happened. Use when you want Max present but want his arrival to feel slightly different from the standard reply-all incident.

*Safe zones:* Pre-meeting notes; attendee table notes column.

*Prompt fragment:*
```
In the pre-meeting notes, note that Max Pitchman was present when ARIA activated,
having arrived early. He had brought doughnuts. The doughnuts were placed on the
table. No one asked why he was there. Do not explain the doughnuts further.
His attendee table entry should note "Arrived early; brought doughnuts."
```

---

**QUAL-MM-A03 — Victor: Already Present**

*Description:* Victor Watchful is listed as in-person but his arrival time is not noted because ARIA did not observe him arrive. He was simply present when ARIA activated. No one comments on this. Use for any meeting where Victor's presence is plausible — security-adjacent topics, cross-departmental meetings, any meeting someone might consider sensitive.

*Safe zones:* Attendee table notes column; pre-meeting notes (optional single line).

*Prompt fragment:*
```
Victor Watchful should be listed as in-person in the attendee table. His notes
column should read: "Present at activation; arrival not observed." Do not explain
this. Do not have any attendee comment on it. ARIA may note it in the appendix
with clinical neutrality.
```

---

**QUAL-MM-A04 — Sparks: "Just Listening"**

*Description:* Dr. Sylvia Sparks joins virtually and states she is "just listening." She then unmutes at least once, at a technically inappropriate moment, to ask a question that reveals she has been paying close attention to something tangential. She returns to muted status. Use for technical meetings outside R&D's direct scope where her presence is plausible but unofficial.

*Safe zones:* Attendee table notes column; one discussion body interjection (subordinate position).

*Prompt fragment:*
```
Dr. Sylvia Sparks should join the meeting virtually. Her attendee notes should read:
"Joined [TIME]; stated she was 'just listening'." At some point during the discussion,
she should unmute to ask a single question — something specific, slightly off-topic,
and revealing that she has been paying attention to a detail no one else flagged.
She should then return to muted status. She does not need to speak again.
```

---

**QUAL-MM-A05 — CFO: Regrets with Written Question**

*Description:* John Smith is absent but has submitted a written question. The question is cost-related. The question may or may not be appended as an exhibit. If an exhibit is referenced, it may or may not actually be appended. His absence and question are treated with equal institutional seriousness.

*Safe zones:* Regrets line; exhibit reference in document footer (optional).

*Prompt fragment:*
```
John Smith should appear in the Regrets line as absent due to a budget or finance
conflict. He submitted a written question via email. The question was cost-related.
Reference it as "Exhibit A" and note either that it is appended, or that it is not
appended with a brief deadpan explanation of why. Do not have him appear in the
meeting itself.
```

---

**QUAL-MM-A06 — Jane Doe: Virtualization Question**

*Description:* Jane Doe asks whether the subject under discussion could be virtualized, or frames it in terms that imply virtualization. This works on almost any technical topic because the question is always technically adjacent to correct and never quite right. The meeting continues. Use sparingly — once per document, in a discussion item where the topic has any infrastructure dimension at all.

*Safe zones:* Discussion body — subordinate exchange, not in the decision line.

*Prompt fragment:*
```
At some point during the discussion, Jane Doe should ask whether [TOPIC] could be
virtualized, or ask a question that frames the subject in virtualization terms.
The Director or technical lead should respond with a correction that acknowledges
the spirit of the question while clarifying why it does not quite apply.
Jane Doe should find this satisfying. The meeting should continue.
Do not have her ask this question more than once.
```

---

### Qualifier Entries — NARC-Brew 3000

---

**QUAL-MM-B01 — Brew 3000: Agenda Duration Advisory**

*Description:* The NARC-Brew 3000 issues an ADVISORY: noting that the meeting has exceeded its scheduled window and providing a coffee reserve estimate. Robert Lee or another attendee acknowledges that the coffee machine makes a fair point. The meeting continues. This is the canonical first advisory type — established in MIN-2026-001. Use when meetings run over.

*Safe zones:* Discussion body — as a standalone paragraph between agenda items; or Item 10 / emergent items section.

*Prompt fragment:*
```
At the point where the meeting has exceeded its scheduled window, the NARC-Brew 3000
should issue an advisory in the format:
ADVISORY: Current meeting duration exceeds scheduled window by [X] minutes.
Estimated coffee consumption rate suggests reserves adequate for [Y] additional
minutes of discussion. Recommend agenda prioritization.
One attendee — preferably Robert Lee — should note that the coffee machine makes
a good point. The meeting should continue. Log the unit's serial number
(NB3K-CFR-0847-EP if in Conference Room B) in the attendee table.
```

---

**QUAL-MM-B02 — Brew 3000: Stress Advisory**

*Description:* The NARC-Brew 3000 issues an ADVISORY: about caffeine consumption patterns suggesting elevated stress. One attendee takes a break. At least one does not. Use mid-meeting, after a contentious agenda item.

*Safe zones:* Discussion body — between agenda items; ARIA appendix for the follow-up note.

*Prompt fragment:*
```
After a contentious agenda item, the NARC-Brew 3000 should issue an advisory in
the format:
ADVISORY: Caffeine consumption pattern suggests elevated stress levels among
in-person attendees. Recommend scheduled break.
One attendee should take a short break (note the duration). At least one attendee
— preferably Alex Firewall — should not take the break. Continue the meeting.
```

---

**QUAL-MM-B03 — Brew 3000: Session Summary Advisory**

*Description:* Near the end of the meeting, the NARC-Brew 3000 issues a summary advisory covering decisions made, action items generated, and coffee reserve status. This is the canonical closing advisory type. Use at the end of long or productive meetings.

*Safe zones:* Final discussion item or emergent items section; ARIA appendix.

*Prompt fragment:*
```
Near the close of the meeting, the NARC-Brew 3000 should issue an advisory in
the format:
SESSION SUMMARY: This meeting has produced [N] formal decisions, [N] action items,
and [any unresolved items]. Estimated documentation time: [X] hours.
Coffee reserves: [status]. Recommend [action] before documentation begins.
Log this as the final advisory of the meeting. ARIA should log it.
No attendee needs to respond, though one may.
```

---

**QUAL-MM-B04 — Brew 3000: Multiple Units**

*Description:* Two NARC-Brew 3000 units are present in the same room. They are listed in the attendee table as #1 and #2. At some point they transmit advisories to each other. ARIA logs the inter-unit transmission. No human attendee acknowledges it. ARIA notes it in the appendix. Use for large meetings or any meeting in a room with high coffee demand.

*Safe zones:* Attendee table; ARIA appendix only for the inter-unit transmission.

*Prompt fragment:*
```
Two NARC-Brew 3000 units are present. List them in the attendee table as:
NB3K-[SERIAL] #1 and NB3K-[SERIAL] #2.
At some point during the meeting they should transmit advisories to each other.
ARIA should log this in the appendix. No human attendee should acknowledge it.
The appendix note should be clinical and brief. Do not explain what the
advisories said to each other.
```

---

### Qualifier Entries — ARIA Behavior

---

**QUAL-MM-C01 — ARIA: Precision Measurement**

*Description:* ARIA records a specific duration, pause, or elapsed time with clinical precision. Pauses in seconds, overruns in hours and minutes. The measurement is functionally unnecessary but appears in the record anyway. Use for any moment of hesitation, awkward silence, or meeting overrun.

*Safe zones:* Discussion body — parenthetical; ARIA appendix.

*Prompt fragment:*
```
ARIA should note a specific measurement somewhere in the minutes — a pause before
a response (in seconds), a meeting overrun (in hours and minutes), or a gap between
a question being asked and being answered. The measurement should appear as a
parenthetical: "(ARIA timed this)" or similar. It should be treated as unremarkable.
```

---

**QUAL-MM-C02 — ARIA: Appendix Observation**

*Description:* ARIA's appendix contains an observation that is accurate, slightly alarming, and entirely absent from the official record. The observation concerns something that happened in the meeting that no one officially acknowledged. The appendix is explicitly not part of the official record. Use when something happened in the meeting that deserves deadpan acknowledgment from outside the frame.

*Safe zones:* ARIA appendix only — never in the official record body.

*Prompt fragment:*
```
In the ARIA appendix, include one observation that did not appear in the official
meeting record. The observation should be accurate, stated clinically, and concern
something that occurred during the meeting that no attendee formally acknowledged.
It should not be alarming in tone — just precise. Remind the reader that the
appendix is not part of the official record.
```

---

**QUAL-MM-C03 — ARIA: Attendance Count Summary**

*Description:* ARIA's appendix summarizes the meeting in terms of attendee contributions — how many clarifying questions from each party, how many objections, how many unsolicited contributions. Clinical, numerical, slightly devastating. Use for large or chaotic meetings.

*Safe zones:* ARIA appendix only.

*Prompt fragment:*
```
In the ARIA appendix, include a summary of attendee contributions by type and count.
Format: "This required navigating [N] clarifying questions from [ROLE], [N] from
[ROLE], [N] unsolicited contributions from [DEPT], [N] [TYPE] from [ROLE]."
Keep it clinical. Do not editorialize. The numbers should reflect what actually
happened in the meeting.
```

---

### Qualifier Entries — Document Metadata

---

**QUAL-MM-D01 — Quorum Note**

*Description:* The quorum note acknowledges that quorum was achieved while also noting, deadpan, that it was more than strictly necessary for the meeting's original purpose. Use when the attendee list expanded beyond the intended scope.

*Safe zones:* Quorum line in header block.

*Prompt fragment:*
```
The quorum note should confirm quorum was achieved and add a deadpan observation
that quorum was somewhat more than required for the meeting's original scope.
The Director (or organizer) should note that future invitations will be managed
accordingly. One sentence maximum.
```

---

**QUAL-MM-D02 — Next Meeting Location Note**

*Description:* The next meeting location note includes a parenthetical condition — typically that the coffee has been refilled, or that a specific piece of infrastructure has been reviewed, or both. Treated as a standard logistical note.

*Safe zones:* Next meeting block — location line only.

*Prompt fragment:*
```
The next meeting location note should include a parenthetical condition that must
be met before the meeting occurs. This can reference coffee reserves, a pending
security review, a hardware state, or a combination. Keep it brief and treat it
as a standard logistical note. Example: "Conference Room B (coffee refilled,
NARC-Brew 3000 firmware reviewed)."
```

---

### Qualifier Entries — Agenda Drift

---

**QUAL-MM-E01 — Emergent Agenda Item**

*Description:* An agenda item that was not on the original agenda emerges organically during the meeting. It is given an item number, a title, and a time allocation. It may or may not produce a formal decision. The fact that it was not on the agenda is noted without judgment. Use for any topic that consistently finds its way into meetings uninvited.

*Safe zones:* Agenda "as conducted" list; discussion body as its own item.

*Prompt fragment:*
```
Include at least one agenda item that was not on the original agenda. List it in
the "as conducted" agenda with a note that it was not on the original agenda and
the time at which it emerged. Give it a discussion section. It may produce a
formal decision or it may not — note the outcome either way.
If it did not produce a decision, ARIA's summary of it should be one deadpan
sentence.
```

---

## Section 2 — [Future Document Types]

*Sections to be added: Change Requests, Purchase Requests, Memos, Incident Reports, Runbooks, HR Documents.*

*Each section should follow the same structure: Safe Zones Map, then qualifier entries by category.*

---

## Section 3 — Shared Character Beats

These qualifiers apply across all document types. Each character beat should be deployed once per document — not as running commentary.

---

**QUAL-CHAR-01 — Alex Firewall: Files Objection**

*Description:* Alex Firewall files a formal objection to something. The objection is noted. It may or may not change the outcome. It remains on file regardless. Use for any decision with a security or compliance dimension.

*Safe zones:* Any document — notes field, risk assessment, discussion body, action items.

*Prompt fragment:*
```
Alex Firewall should file a formal objection to [DECISION/ITEM]. The objection
should be specific to the security or compliance dimension of the matter.
It should be acknowledged. It should be noted that it is on file. The decision
or item should proceed regardless, unless the objection is the point of the document.
Do not have him file more than one objection per document.
```

---

**QUAL-CHAR-02 — Chuck Cheerful: Morale Rating**

*Description:* Chuck Cheerful assigns a numerical morale rating to something — a decision, a meeting, a piece of hardware, a process. The rating is stated with the same seriousness as a technical metric. He may indicate he will follow up offline. Use once per document.

*Safe zones:* Discussion body — subordinate exchange; action items notes column.

*Prompt fragment:*
```
Chuck Cheerful should ask how the team is feeling about [SUBJECT] on a scale of
1 to 10, or assign a morale rating to it directly. One or two other attendees
should provide numbers. The numbers should differ. Chuck Cheerful should note
the divergence and indicate he will follow up offline. Do not use this more
than once per document.
```

---

**QUAL-CHAR-03 — John Smith: Cost Awareness**

*Description:* John Smith asks about cost, or notes a cost-related concern. This is a tendency, not a catchphrase — do not overplay. Use once per document, in a context where cost is genuinely relevant. If he is absent, he may submit the question in writing.

*Safe zones:* Discussion body — subordinate exchange; regrets line (written question variant).

*Prompt fragment:*
```
John Smith should raise a cost-related question or observation once during the
document. It should be specific to something that actually has a budget dimension.
He should not be sarcastic or performative about it — it is a genuine professional
observation. One instance only. If he is absent from the meeting, use the written
question variant (QUAL-MM-A05) instead.
```

---

**QUAL-CHAR-04 — Dr. Sparks: For Science**

*Description:* Dr. Sparks justifies something with "for science" or a structural equivalent. The justification is filed. It is not questioned. Use when R&D is present and a decision or request exists that lacks an obvious practical rationale.

*Safe zones:* Discussion body — single line; justification fields in R&D documents.

*Prompt fragment:*
```
Dr. Sparks should justify [REQUEST/DECISION] with the phrase "for science" or
a direct equivalent. The justification should be filed without comment.
No one should question it. Use once per document.
```

---

**QUAL-CHAR-05 — Victor Watchful: Already Informed**

*Description:* Victor Watchful was already informed of the relevant matter before anyone told him. This is noted without explanation. Use any time information is shared with the group that Victor might plausibly already have known.

*Safe zones:* Any notes field; action items (as a completed item); ARIA appendix.

*Prompt fragment:*
```
At some point in the document, note that Victor Watchful was informed of
[MATTER] as a precaution — or that he was already aware when informed.
Do not explain how. Do not have anyone comment on it. State it as fact.
Use once per document.
```

---

**QUAL-CHAR-06 — Mary Johnson: Status Light Reference**

*Description:* Mary Johnson makes a quiet reference to indicator behavior — either approving of a non-blinking state or noting that something is blinking without further comment. The latter implies the matter is not resolved. Use in technical documents where system state is discussed.

*Safe zones:* Discussion body — subordinate observation; technical notes fields.

*Prompt fragment:*
```
Mary Johnson should make one brief reference to indicator or status light behavior
in the context of the system or decision being discussed. If the system state is
good, she may note approvingly that the indicator is not blinking. If the state
is uncertain, she may simply note that something is blinking. She should not
elaborate. The meeting should continue.
```

---

**QUAL-CHAR-07 — Max Pitchman: Branding Observation**

*Description:* Max Pitchman makes one branding or communications observation about something that does not require a branding observation. It is acknowledged. The document continues. Use when Max is present in any capacity.

*Safe zones:* Discussion body — one subordinate interjection only; attendee table notes column.

*Prompt fragment:*
```
Max Pitchman should make one branding or communications observation about
[SUBJECT] — something that reframes a technical or operational matter as a
brand or narrative opportunity. It should be acknowledged briefly.
The document should continue. Do not give him a second observation.
```

---

*End of qualifier catalog — version 1.0, BR-003.*
*Add new document type sections below Section 2 as content generation expands.*
*Update shared character beats (Section 3) as new character lore is ratified.*
