import { motion } from "framer-motion";
import { Github } from "lucide-react";
import React, { useEffect, useState } from "react";
import ProjectShowcase from "./components/ProjectShowcase.jsx";
import { projects } from "./projects.js";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [showDoor, setShowDoor] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsOpen(true), 900);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      setShowDoor(true);
      return undefined;
    }

    const timer = window.setTimeout(() => setShowDoor(false), 1200);
    return () => window.clearTimeout(timer);
  }, [isOpen]);

  return (
    <main className="showcase-shell">
      <div className="showcase-sky" aria-hidden="true">
        <span className="soft-cloud cloud-a" />
        <span className="soft-cloud cloud-b" />
        <span className="soft-cloud cloud-c" />
        <span className="sun-dot" />
      </div>

      <nav className="showcase-nav" aria-label="Portfolio navigation">
        <button className="brand-mark" type="button" onClick={() => setIsOpen(true)}>
          SK
        </button>
        <a href="https://github.com/shivangikamat" target="_blank" rel="noreferrer">
          <Github size={17} />
          GitHub
        </a>
      </nav>

      {showDoor ? (
        <motion.div
          className="door-stage"
          aria-hidden={isOpen}
          initial={false}
          animate={isOpen ? "open" : "closed"}
          variants={{
            closed: { pointerEvents: "auto" },
            open: { pointerEvents: "none" },
          }}
          onClick={() => setIsOpen(true)}
        >
          <motion.div
            className="door-panel door-left"
            variants={{
              closed: { x: 0, rotateY: 0 },
              open: { x: "-58vw", rotateY: -18 },
            }}
            transition={{ duration: 1.05, ease: [0.76, 0, 0.24, 1] }}
          />
          <motion.div
            className="door-panel door-right"
            variants={{
              closed: { x: 0, rotateY: 0 },
              open: { x: "58vw", rotateY: 18 },
            }}
            transition={{ duration: 1.05, ease: [0.76, 0, 0.24, 1] }}
          />
          <motion.div
            className="door-title"
            variants={{
              closed: { opacity: 1, y: 0 },
              open: { opacity: 0, y: -24 },
            }}
            transition={{ duration: 0.45 }}
          >
            <p>Shivangi Kamat</p>
            <h1>Project Showcase</h1>
            <span>Click to enter</span>
          </motion.div>
        </motion.div>
      ) : null}

      <ProjectShowcase projects={projects} isOpen={isOpen} />
    </main>
  );
}
