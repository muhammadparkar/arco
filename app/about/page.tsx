import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Reveal from "../components/Reveal";
import PageHeader from "../components/PageHeader";
import { Icon, icons } from "../components/Icon";
import { photos } from "../data/photos";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "ARCO Trading & Marketing — a Qatar-based FMCG and HORECA distribution company, proud member of NBI Holding, established 1987.",
};

const coreBusiness = [
  { label: "FMCG Distribution", image: photos.warehouse },
  { label: "HORECA Food & Beverage Supply", icon: icons.restaurant },
  { label: "Hotel, Restaurant & Café Solutions", icon: icons.building },
  { label: "Wholesale & Retail Distribution", icon: icons.distribution },
  { label: "Import & Export", image: photos.containerPort },
];

const customers = [
  { label: "Hotels", icon: icons.hotel },
  { label: "Restaurants", icon: icons.restaurant },
  { label: "Cafés", icon: icons.cafe },
  { label: "Catering companies", icon: icons.catering },
  { label: "Supermarkets", icon: icons.cart },
  { label: "Wholesale distributors", icon: icons.boxes },
];

export default function AboutPage() {
  return (
    <div>
      <PageHeader eyebrow="Who We Are" title="About ARCO" photo="teamMeeting">
        A Qatar-based FMCG and HORECA distribution company, proud member of
        NBI Holding — established 1987.
      </PageHeader>

      <div className="mx-auto max-w-6xl px-4 pb-16">
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <div className="space-y-4 leading-relaxed text-slate-700">
            <p>
              ARCO Trading &amp; Marketing is a Qatar-based FMCG and HORECA
              distribution company founded by Abdur Rahman Salahudeen. Founded
              in 2010, ARCO serves Qatar&apos;s FMCG and HORECA sectors with
              premium food, beverage and hospitality products.
            </p>
            <p>
              We operate under NBI Holding, a family-owned business group
              established in 1987 by Salahudeen Abdul Hameed. His vision and
              commitment to quality created a lasting legacy that continues to
              guide how ARCO does business today.
            </p>
            <p>
              We focus on reliable sourcing, competitive pricing and
              efficient logistics. Every partnership is built on trust,
              professionalism and long-term value, guided by the values of
              NBI Holding, we continue to expand our portfolio and strengthen
              our presence in Qatar while maintaining high standards of
              service and excellence.
            </p>
          </div>

          <div className="rounded-2xl bg-arco-cream p-8">
            <h2 className="text-xl font-extrabold">At a Glance</h2>
            <dl className="mt-6 space-y-4 text-sm">
              {[
                ["Legal name", "ARCO Trading & Marketing W.L.L."],
                ["Founded", "2010, by Abdur Rahman Salahudeen"],
                ["Parent group", "NBI Holding, established 1987"],
                ["Headquarters", "Doha, Qatar"],
                ["Focus", "FMCG & HORECA distribution"],
              ].map(([dt, dd]) => (
                <div
                  key={dt}
                  className="flex justify-between gap-4 border-b border-gray-200 pb-3"
                >
                  <dt className="font-bold">{dt}</dt>
                  <dd className="text-right text-slate-600">{dd}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* NBI Holding parent block */}
        <Reveal>
          <section className="relative mt-16 overflow-hidden rounded-2xl bg-forest px-8 py-14 text-white sm:px-12 sm:py-16">
            <Image
              src={photos.warehouse}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 1152px"
              className="object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/90 to-forest/70" />
            <div className="relative">
              <p className="font-display text-xs uppercase tracking-[0.3em] text-arco-yellow">
                A Proud Member Of
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold uppercase tracking-wide sm:text-4xl">
                NBI Holding
              </h2>
              <p className="mt-4 max-w-2xl leading-relaxed text-crema/85">
                Parent company established since 1987 by Salahudeen Abdul
                Hameed. A family-owned business group whose vision and
                commitment to quality created a lasting legacy, the same
                values that guide ARCO&apos;s growth in Qatar today.
              </p>
            </div>
          </section>
        </Reveal>

        {/* who we serve */}
        <section className="mt-16 grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-arco-ink">
              Who We Serve
            </h2>
            <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-2">
              {customers.map((c, i) => (
                <Reveal key={c.label} delay={i * 60} className="h-full">
                  <li className="flex h-full flex-col items-start gap-3 rounded-xl border border-arco-ink/10 bg-white p-4 transition-transform duration-300 hover:-translate-y-1 hover:border-arco-red/30">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-arco-red/10 text-arco-red">
                      <Icon path={c.icon} className="h-5 w-5" />
                    </span>
                    <span className="text-sm font-semibold text-arco-ink">
                      {c.label}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src={photos.groceryAisle}
              alt="Stocked retail shelves supplied by ARCO"
              fill
              sizes="(max-width: 768px) 100vw, 576px"
              className="object-cover"
            />
          </div>
        </section>

        {/* core business */}
        <section className="mt-16">
          <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-arco-ink">
            Our Core Business
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {coreBusiness.map((b, i) => (
              <Reveal key={b.label} delay={i * 80} className="h-full">
                {b.image ? (
                  <div className="relative flex h-full min-h-32 items-end overflow-hidden rounded-xl p-6 transition-transform duration-300 hover:-translate-y-1">
                    <Image
                      src={b.image}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/30 to-transparent" />
                    <span className="relative font-display text-sm font-bold uppercase tracking-wide text-white">
                      {b.label}
                    </span>
                  </div>
                ) : (
                  <div
                    className={`flex h-full flex-col justify-between gap-6 rounded-xl p-6 transition-transform duration-300 hover:-translate-y-1 ${
                      i % 2 === 0 ? "bg-arco-green" : "bg-arco-red"
                    }`}
                  >
                    <Icon
                      path={b.icon}
                      className="h-8 w-8 text-white/70"
                    />
                    <span className="font-display text-sm font-bold uppercase tracking-wide text-white">
                      {b.label}
                    </span>
                  </div>
                )}
              </Reveal>
            ))}
          </div>
        </section>

        {/* vision & mission */}
        <section className="mt-16 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-arco-ink/10 bg-white p-8">
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-arco-red/10 text-arco-red">
              <Icon path={icons.eye} className="h-6 w-6" />
            </span>
            <h3 className="mt-4 font-display text-xs uppercase tracking-[0.3em] text-arco-red">
              Our Vision
            </h3>
            <p className="mt-3 leading-relaxed text-slate-700">
              To be one of Qatar&apos;s most trusted FMCG and HORECA
              distribution companies through exceptional products, reliable
              service, and sustainable partnerships.
            </p>
          </div>
          <div className="rounded-2xl border border-arco-ink/10 bg-white p-8">
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-arco-green/10 text-arco-green">
              <Icon path={icons.compass} className="h-6 w-6" />
            </span>
            <h3 className="mt-4 font-display text-xs uppercase tracking-[0.3em] text-arco-green">
              Our Mission
            </h3>
            <p className="mt-3 leading-relaxed text-slate-700">
              To deliver premium products, dependable supply chain solutions,
              competitive pricing, and outstanding customer service while
              carrying forward the legacy of NBI Holding.
            </p>
          </div>
        </section>

        <section className="mt-16 text-center">
          <h2 className="text-2xl font-extrabold">Work with us</h2>
          <p className="mx-auto mt-2 max-w-lg text-slate-600">
            Whether you run a corner grocery or a hotel chain, our team will
            put together a range and price list that fits.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-md bg-arco-red px-8 py-3 font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-arco-red-dark hover:shadow-lg"
          >
            Get in Touch
          </Link>
        </section>
      </div>
    </div>
  );
}
