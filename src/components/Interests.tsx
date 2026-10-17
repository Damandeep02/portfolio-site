import { motion, useMotionTemplate } from "framer-motion";
import { interests } from "../data/profile";
import { useTilt } from "../hooks/useTilt";
import { useReveal } from "../hooks/useReveal";
import Reveal from "./Reveal";

function InterestCard({ item }: { item: (typeof interests)[number] }) {
  const { ref, rotateX, rotateY, glowX, glowY, onMouseMove, onMouseLeave } = useTilt(14);
  const { opacity, y, scale } = useReveal(ref, 36);
  const background = useMotionTemplate`radial-gradient(160px circle at ${glowX}% ${glowY}%, ${item.accent}33, transparent 70%)`;

  return (
    <motion.div
      ref={ref as React.Ref<HTMLDivElement>}
      className="interest-card"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        rotateX,
        rotateY,
        opacity,
        y,
        scale,
        transformPerspective: 700,
        ["--accent" as string]: item.accent,
      }}
    >
      <motion.div className="interest-glow" style={{ background }} />
      <span className="interest-emoji">{item.emoji}</span>
      <h3>{item.label}</h3>
      <p>{item.blurb}</p>
    </motion.div>
  );
}

export default function Interests() {
  return (
    <section id="interests" className="section">
      <Reveal className="section-head">
        <span className="section-num">05</span>
        <h2>Off the clock</h2>
      </Reveal>

      <div className="interest-grid">
        {interests.map((item) => (
          <InterestCard item={item} key={item.label} />
        ))}
      </div>
    </section>
  );
}
