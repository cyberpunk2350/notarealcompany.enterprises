# NARC Infrastructure Refresh — Post 1: The Problem and the Plan

---

> **EDITOR NOTES — POST 1**
>
> **Purpose of this post:** Establish context, introduce the hardware, and walk through the OS/architecture decision. This is the "why we're doing this and what we chose" post. It sets up the entire series.
>
> **Audience assumption:** Readers know what a NAS is, have heard of Proxmox and TrueNAS, and are comfortable with concepts like RAID and virtualization. You don't need to explain what a hypervisor is, but a one-line reminder of what each tool does is fine.
>
> **Your voice here:** This post benefits most from your personal narrative. The frustration with aging hardware, the excitement about the R720xd, the "why now" — these are things only you can write authentically. The drafted sections below are placeholders for that voice. Rewrite the opening and the hardware section especially — they should sound like you.
>
> **Tone target:** Conversational but technically credible. Like explaining this to a knowledgeable friend over coffee, not presenting at a conference.
>
> **What to keep, what to cut:** The OS comparison table is dense but earns its place — it's the kind of thing readers will screenshot. The AI planning section is the most unusual angle and worth keeping prominent. If the post feels too long, cut the "What I Already Had" section down to two sentences rather than removing the OS analysis.
>
> **Alternative paths for rewrite:**
> - **Shorter, punchier version:** Open with the R720xd acquisition, skip the backstory, dive straight into the decision matrix. Better if you want the series to be reference-heavy rather than narrative.
> - **More personal version:** Expand the backstory — how long the old NAS has been running, what's actually on it, why it matters. Better if the NARC audience knows you and will enjoy the context.
> - **Lead with the AI angle:** Open the entire series with the AI-assisted planning reveal, then tell the hardware story. Unusual hook that might work well if your audience is technically curious beyond homelab.

---

## Outline

1. The Setup — what I had and why it needed replacing
2. The Hardware — what I acquired and why the R720xd
3. The Decision — OS selection and the architecture pivot
4. How I Planned It — introducing the AI-assisted approach
5. Where Things Stand — current state and what's next

---

## Draft

### The Setup

My home NAS has been running OpenMediaVault on top of Proxmox for a while now — a setup that worked well enough when I built it but has been showing its age. Five 12TB drives in a RAID5 pool, a Jellyfin instance serving media to the household, and an assortment of other services that have accumulated over time. The hardware was already older when I built it, and lately it's been making the kinds of sounds and throwing the kinds of errors that tell you it's not a question of if, but when.

I'd been putting off the refresh longer than I should have. The honest reason is that "good enough" is a powerful sedative — the system kept working, so I kept not replacing it. What finally moved it from "someday" to "now" was a combination of an opportunity on secondhand server hardware and the realization that I was one bad resilver away from losing everything on a pool with no real backup strategy.

That last part is more embarrassing to admit than it should be. I know better. But here we are.

---

### The Hardware

The centerpiece of the refresh is a [Dell PowerEdge R720xd](https://www.dell.com/support/manuals/en-us/poweredge-r720/720720xdom-v3) — a 2U rack server from the Ivy Bridge-EP era that, despite being over a decade old, remains genuinely capable hardware for a homelab NAS. The specific unit I acquired came with a solid foundation to build on, and I've been expanding it for this project:

- **CPU:** Dual [Intel Xeon E5-2695 v2](https://www.intel.com/content/www/us/en/products/sku/75281/intel-xeon-processor-e52695-v2-30m-cache-2-40-ghz/specifications.html) (12 cores / 24 threads each, 48 threads total) — currently awaiting install; original processors are functional in the interim
- **RAM:** 256GB DDR3 non-ECC — more on the non-ECC decision later
- **Storage controllers:** PERC H710 D1 Mini, flashed to IT mode for direct drive passthrough
- **Drives:** 6x 26TB SATA HDDs (recertified) for the new media pool, with the 5x 12TB drives from the old NAS being repurposed for a second pool
- **Networking:** Dual 10GbE + 4x 1GbE onboard, iDRAC for remote management
- **Boot:** Two 2TB SATA SSDs in the rear hot-swap bays

The R720xd's 12-bay configuration gives me room to run both storage pools from the same chassis — 6 bays for the 26TB media pool, 5 for the 12TB sensitive data pool, and one spare. The dual 10GbE is important: one port goes directly to the TrueNAS VM, the other to the Proxmox host. That's a cleaner separation than I've had before.

The recertified drives deserve a mention. They're drives that have been returned, inspected, and resold — typically they've seen real use, and the failure correlation risk is higher than new drives. I went in with eyes open on this. The mitigation is RAIDZ2 rather than RAIDZ1, which gives two-drive fault tolerance, and weekly ZFS scrubs. For a media library of movies and TV shows — content that's rebuildable — that's an acceptable tradeoff. I'd make a different choice for irreplaceable data.

> **[EDITOR NOTE: The RAM situation is worth a sentence or two of your own. The ECC/non-ECC incompatibility was a real decision point — the original ECC RAM couldn't be mixed with the new sticks — and being upfront about the compromise is the kind of honest detail that resonates with readers who've made similar calls. The risk is real but accepted for this workload.]**

---

### The Decision — Choosing an OS and an Architecture

With the hardware sorted, the obvious question is what to run on it. My starting shortlist was the usual suspects for a homelab NAS refresh: OpenMediaVault (what I already run), TrueNAS SCALE, and Unraid.

Unraid was the first to go. It's a good product — flexible drive management, solid VM and Docker support, large community — but it's proprietary and licensed per-drive count. For a FOSS-first setup, that's a non-starter regardless of how good the product is.

That left OMV and TrueNAS, and honestly, OMV was tempting purely on familiarity grounds. I know it. I know where the rough edges are. Migration would be lower-friction. But OMV on hardware with 48 threads and 256GB of RAM is leaving most of that on the table, and the ZFS support — while functional via plugins — isn't first-class in the way that matters for large drives and data integrity at this scale.

TrueNAS SCALE won the NAS OS comparison fairly decisively. Native ZFS, first-class data integrity tooling, and it actually justifies the hardware. But that's where the architecture question gets interesting.

**The pivot:** I'm already running Proxmox across multiple nodes. The R720xd has the resources to run a NAS and other workloads simultaneously. Rather than installing [TrueNAS SCALE](https://www.truenas.com/docs/scale/24.10/) bare-metal and giving up the Proxmox ecosystem, the better answer is to run TrueNAS SCALE as a [Proxmox](https://www.proxmox.com/en/proxmox-virtual-environment/overview) VM — with PCIe passthrough of the storage controller so TrueNAS owns the drives directly and ZFS integrity is fully preserved.

| | OMV | TrueNAS SCALE (bare) | Unraid | TrueNAS in Proxmox VM |
|---|---|---|---|---|
| FOSS | Yes | Yes | No | Yes |
| ZFS quality | Plugin | Native | Cache only | Native |
| Cluster integration | No | No | No | Yes |
| Resource utilization | Poor | Good | Moderate | Best |
| Complexity | Low | Medium | Low | High |

The tradeoff is complexity — two systems to maintain, IOMMU groupings to verify, NUMA topology to account for on a dual-socket system. But the benefits are real: the R720xd joins the existing Proxmox cluster, I get unified management, and nothing goes to waste.

> **[EDITOR NOTE: If you want to go deeper on the TrueNAS-in-Proxmox architecture in a rewrite, Post 2 is the better home for it. Keep this section at decision-level — the implementation details live in the next post.]**

---

### How I Planned It — AI-Assisted Infrastructure Design

This is the part of the project I didn't expect to write about, but it turned out to be significant enough to be honest about.

I used [Claude](https://claude.ai) — Anthropic's AI assistant — as a planning partner throughout the design phase of this project. Not to make decisions for me, but as a thinking partner: working through tradeoffs, surfacing considerations I hadn't thought of, and maintaining a structured record of what was decided and why.

The output of that process is a project documentation repository on Gitea — a full structured record of the project including a phased plan, architecture notes, and a set of Architecture Decision Records (ADRs) for every significant choice made. If you've worked in software engineering you'll recognize the ADR format; applying it to a homelab infrastructure project is a little unusual, but it's proven genuinely useful. When I come back to this project after a break, or when I'm explaining a choice to someone else, the rationale is there.

The AI angle is worth being direct about: Claude is a tool, and like any tool it has limits. It doesn't know my specific hardware state until I tell it. It can hallucinate specifics. The judgment calls — which tradeoffs to accept, which risks to carry — are mine. What it's genuinely good at is holding context across a complex multi-topic conversation and structuring decisions in a way that makes them recoverable later.

I'll write more about the documentation system specifically in Post 3. For now: the planning approach worked better than I expected, and I'd do it again.

---

### Where Things Stand

Proxmox VE 9 is installed and running on the R720xd. The PERC H710 D1 Mini is flashed to IT mode and the drives are presenting correctly. The project documentation repo is live on Gitea.

What's still pending: the new CPUs (parts in transit), the TrueNAS VM creation, and the data migration from the old NAS. The old system is still running — Jellyfin is still serving, nothing has been decommissioned yet.

Post 2 covers the storage and network design decisions in detail — ZFS pool layout, NIC allocation, and what "IT mode" on the PERC actually means and why it matters.

---

**References**
- [Dell PowerEdge R720/R720xd Owner's Manual](https://www.dell.com/support/manuals/en-us/poweredge-r720/720720xdom-v3) — Dell Support
- [Dell PowerEdge R720/R720xd Owner's Manual (PDF)](https://dl.dell.com/topicspdf/poweredge-r720_owners-manual_en-us.pdf) — Dell
- [Intel Xeon E5-2695 v2 Specifications](https://www.intel.com/content/www/us/en/products/sku/75281/intel-xeon-processor-e52695-v2-30m-cache-2-40-ghz/specifications.html) — Intel ARK
- [TrueNAS SCALE 24.10 (Electric Eel) Documentation](https://www.truenas.com/docs/scale/24.10/) — iXsystems
- [Proxmox VE Overview](https://www.proxmox.com/en/proxmox-virtual-environment/overview) — Proxmox
- [Claude](https://claude.ai) — Anthropic

*This post is part of the NARC Infrastructure Refresh 2026-001 series. Project documentation is maintained at [Gitea repo link].*