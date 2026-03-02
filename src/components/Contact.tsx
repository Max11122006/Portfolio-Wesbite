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
          <p className="text-xs tracking-[0.3em] uppercase text-muted mb-6 text-center font-mono">
            // CONTACT
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] text-foreground mb-4 text-center">
            Get in <span className="gradient-text">touch.</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="text-base text-muted text-center mb-12 max-w-md mx-auto">
            Open to opportunities, collaborations, and conversations about
            engineering, aviation, and technology.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="dark-card">
            <div className="card-inner p-8 md:p-10">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="space-y-5"
              >
                {/* Name */}
                <div>
                  <label className="block text-xs tracking-[0.12em] uppercase text-muted mb-1.5 font-mono">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-surface-elevated border border-border rounded-lg px-4 py-3 text-foreground text-sm placeholder-muted/40 focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/15 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs tracking-[0.12em] uppercase text-muted mb-1.5 font-mono">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full bg-surface-elevated border border-border rounded-lg px-4 py-3 text-foreground text-sm placeholder-muted/40 focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/15 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs tracking-[0.12em] uppercase text-muted mb-1.5 font-mono">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-surface-elevated border border-border rounded-lg px-4 py-3 text-foreground text-sm placeholder-muted/40 focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/15 transition-colors resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                {/* Submit */}
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  className="w-full py-3 rounded-lg bg-accent text-background text-sm font-medium hover:bg-accent-light transition-colors cursor-pointer"
                >
                  Send Message
                </motion.button>
              </form>

              {/* Links */}
              <div className="flex items-center justify-center gap-6 mt-8 pt-6 border-t border-border">
                <a
                  href="mailto:hello@mdubowski.com"
                  className="text-sm text-muted hover:text-accent transition-colors"
                >
                  hello@mdubowski.com
                </a>
                <span className="w-px h-4 bg-border" />
                <a
                  href="https://linkedin.com/in/maksymilian-dubowski"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted hover:text-accent transition-colors"
                >
                  LinkedIn
                </a>
                <span className="w-px h-4 bg-border" />
                <a
                  href="https://github.com/Max11122006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted hover:text-accent transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
