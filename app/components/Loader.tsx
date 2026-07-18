"use client";

import { useEffect, useState } from "react";
import Brand from "./Brand";

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
      {/* Backlit Pulsing Logo */}
      <div className="relative logo-pulse">
        <Brand height={110} />
      </div>

      {/* Brand Motto Subtext */}
      <div className="mt-8 flex flex-col items-center">
        <div className="mb-4 h-[2px] w-24 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-12 animate-pulse rounded-full bg-arco-yellow" />
        </div>
        <span className="font-display text-[9px] uppercase tracking-[0.35em] text-crema/60">
          Sourced · Imported · Delivered
        </span>
      </div>
    </div>
  );
}
