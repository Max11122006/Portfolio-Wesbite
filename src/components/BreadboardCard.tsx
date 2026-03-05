"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect, useMemo } from "react";

const DOT_GRADIENT = "radial-gradient(circle, rgba(80,75,65,0.15) 1.5px, transparent 1.5px)";
const TILE_SIZE = 14;
const RAIL_HEIGHT = 20;
const RAIL_MARGIN = 3;
const CENTRE_GAP = 18;

function useDotGrid(height: number) {
  return useMemo(() => {
    if (height < 80) return {};

    const dotStart = RAIL_HEIGHT + RAIL_MARGIN;
    const dotEnd = height - RAIL_HEIGHT - RAIL_MARGIN;
    const available = dotEnd - dotStart - CENTRE_GAP;
    if (available < TILE_SIZE * 2) return {};

    const halfSpace = available / 2;
    const rowsPerHalf = Math.floor(halfSpace / TILE_SIZE);
    if (rowsPerHalf < 1) return {};

    // Centre the dot blocks within the available space
    const topBlockHeight = rowsPerHalf * TILE_SIZE;
    const bottomBlockHeight = rowsPerHalf * TILE_SIZE;
    const totalUsed = topBlockHeight + CENTRE_GAP + bottomBlockHeight;
    const extraMargin = (dotEnd - dotStart - totalUsed) / 2;
    const topStart = dotStart + extraMargin;
    const bottomStart = topStart + topBlockHeight + CENTRE_GAP;

    const positions: string[] = [];
    for (let i = 0; i < rowsPerHalf; i++) {
      positions.push(`0px ${topStart + i * TILE_SIZE}px`);
    }
    for (let i = 0; i < rowsPerHalf; i++) {
      positions.push(`0px ${bottomStart + i * TILE_SIZE}px`);
    }

    const totalRows = rowsPerHalf * 2;
    return {
      backgroundImage: Array(totalRows).fill(DOT_GRADIENT).join(", "),
      backgroundSize: Array(totalRows).fill(`${TILE_SIZE}px ${TILE_SIZE}px`).join(", "),
      backgroundPosition: positions.join(", "),
      backgroundRepeat: Array(totalRows).fill("repeat-x").join(", "),
    };
  }, [height]);
}

interface BreadboardCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function BreadboardCard({ children, className = "", hover = false }: BreadboardCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setHeight(entry.contentRect.height + (entry.target as HTMLElement).offsetHeight - entry.contentRect.height);
      }
    });
    // Set initial height
    setHeight(el.offsetHeight);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const dotStyle = useDotGrid(height);

  const hoverProps = hover
    ? { whileHover: { y: -4, boxShadow: "0 4px 24px rgba(0,0,0,0.08)" } }
    : {};

  return (
    <motion.div
      ref={ref}
      {...hoverProps}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className={`breadboard-card ${className}`}
      style={dotStyle}
    >
      {/* Power rails */}
      <div className="power-rail-strip power-rail-strip--top">
        <div className="power-rail-line power-rail-line--red" data-label="+" />
        <div className="power-rail-line power-rail-line--blue" data-label="−" />
      </div>
      <div className="power-rail-strip power-rail-strip--bottom">
        <div className="power-rail-line power-rail-line--blue" data-label="−" />
        <div className="power-rail-line power-rail-line--red" data-label="+" />
      </div>

      <div className="card-inner">{children}</div>
    </motion.div>
  );
}
