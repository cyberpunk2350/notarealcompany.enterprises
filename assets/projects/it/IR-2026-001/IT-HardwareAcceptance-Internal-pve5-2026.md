# ![NARC Logo](../../../../images/narc-logo.svg)

**Not A Real Company (NARC)**
**IT Hardware Acceptance Record — HAR-2026-001**

**Date Submitted:** 2026-03-21
**Asset:** pve5 — Dell PowerEdge R720xd
**Submitted By:** [REDACTED], IT Director — ITCRuD
**Department:** IT Operations — Computational Resources & Uptime Division (ITCRuD)
**Classification:** ![Internal](../../../../images/seals/internal.svg) INTERNAL — Red Clearance and Above

---

## Purpose

This record documents the physical verification, component confirmation, and acceptance into service of pve5 (Dell PowerEdge R720xd) for Infrastructure Refresh 2026-001. Items marked as unverified at the time of initial submission represent known open items, not oversights. They are tracked. They will be resolved. This is how ITCRuD operates.

Citizens who find acceptance records with all boxes checked at submission time are encouraged to examine those records carefully. Completeness at submission is either impressive diligence or premature optimism. ITCRuD does not engage in premature optimism.

---

## Asset Information

| Field | Value |
|---|---|
| **Asset Name** | pve5 |
| **Make / Model** | Dell PowerEdge R720xd |
| **Form Factor** | 2U rack mount, 12-bay |
| **Acquisition Type** | Secondhand — secondary market |
| **Acquisition Date** | 2026-03 |
| **Location** | NARC Lab Rack |
| **Primary Role** | Proxmox VE 9 hypervisor host — TrueNAS SCALE VM (NAS) |
| **Related Change Request** | CR-2026-001 |
| **Owner** | ITCRuD |

---

## Component Verification

Each component must be physically verified and recorded. Status values: **Verified** / **Pending** / **Not Applicable** / **Discrepancy — see notes**.

### Processors

| Slot | Component | Expected | Status | Verified By | Date | Notes |
|---|---|---|---|---|---|---|
| CPU 1 | Intel Xeon E5-2695 v2 | E5-2695 v2 | Pending | | | Parts in transit — CR-2026-003 |
| CPU 2 | Intel Xeon E5-2695 v2 | E5-2695 v2 | Pending | | | Parts in transit — CR-2026-003 |
| CPU 1 (interim) | Original processor | Functional | Verified | [REDACTED] | 2026-03-15 | Operational pending E5-2695 v2 arrival |
| CPU 2 (interim) | Original processor | Functional | Verified | [REDACTED] | 2026-03-15 | Operational pending E5-2695 v2 arrival |

### Memory

| Slot Group | Component | Expected | Status | Verified By | Date | Notes |
|---|---|---|---|---|---|---|
| All populated slots | 256GB DDR3 non-ECC | 256GB | Verified | [REDACTED] | 2026-03-15 | Non-ECC — accepted per ICR-2026-003; AF objection filed |
| ECC compatibility | DDR3 ECC (original) | Mixed | Not Applicable | | | ECC/non-ECC mixing not supported; original sticks not installed |

### Storage Controller

| Component | Expected | Status | Verified By | Date | Notes |
|---|---|---|---|---|---|
| Dell PERC H710 D1 Mini | IT mode (crossflashed) | Verified | [REDACTED] | 2026-03-15 | Confirmed IT mode; drives present as block devices; CR-2026-002 complete |
| Firmware archive | Retained | Verified | [REDACTED] | 2026-03-15 | Required for rollback per CR-2026-002 |

### Storage — Front Bays

| Bay | Expected Drive | Installed | Capacity Verified | SMART Run | Status | Notes |
|---|---|---|---|---|---|---|
| Bay 1 | 26TB SATA HDD (recertified) | Pending | Pending | Pending | Pending | Physical installation unconfirmed |
| Bay 2 | 26TB SATA HDD (recertified) | Pending | Pending | Pending | Pending | Physical installation unconfirmed |
| Bay 3 | 26TB SATA HDD (recertified) | Pending | Pending | Pending | Pending | Physical installation unconfirmed |
| Bay 4 | 26TB SATA HDD (recertified) | Pending | Pending | Pending | Pending | Physical installation unconfirmed |
| Bay 5 | 26TB SATA HDD (recertified) | Pending | Pending | Pending | Pending | Physical installation unconfirmed |
| Bay 6 | 26TB SATA HDD (recertified) | Pending | Pending | Pending | Pending | Physical installation unconfirmed |
| Bay 7 | Empty (reserved — 12TB future) | N/A | N/A | N/A | Not Applicable | Reserved for Phase 1d |
| Bay 8 | Empty (reserved — 12TB future) | N/A | N/A | N/A | Not Applicable | Reserved for Phase 1d |
| Bay 9 | Empty (reserved — 12TB future) | N/A | N/A | N/A | Not Applicable | Reserved for Phase 1d |
| Bay 10 | Empty (reserved — 12TB future) | N/A | N/A | N/A | Not Applicable | Reserved for Phase 1d |
| Bay 11 | Empty (reserved — 12TB future) | N/A | N/A | N/A | Not Applicable | Reserved for Phase 1d |
| Bay 12 | Empty (hot spare candidate) | N/A | N/A | N/A | Not Applicable | Uncommitted |

### Storage — Rear Bays

| Bay | Component | Expected | Installed | Status | Verified By | Date | Notes |
|---|---|---|---|---|---|---|---|
| Rear Bay 1 | 2TB SATA SSD | Proxmox OS | Verified | Verified | [REDACTED] | 2026-03-15 | PVE9 installed; ext4; operational |
| Rear Bay 2 | 2TB SATA SSD | VM/LXC storage | Verified | Pending config | [REDACTED] | 2026-03-15 | Present; thin-LVM config pending cluster audit |
| Rear Bay Controller | Optional controller board | Installed | Pending | Pending | | | Received; physical installation unconfirmed |

### Networking

| Component | Expected | Status | Verified By | Date | Notes |
|---|---|---|---|---|---|
| 10GbE dual-port card | Dual-port 10GbE | Verified | [REDACTED] | 2026-03-15 | Present; IOMMU group assignment pending CPU swap |
| Onboard 1GbE ports | 4× 1GbE | Verified | [REDACTED] | 2026-03-15 | Present; bond config pending Phase 1a |
| iDRAC port | Dedicated management | Verified | [REDACTED] | 2026-03-15 | Isolated per Alex Firewall's standing directive |
| iDRAC firmware | Current / functional | Pending | | | Version not yet recorded — see open item OI-HAR-001 |
| iDRAC remote console | Functional | Pending | | | Operational status not confirmed — see open item OI-HAR-001 |

### Firmware and BIOS

| Component | Expected | Status | Verified By | Date | Notes |
|---|---|---|---|---|---|
| R720xd BIOS version | Supports E5-2695 v2 | Pending | | | Must verify before CPU swap — CR-2026-003 prerequisite |
| BIOS version recorded | [VERSION] | Pending | | | Required as rollback reference — see open item OI-HAR-002 |
| H710 IT mode firmware | Post-flash version | Pending | | | Version not yet recorded — see open item OI-HAR-002 |
| iDRAC firmware version | Current | Pending | | | Not yet recorded — see open item OI-HAR-001 |

### Power and Physical

| Component | Expected | Status | Verified By | Date | Notes |
|---|---|---|---|---|---|
| Power supply redundancy | Dual PSU | Verified | [REDACTED] | 2026-03-15 | Both PSUs present and functional |
| Rail kit / rack mounting | Rack mounted | Verified | [REDACTED] | 2026-03-15 | Installed in lab rack |
| Cable management | Internal cables seated | Verified | [REDACTED] | 2026-03-15 | All visible connections confirmed |
| Chassis condition | Acceptable | Verified | [REDACTED] | 2026-03-15 | Secondhand unit; cosmetic wear noted; operationally sound |

---

## Open Items

Items that were unverified at time of submission. Each must be resolved before the relevant Phase 1a/1b step that depends on it.

| Reference | Item | Blocking Step | Owner | Status |
|---|---|---|---|---|
| OI-HAR-001 | iDRAC firmware version recorded; remote console operational confirmed | Phase 1a — before remote Phase 1b work | [REDACTED] | Open |
| OI-HAR-002 | R720xd BIOS version recorded; H710 IT mode firmware version recorded | Phase 1a — before CPU swap (CR-2026-003) | [REDACTED] | Open |
| OI-HAR-003 | 6× 26TB drives physical installation confirmed in bays 1–6 | Phase 1b — before TrueNAS VM creation | [REDACTED] | Open |
| OI-HAR-004 | SMART baseline run on all 6× 26TB drives | Phase 1b — before pool creation | [REDACTED] | Open |
| OI-HAR-005 | Rear bay controller board physical installation confirmed | Phase 1a — before rear bay use | [REDACTED] | Open |
| OI-HAR-006 | E5-2695 v2 CPU installation and POST verification | Phase 1a — before IOMMU configuration | [REDACTED] | Open — CR-2026-003 pending |

---

## Discrepancies

| # | Component | Expected | Found | Resolution |
|---|---|---|---|---|
| 1 | RAM — ECC/non-ECC | DDR3 ECC (original) | DDR3 non-ECC (new) incompatible with original | Accepted per ICR-2026-003; AF objection filed under ICR-2026-003-AF-Objection |

No other discrepancies identified at time of submission.

---

## SMART Baseline Record

To be completed when drives are physically confirmed installed (OI-HAR-003 resolved).

| Drive | Bay | Serial Number | Model | Pre-existing Hours | Reallocated Sectors | Pending Sectors | SMART Overall | Baseline Date |
|---|---|---|---|---|---|---|---|---|
| Drive 1 | Bay 1 | | | | | | | |
| Drive 2 | Bay 2 | | | | | | | |
| Drive 3 | Bay 3 | | | | | | | |
| Drive 4 | Bay 4 | | | | | | | |
| Drive 5 | Bay 5 | | | | | | | |
| Drive 6 | Bay 6 | | | | | | | |

```bash
# Commands to populate SMART baseline (run after TrueNAS VM operational):
# In TrueNAS shell → System → Shell
for disk in /dev/sd{a..f}; do
  echo "=== $disk ==="
  smartctl -a $disk | grep -E "Serial|Model|Power_On|Reallocated|Pending|overall"
done
```

---

## Acceptance Sign-Off

This record will be considered complete when all Open Items are resolved and the SMART baseline table is populated. Partial acceptance is acknowledged — the asset is in active use for permitted operations (Proxmox OS installed, H710 flash complete) while remaining open items are resolved in sequence.

| Role | Name | Sign-Off | Date | Notes |
|---|---|---|---|---|
| IT Director | [REDACTED] | Partial acceptance | 2026-03-21 | Open items OI-HAR-001 through OI-HAR-006 outstanding |
| COO | Robert Lee | | | Pending full acceptance |
| CISO | Alex Firewall | | | Pending — will review after OI-HAR-001 and OI-HAR-002 resolved; iDRAC and firmware baselines are a precondition for his sign-off |

---

*Making Fake Work Feel Real Since 2025*

![NARC Internal Use Only](../../../../images/seals/narc-internal-use-only-seal.svg)

---

**Document Reference:** HAR-2026-001
**Related Documents:**
- CR-2026-001 — NAS Platform Replacement and Infrastructure Expansion
- CR-2026-002 — PERC H710 IT Mode Flash
- CR-2026-003 — CPU Swap E5-2695 v2
- ICR-2026-003 — ECC/Non-ECC RAM Incompatibility Incident
- ICR-2026-003-AF-Objection — Alex Firewall Formal Objection
- PR-2026-001 — Infrastructure Refresh 2026-001 Primary Hardware Acquisition
- IT-Runbook-Internal-pve5-TrueNASVMStandup-2026.md
- IT-MeetingMinutes-Internal-InfrastructurePlanningSession-2026.md (MIN-2026-001)
