"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function GridLines() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Moving horizontal scan lines */}
      <motion.div
        animate={{ y: ["-100%", "100%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-x-0 h-full"
       >
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-full h-px"
            style={{
              top: `${12.5 * i}%`,
              background: `linear-gradient(90deg, transparent 0%, rgba(96,165,250,0.06) 20%, rgba(96,165,250,0.06) 80%, transparent 100%)`,
            }}
          />
        ))}
      </motion.div>

      {/* Static vertical lines */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute top-0 bottom-0 w-px"
          style={{
            left: `${16.66 * (i + 1)}%`,
            background: `linear-gradient(180deg, transparent 0%, rgba(96,165,250,0.04) 30%, rgba(96,165,250,0.04) 70%, transparent 100%)`,
          }}
        />
      ))}
    </div>
  );
}

function FloatingParticles() {
  const [particles] = useState(() =>
    [...Array(24)].map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 1 + Math.random() * 2,
      duration: 15 + Math.random() * 20,
      delay: Math.random() * -20,
    }))
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-accent/20"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={{
            y: [0, -60, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Deep dark gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#060608] via-background to-background" />

        {/* Ambient glow orbs */}
        <div className="ambient-orb w-[600px] h-[600px] -top-40 -left-40 bg-accent/5" />
        <div className="ambient-orb w-[500px] h-[500px] -bottom-20 -right-40 bg-purple-500/4" />

        {/* Animated grid lines */}
        <GridLines />

        {/* Floating particles */}
        <FloatingParticles />

        {/* Radial vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,transparent_0%,rgba(10,10,12,0.6)_100%)]" />
      </div>

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
      >
        {/* Overline - mono label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-center gap-3 mb-10"
        >
          <div className="w-8 h-px bg-accent/40" />
          <p className="text-xs tracking-[0.3em] uppercase text-muted font-mono">
            Aerospace Engineer & Pilot
          </p>
          <div className="w-8 h-px bg-accent/40" />
        </motion.div>

        {/* Headline — kinetic entrance */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] text-foreground mb-8"
        >
          Engineering systems.
          <br />
          <span className="gradient-text">Building futures.</span>
        </motion.h1>

        {/* Sub-line */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="text-base md:text-lg text-muted max-w-xl mx-auto mb-12"
        >
          BEng Aerospace Engineering — Heriot-Watt University.
          <br className="hidden sm:block" />
          Systems thinker. Future commercial pilot.
        </motion.p>

        {/* Single CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.95, ease: [0.22, 1, 0.36, 1] }}
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-3 px-8 py-3.5 text-sm font-medium rounded-lg border border-accent/30 text-accent hover:bg-accent/10 hover:border-accent/50 transition-all duration-300"
          >
            View my work
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              →
            </motion.span>
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-5 h-8 rounded-full border border-border/60 flex items-start justify-center pt-1.5"
        >
          <div className="w-0.5 h-1.5 bg-accent/40 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
