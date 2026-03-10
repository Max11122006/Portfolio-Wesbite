"use client";

import { useEffect, useRef } from "react";

// ---------------------------------------------------------------------------
// Göttingen 386 airfoil — real coordinate data (x/c, y/c)
// Scaled to SVG: chord = 550px, LE at x=325, TE at x=875, centerline y=275
// ---------------------------------------------------------------------------
const UPPER_COORDS: [number, number][] = [
  [0, 0], [0.0050, 0.0185], [0.0125, 0.0310], [0.025, 0.0430],
  [0.0375, 0.0520], [0.05, 0.0595], [0.075, 0.0710], [0.1, 0.0800],
  [0.125, 0.0870], [0.15, 0.0935], [0.175, 0.0980], [0.2, 0.1020],
  [0.25, 0.1068], [0.3, 0.1080], [0.35, 0.1065], [0.4, 0.1040],
  [0.45, 0.0990], [0.5, 0.0935], [0.55, 0.0862], [0.6, 0.0780],
  [0.65, 0.0685], [0.7, 0.0585], [0.75, 0.0482], [0.8, 0.0378],
  [0.85, 0.0278], [0.9, 0.0175], [0.95, 0.0082], [1, 0],
];

const LOWER_COORDS: [number, number][] = [
  [0, 0], [0.0050, -0.0120], [0.0125, -0.0175], [0.025, -0.0235],
  [0.0375, -0.0275], [0.05, -0.0305], [0.075, -0.0340], [0.1, -0.0355],
  [0.125, -0.0360], [0.15, -0.0360], [0.175, -0.0354], [0.2, -0.0345],
  [0.25, -0.0322], [0.3, -0.0292], [0.35, -0.0260], [0.4, -0.0228],
  [0.45, -0.0198], [0.5, -0.0168], [0.55, -0.0140], [0.6, -0.0115],
  [0.65, -0.0092], [0.7, -0.0070], [0.75, -0.0052], [0.8, -0.0038],
  [0.85, -0.0025], [0.9, -0.0014], [0.95, -0.0005], [1, 0],
];

const CHORD = 550;
const LE_X = 325;
const CENTER_Y = 275;

function toSVG(xc: number, yc: number): [number, number] {
  return [
    Math.round((LE_X + xc * CHORD) * 10) / 10,
    Math.round((CENTER_Y - yc * CHORD) * 10) / 10,
  ];
}

// Catmull-Rom → cubic bezier conversion for smooth curves through data points
function smoothPath(points: [number, number][]): string {
  if (points.length < 2) return "";
  const r = (v: number) => Math.round(v * 10) / 10;
  const parts: string[] = [`M ${points[0][0]} ${points[0][1]}`];

  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[Math.max(0, i - 1)];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[Math.min(points.length - 1, i + 2)];

    const cp1x = r(p1[0] + (p2[0] - p0[0]) / 6);
    const cp1y = r(p1[1] + (p2[1] - p0[1]) / 6);
    const cp2x = r(p2[0] - (p3[0] - p1[0]) / 6);
    const cp2y = r(p2[1] - (p3[1] - p1[1]) / 6);

    parts.push(`C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2[0]} ${p2[1]}`);
  }
  return parts.join(" ");
}

// Build airfoil path: upper surface TE→LE then lower surface LE→TE
const upperSVG = UPPER_COORDS.map(([x, y]) => toSVG(x, y));
const lowerSVG = LOWER_COORDS.map(([x, y]) => toSVG(x, y));
const airfoilPoints: [number, number][] = [
  ...upperSVG.slice().reverse(), // TE → LE along upper surface
  ...lowerSVG.slice(1),          // LE → TE along lower surface (skip dup LE)
];
const AIRFOIL = smoothPath(airfoilPoints) + " Z";

// ---------------------------------------------------------------------------
// Streamlines — skill labels flowing around the airfoil
// Upper surface peaks at ~y=215, lower surface dips to ~y=295
// ---------------------------------------------------------------------------
interface Streamline {
  path: string;
  skill: string;
  duration: number;
  offset: number;
}

const STREAMLINES: Streamline[] = [
  // === OVER THE TOP ===
  // Close to upper surface (clears y~210)
  { path: "M -80 270 C 100 265, 200 245, 300 222 C 400 205, 480 198, 580 198 C 700 198, 790 208, 860 225 C 920 240, 960 258, 1040 268 C 1120 272, 1200 273, 1350 273", skill: "Python", duration: 14000, offset: 0 },
  { path: "M -80 258 C 100 250, 200 225, 300 205 C 400 188, 480 180, 580 180 C 700 180, 790 192, 860 210 C 920 228, 960 248, 1040 258 C 1120 262, 1200 262, 1350 262", skill: "Arduino", duration: 15000, offset: 2000 },
  // Medium distance above
  { path: "M -80 238 C 100 228, 200 198, 300 172 C 400 150, 500 140, 600 140 C 720 142, 800 158, 870 182 C 930 205, 970 228, 1050 240 C 1130 246, 1220 244, 1350 243", skill: "Embedded Systems", duration: 16000, offset: 3500 },
  // Far above
  { path: "M -80 205 C 100 195, 220 162, 340 132 C 440 108, 540 98, 640 98 C 740 100, 820 118, 890 148 C 940 170, 980 200, 1060 212 C 1140 218, 1220 216, 1350 215", skill: "Computer Vision", duration: 15500, offset: 5500 },
  // Very far above
  { path: "M -80 165 C 120 158, 260 125, 400 100 C 520 80, 640 72, 730 75 C 810 80, 880 100, 950 128 C 1010 150, 1060 165, 1150 170 C 1230 172, 1290 171, 1350 170", skill: "Engineering Simulation", duration: 17000, offset: 7000 },
  // Highest
  { path: "M -80 128 C 150 122, 320 98, 480 78 C 600 65, 700 62, 790 68 C 860 75, 930 95, 990 118 C 1040 135, 1100 132, 1180 130 C 1250 129, 1300 128, 1350 128", skill: "C++", duration: 16500, offset: 1200 },

  // === UNDER THE BOTTOM (lower surface ~y=295) ===
  { path: "M -80 285 C 100 290, 200 300, 320 308 C 420 314, 540 316, 640 314 C 740 310, 820 302, 880 290 C 920 282, 960 278, 1040 280 C 1120 282, 1200 283, 1350 283", skill: "3D Printing", duration: 14500, offset: 4000 },
  { path: "M -80 315 C 100 320, 200 335, 320 345 C 420 352, 540 354, 640 350 C 740 344, 820 332, 880 315 C 920 304, 960 300, 1040 304 C 1120 307, 1200 308, 1350 308", skill: "Mechanical Prototyping", duration: 16000, offset: 6000 },
  { path: "M -80 352 C 100 358, 220 375, 360 388 C 480 396, 600 398, 700 392 C 790 385, 860 370, 920 352 C 970 340, 1020 337, 1100 340 C 1180 342, 1250 342, 1350 342", skill: "Data Analysis", duration: 15000, offset: 8500 },
  { path: "M -80 395 C 150 398, 320 412, 480 420 C 600 426, 700 426, 790 422 C 860 416, 920 405, 980 395 C 1040 388, 1100 387, 1180 388 C 1250 389, 1300 389, 1350 389", skill: "GitHub", duration: 17500, offset: 10000 },
];

function StreamlineSkills() {
  const svgRef = useRef<SVGSVGElement>(null);
  const textRefs = useRef<(SVGTextElement | null)[]>([]);
  const pathRefs = useRef<(SVGPathElement | null)[]>([]);
  const startTime = useRef(0);

  useEffect(() => {
    startTime.current = Date.now();
    let raf: number;

    const animate = () => {
      const now = Date.now() - startTime.current;

      STREAMLINES.forEach((s, i) => {
        const textEl = textRefs.current[i];
        const pathEl = pathRefs.current[i];
        if (!textEl || !pathEl) return;

        const totalLen = pathEl.getTotalLength();
        const elapsed = (now + s.offset) % s.duration;
        const progress = elapsed / s.duration;
        const len = progress * totalLen;

        const pt = pathEl.getPointAtLength(len);

        // Get tangent angle
        const pt2 = pathEl.getPointAtLength(Math.min(len + 2, totalLen));
        const angle = Math.atan2(pt2.y - pt.y, pt2.x - pt.x) * (180 / Math.PI);

        textEl.setAttribute("transform", `translate(${pt.x}, ${pt.y}) rotate(${angle})`);

        // Fade in/out at edges
        let opacity = 1;
        if (progress < 0.08) opacity = progress / 0.08;
        else if (progress > 0.92) opacity = (1 - progress) / 0.08;
        textEl.setAttribute("opacity", String(opacity));
      });

      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 1200 550"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Streamline paths (thin dashed lines) */}
      {STREAMLINES.map((s, i) => (
        <path
          key={`line-${i}`}
          ref={(el) => { pathRefs.current[i] = el; }}
          d={s.path}
          fill="none"
          stroke="#b0a898"
          strokeWidth="0.8"
          strokeDasharray="6 10"
          opacity="0.2"
        />
      ))}

      {/* Airfoil shape — generated from Göttingen 386 coordinates */}
      <path
        d={AIRFOIL}
        fill="#e8e4de"
        stroke="#999"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* Skill labels (positioned by JS) */}
      {STREAMLINES.map((s, i) => (
        <text
          key={`text-${i}`}
          ref={(el) => { textRefs.current[i] = el; }}
          fontSize="13"
          fill="#6b6358"
          fontFamily="var(--font-sans, system-ui, sans-serif)"
          textAnchor="middle"
          dominantBaseline="middle"
          opacity="0"
        >
          {s.skill}
        </text>
      ))}
    </svg>
  );
}

export default function Interactive3D() {
  return (
    <section className="relative overflow-hidden" style={{ height: "550px" }}>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface-alt/30 to-background pointer-events-none" />
      <div className="relative z-10 w-full h-full px-6 py-12 max-w-6xl mx-auto">
        <StreamlineSkills />
      </div>
    </section>
  );
}
