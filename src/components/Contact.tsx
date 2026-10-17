import Reveal from "./Reveal";
import { profile } from "../data/profile";

export default function Contact() {
  return (
    <section id="contact" className="section section-dark contact" data-theme="dark">
      <Reveal className="contact-inner">
        <h2>Let&rsquo;s build something that matters.</h2>
        <p className="section-note">
          Open to interesting problems, collaborations, or a good argument about ML systems.
        </p>
        <a className="contact-email" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        <div className="contact-links">
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={`tel:${profile.phone.replace(/\s+/g, "")}`}>{profile.phone}</a>
        </div>
        <a className="btn btn-primary contact-resume" href={profile.resumeFile} target="_blank" rel="noreferrer">
          Download résumé
        </a>
      </Reveal>

      <footer className="site-footer">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}.
        </p>
      </footer>
    </section>
  );
}
