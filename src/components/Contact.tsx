"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FadeIn } from "./MotionPrimitives";

export default function Contact() {
  const [focused, setFocused] = useState<string | null>(null);

  return (
    <section id="contact" className="relative py-32 md:py-48 px-6">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/[0.04] rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <FadeIn>
          <p className="text-sm tracking-[0.3em] uppercase text-accent/60 mb-8">
            Contact
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
            Let&apos;s build{" "}
            <span className="gradient-text">something</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-lg text-muted mb-16 max-w-md mx-auto">
            Have a project in mind or want to collaborate? Reach out.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="glass rounded-2xl p-8 md:p-12 text-left">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-6"
            >
              {/* Name */}
              <div className="relative">
                <label className="block text-xs tracking-[0.15em] uppercase text-muted mb-2">
                  Name
                </label>
                <motion.div
                  animate={{
                    boxShadow:
                      focused === "name"
                        ? "0 0 20px rgba(79,143,255,0.15), inset 0 0 20px rgba(79,143,255,0.03)"
                        : "none",
                  }}
                  className="rounded-xl"
                >
                  <input
                    type="text"
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl px-5 py-4 text-foreground placeholder-muted/40 focus:outline-none focus:border-accent/30 transition-colors text-sm"
                    placeholder="Your name"
                  />
                </motion.div>
              </div>

              {/* Email */}
              <div className="relative">
                <label className="block text-xs tracking-[0.15em] uppercase text-muted mb-2">
                  Email
                </label>
                <motion.div
                  animate={{
                    boxShadow:
                      focused === "email"
                        ? "0 0 20px rgba(79,143,255,0.15), inset 0 0 20px rgba(79,143,255,0.03)"
                        : "none",
                  }}
                  className="rounded-xl"
                >
                  <input
                    type="email"
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl px-5 py-4 text-foreground placeholder-muted/40 focus:outline-none focus:border-accent/30 transition-colors text-sm"
                    placeholder="your@email.com"
                  />
                </motion.div>
              </div>

              {/* Message */}
              <div className="relative">
                <label className="block text-xs tracking-[0.15em] uppercase text-muted mb-2">
                  Message
                </label>
                <motion.div
                  animate={{
                    boxShadow:
                      focused === "message"
                        ? "0 0 20px rgba(79,143,255,0.15), inset 0 0 20px rgba(79,143,255,0.03)"
                        : "none",
                  }}
                  className="rounded-xl"
                >
                  <textarea
                    rows={4}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl px-5 py-4 text-foreground placeholder-muted/40 focus:outline-none focus:border-accent/30 transition-colors text-sm resize-none"
                    placeholder="Tell me about your project..."
                  />
                </motion.div>
              </div>

              {/* Submit */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-accent to-accent-violet text-white font-medium tracking-wide text-sm hover:opacity-90 transition-opacity cursor-pointer"
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
