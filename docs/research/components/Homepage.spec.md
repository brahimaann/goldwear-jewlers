# Homepage Specification - Goldwear Jewelers

## Overview
- **Target File**: `src/app/page.tsx`
- **Screenshot**: `docs/design-references/desktop.png`
- **Interaction Model**: Static display, standard links

---

## 1. Hero Section

### DOM Structure
- Outer container (`section` with dark background `#323232` / `rgb(50,50,50)`)
  - Inner container (centered max-width `912px`, padding)
    - Heading (H1, `Montserrat`, large bold white text)
    - Subtitle (H2 / paragraph, `Montserrat`, medium white text)
    - Tagline (paragraph, `Raleway` / `Montserrat`, small white text)

### Computed Styles (getComputedStyle)
- **Container**:
  - background-color: `rgb(50, 50, 50)`
  - padding: `80px 20px`
  - text-align: `center`
- **Title (H1)**:
  - font-family: `"Montserrat", sans-serif`
  - font-size: `49px`
  - font-weight: `700`
  - color: `rgb(255, 255, 255)`
  - letter-spacing: `1px`
  - margin-bottom: `16px`
- **Subtitle**:
  - font-family: `"Montserrat", sans-serif`
  - font-size: `20px`
  - font-weight: `400`
  - color: `rgb(255, 255, 255)`
  - line-height: `30px`
  - margin-bottom: `8px`
- **Tagline**:
  - font-family: `"Raleway", sans-serif`
  - font-size: `14px`
  - font-weight: `400`
  - color: `rgb(200, 200, 200)`
  - letter-spacing: `2px`
  - text-transform: `uppercase`

---

## 2. Intro Section (Two Columns)

### DOM Structure
- Container (centered max-width `912px`, padding `60px 20px`, flex/grid columns)
  - Left Column (Store Front Image)
  - Right Column (Text Box)
    - Heading H2 (Quattrocento)
    - Paragraphs (Quattrocento, small, gray)

### Computed Styles
- **Container Grid**:
  - display: `grid`
  - grid-template-columns: `1fr 1fr` (stacks on mobile `< 768px`)
  - gap: `40px`
  - align-items: `center`
- **Image**:
  - width: `100%`
  - border-radius: `4px`
  - object-fit: `cover`
- **Heading (H2)**:
  - font-family: `"Quattrocento", serif`
  - font-size: `24px`
  - font-weight: `400`
  - color: `rgb(72, 72, 72)`
  - margin-bottom: `20px`
- **Body Text**:
  - font-family: `"Quattrocento", serif`
  - font-size: `15px`
  - font-weight: `400`
  - color: `rgb(142, 142, 142)`
  - line-height: `22.5px`
  - margin-bottom: `16px`

---

## 3. History Section (Full Width)

### DOM Structure
- Outer container (`section` with light background `#f9f9f9`)
  - Inner container (centered max-width `912px`, padding `40px 20px` with divider border)
    - Heading H2 (Quattrocento, centered)
    - Paragraph (Quattrocento, centered, gray)

### Computed Styles
- **Inner Container**:
  - border-top: `1px solid rgb(220, 220, 220)`
  - padding-top: `40px`
  - text-align: `center`
- **Heading**:
  - font-family: `"Quattrocento", serif`
  - font-size: `24px`
  - font-weight: `400`
  - color: `rgb(72, 72, 72)`
  - margin-bottom: `20px`
- **Body Text**:
  - font-family: `"Quattrocento", serif`
  - font-size: `15px`
  - font-weight: `400`
  - color: `rgb(142, 142, 142)`
  - line-height: `22.5px`
  - max-width: `700px`
  - margin: `0 auto`
