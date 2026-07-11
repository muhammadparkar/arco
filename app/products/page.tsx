import type { Metadata } from "next";
import Link from "next/link";
import { categories, products, subcategories } from "../data/products";
import ProductGrid from "../components/ProductGrid";
import PageHeader from "../components/PageHeader";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse the full ARCO Trading & Marketing catalogue — cereals, confectionery, snacks, beverages, dairy and household lines.",
};

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; sub?: string }>;
}) {
  const { category, sub } = await searchParams;
  const active = categories.find((c) => c === category);
  const subs = active ? subcategories[active] ?? [] : [];
  const activeSub = subs.find((s) => s === sub);

  let shown = active ? products.filter((p) => p.category === active) : products;
  if (activeSub) shown = shown.filter((p) => p.subcategory === activeSub);

  return (
    <div>
      <PageHeader eyebrow="Catalogue" title="Our Products" photo="cannedGoods">
        {products.length}+ SKUs across {categories.length} categories, sourced
        from 25+ countries. Packing and trade units shown; contact us for
        pricing and availability.
      </PageHeader>

      <div className="mx-auto max-w-6xl px-4 pb-16">
        {/* category strip — single scrollable row */}
        <div
          className="mt-8 -mx-1 overflow-x-auto px-1 pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          role="navigation"
          aria-label="Filter by category"
        >
          <div className="flex w-max items-center gap-2">
            <CategoryPill href="/products" active={!active} label="All" count={products.length} />
            {categories.map((c) => (
              <CategoryPill
                key={c}
                href={`/products?category=${encodeURIComponent(c)}`}
                active={active === c}
                label={c}
                count={products.filter((p) => p.category === c).length}
              />
            ))}
          </div>
        </div>

        {/* subcategory strip — only when a category is active */}
        {active && subs.length > 0 && (
          <div
            className="mt-3 -mx-1 overflow-x-auto px-1 pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            role="navigation"
            aria-label="Filter by subcategory"
          >
            <div className="flex w-max items-center gap-2">
              <SubPill
                href={`/products?category=${encodeURIComponent(active)}`}
                active={!activeSub}
                label={`All ${active}`}
              />
              {subs.map((s) => (
                <SubPill
                  key={s}
                  href={`/products?category=${encodeURIComponent(active)}&sub=${encodeURIComponent(s)}`}
                  active={activeSub === s}
                  label={s}
                  count={products.filter((p) => p.category === active && p.subcategory === s).length}
                />
              ))}
            </div>
          </div>
        )}

        <ProductGrid products={shown} />
      </div>
    </div>
  );
}

function CategoryPill({
  href,
  active,
  label,
  count,
}: {
  href: string;
  active: boolean;
  label: string;
  count: number;
}) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`inline-flex h-11 shrink-0 items-center gap-2 whitespace-nowrap rounded-full px-4 text-sm font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-arco-green ${
        active
          ? "bg-arco-green text-white"
          : "border border-gray-200 bg-white text-arco-ink hover:border-arco-green hover:text-arco-green"
      }`}
    >
      {label}
      <span
        className={`rounded-full px-1.5 py-0.5 text-xs font-bold tabular-nums ${
          active ? "bg-white/20 text-white" : "bg-arco-cream text-slate-500"
        }`}
      >
        {count}
      </span>
    </Link>
  );
}

function SubPill({
  href,
  active,
  label,
  count,
}: {
  href: string;
  active: boolean;
  label: string;
  count?: number;
}) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`inline-flex h-9 shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full px-3 text-xs font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-arco-red ${
        active
          ? "bg-arco-red text-white"
          : "border border-gray-200 text-slate-600 hover:border-arco-red hover:text-arco-red"
      }`}
    >
      {label}
      {count != null && <span className="tabular-nums opacity-70">({count})</span>}
    </Link>
  );
}
