import Reveal from "./Reveal";
import { experience } from "../data/profile";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <Reveal className="section-head">
        <h2>Record of positions</h2>
        <p className="section-note">Every role, in the order it happened.</p>
      </Reveal>

      <Reveal className="ledger" distance={40}>
        {experience.map((item) => (
          <div className="ledger-group" key={item.org + item.period}>
            <div className="ledger-group-head">
              <h3>{item.org}</h3>
              <span className="ledger-leader" aria-hidden="true" />
              <span className="ledger-period">{item.period}</span>
            </div>
            <p className="ledger-role">
              {item.role} <span className="ledger-loc">&middot; {item.location}</span>
            </p>
            <ul className="ledger-points">
              {item.points.map((pt) => (
                <li key={pt.slice(0, 24)}>{pt}</li>
              ))}
            </ul>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
