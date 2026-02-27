"use client";

import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "./MotionPrimitives";

const skills = [
  {
    category: "Engineering",
    items: [
      "Aerodynamics",
      "Propulsion Systems",
      "Structural Analysis",
      "Control Theory",
    ],
  },
  {
    category: "Computation",
    items: ["CFD Simulation", "FEA Modeling", "Machine Learning", "Data Analysis"],
  },
  {
    category: "Development",
    items: ["TypeScript", "React / Next.js", "Python", "Rust"],
  },
  {
    category: "Creative",
    items: ["3D Visualization", "UI/UX Design", "Motion Design", "WebGL"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 md:py-48 px-6">
      {/* background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-violet/[0.02] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <FadeIn>
          <p className="text-sm tracking-[0.3em] uppercase text-accent/60 mb-8">
            Capabilities
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-20">
            Tools of the <span className="gradient-text">trade</span>
          </h2>
        </FadeIn>

        <StaggerContainer
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          staggerDelay={0.15}
        >
          {skills.map((group) => (
            <StaggerItem key={group.category}>
              <div className="group p-6 md:p-8 rounded-2xl bg-surface/30 border border-white/[0.04] hover:border-accent/15 transition-all duration-500">
                <h3 className="text-sm tracking-[0.2em] uppercase text-accent/70 mb-6 font-medium">
                  {group.category}
                </h3>
                <ul className="space-y-4">
                  {group.items.map((item, j) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.1 * j,
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="flex items-center gap-3 text-foreground/70 text-sm"
                    >
                      <span className="w-1 h-1 rounded-full bg-accent/40 shrink-0" />
                      {item}
                    </motion.li>
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
