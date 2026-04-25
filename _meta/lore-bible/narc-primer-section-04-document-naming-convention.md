# NARC Lore Primer — Section 04: Document File Naming Convention

> **Cross-references:** <br>
> Section 05 (document format templates)<br>
> Section 09 (site index files — how filenames parse)<br>
> Section 12 (artifact inventory)<br>
> Appendix I (content generation kickoff prompt)<br>

---

## 4. Document File Naming Convention

Verified across all files in `assets/docs/`, `assets/forms/`, and `assets/projects/`.[^1]

```
[Department]-[DocType]-[Visibility]-[Title].md
```

### Component Values

**Department codes** (confirmed from actual filenames):[^1]

| Code | Department |
|------|-----------|
| `IT` | IT Operations — sole canonical prefix; `IT-Operations-` retired[^2] |
| `R&D` | Research & Development |
| `HR` | Human Resources |
| `Security` | Cybersecurity / Security Operations |
| `Ops` | Operations |
| `Finance` | Finance |
| `Legal` | Legal / Compliance |
| `Marketing` | Marketing & Communications |
| `Cybersecurity` | Cybersecurity (projects) |
| `Corp` | Corporate / Governance — sole canonical prefix; `Corporate-Governance-` retired[^2] |
| `Procurement` | Procurement |

**DocType codes** (confirmed from site files):[^1]

| Code | Type |
|------|------|
| `Procedure` | Procedure |
| `Policy` | Policy |
| `Plan` | Plan |
| `Report` | Report |
| `SystemDesign` | System Design Document |
| `Templates` | Template collection |
| `Operations` | Project card (projects dir) |
| `Prototype` | Prototype project card |
| `Memo` | Memo[^3] |
| `ChangeRequest` | Change Request[^3] |
| `Runbook` | Runbook[^3] |
| `HardwareAcceptance` | Hardware Acceptance Record[^3] |
| `MeetingMinutes` | Meeting Minutes[^3] |
| `PurchaseRequest` | Purchase Request[^3] |

**Visibility codes:**[^1]

| Code | Meaning |
|------|---------|
| `Internal` | Internal use |
| `External` | External-facing |
| `Public` | Public |

**Title:** TitleCase, no spaces, hyphens used as word separators within multi-word titles.[^1]

### Document Reference Numbering Schemes

Established in session 09 and used in session 09 documents.[^3]

| Type | Format | Example |
|------|--------|---------|
| Change Request | CR-[YEAR]-[NNN] | CR-2026-001 |
| Incident/Change Request | ICR-[YEAR]-[NNN] | ICR-2026-003 |
| Hardware Acceptance Record | HAR-[YEAR]-[NNN] | HAR-2026-001 |
| Purchase Request | PR-[YEAR]-[NNN] | PR-2026-001 |
| Meeting Minutes | MIN-[YEAR]-[NNN] | MIN-2026-001 |

### BR-002 Actions

The following naming corrections are pending execution in BR-002:

- `Corporate-Governance-Internal-DocumentationStandards.md` → `Corp-Standard-Internal-DocumentationStandards.md` + update `assets/index.json`
- All `IT-Operations-*` project card files → `IT-*` equivalents + update `assets/projects/index.json` for each

---

[^1]: Site-confirmed — verified in NARC site source files (NARC-master.zip, 2026-03-22).<br>
[^2]: Ratified — BR-001 lore-consolidation review, 2026-03-22. Prior prefixes retired; all new documents must use canonical prefix.<br>
[^3]: Session-established — introduced in session 09 documents; adopted as standard.<br>