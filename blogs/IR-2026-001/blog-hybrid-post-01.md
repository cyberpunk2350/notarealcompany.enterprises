# ![NARC Banner](../images/narc-banner.svg)

---

**NOT A REAL COMPANY (NARC)**
**INTERNAL MEMORANDUM**

| | |
|---|---|
| **TO:** | All Interested Parties, Red Clearance and Above |
| **FROM:** | IT Operations — Computational Resources & Uptime Division (ITCRuD) |
| **IT Director:** | [REDACTED] |
| **CC:** | Robert Lee, COO; Mary Johnson, CTO |
| **RE:** | Infrastructure Refresh 2026-001 — Phase 1 Status and Platform Selection Summary |
| **DATE:** | 2026-03-21 |
| **CLASSIFICATION:** | ![Internal](../images/seals/internal.svg) INTERNAL — Red Clearance and Above |
| **APPROVED BY:** | ![Approved by the Computer](../images/seals/approved-by-computer.svg) |

**Summary:** The IT department's primary storage infrastructure has been designated a Legacy Optimization Opportunity and is being replaced. A Dell PowerEdge R720xd has been procured, Proxmox VE 9 is installed, and the storage controller has been configured. Platform selection has been completed: TrueNAS SCALE running as a Proxmox VM with PCIe passthrough. An AI planning consultant was engaged. It performed adequately. This memo summarizes the decisions made; the full technical narrative follows below for those who wish to understand why.

*Citizens who do not wish to understand why are reminded that understanding is encouraged but not mandatory. The Computer, however, notes your lack of curiosity.*

---

## The Part Where I Explain What We're Doing and Why

So, we're replacing the NAS. Overdue, honestly.

The existing setup — five 12TB drives in a RAID5 array on OpenMediaVault, running as a VM on an aging Proxmox host we call pve1 — has been holding up fine in the way that old infrastructure holds up fine: by never doing anything dramatically wrong, just gradually accumulating the kind of low-level warning signs that you keep meaning to address. Drives making new sounds. Health metrics that are "fine, probably." A backup strategy that, on close examination, turned out to be more of a backup philosophy.

The hardware is failing. Not dead, but clearly in the "make a plan before it becomes an emergency" zone. When you also don't have a proper backup and recovery posture, that zone gets uncomfortable pretty quickly.

The new platform is a **[Dell PowerEdge R720xd](https://www.dell.com/support/manuals/en-us/poweredge-r720/720720xdom-v3)** — a 2U rack server from the Ivy Bridge-EP era that remains genuinely capable hardware for this kind of work. It's secondhand, which keeps the cost down and means someone else already burned in the early-life failures. The R720xd's 12-bay configuration gives me room for two separate storage pools without running out of bays, which was a deliberate choice I'll explain when I get to storage design.

Here's what went into it:

| Component | What I Got | Notes |
|---|---|---|
| CPU | 2× [Intel Xeon E5-2695 v2](https://www.intel.com/content/www/us/en/products/sku/75281/intel-xeon-processor-e52695-v2-30m-cache-2-40-ghz/specifications.html) | 12 cores / 24 threads each — 48 total. Pending install; original CPUs functional in interim. |
| RAM | 256GB DDR3 non-ECC | See note below |
| Storage controller | Dell PERC H710 D1 Mini | Flashed to IT mode — see Post 2 |
| Primary data drives | 6× 26TB SATA (recertified) | Front bays 1–6 |
| Future drives | 5× 12TB from pve1 | Front bays 7–11 when pve1 is decommissioned |
| Boot drives | 2× 2TB SATA SSD | Rear bays — dedicated OS drives |
| Networking | Dual 10GbE + 4× 1GbE onboard | See Post 2 for allocation |
| Remote management | iDRAC (dedicated port) | Isolated per Alex Firewall's standing directive |

**On the RAM:** The R720xd was running older DDR3 ECC RAM, and the new non-ECC sticks I sourced can't be mixed with it — they're electrically incompatible in the same system. Rather than track down a compatible ECC set, I made the call to proceed with 256GB non-ECC. The risk is documented and accepted for this workload (primarily media storage — rebuildable if something goes wrong). Alex Firewall has opinions about this. They're on file.

---

## Why TrueNAS SCALE, and Why Inside Proxmox

I went through the usual suspects before settling on a platform:

**OpenMediaVault** was the path of least resistance — I already run it on pve1. Familiar, lightweight, works fine. Also genuinely under-equipped for a machine with 48 threads and 256GB of RAM. OMV would use maybe 10% of what this hardware can do. Eliminated.

**Unraid** is good software. It's also proprietary with per-drive licensing, which conflicts with NARC's FOSS policy. Max Pitchman briefly suggested the licensing structure was "relatable from a revenue standpoint." His input was not adopted. Eliminated.

**TrueNAS SCALE** is what I wanted from the start, honestly. Native ZFS, proper data integrity tooling, open source, and an architecture that actually justifies the hardware. The question wasn't whether to use TrueNAS — it was *how*.

That "how" turned out to be the more interesting decision. NARC already runs a Proxmox cluster. The R720xd has more than enough compute to run a NAS and additional VMs simultaneously. Running TrueNAS bare-metal would mean giving up cluster integration and leaving most of the CPU and RAM on the table permanently.

So: **[TrueNAS SCALE](https://www.truenas.com/docs/scale/24.10/) runs as a Proxmox VM with PCIe passthrough of the storage controller.** The H710, flashed to IT mode, passes directly through to the TrueNAS VM. ZFS sees the drives natively. The Proxmox host keeps its cluster membership and remaining compute for other workloads. The tradeoff is complexity — there's more to configure and more to go wrong — but the capability gain is real.

The full decision rationale is in [ADR-001](../../../docs/decisions/ADR-001-nas-os-selection.md) in the project repository, if you want the long version including the alternatives considered and rejected.

---

## The AI Planning Thing

I used Claude (Anthropic) as a planning partner for the design phase of this project. I want to be straightforward about what that means.

I didn't use it to make decisions. I used it to help structure the decision-making process, generate the Architecture Decision Records and project documentation, and as a thinking partner for working through tradeoffs. When I was about to settle on RAIDZ2 without fully thinking through the resilver window on 26TB recertified drives, the pushback was correct and changed how I approached the second storage pool. That kind of "did you think about X" is genuinely useful.

What it's not: it doesn't know the physical state of my lab. It can't verify hardware claims. Everything it produces gets independently validated. The judgment calls — what tradeoffs are acceptable for this specific setup — are mine.

The project documentation lives in a [Gitea repository](https://gitea.notarealcompany.enterprises) — architecture notes, a phased project plan, and Architecture Decision Records for every significant design choice. Post 3 in this series covers the documentation approach in more detail.

Dr. Sylvia Sparks (R&D) asked if the AI could be seconded to her lab for some experiments. This request was forwarded to the appropriate channel.

---

## Where Things Stand

| Milestone | Status |
|---|---|
| Hardware acquired | ✓ |
| PERC H710 D1 Mini — IT mode flash | ✓ |
| [Proxmox VE 9](https://www.proxmox.com/en/proxmox-virtual-environment/overview) installed | ✓ |
| Project documentation repo — Gitea | ✓ |
| E5-2695 v2 CPU installation | ⏳ Parts in transit |
| TrueNAS SCALE VM | ⏳ Phase 1b |
| Data migration from pve1 | ⏳ Phase 1c |
| pve1 decommission | ⏳ Phase 2 |

pve1 is still running. Jellyfin is still serving media. pve1 knows what's coming. Its feelings are not tracked in current monitoring systems, which is either a gap in our observability stack or a mercy, depending on how you look at it.

---

*Post 2 covers the storage and network design decisions — ZFS pool layout, the H710 IT mode flash in detail, and NIC allocation. It has more commands and fewer feelings.*

---

**References**
- [Dell PowerEdge R720/R720xd Owner's Manual](https://www.dell.com/support/manuals/en-us/poweredge-r720/720720xdom-v3) — Dell Support
- [Dell PowerEdge R720/R720xd Owner's Manual (PDF)](https://dl.dell.com/topicspdf/poweredge-r720_owners-manual_en-us.pdf) — Dell
- [Intel Xeon E5-2695 v2 Specifications](https://www.intel.com/content/www/us/en/products/sku/75281/intel-xeon-processor-e52695-v2-30m-cache-2-40-ghz/specifications.html) — Intel ARK
- [TrueNAS SCALE 24.10 (Electric Eel) Documentation](https://www.truenas.com/docs/scale/24.10/) — iXsystems
- [Proxmox VE Overview](https://www.proxmox.com/en/proxmox-virtual-environment/overview) — Proxmox

---

*IT Operations — Computational Resources & Uptime Division (ITCRuD)*
*Not A Real Company (NARC) — Making Fake Work Feel Real Since 2025*
*© 2025 NARC — All rights pretend.*