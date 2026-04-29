# NARC Lore Primer — Section 09: Site Index Files

> **Cross-references:** Section 04 (naming convention — parser rules derive from this), Section 12 (artifact inventory — index file contents listed there)

---

## 8. Site Index Files

### How the Loading System Works

Verified from `js/documents.js`, `js/projects.js`, `js/auto-documents.js`.[^1]

**Documents page** (`documents.html`):  
Loads from `assets/index.json`. This file contains relative paths including the subfolder prefix: `"docs/Finance-Report-External-AnnualReport2023.md"`, `"forms/HR-Templates-NewEmployee-OnboardingForm.md"`.

The JavaScript parses the *filename only* (strips folder prefix) using the pattern `[Department]-[Category]-[Use]-[Title].[ext]`. Department, Category, and Use become filter facets in the UI. Title (with underscores replaced by spaces) becomes the card heading.

**To add a new document or form:**

1. Place the file in `assets/docs/` or `assets/forms/`
2. Add an entry to `assets/index.json` with the relative path: `"docs/YourFilename.md"` or `"forms/YourFilename.md"`
3. The filename must strictly follow the `[Dept]-[Type]-[Visibility]-[Title].md` convention — the parser will return null and silently skip any file that does not match the four-component pattern

**Projects page** (`projects.html`):  
Loads from `assets/projects/index.json`. This file is a flat array of filenames only (no folder prefix): `"IT-Operations-Internal-CorporateDNS.md"`.

The parser splits on hyphens: first part is Department, second is Category, third is Use, remainder joined with hyphens is Title.

**To add a new project card:**

1. Place the file in `assets/projects/`
2. Add the filename to `assets/projects/index.json`
3. Same naming convention applies

### Current Index State

**`assets/index.json`** — current entries:[^1]

Forms: `Corp-Templates-Internal-MeetingMinutes.md`, `Corp-Templates-Internal-MemoNotice.md`, `Corp-Templates-Internal-letterhead.md`, `Corp-Templates-Internal-memo.md`, `Corp-Templates-LetterheadOfficial-Memo.md`, `Corp-Templates-LetterheadOfficial-MemoNew.md`, `Corp-Templates-Universal-CoverPage.md`, `Finance-Templates-Finance-ExpenseReport.md`, `HR-Templates-NewEmployee-OnboardingForm.md`, `HR-Templates-RequestForm-LeavePTO.md`, `IT-Templates-Form-ChangeRequest.md`, `IT-Templates-Forms-IncidentReportTicket.md`, `IT-Templates-Forms-RunBook.md`, `IT-Templates-Forms-SOP.md`, `IT-Templates-Forms-SystemDesignDoc.md`, `IT-Templates-Forms-TechnicalDocument.md`, `IT-Templates-Internal-ServerNetworkInventoryTable.md`, `Legal-Templates-Compliance-PolicyAcknowledgement.md`, `Legal-Templates-NDA-NDA.md`, `Marketing-Templates-InternalCommunications-NewsletterBulletin.md`, `Marketing-Templates-InternalCommunications-PressRelease.md`, `Procurement-Templates-Aquisition-PurchaseRequestForm.md`

Docs: `Finance-Report-External-AnnualReport2023.md`, `HR-Policy-Internal-EmployeeHandbook.md`, `IT-Procedure-Internal-VPNSetupGuide.md`, `Legal-Policy-Internal-DataProtection.md`, `Marketing-Plan-External-SocialMediaStrategy.md`, `Ops-Report-External-QuarterlySummary.md`, `Ops-Report-Internal-CoverPage.md`, `Security-Policy-Internal-PasswordRotation.md`, `R&D-Plan-Internal-SkunkworksProjectX.md`, `R&D-Plan-Internal-MediaMCPServers.md`, `R&D-SystemDesign-Internal-MediaMCPServers.md`

**`assets/projects/index.json`** — current entries:[^1]

`IT-Operations-Internal-VPNMesh.md`, `R&D-Prototype-External-AI_CoffeeBot.md`, `Cybersecurity-Internal-PenTestSim.md`, `Marketing-Prototype-External-HypeMachine.md`, `R&D-Prototype-Internal-SmartDesk.md`, `IT-Operations-External-MockSaaS.md`, `IT-Operations-Internal-CorporateDNS.md`, `IT-Operations-Internal-FakeCorporateSaaS.md`, `R&D-Prototype-Internal-AlphaComplexMemos.md`, `IT-Operations-Prototype-External-CarrierPigeonMessaging.md`, `R&D-Prototype-Internal-MediaMCPServers.md`

Note: `IT-Operations-*` filenames listed above are pending rename to `IT-*` in BR-002.[^2]

---

[^1]: Site-confirmed — verified in NARC site source files (NARC-master.zip, 2026-03-22).
[^2]: BR-002 action pending — IT-Operations- prefix retired; all project card files to be renamed.