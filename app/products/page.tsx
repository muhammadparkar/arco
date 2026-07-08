import type { Metadata } from "next";
import Link from "next/link";
import { categories, products } from "../data/products";
import ProductCard from "../components/ProductCard";
import Reveal from "../components/Reveal";
import PageHeader from "../components/PageHeader";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse the full ARCO Trading & Marketing catalogue — cereals, confectionery, snacks, beverages, dairy and household lines.",
};

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const active = categories.find((c) => c === category);
  const shown = active ? products.filter((p) => p.category === active) : products;

  return (
    <div>
      <PageHeader eyebrow="Catalogue" title="Our Products" photo="cannedGoods">
        212+ SKUs across nine categories, sourced from 25+ countries. Packing
        and trade units shown; contact us for pricing and availability.
      </PageHeader>

      <div className="mx-auto max-w-6xl px-4 pb-16">

      <nav className="mt-8 flex flex-wrap gap-2" aria-label="Filter by category">
        <Link
          href="/products"
          className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200 ${
            !active
              ? "bg-arco-green text-white"
              : "border border-gray-200 text-arco-ink hover:border-arco-green hover:text-arco-green"
          }`}
        >
          All ({products.length})
        </Link>
        {categories.map((c) => {
          const count = products.filter((p) => p.category === c).length;
          return (
            <Link
              key={c}
              href={`/products?category=${encodeURIComponent(c)}`}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200 ${
                active === c
                  ? "bg-arco-green text-white"
                  : "border border-gray-200 text-arco-ink hover:border-arco-green hover:text-arco-green"
              }`}
            >
              {c} ({count})
            </Link>
          );
        })}
      </nav>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 3) * 80}>
            <ProductCard product={p} />
          </Reveal>
        ))}
      </div>
      </div>
    </div>
  );
}
