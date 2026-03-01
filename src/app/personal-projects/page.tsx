"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/MotionPrimitives";

interface PersonalProject {
  id: string;
  title: string;
  subtitle: string;
  status: "active" | "completed" | "in-progress";
  ledColor: string;
  schematicLabel: string;
  description: string;
  specs: { label: string; value: string }[];
  milestones: { title: string; done: boolean }[];
  images?: string[];
}

const personalProjects: PersonalProject[] = [
  {
    id: "3d-printer",
    title: "Custom 3D Printer Build",
    subtitle: "FDM / CoreXY Platform",
    status: "in-progress",
    ledColor: "#22c55e",
    schematicLabel: "P1",
    description:
      "Building and tuning a custom 3D printer from the ground up. The project covers mechanical assembly, electronics wiring, firmware configuration, and calibration — applying first-principles engineering to additive manufacturing.",
    specs: [
      { label: "Type", value: "CoreXY / FDM" },
      { label: "Build Volume", value: "300 × 300 × 350 mm" },
      { label: "Controller", value: "BTT Octopus + Klipper" },
      { label: "Hotend", value: "E3D V6 / All-Metal" },
      { label: "Frame", value: "2020 / 2040 Aluminium Extrusion" },
      { label: "Bed", value: "Spring Steel PEI + AC Heater" },
    ],
    milestones: [
      { title: "Frame assembly & squaring", done: true },
      { title: "Motion system — belts, pulleys, rails", done: true },
      { title: "Electronics wiring & mainboard setup", done: true },
      { title: "Klipper firmware flash & initial config", done: true },
      { title: "First print & PID tuning", done: false },
      { title: "Input shaper calibration", done: false },
      { title: "Enclosure & filtration system", done: false },
    ],
  },
  {
    id: "car",
    title: "Car Project",
    subtitle: "Performance & Maintenance",
    status: "active",
    ledColor: "#ef4444",
    schematicLabel: "P2",
    description:
      "Hands-on automotive work covering routine maintenance, diagnostics, and performance modifications. Understanding mechanical systems through direct interaction — applying engineering knowledge to real-world problem-solving.",
    specs: [
      { label: "Focus", value: "Maintenance & Mods" },
      { label: "Diagnostics", value: "OBD-II / VCDS" },
      { label: "Areas", value: "Suspension, Intake, ECU" },
      { label: "Tools", value: "Torque wrenches, multimeter, jack stands" },
    ],
    milestones: [
      { title: "Full service — oils, filters, fluids", done: true },
      { title: "Brake pad & rotor replacement", done: true },
      { title: "Suspension inspection & bushing refresh", done: true },
      { title: "Cold air intake install", done: false },
      { title: "Coilover suspension upgrade", done: false },
      { title: "ECU remap / Stage 1 tune", done: false },
    ],
  },
];

const statusMap = {
  active: { label: "ACTIVE", color: "#22c55e" },
  completed: { label: "COMPLETE", color: "#3b82f6" },
  "in-progress": { label: "IN PROGRESS", color: "#eab308" },
};

export default function PersonalProjectsPage() {
  const [expanded, setExpanded] = useState<string | null>(personalProjects[0].id);

  return (
    <main className="bg-background min-h-screen">
      <Navbar />

      <section className="pt-32 pb-24 md:pb-36 px-6">
        {/* Schematic grid background */}
        <div className="fixed inset-0 schematic-grid pointer-events-none opacity-50" />

        <div className="relative max-w-5xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.25em] uppercase text-muted mb-6 font-mono">
              // PERSONAL_PROJECTS
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15] text-foreground mb-4">
              The <span className="text-accent">workshop.</span>
            </h1>
            <p className="text-base text-muted mb-16 max-w-xl">
              Where engineering meets hands-on building. These are the projects I work on
              outside the classroom — real hardware, real problem-solving.
            </p>
          </FadeIn>

          <StaggerContainer className="space-y-8" staggerDelay={0.15}>
            {personalProjects.map((project) => {
              const isExpanded = expanded === project.id;
              const status = statusMap[project.status];

              return (
                <StaggerItem key={project.id}>
                  <motion.div
                    layout
                    className="breadboard-card"
                    whileHover={!isExpanded ? { y: -2 } : {}}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="through-holes" />

                    <div className="card-inner">
                      {/* Header — always visible */}
                      <button
                        onClick={() => setExpanded(isExpanded ? null : project.id)}
                        className="w-full text-left p-7 md:p-8 cursor-pointer"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                              <span className="text-[10px] font-mono text-copper-light/60 border border-copper/20 px-2 py-0.5 rounded-sm bg-black/20">
                                {project.schematicLabel}
                              </span>
                              <span
                                className="text-[10px] font-mono tracking-wider px-2 py-0.5 rounded-sm"
                                style={{
                                  color: status.color,
                                  border: `1px solid ${status.color}33`,
                                  backgroundColor: `${status.color}10`,
                                }}
                              >
                                {status.label}
                              </span>
                            </div>
                            <h2 className="text-xl md:text-2xl font-bold text-emerald-50 mb-1">
                              {project.title}
                            </h2>
                            <p className="text-sm text-emerald-200/50 font-mono">
                              {project.subtitle}
                            </p>
                          </div>

                          <div className="flex items-center gap-3">
                            <div
                              className="led-indicator"
                              style={{ color: project.ledColor, backgroundColor: project.ledColor }}
                            />
                            <motion.span
                              animate={{ rotate: isExpanded ? 180 : 0 }}
                              className="text-emerald-200/40 text-lg"
                            >
                              ▼
                            </motion.span>
                          </div>
                        </div>

                        <p className="text-sm text-emerald-100/50 mt-4 max-w-2xl leading-relaxed">
                          {project.description}
                        </p>
                      </button>

                      {/* Expanded content */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="px-7 md:px-8 pb-8 pt-2">
                              {/* Copper divider */}
                              <div className="h-px bg-gradient-to-r from-transparent via-copper/30 to-transparent mb-8" />

                              <div className="grid md:grid-cols-2 gap-8">
                                {/* Specs */}
                                <div>
                                  <h3 className="text-xs font-mono tracking-[0.2em] uppercase text-copper-light/60 mb-4">
                                    SPECIFICATIONS
                                  </h3>
                                  <div className="space-y-3">
                                    {project.specs.map((spec) => (
                                      <div key={spec.label} className="flex items-baseline gap-3">
                                        <span className="text-[10px] font-mono text-emerald-300/40 w-24 shrink-0 uppercase tracking-wider">
                                          {spec.label}
                                        </span>
                                        <span className="text-sm text-emerald-100/70">
                                          {spec.value}
                                        </span>
                                      </div>
                                    ))}
                                  </div>
                                </div>

                                {/* Milestones */}
                                <div>
                                  <h3 className="text-xs font-mono tracking-[0.2em] uppercase text-copper-light/60 mb-4">
                                    MILESTONES
                                  </h3>
                                  <div className="space-y-2.5">
                                    {project.milestones.map((ms, i) => (
                                      <div key={i} className="flex items-center gap-3">
                                        <div
                                          className={`w-2.5 h-2.5 rounded-full border-2 shrink-0 ${
                                            ms.done
                                              ? "bg-emerald-400 border-emerald-400"
                                              : "bg-transparent border-emerald-500/30"
                                          }`}
                                        />
                                        <span
                                          className={`text-sm ${
                                            ms.done
                                              ? "text-emerald-100/70"
                                              : "text-emerald-100/30"
                                          }`}
                                        >
                                          {ms.title}
                                        </span>
                                      </div>
                                    ))}
                                  </div>

                                  {/* Progress bar */}
                                  <div className="mt-5">
                                    <div className="flex justify-between text-[10px] font-mono text-emerald-300/40 mb-1.5">
                                      <span>PROGRESS</span>
                                      <span>
                                        {project.milestones.filter((m) => m.done).length}/
                                        {project.milestones.length}
                                      </span>
                                    </div>
                                    <div className="h-1.5 bg-black/30 rounded-full overflow-hidden">
                                      <motion.div
                                        className="h-full rounded-full"
                                        style={{ backgroundColor: project.ledColor }}
                                        initial={{ width: 0 }}
                                        animate={{
                                          width: `${
                                            (project.milestones.filter((m) => m.done).length /
                                              project.milestones.length) *
                                            100
                                          }%`,
                                        }}
                                        transition={{ duration: 0.8, delay: 0.2 }}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      <Footer />
    </main>
  );
}
