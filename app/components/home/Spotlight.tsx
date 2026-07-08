"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "../Reveal";
import ProductVisual from "../ProductVisual";
import { products } from "../../data/products";
import { spotlights } from "../../data/site";

export default function Spotlight() {
  const [active, setActive] = useState(0);
  const s = spotlights[active];
  const sample = products.find((p) => p.brand === s.name);

  return (
    <section
      id="brands"
      className="scroll-mt-24 border-y border-white/10 bg-forest-800 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="font-display text-xs uppercase tracking-[0.3em] text-arco-red-bright">
            02 — Brand partnerships
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold uppercase tracking-wide text-crema sm:text-5xl">
            The names we represent
          </h2>
          <p className="mt-4 text-crema-dim">
            Exclusive and authorised distribution for global manufacturers.
            Select a brand to view its trade profile.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          {/* selector list */}
          <div className="flex flex-col gap-3">
            {spotlights.map((sp, i) => (
              <button
                key={sp.name}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={active === i}
                className={`cursor-pointer rounded-2xl border p-5 text-left transition-all duration-300 ${
                  active === i
                    ? "border-arco-red/60 bg-forest shadow-red-glow"
                    : "border-white/10 bg-forest/40 hover:border-white/30"
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-lg font-bold uppercase tracking-wide text-crema">
                    {sp.name}
                  </h3>
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${
                      active === i ? "bg-arco-yellow" : "bg-white/20"
                    }`}
                  />
                </div>
                <p className="mt-1.5 text-sm text-crema-dim">{sp.blurb}</p>
              </button>
            ))}
          </div>

          {/* profile panel */}
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-forest-700 to-forest">
              {/* sample product visual */}
              <div className="relative aspect-[16/9] overflow-hidden border-b border-white/10">
                {sample && (
                  <ProductVisual
                    key={sample.slug}
                    product={sample}
                    className="absolute inset-0"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-forest via-transparent to-transparent" />
              </div>

              <div className="relative p-7">
                {/* sheen */}
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(105deg,transparent_40%,rgba(255,255,255,0.05)_50%,transparent_60%)]" />

                {/* red engraved plate */}
                <div className="brand-plate ornate-frame relative mb-6 inline-flex flex-col rounded-lg px-5 py-3">
                  <span className="font-display text-base font-bold uppercase tracking-[0.25em] text-arco-cream drop-shadow-[0_1px_0_rgba(120,8,22,0.6)]">
                    {s.plate}
                  </span>
                </div>

                <h3 className="relative font-display text-2xl font-bold uppercase tracking-wide text-crema">
                  {s.name}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-crema-dim">
                  {s.blurb}
                </p>

                <dl className="relative mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10">
                  {s.specs.map((sp) => (
                    <div key={sp.label} className="bg-forest-800 p-4">
                      <dt className="text-xs uppercase tracking-[0.2em] text-crema-dim">
                        {sp.label}
                      </dt>
                      <dd className="mt-1.5 font-display text-lg font-bold text-arco-cream">
                        {sp.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="relative mt-6 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-crema-dim">
                      Order format
                    </p>
                    <p className="font-display text-2xl font-bold text-arco-yellow">
                      {s.terms}
                    </p>
                  </div>
                  <Link
                    href="/#quote"
                    className="inline-flex h-11 items-center justify-center rounded-lg bg-arco-yellow px-5 font-display text-sm font-bold uppercase tracking-wide text-forest transition-colors hover:bg-arco-yellow-bright"
                  >
                    Request price list
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
