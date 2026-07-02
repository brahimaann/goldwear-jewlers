# Goldwear Jewelers - Digital Transformation & Rebuild Walkthrough

A luxury-class editorial web platform designed and built for **Goldwear Jewelers** in Maple Grove, MN. This document outlines the design decisions, content architecture, search optimization suite, and technical specifications implemented to deliver a premium user experience.

---

## 1. Design Philosophy & Luxury Aesthetics

The redesign transitions the brand from a standard Weebly layout into a premium, magazine-style editorial experience inspired by high-end jewelry curators like *Beladora*. 

### Typography
- **Primary Serif Font**: `Cormorant Garamond` (loaded via Google Fonts) is utilized for large section headings, editorial statements, and title cards to establish a classic, premium look.
- **Secondary Sans-Serif Font**: `Tenor Sans` serves as the clean, highly readable body copy face, and is tracked out for metadata labels and small action headers.

### Visual System
- **Colors**: Set on a luxury palette of pure white (`#ffffff`), soft off-white background layouts (`#f6f6f6`), deep charcoal text (`#0a0a0a`), and elegant warm gold accents (`#b89d5a`).
- **Geometric Rigor**: Removed all border-radii globally (`rounded-none` / `radius: 0px`) to achieve sharp borders matching high-end printed catalogs.
- **Cinematic Letterbox Framing**: Standardized all product and service imagery to cinematic widescreen dimensions (`aspect-[16/7]` or `aspect-[16/10]`), tightly cropped on craftsmanship, precision tools, and metallic textures.
- **Monochromatic Duotone Hover Transitions**: Images default to a desaturated, high-contrast grayscale and fade smoothly into full, warm color on cursor hover (`grayscale hover:grayscale-0 transition duration-700`).

---

## 2. Spatial Composition & Alternating Layouts

To avoid the predictable, repeating grid layout common to template-driven sites, we implemented custom spatial overlays:
- **Asymmetric Alternation**: Staggered column arrays alternate visual layouts (`Image Left / Text Right` on odd rows, and `Image Right / Text Left` on even rows) on both the **Jewelry Repair** and **Watch Services** pages.
- **Layered Depth Overlays**: The Homepage About section features offset layouts where white text cards sit on top of large workshop photos, overlapping their horizontal boundary by exactly `48px` to form deep visual layers.

---

## 3. Page Topology & Site Architecture

The website comprises 9 statically pre-rendered routes, isolating search intent and providing clean landing channels:

1. **Homepage (`/`)**:
   - Asymmetric split-hero banner pairing store credentials with high-magnification store front imagery.
   - Large brand statement quote.
   - Staggered About and History rows featuring Ron, David, and Tom's local heritage story.
   - Clean, three-column "Voices of our Clients" Yelp and Google Reviews testimonials section.
2. **Services (`/services`)**:
   - Visual category index routing clients to repair and maintenance categories.
3. **Custom Design (`/custom-design`) [New Route]**:
   - Comprehensive workflow guide detailing the custom ring design pipeline (Vision Consultation, 3D CAD modeling, casting, setting).
   - Dedicated indexable catalog sections showcasing designer collections from **Allison-Kaufman**, **Stuller**, **Facet Barcelona**, and **Rego**.
4. **Jewelry Repair (`/jewelry-repair`)**:
   - Horizontal staggered catalog detailing ring sizing, prong re-tipping, gemstone setting, prong rebuilding, chain repairs, and bracelet restringing.
5. **Watch Services (`/watch-services`)**:
   - Alternating block catalog detailing battery changes (with senior discount highlights), band adjustments, and crystal/pin replacements.
6. **Contact & Location (`/contact-us`)**:
   - Integrated store location details (13689 Grove Drive), hours table, and telephone lines.
   - Client-validated message form (isolated in a client component to keep page speed high).
   - Responsive Google Maps iframe.

---

## 4. Local SEO Optimization Suite

To capture high-intent organic local search pack traffic in Maple Grove and the Northwest Twin Cities metro, the platform deploys the following structures:

### Structured Schema Markup
- Injected `LocalBusiness` and `JewelryStore` JSON-LD schema into the site's layout head. This gives search crawlers explicit coordinates, address markers, telephone numbers, and operating hours.

### Target Keyword Matrix & Metadata
Page titles and meta descriptions have been formatted strictly as `[Primary Keyword] | [City, MN] | [Brand]`:

- **Homepage**: `Jewelry Store & Custom Designs | Maple Grove, MN | Goldwear Jewelers`
- **Services Index**: `Jewelry & Watch Repair Services | Maple Grove, MN | Goldwear Jewelers`
- **Custom Design**: `Custom Engagement Rings & Jewelry Design | Maple Grove, MN | Goldwear Jewelers`
- **Jewelry Repair**: `Jewelry Repair & Ring Resizing | Maple Grove, MN | Goldwear Jewelers`
- **Watch Services**: `Watch Repair & Battery Replacement | Maple Grove, MN | Goldwear Jewelers`
- **Contact & Map**: `Location, Hours & Contact | Maple Grove, MN | Goldwear Jewelers`

### Image Optimization
- Set descriptive alt-tags embedded with local search keywords (e.g., `alt="Ring Sizing - Jewelry Repair Maple Grove MN"`).

### Backward-Compatible Redirects
- Handled legacy Weebly links by writing permanent redirects inside `next.config.ts` (e.g., `/contact-us.html` redirects automatically to `/contact-us`), protecting page ranking history.

---

## 5. Technical Stack & Quality Assurance

- **Framework**: Next.js 16 (App Router) using React 19 and Tailwind CSS v4.
- **Code Compilation**: Verified with typescript compiling and eslint checks (`npm run check`), generating a fast, light static production package with **zero warnings and zero type-errors**.
- **Responsive Layouts**: Fully adaptive layouts scaling from mobile screens (`390px` viewports) up to widescreen desktop layouts (`1440px`).
- **Source Control**: Clean, template-free repository pushed directly to the remote repository.
