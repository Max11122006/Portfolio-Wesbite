"use client";

import { FadeIn } from "./MotionPrimitives";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-36 px-6 section-divide"
    >
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-xs tracking-[0.25em] uppercase text-muted mb-6 font-mono">
            // ABOUT
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-start">
          {/* Text — 3 cols */}
          <div className="lg:col-span-3 space-y-8">
            <FadeIn delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15] text-foreground">
                Systems-level thinking.
                <br />
                <span className="text-accent">Operational precision.</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-base md:text-lg text-muted leading-relaxed max-w-xl">
                I&apos;m Maksymilian Dubowski — an aerospace engineering student
                at Heriot-Watt University with a trajectory set toward commercial
                aviation. My approach is rooted in disciplined analysis,
                structured decision-making, and a long-term operational mindset.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-base md:text-lg text-muted leading-relaxed max-w-xl">
                Beyond the classroom, I manage a private residential property
                portfolio in Edinburgh — handling tenant relations, maintenance
                coordination, and financial oversight. This experience in
                real-world asset management has sharpened my ability to operate
                under uncertainty, prioritise effectively, and maintain
                accountability across complex systems.
              </p>
            </FadeIn>

            <FadeIn delay={0.35}>
              <p className="text-sm text-muted/70">
                Bilingual — English & Polish (native proficiency)
              </p>
            </FadeIn>
          </div>

          {/* Portrait placeholder — 2 cols */}
          <FadeIn delay={0.3} direction="right" className="lg:col-span-2">
            <div className="aspect-[4/5] rounded-xl bg-gradient-to-br from-surface-alt to-border-light border border-border flex items-end justify-center overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
              <div className="relative pb-8 text-center">
                <div className="w-20 h-20 rounded-full bg-surface-alt border border-border mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-accent/60">MD</span>
                </div>
                <p className="text-sm font-medium text-foreground">
                  Maksymilian Dubowski
                </p>
                <p className="text-xs text-muted mt-1">Edinburgh, Scotland</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
