import Reveal from "./Reveal";
import { skills } from "../data/profile";

export default function Skills() {
  return (
    <section id="tools" className="section tools">
      <Reveal className="tools-row" distance={16}>
        {Object.entries(skills).map(([group, items]) => (
          <p key={group}>
            <span className="tools-group">{group}</span> {items.join(", ")}
          </p>
        ))}
      </Reveal>
    </section>
  );
}
