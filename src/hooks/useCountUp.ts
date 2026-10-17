import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";

export function useCountUp(to: number, suffix = "", duration = 1.6) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [display, setDisplay] = useState(`0${suffix}`);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(`${Math.round(v)}${suffix}`),
    });
    return () => controls.stop();
  }, [inView, to, suffix, duration]);

  return { ref, display };
}
