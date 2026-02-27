"use client";

import { FadeIn } from "./MotionPrimitives";

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <FadeIn>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted/60">
            © {new Date().getFullYear()} Maksymilian Dubowski. Edinburgh,
            Scotland.
          </p>

          <div className="flex items-center gap-5">
            {[
              { label: "LinkedIn", href: "https://linkedin.com" },
              { label: "GitHub", href: "https://github.com" },
              { label: "Email", href: "mailto:hello@mdubowski.com" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="text-xs text-muted/50 hover:text-accent transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </FadeIn>
    </footer>
  );
}
