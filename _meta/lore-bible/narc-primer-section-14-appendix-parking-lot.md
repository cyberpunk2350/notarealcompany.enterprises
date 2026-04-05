# NARC Lore Primer — Appendix B: Parking Lot

> **Cross-references:** Section 11 (Part 2 — project-specific), Section 12 (Part 3 — artifact inventory)

---

## Parking Lot

Items collected across all sessions and the BR-001 review. Separated into required-but-deferred, BR-002 actions, and nice-to-have.

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
| Condensed primer / quick-reference for artifact building | BR-001 | Full primer is lore bible; condensed version needed for cold-session artifact work. Scope TBD. |
| NARC Lexicon | BR-001 / ISS-023 | New document. Starting entries: Complexity Points, Approved Language Registry, Class 2 Infraction, Form 27-C — definitions TBD. Add further terms as they emerge. |
| NARC founding page | BR-001 | 2025 canonical; narrative and framing TBD. Lore-significant; not urgent. |
| `[REDACTED]` Founder — full lore profile | BR-001 | They/them. Ghost story mythology. Office rumors, founding narrative, document presence, org relationship. For BR-003. Distinct from ITCRuD Director `[REDACTED]`. |
| Division registry design | BR-001 | Pun-forward naming convention; growing meta-joke; website expression; retirement mechanism. |
| ARIA — lore bible bio | BR-001 | Capabilities, version history (v2.1 current; v1.x undefined), relationship to NARC-Brew 3000, appendix tone vs official record. |
| NARC-Brew 3000 — lore bible bio | BR-001 | Fleet nature; advisory format; CoffeeBot AI project card origin; Alex Firewall security review pending; ambient/ignored status. |
| ARIA project card | BR-001 | New project card to be created for the site. |
| Logo design briefs (logo1.svg, logo4.svg) | ISS-019 | Both flagged for possible future use; need design brief before deployment. |
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
| ARIA character development / formal org entry | Session 09 | Established character; no formal org structure entry yet. Relationship with NARC-Brew 3000 deliberately ambiguous. |
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