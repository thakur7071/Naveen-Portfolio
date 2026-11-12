"use client";

import { motion } from "motion/react";
import Terminal from "@/components/terminal/Terminal";
import StatusBadge from "@/components/ui/StatusBadge";

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <StatusBadge />

          <p className="hero-intro">HELLO, WORLD! I'M</p>

          <h1>
            Naveen
            <span> Singh.</span>
          </h1>

          <h2>
            Full Stack <span>Developer</span>
          </h2>

          <p className="hero-description">
            I build modern, responsive, and user-friendly web applications.
            I enjoy turning ideas into functional digital experiences and
            continuously learning new technologies.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="button-primary">
              Explore My Work <span>↗</span>
            </a>

            <a href="#contact" className="button-secondary">
              Let's Connect
            </a>
          </div>

          <div className="hero-meta">
            <span>BASED IN INDIA</span>
            <span>·</span>
            <span>BUILDING THE WEB</span>
          </div>
        </motion.div>

        <motion.div
          className="hero-terminal"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Terminal />
        </motion.div>
      </div>

      <a href="#about" className="scroll-indicator">
        SCROLL TO EXPLORE <span>↓</span>
      </a>
    </section>
  );
}