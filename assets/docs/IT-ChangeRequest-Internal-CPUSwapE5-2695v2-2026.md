# ![NARC Logo](../images/narc-logo.svg)

**Not A Real Company (NARC)**
**IT Change Request — CR-2026-003**

**Date Submitted:** 2026-03-21  
**Requester:** [REDACTED], IT Director — ITCRuD  
**Classification:** ![Internal](../images/seals/internal.svg) INTERNAL — Red Clearance and Above

---

## Change Summary

| Field | Value |
|---|---|
| **Change Reference** | CR-2026-003 |
| **Change Title** | pve5 CPU Upgrade — Dual Intel Xeon E5-2695 v2 Installation |
| **Change Type** | Standard — Hardware Upgrade |
| **Priority** | High — Prerequisite for CR-2026-001 Phase 1a completion |
| **Status** | Pending — Parts in Transit |
| **Secondary Approval** | ![Approved by the Computer](../images/seals/approved-by-computer.svg) |

---

## Change Description

Physical replacement of existing processors in pve5 (Dell PowerEdge R720xd) with two Intel Xeon E5-2695 v2 processors. The E5-2695 v2 provides 12 cores / 24 threads per socket (48 threads total). This change completes the pve5 hardware build and enables IOMMU configuration and TrueNAS VM creation in Phase 1a/1b.

**Target hardware:** 2× Intel Xeon E5-2695 v2 — 12c/24t, 30MB cache, 2.4GHz base

---

## NUMA Topology Note

The R720xd is a dual-socket system. Following CPU installation, the NUMA node owning the H710 storage controller and 10GbE NIC must be identified. TrueNAS VM vCPUs and RAM must be pinned to the same NUMA node as both PCIe devices. This is documented in ADR-005 and the Phase 1a runbook. It has been noted in multiple documents. If it is still missed, ITCRuD will have done everything it could.

---

## Post-Installation Verification

```bash
# Verify topology (expect 48 threads, 2 sockets)
lscpu | grep -E "CPU\(s\)|Thread|Socket|Core"

# Verify NUMA topology
numactl --hardware

# Identify NUMA node for H710 and 10GbE
find /sys/kernel/iommu_groups/ -type l | sort -V
```

---

## Approvals

| Name | Title | Decision | Date |
|---|---|---|---|
| [REDACTED] | IT Director, ITCRuD | Approved — Requester | 2026-03-21 |
| Robert Lee | COO | Approved | 2026-03-21 |
| Mary Johnson | CTO | Approved | 2026-03-21 |
| Alex Firewall | CISO | Approved — no objection filed | 2026-03-21 |

---

*Making Fake Work Feel Real Since 2025*

![NARC Internal Use Only](../images/seals/narc-internal-use-only-seal.svg)

---

**Related Documents:**
- CR-2026-001 — NAS Platform Replacement and Infrastructure Expansion
- CR-2026-002 — PERC H710 D1 Mini IT Mode Flash (completed)
- ADR-005 — TrueNAS VM Configuration (project Gitea repository)
- IT-SystemDesign-Internal-InfrastructureRefresh2026.md
- IT-HardwareAcceptance-Internal-pve5-2026.md (HAR-2026-001 — OI-HAR-006)
