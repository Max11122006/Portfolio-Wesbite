"use client";

import { FadeIn } from "./MotionPrimitives";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-32 md:py-48 px-6 overflow-hidden"
    >
      {/* Background lighting shift */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <FadeIn>
          <p className="text-sm tracking-[0.3em] uppercase text-accent/60 mb-8">
            About
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-12">
            Where precision meets{" "}
            <span className="gradient-text">imagination</span>
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <FadeIn delay={0.2}>
            <p className="text-lg text-muted leading-relaxed">
              I operate at the intersection of aerospace engineering and digital
              innovation. With a foundation in systems design and propulsion
              theory, I bring analytical rigor to every creative challenge.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-lg text-muted leading-relaxed">
              My work spans from computational fluid dynamics to interactive 3D
              experiences — always seeking the elegant solution hidden within
              complex problems. Every project is an opportunity to push further.
            </p>
          </FadeIn>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-white/5">
          {[
            { value: "5+", label: "Years Experience" },
            { value: "30+", label: "Projects Delivered" },
            { value: "12", label: "Technologies" },
            { value: "∞", label: "Curiosity" },
          ].map((stat, i) => (
            <FadeIn key={stat.label} delay={0.1 * i}>
              <div className="text-center md:text-left">
                <p className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-muted tracking-wide">
                  {stat.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
