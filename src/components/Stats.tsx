import Reveal from "./Reveal";
import { impact, impactTotal } from "../data/profile";

export default function Stats() {
  return (
    <section id="numbers" className="section numbers">
      <Reveal className="numbers-left" distance={32}>
        <h2>What changed</h2>
        <p className="section-note">
          Every system Damandeep has touched, measured before and after.
        </p>
        <p className="numbers-total">{impactTotal.value}</p>
        <p className="numbers-caption">{impactTotal.caption}</p>
      </Reveal>

      <Reveal className="receipt" distance={32}>
        <ul>
          {impact.map((row) => (
            <li key={row.label}>
              <div className="receipt-row">
                <span className="receipt-label">{row.label}</span>
                <span className="receipt-leader" aria-hidden="true" />
                <span className="receipt-value">{row.value}</span>
              </div>
              <p className="receipt-detail">{row.detail}</p>
            </li>
          ))}
        </ul>
        <div className="receipt-total">
          <span>Headline figure</span>
          <span>{impactTotal.value}</span>
        </div>
      </Reveal>
    </section>
  );
}
