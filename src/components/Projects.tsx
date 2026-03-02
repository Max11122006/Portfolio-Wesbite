"use client";

import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "./MotionPrimitives";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tags: string[];
  wireColor: string;
  pinLabel: string;
}

const WIRE_COLORS = ["red", "blue", "green", "yellow", "orange", "purple"];

const projects: Project[] = [
  {
    id: 1,
    title: "Subsonic Wing Aerodynamic Analysis",
    category: "Aerospace Engineering",
    description:
      "Computational analysis of subsonic airfoil performance characteristics including lift-to-drag ratio optimisation, pressure distribution mapping, and boundary layer evaluation under variable Reynolds number conditions.",
    tags: ["MATLAB", "CFD", "Aerodynamics"],
    wireColor: WIRE_COLORS[0],
    pinLabel: "A1",
  },
  {
    id: 2,
    title: "Structural Load Path Simulation",
    category: "Aerospace Engineering",
    description:
      "Finite element analysis of a simplified fuselage section under combined loading scenarios. Evaluated stress concentrations, safety margins, and material efficiency for aluminium alloy configurations.",
    tags: ["FEA", "SolidWorks", "Structures"],
    wireColor: WIRE_COLORS[1],
    pinLabel: "A2",
  },
  {
    id: 3,
    title: "Flight Data Telemetry Dashboard",
    category: "Software Development",
    description:
      "Real-time data visualisation tool for flight telemetry streams. Built with Python and a lightweight web front-end, processing altitude, velocity, and attitude data for post-flight analysis.",
    tags: ["Python", "React", "Data Viz"],
    wireColor: WIRE_COLORS[2],
    pinLabel: "B1",
  },
  {
    id: 4,
    title: "Orbital Mechanics Solver",
    category: "Software Development",
    description:
      "C++ application implementing Kepler orbit propagation, Hohmann transfer calculations, and delta-v budgeting for basic mission trajectory planning exercises.",
    tags: ["C++", "Astrodynamics", "Algorithms"],
    wireColor: WIRE_COLORS[3],
    pinLabel: "B2",
  },
  {
    id: 5,
    title: "Product Visualisation — 3D Renders",
    category: "3D & Design",
    description:
      "Photorealistic 3D product mockups and packaging renders created for freelance clients using Blender. Focus on lighting, material accuracy, and commercial-grade output quality.",
    tags: ["Blender", "3D Rendering", "Design"],
    wireColor: WIRE_COLORS[4],
    pinLabel: "C1",
  },
  {
    id: 6,
    title: "Propulsion System Concept Model",
    category: "3D & Design",
    description:
      "Detailed 3D model of a turbojet engine cross-section for academic presentation. Modelled individual components including compressor stages, combustion chamber, and turbine assembly.",
    tags: ["Blender", "CAD", "Propulsion"],
    wireColor: WIRE_COLORS[5],
    pinLabel: "C2",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-24 md:py-36 px-6 section-divide"
    >
      <div className="absolute inset-0 schematic-grid pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-xs tracking-[0.25em] uppercase text-muted mb-6 font-mono">
            // PROJECTS
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15] text-foreground mb-4">
            On the <span className="text-accent">breadboard.</span>
          </h2>
          <p className="text-sm text-muted mb-16 max-w-lg">
            Each project is a component plugged into the board — connected by shared skills and engineering discipline.
          </p>
        </FadeIn>

        <StaggerContainer
          className="grid md:grid-cols-2 gap-6"
          staggerDelay={0.1}
        >
          {projects.map((project) => (
            <StaggerItem key={project.id}>
              <motion.div
                whileHover={{ y: -4, boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="breadboard-card h-full"
              >
                {/* Power rails */}
                <div className="power-rails-top">
                  <div className="power-rail-red" />
                  <div className="power-rail-blue" />
                </div>
                <div className="power-rails-bottom">
                  <div className="power-rail-blue" />
                  <div className="power-rail-red" />
                </div>

                <div className="card-inner p-7 md:p-8 flex flex-col h-full">
                  {/* Header row: pin label + category */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="row-label border border-border px-2 py-0.5 rounded-sm bg-white/60">
                        {project.pinLabel}
                      </span>
                      <p className="text-[11px] tracking-[0.2em] uppercase text-accent/70 font-medium">
                        {project.category}
                      </p>
                    </div>
                    <div
                      className="led-indicator"
                      style={{
                        color: `var(--color-led-${project.wireColor === "purple" ? "blue" : project.wireColor})`,
                        backgroundColor: `var(--color-led-${project.wireColor === "purple" ? "blue" : project.wireColor})`,
                      }}
                    />
                  </div>

                  <h3 className="text-lg font-semibold text-foreground mb-3 leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-sm text-muted leading-relaxed flex-1 mb-5">
                    {project.description}
                  </p>

                  {/* Jumper wire tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={tag}
                        className={`jumper-wire jumper-wire--${WIRE_COLORS[i % WIRE_COLORS.length]}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
