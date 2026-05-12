import { motion } from "framer-motion";
import React from "react";

const buildingPositions = [
  { x: "18%", y: "51%" },
  { x: "31%", y: "41%" },
  { x: "43%", y: "34%" },
  { x: "57%", y: "43%" },
  { x: "71%", y: "51%" },
  { x: "80%", y: "66%" },
  { x: "42%", y: "65%" },
  { x: "25%", y: "68%" },
];

const cityPieces = [
  "tiny-house house-one",
  "tiny-house house-two",
  "tiny-house house-three",
  "tiny-house house-four",
  "tower tower-one",
  "tower tower-two",
  "tower tower-three",
  "hospital",
  "lighthouse",
  "ferris-wheel",
  "bus",
  "market-strip",
  "palm palm-one",
  "palm palm-two",
  "boat",
];

export default function ProjectIsland({ projects, isOpen, onExplore, onSelect }) {
  return (
    <section className={`island-stage ${isOpen ? "island-stage-open" : ""}`} aria-label="Project floating island">
      <motion.div
        className={`floating-island ${isOpen ? "show-projects" : "intro-island"}`}
        animate={isOpen ? { y: 0 } : { y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        {!isOpen ? (
          <button
            className="island-hitbox"
            type="button"
            onClick={onExplore}
            aria-label="Open project city"
          />
        ) : null}

        <div className="mountains" aria-hidden="true">
          <span className="mountain mountain-left" />
          <span className="mountain mountain-mid" />
          <span className="mountain mountain-right" />
        </div>
        <div className="island-ground" />
        <div className="shoreline" />
        <div className="water-ripple ripple-one" />
        <div className="water-ripple ripple-two" />
        <div className="path" />
        <div className="city-details" aria-hidden="true">
          {cityPieces.map((piece) => (
            <span className={piece} key={piece} />
          ))}
        </div>

        {isOpen
          ? projects.map((project, index) => {
              const Icon = project.icon;
              const position = buildingPositions[index];

              return (
                <button
                  type="button"
                  className={`project-building ${project.buildingClass}`}
                  key={project.id}
                  style={{ left: position.x, top: position.y }}
                  onClick={() => onSelect(project)}
                  aria-label={`Enter ${project.title}`}
                >
                  <span className="building-roof" />
                  <span className="building-body">
                    <Icon size={24} strokeWidth={2.2} />
                  </span>
                  <span className="building-label">{project.shortTitle}</span>
                </button>
              );
            })
          : null}
      </motion.div>

      {isOpen ? <div className="mobile-project-list" aria-label="Project list">
        {projects.map((project) => {
          const Icon = project.icon;
          return (
            <button type="button" key={project.id} onClick={() => onSelect(project)}>
              <Icon size={20} />
              <span>{project.shortTitle}</span>
            </button>
          );
        })}
      </div> : null}
    </section>
  );
}
