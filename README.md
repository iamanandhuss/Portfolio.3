# Anandhu S S — Developer Portfolio

A personal portfolio for full-stack developer Anandhu S S. The site presents selected projects, technical skills, experience, education, and contact links in a responsive, editorial-style interface.

## Built with

- React 19
- Vite 8
- Tailwind CSS 4
- Framer Motion
- Lucide React

## Getting started

### Requirements

- Node.js 20.19+ or 22.12+
- npm

### Install and run locally

```bash
npm install
npm run dev
```

Vite prints the local development URL in the terminal when the server is ready.

## Available commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server with hot-module replacement. |
| `npm run build` | Create a production build in `dist/`. |
| `npm run preview` | Preview the production build locally. Run `npm run build` first. |
| `npm run lint` | Run Oxlint against the project. |

## Project structure

```text
src/
├── assets/       # Images and other imported assets
├── components/   # Portfolio sections and reusable UI
├── data/         # Project, skill, and experience content
├── App.jsx       # Page composition
├── index.css     # Global styles
└── main.jsx      # Application entry point
public/           # Static files served from the site root
```

## Updating portfolio content

- Edit `src/data/projects.js` to update featured and additional projects.
- Edit `src/data/skills.js` to change the listed skills.
- Edit `src/data/experience.js` to update experience and education details.
- Update the relevant component in `src/components/` to change a section's layout or copy.
- Add imported images to `src/assets/`, or static files to `public/`.

## Production build

```bash
npm run build
npm run preview
```

The optimized site is generated in `dist/`. Deploy that directory using a static hosting provider that supports single-page Vite applications.
