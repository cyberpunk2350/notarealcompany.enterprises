# ![NARC Logo](../../../../images/narc-banner.svg)
# IT Operations Plan — Infrastructure Refresh 2026-001 (Internal)

**Document Owner:** IT Operations — Computational Resources & Uptime Division (ITCRuD)<br>
**IT Director:** [REDACTED]<br>
**Reviewed By:** Robert Lee, COO<br>
**Approved By:** Mary Johnson, CTO<br>
**Version:** 1.0<br>
**Date:** 2026-03-21<br>
**Classification:** INTERNAL — Red Clearance and Above<br>

---

## Objective

Replace NARC's aging primary storage platform (pve1) with a Dell PowerEdge R720xd running TrueNAS SCALE as a Proxmox virtual machine, establish a dedicated backup infrastructure via a repurposed Datto S4P2 appliance, expand the Proxmox cluster to six nodes, and upgrade all existing cluster nodes to Proxmox VE 9. The existing platform has been designated a Legacy Optimization Opportunity. Its replacement has been authorized. ITCRuD is proceeding accordingly.

Citizens are reminded that "uptime" is in the division's name. This is not ironic. It is aspirational.

---

## Scope

**In scope:**
- Procurement and configuration of Dell PowerEdge R720xd (pve5)
- TrueNAS SCALE VM deployment with PCIe storage controller passthrough
- ZFS storage pool creation — primary media pool (6× 26TB, RAIDZ2) and sensitive data pool (5× 12TB, mirrors)
- Full data migration from pve1 OMV NAS to TrueNAS
- Decommission of pve1 following validated migration
- Proxmox Backup Server deployment on Datto S4P2
- Proxmox cluster expansion — pve5 join, pve4 and pve6 new standup
- PVE9 upgrades for pve2 and pve3
- Infrastructure documentation in Netbox
- NARC website project documentation and blog post series

**Out of scope:**
- Any infrastructure not named in this document
- Requests from Dr. Sylvia Sparks to "repurpose the old NAS hardware for experiments"
- Unraid (non-compliant with FOSS policy; this determination is final)

---

## Deliverables

- Operational TrueNAS SCALE VM on pve5 with ZFS media and sensitive data pools
- Validated data migration — all pve1 content verified on new platform
- Decommissioned pve1 with hardware disposition documented
- Operational Proxmox Backup Server (PBS) on Datto S4P2
- Six-node Proxmox cluster, all nodes on PVE9
- Full infrastructure documentation in Netbox
- Six Architecture Decision Records (ADRs) in project Gitea repository
- NARC website project card, project plan, system design document, and blog post series (Posts 1–4; Post 4 pending build completion)

---

## Risks

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| E5-2695 v2 CPU incompatible with R720xd BIOS revision | Medium | High | Verify BIOS version before installation; update firmware if required |
| H710 IOMMU group shared with other devices | Medium | Medium | Verify groupings post-CPU swap; VirtIO fallback documented in ADR-003 |
| SAS expander backplane detected (vs direct-attach) | Low | High | Verify backplane type before VM creation; expander requires different passthrough approach |
| 12TB drives from pve1 fail SMART assessment | Medium | Medium | Run SMART checks before pool creation; source replacements if needed |
| Resilver failure during 26TB RAIDZ2 rebuild | Low | High | Accepted — media content is rebuildable; RAIDZ2 provides two-drive fault tolerance |
| pve1 is Proxmox cluster master — decommission sequence broken | Medium | High | Identify cluster master before Phase 2; transfer role before decommissioning |
| Non-ECC RAM causes ZFS corruption | Low | Medium | Accepted tradeoff for rebuildable media workload; documented in ADR-005 |
| Jellyfin LXC misconfigured during NAS cutover | Medium | Medium | Document current mount paths before migration; validate playback post-cutover |
| Data loss during migration from failing pve1 hardware | Low | High | Run migration before pve1 fully fails; validate integrity with checksums post-transfer |
| PBS on Datto S4P2 — M.2 slot is SATA not NVMe | Medium | Low | Verify slot type before purchasing NVMe upgrade; SATA is acceptable fallback |

---

## Phases and Timeline

| Phase | Workstream | Status | Dependencies |
|-------|------------|--------|--------------|
| Phase 1a | Proxmox host preparation (pve5) | In Progress | CPU swap pending |
| Phase 1b | TrueNAS SCALE VM creation and pool build | Pending | Phase 1a complete |
| Phase 1c | Data migration — OMV → TrueNAS | Pending | Phase 1b complete |
| Phase 1d | Sensitive data pool (12TB drives) | Pending | Phase 1c complete, pve1 idle |
| Phase 2 | Legacy hardware decommission (pve1) | Pending | Phase 1 exit criteria; cluster master role transferred |
| Phase 3 | Proxmox Backup Server — Datto S4P2 | Pending | Phase 1d complete |
| Phase 4 | Cluster expansion — pve5 join | Pending | Phase 1 complete |
| Phase 5a | PVE9 upgrade — pve2 | Pending | Phase 4 complete |
| Phase 5b | PVE9 upgrade — pve3 | Pending | Phase 4 complete |
| Phase 6 | Netbox documentation | Pending | Phase 4+ |
| Phase 7 | NARC website project docs and blog | Pending | Ongoing |
| Phase 8a | New host standup — pve4 (Dell Optiplex) | Pending | Phase 4 complete |
| Phase 8b | New host standup — pve6 (Dell R630) | Pending | Phase 4 complete |

Timeline is task-gated rather than calendar-gated. Deviation from expected sequence is not a Treason Event, but it will be noted in the project repository.

---

## Approvals

| Name | Title | Signature |
|------|-------|-----------|
| [REDACTED] | IT Director, ITCRuD | |
| Robert Lee | COO | |
| Mary Johnson | CTO | |
| | Approved by the Computer | ![Approved by the Computer](../../../../images/seals/approved-by-computer.svg) |

---

**Related Documents:**
- IT-SystemDesign-Internal-InfrastructureRefresh2026.md
- IT-HardwareAcceptance-Internal-pve5-2026.md (HAR-2026-001)
- IT-Runbook-Internal-pve5-TrueNASVMStandup-2026.md
- IT-MeetingMinutes-Internal-InfrastructurePlanningSession-2026.md (MIN-2026-001)
- PR-2026-001 — Infrastructure Refresh 2026-001 Primary Hardware Acquisition
- CR-2026-001 — NAS Platform Replacement and Infrastructure Expansion
- CR-2026-002 — PERC H710 D1 Mini IT Mode Flash
- CR-2026-003 — CPU Swap E5-2695 v2
- ICR-2026-003 — ECC/Non-ECC RAM Incompatibility Incident
- ICR-2026-003-AF-Objection — Alex Firewall Formal Objection
- Project Gitea repository (ADR-001 through ADR-006): https://git.mylab.zip
