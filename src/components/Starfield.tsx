import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  r: number;
  phase: number;
  speed: number;
  drift: number;
};

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let stars: Star[] = [];
    let mouseX = 0;
    let mouseY = 0;
    let raf = 0;
    let t = 0;

    const DENSITY = 0.00011;

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.round(width * height * DENSITY);
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.1 + 0.25,
        phase: Math.random() * Math.PI * 2,
        speed: 0.35 + Math.random() * 0.7,
        drift: Math.random() * 6 + 1,
      }));
    }

    function onMouseMove(e: MouseEvent) {
      mouseX = e.clientX / width - 0.5;
      mouseY = e.clientY / height - 0.5;
    }

    function draw() {
      t += 0.016;
      ctx!.clearRect(0, 0, width, height);
      for (const s of stars) {
        const twinkle = 0.25 + Math.sin(t * s.speed + s.phase) * 0.25 + 0.3;
        const px = s.x + mouseX * s.drift;
        const py = s.y + mouseY * s.drift;
        ctx!.beginPath();
        ctx!.arc(px, py, s.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(214, 255, 240, ${Math.min(Math.max(twinkle, 0), 0.85)})`;
        ctx!.fill();
      }
      raf = requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove);
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="starfield" aria-hidden="true" />;
}
