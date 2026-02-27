"use client";

import dynamic from "next/dynamic";
import { FadeIn } from "./MotionPrimitives";

const Scene = dynamic(() => import("./three/Scene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-16 h-16 rounded-full border border-accent/20 animate-pulse" />
    </div>
  ),
});

export default function Interactive3D() {
  return (
    <section className="relative py-32 md:py-48 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/[0.03] rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <FadeIn>
              <p className="text-sm tracking-[0.3em] uppercase text-accent/60 mb-8">
                Vision
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-8">
                Beyond the{" "}
                <span className="gradient-text">atmosphere</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-lg text-muted leading-relaxed max-w-lg">
                Every great leap in engineering begins with the courage to
                reimagine what&apos;s possible. I build tools and systems that
                push us closer to that next frontier.
              </p>
            </FadeIn>
          </div>

          {/* 3D Canvas */}
          <FadeIn delay={0.3} direction="none">
            <div className="aspect-square max-h-[600px] w-full">
              <Scene />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
