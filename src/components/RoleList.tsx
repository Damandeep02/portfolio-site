import Reveal from "./Reveal";
import type { ExperienceItem } from "../data/profile";

export default function RoleList({
  id,
  theme,
  heading,
  note,
  items,
}: {
  id: string;
  theme: "light" | "dark";
  heading: string;
  note: string;
  items: ExperienceItem[];
}) {
  return (
    <section id={id} className={`section section-${theme}`} data-theme={theme}>
      <Reveal className="section-head">
        <h2>{heading}</h2>
        <p className="section-note">{note}</p>
      </Reveal>

      <div className="role-list">
        {items.map((item, i) => (
          <Reveal className="role" distance={32} delay={i * 0.06} key={item.org + item.period}>
            <div className="role-head">
              <h3>{item.role}</h3>
              <span className="role-period">{item.period}</span>
            </div>
            <p className="role-org">
              {item.org} <span>· {item.location}</span>
            </p>
            <ul className="role-points">
              {item.points.map((pt) => (
                <li key={pt.slice(0, 28)}>{pt}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
