# NARC Lore Primer — Section 05: Document Format Templates (Part A: §5.1–5.5)

> **Cross-references:** Section 04 (naming convention), Section 06 (document format templates Part B: §5.6–5.11), Section 07 (seal/image assets), Section 09 (site index files), Appendix I (content generation kickoff prompt)

---

## 5. Document Format Templates

### 5.1 Internal Document (Formal)

Pattern verified across `HR-Policy-Internal-EmployeeHandbook.md`, `Security-Policy-Internal-PasswordRotation.md`, `IT-Procedure-Internal-VPNSetupGuide.md`, `R&D-Plan-Internal-SkunkworksProjectX.md`.[^1]

**Header image:** `../images/narc-banner.svg` (wide banner, not logo) — used in formal docs  
**Logo image:** `../images/narc-logo.svg` — used in system design docs and forms

```markdown
# ![NARC Logo](../images/narc-banner.svg)
# [Document Title]

**Document Owner:** [Department or role]<br>
**Version:** [x.x]<br>
**Date:** [YYYY-MM-DD]<br>
**Classification:** [LEVEL]<br>

---
```

**Classification levels:**[^1][^2]

| Level | Usage |
|-------|-------|
| `INTERNAL USE ONLY` | Standard internal docs |
| `TOP SECRET` | R&D plans, sensitive designs, high-drama documents. Implicitly internal. |
| `INTERNAL` | General internal use |
| `PUBLIC` | External/public content |
| `CONFIDENTIAL` | Sensitive operational info |

**Standard footer for formal documents:**

```markdown
![Internal Use Seal](../images/seals/narc-internal-use-only-seal.svg)
```

Seal file confirmed at `images/seals/narc-internal-use-only-seal.svg`.[^1]

**Canonical seal path:**[^2] `../images/seals/[filename]` from all `assets/` subdirectories (`assets/docs/`, `assets/forms/`, `assets/projects/`). BR-002 action: correct any documents using non-canonical paths (`../branding/seals/`, `branding/images/`).

### 5.2 Project Card

Verified across multiple files in `assets/projects/`.[^1]

**Location:** `assets/projects/`  
**Registered in:** `assets/projects/index.json` (flat filename array)

```markdown
# [Project Name]

**Department:** [value]<br>
**Category:** [value]<br>
**Status:** [Active / Complete / Parked]<br>
**Clearance:** [Clearance level required]<br>

## Overview
[prose description]

## Features
- [bullet list]

## Notes
- [bullet list]

## TODO
- [bullet list]
```

`Status` and `Clearance` are standard fields for all new project cards.[^2] Existing site project cards to be updated in BR-002.

### 5.3 R&D Plan / Formal Project Plan

Verified from `R&D-Plan-Internal-SkunkworksProjectX.md` and `R&D-Plan-Internal-MediaMCPServers.md`.[^1] Session 09 extended this format for ITCRuD (`IT-Plan-Internal-*`).[^3]

```markdown
# ![NARC Logo](../images/narc-banner.svg)
# [Document Title]

**Document Owner:** [value]<br>
**Version:** [value]<br>
**Date:** [YYYY-MM-DD]<br>
**Classification:** INTERNAL — [Clearance] and Above<br>

---

## Objective
[What this project does and why. 2–3 sentences. End with a dry NARC observation.]

---

## Scope
**In scope:** [bullet list]
**Out of scope:** [bullet list — include at least one absurd or deadpan exclusion]

---

## Deliverables
[bullet list of concrete outputs]

---

## Risks

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| [row] | | | [at least one mitigation cell should land as a dry NARC punchline] |

---

## Phases and Timeline

| Phase | Workstream | Status | Dependencies |
|-------|------------|--------|--------------|
```

4-column timeline format is the default for new documents.[^2] Projects may use fewer columns if content warrants — this is a local decision, not a violation. Existing 2 and 3-column timelines in committed docs do not need retrofitting.

```markdown
## Approvals

| Name | Title | Signature |
|------|-------|-----------|
| [Name or REDACTED] | [Title] | |
| | Approved by the Computer | ![Approved by the Computer](../images/seals/approved-by-computer.svg) |
```

The "Approved by the Computer" row with the seal image is the standard closing line in the Approvals table.[^3]

### 5.4 System Design Document

Verified from `R&D-SystemDesign-Internal-MediaMCPServers.md`.[^1]

```markdown
# ![NARC Logo](../images/narc-logo.svg)
# System Design Document – [Project Name]

**Classification:** [value]<br>
**Clearance Required:** [value]<br>
**Document Owner:** [value]<br>
**Version:** [value]<br>
**Date:** [YYYY-MM-DD]<br>

---

## 1. Executive Summary
## 2. Requirements
### Functional
### Non-Functional
```
[bullet list — end with at least one "this is not optional" or "do not ask" item]
```
## 3. Architecture
[image reference + prose]
## 4. Data Flow
[ASCII flow diagrams in code blocks. At least one "Employees who attempt X will find the experience unrewarding."]
## 5. Security Considerations
[Threat model table + encryption details — end with a Victor Watchful reference]
## 6. Maintenance Plan
[At least one item phrased as a standing order, not a suggestion.]
```

### 5.5 Official Memo / Letterhead

Verified from `assets/forms/Corp-Templates-LetterheadOfficial-MemoNew.md`.[^1]

**Site base format:**

```markdown
![NARC Logo](./images/narc-logo.svg)

**Not A Real Company (NARC)**  
Enterprises  

Date: [YYYY-MM-DD]  
To: [Recipient]  
From: [Sender]  
Subject: [Subject]  

---

[Body]

---

*Making Fake Work Feel Real Since 2025*  
[Seal: ![Seal](./images/narc-seal.svg)]
```

**Extended format**[^3] — used for formal memos requiring classification and document references:

```markdown
# ![NARC Logo](../images/narc-logo.svg)

**Not A Real Company (NARC)**
Enterprises

**Date:** YYYY-MM-DD
**To:** [Recipients] — [Clearance Level] and Above
**From:** [Sender Name/Title]
**CC:** [CC list]
**Subject:** [Reference Code if applicable] — [Subject]

**Classification:** ![Internal](../images/seals/internal.svg) INTERNAL — [Clearance] and Above

---

[Body — see tone rules]

---

*Making Fake Work Feel Real Since 2025*

![NARC Internal Use Only](../images/seals/narc-internal-use-only-seal.svg)

---

**Document Reference:** [ref code if applicable]
**Related Documents:** [links to related docs]
```

---

[^1]: Site-confirmed — verified in NARC site source files (NARC-master.zip, 2026-03-22).
[^2]: Ratified — BR-001 lore-consolidation review, 2026-03-22.
[^3]: Session-established — introduced in session 09; adopted as standard format.