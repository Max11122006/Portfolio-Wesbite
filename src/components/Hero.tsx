"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SolariBoard from "./SolariBoard";

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
      {/* Engineering grid background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-background to-background" />
        <div className="absolute inset-0 schematic-grid opacity-40" />
        <motion.div
          animate={{
            background: [
              "radial-gradient(ellipse 70% 40% at 50% 45%, rgba(45,106,79,0.05) 0%, transparent 70%)",
              "radial-gradient(ellipse 60% 50% at 55% 50%, rgba(45,106,79,0.08) 0%, transparent 70%)",
              "radial-gradient(ellipse 70% 40% at 45% 45%, rgba(45,106,79,0.05) 0%, transparent 70%)",
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
        className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center"
      >
        {/* Solari Board */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <SolariBoard
            rows={[
              { text: "MAKSYMILIAN DUBOWSKI", color: "white" },
              { text: "BENG AEROSPACE ENGINEERING", color: "amber" },
            ]}
          />
        </motion.div>

        {/* Location tag */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 3.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-xs tracking-[0.25em] uppercase text-muted mt-10 mb-8 font-mono"
        >
          // Edinburgh, Scotland
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 3.8, ease: [0.22, 1, 0.36, 1] }}
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
        transition={{ delay: 4.5, duration: 0.8 }}
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
