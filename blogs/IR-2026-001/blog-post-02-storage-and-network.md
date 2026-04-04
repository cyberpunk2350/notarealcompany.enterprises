# NARC Infrastructure Refresh — Post 2: Storage and Network Design

---

> **EDITOR NOTES — POST 2**
>
> **Purpose of this post:** This is the most technically dense post in the series and the one most likely to be useful as a reference. Readers coming from search will land here looking for "RAIDZ2 vs mirrors" or "PERC H710 IT mode" or "Proxmox NIC allocation." Write it to serve both the narrative reader following the series and the search-landing reader who needs specifics.
>
> **Your voice here:** Less personal narrative than Post 1, more "here's what I thought through and why." The decision rationale sections are where your voice matters — the tradeoff between RAIDZ2 space efficiency and mirror resilver speed is a genuinely interesting engineering call and you made it deliberately. Own that.
>
> **What to keep, what to cut:** The PERC IT mode section is important — it's non-obvious and commonly Googled. Keep it. The NIC allocation table is dense but earns its place. If the post feels too long, the "A note on recertified drives" sidebar is the easiest cut — it's partially covered in Post 1.
>
> **Things to verify before publishing:**
> - Confirm backplane type (direct-attach vs SAS expander) once physically verified — this is currently an open question in the project
> - Fill in actual BIOS version and H710 firmware version once captured
> - Update drive installation confirmation if not yet done
>
> **Alternative paths for rewrite:**
> - **Split into two posts:** "Storage Design" and "Network and Controller Setup" — viable if you want shorter posts; split at the PERC IT mode section
> - **More narrative, less reference:** Lead each section with the problem you were solving rather than the solution. "I had 6x26TB drives and needed to decide how to arrange them" is a more engaging opening than "ZFS pool layout decision."
> - **Add a mistakes/lessons section:** If anything goes wrong during the actual build that contradicts a decision made here, document it. "I thought X would work, here's what actually happened" is some of the most valuable homelab writing.

---

## Outline

1. ZFS Pool Layout — the RAIDZ2 vs mirrors decision
2. The Two-Pool Strategy — media vs sensitive data
3. The PERC H710 and IT Mode — what it is and why it matters
4. NIC Allocation — making the most of the network hardware
5. A Few Defaults Worth Mentioning

---

## Draft

### ZFS Pool Layout

With six 26TB drives and ZFS, the first real decision is how to arrange them. ZFS offers several vdev layouts, and the choice is permanent — you can't change the layout of an existing pool without destroying and recreating it. That makes it worth thinking through carefully.

The two realistic options for six drives were:

**RAIDZ2 (6-wide):** All six drives in a single vdev with double-parity. Two drives can fail simultaneously without data loss. Usable capacity is approximately 104TB (four drives' worth). Resilver time on 26TB drives is long — realistically 48–96+ hours under load.

**3x Mirror pairs:** Three pairs of mirrored drives. One drive per pair can fail. Usable capacity is approximately 78TB. Resilver time is dramatically shorter — hours rather than days, because a mirror reconstructs from its partner rather than calculating parity across five drives.

The conventional wisdom in ZFS circles has shifted toward mirrors over RAIDZ for large drives, and the argument is sound: at 26TB, a resilver window measured in days is a genuine exposure period. If a second drive fails during a 72-hour resilver — and recertified drives have elevated failure correlation — the pool is gone.

I chose RAIDZ2, and the reason is specific to this workload: the pool holds media. Movies, TV shows, content that is inconvenient to lose but fully rebuildable. The ~26TB capacity difference between RAIDZ2 and mirrors is meaningful for a media library, and the consequence of losing the pool is measured in time and bandwidth, not irreplaceable data.

If this pool held documents, configs, photos, or anything that couldn't be reconstructed — mirrors, without question.

**The second pool** (5x12TB drives from the old NAS, added in a later phase) gets a different treatment. That pool holds more sensitive data. Mirrors are the plan there, faster resilver, smaller exposure window. The drives are also older and coming off a system that was already flagged as failing, so SMART assessments before pool creation are non-negotiable.

> **[EDITOR NOTE: If you want to add a sidebar here about ZFS resilver vs scrub distinction — resilver rebuilds after drive failure, scrub proactively checks existing data — it's a useful clarification for readers who've heard both terms. Optional; the post works without it.]**

---

### The PERC H710 and IT Mode

The R720xd shipped with a Dell PERC H710 RAID controller. For a traditional RAID setup this is fine hardware, but for ZFS it's a problem.

ZFS is designed to manage storage integrity end-to-end. It checksums data at write time, verifies at read time, and handles its own redundancy. To do this correctly, ZFS needs to see raw drives — individual block devices with direct access to SMART data, sector information, and error reporting. A hardware RAID controller sits between ZFS and the drives and abstracts them into virtual disks. ZFS can't see what's actually happening at the drive level, which undermines the entire integrity model.

The solution is to flash the H710 to "IT mode" — Internal Target mode, sometimes called HBA mode — which turns it from a RAID controller into a simple pass-through HBA. In IT mode, every drive appears as an individual block device. ZFS sees the drives directly. SMART data is accessible. The controller gets out of the way.

The flash procedure for the H710 D1 Mini is well-documented by the homelab community. The guide I used — [fohdeesha.com/docs/perc.html](https://fohdeesha.com/docs/perc.html), with a dedicated page for the H710 D1 specifically at [fohdeesha.com/docs/H710-D1.html](https://fohdeesha.com/docs/H710-D1.html) — is thorough and covers the Dell-specific iDRAC complications that make the generic LSI crossflash guides not directly applicable. It's a one-way operation — not easily reversed — so worth being deliberate about. The result: six 26TB drives and two rear-bay SSDs all presenting cleanly as individual devices in Proxmox.

Two concrete benefits beyond ZFS compatibility worth noting from the fohdeesha guide: the IT firmware switches the OS driver from MegaRAID to the much simpler `mpt3sas` driver — which is what allows SMART data to flow correctly — and it dramatically increases the adapter's queue depth (from 25 in stock Dell firmware to 600 in IT mode on the H710). For a ZFS pool under sustained load, queue depth matters.

One important detail: the rear-bay SATA ports on the R720xd are on the onboard Intel SATA controller, not the H710. The OS drives (two 2TB SSDs) need to stay on the onboard controller. When the H710 gets passed through to the TrueNAS VM, it takes only the front-bay drives with it — the Proxmox OS drive is on a completely separate controller and isn't affected. This separation is intentional and worth verifying before VM creation.

---

### ZFS Configuration Defaults

A few configuration choices that don't warrant their own sections but are worth documenting:

**Compression:** LZ4 on all datasets. LZ4 is essentially free — the CPU overhead is negligible on modern hardware and the I/O reduction is real. There's no good reason not to enable it.

**Scrub schedule:** Weekly on both pools. ZFS scrubs read every block and verify checksums, catching silent corruption before it becomes a problem. For large drives with real data on them, monthly is too infrequent. Weekly is the right cadence.

**Snapshots:** Scheduled snapshots on both pools, retention policy TBD at configuration time. Snapshots are instantaneous, space-efficient (copy-on-write), and protect against accidental deletion and filesystem corruption in a way that RAID does not.

**Deduplication:** Off. ZFS dedup has an enormous RAM requirement (roughly 5GB per TB of data being deduped) and the performance implications on spinning rust are significant. For a media library it provides essentially no benefit — media files don't deduplicate. Possibly worth revisiting for the sensitive data pool, but not the default.

---

### NIC Allocation

The R720xd came with a dual-port 10GbE card and four onboard 1GbE ports, plus the iDRAC dedicated management port. With TrueNAS running as a VM and Proxmox needing its own management network, allocating these ports cleanly matters.

| Port | Assignment | Rationale |
|---|---|---|
| iDRAC | Dedicated iDRAC | Always isolated — never shared |
| 10GbE port 1 | PCIe passthrough → TrueNAS VM | Full line rate on NAS data path; no virtualization overhead |
| 10GbE port 2 | Proxmox host bridge | Host management and VM traffic |
| 1GbE × 2 | Proxmox management bond | Redundant host management |
| 1GbE × 2 | VM bridge | General VM/LXC connectivity |

The key decision here is passing the 10GbE port directly to the TrueNAS VM rather than presenting it as a VirtIO NIC through Proxmox's bridge. PCIe passthrough gives TrueNAS the full physical NIC — driver-level access, full throughput, no hypervisor overhead in the data path. For a NAS that will be serving media at 10GbE speeds, that matters.

The prerequisite is that the dual-port 10GbE card sits in its own IOMMU group, or that IOMMU groupings can be split. If both ports share a group, passing port 1 means Proxmox loses port 2 as well. That's a configuration to verify before committing — IOMMU groupings on Dell's dual-socket platform are generally workable but not guaranteed.

Fallback if passthrough isn't viable: VirtIO NIC on a Proxmox bridge. VirtIO overhead at 10GbE is minimal in practice — it's not the ideal, but it works.

**On jumbo frames:** If the switch supports it, configuring MTU 9000 end-to-end on the 10GbE NAS path is worth doing. Large sequential transfers — exactly the workload a media NAS sees — benefit measurably from larger frames. The requirement is that TrueNAS, the Proxmox bridge (or passthrough NIC), and the switch port all match. One mismatched component and you get packet loss.

---

### The TrueNAS VM Specification

The VM that will run TrueNAS SCALE on pve5:

| Parameter | Value | Notes |
|---|---|---|
| Machine type | q35 | Required for PCIe passthrough |
| BIOS | OVMF (UEFI) | Required for q35 |
| vCPU | 8 (host type) | ZFS is not CPU-bound; 8 is generous |
| RAM | 64GB | ZFS ARC; leaves 190GB+ for other VMs |
| Boot disk | 32GB VirtIO | Separate from data pool — TrueNAS requirement |
| Storage controller | H710 passthrough | Direct drive ownership for ZFS |
| NIC | 10GbE passthrough | Full line rate; VirtIO fallback if needed |

The RAM allocation deserves a note. ZFS uses available RAM for its Adaptive Replacement Cache (ARC) — a read cache that significantly improves performance for frequently accessed data. With 256GB on the host and 64GB allocated to TrueNAS, the ARC has real headroom. The general heuristic of "1GB RAM per 1TB of storage" is conservative and dated, but 64GB for a ~160TB raw pool is a reasonable allocation.

**NUMA pinning** is a non-obvious requirement on a dual-socket system. The R720xd has two CPU sockets, and memory access across NUMA boundaries (accessing RAM attached to the other socket) carries a latency and bandwidth penalty. The TrueNAS VM's vCPUs and RAM allocation need to be pinned to the same NUMA node as the H710 and 10GbE card. Identifying which socket owns which PCIe devices is a pre-configuration step, not something to sort out after the VM is running.

---

*Next: Post 3 covers the project documentation approach — the Gitea repo, ADRs, and the AI-assisted planning system in more detail.*

*This post is part of the NARC Infrastructure Refresh 2026-001 series. Project documentation is maintained at [Gitea repo link].*

---

**References**
- [Dell PowerEdge R720/R720xd Owner's Manual](https://www.dell.com/support/manuals/en-us/poweredge-r720/720720xdom-v3) — Dell Support
- [Dell PowerEdge R720/R720xd Owner's Manual (PDF)](https://dl.dell.com/topicspdf/poweredge-r720_owners-manual_en-us.pdf) — Dell
- [Intel Xeon E5-2695 v2 Specifications](https://www.intel.com/content/www/us/en/products/sku/75281/intel-xeon-processor-e52695-v2-30m-cache-2-40-ghz/specifications.html) — Intel ARK
- [PERC H310/H710/H710P/H810 IT Crossflashing Guide](https://fohdeesha.com/docs/perc.html) — fohdeesha.com
- [H710 D1 Mini Specific Procedure](https://fohdeesha.com/docs/H710-D1.html) — fohdeesha.com
- [TrueNAS SCALE 24.10 (Electric Eel) Documentation](https://www.truenas.com/docs/scale/24.10/) — iXsystems
- [TrueNAS SCALE Download](https://www.truenas.com/download-truenas-scale/) — iXsystems
- [Proxmox VE PCIe Passthrough](https://pve.proxmox.com/wiki/PCI(e)_Passthrough) — Proxmox Wiki