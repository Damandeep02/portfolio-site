import Reveal from "./Reveal";
import { impact, impactTotal, honors } from "../data/profile";
import { useCountUp } from "../hooks/useCountUp";

export default function Stats() {
  const { ref, display } = useCountUp(89, "%");

  return (
    <section id="numbers" className="section section-dark" data-theme="dark">
      <Reveal className="numbers-head">
        <h2>
          <span ref={ref} className="numbers-giant">
            {display}
          </span>
        </h2>
        <p className="section-note">{impactTotal.caption}</p>
      </Reveal>

      <div className="stat-grid">
        {impact.map((row, i) => (
          <Reveal className="stat-tile" distance={24} delay={i * 0.05} key={row.label}>
            <span className="stat-value">{row.value}</span>
            <span className="stat-label">{row.label}</span>
            <span className="stat-detail">{row.detail}</span>
          </Reveal>
        ))}
        {honors.map((h, i) => (
          <Reveal className="stat-tile" distance={24} delay={(impact.length + i) * 0.05} key={h.title}>
            <span className="stat-value stat-value-small">{h.title}</span>
            <span className="stat-detail">{h.detail}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
