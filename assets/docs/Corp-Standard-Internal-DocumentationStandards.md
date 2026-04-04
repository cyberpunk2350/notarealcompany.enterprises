![NARC Internal Use Only](../images/seals/narc-internal-use-only-seal.svg)

# NARC Documentation Standards

Organization: Not A Real Company (NARC)  
Motto: Making Fake Work Feel Real Since 2025

---

## Document Metadata

| Field | Value |
|------|------|
| Document Type | Corporate Governance Standard |
| Classification | INTERNAL USE ONLY |
| Maintained By | NARC Operations |
| Version | 1.0 |
| Last Updated | YYYY-MM-DD |

---

# 1. Purpose

This document establishes the official documentation standards for all internal and external documentation produced within the NARC environment.

Objectives:

- Ensure consistency across documentation
- Maintain clear versioning and ownership
- Provide standardized formatting
- Support automated documentation pipelines

---

# 2. Naming Convention

All documents must follow the NARC naming convention.

Format:

```
[Department]-[DocumentType]-[Classification]-[Title].md
```

Examples:

```
IT-Procedure-Internal-VPNSetupGuide.md
Security-Policy-Internal-PasswordRotation.md
Ops-Report-External-QuarterlySummary.md
Corp-Standard-Internal-DocumentationStandards.md
```

---

# 3. Department Prefixes

| Prefix | Department |
|------|------|
| Corp | Corporate Governance — canonical prefix |
| HR | Human Resources |
| IT | IT Operations — canonical prefix |
| Ops | Operations |
| Security | Security / Cybersecurity |
| PM | Project Management |
| R&D | Research & Development |
| Finance | Finance |
| Legal | Legal / Compliance |
| Marketing | Marketing & Communications |
| Procurement | Procurement |

---

# 4. Document Types

| Type | Purpose |
|------|------|
| Policy | Defines rules or governance |
| Procedure | Step-by-step operational instructions |
| Standard | Required technical or organizational configuration |
| Plan | Strategic or project planning |
| Report | Operational or analytical report |
| Register | Tracking logs (risk, issue, decision) |
| Template | Reusable document structure |
| Memo | Internal communications |
| ChangeRequest | Change control records |
| Runbook | Operational runbooks |

---

# 5. Classification Levels

All documents must declare a classification level.

| Classification | Description |
|------|------|
| PUBLIC | Safe for external distribution |
| INTERNAL | General internal documentation |
| INTERNAL USE ONLY | Restricted internal access |
| CONFIDENTIAL | Sensitive operational information |
| TOP SECRET | Highly restricted R&D material |

Canonical seal files are in `images/seals/`. See `Corp-Standard-Internal-BrandingAndStyleGuide.md` for seal usage.

---

# 6. Document Header Format

All documents should begin with a standardized header:

```markdown
![NARC Internal Use Only](../images/seals/narc-internal-use-only-seal.svg)

# Document Title

| Field          | Value              |
| -------------- | ------------------ |
| Organization   | Not A Real Company |
| Classification | INTERNAL USE ONLY  |
| Version        | 1.0                |
| Author         | NARC Operations    |
| Date           | YYYY-MM-DD         |
```

---

# 7. Versioning

| Version | Meaning |
|------|------|
| 0.x | Draft |
| 1.0 | Initial release |
| 1.x | Minor revisions |
| 2.x | Major revision |

---

# 8. File Format

| Format | Usage |
|------|------|
| Markdown (.md) | Standard documentation |
| SVG | Logos and graphical assets |
| PDF | Published documents |

---

# 9. Repository Structure

See `NARC-DocRepo-Structure-And-Standards-Reference.md` for the full proposed repository layout.

---

# 10. Review Process

```
Author → Department Lead → Operations → Approval
```

---

# 11. Archival Policy

Deprecated documents are tombstoned in place with a retirement notice and removed from index files. The file is retained in the repository for historical record.
