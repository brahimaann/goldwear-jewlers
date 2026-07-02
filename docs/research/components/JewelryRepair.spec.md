# Jewelry Repair Page Specification - Goldwear Jewelers

## Overview
- **Target File**: `src/app/jewelry-repair/page.tsx`
- **Interaction Model**: Static service grid with images and details

---

## 1. Header Banner
- background-color: `rgb(50, 50, 50)`
- padding: `60px 20px`
- text-align: `center`
- Title (H1, `Montserrat`, large bold white text: `"Jewelry Repair"`)
- Subtitle (H2 / paragraph, `Montserrat`, medium white text)

---

## 2. Repair Offerings Grid
- display: `grid`
- grid-template-columns: `1fr 1fr` (two columns, collapses on mobile)
- max-width: `912px`
- gap: `32px`
- Each service tile contains:
  - Title (H3, `Quattrocento`, text-[#484848])
  - Description (paragraph, `Quattrocento`, text-[#8E8E8E])
  - Accompanying local image on top or side (`/images/ring-sizing.jpg`, etc.)
