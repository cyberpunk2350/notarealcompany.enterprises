# ![NARC Logo](../../images/narc-banner.svg)
# R&D Plan – AI Media MCP Servers (Internal)

**Document Owner:** Research & Development (R&D)<br>
**Version:** 0.1 – Draft<br>
**Date:** 2026-03-07<br>
**Classification:** TOP SECRET – INTERNAL<br>

---

## Objective

Develop a suite of MCP (Model Context Protocol) servers enabling AI assistants to manage the complete physical media lifecycle on behalf of Authorized Personnel. This includes metadata enrichment, disc ripping, transcoding, and container manipulation. Citizens are reminded that delegating tasks to AI is Efficiency-Compliant behaviour and will be noted positively in their Quarterly Loyalty Assessment, provided the AI does not go rogue.

---

## Scope

- Six MCP servers covering the full media pipeline
- Five shared infrastructure packages to ensure Consistency and prevent Unauthorized Code Duplication (a Class 2 Infraction)
- Integration with three approved metadata providers (TheTVDB, TMDB, OMDb)
- Integration with three approved local media tools (MakeMKV, HandBrakeCLI, MKVToolNix)
- Two additional servers parked pending Resource Allocation Approval: SFTP NAS transfer, Jellyfin media server integration

Out of scope: anything the Computer has not explicitly approved. You know who you are.

---

## Deliverables

- Six functional MCP server packages
- Five shared infrastructure packages
- Full test suite operating entirely from committed fixtures (live API calls during testing are a Waste of Complexity Points)
- Per-server configuration guides (Clearance Green and above)
- Release pipeline via Changesets (Citizens must not publish packages in an unapproved order)

---

## Risks

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| OMDb free tier exhausted (1,000 req/day) | High | Medium | Aggressive caching; Citizens advised to watch fewer films |
| MakeMKV beta license expiry mid-rip | Medium | High | Monitor expiry; purchase license when budget is re-approved |
| AI assistant attempts to access Unauthorized Directory | Low | Treason | Path allow-list enforced at all times; violations logged |
| Metadata providers return conflicting episode numbering | High | Medium | Document divergence; do not attempt to reconcile automatically |
| JobRegistry exceeds 500 entries under batch workload | Low | Medium | Oldest terminal-state jobs evicted; Citizens advised to be patient |
| Jellyfin integration requested before it is built | Certain | Low | Redirect Citizens to the Parking Lot. Do not make eye contact. |

---

## Timeline

| Phase | Deliverable | Target Completion |
|-------|-------------|-------------------|
| Phase A | Shared infrastructure packages (5) | Month 1 |
| Phase B | TheTVDB server | Month 2 |
| Phase C | TMDB server | Month 2 |
| Phase D | OMDb server | Month 2 |
| Phase E | MakeMKV server | Month 3 |
| Phase F | HandBrakeCLI server | Month 3–4 |
| Phase G | MKVToolNix server | Month 4 |
| Phase H | Full pipeline verification (G7 milestone) | Month 4 |
| Future | SFTP + Jellyfin (pending approval) | When the Computer decides |

Citizens are reminded that timelines are aspirational. Deviation from the timeline is not a Treason Event, but it will be noted.

---

## Approvals

| Name | Title | Signature |
|------|-------|-----------|
| | R&D Director | |
| | CTO | |
| | Mandatory Happiness Officer | |
