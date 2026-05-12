import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink, Github } from "lucide-react";
import React, { useEffect, useState } from "react";

const cardArt = {
  "cs2-pricing": ["coin", "chart", "shield"],
  strain: ["brain", "pulse", "nodes"],
  "dressing-room": ["mirror", "hanger", "spark"],
  "lean-research": ["proof", "lambda", "book"],
  marketmind: ["stocks", "bolt", "wallet"],
  "ai-salon": ["scissors", "face", "spark"],
  "monte-carlo": ["dice", "graph", "dots"],
  "jumping-jack": ["platform", "coin", "flag"],
};

const skyThemes = [
  { top: "#93a8f4", mid: "#b7dcff", lower: "#82d2d1", water: "#25a9c1" },
  { top: "#8fc4f4", mid: "#b7efff", lower: "#72d4c5", water: "#19aebc" },
  { top: "#a7a3f1", mid: "#ffd8e5", lower: "#96d9d4", water: "#36aabf" },
  { top: "#9a95df", mid: "#d6c8ff", lower: "#99d8e4", water: "#2f9ebc" },
  { top: "#90c9d3", mid: "#d7efb1", lower: "#9ad681", water: "#28aeb5" },
  { top: "#a99be9", mid: "#ffd3f2", lower: "#f0bad3", water: "#4ab7c5" },
  { top: "#8eb3ed", mid: "#cde9ff", lower: "#8ed5e5", water: "#2aa5c4" },
  { top: "#f1b48b", mid: "#ffe0b6", lower: "#9fd3bd", water: "#36a7b7" },
];

function SwipeProjectCard({ project, index, onNavigate }) {
  const Icon = project.icon;
  const pieces = cardArt[project.id] ?? ["dots", "graph", "spark"];

  const handleDragEnd = async (_event, info) => {
    if (Math.abs(info.offset.x) < 120) {
      return;
    }

    onNavigate(info.offset.x > 0 ? -1 : 1);
  };

  return (
    <motion.article
      className={`project-card ${project.roomTheme}`}
      drag="x"
      dragConstraints={{ left: -220, right: 220 }}
      dragElastic={0.28}
      initial={{ opacity: 0, y: 44 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileDrag={{ scale: 1.015, cursor: "grabbing" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: index * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      onDragEnd={handleDragEnd}
    >
      <div className="project-card-art" aria-hidden="true">
        <span className={`art-piece ${pieces[0]}`} />
        <span className={`art-piece ${pieces[1]}`} />
        <span className={`art-piece ${pieces[2]}`} />
        <div className="art-icon">
          <Icon size={44} />
        </div>
      </div>

      <div className="project-card-copy">
        <p>{project.shortTitle}</p>
        <h2>{project.title}</h2>
        <span>{project.summary}</span>
        <div className="skill-row">
          {project.tech.slice(0, 5).map((skill) => (
            <i key={skill}>{skill}</i>
          ))}
        </div>
        <div className="project-links">
          <a href={project.github} target="_blank" rel="noreferrer">
            <Github size={18} />
            GitHub
          </a>
          {project.live ? (
            <a href={project.live} target="_blank" rel="noreferrer">
              <ExternalLink size={18} />
              Live
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}

export default function ProjectShowcase({ projects, isOpen, onSkyChange }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselProjects = [...projects, ...projects.slice(0, 2)];

  useEffect(() => {
    onSkyChange?.(skyThemes[activeIndex % skyThemes.length]);
  }, [activeIndex, onSkyChange]);

  const navigate = (direction) => {
    setActiveIndex((current) => {
      const next = current + direction;
      if (next < 0) return projects.length - 1;
      if (next >= projects.length) return 0;
      return next;
    });
  };

  return (
    <motion.section
      className="project-showcase"
      initial={{ opacity: 0 }}
      animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8, delay: 0.45 }}
      aria-label="Project showcase"
    >
      <header className="showcase-hero">
        <p>Portfolio Gallery</p>
        <h1>Project Showcase</h1>
        <span>Use the arrows or drag the card sideways. Open any link when a project catches your eye.</span>
      </header>

      <div className="card-stack">
        <div className="carousel-controls" aria-label="Project carousel controls">
          <button type="button" onClick={() => navigate(-1)} aria-label="Previous project">
            <ArrowLeft size={22} />
          </button>
          <span>{activeIndex + 1} / {projects.length}</span>
          <button type="button" onClick={() => navigate(1)} aria-label="Next project">
            <ArrowRight size={22} />
          </button>
        </div>
        <motion.div
          className="card-track"
          animate={{ x: `calc(-${activeIndex} * (((100% - 2rem) / 3) + 1rem))` }}
          transition={{ type: "spring", stiffness: 120, damping: 22 }}
        >
          {carouselProjects.map((project, index) => (
            <SwipeProjectCard
              project={project}
              index={index}
              key={`${project.id}-${index}`}
              onNavigate={navigate}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
