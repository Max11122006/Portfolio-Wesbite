"use client";

import { useEffect, useRef, useCallback } from "react";
import { useScroll, useReducedMotion } from "framer-motion";

const W = 1400;
const H = 900;

// Gentle diagonal climb — left to right
const FLIGHT_PATH = "M -60 700 L 1460 140";

export default function AirplaneDrift() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const pathRef = useRef<SVGPathElement>(null);
  const trailRef = useRef<SVGPathElement>(null);
  const planeRef = useRef<SVGGElement>(null);
  const totalLengthRef = useRef(0);

  useEffect(() => {
    const path = pathRef.current;
    const trail = trailRef.current;
    if (!path || !trail) return;
    const len = path.getTotalLength();
    totalLengthRef.current = len;
    trail.style.strokeDasharray = `6 4`;
    trail.style.strokeDashoffset = `${len}`;
  }, []);

  const update = useCallback((progress: number) => {
    const path = pathRef.current;
    const trail = trailRef.current;
    const plane = planeRef.current;
    const totalLen = totalLengthRef.current;
    if (!path || !trail || !plane || totalLen === 0) return;

    const len = progress * totalLen;

    // Reveal trail progressively
    trail.style.strokeDasharray = `${len} ${totalLen}`;
    trail.style.strokeDashoffset = "0";

    const pt = path.getPointAtLength(len);
    const pt2 = path.getPointAtLength(Math.min(len + 2, totalLen));
    const angle = Math.atan2(pt2.y - pt.y, pt2.x - pt.x) * (180 / Math.PI);

    plane.setAttribute(
      "transform",
      `translate(${pt.x}, ${pt.y}) rotate(${angle})`
    );
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const unsubscribe = scrollYProgress.on("change", update);
    update(scrollYProgress.get());
    return unsubscribe;
  }, [scrollYProgress, update, prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden hidden md:block">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="none"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path ref={pathRef} d={FLIGHT_PATH} fill="none" stroke="none" />

        {/* Dashed trail — draws progressively */}
        <path
          ref={trailRef}
          d={FLIGHT_PATH}
          fill="none"
          stroke="#C8C0B4"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.22"
        />

        {/* Plane — classic airliner silhouette, facing right */}
        <g ref={planeRef}>
          <g transform="scale(0.38) translate(-60, -28)">
            {/* Fuselage */}
            <path
              d="M 10 28 C 10 25, 14 22, 20 22 L 105 22 C 115 22, 120 25, 120 28 C 120 31, 115 34, 105 34 L 20 34 C 14 34, 10 31, 10 28 Z"
              fill="#C8C0B4"
              opacity="0.3"
            />
            {/* Nose */}
            <path
              d="M 105 22 Q 118 22, 126 28 Q 118 34, 105 34"
              fill="#C8C0B4"
              opacity="0.3"
            />
            {/* Upper wing — swept back */}
            <path
              d="M 62 22 L 78 22 L 52 2 L 42 4 Z"
              fill="#C8C0B4"
              opacity="0.3"
            />
            {/* Lower wing — swept back */}
            <path
              d="M 62 34 L 78 34 L 52 54 L 42 52 Z"
              fill="#C8C0B4"
              opacity="0.3"
            />
            {/* Tail fin — vertical */}
            <path
              d="M 16 22 L 24 22 L 20 6 L 8 8 Z"
              fill="#C8C0B4"
              opacity="0.3"
            />
            {/* Upper tail stabiliser */}
            <path
              d="M 14 24 L 22 22 L 10 14 L 4 16 Z"
              fill="#C8C0B4"
              opacity="0.28"
            />
            {/* Lower tail stabiliser */}
            <path
              d="M 14 32 L 22 34 L 10 42 L 4 40 Z"
              fill="#C8C0B4"
              opacity="0.28"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}
