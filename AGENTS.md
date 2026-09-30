# Repository Guidelines

## Project Structure & Module Organization

This static Astro site keeps routes in `src/pages/`, reusable UI in `src/components/`, its shared shell in `src/layouts/`, styles in `src/styles/`, and project/service records in `src/data/site.ts`. Images and branding live in `public/`; source documents are at the repository root. `scripts/` contains asset-generation utilities. Dynamic detail routes are `proyectos/[slug].astro` and `soluciones/[slug].astro`.

## Business Context & Source of Truth

**Eficiencia Energética Aplicada S.A.S.** proposes energy and water solutions that reduce operating costs and environmental impact while preserving comfort and service continuity. Its named technical contact is **Ing. Jorge Enrique Bernal Trujillo**, Asesor en Eficiencia Energética: **+57 310 489 3193**, **jorgebernal1954@gmail.com**. The Spanish-language site addresses homes, hotels, hospitals, institutions, schools, and sports facilities, mainly in Colombia; one portfolio project is in Venezuela.

The nine solution areas are **solar water heating; heat pumps and dehumidification; photovoltaics; LED lighting; pool/jacuzzi heating; radiant floors and climate control; water savings and rain/greywater reuse; efficient cooking and appliances; and waste management, solar drying/distillation, and bioclimatic design**. Design starts with demand, temperature, schedules, location, and existing equipment, then sizes technology, storage, and backup. Solar thermal serves hot water below 60 °C and pools; heat pumps can supplement or independently heat water.

The brochure documents **18 projects from 1985–2013**: four hotels, four hospitals/clinics, four residential sites, four religious/educational institutions, and two pools. Three additional installations lack verified years and capacities. For each name, location, year, capacity, and photo, use `projects` and `supplementaryProjects` in `src/data/site.ts` and `public/images/projects/`. Portfolio dates do not establish the company's founding date or an installation's current status.

For business questions, consult `Brochure eea.pdf` and `eficiencia energética doméstica.doc` alongside `src/data/site.ts`; the latter is a transcription, not independent evidence. Attribute radiation, lifetime, COP, savings, and payback figures to the documents as conditional or historical estimates. Verify current regulations, prices, performance, availability, and company status before making present-day claims. Never invent missing facts.

## Build, Test, and Development Commands

- `npm ci`: install the exact dependencies recorded in `package-lock.json`.
- `npm run dev`: start Astro's local development server.
- `npm run build`: run `astro check`, generate `dist/`, and verify canonical URLs, metadata, JSON-LD, links, and sitemap.
- `npm run preview`: inspect the built site locally after a successful build.

No test framework, formatter, linter, or `npm test` script is configured.

## Coding Style & Naming Conventions

Use two-space indentation in Astro, TypeScript, and CSS. Name components in PascalCase (`ProjectCard.astro`) and slugs/images in kebab-case. Keep structured content in `src/data/site.ts`; write public copy in Spanish with accents.

## Testing Guidelines

Run `npm run build` before submitting. Its SEO check covers generated URLs, images, links, and metadata; also inspect changed routes at desktop and mobile widths. Document any future test framework and command here.

## Commit & Pull Request Guidelines

History uses short Spanish and English subjects without a fixed prefix. Write specific summaries, e.g. `Correct project capacity and image`. PRs should list affected routes, source-document changes, build results, linked issues when relevant, and screenshots for visual changes.

## Configuration & Generated Files

Commit `package.json` and `package-lock.json` together. Keep ignored `node_modules/`, `dist/`, `.astro/`, and `.env` files out of Git. The site URL is in `astro.config.mjs`.
