export default function OrbitRing() {
  return (
    <svg viewBox="0 0 400 400" className="orbit-ring" aria-hidden="true">
      <defs>
        <linearGradient id="orbitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2997ff" stopOpacity="0" />
          <stop offset="78%" stopColor="#2997ff" stopOpacity="0" />
          <stop offset="94%" stopColor="#5db2ff" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#c9e6ff" stopOpacity="1" />
        </linearGradient>
      </defs>
      <circle cx="200" cy="200" r="188" fill="none" stroke="url(#orbitGrad)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
