# ![NARC Logo](../images/narc-logo.svg)

**Not A Real Company (NARC)**
**IT Change Request — CR-2026-002**

**Date Submitted:** 2026-03-15
**Requester:** [REDACTED], IT Director — ITCRuD
**Department:** IT Operations — Computational Resources & Uptime Division (ITCRuD)
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
| **Requested By** | [REDACTED], IT Director, ITCRuD |
| **Reviewed By** | Robert Lee, COO |
| **Approved By** | Mary Johnson, CTO |
| **Secondary Approval** | ![Approved by the Computer](../images/seals/approved-by-computer.svg) |
| **Scheduled Date** | 2026-03-15 |
| **Completion Date** | 2026-03-15 |
| **Post-Implementation Status** | Confirmed successful |

---

## Change Description

Crossflash of the Dell PERC H710 D1 Mini storage controller installed in pve5 (Dell PowerEdge R720xd) from Dell RAID firmware to LSI IT mode firmware. In IT mode, the controller operates as a simple HBA pass-through device, presenting each connected drive as an individual block device to the operating system rather than abstracting them into virtual RAID volumes.

This change is a prerequisite for TrueNAS SCALE VM deployment (CR-2026-001 Phase 1b). ZFS requires direct drive access for data integrity, SMART monitoring, and error handling. Hardware RAID abstraction is incompatible with this requirement.

**Procedure followed:** fohdeesha H710 D1 Mini crossflash guide
- Reference: https://fohdeesha.com/docs/perc.html
- Card-specific: https://fohdeesha.com/docs/H710-D1.html

---

## Reason for Change

The PERC H710 D1 Mini ships in RAID mode, presenting drives to the OS as virtual RAID volumes via the MegaRAID driver. This configuration:

1. Prevents ZFS from accessing individual drives directly
2. Blocks SMART data visibility at the OS level
3. Uses the MegaRAID driver rather than the simpler `mpt3sas` driver required for correct ZFS/TrueNAS operation
4. Limits the adapter's queue depth to 25 (vs 600 in IT mode), which is insufficient for ZFS workloads under sustained I/O

IT mode resolves all four issues. The change is standard practice for ZFS deployments on Dell servers equipped with this controller.

Alex Firewall reviewed this change. Alex Firewall had no objections to this specific change. This is noted because it is unusual.

---

## Scope

**Systems affected:**
- pve5 (Dell R720xd) — PERC H710 D1 Mini controller only
- All drives connected to the H710 — not modified; present as individual block devices post-flash
- Proxmox VE 9 — driver change from MegaRAID to mpt3sas for H710-connected drives

**Systems not affected:**
- Rear-bay SATA ports (onboard Intel SATA controller) — independent of H710; unaffected
- Proxmox OS drives (rear bay SSDs) — on onboard controller; unaffected
- pve1 (legacy NAS) — unaffected; remains active

---

## Technical Procedure

### Pre-Flash Requirements
- [ ] Virtualization Technology disabled in BIOS
- [ ] SR-IOV Global Enable disabled in BIOS
- [ ] I/OAT DMA Engine disabled in BIOS
- [ ] Boot mode set to BIOS (not UEFI)
- [ ] RAID battery removed from H710
- [ ] All drives removed from front bays

### Flash Procedure
1. Boot fohdeesha prepackaged FreeDOS ISO via iDRAC virtual media
2. Execute crossflash procedure per H710 D1 Mini guide
3. Reboot to Debian live ISO for IT mode verification
4. Confirm controller presenting in IT mode
5. Re-enable Virtualization Technology, SR-IOV in BIOS
6. Restore UEFI boot mode
7. Reinstall front bay drives
8. Verify drives present as individual block devices in Proxmox

### Post-Flash Verification
```bash
lsblk -o NAME,TRAN,MODEL,SIZE,ROTA
ls -l /dev/disk/by-id/ | grep -v part
```

Expected: all front-bay drives visible as individual block devices; no virtual RAID volumes.

---

## Impact Assessment

| Impact Area | Assessment |
|---|---|
| Service availability | No impact — pve5 not yet in production service at time of flash |
| Data integrity | No drives were connected during flash procedure — zero risk |
| Reversibility | **Not reversible without re-flashing** — firmware archive retained; re-flash procedure documented |
| Driver change | OS switches from MegaRAID to mpt3sas for H710 devices — no negative impact; mpt3sas is simpler and preferred |
| Queue depth | Increases from 25 to 600 — positive operational impact |

**Critical note:** This change is **not reversible** without performing a re-flash from archived firmware. Future personnel who need to restore RAID mode must have access to the firmware archive and must follow the re-flash procedure. The firmware archive location is documented in ADR-004.

---

## Rollback Plan

| Scenario | Rollback Procedure |
|---|---|
| Flash fails mid-procedure | Re-attempt from FreeDOS ISO using archived firmware |
| Post-flash verification fails | Re-flash from archived firmware |
| IT mode operationally unsuitable (not anticipated) | Re-flash to Dell RAID firmware from archive |

**Firmware archive location:** Documented in ADR-004 (IT-SystemDesign-Internal-InfrastructureRefresh2026.md — ADR-004 cross-reference).
**Rollback authority:** [REDACTED], IT Director, ITCRuD

---

## Post-Implementation Verification

| Check | Result |
|---|---|
| Controller presenting in IT mode | ✓ Confirmed |
| Drives visible as individual block devices | ✓ Confirmed |
| SMART data accessible via Proxmox | ✓ Confirmed |
| mpt3sas driver active | ✓ Confirmed |
| OS drives (rear bay) unaffected | ✓ Confirmed |
| BIOS settings restored (Virtualization, SR-IOV, UEFI) | ✓ Confirmed |

Change implemented successfully. No issues encountered. Post-implementation status: **Closed — Successful**.

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
- Reference: https://fohdeesha.com/docs/H710-D1.html