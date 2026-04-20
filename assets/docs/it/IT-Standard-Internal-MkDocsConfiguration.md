![NARC Banner](../../images/narc-banner.svg)

# NARC Documentation Site Configuration — MkDocs Standard

Organization: Not A Real Company (NARC)

---

## Purpose

This document defines the configuration standard for the NARC documentation website using MkDocs. The goal is to provide a searchable internal knowledge base for all corporate documentation.

---

# Directory Layout

Recommended repository layout:

```
narc-docs/
│
├── mkdocs.yml
├── docs/
│   ├── index.md
│   ├── governance/
│   ├── operations/
│   ├── security/
│   ├── projects/
│   ├── rnd/
│   ├── templates/
│   └── blog/
│
├── images/
│   ├── narc-logo.svg
│   ├── narc-banner.svg
│   └── seals/
```

---

# mkdocs.yml Example

```yaml
site_name: NARC Corporate Documentation
site_description: Not A Real Company Internal Knowledge Base
site_author: NARC Operations

theme:
  name: material
  logo: images/narc-logo.svg
  favicon: images/narc-logo.svg

  palette:
    scheme: slate
    primary: black
    accent: red

nav:
  - Home: index.md
  - Governance:
    - Documentation Standards: governance/Corp-Standard-Internal-DocumentationStandards.md
  - IT Operations:
    - VPN Setup: it/IT-Procedure-Internal-VPNSetupGuide.md
  - Security:
    - Password Rotation: security/Security-Policy-Internal-PasswordRotation.md
  - Projects:
    - Project Plan Template: templates/PM-Plan-Internal-ProjectPlanTemplate.md
  - R&D:
    - Skunkworks: rnd/R&D-Plan-Internal-SkunkworksProjectX.md
  - Blog:
    - blog/index.md

markdown_extensions:
  - tables
  - toc
  - admonition
  - codehilite
```

---

# Deployment

```bash
pip install mkdocs mkdocs-material
mkdocs serve
mkdocs build
mkdocs gh-deploy
```

The documentation site may be hosted on GitHub Pages, an internal web server, or a containerized nginx service.
