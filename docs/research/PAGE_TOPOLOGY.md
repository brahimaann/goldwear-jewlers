# Page Topology - Goldwear Jewelers

This document maps the page layout structures, paths, and content architecture.

## 1. Global Components

### Header (Navigation Bar)
- **Files**: `src/components/Header.tsx`, `src/components/MobileMenu.tsx`
- **Details**:
  - Logo on the left (links to `/`).
  - Navigation links in the center-right: `HOME`, `SERVICES` (dropdown), `CONTACT US`.
  - Hamburger menu for viewports `< 992px`.
  - Height is fixed at `84px`, background is white (`#FFFFFF`).

### Footer
- **Files**: `src/components/Footer.tsx`
- **Details**:
  - Contains copyright: `"© GOLDWEAR JEWELERS. ALL RIGHTS RESERVED."`
  - Links to site pages.

---

## 2. Route & Section Map

### Route 1: Home (`/` or `/index.html` redirects)
- **Template File**: `src/app/page.tsx`
- **Sections**:
  1. **Hero Banner**:
     - Large image/background banner (`rgb(50, 50, 50)`).
     - Heading: `"GOLDWEAR JEWELERS"`
     - Subheading: `"Premium Jewelry Repair, Watch Services & Battery Replacement in Coon Rapids, MN"`
  2. **Store Image & Intro**:
     - Columns layout: Left column contains store image; Right column contains `"About Us"` and `"Who We Are"` text introduction.
  3. **History / Secondary Content**:
     - Full width description: `"Our History"` section detailing services, experience, and commitment.

### Route 2: Services (`/services`)
- **Template File**: `src/app/services/page.tsx`
- **Sections**:
  1. **Header Hero**: Small top banner with heading `"SERVICES"`.
  2. **Grid Showcase**:
     - Two prominent columns / large cards:
       - **Jewelry Repair**: With repair graphic, summary list, and link to `/jewelry-repair`.
       - **Watch Services**: With watch repair graphic, summary list, and link to `/watch-services`.

### Route 3: Jewelry Repair (`/jewelry-repair`)
- **Template File**: `src/app/jewelry-repair/page.tsx`
- **Sections**:
  1. **Header Hero**: Banner with heading `"JEWELRY REPAIR"`.
  2. **Repair Services Grid**:
     - Grid layout detailing 8 services. Each service contains: title, small icon/image, and descriptive text.
     - Services:
       - Ring Sizing
       - Ring Re-Tipping
       - Chain Break / Repair
       - Ring Break / Repair
       - Replacement Stones
       - Replacement Clasp
       - Bracelet Repair
       - Restringing

### Route 4: Watch Services (`/watch-services`)
- **Template File**: `src/app/watch-services/page.tsx`
- **Sections**:
  1. **Header Hero**: Banner with heading `"WATCH SERVICES"`.
  2. **Watch Services Grid**:
     - Grid layout detailing 6 services.
     - Services:
       - Watch Batteries (standard rates, senior discounts)
       - Watch Adjustment
       - Replacement Pin
       - Reset Hands/Markers
       - Replacement Buckle/Clasp
       - New Watch Band

### Route 5: Contact Us (`/contact-us`)
- **Template File**: `src/app/contact-us/page.tsx`
- **Sections**:
  1. **Header Hero**: Banner with heading `"CONTACT US"`.
  2. **Contact Section Layout**:
     - Left Column: Address, Telephone, Email, and Hours of operation.
     - Right Column: Responsive Google Map iframe.
  3. **Contact Feedback Form**:
     - Clean, labeled form fields: First Name, Last Name, Email, and Message.
     - Submit Button.
