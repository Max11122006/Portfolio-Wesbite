"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  const links = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-5 flex items-center justify-between"
    >
      <div className="glass rounded-full px-4 py-2">
        <span className="text-sm font-medium tracking-widest uppercase text-foreground/80">
          Portfolio
        </span>
      </div>

      <div className="hidden md:flex items-center gap-1 glass rounded-full px-2 py-1">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="px-4 py-2 text-sm text-foreground/60 hover:text-foreground transition-colors duration-300 rounded-full hover:bg-white/5"
          >
            {link.label}
          </a>
        ))}
      </div>

      <a
        href="#contact"
        className="glass rounded-full px-5 py-2 text-sm font-medium text-accent hover:bg-accent/10 transition-colors duration-300"
      >
        Get in Touch
      </a>
    </motion.nav>
  );
}
