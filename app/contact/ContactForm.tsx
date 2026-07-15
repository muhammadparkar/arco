"use client";

import { useState } from "react";

// ponytail: no backend — form opens a prefilled email. Swap for an API route when one exists.
export default function ContactForm({ initialProduct = "" }: { initialProduct?: string }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = data.get("product")
      ? `Quote request: ${data.get("product")}`
      : "Enquiry from arcoqa.com";
    const body = [
      `Name: ${data.get("name")}`,
      `Company: ${data.get("company")}`,
      `Phone: ${data.get("phone")}`,
      "",
      `${data.get("message")}`,
    ].join("\n");
    window.location.href = `mailto:sales@arcoqa.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-bold">
            Your Name
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            className="mt-1 w-full rounded-md border border-arco-ink/15 transition-colors hover:border-arco-ink/30 px-3 py-2.5 focus:border-arco-green focus:outline-2 focus:outline-arco-green/40"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-bold">
            Company
          </label>
          <input
            id="company"
            name="company"
            autoComplete="organization"
            className="mt-1 w-full rounded-md border border-arco-ink/15 transition-colors hover:border-arco-ink/30 px-3 py-2.5 focus:border-arco-green focus:outline-2 focus:outline-arco-green/40"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="block text-sm font-bold">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="mt-1 w-full rounded-md border border-arco-ink/15 transition-colors hover:border-arco-ink/30 px-3 py-2.5 focus:border-arco-green focus:outline-2 focus:outline-arco-green/40"
          />
        </div>
        <div>
          <label htmlFor="product" className="block text-sm font-bold">
            Product of Interest
          </label>
          <input
            id="product"
            name="product"
            defaultValue={initialProduct}
            className="mt-1 w-full rounded-md border border-arco-ink/15 transition-colors hover:border-arco-ink/30 px-3 py-2.5 focus:border-arco-green focus:outline-2 focus:outline-arco-green/40"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-bold">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-1 w-full rounded-md border border-arco-ink/15 transition-colors hover:border-arco-ink/30 px-3 py-2.5 focus:border-arco-green focus:outline-2 focus:outline-arco-green/40"
        />
      </div>

      <button
        type="submit"
        className="cursor-pointer rounded-md bg-arco-red px-8 py-3 font-bold text-white transition-colors duration-200 hover:bg-arco-red-dark"
      >
        Send Enquiry
      </button>

      {sent && (
        <p role="status" className="text-sm font-semibold text-arco-green">
          Your email app should open with the enquiry drafted — or write to us
          directly at sales@arcoqa.com.
        </p>
      )}
    </form>
  );
}
