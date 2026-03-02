"use client";

import { motion } from "framer-motion";
import { FadeIn } from "./MotionPrimitives";

const principles = [
  "Clarity precedes optimisation.",
  "Discipline precedes scale.",
  "Responsibility precedes authority.",
];

export default function Philosophy() {
  return (
    <section className="relative py-24 md:py-36 px-6 section-divide overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="ambient-orb w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent/3" />
      </div>

      <div className="relative max-w-3xl mx-auto text-center">
        <FadeIn>
          <p className="text-xs tracking-[0.3em] uppercase text-muted mb-6 font-mono">
            // ENGINEERING PHILOSOPHY
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] text-foreground mb-4">
            First <span className="gradient-text">principles.</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="text-sm text-muted mb-16 max-w-md mx-auto">
            Three axioms that govern how I approach every system, every decision, every build.
          </p>
        </FadeIn>

        {/* Principles — large typographic display */}
        <div className="space-y-8 mb-16">
          {principles.map((principle, i) => (
            <FadeIn key={principle} delay={0.2 + i * 0.12}>
              <motion.div
                className="group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-4 justify-center">
                  <span className="text-xs font-mono text-accent/50 w-6 text-right">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground/90 tracking-tight">
                    {principle}
                  </p>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* Closing line */}
        <FadeIn delay={0.6}>
          <div className="glow-line mb-10" />
          <p className="text-sm text-muted leading-relaxed max-w-lg mx-auto">
            Engineering is about more than equations — it&apos;s about understanding systems
            at every scale. From airfoil geometry to asset portfolios, the same discipline
            of structured analysis and operational accountability applies.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
