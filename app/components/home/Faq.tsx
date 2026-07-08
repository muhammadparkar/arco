"use client";

import { useState } from "react";
import Reveal from "../Reveal";
import { faqs } from "../../data/site";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="kraft py-20 text-arco-ink sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal className="mb-10 text-center">
          <p className="font-display text-xs uppercase tracking-[0.3em] text-arco-green">
            Trade questions
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold uppercase tracking-wide text-arco-ink sm:text-5xl">
            Good to know
          </h2>
        </Reveal>

        <Reveal className="divide-y divide-arco-ink/10 overflow-hidden rounded-2xl border border-arco-ink/10 bg-white/60">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-arco-ink/[0.03]"
                >
                  <span className="font-display text-lg font-medium uppercase tracking-wide text-arco-ink">
                    {f.q}
                  </span>
                  <svg
                    viewBox="0 0 24 24"
                    className={`h-5 w-5 shrink-0 text-arco-red transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    aria-hidden
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-relaxed text-ink-dim">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
