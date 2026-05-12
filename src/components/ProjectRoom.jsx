import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import React from "react";

export default function ProjectRoom({ project, projects, onBack, onSwitch }) {
  const Icon = project.icon;

  return (
    <motion.section
      className={`room-view ${project.roomTheme}`}
      initial={{ opacity: 0, scale: 1.04 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <button className="back-button" type="button" onClick={onBack}>
        <ArrowLeft size={18} />
        Back to Island
      </button>

      <div className="room-scene" aria-hidden="true">
        <div className="room-window">
          <span />
          <span />
        </div>
        <div className="room-shelf">
          <i />
          <i />
          <i />
        </div>
        <div className="room-floor" />
      </div>

      <article className="room-card">
        <div className="room-card-heading">
          <div className="room-icon">
            <Icon size={34} />
          </div>
          <div>
            <p>{project.shortTitle}</p>
            <h1>{project.title}</h1>
          </div>
        </div>

        <p className="room-summary">{project.summary}</p>

        <div className="room-grid">
          <section>
            <h2>Inside This Room</h2>
            <ul className="feature-list">
              {project.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2>Tech Stack</h2>
            <div className="tech-list">
              {project.tech.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </section>
        </div>

        <div className="room-actions">
          <a href={project.github} target="_blank" rel="noreferrer">
            <Github size={18} />
            Visit GitHub
          </a>
          {project.live ? (
            <a className="secondary-action" href={project.live} target="_blank" rel="noreferrer">
              <ExternalLink size={18} />
              Live Site
            </a>
          ) : null}
        </div>
      </article>

      <aside className="room-switcher" aria-label="Visit another project room">
        {projects.map((item) => (
          <button
            type="button"
            key={item.id}
            className={item.id === project.id ? "active" : ""}
            onClick={() => onSwitch(item)}
          >
            {item.shortTitle}
          </button>
        ))}
      </aside>
    </motion.section>
  );
}
