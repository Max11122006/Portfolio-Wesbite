"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "./MotionPrimitives";
import BreadboardCard from "./BreadboardCard";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tags: string[];
  wireColor: string;
}

const WIRE_COLORS = ["red", "blue", "green", "yellow", "orange", "purple"];

const projects: Project[] = [
  {
    id: 1,
    title: "Missile Trajectory Tracker",
    category: "Software & Simulation",
    description:
      "Physics-based simulation and visualisation tool for modelling projectile trajectories and flight paths. Built to experiment with motion equations, trajectory prediction, and interactive data visualisation of simulated launches.",
    tags: ["Python", "Physics Simulation", "Data Visualisation", "Mathematics"],
    wireColor: WIRE_COLORS[0],
  },
  {
    id: 2,
    title: "Storm Formation Analysis Tool",
    category: "Software & Data",
    description:
      "Experimental system analysing satellite imagery and weather data to identify patterns associated with storm development. Built using weather APIs and image analysis to explore how environmental data can indicate developing storms.",
    tags: ["Python", "Weather APIs", "Data Analysis", "Computer Vision"],
    wireColor: WIRE_COLORS[1],
  },
  {
    id: 3,
    title: "Beam Deflection Measurement Rig",
    category: "Experimental Engineering",
    description:
      "Experimental setup built to measure beam deflection under applied loads in order to estimate Young\u2019s modulus of a brass beam. A custom rig was constructed and instrumented with an Arduino-based measurement system to record displacement, allowing experimental results to be compared with theoretical beam bending equations.",
    tags: ["Arduino", "Structural Mechanics", "Experimental Engineering", "Sensors", "Data Analysis"],
    wireColor: WIRE_COLORS[2],
  },
  {
    id: 4,
    title: "3D Printing & Mechanical Prototyping",
    category: "Design & Fabrication",
    description:
      "Ongoing experimentation with 3D printing to prototype mechanical components and test design ideas. Used to create functional parts, explore design constraints, and iterate on small mechanical systems.",
    tags: ["CAD", "3D Printing", "Mechanical Design", "Prototyping"],
    wireColor: WIRE_COLORS[3],
  },
  {
    id: 5,
    title: "Honda Civic Engineering Projects",
    category: "Automotive & Mechanical",
    description:
      "Hands-on mechanical work and experimentation on my 2006 Honda Civic, including maintenance, diagnostics, and small modifications. A practical way of learning automotive systems and real-world mechanical engineering.",
    tags: ["Automotive Systems", "Mechanical Engineering", "Diagnostics", "Problem Solving"],
    wireColor: WIRE_COLORS[4],
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
            Selected <span className="text-accent">Projects.</span>
          </h2>
          <p className="text-sm text-muted mb-16 max-w-lg">
            A selection of projects and experiments exploring software, embedded systems, and engineering concepts.
          </p>
        </FadeIn>

        <StaggerContainer
          className="grid md:grid-cols-2 gap-6"
          staggerDelay={0.1}
        >
          {projects.map((project) => (
            <StaggerItem key={project.id}>
              <BreadboardCard className="h-full" hover>
                <div className="p-7 md:p-8 pt-7 pb-7 flex flex-col h-full">
                  {/* Category */}
                  <p className="text-[11px] tracking-[0.2em] uppercase text-accent/70 font-medium mb-4">
                    {project.category}
                  </p>

                  <h3 className="text-lg font-semibold text-foreground mb-3 leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-sm text-muted leading-relaxed mb-4">
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
              </BreadboardCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
