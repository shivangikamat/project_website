import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink, Github, MailOpen, X } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

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

function SwipeProjectCard({ project, index, onNavigate, onOpen }) {
  const Icon = project.icon;
  const pieces = cardArt[project.id] ?? ["dots", "graph", "spark"];
  const didDrag = useRef(false);

  const handleDragEnd = async (_event, info) => {
    didDrag.current = Math.abs(info.offset.x) > 8;
    window.setTimeout(() => {
      didDrag.current = false;
    }, 0);

    if (Math.abs(info.offset.x) < 120) {
      return;
    }

    onNavigate(info.offset.x > 0 ? -1 : 1);
  };

  const handleOpen = (event) => {
    if (didDrag.current || event.target.closest("a")) {
      return;
    }

    onOpen(project);
  };

  const handleKeyDown = (event) => {
    if (event.target.closest("a")) {
      return;
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onOpen(project);
    }
  };

  return (
    <motion.article
      className={`project-card ${project.roomTheme}`}
      role="button"
      tabIndex={0}
      drag="x"
      dragConstraints={{ left: -220, right: 220 }}
      dragElastic={0.28}
      initial={{ opacity: 0, y: 44 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileDrag={{ scale: 1.015, cursor: "grabbing" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: index * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      onClick={handleOpen}
      onDragEnd={handleDragEnd}
      onKeyDown={handleKeyDown}
    >
      <div
        className="project-card-art"
        style={{ "--image-padding": project.imagePadding || "0" }}
      >
        {project.image ? (
          <img
            className="project-card-image"
            src={project.image}
            alt={`${project.title} preview`}
            style={{
              objectFit: project.imageFit || "cover",
              objectPosition: project.imagePosition || "center",
              transform: project.imageScale ? `scale(${project.imageScale})` : undefined,
              transformOrigin: project.imageTransformOrigin || "center",
            }}
          />
        ) : (
          <>
            <span className={`art-piece ${pieces[0]}`} />
            <span className={`art-piece ${pieces[1]}`} />
            <span className={`art-piece ${pieces[2]}`} />
            <div className="art-icon">
              <Icon size={44} />
            </div>
          </>
        )}
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

function ProjectEnvelope({ project, onClose }) {
  if (!project) {
    return null;
  }

  const sections = [
    project.deepDive?.context ? ["Context", project.deepDive.context] : null,
    project.deepDive?.aim ? ["Aim", project.deepDive.aim] : null,
    project.deepDive?.objective ? ["Objective", project.deepDive.objective] : null,
  ].filter(Boolean);
  const technicalDepth = project.deepDive?.technicalDepth ?? project.details;

  return (
    <motion.div
      className="envelope-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
      onClick={onClose}
    >
      <motion.article
        className={`project-envelope ${project.roomTheme}`}
        initial={{ opacity: 0, y: 36, scale: 0.92, rotateX: -12 }}
        animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
        exit={{ opacity: 0, y: 24, scale: 0.94, rotateX: 10 }}
        transition={{ type: "spring", stiffness: 180, damping: 22 }}
        onClick={(event) => event.stopPropagation()}
      >
        <button className="envelope-close" type="button" onClick={onClose} aria-label="Close project details">
          <X size={20} />
        </button>

        <div className="envelope-flap" aria-hidden="true" />

        <div className="envelope-header">
          <span>
            <MailOpen size={18} />
            Project note
          </span>
          <p>{project.shortTitle}</p>
          <h2>{project.title}</h2>
        </div>

        <div className="envelope-body">
          {sections.map(([label, value]) => (
            <section className="envelope-section" key={label}>
              <h3>{label}</h3>
              <p>{value}</p>
            </section>
          ))}

          <section className="envelope-section envelope-technical">
            <h3>Technical Depth</h3>
            <ul>
              {technicalDepth.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <div className="envelope-skills" aria-label="Project skills">
            {project.tech.map((skill) => (
              <i key={skill}>{skill}</i>
            ))}
          </div>

          <div className="project-links envelope-links">
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
    </motion.div>
  );
}

export default function ProjectShowcase({ projects, isOpen, onSkyChange }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const carouselProjects = [...projects, ...projects.slice(0, 2)];

  useEffect(() => {
    onSkyChange?.(skyThemes[activeIndex % skyThemes.length]);
  }, [activeIndex, onSkyChange]);

  useEffect(() => {
    if (!selectedProject) {
      return undefined;
    }

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [selectedProject]);

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
              onOpen={setSelectedProject}
            />
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject ? (
          <ProjectEnvelope project={selectedProject} onClose={() => setSelectedProject(null)} />
        ) : null}
      </AnimatePresence>
    </motion.section>
  );
}
