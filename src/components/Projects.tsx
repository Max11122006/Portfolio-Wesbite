"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "./MotionPrimitives";

interface Project {
  id: number;
  title: string;
  category: string;
  problem: string;
  description: string;
  tags: string[];
  color: string;
  breakdown?: {
    constraints: string[];
    approach: string;
    outcome: string;
  };
}

const projects: Project[] = [
  {
    id: 1,
    title: "Subsonic Wing Aerodynamic Analysis",
    category: "Aerospace Engineering",
    problem: "Optimise lift-to-drag ratio under variable Reynolds number conditions",
    description:
      "Computational analysis of subsonic airfoil performance including pressure distribution mapping, boundary layer evaluation, and parametric optimisation of NACA profiles. Compared analytical thin aerofoil theory against panel method solutions.",
    tags: ["MATLAB", "CFD", "Aerodynamics"],
    color: "#60a5fa",
    breakdown: {
      constraints: [
        "Subsonic regime only (Ma < 0.3), incompressible assumption",
        "2D profile analysis — no 3D finite wing effects",
        "Limited computational budget — no full Navier-Stokes",
      ],
      approach:
        "Implemented Hess-Smith panel method in MATLAB for pressure distribution calculation. Validated against XFOIL results and experimental wind tunnel data. Parametric sweep over angle of attack (−4° to 16°) for 5 NACA profiles.",
      outcome:
        "Identified optimal AoA range for maximum L/D. Demonstrated that panel method achieves <3% error vs XFOIL for attached flow up to α ≈ 10°. Documented stall onset prediction limitations.",
    },
  },
  {
    id: 2,
    title: "Structural Load Path Simulation",
    category: "Aerospace Engineering",
    problem: "Evaluate stress concentrations and safety margins under combined loading",
    description:
      "Finite element analysis of a simplified fuselage section under bending, torsion, and pressurisation loads. Evaluated material efficiency for aluminium alloy configurations and identified critical failure paths.",
    tags: ["FEA", "SolidWorks", "Structures"],
    color: "#a78bfa",
    breakdown: {
      constraints: [
        "Linear elastic analysis — no plasticity or fatigue",
        "Simplified geometry: ring-stiffened shell section",
        "Material limited to Al 2024-T3 and Al 7075-T6",
      ],
      approach:
        "Created FE mesh in SolidWorks Simulation with shell elements. Applied combined cabin pressure (ΔP = 60 kPa), bending moment, and torsional load. Evaluated von Mises stress against material yield with factor of safety ≥ 1.5.",
      outcome:
        "7075-T6 achieved 18% weight saving over 2024-T3 for equivalent safety margin. Identified stress concentration at window cutout requiring local reinforcement. Peak stress within 5% of hand calculation validation.",
    },
  },
  {
    id: 3,
    title: "Flight Data Telemetry Dashboard",
    category: "Software Development",
    problem: "Visualise real-time flight telemetry for post-flight analysis",
    description:
      "Real-time data visualisation tool processing altitude, velocity, attitude, and engine parameter streams. Built with Python backend and React frontend, supporting replay and filtering of flight data recordings.",
    tags: ["Python", "React", "Data Viz"],
    color: "#34d399",
    breakdown: {
      constraints: [
        "Must handle 10 Hz update rate with <100ms render latency",
        "Support for multiple simultaneous data streams",
        "Browser-based — no native dependencies",
      ],
      approach:
        "WebSocket server in Python (FastAPI) consuming CSV/binary telemetry data. React frontend with D3.js for time-series plots and attitude indicator. Implemented ring buffer for sliding window display of last 60s.",
      outcome:
        "Achieved 12 Hz render rate with 6 simultaneous parameters. Replay mode with seek and variable speed. Exported analysis-ready datasets in Parquet format for further processing.",
    },
  },
  {
    id: 4,
    title: "Orbital Mechanics Solver",
    category: "Software Development",
    problem: "Budget delta-v for basic mission trajectory planning",
    description:
      "C++ application implementing Kepler orbit propagation, Hohmann transfer calculations, and delta-v budgeting. Supports drag perturbation for LEO missions and bi-elliptic transfer comparison.",
    tags: ["C++", "Astrodynamics", "Algorithms"],
    color: "#fb923c",
    breakdown: {
      constraints: [
        "Two-body problem only — no n-body perturbations beyond J2",
        "Impulsive manoeuvre assumption",
        "Single central body (Earth-centric)",
      ],
      approach:
        "Implemented Kepler equation solver using Newton-Raphson iteration. Hohmann and bi-elliptic transfer modules with automatic selection based on radius ratio threshold (r₂/r₁ > 11.94). J2 perturbation modelled for secular drift of Ω and ω.",
      outcome:
        "Solver converges in <6 iterations for e < 0.97. Demonstrated bi-elliptic advantage for large orbit ratio transfers. Results validated against Vallado reference data to 5 significant figures.",
    },
  },
  {
    id: 5,
    title: "Product Visualisation — 3D Renders",
    category: "3D & Design",
    problem: "Deliver commercial-grade product renders for client campaigns",
    description:
      "Photorealistic 3D product mockups and packaging renders for freelance clients using Blender. Focus on physically-based lighting, material accuracy, and output suitable for print and digital media.",
    tags: ["Blender", "3D Rendering", "Design"],
    color: "#f472b6",
  },
  {
    id: 6,
    title: "Propulsion System Concept Model",
    category: "3D & Design",
    problem: "Visualise turbojet internals for academic presentation",
    description:
      "Detailed sectioned 3D model of a turbojet engine with individually modelled compressor stages, combustion chamber, turbine assembly, and exhaust nozzle. Annotations mapped to thermodynamic station numbers.",
    tags: ["Blender", "CAD", "Propulsion"],
    color: "#facc15",
  },
];

export default function Projects() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section
      id="projects"
      className="relative py-24 md:py-36 px-6 section-divide"
    >
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-xs tracking-[0.3em] uppercase text-muted mb-6 font-mono">
            // PROJECTS
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] text-foreground mb-4">
            Selected <span className="gradient-text">work.</span>
          </h2>
          <p className="text-sm text-muted mb-16 max-w-lg">
            Each project addresses a specific engineering problem with defined constraints,
            trade-offs, and measurable outcomes.
          </p>
        </FadeIn>

        <StaggerContainer
          className="grid md:grid-cols-2 gap-5"
          staggerDelay={0.08}
        >
          {projects.map((project) => {
            const isExpanded = expandedId === project.id;

            return (
              <StaggerItem key={project.id}>
                <motion.div
                  layout
                  className="dark-card h-full flex flex-col"
                  whileHover={!isExpanded ? { y: -3 } : {}}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="card-inner p-7 flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className="text-[10px] font-mono tracking-wider uppercase"
                        style={{ color: project.color }}
                      >
                        {project.category}
                      </span>
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{
                          backgroundColor: project.color,
                          boxShadow: `0 0 8px ${project.color}60`,
                        }}
                      />
                    </div>

                    <h3 className="text-lg font-semibold text-foreground mb-2 leading-snug">
                      {project.title}
                    </h3>

                    {/* Problem statement */}
                    <p className="text-xs font-mono text-accent/70 mb-3">
                      ▸ {project.problem}
                    </p>

                    <p className="text-sm text-muted leading-relaxed flex-1 mb-5">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className="tech-tag">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Technical breakdown toggle */}
                    {project.breakdown && (
                      <>
                        <button
                          onClick={() =>
                            setExpandedId(isExpanded ? null : project.id)
                          }
                          className="text-xs font-mono text-accent/60 hover:text-accent transition-colors cursor-pointer flex items-center gap-1.5"
                        >
                          <motion.span
                            animate={{ rotate: isExpanded ? 90 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            ▶
                          </motion.span>
                          Technical Breakdown
                        </button>

                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                              className="overflow-hidden"
                            >
                              <div className="mt-5 pt-5 border-t border-border space-y-4">
                                {/* Constraints */}
                                <div>
                                  <p className="text-[10px] font-mono tracking-wider text-muted/60 mb-2 uppercase">
                                    Constraints
                                  </p>
                                  <ul className="space-y-1.5">
                                    {project.breakdown.constraints.map((c) => (
                                      <li
                                        key={c}
                                        className="text-xs text-muted leading-relaxed flex items-start gap-2"
                                      >
                                        <span className="text-accent/40 mt-0.5">—</span>
                                        {c}
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                {/* Approach */}
                                <div>
                                  <p className="text-[10px] font-mono tracking-wider text-muted/60 mb-2 uppercase">
                                    Approach
                                  </p>
                                  <p className="text-xs text-muted/80 leading-relaxed">
                                    {project.breakdown.approach}
                                  </p>
                                </div>

                                {/* Outcome */}
                                <div>
                                  <p className="text-[10px] font-mono tracking-wider text-muted/60 mb-2 uppercase">
                                    Outcome
                                  </p>
                                  <p className="text-xs text-muted/80 leading-relaxed">
                                    {project.breakdown.outcome}
                                  </p>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    )}
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
