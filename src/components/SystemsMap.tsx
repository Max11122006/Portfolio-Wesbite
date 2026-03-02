"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "./MotionPrimitives";

interface SkillNode {
  id: string;
  label: string;
  icon: string;
  x: number;
  y: number;
  items: string[];
  color: string;
}

const nodes: SkillNode[] = [
  {
    id: "engineering",
    label: "Engineering",
    icon: "⚙",
    x: 20,
    y: 25,
    color: "#60a5fa",
    items: [
      "Aerodynamics & Flight Mechanics",
      "Structural Analysis (FEA)",
      "Propulsion Systems",
      "Thermodynamics & Fluid Dynamics",
      "Control Systems Theory",
    ],
  },
  {
    id: "software",
    label: "Software",
    icon: "⟨/⟩",
    x: 80,
    y: 25,
    color: "#a78bfa",
    items: [
      "Python & MATLAB",
      "C / C++",
      "TypeScript / React / Next.js",
      "Data Analysis & Visualisation",
      "Git & CI/CD Workflows",
    ],
  },
  {
    id: "operations",
    label: "Operations",
    icon: "◈",
    x: 20,
    y: 75,
    color: "#34d399",
    items: [
      "Property & Asset Management",
      "Tenant Relations & Compliance",
      "Financial Reporting",
      "Project Planning & Scheduling",
      "Risk Assessment",
    ],
  },
  {
    id: "design",
    label: "Design",
    icon: "△",
    x: 80,
    y: 75,
    color: "#fb923c",
    items: [
      "3D Modelling (Blender & SolidWorks)",
      "Product Visualisation",
      "Brand Identity Design",
      "UI/UX Fundamentals",
      "Adobe Creative Suite",
    ],
  },
];

// Connections between nodes
const connections = [
  { from: "engineering", to: "software" },
  { from: "engineering", to: "operations" },
  { from: "software", to: "design" },
  { from: "operations", to: "design" },
  { from: "engineering", to: "design" },
  { from: "software", to: "operations" },
];

function ConnectionLine({
  x1,
  y1,
  x2,
  y2,
  active,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  active: boolean;
}) {
  return (
    <motion.line
      x1={`${x1}%`}
      y1={`${y1}%`}
      x2={`${x2}%`}
      y2={`${y2}%`}
      stroke={active ? "rgba(96,165,250,0.4)" : "rgba(96,165,250,0.08)"}
      strokeWidth={active ? 1.5 : 0.5}
      strokeDasharray={active ? "none" : "4 4"}
      initial={false}
      animate={{
        stroke: active ? "rgba(96,165,250,0.4)" : "rgba(96,165,250,0.08)",
        strokeWidth: active ? 1.5 : 0.5,
      }}
      transition={{ duration: 0.3 }}
    />
  );
}

export default function SystemsMap() {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const getCoords = (id: string) => {
    const node = nodes.find((n) => n.id === id);
    return node ? { x: node.x, y: node.y } : { x: 0, y: 0 };
  };

  const isConnectionActive = (from: string, to: string) => {
    if (!activeNode) return false;
    return from === activeNode || to === activeNode;
  };

  return (
    <section
      id="skills"
      className="relative py-24 md:py-36 px-6 section-divide"
    >
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-xs tracking-[0.3em] uppercase text-muted mb-6 font-mono">
            // SYSTEMS MAP
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] text-foreground mb-4">
            Core <span className="gradient-text">competencies.</span>
          </h2>
          <p className="text-sm text-muted mb-16 max-w-lg">
            Four interconnected disciplines. Hover to explore each node and its connections.
          </p>
        </FadeIn>

        {/* Interactive map */}
        <FadeIn delay={0.2}>
          <div className="relative">
            {/* SVG connections layer */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              {connections.map((conn) => {
                const from = getCoords(conn.from);
                const to = getCoords(conn.to);
                return (
                  <ConnectionLine
                    key={`${conn.from}-${conn.to}`}
                    x1={from.x}
                    y1={from.y}
                    x2={to.x}
                    y2={to.y}
                    active={isConnectionActive(conn.from, conn.to)}
                  />
                );
              })}
            </svg>

            {/* Grid of nodes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {nodes.map((node) => {
                const isActive = activeNode === node.id;
                return (
                  <motion.div
                    key={node.id}
                    onMouseEnter={() => setActiveNode(node.id)}
                    onMouseLeave={() => setActiveNode(null)}
                    className="dark-card cursor-pointer"
                    animate={{
                      borderColor: isActive
                        ? `${node.color}33`
                        : "rgba(39,39,42,1)",
                      boxShadow: isActive
                        ? `0 0 40px ${node.color}10`
                        : "none",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="card-inner p-7">
                      {/* Header */}
                      <div className="flex items-center gap-3 mb-6">
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center text-lg"
                          style={{
                            background: `${node.color}15`,
                            color: node.color,
                          }}
                        >
                          {node.icon}
                        </div>
                        <div>
                          <h3
                            className="text-sm font-semibold tracking-wide uppercase"
                            style={{ color: node.color }}
                          >
                            {node.label}
                          </h3>
                        </div>
                        {/* Status dot */}
                        <motion.div
                          className="ml-auto w-2 h-2 rounded-full"
                          style={{ backgroundColor: node.color }}
                          animate={{
                            opacity: isActive ? 1 : 0.3,
                            boxShadow: isActive
                              ? `0 0 8px ${node.color}`
                              : "none",
                          }}
                        />
                      </div>

                      {/* Items */}
                      <ul className="space-y-3">
                        {node.items.map((item, i) => (
                          <motion.li
                            key={item}
                            className="flex items-start gap-3 text-sm text-muted leading-relaxed"
                            animate={{
                              color: isActive
                                ? "rgba(232,232,236,0.85)"
                                : "rgba(113,113,122,1)",
                              x: isActive ? 4 : 0,
                            }}
                            transition={{
                              duration: 0.2,
                              delay: isActive ? i * 0.03 : 0,
                            }}
                          >
                            <span
                              className="w-1 h-1 rounded-full shrink-0 mt-2"
                              style={{
                                backgroundColor: isActive
                                  ? node.color
                                  : "rgba(113,113,122,0.4)",
                              }}
                            />
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
