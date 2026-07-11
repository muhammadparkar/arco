"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { steps } from "../../data/site";
import { photos } from "../../data/photos";

export default function ProcessStoryline() {
  const [active, setActive] = useState(0);
  const stepRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const els = stepRefs.current.filter((el): el is HTMLLIElement => Boolean(el));
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = els.indexOf(entry.target as HTMLLIElement);
            if (index !== -1) setActive(index);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const current = steps[active];

  return (
    <section className="bg-arco-cream py-20 text-arco-ink sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="font-display text-xs uppercase tracking-[0.3em] text-arco-red">
            The Journey
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold uppercase tracking-wide text-arco-ink sm:text-5xl">
            From origin to your shelf
          </h2>
          <p className="mt-4 text-ink-dim">
            Scroll through the four stages every case travels before it
            reaches a retailer in Qatar.
          </p>
        </div>

        <div className="mt-16 grid gap-x-12 lg:grid-cols-2">
          {/* sticky visual panel */}
          <div className="order-2 lg:order-1">
            <div className="sticky top-28 overflow-hidden rounded-2xl border border-arco-ink/10 shadow-[0_30px_60px_-40px_rgba(26,43,33,0.5)]">
              <div className="relative aspect-[4/3]">
                {steps.map((s, i) => (
                  <Image
                    key={s.n}
                    src={photos[s.photo as keyof typeof photos]}
                    alt={s.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority={i === 0}
                    className={`object-cover transition-opacity duration-700 ${
                      active === i ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-forest/10 to-transparent" />

                {/* step indicator */}
                <div className="absolute left-6 top-6 flex items-center gap-2">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-arco-red font-display text-sm font-bold text-white">
                    {current.n}
                  </span>
                  <span className="font-display text-sm font-bold uppercase tracking-wide text-white">
                    {current.title}
                  </span>
                </div>

                {/* progress dots */}
                <div className="absolute bottom-6 left-6 flex gap-2">
                  {steps.map((s, i) => (
                    <span
                      key={s.n}
                      className={`h-1.5 rounded-full transition-all duration-500 ${
                        active === i ? "w-8 bg-arco-yellow" : "w-4 bg-white/40"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* scrolling copy track */}
          <div className="order-1 lg:order-2">
            <ol className="space-y-[35vh] pb-[20vh] pt-2 lg:space-y-[45vh]">
              {steps.map((s, i) => (
                <li
                  key={s.n}
                  ref={(el) => {
                    stepRefs.current[i] = el;
                  }}
                  className={`transition-opacity duration-500 ${
                    active === i ? "opacity-100" : "opacity-40 lg:opacity-30"
                  }`}
                >
                  <span className="font-display text-6xl font-bold text-arco-red/20">
                    {s.n}
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-bold uppercase tracking-wide text-arco-ink sm:text-3xl">
                    {s.title}
                  </h3>
                  <p className="mt-4 max-w-md leading-relaxed text-ink-dim">
                    {s.detail}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
