"use client";

import { FadeIn } from "./MotionPrimitives";

export default function Footer() {
  return (
    <footer className="relative py-16 px-6 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm text-muted/60">
              © {new Date().getFullYear()} — Designed & Engineered with precision.
            </p>

            <div className="flex items-center gap-6">
              {[
                { label: "GitHub", href: "#" },
                { label: "LinkedIn", href: "#" },
                { label: "Twitter", href: "#" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-muted/40 hover:text-accent transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}
