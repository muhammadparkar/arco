"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Brand from "./Brand";
import { navLinks, company } from "../data/site";

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
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-4 py-2 transition-all duration-300 sm:px-6 ${
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
          <Brand height={32} />
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
          <a
            href={`tel:${company.phone.replace(/\s/g, "")}`}
            className="ml-2 inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wide text-arco-yellow transition-colors hover:text-arco-yellow-bright"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            {company.phone}
          </a>
        </div>

        {/* mobile: call link + menu toggle */}
        <div className="flex items-center gap-1 md:hidden">
          <a
            href={`tel:${company.phone.replace(/\s/g, "")}`}
            aria-label={`Call ${company.phone}`}
            className="flex items-center gap-1 rounded-lg px-1.5 py-2 font-display text-[11px] font-bold uppercase tracking-wide text-arco-yellow whitespace-nowrap"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            <span>{company.phone}</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg text-crema"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
              {open ? (
                <path d="M6 6 L18 18 M18 6 L6 18" />
              ) : (
                <path d="M4 7 H20 M4 12 H20 M4 17 H20" />
              )}
            </svg>
          </button>
        </div>
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
          <a
            href={`tel:${company.phone.replace(/\s/g, "")}`}
            onClick={() => setOpen(false)}
            className="mt-1 block rounded-lg bg-arco-yellow px-4 py-3 text-center font-display text-base font-bold uppercase tracking-wide text-forest"
          >
            {company.phone}
          </a>
        </div>
      )}
    </header>
  );
}
