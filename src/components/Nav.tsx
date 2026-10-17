import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#research", label: "Research" },
  { href: "#numbers", label: "Numbers" },
  { href: "#notes", label: "Notes" },
  { href: "#contact", label: "Contact" },
];

const sectionIds = ["top", ...links.map((l) => l.href.slice(1))];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("top");
  const { scrollYProgress } = useScroll();
  const cometLeft = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <div className="scroll-track">
        <motion.div className="scroll-progress" style={{ scaleX: scrollYProgress }} />
        <motion.div className="scroll-comet" style={{ left: cometLeft }} />
      </div>
      <header className="nav">
        <a className="nav-brand" href="#top" onClick={close}>
          DS<span className="dot">.</span>
        </a>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          <ul>
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={active === l.href.slice(1) ? "active" : ""}
                  onClick={close}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className={`nav-toggle ${open ? "open" : ""}`}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>
    </>
  );
}
