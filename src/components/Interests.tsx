import type { ReactElement } from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { interests } from "../data/profile";

const icons: Record<string, ReactElement> = {
  Tennis: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <circle cx="24" cy="24" r="16" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M11 13c6 4 6 18 0 22M37 13c-6 4-6 18 0 22" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ),
  Cricket: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M14 34 32 16" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M30 14c3-3 7-1 6 3l-14 14c-4 1-6-3-3-6z" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="13" cy="35" r="2.8" fill="currentColor" />
    </svg>
  ),
  "Afrobeats & Hip-Hop": (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M12 26v-4a12 12 0 0 1 24 0v4" fill="none" stroke="currentColor" strokeWidth="2" />
      <rect x="8" y="26" width="8" height="12" rx="2.5" fill="currentColor" />
      <rect x="32" y="26" width="8" height="12" rx="2.5" fill="currentColor" />
    </svg>
  ),
};

export default function Interests() {
  return (
    <section id="notes" className="section section-light" data-theme="light">
      <Reveal className="section-head">
        <h2>Off the clock</h2>
      </Reveal>

      <div className="interest-grid">
        {interests.map((item, i) => (
          <Reveal className="interest-tile" distance={28} delay={i * 0.08} key={item.label}>
            <motion.div className="interest-icon" whileHover={{ scale: 1.08, rotate: -3 }} transition={{ type: "spring", stiffness: 260, damping: 18 }}>
              {icons[item.label]}
            </motion.div>
            <h3>{item.label}</h3>
            <p>{item.blurb}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
