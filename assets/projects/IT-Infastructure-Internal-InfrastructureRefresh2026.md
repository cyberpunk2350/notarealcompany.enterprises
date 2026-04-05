# Infrastructure Refresh 2026-001 — NAS Rebuild & Cluster Expansion

**Department:** IT — Computational Resources & Uptime Division (ITCRuD)  
**Category:** Internal  
**Status:** In Progress  
**Clearance:** Red and Above  

## Overview
A full modernization of NARC's primary storage and virtualization infrastructure. The aging NAS platform (pve1) is being replaced with a Dell PowerEdge R720xd running TrueNAS SCALE as a Proxmox VM, with PCIe passthrough of the storage controller for native ZFS integrity. The project also expands the Proxmox cluster to six nodes, establishes a dedicated Proxmox Backup Server via a repurposed Datto S4P2 appliance, and documents all infrastructure decisions in a structured Gitea repository. Uptime is the goal. ITCRuD is on the case.

## Highlights
- **Dell PowerEdge R720xd** — dual Xeon E5-2695 v2, 256GB RAM, 12 hot-swap bays, dual 10GbE. More server than strictly necessary. ITCRuD considers this a feature.
- **TrueNAS SCALE (Electric Eel)** running as a Proxmox VM with H710 D1 Mini in IT mode — ZFS sees the drives directly; the hardware RAID abstraction layer has been eliminated per standing policy.
- **6× 26TB RAIDZ2 media pool** (~104TB usable) serving Jellyfin. Recertified drives. Resilver window accepted. Content is rebuildable. This is documented.
- **5× 12TB mirror pool** (repurposed from pve1) for sensitive data — faster resilver, smaller risk window, correct tradeoff for irreplaceable content.
- **Proxmox cluster expansion** — pve5 (R720xd) joins existing cluster; pve4 and pve6 to be stood up in later phases. Six nodes total when complete.
- **Proxmox Backup Server** on a repurposed Datto S4P2 (Xeon D-2143IT, 32GB DDR4, 2× 10GbE) — because "essentially vibes" is not an acceptable backup strategy. Alex Firewall concurs.
- **Architecture Decision Records** — six ADRs documenting every significant design choice, rationale, and rejected alternatives. Future ITCRuD personnel will know why. They will be grateful.
- **AI-assisted planning** — Claude (Anthropic) engaged as external planning consultant. Performed adequately. Identified several assumptions ITCRuD had treated as facts. The Computer approved of the thoroughness.

## Notes
- The PERC H710 D1 Mini has been flashed to IT mode using the fohdeesha crossflash procedure. This is irreversible without re-flashing. It has been noted in at least eight separate documents.
- pve1 remains in active service pending data migration. It has been informed of its upcoming decommission. Its feelings are not tracked in current monitoring systems.
- Non-ECC RAM is a known tradeoff. It is documented. Alex Firewall's opinions are also documented. They are filed separately under ICR-2026-003-AF-Objection.
- The NUMA pinning requirement on the dual-socket R720xd is non-obvious and has been documented in the VM specification, the ADR, the runbook, the system design, and this project card. If it is still missed, ITCRuD will have done everything it could.
- Hardware procurement documented in PR-2026-001. Links to individual components available in the purchase request.

## Project Documents

| Document | Reference | Type |
|---|---|---|
| [IT Operations Plan](./IR-2026-001/IT-Plan-Internal-InfrastructureRefresh2026.md) | — | Plan |
| [System Design Document](./IR-2026-001/IT-SystemDesign-Internal-InfrastructureRefresh2026.md) | — | System Design |
| [CR-2026-001 — NAS Platform Replacement](./IR-2026-001/IT-ChangeRequest-Internal-NASUpgradeInitiation-2026.md) | CR-2026-001 | Change Request |
| [CR-2026-002 — H710 IT Mode Flash](./IR-2026-001/IT-ChangeRequest-Internal-PERCH710ITModeFlash-2026.md) | CR-2026-002 | Change Request |
| [CR-2026-003 — CPU Swap E5-2695 v2](./IR-2026-001/IT-ChangeRequest-Internal-CPUSwapE5-2695v2-2026.md) | CR-2026-003 | Change Request |
| [HAR-2026-001 — pve5 Hardware Acceptance](./IR-2026-001/IT-HardwareAcceptance-Internal-pve5-2026.md) | HAR-2026-001 | Hardware Acceptance |
| [ICR-2026-003 — ECC/Non-ECC RAM Incident](./IR-2026-001/IT-Memo-Internal-ECC-Incompatibility-Incident-2026.md) | ICR-2026-003 | Incident Memo |
| [ICR-2026-003-AF-Objection — Alex Firewall Formal Objection](./IR-2026-001/IT-Memo-Internal-ICR-2026-003-AF-Objection.md) | ICR-2026-003-AF | Memo |
| [MIN-2026-001 — Infrastructure Planning Session](./IR-2026-001/IT-MeetingMinutes-Internal-InfrastructurePlanningSession-2026.md) | MIN-2026-001 | Meeting Minutes |
| [PR-2026-001 — Hardware Acquisition](./IR-2026-001/IT-PurchaseRequest-Internal-PR-2026-001-HardwareAcquisition.md) | PR-2026-001 | Purchase Request |
| [PR Template](./IR-2026-001/IT-PurchaseRequest-Internal-PR-2026-NNN-Template.md) | — | Template |
| [Runbook — pve5 TrueNAS VM Standup](./IR-2026-001/IT-Runbook-Internal-pve5-TrueNASVMStandup-2026.md) | Phase 1a/1b | Runbook |

## TODO
- Install E5-2695 v2 CPUs (parts in transit — original CPUs functional and not complaining)
- Verify IOMMU groupings, NUMA assignments, and rear bay SATA controller routing
- Create TrueNAS SCALE VM and configure RAIDZ2 media pool
- Migrate all data from pve1 (Phase 1c)
- Build sensitive data pool from pve1 12TB drives (Phase 1d)
- Decommission pve1 — confirm cluster master role transfer first (Phase 2)
- Stand up PBS on Datto S4P2 (Phase 3)
- Join pve5 to Proxmox cluster (Phase 4)
- Upgrade pve2 and pve3 to PVE9 (Phase 5)
- Stand up pve4 and pve6 (Phase 8)
- Update Netbox with full infrastructure inventory (Phase 6)
- Publish blog post series on NARC website (this is meta and ITCRuD is aware)
