![NARC Logo](images/logo2.svg)

# Not A Real Company (NARC) Website

> **Making Fake Work Feel Real Since 2025**  
> A homelab-turned-faux-enterprise: infrastructure, policies, leadership drama, and memos included.  

---

## 📖 What is this?

This is the official(ly fake) website for **Not A Real Company (NARC)**.  
NARC is a parody enterprise environment built in a homelab to practice real-world IT, DevOps, and documentation workflows — but with a wink and a nudge.  

Think of it as a **sandbox for corporate bureaucracy**: DNS servers, faux SaaS dashboards, internal documents, leadership bios, project tracking, Alpha Complex–style memos, and more.  

If you’ve ever wanted to practice serious IT patterns while laughing at how seriously corporations take themselves — this is your place.  

---

## 🛠️ How it was built

- **Static Website**: Plain HTML, CSS, and JavaScript (no frameworks, no build pipelines — designed to drop directly onto GitHub Pages or an Nginx server).  
- **Theme Toggle**: Light/dark mode switch handled by `js/theme.js`.  
- **Reusable Components**: Navigation and footer are refactor-ready into partials to make the site easier to maintain as it grows.  
- **Documents & Projects Pages**:  
  - Markdown and PDF support.  
  - Files organized in `assets/docs`, `assets/forms`, and `assets/projects`.  
  - Index JSON files keep lists of available files.  
  - A small amount of JavaScript (`documents.js`, `projects.js`) dynamically builds card layouts and opens content in modal popups.  
- **Styling**: All core look & feel (cards, memos, containers, etc.) lives in `css/style.css`.  
- **Logos & Icons**: Fake-corporate SVG logos, favicons, and playful assets in `images/`.  
- **Vibes**: Completely "Vibe Coded" with ChatGPT
---

## 🏗️ Structure

```
.
├── assets/
│   ├── docs/        # Internal documents (Markdown, PDFs)
│   ├── forms/       # Corporate "forms"
│   ├── projects/    # Markdown/PDF project files
│   └── index.json   # JSON indexes for dynamic loading
├── css/
│   └── style.css    # Global styling
├── js/
│   ├── theme.js     # Light/dark mode toggle
│   ├── documents.js # Dynamic document handling
│   └── projects.js  # Dynamic project handling
├── images/
│   └── ...          # Logos, favicons, seals
├── index.html       # Homepage
├── about.html
├── departments.html
├── leadership.html
├── documents.html
├── projects.html
├── contact.html
└── README.md        # This file

````

---

## 🚀 Deployment

This is how the site is being delployed:

- **ChatGPT**: Vibing the code (seems appropirate)
- **Nginx**: Local testing on a self hosted Nginx Instace
- **Local Git Repo**: Code maintained on a self hosted Gitea Repo
- **Github Repo**: Pushed from Gitea to Github as a read-only repo via remote Push Repo
- **GitHub Pages**: Published to the world via Github Pages.

---

## 📚 Contributing (the fake way)

Pull requests will be routed through the **Happiness Officer** and the **Internal Security Bureaucrat** before being ~~ignored~~ carefully reviewed.

If you’d like to add content:

* Put documents into `assets/docs/` or `assets/forms/`.
* Put projects into `assets/projects/`.
* Update the matching `index.json`.
* Commit with a message that sounds far more important than it is.

---

## ⚠️ Disclaimer

This is not a real company.
This is a parody IT sandbox for homelab practice, documentation experiments, and corporate satire.

All seals, memos, leadership bios, and projects are **fake but functional**.
Any resemblance to actual companies, living or defunct, is purely coincidental (and hilarious).

---

**NARC**
*"Where every ticket is mission-critical, every document is confidential, and every smile is mandatory."*
