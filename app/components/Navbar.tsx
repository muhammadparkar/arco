"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Brand from "./Brand";
import { navLinks } from "../data/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const onHome = pathname === "/";

  // Shrink / frost the bar after a little scroll.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Solid frosted bar off-home (dark hero only exists on the landing page).
  const frosted = scrolled || !onHome;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-4 py-2.5 transition-all duration-300 sm:px-6 ${
          frosted
            ? "border-white/10 bg-forest/85 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.9)] backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <Link
          href="/"
          className="group flex items-center"
          aria-label="ARCO Trading & Marketing — home"
          onClick={() => setOpen(false)}
        >
          <Brand height={44} />
        </Link>

        {/* desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => {
            const isActive = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`rounded-lg px-3.5 py-2 font-display text-sm font-medium uppercase tracking-wide transition-colors ${
                  isActive
                    ? "text-arco-yellow"
                    : "text-crema-dim hover:text-crema"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="ml-2 inline-flex h-11 items-center rounded-lg bg-arco-yellow px-5 font-display text-sm font-bold uppercase tracking-wide text-forest transition-colors hover:bg-arco-yellow-bright"
          >
            Request Quote
          </Link>
        </div>

        {/* mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg text-crema md:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
            {open ? (
              <path d="M6 6 L18 18 M18 6 L6 18" />
            ) : (
              <path d="M4 7 H20 M4 12 H20 M4 17 H20" />
            )}
          </svg>
        </button>
      </nav>

      {/* mobile drawer */}
      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-2xl border border-white/10 bg-forest/95 p-3 backdrop-blur-xl md:hidden">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-4 py-3 font-display text-base font-medium uppercase tracking-wide text-crema hover:bg-white/5"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-1 block rounded-lg bg-arco-yellow px-4 py-3 text-center font-display text-base font-bold uppercase tracking-wide text-forest"
          >
            Request Quote
          </Link>
        </div>
      )}
    </header>
  );
}
