import type { Metadata } from "next";
import { company } from "../data/site";

export const metadata: Metadata = { title: "Terms of Service" };

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 pb-20 pt-32 text-arco-ink sm:px-8">
      <h1 className="font-display text-3xl font-bold uppercase tracking-wide sm:text-4xl">
        Terms of Service
      </h1>
      <p className="mt-2 text-sm text-ink-dim">Last updated: 2026</p>

      <div className="prose mt-8 max-w-none space-y-5 text-sm leading-relaxed text-ink-dim">
        <p>
          These terms govern trade enquiries and orders placed with{" "}
          {company.name} ({company.address}).
        </p>
        <p>
          Product listings, packing sizes and origins shown on this site are
          indicative. Trade pricing, minimum order quantities and delivery
          terms are confirmed per order via quote and are not binding until
          agreed in writing.
        </p>
        <p>
          Stock availability is subject to change without notice. We reserve
          the right to substitute an equivalent line where a specific SKU is
          out of stock, with the customer's confirmation.
        </p>
        <p>
          Delivery timelines quoted (e.g. next-day across Doha) are estimates
          and not guaranteed for force-majeure events, customs delays or
          weather disruption.
        </p>
        <p>
          For questions about an active order or account, contact your
          account manager or {company.email}.
        </p>
      </div>
    </div>
  );
}
