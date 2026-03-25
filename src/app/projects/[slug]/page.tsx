import Link from "next/link";
import { notFound } from "next/navigation";
import { allProjects } from "@/data/projects";

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = allProjects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background px-6 py-24 md:py-36">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/personal-projects"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors mb-10 font-mono"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 7H3M6 3.5L2.5 7L6 10.5" />
          </svg>
          Back to projects
        </Link>

        <p className="text-xs tracking-[0.25em] uppercase text-muted mb-6 font-mono">
          // PROJECT
        </p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15] text-foreground mb-6">
          {project.title}
        </h1>
        <p className="text-muted text-sm">
          Full project page coming soon.
        </p>
      </div>
    </main>
  );
}
