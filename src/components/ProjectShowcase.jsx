import { motion, useAnimation } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import React from "react";

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

function SwipeProjectCard({ project, index }) {
  const controls = useAnimation();
  const Icon = project.icon;
  const pieces = cardArt[project.id] ?? ["dots", "graph", "spark"];

  const handleDragEnd = async (_event, info) => {
    if (Math.abs(info.offset.x) < 140) {
      controls.start({ x: 0, rotate: 0, opacity: 1 });
      return;
    }

    const direction = info.offset.x > 0 ? 1 : -1;
    await controls.start({
      x: direction * window.innerWidth,
      rotate: direction * 8,
      opacity: 0.2,
      transition: { duration: 0.28, ease: "easeOut" },
    });
    await controls.set({ x: -direction * window.innerWidth, rotate: -direction * 5, opacity: 0 });
    controls.start({
      x: 0,
      rotate: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 130, damping: 18 },
    });
  };

  return (
    <motion.article
      className={`project-card ${project.roomTheme}`}
      drag="x"
      dragConstraints={{ left: -220, right: 220 }}
      dragElastic={0.28}
      animate={controls}
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

export default function ProjectShowcase({ projects, isOpen }) {
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
        <span>Swipe cards left or right. Open any link when a project catches your eye.</span>
      </header>

      <div className="card-stack">
        {projects.map((project, index) => (
          <SwipeProjectCard project={project} index={index} key={project.id} />
        ))}
      </div>
    </motion.section>
  );
}
