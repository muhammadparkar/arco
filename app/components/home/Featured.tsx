import Reveal from "../Reveal";
import ProductVisual from "../ProductVisual";
import { getProduct } from "../../data/products";
import { featured } from "../../data/site";

export default function Featured() {
  const product = getProduct(featured.slug);

  return (
    <section className="kraft py-20 text-arco-ink sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="grid items-stretch gap-0 overflow-hidden rounded-3xl border border-arco-ink/10 bg-arco-cream shadow-[0_30px_60px_-40px_rgba(26,43,33,0.6)] lg:grid-cols-2">
            {/* visual */}
            <div className="relative min-h-[320px] overflow-hidden">
              {product && (
                <ProductVisual product={product} className="absolute inset-0" />
              )}
              <span className="absolute left-5 top-5 rounded-full bg-arco-red px-3.5 py-1.5 font-display text-xs font-bold uppercase tracking-wide text-arco-cream">
                {featured.badge}
              </span>
            </div>

            {/* copy */}
            <div className="flex flex-col justify-center p-8 sm:p-12">
              <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-arco-ink sm:text-4xl">
                {featured.name}
              </h2>
              <p className="mt-4 text-ink-dim">{featured.copy}</p>

              <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2.5">
                {featured.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-arco-ink">
                    <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-arco-green-bright" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-4 border-t border-arco-ink/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <span className="font-display text-3xl font-bold text-arco-red">
                    {featured.price}
                  </span>
                  <p className="mt-1 text-xs text-ink-dim">{featured.unit}</p>
                </div>
                <a
                  href="#quote"
                  className="inline-flex h-12 items-center justify-center rounded-lg bg-arco-red px-7 font-display text-sm font-bold uppercase tracking-wide text-arco-cream transition-colors hover:bg-arco-red-bright"
                >
                  Order &amp; sample
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
