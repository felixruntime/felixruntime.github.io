# Felix Runtime — Portfolio

Personal developer portfolio with a futuristic dark aesthetic, built with React, Vite, Tailwind CSS, and Framer Motion. Deployed to [felixruntime.github.io](https://felixruntime.github.io).

## Stack

- React 19 + TypeScript
- Vite 7
- Tailwind CSS v4
- Framer Motion
- GitHub Pages

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

```bash
npm run deploy
```

This builds the project and publishes `dist/` to the `gh-pages` branch.

Ensure your GitHub repository settings use the `gh-pages` branch as the Pages source (or root `/` if using user site).

## Project Structure

```
docs/           → SDD specs and design system
src/sections/   → page sections (one per spec)
src/data/       → static content (edit before launch)
.cursor/rules/  → Cursor Agent conventions
```

## Spec-Driven Development

1. Read `docs/specs/NNN-*.md` before implementing a section
2. Follow `docs/DESIGN.md` for visual decisions
3. Implement one spec per Agent session

See `docs/TASKS.md` for the full roadmap.

## License

MIT
