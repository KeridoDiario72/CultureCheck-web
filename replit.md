# CultureCheck Landing Page

## Overview
CultureCheck is a landing page for a cultural activities platform. It features a bilingual (ES/EN) interface with sections for users, creative centers, and collaborators.

## Architecture
- **Frontend**: React + Vite + Tailwind CSS + Framer Motion
- **Backend**: Express.js (minimal, mainly serves the frontend)
- **Forms**: Connected to Formspree (`https://formspree.io/f/xgoljqjv`) — no backend needed for form submissions

## Key Files
- `client/src/pages/Home.tsx` — Main landing page with all sections and form logic
- `client/src/assets/images/` — Logo and section images
- `shared/schema.ts` — Data model (currently minimal)

## Forms
Three forms send POST requests directly to Formspree from the frontend:
1. **User form** (`formType: "user"`) — Email waitlist signup
2. **Center form** (`formType: "center"`) — Creative center partnership application (name + email)
3. **Join Us form** (`formType: "joinus"`) — Collaborator contact form (name + email + message)

Each form includes loading states, success confirmation, and error handling.

## Branding
- Logo: Transparent PNG at `client/src/assets/images/logo-transparent-trimmed.png`
- Nav bar background: `#F5F1E8`
- Footer: Text-based "CultureCheck®" in black

## Dependencies
- wouter (routing)
- framer-motion (animations)
- lucide-react (icons)
- @radix-ui components (UI primitives)
