import type { ReactNode } from "react";
import Link from "next/link";
import Reveal from "../Reveal";
import { Icon, icons } from "../Icon";

const spiceGroups = [
  { title: "Ground Spices", items: "Curry powder, chilli powder, turmeric powder, black pepper, white pepper, coriander powder, cumin powder" },
  { title: "Whole Spices", items: "Fennel seeds, fenugreek, mustard seeds, cinnamon sticks & powder, cardamom, cloves, bay leaves" },
  { title: "Masala Blends", items: "Mixed masala, garam masala, chicken masala, meat masala, fish masala, biriyani masala, custom blends" },
];

const fmcgGroups = [
  { title: "Grocery & Dry Foods", items: "Rice varieties, flour & bakery ingredients, sugar & salt, pulses & lentils, beans & grains, pasta & noodles" },
  { title: "Cooking Essentials", items: "Sunflower oil, vegetable oil, ghee, sauces, mayonnaise, ketchup, vinegar, pickles, ready-to-cook products" },
  { title: "Beverages", items: "Ceylon tea, green tea, coffee, juices, soft drinks, drinking water" },
  { title: "Snacks & Confectionery", items: "Biscuits, chocolates, sweets, snacks, nuts & dry fruits" },
  { title: "Frozen & Chilled Products", items: "Frozen foods, dairy products, meat & poultry products, seafood products" },
];

const horecaGroups = [
  { title: "Hotels", items: "Kitchen ingredients, buffet items, beverage supplies, guest service products" },
  { title: "Restaurants & Cafés", items: "Bulk food ingredients, spices & seasonings, sauces & condiments, beverage solutions, daily kitchen requirements" },
  { title: "Catering Companies", items: "Large quantity food supplies, event catering requirements, customized supply solutions" },
  { title: "Hospitality Essentials", items: "Disposable packaging, food containers, cleaning products, hygiene supplies, kitchen consumables" },
];

const whyChoose = [
  "Quality Products",
  "Reliable Supply Chain",
  "Competitive Pricing",
  "Professional Service",
  "Timely Delivery",
  "Long-Term Business Partnerships",
];

const pillars = [
  {
    key: "spice",
    accent: "bg-arco-green",
    iconBg: "bg-arco-green/10 text-arco-green",
    title: "Spice & Seasoning",
    blurb: "Authentic flavors and consistent quality for kitchens and food businesses.",
    icon: icons.leaf,
    groupAccent: "text-arco-green",
    groups: spiceGroups,
  },
  {
    key: "fmcg",
    accent: "bg-arco-red",
    iconBg: "bg-arco-red/10 text-arco-red",
    title: "FMCG Product Range",
    blurb: "Essential fast-moving consumer goods for retail and food service.",
    icon: icons.bag,
    groupAccent: "text-arco-red",
    groups: fmcgGroups,
  },
  {
    key: "horeca",
    accent: "bg-arco-yellow",
    iconBg: "bg-arco-yellow/20 text-arco-ink",
    title: "HORECA Supply Solutions",
    blurb: "Complete supply solutions for hospitality and food service businesses.",
    icon: icons.bell,
    groupAccent: "text-arco-ink",
    groups: horecaGroups,
  },
];

function PillarCard({
  accent,
  iconBg,
  title,
  blurb,
  icon,
  groupAccent,
  groups,
}: {
  accent: string;
  iconBg: string;
  title: string;
  blurb: string;
  icon: ReactNode;
  groupAccent: string;
  groups: { title: string; items: string }[];
}) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-arco-ink/10 bg-white shadow-[0_18px_40px_-30px_rgba(26,43,33,0.5)] transition-transform duration-300 hover:-translate-y-1">
      <span className={`block h-1.5 w-full ${accent}`} aria-hidden="true" />
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3">
          <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${iconBg}`}>
            <Icon path={icon} className="h-6 w-6" />
          </span>
          <h3 className="font-display text-lg font-bold uppercase leading-tight tracking-wide text-arco-ink">
            {title}
          </h3>
        </div>
        <p className="mt-3 text-sm text-slate-600">{blurb}</p>
        <div className="mt-5 space-y-3.5 border-t border-arco-ink/10 pt-4">
          {groups.map((g) => (
            <div key={g.title}>
              <p className={`text-xs font-bold uppercase tracking-wide ${groupAccent}`}>
                {g.title}
              </p>
              <p className="mt-0.5 text-sm leading-relaxed text-slate-600">{g.items}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Range() {
  return (
    <section id="range" className="scroll-mt-24 bg-arco-cream py-20 text-arco-ink sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-display text-xs uppercase tracking-[0.3em] text-arco-red">
            01 — The range
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold uppercase tracking-wide text-arco-ink sm:text-5xl">
            Complete Spice, FMCG &amp; HORECA Supply
          </h2>
          <p className="mt-4 leading-relaxed text-ink-dim">
            Under the heritage of NBI Holding (established 1987), ARCO
            provides a wide range of quality food products and hospitality
            solutions across Qatar. With a strong focus on Spices, FMCG and
            HORECA supplies, we serve hotels, restaurants, cafés, catering
            companies, supermarkets, wholesalers and food service operators
            with reliable products, competitive pricing and professional
            distribution.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.key} delay={i * 80} className="h-full">
              <PillarCard {...p} />
            </Reveal>
          ))}
        </div>

        {/* why choose ARCO */}
        <Reveal>
          <section className="mt-14 overflow-hidden rounded-2xl bg-forest px-8 py-12 text-white sm:px-12">
            <h3 className="font-display text-2xl font-bold uppercase tracking-wide sm:text-3xl">
              Why Choose ARCO Trading &amp; Marketing?
            </h3>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {whyChoose.map((w) => (
                <li key={w} className="flex items-center gap-2.5 text-sm font-semibold text-crema">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-arco-yellow/20 text-arco-yellow">
                    <Icon path={icons.check} className="h-3.5 w-3.5" />
                  </span>
                  {w}
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-2xl text-sm leading-relaxed text-crema/80">
              Backed by the trusted legacy of NBI Holding since 1987, we
              continue to deliver quality, reliability and excellence to
              Qatar&apos;s growing food and hospitality industry.
            </p>
            <p className="mt-6 font-display text-xs uppercase tracking-[0.3em] text-arco-yellow">
              Quality · Trust · Excellence
            </p>
          </section>
        </Reveal>

        <div className="mt-10 text-center">
          <Link
            href="/products"
            className="inline-flex h-12 items-center gap-2 rounded-lg border border-arco-ink/20 px-6 font-display text-sm font-bold uppercase tracking-wide text-arco-ink transition-colors hover:border-arco-red hover:bg-arco-red hover:text-arco-cream"
          >
            Browse the full catalogue
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M13 6l6 6-6 6M5 12h14" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
