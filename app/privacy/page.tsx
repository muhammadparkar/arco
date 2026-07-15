import type { Metadata } from "next";
import { company } from "../data/site";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 pb-20 pt-32 text-arco-ink sm:px-8">
      <h1 className="font-display text-3xl font-bold uppercase tracking-wide sm:text-4xl">
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-ink-dim">Last updated: 2026</p>

      <div className="prose mt-8 max-w-none space-y-5 text-sm leading-relaxed text-ink-dim">
        <p>
          {company.name} ("ARCO", "we", "us") collects the information you
          submit through our contact and quote forms — name, company, phone
          number, email and message content — solely to respond to trade
          enquiries and process orders.
        </p>
        <p>
          We do not sell or share your information with third parties for
          marketing purposes. Information is retained only as long as needed
          to service your enquiry or an active trade account.
        </p>
        <p>
          Enquiries submitted via our contact form are sent directly to{" "}
          {company.email} and are not stored on a server we operate.
        </p>
        <p>
          To request access to, correction of, or deletion of your data,
          contact us at {company.email} or {company.phone}.
        </p>
      </div>
    </div>
  );
}
