import Reveal from "./Reveal";
import { about, education } from "../data/profile";

export default function About() {
  return (
    <section id="about" className="section">
      <Reveal className="section-head">
        <span className="section-num">01</span>
        <h2>About</h2>
      </Reveal>

      <Reveal className="about-grid" distance={40}>
        <p className="about-text">{about}</p>
        <div className="about-edu-list">
          {education.map((ed) => (
            <div className="about-edu" key={ed.school}>
              <h3>{ed.school}</h3>
              <p>{ed.degree}</p>
              <p className="muted">{ed.period}</p>
              <p className="muted">{ed.detail}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
