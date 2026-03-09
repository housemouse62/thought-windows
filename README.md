# thought-windows

A personal portfolio website built to showcase professional experience and projects across web development, graphic design, and business operations — built during a career transition into software development.

**Live site:** _(add your URL here)_

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
- Dedicated Accessibility section documenting intentional a11y decisions
- CV and About sections
- Keyboard navigable throughout
- Respects `prefers-reduced-motion`
- Skip-to-main link for screen reader users

---

## Tech Stack

| Tool | Purpose |
|---|---|
| React 19 | UI |
| Vite | Build tool |
| React Router 7 | Routing |
| Plain CSS | Styling (no component library) |

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
│   ├── CVSection.jsx     # Resume / work history
│   ├── AboutSection.jsx  # Personal bio
│   ├── AccessibilitySection.jsx  # a11y decisions and rationale
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

---

## Selected Projects

### Build-A-CV
Interactive resume builder in React. Add sections, edit inline, and export a formatted CV.
[Demo](https://byocv.netlify.app/) · [GitHub](https://github.com/housemouse62/CV_Application)

### Poetry App
A writing tool for composing and organizing poetry. In progress.
[Demo](https://makepoetry.netlify.app/haiku) · [GitHub](https://github.com/housemouse62/poetry-app)

### Baere Brewing Co.
Co-founded and operated a craft brewery in Denver for eleven years — handling operations, finance, TTB compliance, staff, branding, and logistics.

### Diggable Designs
Flyer and banner design for a landscape and construction company. Promotional materials for real-world use.

---

## Author

Ryan Skeels — career-transitioning developer based in Denver, CO.
