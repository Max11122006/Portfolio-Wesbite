"use client";

import { motion } from "framer-motion";
import { FadeIn } from "./MotionPrimitives";

interface Phase {
  id: string;
  label: string;
  period: string;
  items: string[];
  status: "complete" | "current" | "future";
}

const phases: Phase[] = [
  {
    id: "foundation",
    label: "Foundation",
    period: "2022 — 2023",
    status: "complete",
    items: [
      "A-Levels in Maths, Physics, Design",
      "Work experience at Kainos (software engineering)",
      "Freelance graphic design & 3D rendering",
      "Polish & UK bilingual foundation",
    ],
  },
  {
    id: "engineering",
    label: "Engineering Degree",
    period: "2023 — 2027",
    status: "current",
    items: [
      "BEng Aerospace Engineering — Heriot-Watt",
      "Aerodynamics, structures, propulsion, control systems",
      "Computational methods (MATLAB, Python, C++)",
      "University-level research & lab work",
    ],
  },
  {
    id: "operations",
    label: "Operations",
    period: "2023 — Present",
    status: "current",
    items: [
      "Property portfolio management in Edinburgh",
      "Financial oversight & tenant relations",
      "Risk management & compliance",
      "Real-world systems under pressure",
    ],
  },
  {
    id: "aviation",
    label: "Pilot Training",
    period: "2027 →",
    status: "future",
    items: [
      "Private Pilot Licence (PPL)",
      "Commercial Pilot Licence (CPL)",
      "Airline Transport Pilot Licence (ATPL)",
      "Type rating & line operations",
    ],
  },
  {
    id: "career",
    label: "Long-Term",
    period: "2030+ →",
    status: "future",
    items: [
      "Commercial aviation operations",
      "Advanced systems modelling & simulation",
      "Engineering leadership roles",
      "Aerospace R&D contribution",
    ],
  },
];

const statusColors = {
  complete: "#34d399",
  current: "#60a5fa",
  future: "#71717a",
};

const statusLabels = {
  complete: "COMPLETED",
  current: "ACTIVE",
  future: "PROJECTED",
};

export default function Trajectory() {
  return (
    <section
      id="trajectory"
      className="relative py-24 md:py-36 px-6 section-divide overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-xs tracking-[0.3em] uppercase text-muted mb-6 font-mono">
            // TRAJECTORY
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] text-foreground mb-4">
            Flight <span className="gradient-text">path.</span>
          </h2>
          <p className="text-sm text-muted mb-16 max-w-lg">
            From engineering foundations to commercial aviation — a structured trajectory
            with clear milestones and calculated risk.
          </p>
        </FadeIn>

        {/* Horizontal scrollable timeline on mobile, grid on desktop */}
        <div className="relative">
          {/* The connecting line */}
          <div className="hidden lg:block absolute top-[28px] left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {/* Phase cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {phases.map((phase, i) => {
              const color = statusColors[phase.status];

              return (
                <FadeIn key={phase.id} delay={0.1 + i * 0.08}>
                  <div className="relative">
                    {/* Node dot on the line */}
                    <div className="hidden lg:flex justify-center mb-6">
                      <motion.div
                        className="relative w-3.5 h-3.5 rounded-full border-2 z-10"
                        style={{
                          borderColor: color,
                          backgroundColor:
                            phase.status === "future"
                              ? "transparent"
                              : color,
                        }}
                        animate={
                          phase.status === "current"
                            ? {
                                boxShadow: [
                                  `0 0 0 0 ${color}40`,
                                  `0 0 0 8px ${color}00`,
                                ],
                              }
                            : {}
                        }
                        transition={
                          phase.status === "current"
                            ? { duration: 2, repeat: Infinity }
                            : {}
                        }
                      />
                    </div>

                    {/* Card */}
                    <div className="dark-card">
                      <div className="card-inner p-5">
                        {/* Status badge */}
                        <div className="flex items-center gap-2 mb-3">
                          <div
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ backgroundColor: color }}
                          />
                          <span
                            className="text-[10px] font-mono tracking-wider"
                            style={{ color }}
                          >
                            {statusLabels[phase.status]}
                          </span>
                        </div>

                        <h3 className="text-sm font-semibold text-foreground mb-1">
                          {phase.label}
                        </h3>
                        <p className="text-[11px] font-mono text-muted mb-4">
                          {phase.period}
                        </p>

                        <ul className="space-y-2">
                          {phase.items.map((item) => (
                            <li
                              key={item}
                              className="text-xs text-muted/80 leading-relaxed flex items-start gap-2"
                            >
                              <span
                                className="w-0.5 h-0.5 rounded-full mt-1.5 shrink-0"
                                style={{ backgroundColor: color }}
                              />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
