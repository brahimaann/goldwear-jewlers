# Technical Stack Analysis - Goldwear Jewelers

This document analyzes the target site's architecture and outlines the Next.js equivalent features.

## 1. Target Site Tech Stack
- **CMS / Host**: Weebly (revealed by class names such as `.wsite-menu-item`, `.wsite-section`, stylesheet URLs like `cdn2.editmysite.com`).
- **Styling**: Standard vanilla CSS stylesheet files (imported from editmysite CDN), using standard grid widths, absolute layouts for overlays, and raw classes.
- **Interactions**: Custom jQuery-based scripts handling toggles, navigation slide drawers, and menus.
- **Images**: Served from Weebly asset upload CDNs (`/uploads/9/4/6/1/...`).

## 2. Next.js Re-Engineering Stack
- **Framework**: Next.js 16 (App Router) + React 19 + TypeScript.
- **Styling**: Tailwind CSS v4 using standard utility classes. Modern oklch design tokens configured in `globals.css` match the colors exactly.
- **Icons**: Custom React SVGs in `src/components/icons.tsx` for custom elements.
- **Responsive Navigation**: React-based mobile hamburger drawer using standard state handlers.
- **Image Optimization**: Using standard Next.js `<Image />` or optimized `<img>` tags since it's a pixel-perfect clone. To ensure direct styling compatibility and bypass width constraints, standard `img` tags with layout-specific classes will be used.
- **Map Integration**: Standard responsive iframe embedded with styling configurations matching Weebly coordinates.
- **Asset Strategy**: All images are extracted and downloaded locally, hosted under `/images/` in the `/public` folder to ensure self-sufficiency.
