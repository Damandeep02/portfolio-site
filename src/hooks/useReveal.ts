import type { RefObject } from "react";
import { useScroll, useTransform } from "framer-motion";

export function useReveal(ref: RefObject<HTMLElement | null>, distance = 32) {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.92", "start 0.55"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [distance, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.94, 1]);

  return { opacity, y, scale };
}
