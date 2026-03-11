<div align="center">

# Portfolio Website

**An aerospace-themed engineering portfolio built with Next.js, React Three Fiber, and Tailwind CSS.**

[![Next.js](https://img.shields.io/badge/Next.js-16-000?style=for-the-badge&logo=nextdotjs)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=000)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=fff)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=fff)](https://typescriptlang.org)

</div>

---

## Overview

A personal portfolio site designed around an aerospace and aeronautical engineering aesthetic. Features interactive airfoil streamline visualizations, flip-style Solari boards, drifting SVG airplanes, and smooth scroll-driven animations.

## Highlights

- **Airfoil Streamlines** — Gottingen 386 airfoil with animated particle streamlines mapping to engineering skills
- **Solari Flip Board** — Retro split-flap display animation in the hero section
- **Drifting Airplanes** — Parallax SVG planes floating across the viewport
- **Scroll Animations** — Framer Motion driven fade, parallax, and reveal effects
- **Lazy Loading** — Suspense boundaries for heavy components to keep initial load fast

## Tech Stack

| Layer | Tech |
|-------|------|
| Framework | Next.js 16 (App Router) |
| UI | React 19, Tailwind CSS 4 |
| 3D / Graphics | React Three Fiber, Three.js, Drei |
| Animation | Framer Motion |
| Language | TypeScript |
| Analytics | Vercel Analytics, Speed Insights |
| Deployment | Vercel |

## Getting Started

```bash
# Clone
git clone https://github.com/Max11122006/Portfolio-Wesbite.git
cd Portfolio-Wesbite

# Install
npm install

# Dev server
npm run dev
```

Open [localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/             # Next.js App Router pages & layout
├── components/
│   ├── Hero.tsx             # Landing section with Solari board
│   ├── About.tsx            # About section
│   ├── Projects.tsx         # Project showcase
│   ├── Interactive3D.tsx    # Airfoil streamline skill visualization
│   ├── Skills.tsx           # Skills section
│   ├── Contact.tsx          # Contact form
│   ├── Navbar.tsx           # Navigation
│   ├── Footer.tsx           # Footer
│   ├── SolariBoard.tsx      # Flip-style display component
│   ├── BreadboardCard.tsx   # Circuit-board styled card
│   ├── AirplaneDrift.tsx    # Floating airplane parallax
│   └── MotionPrimitives.tsx # Reusable animation components
└── styles/          # Global styles & Tailwind config
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | Run ESLint |

---

<div align="center">
  <sub>Built with Next.js and deployed on Vercel.</sub>
</div>
