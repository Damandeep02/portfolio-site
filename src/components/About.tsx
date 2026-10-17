import Reveal from "./Reveal";
import { about, education } from "../data/profile";

const paragraphs = about.split(/\n\n+/);

export default function About() {
  return (
    <section id="about" className="section section-light" data-theme="light">
      <Reveal className="about-grid" distance={28}>
        <div className="about-copy">
          <h2>About</h2>
          {paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>

        <div className="about-edu">
          {education.map((ed) => (
            <div className="edu-row" key={ed.school}>
              <span className="edu-period">{ed.period}</span>
              <h3>{ed.school}</h3>
              <p>{ed.degree}</p>
              <p className="edu-detail">{ed.detail}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
