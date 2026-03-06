# Hero Section — Solari Board Revamp

## Overview

Replace the entire current hero section with an animated **Solari split-flap display board** — the mechanical departure boards found in airports and train stations. This is the centrepiece of the landing page and should feel authentic, tactile, and impressive.

## What is a Solari Board

A Solari board (split-flap display) is a mechanical sign where each character is displayed on a series of flaps that flip from top to bottom to cycle through letters/numbers until landing on the correct character. Each character position flips independently. They're iconic in airports — the clacking sound, the cascading flips, the yellow and white text on dark backgrounds.

## Layout

The board should be centered on the hero section, replacing all existing hero content (remove the current heading, subtext, location tag, and buttons).

**Structure — a single board with two lines of text:**

```
Line 1:   MAKSYMILIAN DUBOWSKI
Line 2:   BENG AEROSPACE ENGINEERING — HERIOT-WATT UNIVERSITY
```

Each line is a row of individual split-flap character modules.

## Visual Design of Each Flap

Each character sits inside its own flap module:

- **Background:** Dark — near black or very dark charcoal (`#1A1A1A` or `#222222`)
- **Shape:** Slightly rounded rectangle with a thin gap/line across the horizontal middle (this is the split where the flap folds)
- **Text color — Line 1 (name):** White (`#FFFFFF` or `#F0F0F0`)
- **Text color — Line 2 (degree):** Warm yellow/amber (`#FFBB33`, `#F5A623`, or similar — the classic Solari amber)
- **Font:** Monospace or a blocky sans-serif that looks mechanical (e.g. `'JetBrains Mono'`, `'IBM Plex Mono'`, `'Roboto Mono'`, or similar)
- **Each flap module has:** A subtle inset shadow to give depth, a faint border to separate it from adjacent flaps, and the horizontal split line across the middle

The overall board should have a very subtle dark frame/border around it, sitting on the cream page background. It should feel like a physical object mounted on the wall.

## Flip Animation

**On page load**, the board should animate:

1. All flap positions start blank or on a random character
2. Each character flips rapidly through several random letters/symbols before landing on its correct final character
3. The flipping is **staggered** — characters don't all start and finish at the same time. They should cascade roughly left-to-right with slight randomness, like a real Solari board updating
4. Line 1 (the name) should start flipping first, then Line 2 starts shortly after (slight delay)

**The flip animation for each character:**

- The top half of the flap folds down, revealing the next character
- This is a 3D CSS rotation on the X-axis — the top flap rotates from 0° to -90° (folds down and away), then the bottom flap of the new character rotates from 90° to 0° (folds into place)
- Each character cycles through 5–10 random letters before settling on the final one
- Total animation duration: roughly 2–3 seconds per character, with the full board completing in about 3–4 seconds
- Add a very subtle timing variation per flap so it doesn't feel robotic

**Easing:** Each individual flip should be fast with a slight snap — like `ease-in` on the way down and a subtle bounce/settle on landing.

## Technical Implementation

**Approach:**

- Build a `SolariBoard` component that accepts rows of text
- Build a `SolariFlap` component for each individual character
- Each `SolariFlap` manages its own flip cycle animation using `useState` and `useEffect` (or `requestAnimationFrame`)
- Use CSS `perspective` on the board container and `rotateX` transforms on the flap halves for the 3D flip effect
- The horizontal split line should be achieved by rendering the character twice — once in a top-half container (clipped to top 50%) and once in a bottom-half container (clipped to bottom 50%), with the flip animation rotating the top half

**Character set for random cycling:** Use uppercase letters A–Z, numbers 0–9, and a few symbols (—, ·, /) so the cycling looks authentic.

**Responsive:**

- On desktop: full-width board, characters sized generously (each flap roughly 28–40px wide)
- On tablet: scale down proportionally
- On mobile (below 640px): either reduce font size significantly, or split Line 2 across two rows if it overflows. The board must remain readable and not overflow the viewport.

## What to Remove

Delete from the hero section:

- The "// EDINBURGH, SCOTLAND" location tag
- The "Engineering Precision. Operating with Responsibility." heading
- The "BEng (Hons) Aerospace Engineering" and "Future Commercial Pilot" subtext
- The "View Work" and "Learn More" buttons

## What to Add Below the Board

Underneath the Solari board, add back:

- The two CTA buttons ("View Work" and "Learn More") — keep their existing style and functionality, just reposition them below the board with appropriate spacing
- A small subtle line of text: `// EDINBURGH, SCOTLAND` in the same muted style it currently has, positioned above or below the buttons

## What NOT to Change

- Page background color
- Navbar
- Any other section of the site
- The airplane animation
- Scroll behavior

Only the hero section content is being replaced.

## Quality Bar

This needs to look and feel premium. When someone lands on the page, the Solari board flipping into place should be a "wow" moment. It should feel like a real mechanical board — tactile, satisfying, and engineered. Not a flat CSS text animation — it needs the 3D depth, the split-flap construction, and the cascading timing to sell the illusion.
