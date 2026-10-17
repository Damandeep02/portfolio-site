import Reveal from "./Reveal";
import { projects } from "../data/profile";

export default function Projects() {
  return (
    <section id="work" className="section section-dark" data-theme="dark">
      <Reveal className="section-head">
        <h2>Selected work</h2>
        <p className="section-note">Three systems, each solving a different kind of trust problem.</p>
      </Reveal>

      <div className="project-list">
        {projects.map((p, i) => (
          <Reveal className="project-tile" distance={36} key={p.name} delay={i * 0.08}>
            <div className="project-tile-head">
              <h3>{p.name}</h3>
              {p.url ? (
                <a href={p.url} target="_blank" rel="noreferrer" className="project-link">
                  View repo <span aria-hidden="true">&#8599;</span>
                </a>
              ) : (
                <span className="project-status">{p.status}</span>
              )}
            </div>
            <p>{p.description}</p>
            <div className="project-tags">
              {p.tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
