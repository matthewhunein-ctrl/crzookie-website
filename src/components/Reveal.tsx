"use client";

import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  /** Stagger delay in seconds. */
  delay?: number;
  className?: string;
  as?: "div" | "span" | "li";
};

const EASE = [0.25, 0.1, 0.25, 1] as const;

// Fade-up on scroll enter. Used for section headers and content blocks.
export default function Reveal({
  children,
  delay = 0,
  className = "",
  as = "div",
}: Props) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: EASE, delay }}
    >
      {children}
    </MotionTag>
  );
}
