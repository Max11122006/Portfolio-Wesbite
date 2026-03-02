"use client";

import { motion } from "framer-motion";
import { FadeIn } from "./MotionPrimitives";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 md:py-36 px-6 section-divide"
    >
      <div className="max-w-2xl mx-auto">
        <FadeIn>
          <p className="text-xs tracking-[0.25em] uppercase text-muted mb-6 text-center font-mono">
            // CONTACT
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15] text-foreground mb-4 text-center">
            Get in <span className="text-accent">touch.</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="text-base text-muted text-center mb-12 max-w-md mx-auto">
            Open to opportunities, collaborations, and conversations about
            engineering, aviation, and technology.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="bg-surface border border-border rounded-xl p-8 md:p-10">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-5"
            >
              {/* Name */}
              <div>
                <label className="block text-xs tracking-[0.12em] uppercase text-muted mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground text-sm placeholder-muted/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-colors"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs tracking-[0.12em] uppercase text-muted mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground text-sm placeholder-muted/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs tracking-[0.12em] uppercase text-muted mb-1.5">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground text-sm placeholder-muted/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-colors resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              {/* Submit */}
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                className="w-full py-3 rounded-lg bg-foreground text-white text-sm font-medium hover:bg-foreground/90 transition-colors cursor-pointer"
              >
                Send Message
              </motion.button>
            </form>

            {/* Links */}
            <div className="flex items-center justify-center gap-6 mt-8 pt-6 border-t border-border-light">
              <a
                href="mailto:hello@mdubowski.com"
                className="text-sm text-muted hover:text-accent transition-colors"
              >
                Email
              </a>
              <span className="w-px h-4 bg-border" />
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted hover:text-accent transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
