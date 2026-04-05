# NARC Lore Primer — Section 12: Part 3 — Artifact Inventory

> **Cross-references:** Section 07 (seal and image assets — paths), Section 09 (site index files — which files are currently indexed), Section 11 (Part 2 — project-specific content lists)

---

# PART 3 — ARTIFACT INVENTORY

Every artifact referenced anywhere across all sessions, mapped to expected repository path.

**Status definitions:**

- **Present** — file confirmed in site source files
- **Local only** — exists but not yet committed to Gitea or live site
- **Retiring / Retired** — active removal in progress or complete
- **Rename pending** — present but requires renaming in BR-002
- **Uncertain** — mentioned in session content; provenance unclear; needs human verification
- **Parked** — not yet created; planned for future work

---

## Site Pages

| Artifact | Expected Path | Status |
|----------|--------------|--------|
| Homepage | `index.html` | Present[^1] |
| About | `about.html` | Present[^1] |
| Departments | `departments.html` | Present[^1] |
| Leadership | `leadership.html` | Present[^1] |
| Projects | `projects.html` | Present[^1] |
| Internal Documents | `documents.html` | Present[^1] |
| Contact | `contact.html` | Present[^1] |

## CSS / JS

| Artifact | Expected Path | Status | Notes |
|----------|--------------|--------|-------|
| Global stylesheet | `css/style.css` | Present[^1] | |
| Documents CSS | `css/documents.css` | Present[^1] | |
| Theme toggle | `js/theme.js` | Present[^1] | |
| Documents loader | `js/documents.js` | Present[^1] | |
| Projects loader | `js/projects.js` | Present[^1] | |
| Auto-documents (alt) | `js/auto-documents.js` | Present[^1] | Secondary loader; relationship to documents.js unclear |
| Favicon | `assets/favicon.ico` | Present[^1] | |

## Logo and Brand Images

| Artifact | Expected Path | Status | Notes |
|----------|--------------|--------|-------|
| Primary logo | `images/narc-logo.svg` | Present — Active[^2] | Basic/small logo; use on site and in docs |
| Banner | `images/narc-banner.svg` | Present — Active[^2] | Formal doc headers; pair with narc-logo.svg |
| Corporate seal | `images/narc-seal.svg` | Present — Retiring | Experimental; being removed from docs. BR-002: remove all references |
| Logo variant 1 | `images/logo1.svg` | Present — Inactive | Possible future use; needs design brief |
| Logo variant 2 | `images/logo2.svg` | Present — Repo only | Repo use only; possible future use |
| Logo variant 3 | `images/logo3.svg` | Present — Experimental | No plans for use |
| Logo variant 4 | `images/logo4.svg` | Present — Inactive | Possible future use; needs design brief |
| Old logo (archived) | `images/narc-logo-old.svg` | Present — Superseded | No plans for use |
| Architecture diagram — Media MCP | `images/docimages/architecture-mediamcpservers.svg` | Present — Active[^2] | Green-on-black terminal aesthetic; NARC diagram standard |

## Officer Portraits

| Artifact | Expected Path | Status | Notes |
|----------|--------------|--------|-------|
| CEO portrait | `images/officers/ceo.svg` | Present — Active[^1] | Jane Doe |
| CFO portrait | `images/officers/cfo.svg` | Present — Active[^1] | John Smith |
| CTO portrait | `images/officers/cto.svg` | Present — Active[^1] | Mary Johnson |
| COO portrait | `images/officers/coo.svg` | Present — Active[^1] | Robert Lee |
| HR portrait | `images/officers/hr.svg` | Present — Active[^1] | Linda Park |
| Marketing portrait | `images/officers/marketing.svg` | Present — Active[^1] | Max Pitchman |
| R&D portrait | `images/officers/rnd.svg` | Present — Active[^1] | Dr. Sylvia Sparks |
| CISO portrait | `images/officers/ciso.svg` | Present — Active[^1] | Alex Firewall |
| Happiness portrait | `images/officers/happiness.svg` | Present — Active[^1] | Chuck Cheerful |
| Security portrait | `images/officers/security.svg` | Present — Active[^1] | Victor Watchful |
| Operations portrait | `images/officers/operations.svg` | Present — Retiring[^2] | Old model; no current character. BR-002: remove from active use |

## Seal Images

| Artifact | Expected Path | Status | Notes |
|----------|--------------|--------|-------|
| Approved by Computer | `images/seals/approved-by-computer.svg` | Present — Active[^1] | |
| Internal Use Only (full) | `images/seals/narc-internal-use-only-seal.svg` | Present — Active[^1] | |
| Internal (short) | `images/seals/internal.svg` | Present — Active[^1] | |
| Confidential (canonical) | `images/seals/confidential2.svg` | Present — Active[^2] | Canonical confidential seal |
| Confidential (retired) | `images/seals/confidential.svg` | Present — Retiring[^2] | Superseded by confidential2.svg. BR-002: replace all references |
| Top Secret | `images/seals/top-secret.svg` | Present — Active[^1] | |
| Public | `images/seals/public.svg` | Present — Active[^1] | |
| Do Not Distribute | `images/seals/do-not-distribute.svg` | Present — Active[^1] | |
| Authorized Use Only | `images/seals/authorized-use-only.svg` | Present — Active[^1] | |
| Property Of | `images/seals/property-of.svg` | Present — Active[^1] | |

## Index Files

| Artifact | Expected Path | Status |
|----------|--------------|--------|
| Assets index (forms + docs) | `assets/index.json` | Present[^1] |
| Projects index | `assets/projects/index.json` | Present[^1] |

## Documents (assets/docs/)

| Artifact | Expected Path | Status | Notes |
|----------|--------------|--------|-------|
| Finance Annual Report | `assets/docs/Finance-Report-External-AnnualReport2023.md` | Present[^1] | |
| HR Employee Handbook | `assets/docs/HR-Policy-Internal-EmployeeHandbook.md` | Present[^1] | |
| IT VPN Setup Guide | `assets/docs/IT-Procedure-Internal-VPNSetupGuide.md` | Present[^1] | |
| Legal Data Protection | `assets/docs/Legal-Policy-Internal-DataProtection.md` | Present[^1] | |
| Marketing Social Media Strategy | `assets/docs/Marketing-Plan-External-SocialMediaStrategy.md` | Present[^1] | |
| Ops Quarterly Summary | `assets/docs/Ops-Report-External-QuarterlySummary.md` | Present[^1] | |
| Ops Cover Page | `assets/docs/Ops-Report-Internal-CoverPage.md` | Present[^1] | |
| Security Password Rotation | `assets/docs/Security-Policy-Internal-PasswordRotation.md` | Present[^1] | |
| R&D Plan — Project X | `assets/docs/R&D-Plan-Internal-SkunkworksProjectX.md` | Present[^1] | |
| R&D Plan — Media MCP | `assets/docs/R&D-Plan-Internal-MediaMCPServers.md` | Present[^1] | |
| R&D System Design — Media MCP | `assets/docs/R&D-SystemDesign-Internal-MediaMCPServers.md` | Present[^1] | Stale image reference in §3: `architecture-placeholder.svg` → `architecture-mediamcpservers.svg`. BR-002 fix. |

## Project Cards (assets/projects/)

| Artifact | Expected Path | Status | Notes |
|----------|--------------|--------|-------|
| VPN Mesh | `assets/projects/IT-Operations-Internal-VPNMesh.md` | Present — Rename pending[^3] | BR-002: → `IT-Internal-VPNMesh.md` |
| CoffeeBot AI | `assets/projects/R&D-Prototype-External-AI_CoffeeBot.md` | Present[^1] | Canonical origin of NARC-Brew 3000 fleet |
| Pen Test Sim | `assets/projects/Cybersecurity-Internal-PenTestSim.md` | Present[^1] | Project card only — no corresponding `assets/docs/` file ever existed |
| Hype Machine | `assets/projects/Marketing-Prototype-External-HypeMachine.md` | Present[^1] | |
| Smart Desk | `assets/projects/R&D-Prototype-Internal-SmartDesk.md` | Present[^1] | |
| Mock SaaS (External) | `assets/projects/IT-Operations-External-MockSaaS.md` | Present — Rename pending[^3] | BR-002: → `IT-External-MockSaaS.md` |
| Corporate DNS | `assets/projects/IT-Operations-Internal-CorporateDNS.md` | Present — Rename pending[^3] | BR-002: → `IT-Internal-CorporateDNS.md` |
| Fake Corporate SaaS | `assets/projects/IT-Operations-Internal-FakeCorporateSaaS.md` | Present — Rename pending[^3] | BR-002: → `IT-Internal-FakeCorporateSaaS.md` |
| Alpha Complex Memos | `assets/projects/R&D-Prototype-Internal-AlphaComplexMemos.md` | Present[^1] | |
| Carrier Pigeon Messaging | `assets/projects/IT-Operations-Prototype-External-CarrierPigeonMessaging.md` | Present — Rename pending[^3] | BR-002: → `IT-Prototype-External-CarrierPigeonMessaging.md` |
| Media MCP Servers | `assets/projects/R&D-Prototype-Internal-MediaMCPServers.md` | Present[^1] | |

## Forms (assets/forms/)

| Artifact | Expected Path | Status | Notes |
|----------|--------------|--------|-------|
| Meeting Minutes template | `assets/forms/Corp-Templates-Internal-MeetingMinutes.md` | Present[^1] | |
| Memo Notice | `assets/forms/Corp-Templates-Internal-MemoNotice.md` | Present[^1] | |
| Letterhead (internal) | `assets/forms/Corp-Templates-Internal-letterhead.md` | Present[^1] | |
| Memo (internal) | `assets/forms/Corp-Templates-Internal-memo.md` | Present[^1] | |
| Letterhead Official Memo | `assets/forms/Corp-Templates-LetterheadOfficial-Memo.md` | Present[^1] | |
| Letterhead Official MemoNew | `assets/forms/Corp-Templates-LetterheadOfficial-MemoNew.md` | Present[^1] | Base for session 09 extended memo format |
| Universal Cover Page | `assets/forms/Corp-Templates-Universal-CoverPage.md` | Present[^1] | |
| Letterhead alt (naming error) | `assets/forms/Corp-Template-LetterheadOfficial-Memo.md` | Present — Rename pending[^3] | Missing 's'. BR-002: → `Corp-Templates-LetterheadOfficial-Memo.md`, update `assets/index.json` |
| Expense Report | `assets/forms/Finance-Templates-Finance-ExpenseReport.md` | Present[^1] | |
| New Employee Onboarding | `assets/forms/HR-Templates-NewEmployee-OnboardingForm.md` | Present[^1] | |
| Leave / PTO Request | `assets/forms/HR-Templates-RequestForm-LeavePTO.md` | Present[^1] | |
| Change Request | `assets/forms/IT-Templates-Form-ChangeRequest.md` | Present[^1] | |
| Incident Report | `assets/forms/IT-Templates-Forms-IncidentReportTicket.md` | Present[^1] | |
| Runbook template | `assets/forms/IT-Templates-Forms-RunBook.md` | Present[^1] | |
| SOP template | `assets/forms/IT-Templates-Forms-SOP.md` | Present[^1] | |
| System Design Doc template | `assets/forms/IT-Templates-Forms-SystemDesignDoc.md` | Present[^1] | |
| Technical Document template | `assets/forms/IT-Templates-Forms-TechnicalDocument.md` | Present[^1] | |
| Server/Network Inventory | `assets/forms/IT-Templates-Internal-ServerNetworkInventoryTable.md` | Present[^1] | |
| Policy Acknowledgement | `assets/forms/Legal-Templates-Compliance-PolicyAcknowledgement.md` | Present[^1] | |
| NDA | `assets/forms/Legal-Templates-NDA-NDA.md` | Present[^1] | |
| Newsletter/Bulletin | `assets/forms/Marketing-Templates-InternalCommunications-NewsletterBulletin.md` | Present[^1] | |
| Press Release | `assets/forms/Marketing-Templates-InternalCommunications-PressRelease.md` | Present[^1] | |
| Purchase Request Form | `assets/forms/Procurement-Templates-Aquisition-PurchaseRequestForm.md` | Present[^1] | Note: "Aquisition" is a typo in the existing filename — do not fix without also updating `assets/index.json` |

## Session-Established Assets — Local Only

The following artifacts were created in session 09 and are local files only — not yet committed to Gitea or the live site.[^4]

| Artifact | Expected Path | Notes |
|----------|--------------|-------|
| IR-2026-001 project card | `assets/projects/IT-Internal-InfrastructureRefresh2026.md` | Rename from IT-Operations- prefix when committing |
| IR-2026-001 project plan | `assets/docs/IT-Plan-Internal-InfrastructureRefresh2026.md` | |
| IR-2026-001 system design | `assets/docs/IT-SystemDesign-Internal-InfrastructureRefresh2026.md` | |
| ECC incident memo | `assets/docs/IT-Memo-Internal-ECC-Incompatibility-Incident-2026.md` | |
| Alex Firewall objection memo | `assets/docs/IT-Memo-Internal-ICR-2026-003-AF-Objection.md` | |
| CR-2026-001 NAS Upgrade Initiation | `assets/docs/IT-ChangeRequest-Internal-NASUpgradeInitiation-2026.md` | |
| CR-2026-002 H710 IT Mode Flash | `assets/docs/IT-ChangeRequest-Internal-PERCH710ITModeFlash-2026.md` | |
| CR-2026-003 CPU Swap | `assets/docs/IT-ChangeRequest-Internal-CPUSwapE5-2695v2-2026.md` | |
| Runbook — pve5 TrueNAS VM standup | `assets/docs/IT-Runbook-Internal-pve5-TrueNASVMStandup-2026.md` | |
| HAR-2026-001 pve5 acceptance | `assets/docs/IT-HardwareAcceptance-Internal-pve5-2026.md` | |
| MIN-2026-001 planning session | `assets/docs/IT-MeetingMinutes-Internal-InfrastructurePlanningSession-2026.md` | |
| PR-2026-001 hardware acquisition | `assets/docs/IT-PurchaseRequest-Internal-PR-2026-001-HardwareAcquisition.md` | |
| PR template | `assets/docs/IT-PurchaseRequest-Internal-PR-2026-NNN-Template.md` | |
| Blog posts (12 total) | `blogs/[filename]` from site root | Blog section not yet built. Interim path `blogs/`. BR-004 owns final path. |
| ADR-004 PERC IT Mode | Gitea repo — `docs/decisions/ADR-004-perc-it-mode.md` | In Gitea; not on website |

## Artifacts — Uncertain or Not Yet Created

| Artifact | Status | Notes |
|----------|--------|-------|
| Employee ID badge SVG | Uncertain | Session 05b — created in session; path not confirmed |
| Department logos SVG | Uncertain | Session 05b — created in session; path not confirmed |
| Org chart poster | Parked | Sessions 02, 05a, 05b |
| Propaganda posters | Parked | Sessions 05b, 02 |
| Terminal login banner / MOTD | Parked | Sessions 04, 05b |
| Corp documentation standards | Uncertain | Session 05b — repo root name unresolved |
| Branding and style guide | Uncertain | Session 05b |
| Onboarding packet | Uncertain | Session 05b |

---

[^1]: Site-confirmed — verified in NARC site source files (NARC-master.zip, 2026-03-22).
[^2]: Ratified — BR-001 lore-consolidation review, 2026-03-22.
[^3]: BR-002 action pending — rename required to conform to canonical `IT-` prefix ruling.
[^4]: Confirmed local-only — BR-001 review, 2026-03-22.