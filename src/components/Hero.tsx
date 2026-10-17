import { lazy, Suspense, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { profile } from "../data/profile";
import OrbitRing from "./OrbitRing";

const Scene3D = lazy(() => import("./Scene3D"));

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
      <div className="hero-stage">
        <motion.div className="hero-backdrop" style={{ opacity: sceneOpacity, scale: sceneScale }}>
          <div className="orbit-wrap">
            <OrbitRing />
          </div>
          <div className="hero-scene">
            <Suspense fallback={null}>
              <Scene3D />
            </Suspense>
          </div>
        </motion.div>

        <motion.div className="hero-content" style={{ opacity: contentOpacity, y: contentY }}>
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
        </motion.div>
      </div>
    </section>
  );
}
