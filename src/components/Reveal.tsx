import { useRef } from "react";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { useReveal } from "../hooks/useReveal";

export default function Reveal({
  children,
  className,
  distance = 32,
}: {
  children: ReactNode;
  className?: string;
  distance?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { opacity, y, scale } = useReveal(ref, distance);

  return (
    <motion.div ref={ref} className={className} style={{ opacity, y, scale }}>
      {children}
    </motion.div>
  );
}
