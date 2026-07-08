"use client";

import { useEffect, useRef, useState } from "react";

type Options = {
  /** Fire only once, then stop observing. Default true. */
  once?: boolean;
  rootMargin?: string;
  threshold?: number;
};

/**
 * Shared IntersectionObserver hook. Returns a ref to attach and an `inView`
 * boolean. SSR-safe and a no-op (immediately visible) when the browser has no
 * IntersectionObserver.
 */
export function useInView<T extends HTMLElement = HTMLDivElement>({
  once = true,
  rootMargin = "0px 0px -12% 0px",
  threshold = 0.15,
}: Options = {}) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { rootMargin, threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once, rootMargin, threshold]);

  return { ref, inView };
}
