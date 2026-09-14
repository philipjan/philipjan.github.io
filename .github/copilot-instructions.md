# GitHub Copilot Instructions

This repository is a modern, minimalist portfolio template built with **Astro** and **Tailwind CSS v4**.

## Development Commands

```bash
npm run dev       # Start local development server (localhost:3000)
npm run build     # Build for production
npm run preview   # Preview the production build locally
```

No testing or linting framework is configured.

## Architecture Overview

The project follows a **configuration-driven, component-based architecture**:

- **Single Configuration File** (`src/config.ts`): All content and customization is centralized here. This exports a `siteConfig` object that all components read from
- **Component-based Layout** (`src/components/`): Seven independent Astro components (Header, Hero, About, Projects, Experience, Education, Footer)
- **Main Page** (`src/pages/index.astro`): Single-page layout that imports all components and the config
- **Styling** (`src/styles/global.css`): Minimal—uses Tailwind CSS v4 with the @tailwindcss/vite plugin

### Key Design Patterns

1. **Content via Config**: All portfolio content (name, skills, projects, experience, education, social links) is defined in `src/config.ts`. Components never hardcode content.

2. **Conditional Rendering**: If a section's data is removed from the config (e.g., set `projects: []` or omit it), that section is completely hidden from the site. This applies to Projects, Experience, and Education sections.

3. **Accent Color System**: A single `accentColor` hex value in the config is set as a CSS custom property and propagates throughout all components for consistent theming. Components access it via `siteConfig.accentColor` or the `--accent-color` CSS variable.

4. **Optional Social Links**: All social links in `siteConfig.social` are optional (email, linkedin, twitter, github). Components conditionally render links only if they exist.

## Working with Components

When modifying or creating components:

1. **Import the config**: All components should import `siteConfig` from `../config`
2. **Use only Tailwind utilities** for styling—no custom CSS needed in components
3. **Maintain semantic HTML** with proper heading hierarchy
4. **Use Tabler Icons for consistency**: If adding new icons, browse [tabler.io/icons](https://tabler.io/icons)
5. **Responsive design**: Follow the existing mobile-first approach with `sm:`, `md:`, `lg:` breakpoints

## Configuration Structure

The `siteConfig` object in `src/config.ts` has this shape:

```typescript
{
  name: string              // Your name
  title: string             // Job title
  description: string       // Site meta description
  accentColor: string       // Hex color for theme (#1d4ed8, etc)
  social: {
    email?: string
    linkedin?: string
    twitter?: string
    github?: string
  }
  aboutMe: string           // Bio paragraph
  skills: string[]          // Tech skills
  projects: Array<{
    name: string
    description: string
    link?: string           // Optional external link
    skills: string[]
  }>
  experience: Array<{
    company: string
    title: string
    dateRange: string
    bullets: string[]
  }>
  education: Array<{
    school: string
    degree: string
    dateRange: string
    achievements: string[]
  }>
}
```

## Project Setup Details

- **Framework**: Astro 5.12+
- **Styling**: Tailwind CSS v4 with @tailwindcss/vite plugin (configured in `astro.config.mjs`)
- **Language**: TypeScript for type-safe configuration
- **Fonts**: IBM Plex Mono (monospace) loaded from Google Fonts in `src/pages/index.astro`
- **Icons**: SVG icons from Tabler Icons library (embedded in components as JSX)
- **Deployment**: GitHub Pages via Actions (workflow in `.github/workflows/deploy.yml`) on `release` branch pushes

## Adding a New Section

To add a new portfolio section:

1. Create a new component in `src/components/` (use `.astro` format)
2. Add corresponding data to `siteConfig` in `src/config.ts`
3. Import and add the component to `src/pages/index.astro`
4. Make rendering conditional based on whether the config data exists
5. Use the same styling patterns as existing sections (grid layout, accent color bar, Tailwind utilities)

## Common Patterns in the Codebase

- **Grid Layouts**: Most sections use `grid grid-cols-1 lg:grid-cols-12` with `lg:col-span-4` for headings and `lg:col-span-8` for content
- **Accent Color Bars**: Visual dividers use `w-[75px] h-[5px] rounded-full` with `background-color: ${siteConfig.accentColor}`
- **Hover Effects**: Interactive elements use `transition-all duration-300` with `hover:` state changes
- **Typography Scale**: Responsive text with patterns like `text-3xl sm:text-4xl md:text-5xl xl:text-7xl`
- **Card Components**: Projects and experience/education cards use `bg-gray-50/white rounded-xl/lg border border-gray-200 p-4 sm:p-6 md:p-8`

## Important Notes

- No linting tools are configured—code should follow existing style conventions
- No testing framework is set up
- The site is fully static (no server-side rendering needed)
- Build output goes to the `dist/` folder
