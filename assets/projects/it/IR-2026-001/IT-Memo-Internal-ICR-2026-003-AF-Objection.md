# ![NARC Logo](../images/narc-logo.svg)

**Not A Real Company (NARC)**
Enterprises

**Date:** 2026-03-21
**To:** [REDACTED], IT Director — ITCRuD; Robert Lee, COO; Mary Johnson, CTO
**From:** Alex Firewall, CISO
**CC:** Victor Watchful, Head of Internal Security; File ICR-2026-003
**Subject:** FORMAL WRITTEN OBJECTION — ICR-2026-003 Resolution: Non-ECC RAM Acceptance

**Classification:** ![Internal](../images/seals/internal.svg) INTERNAL — Red Clearance and Above
**Document Reference:** ICR-2026-003-AF-Objection
**Filed In Response To:** ICR-2026-003 — ECC/Non-ECC RAM Incompatibility Incident: Summary, Decision, and Closure

---

I am filing this objection formally and for the record. I understand the decision has been made. I am not requesting that it be revisited. I am requesting that my position be documented with the same thoroughness ITCRuD applies to everything else, which is considerable.

---

## Statement of Objection

The decision to proceed with 256GB of non-ECC RAM on pve5 was made rationally, documented thoroughly, and accepted by the appropriate authority. I do not dispute the process. I dispute the comfort level.

My objection is as follows:

**1. "Media content is rebuildable" is a risk acceptance argument, not a risk elimination argument.**

The memo (ICR-2026-003) correctly identifies the risk: a RAM bit flip can corrupt a ZFS pool without ZFS detecting it at the storage layer. The memo then accepts this risk on the basis that the primary workload is rebuildable media content. This is a reasonable argument. It is not, however, a reassuring one.

"We can rebuild it if something goes wrong" is the same logic that preceded several incidents I am not authorized to discuss in this document. The incidents are filed under a separate classification. Citizens with appropriate clearance may submit a request.

**2. The sensitive data pool changes this calculus.**

Phase 1d introduces a second pool on the same host for sensitive, non-rebuildable data. The memo acknowledges this and attaches a condition: "If the sensitive data pool is ever extended to host data that cannot be rebuilt from source, the RAM situation must be re-evaluated at that time."

My objection is that "re-evaluate at that time" is not a monitoring strategy. It is a hope. CISO does not operate on hope. CISO operates on documented controls, scheduled reviews, and the occasional strongly worded memo, of which this is one.

I am requesting that the re-evaluation trigger be converted from a condition attached to a closed incident memo into a tracked open item with an assigned owner, a defined review event, and a documented escalation path. Specifically: when Phase 1d is activated, the RAM configuration must be reviewed before the sensitive data pool is populated. Not after. Not "at some point." Before.

**3. The queue depth improvement does not offset the ECC concern.**

ITCRuD's documentation notes, approvingly, that the H710 IT mode flash increases the adapter's queue depth from 25 to 600. This is a genuine operational improvement. I am noting, for the record, that queue depth and memory error correction are unrelated attributes and should not be discussed in proximity in a way that implies one compensates for the other. They do not.

**4. Weekly ZFS scrubs detect corruption, not prevent it.**

The maintenance plan references weekly scrubs as a monitoring mechanism for data integrity. This is correct. Weekly scrubs will identify corruption that has already occurred. By the time a scrub reports a problem, the corruption exists. On a non-ECC system, the corruption may have originated in RAM before reaching storage. The scrub finds the evidence. It does not prevent the crime.

I am not suggesting scrubs are useless. I am suggesting they should not be cited as a mitigation for a RAM integrity concern. They are a detection mechanism. The distinction matters.

---

## What I Am Not Requesting

I am not requesting that the decision be reversed. I accept that ECC-compatible RAM sourcing introduces procurement delay, that the budget situation is what it is, and that the risk profile for a media workload is genuinely lower than for a general-purpose host. The decision is defensible. I defended it to Victor Watchful when he asked me about it. Victor Watchful asked me about it at length.

I am not requesting additional meetings. I have attended sufficient meetings on this matter. The meetings are complete.

I am not requesting that this objection be acknowledged by the parties named in the To field. Acknowledgment of receipt by the document management system is sufficient. Silence will be interpreted as receipt, not agreement.

---

## What I Am Requesting

1. **Convert the Phase 1d RAM re-evaluation from a closed condition to an open tracked item.** Assign it to ITCRuD. Gate Phase 1d pool population on completion of that review.

2. **Add a note to the TrueNAS VM monitoring configuration** specifying that ZFS scrub alerts are a data corruption detection mechanism, not a RAM integrity assurance mechanism. The distinction should be present in the runbook.

3. **File this document** under ICR-2026-003-AF-Objection in the project repository, cross-referenced from ADR-005 and the parent incident memo. Future ITCRuD personnel should be able to find this objection from either document.

4. **Source ECC-compatible RAM when budget permits.** This is in the long-term parking lot. I am confirming that it should stay there and not be quietly removed when no one is looking. I will be looking.

---

## Closing Statement

ITCRuD produces more documentation than any other division in this organization. I respect this. Documentation is a security control. This document is a security control. It exists so that future personnel have a complete picture of the risk environment at the time a decision was made, including the concerns that were noted, filed, and set aside in favor of progress.

Progress is important. So is the record.

Alex Firewall
CISO, Not A Real Company (NARC)
*Polite Packet Interrogation Division*

---

*Making Fake Work Feel Real Since 2025*

![Authorized Use Only](../images/seals/authorized-use-only.svg)

---

**Filed:** 2026-03-21
**Parent Incident:** ICR-2026-003
**Status:** Filed — No response required — No action pending (see requests above for tracked items)
**Next Review:** When Phase 1d is activated — see Request 1

---

**Related Documents:**
- IT-Memo-Internal-ECC-Incompatibility-Incident-2026.md (ICR-2026-003)
- ADR-005 — TrueNAS VM Configuration (project Gitea repository)
- IT-HardwareAcceptance-Internal-pve5-2026.md (HAR-2026-001) — OI-HAR-004 tracks Phase 1d re-evaluation gate
- CR-2026-001 — NAS Platform Replacement and Infrastructure Expansion