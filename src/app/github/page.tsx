"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/MotionPrimitives";

type RepoCategory = "university" | "hackathon" | "personal";

interface Repo {
  id: number;
  name: string;
  description: string;
  category: RepoCategory;
  language: string;
  languageColor: string;
  stars?: number;
  topics: string[];
  url: string;
  lastUpdated: string;
}

const repos: Repo[] = [
  // University
  {
    id: 1,
    name: "aerodynamics-lab-reports",
    description: "Wind tunnel experiment data analysis and MATLAB scripts for subsonic aerodynamics coursework.",
    category: "university",
    language: "MATLAB",
    languageColor: "#e16737",
    topics: ["aerospace", "wind-tunnel", "lab-work"],
    url: "#",
    lastUpdated: "2026-01",
  },
  {
    id: 2,
    name: "structural-analysis-FEA",
    description: "Finite element analysis assignments — beam bending, truss optimisation, and stress analysis using Python.",
    category: "university",
    language: "Python",
    languageColor: "#3572A5",
    topics: ["FEA", "structures", "numpy"],
    url: "#",
    lastUpdated: "2025-12",
  },
  {
    id: 3,
    name: "thermodynamics-simulations",
    description: "Thermodynamic cycle simulations and heat transfer analysis for engineering coursework.",
    category: "university",
    language: "Python",
    languageColor: "#3572A5",
    topics: ["thermodynamics", "simulation", "matplotlib"],
    url: "#",
    lastUpdated: "2025-11",
  },
  {
    id: 4,
    name: "control-systems-lab",
    description: "PID controller implementation and Bode plot analysis for control systems module.",
    category: "university",
    language: "MATLAB",
    languageColor: "#e16737",
    topics: ["control-systems", "PID", "simulink"],
    url: "#",
    lastUpdated: "2025-10",
  },
  {
    id: 5,
    name: "fluid-dynamics-CFD",
    description: "Computational fluid dynamics coursework — pipe flow, boundary layers, and turbulence modelling.",
    category: "university",
    language: "Python",
    languageColor: "#3572A5",
    topics: ["CFD", "fluids", "OpenFOAM"],
    url: "#",
    lastUpdated: "2026-02",
  },

  // Hackathon
  {
    id: 6,
    name: "skytrack-hackathon",
    description: "48-hour hackathon project — real-time flight tracker with ADS-B data and predictive ETAs.",
    category: "hackathon",
    language: "TypeScript",
    languageColor: "#3178c6",
    stars: 12,
    topics: ["nextjs", "aviation", "real-time"],
    url: "#",
    lastUpdated: "2025-11",
  },
  {
    id: 7,
    name: "eco-route-optimizer",
    description: "Green transport route planner minimising carbon emissions. Won sustainability prize at HackTheBox Edinburgh.",
    category: "hackathon",
    language: "Python",
    languageColor: "#3572A5",
    stars: 8,
    topics: ["sustainability", "maps-api", "flask"],
    url: "#",
    lastUpdated: "2025-09",
  },
  {
    id: 8,
    name: "drone-swarm-sim",
    description: "Multi-agent drone coordination simulator for delivery logistics. Built in 24 hours at HWU Hack.",
    category: "hackathon",
    language: "Python",
    languageColor: "#3572A5",
    stars: 5,
    topics: ["drones", "multi-agent", "simulation"],
    url: "#",
    lastUpdated: "2025-03",
  },

  // Personal
  {
    id: 9,
    name: "portfolio-website",
    description: "This portfolio — built with Next.js, Tailwind CSS, Framer Motion, and Three.js.",
    category: "personal",
    language: "TypeScript",
    languageColor: "#3178c6",
    stars: 3,
    topics: ["nextjs", "portfolio", "threejs"],
    url: "#",
    lastUpdated: "2026-03",
  },
  {
    id: 10,
    name: "klipper-printer-config",
    description: "Custom Klipper firmware configuration for my CoreXY 3D printer build.",
    category: "personal",
    language: "Python",
    languageColor: "#3572A5",
    topics: ["3d-printing", "klipper", "hardware"],
    url: "#",
    lastUpdated: "2026-02",
  },
  {
    id: 11,
    name: "flight-sim-instruments",
    description: "DIY flight simulator instrument panel with Arduino — real gauges driven by sim data.",
    category: "personal",
    language: "C++",
    languageColor: "#f34b7d",
    topics: ["arduino", "flight-sim", "hardware"],
    url: "#",
    lastUpdated: "2025-12",
  },
  {
    id: 12,
    name: "obd2-dashboard",
    description: "Real-time OBD-II vehicle telemetry dashboard — reads engine data via Bluetooth ELM327.",
    category: "personal",
    language: "Python",
    languageColor: "#3572A5",
    topics: ["automotive", "OBD-II", "raspberry-pi"],
    url: "#",
    lastUpdated: "2025-08",
  },
];

const categories: { key: RepoCategory; label: string; icon: string; ledColor: string }[] = [
  { key: "university", label: "University", icon: "🎓", ledColor: "#3b82f6" },
  { key: "hackathon", label: "Hackathons", icon: "⚡", ledColor: "#eab308" },
  { key: "personal", label: "Personal", icon: "🔧", ledColor: "#22c55e" },
];

function RepoCard({ repo }: { repo: Repo }) {
  return (
    <motion.a
      href={repo.url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -3, boxShadow: "0 0 20px rgba(27, 94, 32, 0.15)" }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="breadboard-card block"
    >
      <div className="through-holes" />
      <div className="card-inner p-6">
        {/* Repo name */}
        <div className="flex items-center gap-2 mb-3">
          <svg className="w-4 h-4 text-emerald-300/40" viewBox="0 0 16 16" fill="currentColor">
            <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z" />
          </svg>
          <h3 className="text-sm font-semibold text-emerald-50 font-mono truncate">
            {repo.name}
          </h3>
        </div>

        <p className="text-xs text-emerald-100/50 leading-relaxed mb-4 line-clamp-2">
          {repo.description}
        </p>

        {/* Bottom row: language + stars + date */}
        <div className="flex items-center gap-4 text-[10px] font-mono text-emerald-200/40">
          <span className="flex items-center gap-1.5">
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: repo.languageColor }}
            />
            {repo.language}
          </span>
          {repo.stars !== undefined && (
            <span className="flex items-center gap-1">
              ★ {repo.stars}
            </span>
          )}
          <span className="ml-auto">{repo.lastUpdated}</span>
        </div>

        {/* Topics */}
        {repo.topics.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {repo.topics.map((topic) => (
              <span
                key={topic}
                className="px-2 py-0.5 text-[9px] font-mono rounded-sm bg-black/30 text-emerald-200/40 border border-emerald-500/10"
              >
                {topic}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.a>
  );
}

export default function GitHubPage() {
  const [activeCategory, setActiveCategory] = useState<RepoCategory>("university");

  const filteredRepos = repos.filter((r) => r.category === activeCategory);
  const activeCat = categories.find((c) => c.key === activeCategory)!;

  return (
    <main className="bg-background min-h-screen">
      <Navbar />

      <section className="pt-32 pb-24 md:pb-36 px-6">
        <div className="fixed inset-0 schematic-grid pointer-events-none opacity-50" />

        <div className="relative max-w-5xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.25em] uppercase text-muted mb-6 font-mono">
              // GITHUB_REPOSITORIES
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15] text-foreground mb-4">
              Source <span className="text-accent">code.</span>
            </h1>
            <p className="text-base text-muted mb-12 max-w-xl">
              All my repositories, categorised by context. University coursework, hackathon builds,
              and personal tinkering — each with its own purpose and stack.
            </p>
          </FadeIn>

          {/* Category tabs — styled like a DIP switch row */}
          <FadeIn delay={0.2}>
            <div className="flex flex-wrap gap-3 mb-12">
              {categories.map((cat) => {
                const isActive = activeCategory === cat.key;
                const count = repos.filter((r) => r.category === cat.key).length;
                return (
                  <button
                    key={cat.key}
                    onClick={() => setActiveCategory(cat.key)}
                    className={`
                      relative flex items-center gap-2.5 px-5 py-3 rounded-lg font-mono text-sm transition-all duration-300 cursor-pointer
                      ${
                        isActive
                          ? "bg-[#1b4a1b] border-2 border-emerald-500/30 text-emerald-50 shadow-lg"
                          : "bg-surface border-2 border-border text-muted hover:border-accent/30 hover:text-foreground"
                      }
                    `}
                  >
                    <span className="text-base">{cat.icon}</span>
                    <span>{cat.label}</span>
                    <span
                      className={`
                        text-[10px] px-1.5 py-0.5 rounded-sm font-mono
                        ${isActive ? "bg-emerald-500/20 text-emerald-300" : "bg-surface-alt text-muted/60"}
                      `}
                    >
                      {count}
                    </span>
                    {isActive && (
                      <div
                        className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full"
                        style={{
                          backgroundColor: cat.ledColor,
                          boxShadow: `0 0 8px ${cat.ledColor}`,
                        }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </FadeIn>

          {/* Active category header */}
          <div className="flex items-center gap-3 mb-8">
            <div
              className="w-3 h-3 rounded-full"
              style={{
                backgroundColor: activeCat.ledColor,
                boxShadow: `0 0 10px ${activeCat.ledColor}60`,
              }}
            />
            <h2 className="text-lg font-semibold text-foreground">
              {activeCat.label} Repositories
            </h2>
            <span className="text-xs font-mono text-muted">
              ({filteredRepos.length} repos)
            </span>
          </div>

          {/* Repo grid */}
          <StaggerContainer
            key={activeCategory}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
            staggerDelay={0.08}
          >
            {filteredRepos.map((repo) => (
              <StaggerItem key={repo.id}>
                <RepoCard repo={repo} />
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Stats footer */}
          <FadeIn delay={0.3}>
            <div className="mt-16 pt-8 border-t border-border">
              <div className="flex flex-wrap gap-8 text-center">
                {categories.map((cat) => {
                  const catRepos = repos.filter((r) => r.category === cat.key);
                  return (
                    <div key={cat.key} className="flex-1 min-w-[120px]">
                      <p className="text-2xl font-bold text-foreground">{catRepos.length}</p>
                      <p className="text-xs text-muted font-mono mt-1">{cat.label}</p>
                    </div>
                  );
                })}
                <div className="flex-1 min-w-[120px]">
                  <p className="text-2xl font-bold text-foreground">{repos.length}</p>
                  <p className="text-xs text-muted font-mono mt-1">Total Repos</p>
                </div>
                <div className="flex-1 min-w-[120px]">
                  <p className="text-2xl font-bold text-foreground">
                    {new Set(repos.map((r) => r.language)).size}
                  </p>
                  <p className="text-xs text-muted font-mono mt-1">Languages</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  );
}
