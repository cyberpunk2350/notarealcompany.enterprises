# NARC Documentation Repository Structure and Standards Reference

> Source: session chat log, proposed by AI assistant. Extracted for reference.

---

# NARC Documentation Repository Structure

```
narc-docs/
│
├── README.md
├── index.md
│
├── branding/
│   ├── images/
│   │   ├── narc-logo.svg
│   │   ├── narc-banner.svg
│   │   └── narc-seal.svg
│   │
│   └── seals/
│       ├── internal-use-only.svg
│       ├── confidential.svg
│       ├── do-not-distribute.svg
│       └── approved-by-computer.svg
│
├── templates/
│   ├── Template-Universal-CoverPage.md
│   ├── Template-Technical-Document.md
│   ├── Template-Runbook.md
│   ├── Template-SOP.md
│   ├── Template-SystemDesign.md
│   └── PM-Plan-Internal-ProjectPlanTemplate.md
│
├── hr/
│   └── policies/
│       └── HR-Policy-Internal-EmployeeHandbook.md
│
├── it/
│   ├── procedures/
│   │   └── IT-Procedure-Internal-VPNSetupGuide.md
│   │
│   ├── runbooks/
│   │   └── (system maintenance runbooks)
│   │
│   └── architecture/
│       └── (system design documentation)
│
├── security/
│   ├── policies/
│   │   └── Security-Policy-Internal-PasswordRotation.md
│   │
│   ├── standards/
│   │   └── Security-Standard-Internal-SystemHardening.md
│   │
│   └── procedures/
│       └── Ops-Procedure-Internal-IncidentResponse.md
│
├── operations/
│   ├── reports/
│   │   └── Ops-Report-External-QuarterlySummary.md
│   │
│   ├── change-management/
│   │   └── Ops-Change-Internal-ChangeRequest.md
│   │
│   └── runbooks/
│       └── (operational playbooks)
│
├── projects/
│   ├── templates/
│   │   ├── PM-Charter-Internal-ProjectCharter.md
│   │   ├── PM-Register-Internal-RiskRegister.md
│   │   ├── PM-Register-Internal-IssueLog.md
│   │   ├── PM-Register-Internal-DecisionLog.md
│   │   └── PM-Tracker-Internal-MilestoneTracker.md
│   │
│   └── active/
│       └── ProjectName/
│           ├── project-plan.md
│           ├── milestone-tracker.md
│           ├── risk-register.md
│           └── architecture.md
│
├── rnd/
│   ├── proposals/
│   │   └── RND-Plan-Internal-SkunkworksProjectX.md
│   │
│   ├── experiments/
│   │   └── (lab experiments)
│   │
│   └── reports/
│       └── (experiment results)
│
└── archive/
    ├── completed-projects/
    ├── deprecated-policies/
    └── legacy-documents/
```

---

# Naming Standard

File naming follows a **corporate-style structured naming pattern**:

```
[Department]-[DocumentType]-[Classification]-[Title].md
```

Examples:

```
IT-Procedure-Internal-VPNSetupGuide.md
Security-Policy-Internal-PasswordRotation.md
PM-Register-Internal-RiskRegister.md
Ops-Report-External-QuarterlySummary.md
```

### Department Prefix Reference

| Prefix | Department |
| -------- | ---------------------- |
| HR | Human Resources |
| IT | Information Technology |
| Ops | Operations |
| Security | Security |
| PM | Project Management |
| RND | Research & Development |

---

# Classification Levels

| Level | Usage |
| ----------------- | ------------------------------ |
| PUBLIC | Safe for external sharing |
| INTERNAL | Default internal documentation |
| INTERNAL USE ONLY | Sensitive internal docs |
| CONFIDENTIAL | Restricted operational docs |
| TOP SECRET | R&D or experimental projects |

---

# Example Document Header Standard

Place this near the top of most documents.

```markdown
![NARC Seal](../branding/images/narc-seal.svg)

# Document Title

| Field | Value |
|------|------|
| Organization | Not A Real Company |
| Classification | INTERNAL USE ONLY |
| Version | 1.0 |
| Author | NARC Operations |
| Date | YYYY-MM-DD |
```

---

# Optional Future Additions

If you want the NARC environment to feel **very enterprise-grade**, the following sections are often present in corporate documentation systems:

### Governance

```
governance/
├── Corporate-Governance-Framework.md
├── IT-Governance-Policy.md
└── Documentation-Standards.md
```

### Compliance

```
compliance/
├── Security-Audit-Checklist.md
├── Backup-Compliance-Standard.md
└── Incident-Review-Template.md
```

### Infrastructure Documentation

```
infrastructure/
├── network/
├── virtualization/
├── storage/
└── monitoring/
```

---

# Optional: Internal Wiki Structure

If you later move this to a wiki (GitBook, MkDocs, or Docusaurus), the structure maps cleanly.

Example navigation:

```
NARC Documentation
├── Corporate Policies
├── IT Operations
├── Security
├── Projects
├── Research & Development
├── Reports
└── Templates
```

---

# Proposed Change — Alternate Repository Layout (narc-corporate)

> **Status:** Proposed / Unresolved  
> **Source:** Session chat log, lines 2192–2213  
> **Decision required before finalizing repo structure.**

A shallower alternate layout was proposed during the same session under the root name `narc-corporate/` rather than `narc-docs/`. It is reproduced here for comparison.

```
narc-corporate/

branding/
   logos/
   badges/
   seals/
   banners/

docs/
   policies/
   procedures/
   standards/

hr/
   onboarding/

projects/

web/
   templates/
```

## Key Differences vs. narc-docs/

| Aspect | narc-docs/ (current) | narc-corporate/ (proposed) |
|--------|---------------------|---------------------------|
| Root name | `narc-docs/` | `narc-corporate/` |
| Depth | Deep — per-department subtrees | Shallow — broad top-level folders |
| Branding assets | Under `branding/images/` and `branding/seals/` | Expanded: `logos/`, `badges/`, `seals/`, `banners/` |
| IT / Security / Ops | Separate top-level directories | Collapsed under `docs/` |
| Web presence | Not included | Explicit `web/templates/` directory |
| HR | `hr/policies/` | `hr/onboarding/` |

## Decision

- [ ] Adopt `narc-docs/` as canonical layout
- [ ] Adopt `narc-corporate/` as canonical layout
- [ ] Merge the two (define hybrid structure)
