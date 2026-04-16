# NARC Lore Primer — Appendix B: Parking Lot

> **Cross-references:** Section 11 (Part 2 — project-specific), Section 12 (Part 3 — artifact inventory)

---

## Parking Lot

Items collected across all sessions and branches. Separated into required-but-deferred, BR-002 actions, and nice-to-have.

### Required — Deferred

Items explicitly scoped and parked pending external conditions.

| Item | Source | Notes |
|------|--------|-------|
| Blog post — Post 4 "The Build" (Hybrid + v2 styles) | Session 09 | Deferred until Phase 1 physically complete. Most valuable post in the series. |
| Phase 1c Data Migration Runbook | Session 09 | Pre-migration integrity check, rsync vs ZFS send/receive decision, transfer validation, Jellyfin LXC cutover. Needed before Phase 1c begins. |
| Post-Migration Report (Phase 1c closure) | Session 09 | Formal closure doc for Phase 1c. Companion to Post 4 and the runbook. |
| PR-2026-002 Supplemental Purchase Request | Session 09 | Template exists. Candidates: Datto S4P2 M.2 NVMe, drive caddies, ECC RAM, pve4/pve6 hardware. |
| NARC website blog section build | Session 09 / BR-004 | 12 posts exist. Interim path: `blogs/` from root. Final path and section design owned by BR-004. |
| Stale image reference fix — R&D-SystemDesign-Internal-MediaMCPServers.md | Session 08 | §3: `architecture-placeholder.svg` → `architecture-mediamcpservers.svg`. BR-002 action. |
| Lore FAQ — author-facing | BR-003 parking lot | What is NARC, what are Happy Packets, etc. Author-facing reference. Priority: next branch after BR-003v2 closeout. |
| In-universe FAQ — site-renderable | BR-003 parking lot | Derived from Lore FAQ; NARC voice. Blocked by: Lore FAQ first. |
| ARIA — "what constitutes a meeting" development | BR-003v2 Q-21 | Human-authored lore beat. Includes no-shutdown-path thread (D-04). Do not generate. |
| lore-build cleanup — original lore bio files | BR-003v2 | Files at `narc-lore-build/branchs/BR-003 - Staff Dossiers/Lore Bios/` superseded by `_meta/lore-bible/character-bios/`. HITL archiving/removal. |
| Dossier file rename scheme (CF-001) | BR-003 | Naming convention conflict; isolated in `assets/docs/hr/staff/`; human decision pending. |

### BR-002 (Site Reorg) Actions

| Item | Issue | Details |
|------|-------|---------|
| Rename `IT-Operations-*` project cards → `IT-*` | ISS-012 | VPNMesh, MockSaaS, CorporateDNS, FakeCorporateSaaS, CarrierPigeonMessaging. Update `assets/projects/index.json` for each. |
| Rename `Corporate-Governance-Internal-DocumentationStandards.md` | ISS-011 | → `Corp-Standard-Internal-DocumentationStandards.md`. Update `assets/index.json`. |
| Rename `Corp-Template-LetterheadOfficial-Memo.md` | ISS-026 | → `Corp-Templates-LetterheadOfficial-Memo.md`. Update `assets/index.json`. |
| Replace `confidential.svg` with `confidential2.svg` | ISS-020 | All document references. |
| Remove `narc-seal.svg` from docs | ISS-019 | Retiring; no future use planned. |
| Remove `operations.svg` from active use | ISS-021 | Old model; no character assigned. |
| Add Status/Clearance fields to existing project cards | ISS-016 | All current site project cards. |
| Correct rogue seal paths in session 05b docs | ISS-015 | `../branding/seals/` and `branding/images/` → `../images/seals/`. Reversible pending scope. |
| Fix stale image reference — R&D-SystemDesign-Internal-MediaMCPServers.md | Session 08 | §3: `architecture-placeholder.svg` → `architecture-mediamcpservers.svg`. |
| Fix nested code fence in §5.4 System Design Document template | CR-05 | Formatting artifact from source document. |
| Update base memo format `narc-seal.svg` reference | ISS-019 | `Corp-Templates-LetterheadOfficial-MemoNew.md` base format references retiring seal. Update to `narc-internal-use-only-seal.svg`. |

### Nice to Have — Parked

Ideas and future deliverables set aside for later branches or sessions.

| Item | Source(s) | Notes |
|------|-----------|-------|
| Expand supporting cast | BR-003 | NARC Historian, Office Cat, low-level staff. Future branch after roster bios complete. |
| Qualifier catalog expansion | BR-003 | Change requests, purchase requests, memos, runbooks, HR docs. |
| Clearance level hierarchy document | BR-003 | Joint HR + Internal Security; full spectrum + rules. |
| Site-wide lore audit | BR-003 | Pre-canonisation inconsistencies; IR-2026-001 docs; title drift. |
| Employee photos | BR-003 | New/replacement portrait assets. Human. |
| Security files | BR-003 | Internal Security equivalent of dossiers. |
| Park/Watchful relationship brief | BR-003 | ChatGPT candidate; both deal with institutional control through different mechanisms. |
| Sparks/Pitchman collaborative artifact | BR-003 | First specific named joint output. |
| Internal Security Bureaucrat assignment | BR-003 | Vacancy stub in place; awaiting character assignment. |
| Condensed primer / quick-reference for artifact building | BR-001 | Full primer is lore bible; condensed version needed for cold-session artifact work. Scope TBD. |
| NARC Lexicon | BR-001 / ISS-023 | New document. Starting entries: Complexity Points, Approved Language Registry, Class 2 Infraction, Form 27-C. Add further terms as they emerge. |
| NARC founding page | BR-001 | 2025 canonical; narrative and framing TBD. Lore-significant; not urgent. |
| `[REDACTED]` Founder — full lore profile | BR-001 | They/them. Ghost story mythology. Office rumors, founding narrative, document presence, org relationship. Distinct from ITCRuD Director `[REDACTED]`. |
| Division registry design | BR-001 | Pun-forward naming convention; growing meta-joke; website expression; retirement mechanism. |
| ARIA project card | BR-001 | New project card to be created for the site. |
| Logo design briefs (logo1.svg, logo4.svg) | ISS-019 | Both flagged for possible future use; needs design brief before deployment. |
| Org chart SVG poster | Sessions 02, 05a, 05b | Shows divisions, roles, reporting lines. Poster style. No design spec yet. |
| Propaganda-style corporate poster set | Sessions 02, 05b | Retro-futuristic / Paranoia aesthetic. Morale-themed. No copy or themes defined. |
| Terminal login banner / MOTD | Sessions 04, 05b | ASCII/ANSI for NARC servers. Corporate motto, branding, bureaucratic humor. |
| NARC infraction classification system | Session 08 | "Class 2 Infraction" implies a numbered system. Short lore doc would make future documents consistent. |
| NARC form registry | Session 08 | "Form 27-C" was a throwaway. Canonical index of NARC forms would add depth. |
| Complexity Points as in-universe metric | Session 08 | Could be formalized as a performance metric. See NARC Lexicon. |
| Approved Language Registry | Session 08 | Languages added/removed by The Computer. Appeals processes. Comedy potential. See NARC Lexicon. |
| Per-server NARC project cards for mcp-media-stack | Session 08 | Currently one card covers the suite. Individual cards per server is an option. |
| NARC-Brew 3000 security assessment | Session 09 | Alex Firewall elevated to priority in MIN-2026-001. |
| Meeting minutes for future IR-2026-001 phases | Session 09 | Format established. NARC-Brew 3000 should attend all future meetings. |
| Max Pitchman in IT meetings as recurring structural joke | Session 09 | Could recur in future meeting minutes. |
| Consultant performance review table | Session 09 | Suggested in Post 3 — rate the AI on corporate metrics. Parked for user to personalize. |
| MkDocs full site build with NARC theming | Session 05b | Config doc created; actual themed site not built. |
| Corp-Policy-Internal-CorporateBureaucracyManual.md | Session 05b | High lore value. Would define required forms for requesting forms, committee approval workflows. |
| PM-Register-Internal-IssueLog.md | Session 05b | Listed in repo structure; never created. |
| PM-Register-Internal-DecisionLog.md | Session 05b | Same. |
| PM-Tracker-Internal-ActionItemTracker.md | Session 05b | Same. |
| Rotating banners across infrastructure | Session 04 | Per-host personality system; device-specific tone. |
| Full employee persona / fake directory | Sessions 02, 05a | Fictional employee roster beyond the leadership team. |
| Additional PMO docs | Sessions 05a, 05b | Governance / compliance / infrastructure sub-trees. |
| Internal ticketing system simulation | Session 02 | SIEM/log simulation tied to Project X. |
