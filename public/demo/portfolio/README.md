# Julian Cross — Modern Editorial Portfolio Website

An ultra-modern, high-contrast editorial portfolio website engineered with clean semantic HTML5, modern CSS3, and performant vanilla JavaScript. Inspired by modern brutalist typography, luxury editorial layouts, and fluid micro-interactions.

---

## Key Features

- **High-Contrast Theming**:
  - **Light Sections** (`#F4F3EE`): Hero, Services, Testimonials, Contact, and Big CTA Footer.
  - **Dark Sections** (`#0A0A0C`): Brand Marquee / About, Selected Works Bento Grid, and Stories / Insights.
- **Hero Display Typography & 3D Tilt Card**:
  - Huge condensed uppercase headline (`JULIAN CROSS`) using Google Fonts `Oswald`.
  - Floating tilted portrait card overlapping the headline with realistic drop shadow and 3D perspective mouse-tilt physics.
  - Social proof avatar stack with live star ratings and verified founder count.
- **Infinite Brand Marquee**:
  - Continuous CSS ticker displaying top technology partners (Figma, Linear, Stripe, Vercel, OpenAI, Raycast).
- **Interactive Bento Showcase**:
  - Dynamic category filtering (`All`, `Branding`, `UI/UX`, `Packaging`, `Print`).
  - Interactive project detail modal with case study breakdowns, deliverables, client info, and metrics.
- **Services Matrix**:
  - 4 distinct service cards with hover micro-animations and deliverables chips.
- **Client Testimonials**:
  - 5 client review cards in a 2+3 grid with verified executive avatars and roles.
- **Editorial Stories & Insights**:
  - Article cards with reading times, tags, and interactive story reader modal.
- **Functional Contact Section**:
  - 1-click email copy with instant toast confirmation.
  - Interactive inquiry form with interactive budget chips, service dropdown, validation, and animated toast feedback.
- **Footer**:
  - Giant `SHAPE WHAT'S NEXT` call to action.
  - Live ticking San Francisco local time clock.
  - Back to top smooth scroll trigger.

---

## File Structure

```
portfolio/
├── index.html        # Complete semantic HTML structure
├── styles.css        # Responsive CSS styling & animations
├── main.js           # Interactive functionality (3D tilt, modals, filters, clock, toast)
└── README.md         # Documentation and customization guide
```

---

## Quick Customization Guide

1. **Change Name / Logo**:
   - In `index.html`, search for `JULIAN CROSS` and replace with your desired brand or persona name.
2. **Update Hero Portrait**:
   - In `index.html`, find `.hero-portrait-img` and update the `src` attribute with your portrait image.
3. **Add or Modify Projects**:
   - In `index.html`, edit the `<article class="bento-card">` elements.
   - In `main.js`, update the `projectData` dictionary to customize the case study title, client, deliverables, and description.
4. **Update Contact Info**:
   - In `index.html`, search for `julian@cross.design` and `+1 (415) 890-3291`.
   - In `main.js`, update the clipboard copy string inside `copyEmailBtn`.
