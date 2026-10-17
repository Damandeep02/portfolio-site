import { useState } from "react";
import Reveal from "./Reveal";
import { projects } from "../data/profile";

const PALETTE = ["spine-a", "spine-b", "spine-c", "spine-d"];

export default function Projects() {
  const [active, setActive] = useState(0);
  const current = projects[active];

  return (
    <section id="work" className="section work">
      <Reveal className="section-head">
        <h2>Index of work</h2>
        <p className="section-note">Six entries. Open one.</p>
      </Reveal>

      <Reveal className="shelf" distance={32}>
        {projects.map((p, i) => (
          <button
            key={p.name}
            type="button"
            className={`spine ${PALETTE[i % PALETTE.length]} ${i === active ? "is-active" : ""}`}
            onClick={() => setActive(i)}
            aria-pressed={i === active}
          >
            <span className="spine-name">{p.name}</span>
            <span className="spine-tag">{p.tags[0]}</span>
            {p.featured && <span className="spine-mark" aria-hidden="true" />}
          </button>
        ))}
      </Reveal>

      <Reveal className="work-caption" distance={20}>
        <h3>{current.name}</h3>
        <p>{current.description}</p>
        <div className="work-caption-foot">
          <div className="work-tags">
            {current.tags.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
          <a href={current.url} target="_blank" rel="noreferrer">
            View repository &#8599;
          </a>
        </div>
      </Reveal>
    </section>
  );
}
