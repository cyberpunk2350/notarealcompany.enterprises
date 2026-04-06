# ![NARC Logo](../../../images/narc-logo.svg)

**Not A Real Company (NARC)**
**IT Purchase Request — PR-2026-001**

**Date Submitted:** 2026-03-01
**Requestor:** [REDACTED], IT Director — IT Operations, Computational Resources & Uptime Division (ITCRuD)
**Department:** IT Operations — ITCRuD
**Classification:** ![Internal](../../../images/seals/internal.svg) INTERNAL — Red Clearance and Above
**Related Change Request:** CR-2026-001

---

## Request Summary

| Field | Value |
|---|---|
| **Purchase Request Reference** | PR-2026-001 |
| **Request Title** | Infrastructure Refresh 2026-001 — Primary Hardware Acquisition |
| **Priority** | High |
| **Status** | Approved — Partially Fulfilled |
| **Requested By** | [REDACTED], IT Director, ITCRuD |
| **Finance Approval** | John Smith, CFO |
| **Manager Approval** | Robert Lee, COO |
| **CTO Approval** | Mary Johnson, CTO |
| **Approved By** | ![Approved by the Computer](../../../images/seals/approved-by-computer.svg) |

> *Finance Note: John Smith reviewed this request and asked "does this cost money." It does. He approved it anyway. This is documented.*

---

## Justification

Primary hardware acquisition for Infrastructure Refresh 2026-001. The existing NAS platform (pve1) has been designated a Legacy Optimization Opportunity. Replacement hardware is required to proceed with Phase 1 of the project plan. Full technical justification is documented in IT-Plan-Internal-InfrastructureRefresh2026.md and IT-SystemDesign-Internal-InfrastructureRefresh2026.md.

Items in this request were acquired through appropriate secondary market channels where noted. Secondhand/recertified acquisition reduces cost while providing hardware that meets the technical specification. The risks of secondhand/recertified acquisition are documented in IT-SystemDesign-Internal-InfrastructureRefresh2026.md and accepted by the appropriate authority.

---

## Line Items

| # | Item | Description | Qty | Unit | Est. Cost | Link | Status | Notes |
|---|---|---|---|---|---|---|---|---|
| 1 | Dell PowerEdge R720xd | 2U rack server, 12-bay, dual socket LGA2011 — secondhand | 1 | Unit | [cost] | [seller listing link] | Received | Primary platform for Phase 1 |
| 2 | Intel Xeon E5-2695 v2 | 12-core/24-thread LGA2011 processor — matched pair | 2 | Unit | [cost ea.] | [seller listing link] | In Transit | CR-2026-003; install pending arrival |
| 3 | DDR3 non-ECC RAM | 256GB total — compatible with R720xd; specific DIMM configuration per seller | 1 | Kit | [cost] | [seller listing link] | Received | Non-ECC; ECC incompatibility documented in ICR-2026-003 |
| 4 | 26TB SATA HDD (recertified) | Enterprise SATA HDD, recertified — media pool drives | 6 | Unit | [cost ea.] | [seller listing link] | Received — installation pending verification | Bays 1–6; SMART baseline required before pool creation |
| 5 | 2TB SATA SSD | 2.5" SATA SSD — rear bay OS and storage drives | 2 | Unit | [cost ea.] | [seller listing link] | Received and installed | Rear bays 1–2; PVE9 on bay 1 |
| 6 | R720xd rear bay controller board | Optional rear drive controller board — enables rear 2.5" hot-swap bays | 1 | Unit | [cost] | [seller listing link] | Received — installation pending verification | HAR-2026-001 OI-HAR-005 |

---

## Specification References

| Item | Manufacturer Spec / Documentation |
|---|---|
| Dell PowerEdge R720xd | [Dell PowerEdge R720/R720xd Owner's Manual](https://www.dell.com/support/manuals/en-us/poweredge-r720/720720xdom-v3) |
| Intel Xeon E5-2695 v2 | [Intel ARK — E5-2695 v2 Specifications](https://www.intel.com/content/www/us/en/products/sku/75281/intel-xeon-processor-e52695-v2-30m-cache-2-40-ghz/specifications.html) |

---

## Total

| | |
|---|---|
| **Estimated Total** | [sum of line items] |
| **Actual Total** | [to be filled on receipt of all items] |
| **Budget Line** | IT Infrastructure — Capital Hardware |
| **Budget Status** | Approved |

> *Finance requests that future purchase requests include actual costs. ITCRuD notes that actual costs require the items to have been purchased, which requires the purchase request to have been submitted first. This has been noted by both parties.*

---

## Delivery and Receipt Tracking

| # | Item | Expected Delivery | Received | Verified (HAR) | Notes |
|---|---|---|---|---|---|
| 1 | Dell PowerEdge R720xd | 2026-03 | ✓ | Partial — HAR-2026-001 open items | |
| 2 | Intel Xeon E5-2695 v2 (×2) | TBD | ⏳ In transit | Pending | CR-2026-003 blocked on arrival |
| 3 | DDR3 non-ECC RAM | 2026-03 | ✓ | ✓ | ICR-2026-003 filed |
| 4 | 26TB SATA HDD ×6 | 2026-03 | Received — installation unconfirmed | Pending | HAR-2026-001 OI-HAR-003 |
| 5 | 2TB SATA SSD ×2 | 2026-03 | ✓ | ✓ | Installed; PVE9 operational |
| 6 | Rear bay controller board | 2026-03 | Received — installation unconfirmed | Pending | HAR-2026-001 OI-HAR-005 |

---

## Approvals

| Name | Title | Decision | Date |
|---|---|---|---|
| [REDACTED] | IT Director, ITCRuD | Approved — Requestor | 2026-03-01 |
| Robert Lee | COO | Approved | 2026-03-01 |
| John Smith | CFO | Approved | 2026-03-01 |
| Mary Johnson | CTO | Approved | 2026-03-01 |

---

*Making Fake Work Feel Real Since 2025*

![NARC Internal Use Only](../../../images/seals/narc-internal-use-only-seal.svg)

---

**Related Documents:**
- CR-2026-001 — NAS Platform Replacement and Infrastructure Expansion
- CR-2026-003 — CPU Swap E5-2695 v2
- ICR-2026-003 — ECC/Non-ECC RAM Incompatibility Incident
- IT-HardwareAcceptance-Internal-pve5-2026.md (HAR-2026-001)
- IT-Plan-Internal-InfrastructureRefresh2026.md