"use client";

import type { ElementType, ReactNode } from "react";
import { useInView } from "./useInView";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** Stagger delay in ms. */
  delay?: number;
};

/**
 * Fade-up on scroll into view. Uses the `.reveal` / `.is-visible` CSS pair so
 * that `prefers-reduced-motion` (handled in globals.css) reveals everything
 * with no motion.
 */
export default function Reveal({
  children,
  as,
  className = "",
  delay = 0,
}: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const { ref, inView } = useInView();

  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? "is-visible" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
