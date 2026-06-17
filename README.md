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

Deploy is automated via GitHub Actions on every push to `main`.

1. Push to `main` — workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds and publishes `dist/`
2. Site live at [https://felixruntime.github.io](https://felixruntime.github.io)

Manual deploy (optional, uses `gh-pages` branch):

```bash
npm run deploy
```

Repository Settings → Pages → Source must be **GitHub Actions** (configured automatically).

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
