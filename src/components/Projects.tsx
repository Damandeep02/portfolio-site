import { motion, useMotionTemplate } from "framer-motion";
import { projects } from "../data/profile";
import { useTilt } from "../hooks/useTilt";
import { useReveal } from "../hooks/useReveal";
import Reveal from "./Reveal";

function ProjectCard({ p }: { p: (typeof projects)[number] }) {
  const { ref, rotateX, rotateY, glowX, glowY, onMouseMove, onMouseLeave } = useTilt(8);
  const { opacity, y, scale } = useReveal(ref, 36);
  const background = useMotionTemplate`radial-gradient(180px circle at ${glowX}% ${glowY}%, rgba(110,231,200,0.14), transparent 70%)`;

  return (
    <motion.a
      ref={ref as React.Ref<HTMLAnchorElement>}
      className={`project-card ${p.featured ? "featured" : ""}`}
      href={p.url}
      target="_blank"
      rel="noreferrer"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ rotateX, rotateY, opacity, y, scale, transformPerspective: 800 }}
    >
      <motion.div className="project-spotlight" style={{ background }} />
      <div className="project-card-top">
        <h3>{p.name}</h3>
        <span className="project-arrow">&#8599;</span>
      </div>
      <p>{p.description}</p>
      <div className="project-tags">
        {p.tags.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
    </motion.a>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <Reveal className="section-head">
        <span className="section-num">03</span>
        <h2>Projects</h2>
      </Reveal>

      <div className="project-grid">
        {projects.map((p) => (
          <ProjectCard p={p} key={p.name} />
        ))}
      </div>
    </section>
  );
}
