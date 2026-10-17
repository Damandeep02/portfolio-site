import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { profile, journey } from "../data/profile";
import { useClock } from "../hooks/useClock";

function FiledFrom() {
  return (
    <ul className="hero-clocks">
      {journey.map((j) => (
        <Clock key={j.place} place={j.place} tz={j.tz} note={j.note} />
      ))}
    </ul>
  );
}

function Clock({ place, tz, note }: { place: string; tz: string; note: string }) {
  const time = useClock(tz);
  return (
    <li>
      <span className="hero-clock-time">{time}</span>
      <span className="hero-clock-place">{place}</span>
      <span className="hero-clock-note">{note}</span>
    </li>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const cardScale = useTransform(scrollYProgress, [0, 1], [1, 0.82]);
  const cardOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const cardY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const photoScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const photoBrightness = useTransform(scrollYProgress, [0, 1], [1, 0.72]);
  const photoFilter = useTransform(photoBrightness, (b) => `brightness(${b})`);

  return (
    <section id="top" className="hero" ref={ref}>
      <motion.div className="hero-photo-wrap" style={{ scale: photoScale, filter: photoFilter }}>
        <img
          className="hero-photo"
          src="/photos/kashmir-himalaya.jpg"
          alt="The Kashmir Himalaya, near where the first lines of this record were written"
          width={1920}
          height={1082}
          fetchPriority="high"
        />
      </motion.div>

      <motion.div className="hero-card" style={{ scale: cardScale, opacity: cardOpacity, y: cardY }}>
        <h1 className="hero-name">{profile.name}</h1>
        <p className="hero-role">{profile.role}</p>
        <p className="hero-tagline">{profile.tagline}</p>

        <FiledFrom />

        <div className="hero-card-foot">
          <a className="hero-credit" href={profile.github} target="_blank" rel="noreferrer">
            {profile.github.replace("https://", "")}
          </a>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#work">
              Read the record
            </a>
            <a className="btn btn-ghost" href={profile.resumeFile} download>
              Résumé
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
