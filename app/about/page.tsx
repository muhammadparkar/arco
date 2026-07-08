import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "../components/Reveal";
import PageHeader from "../components/PageHeader";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "ARCO Trading & Marketing W.L.L. — an FMCG import and distribution company based in Doha, Qatar.",
};

const values = [
  {
    title: "Reliability",
    body: "Chilled and ambient logistics with next-day delivery across Doha and scheduled routes nationwide.",
  },
  {
    title: "Quality",
    body: "Every line we carry meets Qatari food safety standards, with full cold-chain integrity and halal certification where applicable.",
  },
  {
    title: "Partnership",
    body: "Dedicated account managers for retailers, and full market-entry support for the brands we represent.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <PageHeader eyebrow="Who We Are" title="About ARCO" photo="teamMeeting">
        An FMCG import and distribution house headquartered in Doha, serving
        retailers and food service across Qatar.
      </PageHeader>

      <div className="mx-auto max-w-6xl px-4 pb-16">
      <div className="mt-12 grid gap-10 md:grid-cols-2">
        <div className="space-y-4 leading-relaxed text-slate-700">
          <p>
            ARCO Trading &amp; Marketing W.L.L. is an FMCG import and
            distribution company headquartered in Doha, Qatar (CR No: 167747).
            Since our founding we have grown from a small trading house into a
            distribution partner serving supermarkets, groceries, hotels and
            food-service operators across the country.
          </p>
          <p>
            We specialise in food and consumer goods: breakfast cereals,
            confectionery, snacks, beverages, chilled dairy and household
            essentials. Our portfolio pairs global names with strong regional
            brands, giving retailers a single supplier for high-rotation
            categories.
          </p>
          <p>
            Beyond logistics, we invest in the brands we carry — merchandising,
            in-store activation and social media marketing that keeps our
            partners&apos; products moving off the shelf.
          </p>
        </div>

        <div className="rounded-2xl bg-arco-cream p-8">
          <h2 className="text-xl font-extrabold">At a Glance</h2>
          <dl className="mt-6 space-y-4 text-sm">
            {[
              ["Legal name", "ARCO Trading & Marketing W.L.L."],
              ["Commercial registration", "CR No: 167747 · P.O. Box 38708"],
              ["Headquarters", "Doha, Qatar"],
              ["Focus", "FMCG import & distribution"],
              ["Coverage", "Retail, HoReCa and food service, nationwide"],
            ].map(([dt, dd]) => (
              <div key={dt} className="flex justify-between gap-4 border-b border-gray-200 pb-3">
                <dt className="font-bold">{dt}</dt>
                <dd className="text-right text-slate-600">{dd}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <section className="mt-16">
        <h2 className="text-3xl font-extrabold">What We Stand For</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 100} className="h-full">
            <div
              className={`h-full rounded-xl p-6 text-white transition-transform duration-300 hover:-translate-y-1 ${
                i === 1 ? "bg-arco-red" : "bg-arco-green"
              }`}
            >
              <h3 className="text-lg font-extrabold text-arco-yellow">
                {v.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed opacity-90">{v.body}</p>
            </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mt-16 text-center">
        <h2 className="text-2xl font-extrabold">Work with us</h2>
        <p className="mx-auto mt-2 max-w-lg text-slate-600">
          Whether you run a corner grocery or a hotel chain, our team will put
          together a range and price list that fits.
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
