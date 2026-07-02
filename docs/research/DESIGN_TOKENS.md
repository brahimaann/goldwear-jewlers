# Design Tokens - Goldwear Jewelers

This document summarizes the typography, color system, and spacing patterns extracted from the live `goldwearjewelers.com` website.

## 1. Typography

### Font Families
- **Logo Text**: `Raleway` (system fallback: sans-serif)
- **Hero / Main Title**: `Montserrat` (system fallback: sans-serif)
- **Body / Main Text**: `Quattrocento` (system fallback: serif)
- **Navigation Links**: `Roboto` (system fallback: sans-serif)

### Headings
- **Hero Title**:
  - Font: `Montserrat`
  - Size: `49px` (3.06rem)
  - Weight: `700` (Bold)
  - Color: `rgb(255, 255, 255)`
- **Hero Subtitle**:
  - Font: `Montserrat`
  - Size: `20px` (1.25rem)
  - Weight: `400`
  - Color: `rgb(255, 255, 255)`
  - Line Height: `30px`
- **Section Headings (H2)**:
  - Font: `Quattrocento`
  - Size: `25.5px` (1.59rem)
  - Weight: `400`
  - Color: `rgb(72, 72, 72)`
  - Alignment: Centered

### Body Text
- **Paragraphs / Descriptions**:
  - Font: `Quattrocento`
  - Size: `15px` (0.93rem)
  - Weight: `400`
  - Color: `rgb(142, 142, 142)`
  - Line Height: `22.5px`

### Navigation Links
- **Desktop Nav Menu**:
  - Font: `Roboto`
  - Size: `12px` (0.75rem)
  - Weight: `700`
  - Letter Spacing: `3px`
  - Text Transform: `uppercase`
  - Color: `rgb(142, 142, 142)` (Inactive) | `rgb(72, 72, 72)` (Hover/Active)

---

## 2. Color System

| Token Name | Computed RGB Value | Hex Code | Usage |
| :--- | :--- | :--- | :--- |
| Background | `rgb(249, 249, 249)` | `#F9F9F9` | Main page body background |
| Header BG | `rgb(255, 255, 255)` | `#FFFFFF` | Navigation bar background |
| Hero BG | `rgb(50, 50, 50)` | `#323232` | Dark hero banner background |
| Accent Blue | `rgb(91, 114, 220)` | `#5B72DC` | Interaction highlight, active states, text links |
| Primary Text | `rgb(72, 72, 72)` | `#484848` | Section titles, header active link, form labels |
| Secondary Text| `rgb(142, 142, 142)` | `#8E8E8E` | General text, descriptions, logo subtitle |
| Border | `rgb(220, 220, 220)` | `#DCDCDC` | Divider borders, input fields |

---

## 3. Spacing & Layout Tokens
- **Container Max-Width**: `912px` on desktop layouts (centered via margin auto).
- **Header Height**: `84px`.
- **Responsive Breakpoints**:
  - Desktop: `1024px+`
  - Tablet/Mobile transition (hamburger menu activation): `992px`
  - Mobile: Under `992px`
