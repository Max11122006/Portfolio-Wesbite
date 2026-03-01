"use client";

import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "./MotionPrimitives";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tags: string[];
  ledColor: string;
  schematicLabel: string;
}

const LED_COLORS = ["#ef4444", "#22c55e", "#3b82f6", "#eab308", "#f97316", "#a855f7"];

const projects: Project[] = [
  {
    id: 1,
    title: "Subsonic Wing Aerodynamic Analysis",
    category: "Aerospace Engineering",
    description:
      "Computational analysis of subsonic airfoil performance characteristics including lift-to-drag ratio optimisation, pressure distribution mapping, and boundary layer evaluation under variable Reynolds number conditions.",
    tags: ["MATLAB", "CFD", "Aerodynamics"],
    ledColor: LED_COLORS[1],
    schematicLabel: "U1",
  },
  {
    id: 2,
    title: "Structural Load Path Simulation",
    category: "Aerospace Engineering",
    description:
      "Finite element analysis of a simplified fuselage section under combined loading scenarios. Evaluated stress concentrations, safety margins, and material efficiency for aluminium alloy configurations.",
    tags: ["FEA", "SolidWorks", "Structures"],
    ledColor: LED_COLORS[0],
    schematicLabel: "U2",
  },
  {
    id: 3,
    title: "Flight Data Telemetry Dashboard",
    category: "Software Development",
    description:
      "Real-time data visualisation tool for flight telemetry streams. Built with Python and a lightweight web front-end, processing altitude, velocity, and attitude data for post-flight analysis.",
    tags: ["Python", "React", "Data Viz"],
    ledColor: LED_COLORS[2],
    schematicLabel: "U3",
  },
  {
    id: 4,
    title: "Orbital Mechanics Solver",
    category: "Software Development",
    description:
      "C++ application implementing Kepler orbit propagation, Hohmann transfer calculations, and delta-v budgeting for basic mission trajectory planning exercises.",
    tags: ["C++", "Astrodynamics", "Algorithms"],
    ledColor: LED_COLORS[3],
    schematicLabel: "U4",
  },
  {
    id: 5,
    title: "Product Visualisation — 3D Renders",
    category: "3D & Design",
    description:
      "Photorealistic 3D product mockups and packaging renders created for freelance clients using Blender. Focus on lighting, material accuracy, and commercial-grade output quality.",
    tags: ["Blender", "3D Rendering", "Design"],
    ledColor: LED_COLORS[4],
    schematicLabel: "U5",
  },
  {
    id: 6,
    title: "Propulsion System Concept Model",
    category: "3D & Design",
    description:
      "Detailed 3D model of a turbojet engine cross-section for academic presentation. Modelled individual components including compressor stages, combustion chamber, and turbine assembly.",
    tags: ["Blender", "CAD", "Propulsion"],
    ledColor: LED_COLORS[5],
    schematicLabel: "U6",
  },
];

function CopperTrace({ top, left, width, angle = 0 }: { top: string; left: string; width: string; angle?: number }) {
  return (
    <div
      className="copper-trace"
      style={{
        top,
        left,
        width,
        height: "2px",
        transform: `rotate(${angle}deg)`,
      }}
    />
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-24 md:py-36 px-6 section-divide"
    >
      {/* Schematic grid background */}
      <div className="absolute inset-0 schematic-grid pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-xs tracking-[0.25em] uppercase text-muted mb-6 font-mono">
            // PROJECTS
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15] text-foreground mb-4">
            Circuit <span className="text-accent">board.</span>
          </h2>
          <p className="text-sm text-muted mb-16 max-w-lg">
            Each project is a module on the board — connected by shared skills and engineering discipline.
          </p>
        </FadeIn>

        <StaggerContainer
          className="grid md:grid-cols-2 gap-6"
          staggerDelay={0.1}
        >
          {projects.map((project) => (
            <StaggerItem key={project.id}>
              <motion.div
                whileHover={{ y: -4, boxShadow: `0 0 24px ${project.ledColor}15` }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="breadboard-card h-full"
              >
                {/* Through-hole pattern overlay */}
                <div className="through-holes" />

                {/* Copper traces decoration */}
                <CopperTrace top="30%" left="0" width="20%" />
                <CopperTrace top="60%" left="80%" width="20%" />
                <CopperTrace top="85%" left="0" width="35%" angle={0} />

                <div className="card-inner p-7 md:p-8 flex flex-col h-full">
                  {/* Header row: schematic label + LED */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-mono text-copper-light/60 border border-copper/20 px-2 py-0.5 rounded-sm bg-black/20">
                        {project.schematicLabel}
                      </span>
                      <p className="text-[11px] tracking-[0.2em] uppercase text-emerald-300/60 font-medium">
                        {project.category}
                      </p>
                    </div>
                    <div
                      className="led-indicator"
                      style={{ color: project.ledColor, backgroundColor: project.ledColor }}
                    />
                  </div>

                  <h3 className="text-lg font-semibold text-emerald-50 mb-3 leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-sm text-emerald-100/60 leading-relaxed flex-1 mb-5">
                    {project.description}
                  </p>

                  {/* IC chip tags */}
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag) => (
                      <span key={tag} className="ic-chip">
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
