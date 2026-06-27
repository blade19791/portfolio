# Portfolio — Ciech Makoi Makuei

A personal portfolio website built with React, featuring a dark Catppuccin Mocha theme, responsive two-column layout, and smooth scroll animations.

## Tech Stack

- **React** — component-based UI
- **Vite** — fast dev server and build tool
- **CSS** — plain CSS with custom properties (no frameworks)
- **Google Fonts** — Inter typeface

## Features

- Two-column layout with sticky sidebar (collapses to top nav on mobile)
- Typing animation cycling through roles
- Active nav link highlighting on scroll (IntersectionObserver)
- Fade-in section animations on scroll
- Project cards with hover lift and sample images
- Skill cards with inline technology icons
- Responsive design (mobile, tablet, desktop)
- Keyboard navigable with visible focus indicators
- Respects `prefers-reduced-motion`

## Getting Started

```sh
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build for Production

```sh
npm run build
```

Output is in the `dist/` directory. Serve it with any static host.

## Lint

```sh
npm run lint
```

## Project Structure

```
src/
├── components/
│   ├── Sidebar.jsx      — Sticky sidebar with name, nav, socials
│   ├── About.jsx        — About Me section
│   ├── Skills.jsx       — Technologies grouped by category
│   ├── Learning.jsx     — Currently learning topics + stats
│   ├── Projects.jsx     — Project cards with images
│   ├── Education.jsx    — Education details
│   ├── Contact.jsx      — Contact links and footer
│   └── TechIcon.jsx     — SVG icons for technologies
├── hooks/
│   └── useActiveSection.js  — Tracks visible section via IntersectionObserver
├── App.jsx              — Main layout (sidebar + content)
├── App.css              — Layout, section, and animation styles
├── index.css            — CSS custom properties, reset, typography
└── main.jsx             — React entry point
```

## Theming

All colors are defined as CSS custom properties in `:root` (`src/index.css`). The current theme is **Catppuccin Mocha**. To change themes, update the CSS variable values.

## Live Site

[portfolio-ciech.vercel.app](https://portfolio-ciech.vercel.app)

## Colors

| Role       | Color    | Hex       |
|------------|----------|-----------|
| Background | base     | `#1e1e2e` |
| Cards      | surface0 | `#313244` |
| Text       | text     | `#cdd6f4` |
| Subtext    | subtext0 | `#a6adc8` |
| Accent     | blue     | `#89b4fa` |
