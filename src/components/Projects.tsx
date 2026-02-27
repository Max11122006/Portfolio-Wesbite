"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "./MotionPrimitives";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  details: string;
  tech: string[];
  year: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Hypersonic Flow Simulation",
    category: "Computational Research",
    description: "Real-time CFD visualization system for hypersonic vehicle aerodynamics analysis.",
    details:
      "Developed a high-fidelity computational fluid dynamics pipeline capable of simulating flow characteristics at Mach 5+. Integrated GPU-accelerated solvers with a custom WebGL visualization layer, enabling real-time exploration of pressure distributions, shock wave formations, and thermal profiles across parametric vehicle geometries.",
    tech: ["Python", "CUDA", "WebGL", "React"],
    year: "2025",
  },
  {
    id: 2,
    title: "Autonomous Drone Swarm",
    category: "Robotics & AI",
    description: "Multi-agent coordination system for autonomous aerial vehicle formations.",
    details:
      "Engineered a decentralized swarm intelligence framework enabling 50+ UAVs to maintain formation integrity in dynamic environments. The system utilizes custom path-planning algorithms with real-time obstacle avoidance, peer-to-peer communication protocols, and adaptive formation reconfiguration based on mission parameters.",
    tech: ["C++", "ROS", "TensorFlow", "Rust"],
    year: "2024",
  },
  {
    id: 3,
    title: "Orbital Mechanics Visualizer",
    category: "Interactive Experience",
    description: "Immersive 3D platform for orbital trajectory planning and visualization.",
    details:
      "Built an interactive web-based tool for visualizing and computing orbital transfer trajectories. Features include real-time Hohmann transfer calculations, gravitational assist planning, delta-v budgeting, and a photorealistic rendering engine for spacecraft visualization. Used by academic teams across three universities.",
    tech: ["Three.js", "TypeScript", "WebGPU", "Rust WASM"],
    year: "2024",
  },
  {
    id: 4,
    title: "Propulsion Telemetry Dashboard",
    category: "Systems Engineering",
    description: "Mission-critical monitoring interface for experimental propulsion test campaigns.",
    details:
      "Designed and implemented a real-time telemetry dashboard for monitoring experimental rocket engine test firings. Processes 10,000+ sensor readings per second with sub-millisecond latency. Features anomaly detection, automated safety interlocks, and comprehensive post-test analysis with exportable reports.",
    tech: ["Next.js", "D3.js", "PostgreSQL", "Go"],
    year: "2023",
  },
];

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative glass rounded-2xl p-8 md:p-12 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors text-foreground/60 hover:text-foreground"
        >
          ✕
        </button>

        <p className="text-sm tracking-[0.2em] uppercase text-accent/60 mb-2">
          {project.category}
        </p>
        <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-muted mb-8">{project.year}</p>

        <p className="text-foreground/70 leading-relaxed mb-8">
          {project.details}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 rounded-full text-xs tracking-wide bg-accent/10 text-accent/80 border border-accent/10"
            >
              {t}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-32 md:py-48 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <p className="text-sm tracking-[0.3em] uppercase text-accent/60 mb-8">
            Projects
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-20">
            Selected <span className="gradient-text">work</span>
          </h2>
        </FadeIn>

        {/* Project grid */}
        <div className="grid gap-6">
          {projects.map((project, i) => (
            <FadeIn key={project.id} delay={0.1 * i}>
              <motion.button
                onClick={() => setSelectedProject(project)}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="group relative w-full text-left p-8 md:p-12 rounded-2xl bg-surface/50 border border-white/[0.04] hover:border-accent/20 transition-colors duration-500 overflow-hidden cursor-pointer"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-r from-accent/[0.04] via-transparent to-accent-violet/[0.04]" />

                <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
                  <div className="flex-1">
                    <p className="text-xs tracking-[0.2em] uppercase text-accent/50 mb-3">
                      {project.category}
                    </p>
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight mb-3 group-hover:text-foreground transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted text-sm md:text-base max-w-xl leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="px-2 py-1 rounded-full text-xs text-muted/60 border border-white/5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <motion.div
                      whileHover={{ x: 4 }}
                      className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-muted group-hover:text-accent group-hover:border-accent/30 transition-colors shrink-0"
                    >
                      →
                    </motion.div>
                  </div>
                </div>
              </motion.button>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
