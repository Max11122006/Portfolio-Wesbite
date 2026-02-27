"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "./MotionPrimitives";

const skills = [
  {
    category: "Engineering",
    items: [
      "Aerodynamics & Flight Mechanics",
      "Structural Analysis (FEA)",
      "Propulsion Systems",
      "Thermodynamics & Fluid Dynamics",
      "Control Systems Theory",
    ],
  },
  {
    category: "Software",
    items: [
      "Python & MATLAB",
      "C / C++",
      "TypeScript / React / Next.js",
      "Data Analysis & Visualisation",
      "Git & CI/CD Workflows",
    ],
  },
  {
    category: "Operations",
    items: [
      "Property & Asset Management",
      "Tenant Relations & Compliance",
      "Financial Reporting",
      "Project Planning & Scheduling",
      "Risk Assessment",
    ],
  },
  {
    category: "Design",
    items: [
      "3D Modelling (Blender & SolidWorks)",
      "Product Visualisation",
      "Brand Identity Design",
      "UI/UX Fundamentals",
      "Adobe Creative Suite",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 md:py-36 px-6 section-divide"
    >
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-xs tracking-[0.25em] uppercase text-muted mb-6">
            Capabilities
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15] text-foreground mb-16">
            Core <span className="text-accent">competencies.</span>
          </h2>
        </FadeIn>

        <StaggerContainer
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          staggerDelay={0.12}
        >
          {skills.map((group) => (
            <StaggerItem key={group.category}>
              <div className="p-6 rounded-xl bg-surface border border-border h-full">
                <h3 className="text-xs tracking-[0.2em] uppercase text-accent font-medium mb-5">
                  {group.category}
                </h3>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-muted leading-relaxed"
                    >
                      <span className="w-1 h-1 rounded-full bg-accent/40 shrink-0 mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
