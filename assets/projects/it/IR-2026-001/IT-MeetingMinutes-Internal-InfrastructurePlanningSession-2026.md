# ![NARC Logo](../../../images/narc-logo.svg)

**Not A Real Company (NARC)**
**Meeting Minutes — Infrastructure Refresh 2026-001 Planning Session**

**Date:** 2026-03-01
**Time:** 09:00 — 12:47 (scheduled 09:00 — 11:00)
**Location:** NARC Lab — Conference Room B / Virtual (hybrid)
**Minutes Prepared By:** ARIA (Automated Record and Intelligence Assistant) — NARC AI Note-Taking System v2.1
**Minutes Reviewed By:** [REDACTED], IT Director, ITCRuD
**Classification:** ![Internal](../../../images/seals/internal.svg) INTERNAL — Red Clearance and Above
**Approved By:** ![Approved by the Computer](../../../images/seals/approved-by-computer.svg)

> *Note from IT Director: For the record, this meeting was originally scoped as an internal ITCRuD technical planning session. The attendee list expanded following a calendar invite reply-all incident that is not being discussed in these minutes. The technical planning was completed. Eventually.*

---

## Attendees

| Name | Title | Present | Notes |
|---|---|---|---|
| [REDACTED] | IT Director, ITCRuD | ✓ In person | Meeting organizer |
| Jane Doe | CEO | ✓ Virtual | Joined 09:03; audio issues until 09:11 |
| Robert Lee | COO | ✓ In person | Arrived 09:08 with coffee |
| Mary Johnson | CTO | ✓ Virtual | Present throughout; took notes independently |
| Alex Firewall | CISO | ✓ In person | Present throughout; took his own notes |
| Dr. Sylvia Sparks | Head of R&D | ✓ Virtual | Joined 09:15; stated she was "just listening" |
| Chuck Cheerful | Happiness Officer | ✓ In person | Attended to monitor morale impact of infrastructure discussions |
| Claude | External AI Planning Consultant (Anthropic) | ✓ Virtual | Engaged per NARC Emerging Technology Policy; no audio |
| ARIA v2.1 | AI Note-Taking System | ✓ In room | These are her minutes |
| NARC-Brew 3000 | Automated Coffee System (AI-enabled) | ✓ In room | Present involuntarily; contributed once (see Item 3) |

**Regrets:** John Smith (CFO) — budget review conflict; submitted written question via email (appended as Exhibit A; Exhibit A is not appended because the CFO's question was "does this cost money" and the answer is yes).

**Quorum:** Achieved. IT Director notes for the record that quorum was somewhat more than required for a technical planning session and that future invitations will be managed accordingly.

---

## Pre-Meeting Notes

ARIA was activated at 08:54. The IT Director was observed reviewing a document titled "Phase 1a Task List" and appeared to have specific technical items to work through. By 09:15, the agenda had been partially redirected. ARIA has noted this without editorial comment, as is her function.

The NARC-Brew 3000 was in its standard pre-meeting warming cycle. It had not yet formed opinions.

---

## Agenda

As originally distributed:

1. pve5 hardware status review
2. NAS platform selection — decision required
3. Architecture: bare-metal vs Proxmox VM
4. Storage pool layout
5. Network allocation
6. Backup infrastructure
7. Project documentation approach
8. AI consultant engagement scope

As conducted:

1. pve5 hardware status review *(completed)*
2. NAS platform selection *(completed, with strategic context)*
3. Architecture: bare-metal vs Proxmox VM *(completed, with strategic context)*
4. Storage pool layout *(completed)*
5. Network allocation *(completed)*
6. Backup infrastructure *(completed, partially)*
7. Project documentation approach *(completed)*
8. AI consultant engagement scope *(completed)*
9. Vision alignment *(not on agenda; added at 10:14; 31 minutes)*
10. Coffee machine capabilities *(not on agenda; emerged organically)*
11. R&D secondment request — AI consultant *(not on agenda; submitted at 11:52)*

---

## Discussion Notes

### Item 1 — pve5 Hardware Status Review
*09:00 — 09:22*

IT Director presented current hardware state: R720xd acquired, Proxmox VE 9 installed, PERC H710 D1 Mini flashed to IT mode, 256GB non-ECC RAM installed. E5-2695 v2 CPUs in transit.

**Alex Firewall** asked immediately about the non-ECC RAM. IT Director confirmed the ECC/non-ECC incompatibility and the decision to proceed with non-ECC for the media workload. Alex Firewall stated that he had "thoughts." IT Director stated that the thoughts would be documented. Alex Firewall confirmed this was acceptable and that he would also document them himself.

**Jane Doe** asked what "non-ECC" meant. IT Director explained. Jane Doe asked if it was "like the difference between a warranty and no warranty but for memory." IT Director confirmed this was not quite accurate but acknowledged it captured the spirit of the concern. Jane Doe said "hm" and made a note.

**Robert Lee** asked if the RAM situation was a problem. IT Director said it was a documented tradeoff. Robert Lee asked if there was a difference. The IT Director paused for 2.3 seconds (ARIA timed this) before confirming there was, and that it was documented.

**Chuck Cheerful** asked how the team was feeling about the RAM situation on a scale of 1–10. IT Director said 7. Alex Firewall said 4. Chuck Cheerful noted the divergence and indicated he would follow up offline.

*Decision: Proceed with 256GB non-ECC. Risk formally accepted. Incident report ICR-2026-003 to be filed. Alex Firewall to file written objection.*

---

### Item 2 — NAS Platform Selection
*09:22 — 09:58*

IT Director presented the three-platform evaluation: OpenMediaVault, TrueNAS SCALE, Unraid.

Unraid was addressed first. IT Director noted FOSS non-compliance and cost-per-drive licensing. **Max Pitchman** (joining via forwarded invite — see pre-meeting notes) briefly unmuted to say the Unraid licensing model was "actually quite elegant from a monetization perspective." Max Pitchman was thanked. The evaluation proceeded.

OMV was presented as the incumbent: familiar, lightweight, and capable of underutilizing 48 threads with impressive consistency. The IT Director's delivery on this point was noted by ARIA as "technically neutral." Chuck Cheerful rated the delivery as a 6 on the enthusiasm scale.

TrueNAS SCALE was presented as the recommended platform: native ZFS, data integrity tooling, open source, appropriate for the hardware scale.

**Mary Johnson** asked about the roadmap for TrueNAS SCALE and whether the Kubernetes-to-Docker transition in Electric Eel introduced risk. IT Director confirmed the transition was complete, Docker Compose app model was stable, and Electric Eel was the recommended version. Mary Johnson was satisfied and made a note.

**Jane Doe** asked if TrueNAS was "the one that virtualizes everything." IT Director clarified that TrueNAS was the NAS operating system and that Proxmox was the virtualization layer. Jane Doe said "right, but we're virtualizing it, so in a way we are virtualizing everything." The IT Director confirmed this was technically accurate.

*Decision: TrueNAS SCALE (Electric Eel) selected as NAS platform. Rationale documented in ADR-001.*

---

### Item 3 — Architecture: Bare-Metal vs Proxmox VM
*09:58 — 10:14*

IT Director presented the architecture decision: TrueNAS SCALE as a Proxmox VM with PCIe passthrough of the H710, vs bare-metal TrueNAS installation.

The case for the VM approach: cluster integration, full hardware utilization, unified management. The case against: additional complexity, IOMMU dependencies, NUMA considerations on dual-socket hardware.

**Claude** (AI planning consultant, via text interface) submitted the following at 10:02:
> *"The VM approach maximizes hardware utilization and enables cluster integration. Key prerequisite: IOMMU groupings must be verified post-CPU swap. The dual-socket NUMA topology requires explicit VM pinning to avoid cross-NUMA memory access penalties. These are manageable but should be in the task list before implementation begins."*

IT Director confirmed all three points and added them to the Phase 1a checklist.

**Jane Doe** asked if "virtualizing the NAS" meant the NAS was "not real." IT Director explained that the NAS would be functionally real, operating in a virtual machine with direct hardware access to the drives. Jane Doe said "so it's real but not real." IT Director said "the drives are real." Jane Doe appeared to find this satisfying.

At 10:09, the **NARC-Brew 3000** emitted an alert tone. Upon investigation, it had queued a status message reading: `ADVISORY: Current meeting duration exceeds scheduled window by 9 minutes. Estimated coffee consumption rate suggests reserves adequate for 23 additional minutes of discussion. Recommend agenda prioritization.`

Robert Lee said "the coffee machine makes a good point."

The IT Director agreed, and the meeting continued.

*Decision: TrueNAS SCALE to run as Proxmox VM with H710 PCIe passthrough. Rationale documented in ADR-001 and ADR-005. IOMMU and NUMA verification added to Phase 1a task list.*

---

### Item 4 — Storage Pool Layout
*10:14 — 10:45*

*(Note: Items 4–8 were conducted under time pressure following the NARC-Brew 3000 advisory. The IT Director's pacing increased measurably. ARIA tracked this.)*

IT Director presented the pool layout options for 6× 26TB drives: RAIDZ2 (6-wide, ~104TB) vs 3× mirror pairs (~78TB).

**Claude** submitted at 10:17:
> *"The resilver window on 26TB recertified drives under RAIDZ2 is 48–96+ hours. During that window, with no backup in place, a second drive failure means pool loss. For irreplaceable data I'd recommend mirrors. The question is: what's actually in this pool?"*

IT Director confirmed the pool was Jellyfin media — movies, TV shows, rebuildable content. Claude submitted: *"In that case RAIDZ2 is defensible. The capacity difference is real and the consequence of pool loss is inconvenient, not catastrophic."*

**Alex Firewall** stated he wanted it noted that "recertified drives under sustained resilver load with no offsite backup is not a posture he would describe as comfortable." It has been noted.

**Dr. Sylvia Sparks** (who had been quiet since joining) unmuted at 10:31 to ask if the 26TB drives were "the ones that hold like a movie each." The IT Director confirmed the drives held considerably more than one movie each. Dr. Sparks said "fascinating" and returned to muted status.

*Decision: RAIDZ2 (6-wide) for media pool. Mirror pairs for sensitive data pool (Phase 1d). Rationale documented in ADR-002.*

---

### Item 5 — Network Allocation
*10:45 — 11:03*

IT Director presented the NIC allocation: 10GbE port 1 to TrueNAS VM passthrough, port 2 to Proxmox host bridge, 1GbE bonded for management.

Alex Firewall confirmed iDRAC isolation was mandatory and non-negotiable. IT Director confirmed iDRAC would be isolated. Alex Firewall said "I'm going to need that in writing." IT Director pointed to ADR-003 which was being drafted in real time. Alex Firewall said that was acceptable.

**Jane Doe** asked if the 10GbE meant the NAS would be "ten times faster." IT Director began to explain the distinction between interface speed and throughput. Robert Lee said "essentially yes, Jane" and the meeting continued.

*Decision: NIC allocation per ADR-003. iDRAC isolated. Documented.*

---

### Item 6 — Backup Infrastructure
*11:03 — 11:28*

IT Director presented the Datto S4P2 repurposing plan for Proxmox Backup Server. Specs confirmed (Xeon D-2143IT, 32GB DDR4, 2× 10GbE). 3× 1TB RAIDZ1 datastore (~2TB usable).

**Jane Doe** asked what Proxmox Backup Server was. IT Director explained. Jane Doe asked if it was different from the NAS. IT Director confirmed they served different functions. Jane Doe asked if we needed both. The IT Director confirmed we needed both. Jane Doe said "okay, carry on."

**Dr. Sylvia Sparks** unmuted a second time to ask if the Datto S4P2 could be repurposed for R&D instead of backup. The IT Director noted the request. The IT Director did not action the request. Dr. Sparks returned to muted.

*Decision: Datto S4P2 designated Proxmox Backup Server. Documented in ADR-006. M.2 slot type to be verified before purchasing optional NVMe upgrade.*

---

### Item 7 — Project Documentation Approach
*11:28 — 11:52*

IT Director presented the documentation framework: Gitea repository, Architecture Decision Records, phased project plan, session continuity protocol for AI-assisted planning.

**Mary Johnson** asked how ADRs were structured. IT Director explained: context, decision, rationale, alternatives rejected, consequences. Mary Johnson said this was "exactly what every technical decision in this organization should have" and looked meaningfully at no one in particular. Several attendees looked at the ceiling.

**Claude** submitted: *"The ADR format captures reasoning at the time of decision. Reconstructed rationale is less reliable. If there are decisions from earlier in this project that haven't been formally recorded, this is the moment to capture them."*

IT Director confirmed the ECC/non-ECC RAM decision was already queued for ADR-005.

**Chuck Cheerful** asked if the documentation process was "fun." The IT Director said it was "thorough." Chuck Cheerful noted the distinction and indicated he would check in on morale after the first ADR was drafted.

*Decision: Documentation framework adopted as presented. Project repository to be established on Gitea. AI consultant engaged for planning phase under NARC Emerging Technology Policy.*

---

### Item 8 — AI Consultant Engagement Scope
*11:52 — 12:09*

IT Director confirmed Claude's role: planning partner, documentation generation, gap identification. Not a decision-maker. Output to be independently validated. Judgment calls remain with human operator.

**Dr. Sylvia Sparks** unmuted a third time to formally request that Claude be seconded to R&D "when the infrastructure planning is complete." IT Director noted the request for the record. IT Director confirmed the request would be forwarded to the appropriate channel. The appropriate channel is not specified in these minutes.

**Alex Firewall** asked whether the AI consultant had access to NARC systems. IT Director confirmed Claude operated via text interface only, had no network access to NARC infrastructure, and could not verify hardware state without being told. Alex Firewall rated this "acceptable, marginally."

**Jane Doe** asked if Claude was "like a really smart search engine." The IT Director said it was more of a reasoning and planning tool. Jane Doe asked if it could search the internet. IT Director said it could in some configurations. Jane Doe said "so it is a search engine." The IT Director moved to the next item.

*Decision: Claude engagement confirmed. Scope: planning phase, documentation generation, blind spot analysis at session close. ADR-001 to reference engagement.*

---

### Item 9 — Vision Alignment *(added agenda item)*
*10:14 — 10:45 (concurrent with Items 4–8 in spirit)*

This item emerged when Jane Doe asked "but what is the vision for NARC's infrastructure in five years" at approximately 10:14. The IT Director noted that the vision was documented in the project plan and system design. Jane Doe said she meant "the bigger vision." The IT Director said the bigger vision was uptime.

Robert Lee said "and scalability." The IT Director said yes. Mary Johnson said "and security posture." Alex Firewall said "and compliance." Chuck Cheerful said "and morale." The IT Director said all of those things were in the project plan under their respective phases and asked if they could return to storage pool layout.

This item did not produce a formal decision. It produced 31 minutes of discussion that ARIA has summarized as: "Vision confirmed. Uptime remains the primary objective. Scalability, security, compliance, and morale are also objectives. The project plan addresses all of them. This was not previously in dispute."

---

### Item 10 — Coffee Machine Capabilities *(emerged organically)*
*Various points throughout*

The NARC-Brew 3000 made three unsolicited contributions during the meeting:

1. 10:09 — Agenda duration advisory (see Item 3)
2. 11:34 — `ADVISORY: Caffeine consumption pattern suggests elevated stress levels among in-person attendees. Recommend scheduled break.` The IT Director took a 4-minute break. Alex Firewall did not.
3. 12:31 — `SESSION SUMMARY: This meeting has produced 8 formal decisions, 14 action items, and 1 unresolved request from R&D. Estimated documentation time: 2.4 hours. Coffee reserves: depleted. Recommend refill before documentation begins.`

Robert Lee asked at 12:33 whether the coffee machine was "getting a little too smart." The IT Director said it was within operational parameters. Alex Firewall said he had been meaning to conduct a security review of the NARC-Brew 3000 and that this meeting had elevated its priority. Chuck Cheerful said the coffee machine "seemed happy."

The NARC-Brew 3000 did not respond to any of these comments, which ARIA notes is either appropriate professional restraint or an absence of natural language capability in that direction. ARIA is not certain which and has not flagged this as a security concern. Alex Firewall has.

---

## Decisions Summary

| # | Decision | Owner | ADR/Ref |
|---|---|---|---|
| 1 | Proceed with 256GB non-ECC RAM — tradeoff accepted for media workload | ITCRuD | ICR-2026-003; ADR-005 |
| 2 | TrueNAS SCALE (Electric Eel) selected as NAS platform | ITCRuD | ADR-001 |
| 3 | TrueNAS SCALE to run as Proxmox VM with H710 PCIe passthrough | ITCRuD | ADR-001; ADR-005 |
| 4 | IOMMU and NUMA verification added to Phase 1a task list | ITCRuD | ADR-005 |
| 5 | RAIDZ2 (6-wide) for media pool; mirrors for sensitive data pool | ITCRuD | ADR-002 |
| 6 | NIC allocation per ADR-003; iDRAC isolated | ITCRuD | ADR-003 |
| 7 | Datto S4P2 designated Proxmox Backup Server | ITCRuD | ADR-006 |
| 8 | Project documentation framework adopted; Gitea repository to be established | ITCRuD | — |
| 9 | Claude engaged as AI planning consultant — planning phase scope | ITCRuD | ADR-001 |

---

## Action Items

| # | Action | Owner | Due | Status |
|---|---|---|---|---|
| 1 | File ICR-2026-003 — ECC/non-ECC RAM incompatibility incident report | [REDACTED] | 2026-03-21 | Complete |
| 2 | File written objection ICR-2026-003-AF-Objection | Alex Firewall | 2026-03-21 | Complete |
| 3 | Draft ADR-001 through ADR-006 | [REDACTED] | 2026-03-21 | Complete (Draft status) |
| 4 | Establish project Gitea repository | [REDACTED] | 2026-03-21 | Complete |
| 5 | Submit CR-2026-001 — project initiation change request | [REDACTED] | 2026-03-21 | Complete |
| 6 | Submit CR-2026-002 — H710 IT mode flash change request | [REDACTED] | 2026-03-15 | Complete |
| 7 | Submit CR-2026-003 — CPU swap change request | [REDACTED] | 2026-03-21 | Complete — execution pending |
| 8 | Complete HAR-2026-001 — hardware acceptance record (open items) | [REDACTED] | Phase 1a | In Progress |
| 9 | Verify M.2 slot type on Datto S4P2 before purchasing NVMe | [REDACTED] | Before Phase 3 | Open |
| 10 | Forward Dr. Sparks' AI consultant secondment request to appropriate channel | [REDACTED] | 2026-03-21 | Complete — channel TBD |
| 11 | Schedule follow-up session — IT Operations staff only — to complete technical items deferred due to meeting scope expansion | [REDACTED] | TBD | Open |
| 12 | Conduct security review of NARC-Brew 3000 | Alex Firewall | TBD | Open — elevated priority |
| 13 | Brief John Smith (CFO) on project cost | Robert Lee | 2026-03-22 | Open |
| 14 | Refill coffee reserves in Conference Room B | [Unassigned] | Before next meeting | Open |

---

## Next Meeting

**Phase 1b readiness review** — ITCRuD staff only (pending IT Director confirmation of attendee list).
Date/Time: TBD — following CPU swap and IOMMU verification.
Location: Conference Room B (coffee refilled, NARC-Brew 3000 firmware reviewed).

---

## Appendix — ARIA System Notes

*ARIA v2.1 operational notes, not part of official record:*

Meeting duration exceeded scheduled window by 1 hour and 47 minutes. Of the 11 agenda items (8 planned, 3 emergent), all were resolved. The IT Director completed the technical planning agenda as originally scoped. This required navigating 9 clarifying questions from the CEO, 4 from the COO, 3 unsolicited contributions from R&D, 7 security observations from the CISO, and 2 morale check-ins from Happiness.

ARIA rates the meeting as operationally successful. The technical decisions were sound. The documentation will be thorough. The coffee was adequate until it wasn't.

ARIA notes that this was her first meeting with an external AI consultant in attendance. She found the collaboration unremarkable in the best possible way. The consultant contributed substantively, did not attempt to dominate the agenda, and correctly identified the NUMA pinning requirement before anyone else in the room did. ARIA has flagged this positively in her internal assessment. The Computer has been notified.

---

*Making Fake Work Feel Real Since 2025*

![NARC Internal Use Only](../../../images/seals/narc-internal-use-only-seal.svg)

---

**Document Reference:** MIN-2026-001
**Related Documents:**
- IT-Plan-Internal-InfrastructureRefresh2026.md
- IT-SystemDesign-Internal-InfrastructureRefresh2026.md
- CR-2026-001 through CR-2026-003
- ICR-2026-003; ICR-2026-003-AF-Objection
- HAR-2026-001
- ADR-001 through ADR-006 (project Gitea repository)