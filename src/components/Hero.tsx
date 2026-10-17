import { lazy, Suspense, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { profile, journey } from "../data/profile";
import { useClock } from "../hooks/useClock";

const Scene3D = lazy(() => import("./Scene3D"));

function Clock({ place, tz, note }: { place: string; tz: string; note: string }) {
  const time = useClock(tz);
  return (
    <div className="hero-clock">
      <span className="hero-clock-time">{time}</span>
      <span className="hero-clock-place">
        {place} <em>{note}</em>
      </span>
    </div>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const sceneOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const sceneScale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section id="top" className="hero" ref={ref} data-theme="dark">
      <motion.div className="hero-content" style={{ opacity: contentOpacity, y: contentY }}>
        <motion.div className="hero-scene" style={{ opacity: sceneOpacity, scale: sceneScale }}>
          <Suspense fallback={null}>
            <Scene3D />
          </Suspense>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          {profile.name}
        </motion.h1>
        <motion.p
          className="hero-role"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {profile.role} <span>{profile.subrole}</span>
        </motion.p>
        <motion.p
          className="hero-tagline"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {profile.tagline}
        </motion.p>
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <a className="btn btn-primary" href="#work">
            View the work
          </a>
          <a className="btn btn-ghost" href={profile.resumeFile} target="_blank" rel="noreferrer">
            Résumé
          </a>
        </motion.div>

        <motion.div
          className="hero-clocks"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.5 }}
        >
          {journey.map((j) => (
            <Clock key={j.place} place={j.place} tz={j.tz} note={j.note} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
