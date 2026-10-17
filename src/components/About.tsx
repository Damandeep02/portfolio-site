import Reveal from "./Reveal";
import { about, education, profile } from "../data/profile";

const paragraphs = about
  .replace(/\s+/g, " ")
  .trim()
  .split(/(?<=\.)\s+(?=[A-Z])/)
  .reduce<string[]>((acc, sentence) => {
    const last = acc[acc.length - 1];
    if (last && last.length < 160) {
      acc[acc.length - 1] = `${last} ${sentence}`;
    } else {
      acc.push(sentence);
    }
    return acc;
  }, []);

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="about-perforation" aria-hidden="true" />
      <Reveal className="about-sheet" distance={36}>
        <h2>Researcher&rsquo;s note</h2>
        <div className="about-letter">
          {paragraphs.map((p) => (
            <p key={p.slice(0, 20)}>{p}</p>
          ))}
          <p className="about-signoff">
            &mdash; {profile.name}
            <span>Software Engineer &rarr; Graduate Researcher</span>
          </p>
        </div>

        <div className="about-credentials">
          {education.map((ed) => (
            <div className="about-credential" key={ed.school}>
              <span className="about-credential-school">{ed.school}</span>
              <span className="about-credential-degree">{ed.degree}</span>
              <span className="about-credential-period">{ed.period}</span>
              <span className="about-credential-detail">{ed.detail}</span>
            </div>
          ))}
        </div>

        <div className="about-stub">
          <span>tear along the perforation</span>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </div>
      </Reveal>
    </section>
  );
}
