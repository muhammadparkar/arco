"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Loader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = "hidden";

    // Start sliding up
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 1000);

    // Completely remove loader from DOM after slide finishes
    const loadTimer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "";
    }, 1900);

    return () => {
      document.body.style.overflow = "";
      clearTimeout(fadeTimer);
      clearTimeout(loadTimer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-forest transition-transform duration-[800ms] [transition-timing-function:cubic-bezier(0.85,0,0.15,1)] ${
        fadeOut ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {/* Peaks mark — wipes in, then pulses. Width matches the wordmark below. */}
      <div className="relative logo-pulse logo-wipe-in w-[150px]">
        <Image
          src="/arco-peaks.png"
          alt="ARCO"
          width={150}
          height={190}
          priority
          className="h-auto w-[150px]"
        />
      </div>

      {/* Wordmark badge — same width as the mark, fades in just after */}
      <div className="mt-3 w-[150px] logo-wipe-in [animation-delay:0.35s] [animation-fill-mode:backwards]">
        <Image
          src="/arco-badge.png"
          alt="ARCO Trading & Marketing"
          width={150}
          height={57}
          priority
          className="h-auto w-[150px]"
        />
      </div>
    </div>
  );
}
