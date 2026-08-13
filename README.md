# Nexora Health Systems — Landing Site

A single-page marketing site for Nexora Health Systems, built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | Lint the project |

## Structure

```
app/
  layout.tsx        Root layout, fonts, metadata, skip-link
  page.tsx          Landing page composition
  globals.css       Tailwind layers + component classes
  privacy/page.tsx  Privacy Policy (DRAFT banner)
  terms/page.tsx    Terms of Use (DRAFT banner)
  careers/page.tsx  Careers
components/
  Header.tsx        Sticky nav with logo
  Hero.tsx          Tagline + HoMedi™ summary card
  HowItWorks.tsx    3-step explainer
  Trust.tsx         Trust & compliance cards
  Founder.tsx       Founder bio + photo placeholder
  Contact.tsx       Intake form (opens mailto, no backend)
  Footer.tsx        Legal details + links
  PageShell.tsx     Shared shell for legal/careers pages
public/
  logo.png          Nexora Health Systems logo
```

## Content rules

This is a pre-launch brochure site — all copy is factual. No fabricated stats,
testimonials, awards, "AI/intelligent" framing, or medical-outcome claims.
Use `HoMedi™` (never `HoMedi®`) and Indian English spelling. PAN/TAN must never
appear on the site.

## Brand colors

Defined in `tailwind.config.js`: `navy` (#173E5C), `teal` (#1f9e92, with
`teal-dark` #0d6e63 for accessible text), `leaf` (#43a55a). The
`bg-nexora-gradient` utility renders the teal→green brand gradient.
