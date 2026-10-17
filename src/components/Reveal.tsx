import type { ReactNode } from "react";
import { motion } from "framer-motion";

export default function Reveal({
  children,
  className,
  distance = 28,
  delay = 0,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  distance?: number;
  delay?: number;
  as?: "div" | "li";
}) {
  const Component = motion[as];
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Component>
  );
}
