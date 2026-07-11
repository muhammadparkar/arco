"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "../Reveal";
import ProductVisual from "../ProductVisual";
import { categories, products } from "../../data/products";

const FILTERS = ["All", ...categories] as const;
const PREVIEW = 9; // home page teases a slice — full catalogue lives on /products

export default function Range() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const matched = products.filter(
    (p) => filter === "All" || p.category === filter,
  );
  const list = matched.slice(0, PREVIEW);
  const hasMore = matched.length > PREVIEW;

  return (
    <section id="range" className="scroll-mt-24 bg-arco-cream py-20 text-arco-ink sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="font-display text-xs uppercase tracking-[0.3em] text-arco-red">
            01 — The range
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold uppercase tracking-wide text-arco-ink sm:text-5xl">
            High-rotation lines, one order
          </h2>
          <p className="mt-4 text-ink-dim">
            Indicative retail pricing shown. Filter by category to build your
            first order — trade pricing on request.
          </p>
        </Reveal>

        {/* category filter tabs */}
        <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Filter by category">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              role="tab"
              aria-selected={filter === f}
              onClick={() => setFilter(f)}
              className={`cursor-pointer rounded-lg border px-4 py-2 font-display text-sm font-medium uppercase tracking-wide transition-colors ${
                filter === f
                  ? "border-arco-red bg-arco-red text-arco-cream"
                  : "border-arco-ink/15 text-ink-dim hover:border-arco-ink/40 hover:text-arco-ink"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 60}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-arco-ink/10 bg-white/70 shadow-[0_18px_40px_-30px_rgba(26,43,33,0.5)] transition-all duration-300 hover:-translate-y-1 hover:border-arco-red/50 hover:shadow-red-glow">
                <Link
                  href={`/products/${p.slug}`}
                  className="relative block aspect-[5/3] cursor-pointer overflow-hidden"
                  aria-label={`${p.brand} ${p.name} — details`}
                >
                  <ProductVisual
                    product={p}
                    className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute right-3 top-3 rounded-md bg-arco-cream/90 px-2.5 py-1 text-xs font-medium uppercase tracking-wide text-arco-red backdrop-blur-sm">
                    {p.category}
                  </span>
                </Link>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-bold uppercase tracking-wide text-arco-ink">
                    {p.name}
                  </h3>
                  <p className="mt-1 text-sm text-arco-red">{p.brand}</p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-arco-ink/10 bg-arco-cream px-2.5 py-1 text-xs text-ink-dim"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-arco-ink/10 pt-4 text-xs text-ink-dim">
                    <span>{p.origin}</span>
                    <span>per {p.unit}</span>
                  </div>

                  <div className="mt-5 flex items-center justify-between gap-3">
                    <span className="font-display text-lg font-bold leading-tight text-arco-red">
                      {p.packing}
                    </span>
                    <a
                      href="#quote"
                      className="inline-flex h-10 shrink-0 items-center gap-1.5 whitespace-nowrap rounded-lg bg-arco-cream px-4 text-xs font-bold uppercase tracking-wide text-arco-ink ring-1 ring-arco-ink/15 transition-colors hover:bg-arco-red hover:text-arco-cream hover:ring-arco-red"
                    >
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <path d="M6 6h15l-1.5 9h-12zM6 6L5 3H3M9 20a1 1 0 1 0 0-.01M18 20a1 1 0 1 0 0-.01" />
                      </svg>
                      Add to order
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {hasMore && (
          <div className="mt-10 text-center">
            <Link
              href={
                filter === "All"
                  ? "/products"
                  : `/products?category=${encodeURIComponent(filter)}`
              }
              className="inline-flex h-12 items-center gap-2 rounded-lg border border-arco-ink/20 px-6 font-display text-sm font-bold uppercase tracking-wide text-arco-ink transition-colors hover:border-arco-red hover:bg-arco-red hover:text-arco-cream"
            >
              View all {matched.length}
              {filter === "All" ? " products" : ` in ${filter}`}
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M13 6l6 6-6 6M5 12h14" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
