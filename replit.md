# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Structure

```text
artifacts-monorepo/
├── artifacts/              # Deployable applications
│   ├── api-server/         # Express API server
│   └── meloghrano-cafe/    # Meloghrano Cafe website (React + Vite)
├── lib/                    # Shared libraries
│   ├── api-spec/           # OpenAPI spec + Orval codegen config
│   ├── api-client-react/   # Generated React Query hooks
│   ├── api-zod/            # Generated Zod schemas from OpenAPI
│   └── db/                 # Drizzle ORM schema + DB connection
├── scripts/                # Utility scripts (single workspace package)
│   └── src/                # Individual .ts scripts
├── pnpm-workspace.yaml     # pnpm workspace
├── tsconfig.base.json      # Shared TS options
├── tsconfig.json           # Root TS project references
└── package.json            # Root package with hoisted devDeps
```

## Meloghrano Cafe Website

A premium vegetarian Italian cafe website at `artifacts/meloghrano-cafe`.

### Features
- **Hero Section**: Animated 3D-style gelato cone with orbiting food items, floating particles, gradient text, glassmorphism badge, animated CTAs, mouse-parallax effect
- **About Section**: Real Unsplash images in a collage layout, feature grid cards
- **Menu Section**: 5 category tabs, 20 items with real food images, 3D hover tilt effect, animated transitions
- **Customer Favorites**: Horizontal scroll carousel, glowing animated badges, real images, 3D card hover
- **Reviews Section**: Auto-sliding grid carousel (3 per page), paginated with dots + arrows
- **Gallery**: Masonry layout with real cafe/food images, lightbox modal on click
- **Reservation**: Glassmorphism form with background image overlay, time slots, toast success
- **Contact**: Map embed (Banashankari, Bangalore) + contact info
- **Footer**: Dark footer with social icons

### Design System
- **Colors**: Soft Tomato Red (`#E26D5C`), Sage Green (`#8BA888`), Peach (`#F4A261`), Warm Cream (`#FFFBF5`)
- **Typography**: Playfair Display (headings), Inter (body)
- **Animations**: Framer Motion throughout — scroll triggers, stagger, hover 3D, floating particles
- **Glassmorphism**: `.glass` and `.glass-dark` utility classes
- **Images**: Unsplash (no API key required, with onError fallbacks)

### Key Dependencies
- `framer-motion` — animations
- `@react-three/fiber`, `@react-three/drei`, `three` — 3D (installed, optional)
- `lucide-react` — icons
- `tailwindcss` — styling

## TypeScript & Composite Projects

Every package extends `tsconfig.base.json` which sets `composite: true`. The root `tsconfig.json` lists all packages as project references.

## Root Scripts

- `pnpm run build` — runs `typecheck` first, then recursively runs `build` in all packages
- `pnpm run typecheck` — runs `tsc --build --emitDeclarationOnly` using project references
