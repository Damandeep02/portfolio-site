import type { ReactElement } from "react";
import Reveal from "./Reveal";
import { interests } from "../data/profile";

type Plate = {
  src: string;
  alt: string;
  place: string;
  note: string;
  credit: string;
};

const plates: Plate[] = [
  {
    src: "/photos/kashmir-himalaya.jpg",
    alt: "The Kashmir Himalaya",
    place: "Kashmir Himalaya",
    note: "home ground, before NIT Srinagar",
    credit: "Mountaineering.asia, CC BY-SA 4.0",
  },
  {
    src: "/photos/horses-grazing-at-trunkol-meadow-jammu-and.jpg",
    alt: "Horses grazing at Trunkol meadow, Jammu and Kashmir",
    place: "Trunkol meadow",
    note: "the long way to Gangabal Lake",
    credit: "UnpetitproleX, CC BY 4.0",
  },
  {
    src: "/photos/indian-midland-railway-map.jpg",
    alt: "An 1900 map of the Indian Midland Railway",
    place: "Indian railway map, 1900",
    note: "Srinagar → Delhi → Hyderabad → Bengaluru",
    credit: "Historical Railway Images, CC BY-SA 2.0",
  },
  {
    src: "/photos/first-stm.jpg",
    alt: "An early scanning tunnelling microscope",
    place: "First STM",
    note: "the instrument, not the destination",
    credit: "J Brew, CC BY-SA 2.0",
  },
  {
    src: "/photos/george-bush-presidential-library.jpg",
    alt: "The George Bush Presidential Library at Texas A&M",
    place: "Texas A&M",
    note: "where the record is being filed now",
    credit: "Jujutacular, CC BY-SA 3.0",
  },
];

const icons: Record<string, ReactElement> = {
  Tennis: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <circle cx="24" cy="24" r="16" fill="none" stroke="currentColor" strokeWidth="2.4" />
      <path d="M11 13c6 4 6 18 0 22M37 13c-6 4-6 18 0 22" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  Cricket: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M14 34 32 16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M30 14c3-3 7-1 6 3l-14 14c-4 1-6-3-3-6z" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="13" cy="35" r="3.2" fill="currentColor" />
    </svg>
  ),
  "Afrobeats & Hip-Hop": (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M12 26v-4a12 12 0 0 1 24 0v4" fill="none" stroke="currentColor" strokeWidth="2.4" />
      <rect x="8" y="26" width="8" height="12" rx="2.5" fill="currentColor" />
      <rect x="32" y="26" width="8" height="12" rx="2.5" fill="currentColor" />
    </svg>
  ),
};

export default function Interests() {
  return (
    <section id="notes" className="section">
      <Reveal className="section-head">
        <h2>Field notes</h2>
        <p className="section-note">Five places this record passed through, and three things off the clock.</p>
      </Reveal>

      <Reveal className="plate-grid" distance={36}>
        {plates.map((p, i) => (
          <figure className={`plate plate-pair-${(i % 4) + 1}`} key={p.place}>
            <img src={p.src} alt={p.alt} width={800} height={800} loading="lazy" decoding="async" />
            <figcaption>
              <span className="plate-place">{p.place}</span>
              <span className="plate-note">{p.note}</span>
              <span className="plate-credit">{p.credit}</span>
            </figcaption>
          </figure>
        ))}

        {interests.map((item, i) => (
          <figure className={`plate plate-drawn plate-pair-${((i + plates.length) % 4) + 1}`} key={item.label}>
            <div className="plate-icon">{icons[item.label]}</div>
            <figcaption>
              <span className="plate-place">{item.label}</span>
              <span className="plate-note">{item.blurb}</span>
            </figcaption>
          </figure>
        ))}
      </Reveal>
    </section>
  );
}
