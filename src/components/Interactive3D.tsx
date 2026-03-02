"use client";

import dynamic from "next/dynamic";
import { FadeIn } from "./MotionPrimitives";

const Scene = dynamic(() => import("./three/Scene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-12 h-12 rounded-full border border-border animate-pulse" />
    </div>
  ),
});

export default function Interactive3D() {
  return (
    <section className="relative py-24 md:py-36 overflow-hidden">
      {/* Very subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/30 to-background pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <FadeIn>
              <p className="text-xs tracking-[0.25em] uppercase text-muted mb-6 font-mono">
                // VISION
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15] text-foreground mb-6">
                Built for the{" "}
                <span className="gradient-text">long trajectory.</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-base text-muted leading-relaxed max-w-lg">
                Engineering is about more than equations — it&apos;s about
                understanding systems at every scale. From airfoil geometry to
                asset portfolios, the same discipline of structured analysis and
                operational responsibility applies.
              </p>
            </FadeIn>
          </div>

          {/* 3D Canvas */}
          <FadeIn delay={0.3} direction="none">
            <div className="aspect-square max-h-[480px] w-full">
              <Scene />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
