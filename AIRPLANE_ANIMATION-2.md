# Background Airplane Animation — Updated

## Overview

Add a subtle, animated airplane that flies across the website background as the user scrolls. This is a signature detail — it represents Maksymilian's goal of becoming a commercial pilot. It should feel like a quiet easter egg, not a flashy feature.

## The Airplane

**Style:** Minimalist line-art silhouette of a commercial aircraft (side profile). Think technical drawing, not cartoon. A single continuous stroke or very thin filled shape — like something you'd see on an engineering schematic or flight chart.

**Size:** Small. Roughly 40–60px wide. It should never dominate or compete with content.

**Color:** Soft warm grey, matching the site's muted tone. Try `#C8C0B4` or `#B8B0A4`. Opacity around `0.25–0.35`.

## Flight Path & Animation

**Trigger:** The plane's position is tied to scroll progress. As the user scrolls down, the plane moves. No looping CSS animation — entirely scroll-driven.

**The path:**

1. Plane enters from off-screen left
2. Flies right on a gentle upward diagonal (shallow climb)
3. **Midway through the page, the plane does a single loop-the-loop** — a full 360° circular loop, roughly 80–120px in diameter. The plane's rotation should follow the loop naturally (it rotates as it goes around, nose always pointing in the direction of travel)
4. After completing the loop, it continues flying right on the same shallow climb
5. Exits off-screen to the right by the time the user reaches the bottom of the page

The loop should feel smooth and playful — not mechanical. Ease into and out of it so there's no hard transition between the straight flight and the loop entry/exit.

## Dashed Trail Line

**A dashed line follows behind the plane, tracing its exact flight path** — including the loop.

**Style:**

- Thin dashed line (`1–1.5px` stroke width)
- Dash pattern: short dashes with gaps (e.g. `stroke-dasharray: 6 4` or similar)
- Same color as the plane, or slightly lighter
- Same opacity range (`0.2–0.3`)

**Behavior:**

- The trail draws itself progressively as the plane moves — it appears behind the plane as it flies, not all at once
- The trail stays visible after the plane passes through (it doesn't fade or disappear)
- The trail follows the exact same path as the plane, so through the loop section it draws a circular dashed line
- Use an SVG `<path>` element for the full flight path and animate `stroke-dashoffset` based on scroll progress to create the drawing effect

## Technical Approach

- Define the entire flight path (including the loop) as a single SVG path with a `d` attribute — straight diagonal, into a circular arc, back to straight diagonal
- Use `getTotalLength()` and animate `stroke-dashoffset` from full length to 0 based on scroll progress to draw the trail
- Position the plane SVG at the current point along the path using `getPointAtLength()` based on scroll progress
- Rotate the plane to match the path tangent at each point so the nose always faces the direction of travel
- Single component (`AirplaneDrift.tsx`) rendered in the main layout
- Fixed position, low z-index (behind content, in front of background)
- Hidden on mobile (below 768px)

## What NOT to Do

- No smoke, contrails, or glow effects — just the clean dashed line
- No looping/repeating animation — one journey per full page scroll
- No interaction on hover or click
- Do not make it too dark or prominent
- Do not affect scroll performance — keep it lightweight
- Do not modify any existing components or styles

## Keep Everything Else

This is a new addition only. Do not change anything that already exists.
