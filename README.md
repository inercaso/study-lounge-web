
# Study Lounge

<div align="center">
  <img src="https://i.imgur.com/Fkz6tMD.png" alt="Study Lounge — Hero Section" width="100%">
</div>

<br>

<div align="center">

**A modern English language school landing page** — helping students conquer BAC, IELTS, TOEFL, and beyond.
From primary school kids taking their first English steps, to working professionals pursuing Business English or IELTS certification, the school offers a tailored path for everyone.

[![Live Demo](https://img.shields.io/badge/🌐%20Live%20Demo-studylounge.netlify.app-6366f1?style=for-the-badge&logoColor=white)](https://studylounge.netlify.app)

</div>

---

## Tech Stack

| Technology | Purpose |
|---|---|
| [11ty (Eleventy)](https://www.11ty.dev/) | Static Site Generator — Nunjucks templates + JSON data pipeline |
| [Decap CMS](https://decapcms.org/) | Git-based CMS — web UI at `/admin`, commits content to Git |
| Netlify | Hosting + Identity/Git Gateway for CMS OAuth |
| Vanilla CSS | All styling — no frameworks |
| Reset.css | Cross-browser style normalization |

---

## CMS

Content is fully editable through the Decap CMS admin panel at `/admin`. All site sections — hero, courses, why-us, stats, about, footer, and mascot — are managed as JSON data files under `src/_data/`. Changes made in the CMS are committed directly to the Git repository.

**To access the CMS:** visit `https://<site>.netlify.app/admin` and log in with Netlify Identity credentials.

---

## Screenshots

### Why Us

Highlights the school's core strengths, such as a certified teacher, small group sizes, flexible scheduling, and a proven track record of exam success. Real numbers at a glance.

<img src="https://i.imgur.com/7VfiZES.png" alt="Why Us Section" width="100%">

### Courses

A card-based catalogue covering every programme offered from BAC preparation, IELTS & TOEFL, Business English, General English for adults and children, and Medical English. 

<img src="https://i.imgur.com/knzatAc.png" alt="Courses Section" width="100%">

### About

Introduces teacher Adriana.

<img src="https://i.imgur.com/ZcMMa4P.png" alt="About Section" width="100%">

---

## Mobile View

The layout is fully responsive, with the navigation collapsing to a hamburger menu.

<div align="center">
  <img src="https://i.imgur.com/NpDtlLd.png" alt="Mobile View" width="320">
</div>

---

## Mascot — Oli

> <img src="assets/img/mascot-oli.png" alt="Oli the mascot" width="180" align="right">
>
> Meet **Oli** — the friendly face of Study Lounge. Oli is always around to cheer students on, keeping the vibe fun and encouraging throughout every lesson and milestone!

<br>

---

## Project Structure

```
study-lounge-web/
├── .eleventy.js
├── package.json
├── netlify.toml
├── src/
│   ├── index.njk
│   ├── admin/
│   │   ├── index.html
│   │   └── config.yml
│   └── _data/
│       ├── nav.json
│       ├── hero.json
│       ├── whyus.json
│       ├── stats.json
│       ├── courses.json
│       ├── about.json
│       ├── footer.json
│       └── mascot.json
├── assets/
│   ├── img/
│   └── svg/
├── style.css
└── reset.css
```

---

## Course

Built for the **Web Programming** course at [Technical University of Moldova](https://utm.md).
