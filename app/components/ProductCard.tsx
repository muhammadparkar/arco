import Link from "next/link";
import type { Product } from "../data/products";
import ProductVisual from "./ProductVisual";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group cursor-pointer overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-arco-green/40 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-arco-red"
    >
      <ProductVisual product={product} className="aspect-[4/3] w-full" />
      <div className="p-4">
        <p className="text-xs font-bold uppercase tracking-wider text-arco-red">
          {product.brand}
        </p>
        <h3 className="mt-1 font-semibold text-arco-ink transition-colors duration-200 group-hover:text-arco-green">
          {product.name}
        </h3>
        <div className="mt-2 flex items-baseline justify-between">
          <p className="text-lg font-bold text-arco-green">{product.packing}</p>
          <p className="text-xs text-slate-600">per {product.unit}</p>
        </div>
        <p className="mt-3 flex items-center gap-1 text-xs font-bold text-arco-red opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          View details
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 6l6 6-6 6M5 12h14" />
          </svg>
        </p>
      </div>
    </Link>
  );
}
