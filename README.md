# thought-windows

A personal portfolio website built to showcase professional experience and projects across web development, graphic design, and business operations — built during a career transition into software development.

**Live site:** [thoughtwindows.com](https://thoughtwindows.com)

---

![Thought Windows screenshot](src/assets/images/Thought%20Windows%20Screen.png)

---

## About

This portfolio reflects a career in motion. It documents both completed and in-progress work across three disciplines:

- **Web** — React applications built from scratch
- **Design** — Print and digital collateral for real clients
- **Operations** — Eleven years co-founding and running Baere Brewing Co. in Denver

The site itself is also a project — built with React and plain CSS, with a focus on clean code and genuine accessibility.

---

## Features

- Filterable project grid by category (Web, Design, Operations)
- Project modals with image carousels and sub-project navigation
- CV section with two views: Program-Led and Chronological, plus PDF download
- Accessibility section with personal narrative and documented a11y decisions
- About section
- Keyboard navigable throughout
- Respects `prefers-reduced-motion`
- Skip-to-main link for screen reader users

---

## Tech Stack

| Tool           | Purpose                        |
| -------------- | ------------------------------ |
| React 19       | UI                             |
| Vite           | Build tool                     |
| React Router 7 | Routing                        |
| Plain CSS      | Styling (no component library) |

No UI frameworks. No CSS-in-JS. Styles are hand-written and organized by component.

---

## Project Structure

```
src/
├── assets/
│   └── images/           # Project photos organized by client
├── components/
│   ├── App.jsx           # Root layout, section routing, filter state
│   ├── ProjectsGrid.jsx  # Filterable card grid
│   ├── ProjectCard.jsx   # Individual project card
│   ├── Modal.jsx         # Project detail modal with sub-project navigation
│   ├── ImageCarousel.jsx # Photo carousel inside modals
│   ├── CVSection.jsx     # Resume / work history (two views + PDF download)
│   ├── AboutSection.jsx  # Personal bio
│   ├── AccessibilitySection.jsx  # Personal a11y narrative and documented decisions
│   ├── Header.jsx
│   ├── TopNav.jsx
│   ├── FilterNav.jsx
│   └── Footer.jsx
└── data/
    └── projects.js       # All project data in one place
```

---

## Getting Started

```bash
npm install
npm run dev
```

```bash
npm run build    # production build
npm run preview  # preview the build locally
```

---

## Accessibility Approach

Accessibility is treated as a first-class concern, not an afterthought:

- Semantic HTML elements (`<button>`, `<nav>`, `<main>`, dialog roles)
- `aria-expanded` and `aria-controls` on interactive disclosure buttons
- `aria-hidden` on decorative and collapsed content
- `aria-live` region for dynamic project count updates
- Focus management on modal open
- Escape key closes modals
- `focus-visible` outlines on all interactive elements
- `prefers-reduced-motion` respected for all transitions
- DHS Trusted Tester certification (June 2025)

---

## Projects

### make poetry.
A poetry composition tool for haiku and limericks with real-time syllable counting, dictionary API integration, and accessibility-first design. In progress.
[Demo](https://makepoetry.netlify.app/) · [GitHub](https://github.com/housemouse62/poetry-app)

### Everybody's Bodega
Full-stack inventory management app for a corner store. Browse and manage products by category with sorting, image support, and session-based admin authentication.
[Demo](https://bodega-inventory-production.up.railway.app/) · [GitHub](https://github.com/housemouse62/bodega-inventory)

### Build-A-CV
Interactive resume builder in React. Input your information, edit inline, and export a cleanly formatted CV.
[Demo](https://byocv.netlify.app/) · [GitHub](https://github.com/housemouse62/CV_Application)

### Baere Brewing Co.
Co-founded and operated a craft brewery in Denver for eleven years — operations, finance, TTB compliance, staff, branding, packaging design, and logistics. Sold in 2023.

### Andrea Moore Arts
Accessible visual content for Special Olympics International projects: icon library, public health timelines, disability health timelines, and educational slide decks for the IDD community.

### Diggable Designs
Convention banner and flyer design for a landscape and construction company.

---

## Author

Ryan Skeels — operations & program manager transitioning into software development. Based in Valencia, Spain (relocating to Denver, CO in July 2026).
