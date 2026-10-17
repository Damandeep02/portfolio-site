import Reveal from "./Reveal";
import { experience } from "../data/profile";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <Reveal className="section-head">
        <span className="section-num">02</span>
        <h2>Experience</h2>
      </Reveal>

      <div className="timeline">
        {experience.map((item) => (
          <Reveal className="timeline-item" distance={44} key={item.org + item.period}>
            <div className="timeline-marker" />
            <div className="timeline-body">
              <div className="timeline-head">
                <h3>{item.role}</h3>
                <span className="timeline-period">{item.period}</span>
              </div>
              <p className="timeline-org">
                {item.org} <span className="timeline-loc">· {item.location}</span>
              </p>
              <ul>
                {item.points.map((pt) => (
                  <li key={pt.slice(0, 24)}>{pt}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
