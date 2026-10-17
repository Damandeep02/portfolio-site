import { useRef } from "react";
import { useMotionValue, useSpring, useTransform } from "framer-motion";

export function useTilt(strength = 12) {
  const ref = useRef<HTMLElement>(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  const springX = useSpring(px, { stiffness: 200, damping: 20 });
  const springY = useSpring(py, { stiffness: 200, damping: 20 });

  const rotateX = useTransform(springY, [0, 1], [strength, -strength]);
  const rotateY = useTransform(springX, [0, 1], [-strength, strength]);
  const glowX = useTransform(springX, [0, 1], [0, 100]);
  const glowY = useTransform(springY, [0, 1], [0, 100]);

  const onMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  };

  const onMouseLeave = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return { ref, rotateX, rotateY, glowX, glowY, onMouseMove, onMouseLeave };
}
