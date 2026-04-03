# ![NARC Logo](../images/narc-logo.svg)

**Not A Real Company (NARC)**
**IT Change Request — CR-2026-002**

**Date Submitted:** 2026-03-15  
**Completion Date:** 2026-03-15  
**Requester:** [REDACTED], IT Director — ITCRuD  
**Classification:** ![Internal](../images/seals/internal.svg) INTERNAL — Red Clearance and Above

---

## Change Summary

| Field | Value |
|---|---|
| **Change Reference** | CR-2026-002 |
| **Change Title** | PERC H710 D1 Mini — IT Mode Crossflash (RAID to HBA Pass-Through) |
| **Change Type** | Standard — Firmware Modification |
| **Priority** | High — Prerequisite for CR-2026-001 Phase 1b |
| **Status** | Completed |
| **Post-Implementation Status** | Confirmed successful |
| **Secondary Approval** | ![Approved by the Computer](../images/seals/approved-by-computer.svg) |

---

## Change Description

Crossflash of the Dell PERC H710 D1 Mini storage controller installed in pve5 from Dell RAID firmware to LSI IT mode firmware. In IT mode, the controller operates as a simple HBA pass-through device, presenting each connected drive as an individual block device rather than abstracting them into virtual RAID volumes.

This change is a prerequisite for TrueNAS SCALE VM deployment. ZFS requires direct drive access for data integrity, SMART monitoring, and error handling. Hardware RAID abstraction is incompatible with this requirement.

**Procedure followed:** fohdeesha H710 D1 Mini crossflash guide — https://fohdeesha.com/docs/H710-D1.html

---

## Key Technical Impact

| Impact Area | Assessment |
|---|---|
| Driver | Switches from MegaRAID to mpt3sas — simpler, preferred for ZFS |
| Queue depth | Increases from 25 to 600 — significant improvement for ZFS workloads |
| Reversibility | **Not reversible without re-flash** — firmware archive retained per ADR-004 |
| Data integrity during flash | Drives removed during procedure — zero risk |

---

## Post-Implementation Verification

| Check | Result |
|---|---|
| Controller presenting in IT mode | ✓ Confirmed |
| Drives visible as individual block devices | ✓ Confirmed |
| SMART data accessible via Proxmox | ✓ Confirmed |
| mpt3sas driver active | ✓ Confirmed |
| OS drives (rear bay) unaffected | ✓ Confirmed |
| BIOS settings restored | ✓ Confirmed |

Status: **Closed — Successful**

---

## Approvals

| Name | Title | Decision | Date |
|---|---|---|---|
| [REDACTED] | IT Director, ITCRuD | Approved — Requester | 2026-03-15 |
| Robert Lee | COO | Approved | 2026-03-15 |
| Mary Johnson | CTO | Approved | 2026-03-15 |
| Alex Firewall | CISO | Approved — no objection filed for this specific change | 2026-03-15 |

---

*Making Fake Work Feel Real Since 2025*

![NARC Internal Use Only](../images/seals/narc-internal-use-only-seal.svg)

---

**Related Documents:**
- CR-2026-001 — NAS Platform Replacement and Infrastructure Expansion
- ADR-004 — PERC H710 IT Mode Flash (project Gitea repository)
- IT-SystemDesign-Internal-InfrastructureRefresh2026.md
