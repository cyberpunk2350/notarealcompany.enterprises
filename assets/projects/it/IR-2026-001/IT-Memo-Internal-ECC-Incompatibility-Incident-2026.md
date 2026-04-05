# ![NARC Logo](../images/narc-logo.svg)

**Not A Real Company (NARC)**
Enterprises

**Date:** 2026-03-21
**To:** All Stakeholders, Infrastructure Refresh 2026-001 — Red Clearance and Above
**From:** [REDACTED], IT Director — Computational Resources & Uptime Division (ITCRuD)
**CC:** Robert Lee, COO; Mary Johnson, CTO; Alex Firewall, CISO
**Subject:** ICR-2026-003 — ECC/Non-ECC RAM Incompatibility Incident: Summary, Decision, and Closure

**Classification:** ![Internal](../images/seals/internal.svg) INTERNAL — Red Clearance and Above

---

## Summary

During the hardware preparation phase of Infrastructure Refresh 2026-001, ITCRuD encountered an incompatibility between the existing DDR3 ECC RAM installed in the Dell PowerEdge R720xd and the new non-ECC DDR3 RAM procured for the upgrade. The two memory types cannot be operated in the same system simultaneously. A decision was required. A decision was made. This memo documents both.

Citizens are advised that this memo exists to provide a complete record of the incident and the rationale behind the resolution. Citizens who find this level of documentation excessive are reminded that the alternative is forgetting why the server is running non-ECC RAM in eighteen months and making incorrect assumptions about its configuration. The Infrastructure Division has been there before. It did not enjoy it.

---

## Incident Description

**Incident Reference:** ICR-2026-003
**Date Discovered:** 2026-03-21
**Discovered By:** IT Operations — ITCRuD
**Priority:** Medium
**Status:** Resolved — Closed

During preparation of the R720xd for Proxmox VE 9 installation, the following incompatibility was identified:

| Item | Detail |
|---|---|
| Existing RAM | DDR3 ECC (Error-Correcting Code) — installed in unit at acquisition |
| Procured RAM | DDR3 non-ECC — sourced for capacity upgrade |
| Incompatibility | DDR3 ECC and non-ECC modules cannot be mixed in the same system. Operating both simultaneously is not supported and was not attempted. |
| Result | A decision was required regarding which RAM set to retain. |

The incompatibility was identified prior to installation of the new RAM. No data was at risk. No systems were impacted. No outages occurred. The Compliance Bot was not triggered. Victor Watchful was informed as a precaution. Victor Watchful is always informed as a precaution.

---

## Options Evaluated

**Option A — Retain existing ECC RAM, return non-ECC**
- Preserves ECC memory integrity guarantees
- Requires sourcing ECC DDR3 LRDIMMs compatible with the R720xd for future expansion
- Available capacity at acquisition: insufficient for planned TrueNAS VM allocation
- ECC-compatible capacity upgrade: additional procurement required, timeline and cost uncertain

**Option B — Replace with non-ECC RAM, proceed with 256GB**
- 256GB non-ECC provides sufficient capacity for the planned TrueNAS VM (64GB) and remaining host workloads
- Non-ECC introduces a known risk for ZFS: RAM bit flips can corrupt data without ZFS detecting it at the storage layer
- Risk is mitigated by workload: the primary pool is a media library — rebuildable content with no irreplaceable data
- Allows immediate project progression without additional procurement

**Option C — Source compatible ECC RAM, defer project**
- Preserves full ECC integrity guarantees
- Introduces procurement delay of unknown duration
- Defers all downstream project phases

---

## Decision

**Option B selected: proceed with 256GB non-ECC DDR3.**

**Rationale:** The primary storage workload (media library — movies, television, rebuildable content) does not carry the risk profile that would make ECC a hard requirement. The consequence of a RAM-induced ZFS corruption event is inconvenient, not catastrophic — the content can be rebuilt. The project timeline impact of Option C was not justified by the risk delta for this specific workload.

**Conditions attached to this decision:**

1. The non-ECC tradeoff is formally documented in ADR-005 (TrueNAS VM Configuration) and is not to be treated as an oversight or unknown by future ITCRuD personnel
2. If the sensitive data pool (Phase 1d, 5× 12TB drives) is ever extended to host data that cannot be rebuilt from source, the RAM situation must be re-evaluated at that time
3. ECC-compatible RAM sourcing for the R720xd is added to the long-term infrastructure parking lot for future consideration when budget allows
4. Alex Firewall's written objection to this decision is acknowledged, noted, and filed under ICR-2026-003-AF-Objection. It will be retrieved if needed.

---

## Risk Acceptance

This decision constitutes formal acceptance of the non-ECC RAM risk for the current workload. The risk is:

- **Scope:** Primary media pool and any other workloads hosted on pve5
- **Nature:** RAM bit flip could cause ZFS pool corruption without automatic detection
- **Likelihood:** Low — modern ECC-less systems operate without incident in the vast majority of homelab deployments
- **Consequence if realized:** Pool rebuild required; media content recovery from original sources; time and bandwidth cost, not data loss
- **Monitoring:** ZFS weekly scrubs will detect corruption at the storage layer; they will not prevent RAM-induced corruption before it reaches storage
- **Accepted by:** [REDACTED], IT Director, ITCRuD

---

## Action Items

| # | Action | Owner | Status |
|---|--------|-------|--------|
| 1 | Document non-ECC tradeoff in ADR-005 | ITCRuD | Complete |
| 2 | Add ECC RAM sourcing to long-term parking lot | ITCRuD | Complete |
| 3 | File Alex Firewall's objection under ICR-2026-003-AF-Objection | ITCRuD | Complete |
| 4 | Re-evaluate RAM configuration if sensitive data pool scope changes | ITCRuD | Ongoing — monitor |
| 5 | Inform Chuck Cheerful that morale impact of this incident is classified as Negligible | ITCRuD | Complete |

---

## Closure

Incident ICR-2026-003 is hereby closed. The incompatibility has been resolved, the decision has been made and documented, the risk has been formally accepted, and the relevant parties have been notified. The server is running 256GB non-ECC RAM. This was intentional. It is in the record.

Citizens who encounter this memo in future and wonder why the server is running non-ECC RAM now have their answer. Citizens are encouraged to read the full rationale before forming opinions. Alex Firewall's opinion is already on file. There is limited space for additional opinions at this time.

---

*Making Fake Work Feel Real Since 2025*

![NARC Internal Use Only](../images/seals/narc-internal-use-only-seal.svg)

---

**Document Reference:** ICR-2026-003
**Supersedes:** Nothing — this is the first and only memo on this subject, which is how it should have been the first time
**Related Documents:**
- ADR-005 (TrueNAS VM Configuration) — project Gitea repository
- IT-Plan-Internal-InfrastructureRefresh2026.md
- IT-SystemDesign-Internal-InfrastructureRefresh2026.md
- IT-HardwareAcceptance-Internal-pve5-2026.md (HAR-2026-001)
- IT-Memo-Internal-ICR-2026-003-AF-Objection.md
- CR-2026-001 — NAS Platform Replacement and Infrastructure Expansion