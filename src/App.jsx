import { motion } from "framer-motion";
import { Github } from "lucide-react";
import React, { useEffect, useState } from "react";
import ProjectShowcase from "./components/ProjectShowcase.jsx";
import { projects } from "./projects.js";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [showDoor, setShowDoor] = useState(true);
  const [skyTheme, setSkyTheme] = useState({
    top: "#93a8f4",
    mid: "#b7dcff",
    lower: "#82d2d1",
    water: "#25a9c1",
  });

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
    <motion.main
      className="showcase-shell"
      animate={{
        background: `linear-gradient(180deg, rgba(255, 255, 255, 0.32), transparent 34%), linear-gradient(180deg, ${skyTheme.top} 0%, ${skyTheme.mid} 44%, ${skyTheme.lower} 72%, ${skyTheme.water} 100%)`,
      }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    >
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
        </motion.div>
      ) : null}

      <ProjectShowcase projects={projects} isOpen={isOpen} onSkyChange={setSkyTheme} />
    </motion.main>
  );
}
