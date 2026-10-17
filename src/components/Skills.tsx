import Reveal from "./Reveal";
import { skills, honors } from "../data/profile";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <Reveal className="section-head">
        <span className="section-num">04</span>
        <h2>Skills</h2>
      </Reveal>

      <div className="skills-grid">
        {Object.entries(skills).map(([group, items]) => (
          <Reveal className="skills-group" key={group}>
            <h3>{group}</h3>
            <div className="skill-chips">
              {items.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="honors">
        {honors.map((h) => (
          <div className="honor" key={h.title}>
            <h4>{h.title}</h4>
            <p>{h.detail}</p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
