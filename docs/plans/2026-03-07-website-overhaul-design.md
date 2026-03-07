# Co-opSublets Website Overhaul — "The Editorial Scroll"

## Direction
Warm & Human + Editorial typography + Scroll-driven animations. Premium studio-level craft that feels like a cool indie brand, not a SaaS template.

## Design System

### Typography
- **Headlines:** DM Serif Display — high-contrast serif, warm and editorial
- **Body:** Inter — clean, highly legible, great at small sizes
- **Hierarchy:** Extreme size contrasts (8xl headlines vs sm body), mix of weights

### Color Palette
- **Base:** Warm stone `#F5F0EB` (replaces cold #FAFAF9)
- **Text:** Charcoal `#1A1A1A` (replaces #111827)
- **Accent:** Coral `#E85D4A` (replaces generic red #E31837)
- **Secondary:** Sage `#A8B5A0` (organic, warm green)
- **Surface:** `#FFFDF9` (warm white for cards)
- **Muted text:** `#6B6560` (warm gray, not blue-gray)

### Textures & Depth
- CSS grain/noise overlay on section backgrounds (via SVG filter)
- Soft radial glows behind key elements (warm coral/sage tints)
- No harsh borders — use subtle shadows and background contrast instead

### Motion Principles
- Scroll-linked animations via Framer Motion useScroll/useTransform
- Staggered word/line reveals for headlines
- Parallax depth layers (foreground content vs background imagery)
- Native smooth scroll — no scroll-jacking
- Spring physics for interactive elements

## Section Architecture

### 1. Navbar
- Minimal. Logo left, 2-3 links + CTA right
- Transparent on hero, warm white on scroll
- Slim, no pill shape — let the content breathe

### 2. Hero — Split Screen Editorial
- **Left 55%:** Massive DM Serif Display headline with staggered word reveal. Subtext in Inter. Two CTAs (coral filled + outlined). Trust badges below.
- **Right 45%:** Full-height lifestyle photo (students in an apartment) with a floating "match card" UI element that parallaxes at a different scroll rate.
- Asymmetrical — left text block is vertically offset from center
- Grain texture overlay on the background

### 3. Scroll-Linked University Ticker
- Replaces mechanical marquee with scroll-velocity-linked horizontal movement
- Muted, understated — warm gray text on stone background
- Speeds up / slows down based on scroll velocity

### 4. City Destinations — Staggered Reveal Grid
- Asymmetric grid (not uniform columns) — images overlap slightly
- Cards scale from 0.85 to 1.0 and fade in as they enter viewport
- Each card has parallax on its background image
- Hover: image shifts, overlay reveals city details

### 5. How It Works — Alternating Scroll Reveals
- Full-width sections, content alternates left/right
- Each step slides in from its respective side with parallax depth
- Bar chart visualization animates on scroll position (not just viewport entry)
- Verified card has a satisfying "stamp" animation

### 6. Video Call Feature — Cinematic Reveal
- Section scales from 80% to 100% as it enters viewport
- Dark surface creates dramatic contrast
- Keep the split video mockup but with warmer treatment

### 7. CTA — Viewport Expansion
- Starts as a contained card, expands to fill viewport on scroll
- Background transitions from stone to warm coral gradient
- Text scales up as the section grows

### 8. Footer
- Warm charcoal background (not cold gray)
- Same editorial typography
- Generous spacing

## Key Breaks from Current Design
1. Serif headlines instead of all-sans-serif
2. Asymmetrical layouts instead of centered everything
3. Warm color palette instead of cold grays
4. Scroll-driven motion instead of viewport-trigger-once
5. Grain texture instead of flat surfaces
6. Full-bleed imagery instead of contained cards
7. Generous whitespace instead of cramped sections
