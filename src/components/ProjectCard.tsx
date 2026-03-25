"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import BreadboardCard from "./BreadboardCard";
import { type Project, WIRE_COLORS } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const router = useRouter();

  return (
    <div className="group relative h-full">
      <BreadboardCard className="h-full" hover>
        <div className="p-7 md:p-8 pt-7 pb-7 flex flex-col h-full">
          <p className="text-[11px] tracking-[0.2em] uppercase text-accent/70 font-medium mb-4">
            {project.category}
          </p>

          <h3 className="text-lg font-semibold text-foreground mb-3 leading-snug">
            {project.title}
          </h3>

          <p className="text-sm text-muted leading-relaxed mb-4">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tags.map((tag, i) => (
              <span
                key={tag}
                className={`jumper-wire jumper-wire--${WIRE_COLORS[i % WIRE_COLORS.length]}`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </BreadboardCard>

      {/* Slide-up overlay on hover */}
      <div
        className="absolute inset-0 z-10 rounded-lg overflow-hidden cursor-pointer opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out"
        onClick={() => router.push(`/projects/${project.slug}`)}
      >
        <div className="relative w-full h-full bg-foreground">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover opacity-70"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/60 to-transparent" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-7 md:p-8">
          <p className="text-[11px] tracking-[0.2em] uppercase text-accent font-medium mb-2">
            {project.category}
          </p>
          <h3 className="text-lg font-semibold text-white mb-3 leading-snug">
            {project.title}
          </h3>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-xs text-white/70 font-mono tracking-wide uppercase">
              View Project
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2.5 6h7M6.5 3l3 3-3 3" />
              </svg>
            </span>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 text-xs text-white/70 font-mono tracking-wide uppercase hover:text-white transition-colors"
              >
                GitHub
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
