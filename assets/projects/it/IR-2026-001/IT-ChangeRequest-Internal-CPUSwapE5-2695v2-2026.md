# ![NARC Logo](../../../../images/narc-logo.svg)

**Not A Real Company (NARC)**
**IT Change Request — CR-2026-003**

**Date Submitted:** 2026-03-21
**Requester:** [REDACTED], IT Director — ITCRuD
**Department:** IT Operations — Computational Resources & Uptime Division (ITCRuD)
**Classification:** ![Internal](../../../../images/seals/internal.svg) INTERNAL — Red Clearance and Above

---

## Change Summary

| Field | Value |
|---|---|
| **Change Reference** | CR-2026-003 |
| **Change Title** | pve5 CPU Upgrade — Dual Intel Xeon E5-2695 v2 Installation |
| **Change Type** | Standard — Hardware Upgrade |
| **Priority** | High — Prerequisite for CR-2026-001 Phase 1a completion |
| **Status** | Pending — Parts in Transit |
| **Requested By** | [REDACTED], IT Director, ITCRuD |
| **Reviewed By** | Robert Lee, COO |
| **Approved By** | Mary Johnson, CTO |
| **Secondary Approval** | ![Approved by the Computer](../../../../images/seals/approved-by-computer.svg) |
| **Scheduled Date** | TBD — dependent on parts arrival |
| **Completion Date** | Pending |
| **Post-Implementation Status** | Pending |

---

## Change Description

Physical replacement of the existing processors in pve5 (Dell PowerEdge R720xd) with two Intel Xeon E5-2695 v2 processors. The E5-2695 v2 provides 12 cores / 24 threads per socket (48 threads total across both sockets), a significant improvement over the current processors. This change completes the pve5 hardware build and enables the IOMMU configuration and TrueNAS VM creation steps that follow in Phase 1a/1b.

The current processors are functional. This change is not emergency remediation. It is the planned completion of a hardware specification that was partially assembled at acquisition.

**Target hardware:**
- 2× Intel Xeon E5-2695 v2 — 12 cores / 24 threads / 30MB cache / 2.4GHz base
- Specifications: https://www.intel.com/content/www/us/en/products/sku/75281/intel-xeon-processor-e52695-v2-30m-cache-2-40-ghz/specifications.html

---

## Reason for Change

The E5-2695 v2 processors were specified in the infrastructure design (IT-SystemDesign-Internal-InfrastructureRefresh2026.md) as the target CPU for pve5. The current processors, while functional, do not meet the target specification. The additional core count and thread count affect:

1. TrueNAS VM vCPU allocation headroom — 8 vCPUs allocated to TrueNAS plus remaining cores for host and other VMs
2. NUMA topology — the dual E5-2695 v2 configuration establishes the NUMA node boundaries used for VM pinning (see NUMA note below)
3. IOMMU groupings — groupings may differ between CPU generations; Phase 1a IOMMU verification must occur after CPU swap, not before

The swap must precede IOMMU verification. IOMMU verification must precede TrueNAS VM creation. The dependency chain is documented in the Phase 1a task list.

---

## Pre-Installation Requirements

These must be completed before proceeding with the CPU swap:

- [ ] **Confirm BIOS compatibility** — verify R720xd BIOS version supports E5-2695 v2 (Ivy Bridge-EP); update BIOS if required before physical installation
- [ ] Power down pve5 completely (not suspend)
- [ ] Ground properly before handling processors — ESD precautions mandatory
- [ ] Locate and review Dell PowerEdge R720xd Owner's Manual CPU installation procedure: https://www.dell.com/support/manuals/en-us/poweredge-r720/720720xdom-v3
- [ ] Confirm thermal paste availability for heatsink reseating

---

## Scope

**Systems affected:**
- pve5 (Dell R720xd) — CPU replacement only
- Proxmox VE 9 on pve5 — will recognize new CPU topology on next boot; no reinstall required

**Services affected:**
- pve5 is not yet in production service — no active workloads affected
- Brief downtime for pve5 during physical swap — not operationally significant at this stage

**Systems not affected:**
- pve1, pve2, pve3, existing cluster — unaffected
- H710, drives, RAM, networking — unaffected

---

## NUMA Topology Note

The R720xd is a dual-socket system. Each E5-2695 v2 processor is attached to its own memory controller and has direct access to its local RAM (NUMA node 0 and NUMA node 1). Accessing RAM across NUMA boundaries carries a measurable performance penalty.

Following CPU installation, the following must be identified before TrueNAS VM creation:

1. Which NUMA node owns the H710 storage controller PCIe slot
2. Which NUMA node owns the 10GbE NIC PCIe slot
3. TrueNAS VM vCPUs and RAM allocation must be pinned to the same NUMA node as both PCIe devices

This is documented in ADR-005. It is also documented here. It will be documented in the runbook. If it is still missed, ITCRuD will have documented it more times than any other single configuration requirement in the project history, which is saying something.

---

## Post-Installation Verification

The following checks must be completed after CPU installation and before proceeding to Phase 1a IOMMU configuration:

```bash
# Verify Proxmox recognizes correct CPU topology
pvesh get /nodes/{nodename}/status

# Verify thread count (expect 48 threads)
lscpu | grep -E "CPU\(s\)|Thread|Socket|Core"

# Identify NUMA topology
numactl --hardware

# Identify which NUMA node owns H710 and 10GbE
lspci -vvv | grep -A5 "RAID\|Ethernet"
find /sys/kernel/iommu_groups/ -type l | sort -V
```

Expected results:
- 48 logical CPUs recognized
- 2 NUMA nodes, each with 24 CPUs
- H710 and 10GbE card NUMA node assignments documented before VM creation

---

## Impact Assessment

| Impact Area | Assessment |
|---|---|
| Service availability | No impact — pve5 not in production service |
| IOMMU groupings | May differ from current CPU; must re-verify after swap — do not proceed to VM creation based on pre-swap grouping data |
| BIOS compatibility | Risk if BIOS version does not support E5-2695 v2 — verify before installation |
| Thermal | Heatsink reseating required; standard procedure |
| Rollback | Original processors retained until swap confirmed successful |

---

## Rollback Plan

| Scenario | Rollback Procedure |
|---|---|
| BIOS incompatibility identified pre-swap | Update BIOS before proceeding; if update unavailable, retain original CPUs and document constraint |
| Installation fails / POST failure | Reinstall original processors; verify system boots; document failure |
| Post-swap Proxmox instability | Reinstall original processors; investigate before re-attempting |

**Original processor retention:** Original CPUs must be retained until post-swap verification is complete and TrueNAS VM is operational. Do not dispose of original processors at change time.

**Rollback authority:** [REDACTED], IT Director, ITCRuD

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

![NARC Internal Use Only](../../../../images/seals/narc-internal-use-only-seal.svg)

---

**Related Documents:**
- CR-2026-001 — NAS Platform Replacement and Infrastructure Expansion
- CR-2026-002 — PERC H710 D1 Mini IT Mode Flash (completed)
- ADR-005 — TrueNAS VM Configuration (project Gitea repository)
- IT-SystemDesign-Internal-InfrastructureRefresh2026.md
- PR-2026-001 — Infrastructure Refresh 2026-001 Primary Hardware Acquisition (line item 2)
- IT-HardwareAcceptance-Internal-pve5-2026.md (HAR-2026-001 — OI-HAR-006)
- Dell PowerEdge R720xd Owner's Manual: https://www.dell.com/support/manuals/en-us/poweredge-r720/720720xdom-v3
- Intel Xeon E5-2695 v2 Specifications: https://www.intel.com/content/www/us/en/products/sku/75281/intel-xeon-processor-e52695-v2-30m-cache-2-40-ghz/specifications.html
