import Reveal from "./Reveal";
import { profile } from "../data/profile";

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <Reveal>
        <span className="section-num">06</span>
        <h2>Get in touch</h2>
        <p className="contact-lead">
          Open to interesting problems, collaborations, or just a good conversation about ML systems.
        </p>
        <a className="contact-email" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        <div className="contact-links">
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={profile.resumeFile} download>Resume</a>
        </div>
      </Reveal>
      <footer>
        © {new Date().getFullYear()} {profile.name}. Built with React, Three.js &amp; Framer Motion.
      </footer>
    </section>
  );
}
