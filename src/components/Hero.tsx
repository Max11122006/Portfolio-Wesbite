"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-background to-background" />
        <motion.div
          animate={{
            background: [
              "radial-gradient(ellipse 70% 40% at 50% 45%, rgba(61,107,153,0.04) 0%, transparent 70%)",
              "radial-gradient(ellipse 60% 50% at 55% 50%, rgba(61,107,153,0.06) 0%, transparent 70%)",
              "radial-gradient(ellipse 70% 40% at 45% 45%, rgba(61,107,153,0.04) 0%, transparent 70%)",
            ],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          className="absolute inset-0"
        />
      </div>

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
      >
        {/* Overline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-xs md:text-sm tracking-[0.25em] uppercase text-muted mb-8"
        >
          Edinburgh, Scotland
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-foreground mb-8"
        >
          Engineering Precision.
          <br />
          <span className="text-accent">Operating with Responsibility.</span>
        </motion.h1>

        {/* Subheading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-1 mb-12"
        >
          <p className="text-base md:text-lg text-muted">
            BEng (Hons) Aerospace Engineering — Heriot-Watt University
          </p>
          <p className="text-sm md:text-base text-muted/70">
            Future Commercial Pilot
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-foreground text-white text-sm font-medium rounded-lg hover:bg-foreground/90 transition-colors"
          >
            View Work
          </a>
          <a
            href="#about"
            className="px-6 py-3 text-sm font-medium text-muted border border-border rounded-lg hover:border-foreground/30 hover:text-foreground transition-colors"
          >
            Learn More
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-5 h-8 rounded-full border border-border flex items-start justify-center pt-1.5"
        >
          <div className="w-0.5 h-1.5 bg-muted/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
