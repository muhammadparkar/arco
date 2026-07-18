import type { Metadata } from "next";
import ContactForm from "./ContactForm";
import PageHeader from "../components/PageHeader";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request wholesale pricing or partner with ARCO Trading & Marketing W.L.L. in Doha, Qatar.",
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ product?: string }>;
}) {
  const { product } = await searchParams;

  return (
    <div>
      <PageHeader eyebrow="Get in Touch" title="Contact Us" photo="deliveryTruck">
        Request trade pricing, open a retail account, or talk to us about
        representing your brand in Qatar.
      </PageHeader>

      <div className="mx-auto max-w-6xl px-4 pb-16">

      <div className="mt-10 grid gap-12 md:grid-cols-[2fr_1fr]">
        <ContactForm initialProduct={product ?? ""} />

        <aside className="space-y-6">
          <div className="rounded-xl bg-arco-cream p-6">
            <h2 className="font-extrabold">Head Office</h2>
            <address className="mt-3 space-y-1 text-sm not-italic text-slate-700">
              <p>ARCO Trading &amp; Marketing W.L.L.</p>
              <p>CR No: 167747</p>
              <p>P.O. Box 38708</p>
              <p>Doha, Qatar</p>
            </address>
          </div>

          <div className="rounded-xl bg-arco-cream p-6">
            <h2 className="font-extrabold">Direct</h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a
                  href="tel:+97455669309"
                  className="font-semibold text-arco-green transition-colors duration-200 hover:text-arco-green-dark"
                >
                  +974 5566 9309 / 3040 4668
                </a>
              </li>
              <li>
                <a
                  href="mailto:sales@arcoqa.com"
                  className="font-semibold text-arco-green transition-colors duration-200 hover:text-arco-green-dark"
                >
                  sales@arcoqa.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.arcoqa.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-arco-green transition-colors duration-200 hover:text-arco-green-dark"
                >
                  www.arcoqa.com
                </a>
              </li>
            </ul>
          </div>

          <div className="rounded-xl bg-arco-green p-6 text-white">
            <h2 className="font-extrabold text-arco-yellow">Trade Hours</h2>
            <p className="mt-3 text-sm text-green-100">
              Sunday – Thursday, 7:00 – 17:00
              <br />
              Saturday, 8:00 – 13:00
            </p>
          </div>
        </aside>
      </div>
      </div>
    </div>
  );
}
