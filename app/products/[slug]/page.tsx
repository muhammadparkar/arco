import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct, products } from "../../data/products";
import ProductVisual from "../../components/ProductVisual";
import ProductCard from "../../components/ProductCard";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const product = getProduct((await params).slug);
  if (!product) return {};
  return {
    title: `${product.brand} ${product.name}`,
    description: product.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const product = getProduct((await params).slug);
  if (!product) notFound();

  const related = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 3);

  return (
    <div className="mx-auto max-w-6xl px-4 pb-12 pt-32">
      <nav className="text-sm text-slate-600" aria-label="Breadcrumb">
        <Link href="/products" className="transition-colors duration-200 hover:text-arco-red">
          Products
        </Link>
        <span className="mx-2" aria-hidden="true">/</span>
        <Link
          href={`/products?category=${encodeURIComponent(product.category)}`}
          className="transition-colors duration-200 hover:text-arco-red"
        >
          {product.category}
        </Link>
        <span className="mx-2" aria-hidden="true">/</span>
        <span className="font-semibold text-arco-ink">{product.name}</span>
      </nav>

      <div className="mt-8 grid gap-10 md:grid-cols-2">
        <ProductVisual product={product} className="aspect-square w-full rounded-2xl" />

        <div>
          <p className="text-sm font-bold uppercase tracking-wider text-arco-red">
            {product.brand}
          </p>
          <h1 className="mt-1 text-4xl font-extrabold">{product.name}</h1>

          <p className="mt-4 text-3xl font-extrabold text-arco-green">
            {product.packing}
            <span className="ml-2 text-sm font-normal text-slate-600">
              per {product.unit} · trade pricing on request
            </span>
          </p>

          <p className="mt-5 leading-relaxed text-slate-700">
            {product.description}
          </p>

          <dl className="mt-6 grid grid-cols-2 gap-4 rounded-xl bg-arco-cream p-5 text-sm">
            <div>
              <dt className="font-bold">Category</dt>
              <dd className="mt-1 text-slate-600">{product.category}</dd>
            </div>
            <div>
              <dt className="font-bold">Country of Origin</dt>
              <dd className="mt-1 text-slate-600">{product.origin}</dd>
            </div>
            <div>
              <dt className="font-bold">Packing</dt>
              <dd className="mt-1 text-slate-600">{product.packing}</dd>
            </div>
            <div>
              <dt className="font-bold">Trade Unit</dt>
              <dd className="mt-1 text-slate-600">{product.unit}</dd>
            </div>
            {product.tags.length > 0 && (
              <div className="col-span-2">
                <dt className="font-bold">Tags</dt>
                <dd className="mt-2 flex flex-wrap gap-2">
                  {product.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-arco-green px-3 py-1 text-xs font-semibold text-white"
                    >
                      {t}
                    </span>
                  ))}
                </dd>
              </div>
            )}
          </dl>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={`/contact?product=${encodeURIComponent(`${product.brand} ${product.name}`)}`}
              className="rounded-md bg-arco-red px-6 py-3 font-bold text-white transition-colors duration-200 hover:bg-arco-red-dark"
            >
              Request Wholesale Quote
            </Link>
            <a
              href="tel:+97474740076"
              className="rounded-md border-2 border-arco-green px-6 py-3 font-bold text-arco-green transition-colors duration-200 hover:bg-arco-green hover:text-white"
            >
              Call Sales
            </a>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="text-2xl font-extrabold">More in {product.category}</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
