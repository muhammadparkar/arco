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

          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-arco-yellow/70" />
            <span className="font-display text-xs uppercase tracking-[0.34em] text-arco-yellow">
              Wholesale · Doha, Qatar
            </span>
          </div>

          {/* E-com rating badge */}
          <div className="mb-6 flex items-center gap-2 rounded-full border border-arco-cream/10 bg-white/5 px-3.5 py-1.5 w-fit backdrop-blur-sm">
            <span className="text-arco-yellow tracking-wide text-xs font-bold">★★★★★</span>
            <span className="text-[11px] text-arco-cream/95 font-medium tracking-wide">
              Trusted by 150+ supermarket chains & hotels in Qatar
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
              <svg className="-mr-1 ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </Link>
            <Link
              href="/#quote"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-arco-cream/30 bg-forest/30 px-7 font-display text-sm font-bold uppercase tracking-wide text-arco-cream backdrop-blur-sm transition-colors hover:border-arco-cream/70 hover:bg-forest/50"
            >
              Open a trade account
              <svg className="-mr-1 ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Quick specs trust badges */}
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-crema/70">
            <span className="flex items-center gap-1.5">
              <svg className="h-4 w-4 text-arco-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Direct Sourcing
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="h-4 w-4 text-arco-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Doha Warehoused
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="h-4 w-4 text-arco-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Customs Cleared
            </span>
          </div>

          {/* trust row */}
          <dl className="mt-12 grid grid-cols-3 gap-4 border-t border-arco-cream/15 pt-6 sm:flex sm:gap-8">
            {[
              ["212+", "SKUs carried"],
              ["40+", "Partner brands"],
              ["24h", "Doha delivery"],
            ].map(([v, l]) => (
              <div key={l}>
                <dt className="font-display text-xl sm:text-2xl font-bold text-arco-yellow">
                  {v}
                </dt>
                <dd className="text-[10px] sm:text-xs uppercase tracking-[0.15em] text-crema/70">
                  {l}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* right — product plate stack (asymmetric, editorial) */}
        <div className="relative mt-8 sm:mt-12 lg:mt-0 w-full max-w-sm mx-auto lg:ml-auto lg:mr-0 block">
          <div className="ornate-frame relative mx-auto aspect-[4/5] w-full overflow-hidden rounded-2xl">
            <Image
              src={photos.nutella}
              alt="Nutella Hazelnut Spread jar on a breakfast table"
              fill
              sizes="(max-width: 768px) 90vw, 40vw"
              className="object-cover"
            />
            
            {/* Wholesale Price Tag */}
            <div className="absolute right-4 top-4 z-20 rounded-lg border border-white/10 bg-forest/80 px-3.5 py-1.5 text-right backdrop-blur-md shadow-xl">
              <span className="block text-[9px] font-bold uppercase tracking-wider text-arco-yellow">
                Wholesale Pack
              </span>
              <span className="font-display text-sm sm:text-base font-extrabold text-white">
                {featured.price}
              </span>
              <span className="block text-[8px] text-arco-cream/60 leading-tight">
                {featured.unit}
              </span>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-forest/85 via-forest/10 to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="font-display text-[10px] sm:text-xs uppercase tracking-[0.25em] text-arco-yellow">
                Featured Product
              </p>
              <p className="font-display text-lg sm:text-xl font-bold uppercase tracking-wide text-arco-cream">
                {featured.name}
              </p>
              
              {/* Product trust tags */}
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                <span className="rounded bg-arco-red/20 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-arco-red-bright border border-arco-red/30">
                  {featured.badge}
                </span>
                <span className="rounded bg-arco-yellow/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-arco-yellow border border-arco-yellow/20">
                  Doha Stocked
                </span>
                <span className="rounded bg-white/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-arco-cream border border-white/10">
                  Next-Day
                </span>
              </div>
            </div>
          </div>

          {/* floating product chip */}
          <div className="absolute -left-3 sm:-left-6 top-8 w-32 sm:w-40 animate-float overflow-hidden rounded-xl border border-arco-cream/15 shadow-2xl">
            <div className="relative aspect-square">
              {chip && <ProductVisual product={chip} className="absolute inset-0" />}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
