# Contact Us Page Specification - Goldwear Jewelers

## Overview
- **Target File**: `src/app/contact-us/page.tsx`
- **Interaction Model**: Text input forms, Google Maps navigation

---

## 1. Header Banner
- background-color: `rgb(50, 50, 50)`
- padding: `60px 20px`
- text-align: `center`
- Title (H1, `Montserrat`, large bold white text: `"Our Location, Hours, and Contact Information"`)

---

## 2. Information Block (Two Columns)
- display: `grid`
- grid-template-columns: `1fr 1fr` (collapses on mobile)
- max-width: `912px`
- gap: `40px`

### Left Column: Shop Info & Hours
- Address: `We are located at 13689 Grove Drive, Maple Grove, MN 55311`
- Telephone: `(763) 420-8060`
- Email: `goldwearjewelers@gmail.com`
- Hours:
  - Tuesday - Saturday: 10:00 to 5:00
  - Sundays & Mondays: Closed (starting April 26th)

### Right Column: Embedded Map
- iframe: Google Maps embed using address `"13689 Grove Drive, Maple Grove, MN 55311"`
- width: `100%`, height: `300px` (or auto scaling)

---

## 3. Contact Form
- Fields:
  - First Name
  - Last Name
  - Email (required)
  - Message / Comment (required)
- Submit button matching the blue style of design tokens (`rgb(91, 114, 220)`).
