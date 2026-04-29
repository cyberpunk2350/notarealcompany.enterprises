# _meta — NARC Project Reference Materials

This directory contains reference and planning materials for the NARC project. These files are version-controlled alongside the site but are **not site content** — they are not rendered by the site, not indexed by `assets/index.json`, and not linked from any page.

---

## Contents

### `lore-bible/`

The NARC Lore Bible — the canonical reference produced by BR-001 (Lore Consolidation). Authoritative for all content, naming, character, and voice decisions across the project.

| File | Description |
|---|---|
| `readme.md` | Lore Bible overview and index |
| `narc-primer-index.md` | Section index |
| `narc-primer-section-01` through `narc-primer-section-14` | Canon sections |
| `narc-primer-appendix-editorial-history.md` | Change history |
| `narc-primer-appendix-maintenance-guide.md` | How to maintain the Bible |
| `working-notes-v1-lore-consolidation-review.md` | BR-001 session working notes |

**Precedence:** Where this Lore Bible conflicts with any other document or instruction, the Lore Bible takes precedence.

---

### `session-docs/`

Supporting reference documents from project sessions. Not canonical — informational only.

| File | Description |
|---|---|
| `NARC-DocRepo-Structure-And-Standards-Reference.md` | Proposed repo structure and naming standards reference (session 05b) |
| `NARC-Parked-Todo-BrandingAssets.md` | Parked branding asset checklist |
| `Login Banners.md` | Terminal login banner / MOTD content (lore-only; not yet a site document) |

---

## Usage Notes

- Do not add files here that belong in `assets/docs/`, `assets/forms/`, or `assets/projects/`.
- Branch results reports and working notes for active branches live in the `narc-lore-build` repo, not here.
- The Lore Bible is read-only from the perspective of the website repo — edits belong in `narc-lore-build`.
