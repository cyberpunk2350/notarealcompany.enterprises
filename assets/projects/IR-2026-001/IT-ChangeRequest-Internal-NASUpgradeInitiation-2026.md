# ![NARC Logo](../images/narc-logo.svg)

**Not A Real Company (NARC)**
**IT Change Request — CR-2026-001**

**Date Submitted:** 2026-03-01
**Requester:** [REDACTED], IT Director — ITCRuD
**Department:** IT Operations — Computational Resources & Uptime Division (ITCRuD)
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
| **Requested By** | [REDACTED], IT Director, ITCRuD |
| **Reviewed By** | Robert Lee, COO |
| **Approved By** | Mary Johnson, CTO |
| **Secondary Approval** | ![Approved by the Computer](../images/seals/approved-by-computer.svg) |
| **Scheduled Start** | 2026-03-01 |
| **Expected Completion** | Multi-phase — see project plan |

---

## Change Description

Replacement of NARC's primary NAS platform (pve1 — OpenMediaVault on Proxmox) with a Dell PowerEdge R720xd running TrueNAS SCALE as a Proxmox virtual machine with PCIe storage controller passthrough. The change also initiates a broader infrastructure expansion: Proxmox cluster growth to six nodes, Proxmox Backup Server deployment on a repurposed Datto S4P2 appliance, and upgrades of existing cluster nodes to Proxmox VE 9.

This change is tracked under Infrastructure Refresh Initiative 2026-001. Full scope is documented in the project plan (IT-Plan-Internal-InfrastructureRefresh2026.md) and system design document (IT-SystemDesign-Internal-InfrastructureRefresh2026.md).

---

## Reason for Change

The existing NAS platform (pve1) has exceeded its projected service window. Hardware telemetry indicates the platform is approaching end of operational life. A review of backup and recovery posture identified the existing strategy as insufficient. The review findings were documented, escalated to the appropriate authority, and are not being discussed further in this change request.

Additionally, the existing platform fails to utilize available hardware resources at the scale required for planned growth. The replacement platform provides native ZFS, cluster integration, and sufficient compute and memory headroom for current and projected workloads.

The change was not initiated in response to an incident. It was initiated in response to the kind of quiet, accumulating technical debt that becomes an incident if left unaddressed. ITCRuD notes this distinction for the record.

---

## Scope

**Systems affected:**
- pve1 (legacy NAS host) — decommissioned at project completion
- pve5 (Dell R720xd) — new primary NAS host, introduced by this change
- Existing Proxmox cluster (pve2, pve3) — upgraded to PVE9
- New cluster nodes (pve4, pve6) — introduced in later phases
- Datto S4P2 — repurposed as Proxmox Backup Server
- Jellyfin LXC — mount point migration to new NAS

**Services affected:**
- Jellyfin media server — brief disruption during NAS cutover (Phase 1c)
- All Proxmox-hosted VMs/LXCs during pve2/pve3 upgrade windows (Phases 5a/5b)

**Data at risk:**
- Full media library and all data currently on pve1
- Risk mitigation: migration validated by checksum before decommission; no data destroyed until integrity confirmed

---

## Impact Assessment

| Impact Area | Assessment |
|---|---|
| Service availability | Jellyfin downtime during Phase 1c cutover — duration TBD, expected < 2 hours |
| Data integrity | High risk if migration is executed before validation — controls in place; see migration procedure |
| Security posture | No degradation; iDRAC isolated per standing directive; Alex Firewall consulted |
| Cluster stability | pve1 decommission gated on cluster master role transfer — blocking check in Phase 2 |
| Rollback | Full rollback available until pve1 is decommissioned; partial rollback available after |

**Risk accepted by:** Mary Johnson, CTO

---

## Rollback Plan

| Phase | Rollback Availability | Rollback Procedure |
|---|---|---|
| Phase 1a–1b | Full | Power down pve5; pve1 remains active throughout |
| Phase 1c (during migration) | Full | Abort migration; repoint Jellyfin to pve1; validate pve1 data integrity |
| Phase 1c (post-validation, pre-decommission) | Full | pve1 still active; repoint services; abort decommission |
| Phase 2 (post-decommission) | None | pve1 decommissioned; data confirmed on TrueNAS; no rollback path |
| Phase 3–8 | Per-phase | Each phase is independently reversible; see project plan |

**Rollback authority:** [REDACTED], IT Director, ITCRuD

---

## Dependencies and Prerequisites

- [ ] R720xd hardware fully assembled and verified
- [ ] PERC H710 flashed to IT mode (see CR-2026-002)
- [ ] CPU swap completed — E5-2695 v2 (see CR-2026-003)
- [ ] IOMMU groupings verified post-CPU swap
- [ ] pve1 cluster master role identified before Phase 2

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
- IT-MeetingMinutes-Internal-InfrastructurePlanningSession-2026.md (MIN-2026-001)
