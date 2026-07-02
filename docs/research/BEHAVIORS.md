# Interaction & Behavior Specification - Goldwear Jewelers

This document maps all the dynamics, triggers, and state transitions observed on the original site.

## 1. Desktop Navigation Dropdown
- **Target Item**: Nav Link `SERVICES`
- **Trigger**: Mouse hover (`mouseenter` / `mouseleave`)
- **Behavior**:
  - Displays a dropdown containing:
    - `Jewelry Repair`
    - `Watch Services`
  - Positioned absolutely below the header bar within a fixed layout container (`#wsite-menus` absolute position overlay).
  - Transitions smoothly between `opacity: 0; visibility: hidden` to `opacity: 1; visibility: visible` with a CSS transition.

## 2. Mobile Drawer Navigation
- **Trigger Breakpoint**: `992px` (screen width)
- **Controls**:
  - Hamburger menu icon button toggles the menu.
  - Hamburger icon changes to a close icon (`X`) when open.
- **Behavior**:
  - Slides a full-height drawer panel in from the side (covering the left or right part of the screen).
  - Main nav items slide in with a stagger fade animation.
  - Submenus (under Services) slide forward, replacing the main items list with a "Back" button to return to the top-level list.

## 3. Image Hover Animations
- **Target Items**: Services Cards on `/services.html` (Jewelry Repair and Watch Services cards).
- **Trigger**: Hover over cards.
- **Behavior**:
  - Overlay border or text shifts color.
  - Core image slightly scales up (e.g. `transform: scale(1.03)` with `transition: transform 0.3s ease`).

## 4. Google Maps Embed
- **Target Item**: Map container on `/contact-us.html`
- **Location**: Enclosed inside a responsive container that scales with page width.
- **Coordinates**: `45.1027140, -93.4548696`
- **Embed Source**: Standard iframe embedding a responsive Google Map centering their retail location in Coon Rapids, MN.

## 5. Contact Form Validation & State
- **Target Fields**:
  - First Name
  - Last Name
  - Email (required)
  - Comment/Message (required)
- **Validation Actions**:
  - Client-side checks require non-empty fields for required inputs.
  - Standard focus outlines change from default borders to standard focus states.
