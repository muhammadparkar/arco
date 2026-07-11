"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { Product } from "../data/products";
import ProductCard from "./ProductCard";

const PAGE_SIZE = 24;

/**
 * Client grid with an instant text search over name / brand / origin /
 * subcategory. Category and subcategory filtering stay URL-driven on the
 * server; this narrows whatever list the page hands down.
 */
export default function ProductGrid({ products }: { products: Product[] }) {
  const [q, setQ] = useState("");
  const [page, setPage] = useState(1);
  const topRef = useRef<HTMLDivElement>(null);

  const shown = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return products;
    return products.filter((p) =>
      `${p.name} ${p.brand} ${p.origin} ${p.subcategory}`
        .toLowerCase()
        .includes(term)
    );
  }, [q, products]);

  // Reset to page 1 whenever the result set changes (search or category swap).
  useEffect(() => {
    setPage(1);
  }, [q, products]);

  const pageCount = Math.max(1, Math.ceil(shown.length / PAGE_SIZE));
  const current = Math.min(page, pageCount);
  const start = (current - 1) * PAGE_SIZE;
  const paged = shown.slice(start, start + PAGE_SIZE);

  const goTo = (p: number) => {
    setPage(p);
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div ref={topRef} className="scroll-mt-28">
      {/* toolbar: search grows, live count sits right */}
      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <svg
            viewBox="0 0 24 24"
            className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="7" />
            <path strokeLinecap="round" d="M21 21l-4.3-4.3" />
          </svg>
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search products, brands, origin…"
            aria-label="Search products"
            className="h-11 w-full rounded-full border border-gray-200 bg-white pl-11 pr-10 text-sm text-arco-ink outline-none transition-colors placeholder:text-slate-400 focus:border-arco-green"
          />
          {q && (
            <button
              type="button"
              onClick={() => setQ("")}
              aria-label="Clear search"
              className="absolute right-2 top-1/2 flex h-7 w-7 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-gray-100 hover:text-arco-ink"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          )}
        </div>

        <p
          className="shrink-0 text-sm font-medium text-slate-600 sm:text-right"
          aria-live="polite"
        >
          {shown.length === 0
            ? "No matches"
            : `${start + 1}–${start + paged.length} of ${shown.length}`}
          {q.trim() && (
            <span className="text-slate-400"> · “{q.trim()}”</span>
          )}
        </p>
      </div>

      {shown.length > 0 ? (
        <>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {paged.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>

          {pageCount > 1 && (
            <Pagination current={current} pageCount={pageCount} onGo={goTo} />
          )}
        </>
      ) : (
        <p className="mt-10 text-slate-500">
          No products match your search. Try a brand or product name.
        </p>
      )}
    </div>
  );
}

// Windowed page numbers with first/last + ellipses. 44px touch targets,
// 8px gaps, visible focus rings, aria-current on the active page.
function Pagination({
  current,
  pageCount,
  onGo,
}: {
  current: number;
  pageCount: number;
  onGo: (p: number) => void;
}) {
  const pages: (number | "…")[] = [];
  const push = (p: number) => pages.push(p);
  const window = 1; // pages either side of current
  for (let p = 1; p <= pageCount; p++) {
    if (p === 1 || p === pageCount || (p >= current - window && p <= current + window)) {
      push(p);
    } else if (pages[pages.length - 1] !== "…") {
      pages.push("…");
    }
  }

  const btn =
    "inline-flex h-11 min-w-11 cursor-pointer items-center justify-center rounded-lg px-3 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-arco-green disabled:cursor-not-allowed disabled:opacity-40";

  return (
    <nav
      className="mt-12 flex flex-wrap items-center justify-center gap-2"
      aria-label="Pagination"
    >
      <button
        type="button"
        onClick={() => onGo(current - 1)}
        disabled={current === 1}
        aria-label="Previous page"
        className={`${btn} border border-gray-200 text-arco-ink hover:border-arco-green hover:text-arco-green`}
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      {pages.map((p, i) =>
        p === "…" ? (
          <span key={`e${i}`} className="px-1 text-slate-400" aria-hidden="true">
            …
          </span>
        ) : (
          <button
            key={p}
            type="button"
            onClick={() => onGo(p)}
            aria-label={`Page ${p}`}
            aria-current={p === current ? "page" : undefined}
            className={`${btn} ${
              p === current
                ? "bg-arco-green text-white"
                : "border border-gray-200 text-arco-ink hover:border-arco-green hover:text-arco-green"
            }`}
          >
            {p}
          </button>
        )
      )}

      <button
        type="button"
        onClick={() => onGo(current + 1)}
        disabled={current === pageCount}
        aria-label="Next page"
        className={`${btn} border border-gray-200 text-arco-ink hover:border-arco-green hover:text-arco-green`}
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </nav>
  );
}
