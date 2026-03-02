"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "./MotionPrimitives";

const WIRE_COLORS = ["red", "blue", "green", "yellow"];

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
          <p className="text-xs tracking-[0.25em] uppercase text-muted mb-6 font-mono">
            // CAPABILITIES
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
          {skills.map((group, gi) => (
            <StaggerItem key={group.category}>
              <div className="breadboard-card h-full">
                <div className="power-rails-top">
                  <div className="power-rail-red" />
                  <div className="power-rail-blue" />
                </div>
                <div className="power-rails-bottom">
                  <div className="power-rail-blue" />
                  <div className="power-rail-red" />
                </div>
                <div className="card-inner p-6 pt-8 pb-8">
                  <h3 className="text-xs tracking-[0.2em] uppercase text-accent font-medium font-mono mb-5">
                    {group.category}
                  </h3>
                  <ul className="space-y-3">
                    {group.items.map((item, i) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-muted leading-relaxed"
                      >
                        <span
                          className="w-2 h-2 rounded-full shrink-0 mt-1.5"
                          style={{
                            backgroundColor: `var(--color-led-${
                              ["red", "green", "blue", "yellow"][i % 4]
                            })`,
                          }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
