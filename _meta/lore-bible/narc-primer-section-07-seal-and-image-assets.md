# NARC Lore Primer — Section 07: Available Seal and Image Assets

> **Cross-references:** Section 05 (document templates Part A — seal path usage), Section 06 (document templates Part B — blog memo headers), Section 12 (artifact inventory — full asset list)

---

## 6. Available Seal and Image Assets

All paths verified from the repository file tree.[^1]

### Logo and Banner Files

Located in `images/` (site root relative).

| File | Description | Documents path | Status |
|------|-------------|----------------|--------|
| `images/narc-logo.svg` | Primary logo — basic/small logo. Use on site and in docs for quick/small logo placement. Pair with `narc-banner.svg` where reasonable. | `../images/narc-logo.svg` from `assets/docs/` | Active[^2] |
| `images/narc-banner.svg` | Wide banner — used in formal doc headers. | `../images/narc-banner.svg` from `assets/docs/` | Active[^2] |
| `images/narc-seal.svg` | Corporate seal — experimental; currently referenced in some docs but being removed. No plans for future use. | — | Retiring — BR-002 action: remove all references |
| `images/logo1.svg` | Logo variant 1 — not in use; possible future use. Needs design brief before deployment. | — | Inactive |
| `images/logo2.svg` | Logo variant 2 — repo use only at this time; possible future use. | — | Repo only |
| `images/logo3.svg` | Logo variant 3 — experimental; no plans for use. | — | Experimental |
| `images/logo4.svg` | Logo variant 4 — not in use; possible future use. Needs design brief before deployment. | — | Inactive |
| `images/narc-logo-old.svg` | Archived old logo — superseded; no plans for use. | — | Superseded |

### Seal Files

Located in `images/seals/` (site root relative). All site-confirmed.[^1]

| File | Use | Documents path | Status |
|------|-----|----------------|--------|
| `images/seals/approved-by-computer.svg` | Approval blocks in formal docs and Approvals tables | `../images/seals/approved-by-computer.svg` | Active |
| `images/seals/narc-internal-use-only-seal.svg` | Memo footers; standard document footer seal | `../images/seals/narc-internal-use-only-seal.svg` | Active |
| `images/seals/internal.svg` | Inline classification headers | `../images/seals/internal.svg` | Active |
| `images/seals/confidential2.svg` | Canonical confidential seal — matches current seal style | `../images/seals/confidential2.svg` | Active[^2] |
| `images/seals/confidential.svg` | Retired — superseded by `confidential2.svg` | — | Retired — BR-002 action: replace all references |
| `images/seals/top-secret.svg` | TOP SECRET documents | `../images/seals/top-secret.svg` | Active |
| `images/seals/public.svg` | External/public-facing documents | `../images/seals/public.svg` | Active |
| `images/seals/do-not-distribute.svg` | Extra-sensitive content; distribution-restricted | `../images/seals/do-not-distribute.svg` | Active |
| `images/seals/authorized-use-only.svg` | Restricted-access documents | `../images/seals/authorized-use-only.svg` | Active |
| `images/seals/property-of.svg` | Asset labeling and ownership | `../images/seals/property-of.svg` | Active |

### Officer Portrait Files

Located in `images/officers/`.

| File | Character | Status |
|------|-----------|--------|
| `images/officers/ceo.svg` | Jane Doe | Active |
| `images/officers/cfo.svg` | John Smith | Active |
| `images/officers/cto.svg` | Mary Johnson | Active |
| `images/officers/coo.svg` | Robert Lee | Active |
| `images/officers/hr.svg` | Linda Park | Active |
| `images/officers/marketing.svg` | Max Pitchman | Active |
| `images/officers/rnd.svg` | Dr. Sylvia Sparks | Active |
| `images/officers/ciso.svg` | Alex Firewall | Active |
| `images/officers/happiness.svg` | Chuck Cheerful | Active |
| `images/officers/security.svg` | Victor Watchful | Active |
| `images/officers/operations.svg` | Retired — old model; no current character assignment | Retired — BR-002 action: remove from active use |

### Architecture Diagram Files

Located in `images/docimages/`.

| File | Description | Status |
|------|-------------|--------|
| `images/docimages/architecture-mediamcpservers.svg` | AI Media MCP Servers architecture diagram — green-on-black terminal aesthetic | Active — ratified as NARC diagram standard[^2] |

The green-on-black terminal aesthetic is the NARC standard for all architecture diagrams.[^2]

---

[^1]: Site-confirmed — verified in NARC site source files (NARC-master.zip, 2026-03-22).
[^2]: Ratified — BR-001 lore-consolidation review, 2026-03-22.