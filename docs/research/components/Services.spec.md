# Services Page Specification - Goldwear Jewelers

## Overview
- **Target File**: `src/app/services/page.tsx`
- **Interaction Model**: Static card grid pointing to specific categories

---

## 1. Header Banner
- background-color: `rgb(50, 50, 50)`
- padding: `60px 20px`
- text-align: `center`
- Title (H1, `Montserrat`, large bold white text: `"Services"`)
- Subtitle (H2 / paragraph, `Montserrat`, medium white text: `"We offer quality repair and services for jewelry and watches alike."`)

---

## 2. Services Cards Grid
- display: `grid`
- grid-template-columns: `1fr 1fr` (stacks on mobile)
- max-width: `912px`
- gap: `40px`
- Card background: `#ffffff`
- Image behavior: Hover animation scaling image slightly.
- Link: Navigation button centered at the bottom of the card with blue accent highlight.
- Font family for labels and text: `Quattrocento`.
