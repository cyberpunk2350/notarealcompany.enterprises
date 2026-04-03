# ![NARC Logo](../images/narc-logo.svg)

**Not A Real Company (NARC)**
**IT Change Request — CR-2026-001**

**Date Submitted:** 2026-03-01
**Requester:** [REDACTED], IT Director — ITCRuD
**Classification:** ![Internal](../images/seals/internal.svg) INTERNAL — Red Clearance and Above

---

## Change Summary

| Field | Value |
|---|---|
| **Change Reference** | CR-2026-001 |
| **Change Title** | Primary NAS Platform Replacement and Infrastructure Expansion |
| **Change Type** | Major — Infrastructure Replacement |
| **Priority** | High |
| **Status** | Approved |
| **Approved By** | Mary Johnson, CTO |
| **Secondary Approval** | ![Approved by the Computer](../images/seals/approved-by-computer.svg) |

---

## Change Description

Replacement of NARC's primary NAS platform (pve1 — OpenMediaVault on Proxmox) with a Dell PowerEdge R720xd running TrueNAS SCALE as a Proxmox virtual machine with PCIe storage controller passthrough. The change also initiates a broader infrastructure expansion: Proxmox cluster growth to six nodes, Proxmox Backup Server deployment on a repurposed Datto S4P2 appliance, and upgrades of existing cluster nodes to Proxmox VE 9.

Full scope documented in IT-Plan-Internal-InfrastructureRefresh2026.md and IT-SystemDesign-Internal-InfrastructureRefresh2026.md.

---

## Reason for Change

The existing NAS platform (pve1) has exceeded its projected service window. Hardware telemetry indicates the platform is approaching end of operational life. The existing backup posture was identified as insufficient. The change was not initiated in response to an incident — it was initiated in response to the kind of quiet, accumulating technical debt that becomes an incident if left unaddressed. ITCRuD notes this distinction for the record.

---

## Impact Assessment

| Impact Area | Assessment |
|---|---|
| Service availability | Jellyfin downtime during Phase 1c cutover — expected < 2 hours |
| Data integrity | Migration validated by checksum before decommission |
| Cluster stability | pve1 decommission gated on cluster master role transfer |

**Risk accepted by:** Mary Johnson, CTO

---

## Rollback Plan

Full rollback available until pve1 is decommissioned. No rollback path exists after Phase 2 completes.

---

## Approvals

| Name | Title | Decision | Date |
|---|---|---|---|
| [REDACTED] | IT Director, ITCRuD | Approved — Requester | 2026-03-01 |
| Robert Lee | COO | Approved | 2026-03-01 |
| Mary Johnson | CTO | Approved | 2026-03-01 |
| Alex Firewall | CISO | Approved with reservations — see ICR-2026-003-AF-Objection | 2026-03-21 |

---

*Making Fake Work Feel Real Since 2025*

![NARC Internal Use Only](../images/seals/narc-internal-use-only-seal.svg)

---

**Related Documents:**
- IT-Plan-Internal-InfrastructureRefresh2026.md
- IT-SystemDesign-Internal-InfrastructureRefresh2026.md
- CR-2026-002 — PERC H710 D1 Mini IT Mode Flash
- CR-2026-003 — CPU Swap: E5-2695 v2 Installation
- ICR-2026-003 — ECC/Non-ECC RAM Incompatibility Incident
- PR-2026-001 — Infrastructure Refresh 2026-001 Primary Hardware Acquisition
