import { AnimatePresence, motion } from "framer-motion";
import { Github, MapPinned } from "lucide-react";
import React from "react";
import { useState } from "react";
import ProjectIsland from "./components/ProjectIsland.jsx";
import ProjectRoom from "./components/ProjectRoom.jsx";
import { projects } from "./projects.js";

export default function App() {
  const [activeProject, setActiveProject] = useState(null);
  const [isIslandOpen, setIsIslandOpen] = useState(false);

  const goHome = () => {
    setActiveProject(null);
    setIsIslandOpen(false);
  };

  return (
    <main className="app-shell">
      <div className="sky-art" aria-hidden="true">
        <span className="cloud cloud-one" />
        <span className="cloud cloud-two" />
        <span className="cloud cloud-three" />
        <span className="star star-one" />
        <span className="star star-two" />
      </div>

      <nav className="top-nav" aria-label="Portfolio navigation">
        <button className="brand-mark" type="button" onClick={goHome} aria-label="Back to island home">
          SK
        </button>
        <div className="nav-links">
          <a href="https://github.com/shivangikamat" target="_blank" rel="noreferrer">
            <Github size={16} />
            GitHub
          </a>
          <button type="button" onClick={goHome}>
            <MapPinned size={16} />
            Island
          </button>
        </div>
      </nav>

      <AnimatePresence mode="wait">
        {activeProject ? (
          <ProjectRoom
            key={activeProject.id}
            project={activeProject}
            projects={projects}
            onBack={() => setActiveProject(null)}
            onSwitch={setActiveProject}
          />
        ) : (
          <motion.section
            key="island"
            className="home-view"
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.04, y: -18 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <header className="hero-copy">
              <p>Interactive Project Map</p>
              <h1>Shivangi Kamat</h1>
            </header>
            <ProjectIsland
              projects={projects}
              isOpen={isIslandOpen}
              onExplore={() => setIsIslandOpen(true)}
              onSelect={setActiveProject}
            />
          </motion.section>
        )}
      </AnimatePresence>
    </main>
  );
}
