![NARC Banner](../../images/narc-banner.svg)

# NARC Corporate Style and Branding Guide

Organization: Not A Real Company  
Motto: Making Fake Work Feel Real Since 2025

---

# 1. Brand Identity

NARC branding combines three themes:

1. Retro corporate computing
2. 90s hacker / cyberpunk aesthetics
3. Satirical enterprise bureaucracy

The design language should feel like:

- 1990s corporate training manuals
- government seals and stamps
- early computer interface visuals

---

# 2. Official Logo

Primary logo elements:

- CRT monitor with smiling face
- bold "NARC" text
- neon glow accents

Approved logo files:

```
images/narc-logo.svg
images/narc-banner.svg
images/seals/narc-internal-use-only-seal.svg
```

Logos must not be modified except for scaling.

---

# 3. Official Color Palette

Primary colors:

| Name | Hex | Usage |
|-----|-----|------|
| NARC Black | #0a0a0a | Backgrounds |
| NARC Neon Cyan | #00ffcc | Monitor glow / highlights |
| NARC Signal Red | #ff3b3b | Logo accents |
| Corporate White | #ffffff | Text / backgrounds |

Secondary colors:

| Name | Hex | Usage |
|-----|-----|------|
| Steel Gray | #444444 | Borders |
| Dark Slate | #1a1a1a | UI panels |

---

# 4. Typography

Primary fonts:

| Use | Font |
|----|----|
| Headings | Impact / Arial Black |
| Body text | Arial / Helvetica |
| Code | JetBrains Mono / Consolas |

Web fallback stack:

```css
font-family: Arial, Helvetica, sans-serif;
```

Heading style:

```css
font-family: Impact, Arial Black, sans-serif;
letter-spacing: 1px;
```

---

# 5. Document Layout

Standard document sections:

1. Logo or banner
2. Title
3. Metadata table
4. Body content
5. Footer seal

Example header:

```markdown
![NARC Internal Use Only](../../images/seals/narc-internal-use-only-seal.svg)

# Document Title

| Field          | Value             |
| -------------- | ----------------- |
| Classification | INTERNAL USE ONLY |
| Version        | 1.0               |
```

---

# 6. Seal Usage

Approved seals — all located in `images/seals/`:

| Seal | Use |
|-----|-----|
| `narc-internal-use-only-seal.svg` | Default internal docs |
| `confidential2.svg` | Restricted information |
| `approved-by-computer.svg` | Approval sections |
| `do-not-distribute.svg` | Restricted distribution |
| `top-secret.svg` | Highly restricted material |
| `authorized-use-only.svg` | Authorized access docs |

Seals should appear on cover pages, document footers, and approval sections.

---

# 7. Formatting Standards

Preferred formatting:

| Element | Style |
|-------|------|
| Headings | Markdown H1–H3 |
| Tables | Markdown tables |
| Code | Fenced code blocks |
| Diagrams | SVG |

Example code block:

```bash
docker compose up -d
```

---

# 8. Blog Visual Style

Blog posts should use:

- Banner header
- Section headings
- Diagrams where useful

Tone: technical + lightly satirical corporate language.

---

# 9. Website UI Styling

Example CSS guidelines:

```css
body {
  background: #0a0a0a;
  color: #ffffff;
}

a {
  color: #00ffcc;
}

h1, h2, h3 {
  color: #ff3b3b;
}
```

---

# 10. Branding Principles

NARC branding should communicate:

- Fake corporate professionalism
- Playful bureaucracy
- Technical competence

Everything should feel like an **overly serious corporate system for a homelab**.

---

# 11. Tagline Usage

Official tagline:

> Making Fake Work Feel Real Since 2025

Tagline may appear on website footers, documentation headers, and presentations.
