import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Hero3D from "./Hero3D";
import { profile } from "../data/profile";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const contentScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const sceneOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const sceneScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section id="top" className="hero" ref={ref}>
      <motion.div className="hero-scene" style={{ opacity: sceneOpacity, scale: sceneScale }}>
        <Hero3D />
      </motion.div>
      <motion.div
        className="hero-content"
        style={{ opacity: contentOpacity, y: contentY, scale: contentScale }}
      >
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {profile.role} · {profile.location}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {profile.name}
        </motion.h1>
        <motion.p
          className="tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {profile.tagline}
        </motion.p>
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.32 }}
        >
          <a className="btn btn-primary" href="#projects">
            View Work
          </a>
          <a className="btn btn-ghost" href={profile.resumeFile} download>
            Download Resume
          </a>
        </motion.div>
      </motion.div>
      <div className="click-hint">click the scene ✦ scroll to explore</div>
    </section>
  );
}
