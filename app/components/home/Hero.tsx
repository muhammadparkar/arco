import Link from "next/link";
import Image from "next/image";
import Logo from "../Logo";
import ProductVisual from "../ProductVisual";
import { getProduct } from "../../data/products";
import { company, featured } from "../../data/site";
import { photos } from "../../data/photos";

export default function Hero() {
  const chip = getProduct("kelloggs-corn-flakes-750gm");

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-forest"
    >
      {/* photo backdrop with brand wash */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src={photos.warehouse}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_15%_20%,rgba(32,96,64,0.65),rgba(9,26,17,0.96))]" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest/95 via-forest/70 to-forest/40" />
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-arco-red/25 blur-3xl" />
        <div className="absolute -bottom-40 left-1/4 h-96 w-96 rounded-full bg-arco-yellow/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 px-5 pb-20 pt-28 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        {/* left — editorial copy */}
        <div>
          <Logo
            className="mb-8 h-16 w-auto drop-shadow-[0_4px_18px_rgba(0,0,0,0.6)] sm:h-20"
            onDark
          />

          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-arco-yellow/70" />
            <span className="font-display text-xs uppercase tracking-[0.34em] text-arco-yellow">
              Wholesale · Doha, Qatar
            </span>
          </div>

          <h1 className="font-display text-4xl font-bold uppercase leading-[1.02] tracking-tight text-white sm:text-6xl">
            Global brands,
            <span className="block text-arco-red-bright">shelf-ready</span>
            <span className="block text-arco-cream">across Qatar</span>
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-crema/85 sm:text-lg">
            {company.tagline} Sourced direct, cleared in-house and delivered
            next-day — supplying supermarkets, hotels and groceries nationwide.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/#range"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-arco-yellow px-7 font-display text-sm font-bold uppercase tracking-wide text-forest transition-colors hover:bg-arco-yellow-bright"
            >
              Browse the range
            </Link>
            <Link
              href="/#quote"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-arco-cream/30 bg-forest/30 px-7 font-display text-sm font-bold uppercase tracking-wide text-arco-cream backdrop-blur-sm transition-colors hover:border-arco-cream/70 hover:bg-forest/50"
            >
              Open a trade account
            </Link>
          </div>

          {/* trust row */}
          <dl className="mt-12 flex gap-8 border-t border-arco-cream/15 pt-6">
            {[
              ["212+", "SKUs carried"],
              ["40+", "Partner brands"],
              ["24h", "Doha delivery"],
            ].map(([v, l]) => (
              <div key={l}>
                <dt className="font-display text-2xl font-bold text-arco-yellow">
                  {v}
                </dt>
                <dd className="text-xs uppercase tracking-[0.15em] text-crema/70">
                  {l}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* right — product plate stack (asymmetric, editorial) */}
        <div className="relative hidden lg:block">
          <div className="ornate-frame relative ml-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl">
            <Image
              src={photos.groceryAisle}
              alt=""
              fill
              sizes="40vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/85 via-forest/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="font-display text-xs uppercase tracking-[0.25em] text-arco-yellow">
                {featured.badge}
              </p>
              <p className="font-display text-xl font-bold uppercase tracking-wide text-arco-cream">
                {featured.name}
              </p>
            </div>
          </div>

          {/* floating product chip */}
          <div className="absolute -left-6 top-8 w-40 animate-float overflow-hidden rounded-xl border border-arco-cream/15 shadow-2xl">
            <div className="relative aspect-square">
              {chip && <ProductVisual product={chip} className="absolute inset-0" />}
            </div>
          </div>

          {/* red engraved tag */}
          <div className="brand-plate absolute -bottom-4 left-2 rounded-lg px-5 py-3">
            <span className="font-display text-sm font-bold uppercase tracking-[0.25em] text-arco-cream">
              ARCO Delivered
            </span>
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-arco-cream/60">
        <svg viewBox="0 0 24 40" className="h-9 w-5 animate-float" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden>
          <rect x="1" y="1" width="22" height="38" rx="11" />
          <circle cx="12" cy="11" r="2.5" fill="currentColor" stroke="none" />
        </svg>
      </div>
    </section>
  );
}
