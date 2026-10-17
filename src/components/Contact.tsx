import { profile } from "../data/profile";

export default function Contact() {
  return (
    <section id="contact" className="section-contact">
      <img
        className="contact-photo"
        src="/photos/horses-grazing-at-trunkol-meadow-jammu-and.jpg"
        alt="Trunkol meadow, Jammu and Kashmir"
        width={1920}
        height={1280}
        loading="lazy"
      />
      <div className="contact-card">
        <h2>Get in touch</h2>
        <p className="contact-lead">
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
        </div>
        <a className="btn btn-primary contact-resume" href={profile.resumeFile} download>
          Download résumé
        </a>
      </div>

      <footer className="site-footer">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}.
        </p>
        <p className="credits">
          Pictures:{" "}
          <a href="https://commons.wikimedia.org/wiki/File:Kashmir_Himalaya.jpg">&ldquo;Kashmir Himalaya&rdquo;</a> by
          Mountaineering.asia,{" "}
          <a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>, via Wikimedia Commons;{" "}
          <a href="https://commons.wikimedia.org/wiki/File:Horses_grazing_at_Trunkol_meadow,_Jammu_and_Kashmir,_India_(crop).jpg">
            &ldquo;Horses grazing at Trunkol meadow&rdquo;
          </a>{" "}
          by UnpetitproleX, <a href="https://creativecommons.org/licenses/by/4.0">CC BY 4.0</a>, via Wikimedia
          Commons; <a href="https://commons.wikimedia.org/w/index.php?curid=14937544">&ldquo;George Bush Presidential Library&rdquo;</a>{" "}
          by Jujutacular, <a href="https://creativecommons.org/licenses/by-sa/3.0/">CC BY-SA 3.0</a>, via Wikimedia
          Commons; <a href="https://commons.wikimedia.org/w/index.php?curid=4563966">&ldquo;First STM&rdquo;</a> by J
          Brew, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC BY-SA 2.0</a>, via Wikimedia Commons;{" "}
          <a href="https://commons.wikimedia.org/wiki/File:Indian_Midland_Railway_(map).jpg">
            &ldquo;Indian Midland Railway (map)&rdquo;
          </a>{" "}
          by Historical Railway Images, <a href="https://creativecommons.org/licenses/by-sa/2.0">CC BY-SA 2.0</a>,
          via Wikimedia Commons.
        </p>
      </footer>
    </section>
  );
}
