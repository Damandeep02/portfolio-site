import Reveal from "./Reveal";
import { skills } from "../data/profile";

export default function Skills() {
  return (
    <section id="tools" className="section section-light" data-theme="light">
      <Reveal className="section-head">
        <h2>Toolbox</h2>
      </Reveal>

      <div className="skills-grid">
        {Object.entries(skills).map(([group, items], i) => (
          <Reveal className="skills-group" distance={24} delay={i * 0.06} key={group}>
            <h3>{group}</h3>
            <p>{items.join(" · ")}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
