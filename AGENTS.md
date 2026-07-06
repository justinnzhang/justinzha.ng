# Repository Guidelines

## Project Structure & Module Organization

This is a Next.js 16 App Router site written in TypeScript and React. Routes, layouts, metadata, and global styles live in `src/app/`; blog entries are MDX files under `src/app/blog/(blog-pages)/`. Reusable UI belongs in `src/components/`, with feature-specific components grouped in named directories and shared primitives in `src/components/ui/`. Put hooks in `src/hooks/`, general helpers in `src/lib/` or `src/utils/`, constants in `src/constants/`, and shared declarations in `src/types/`. Static files belong in `public/`, especially `public/static/` for site imagery.

## Build, Test, and Development Commands

Use Bun; `bun.lock` is the dependency lockfile. Node 22.9.0 is specified in `.nvmrc`.

- `bun install` installs dependencies without replacing the lockfile format.
- `bun run dev` starts the Turbopack development server.
- `bun run build` creates a production build and catches Next.js integration errors.
- `bun run start` serves the completed production build.
- `bun run typecheck` performs strict TypeScript checking.
- `bun run lint` reports Biome lint violations.
- `bun run check` checks formatting, lint rules, and import organization.
- `bun run format` applies Biome formatting fixes.

## Coding Style & Naming Conventions

Follow the repository's Biome configuration: tabs, semicolons, single quotes, and organized imports. TypeScript runs in strict mode; avoid `any` and keep public props and helper parameters explicitly typed. Use PascalCase for React components and component files (`ThemeToggle.tsx`), `useCamelCase` for hooks, camelCase for functions, and uppercase names for shared constants. Prefer the `@/` alias for imports from `src/`. Keep route-specific content near its route and export reusable modules through local `index.ts` files.

Build page and container responsiveness with Tailwind container queries, not viewport media-query variants. Mark the page or container root with a named `@container/<name>` utility and use named descendant variants such as `@min-[40rem]/<name>:`. Remember that a container cannot query itself, so responsive styles belong on its descendants. Reserve viewport variants such as `sm:` and `md:` for behavior that genuinely depends on the viewport rather than the component's available space.

## Testing Guidelines

No automated test framework or coverage threshold is currently configured. Before submitting changes, run `bun run typecheck`, `bun run check`, and `bun run build`. Manually verify affected routes at relevant responsive sizes and in both light and dark themes. If adding tests, colocate them as `*.test.ts` or `*.test.tsx` and add the runner command to `package.json`.

## Commit & Pull Request Guidelines

Recent commits use short, imperative summaries such as `Update Resume Link` and `Upgrade to Next 16 (#14)`. Keep each commit focused and describe the user-visible result. Pull requests should include a concise summary, validation commands run, linked issue when applicable, and before/after screenshots for visual changes. Call out new environment variables, dependencies, or deployment implications explicitly; never commit secrets or local `.env` files.
