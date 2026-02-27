"use client";

import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "./MotionPrimitives";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tags: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Subsonic Wing Aerodynamic Analysis",
    category: "Aerospace Engineering",
    description:
      "Computational analysis of subsonic airfoil performance characteristics including lift-to-drag ratio optimisation, pressure distribution mapping, and boundary layer evaluation under variable Reynolds number conditions.",
    tags: ["MATLAB", "CFD", "Aerodynamics"],
  },
  {
    id: 2,
    title: "Structural Load Path Simulation",
    category: "Aerospace Engineering",
    description:
      "Finite element analysis of a simplified fuselage section under combined loading scenarios. Evaluated stress concentrations, safety margins, and material efficiency for aluminium alloy configurations.",
    tags: ["FEA", "SolidWorks", "Structures"],
  },
  {
    id: 3,
    title: "Flight Data Telemetry Dashboard",
    category: "Software Development",
    description:
      "Real-time data visualisation tool for flight telemetry streams. Built with Python and a lightweight web front-end, processing altitude, velocity, and attitude data for post-flight analysis.",
    tags: ["Python", "React", "Data Viz"],
  },
  {
    id: 4,
    title: "Orbital Mechanics Solver",
    category: "Software Development",
    description:
      "C++ application implementing Kepler orbit propagation, Hohmann transfer calculations, and delta-v budgeting for basic mission trajectory planning exercises.",
    tags: ["C++", "Astrodynamics", "Algorithms"],
  },
  {
    id: 5,
    title: "Product Visualisation — 3D Renders",
    category: "3D & Design",
    description:
      "Photorealistic 3D product mockups and packaging renders created for freelance clients using Blender. Focus on lighting, material accuracy, and commercial-grade output quality.",
    tags: ["Blender", "3D Rendering", "Design"],
  },
  {
    id: 6,
    title: "Propulsion System Concept Model",
    category: "3D & Design",
    description:
      "Detailed 3D model of a turbojet engine cross-section for academic presentation. Modelled individual components including compressor stages, combustion chamber, and turbine assembly.",
    tags: ["Blender", "CAD", "Propulsion"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-24 md:py-36 px-6 section-divide"
    >
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-xs tracking-[0.25em] uppercase text-muted mb-6">
            Projects
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15] text-foreground mb-16">
            Selected <span className="text-accent">work.</span>
          </h2>
        </FadeIn>

        <StaggerContainer
          className="grid md:grid-cols-2 gap-5"
          staggerDelay={0.1}
        >
          {projects.map((project) => (
            <StaggerItem key={project.id}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="group p-7 md:p-8 rounded-xl bg-surface border border-border hover:border-border/80 hover:shadow-md transition-shadow duration-300 h-full flex flex-col"
              >
                <p className="text-[11px] tracking-[0.2em] uppercase text-accent/70 mb-3 font-medium">
                  {project.category}
                </p>

                <h3 className="text-lg font-semibold text-foreground mb-3 leading-snug">
                  {project.title}
                </h3>

                <p className="text-sm text-muted leading-relaxed flex-1 mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-[11px] tracking-wide text-muted bg-surface-alt border border-border-light"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
