import type { Metadata } from "next";
import Link from "next/link";
import { brands, products } from "../data/products";
import Reveal from "../components/Reveal";
import PageHeader from "../components/PageHeader";

export const metadata: Metadata = {
  title: "Brands",
  description:
    "The global and regional brands ARCO Trading & Marketing represents in Qatar.",
};

export default function BrandsPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Partnerships"
        title="Brands We Represent"
        photo="groceryAisle"
        tone="red"
      >
        We hold distribution partnerships with leading international and
        regional manufacturers, bringing their full range to the Qatari
        market.
      </PageHeader>

      <div className="mx-auto max-w-6xl px-4 pb-16">

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {brands.map((b, i) => {
          const count = products.filter((p) => p.brand === b.name).length;
          return (
            <Reveal key={b.name} delay={(i % 3) * 80} className="h-full">
            <div className="h-full rounded-xl border border-gray-200 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div
                className={`flex h-20 items-center justify-center rounded-lg font-heading text-2xl font-extrabold text-white ${
                  i % 2 === 0 ? "bg-arco-red" : "bg-arco-green"
                }`}
              >
                {b.name}
              </div>
              <p className="mt-4 text-sm text-slate-700">{b.blurb}</p>
              {count > 0 ? (
                <Link
                  href="/products"
                  className="mt-4 inline-block text-sm font-bold text-arco-red transition-colors duration-200 hover:text-arco-red-dark"
                >
                  {count} product{count > 1 ? "s" : ""} in catalogue →
                </Link>
              ) : (
                <p className="mt-4 text-sm text-slate-500">
                  Catalogue coming soon
                </p>
              )}
            </div>
            </Reveal>
          );
        })}
      </div>

      <div className="relative mt-16 overflow-hidden rounded-2xl bg-arco-green p-10 text-center text-white">
        <h2 className="text-2xl font-extrabold">
          Are you a manufacturer looking for a Qatar distributor?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-green-100">
          We offer full-service market entry: import, warehousing, retail
          placement and in-store marketing.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-block rounded-md bg-arco-yellow px-8 py-3 font-bold text-arco-ink transition-colors duration-200 hover:bg-yellow-300"
        >
          Partner With Us
        </Link>
      </div>
      </div>
    </div>
  );
}
