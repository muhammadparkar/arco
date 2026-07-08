"use client";

import { useState } from "react";
import Reveal from "../Reveal";
import { company, productInterests } from "../../data/site";

type Status = "idle" | "submitting" | "done";
type Errors = Partial<Record<"company" | "name" | "email", string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Quote() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [interests, setInterests] = useState<string[]>([]);
  const [form, setForm] = useState({
    company: "",
    name: "",
    email: "",
    volume: "",
    message: "",
  });

  const set = (k: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const toggleInterest = (v: string) =>
    setInterests((arr) =>
      arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v],
    );

  const validate = (): boolean => {
    const next: Errors = {};
    if (!form.company.trim()) next.company = "Company is required.";
    if (!form.name.trim()) next.name = "Your name is required.";
    if (!form.email.trim()) next.email = "Email is required.";
    else if (!EMAIL_RE.test(form.email)) next.email = "Enter a valid email.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    // ponytail: no backend — open a prefilled email and show the done state.
    const subject = `Quote request — ${form.company}`;
    const body = [
      `Company: ${form.company}`,
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Monthly volume: ${form.volume}`,
      `Interested in: ${interests.join(", ") || "—"}`,
      "",
      form.message,
    ].join("\n");
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.setTimeout(() => setStatus("done"), 600);
  };

  const inputCls =
    "w-full rounded-lg border bg-forest px-4 py-3 text-sm text-crema placeholder:text-crema-dim/60 outline-none transition-colors focus:border-arco-yellow";

  return (
    <section
      id="quote"
      className="scroll-mt-24 border-t border-white/10 bg-forest-800 py-20 sm:py-28"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.1fr]">
        {/* left copy */}
        <Reveal>
          <p className="font-display text-xs uppercase tracking-[0.3em] text-arco-red-bright">
            Wholesale enquiry
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold uppercase tracking-wide text-crema sm:text-5xl">
            Request a quote
          </h2>
          <p className="mt-4 max-w-md text-crema-dim">
            Tell us what your shelves need. We&apos;ll come back with pricing,
            lead times and samples — usually within one working day.
          </p>

          <dl className="mt-8 space-y-4 text-sm">
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-crema-dim">Email</dt>
              <dd>
                <a href={`mailto:${company.email}`} className="text-crema hover:text-arco-yellow">
                  {company.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-crema-dim">Phone</dt>
              <dd className="text-crema">{company.phone}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-crema-dim">Trade desk</dt>
              <dd className="text-crema">{company.hours}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-crema-dim">Registration</dt>
              <dd className="text-crema">{company.address}</dd>
            </div>
          </dl>
        </Reveal>

        {/* form */}
        <Reveal delay={120}>
          <div className="rounded-2xl border border-white/10 bg-forest p-6 sm:p-8">
            {status === "done" ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full border border-arco-yellow/50 text-arco-yellow">
                  <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <h3 className="mt-5 font-display text-2xl font-bold uppercase tracking-wide text-crema">
                  Request drafted
                </h3>
                <p className="mt-2 max-w-xs text-sm text-crema-dim">
                  Thanks, {form.name.split(" ")[0] || "there"}. Your email app
                  should open with the enquiry ready to send — or write to us
                  directly at {company.email}.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setStatus("idle");
                    setForm({ company: "", name: "", email: "", volume: "", message: "" });
                    setInterests([]);
                  }}
                  className="mt-6 cursor-pointer rounded-lg border border-white/15 px-5 py-2.5 text-sm font-medium uppercase tracking-wide text-crema transition-colors hover:border-white/40"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Company" error={errors.company} htmlFor="q-company">
                    <input
                      id="q-company"
                      value={form.company}
                      onChange={set("company")}
                      placeholder="Supermarket / hotel / grocery"
                      aria-invalid={!!errors.company}
                      className={`${inputCls} ${errors.company ? "border-red-400/70" : "border-white/15"}`}
                    />
                  </Field>
                  <Field label="Your name" error={errors.name} htmlFor="q-name">
                    <input
                      id="q-name"
                      value={form.name}
                      onChange={set("name")}
                      placeholder="Full name"
                      aria-invalid={!!errors.name}
                      className={`${inputCls} ${errors.name ? "border-red-400/70" : "border-white/15"}`}
                    />
                  </Field>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Email" error={errors.email} htmlFor="q-email">
                    <input
                      id="q-email"
                      type="email"
                      value={form.email}
                      onChange={set("email")}
                      placeholder="you@company.qa"
                      aria-invalid={!!errors.email}
                      className={`${inputCls} ${errors.email ? "border-red-400/70" : "border-white/15"}`}
                    />
                  </Field>
                  <Field label="Monthly volume" htmlFor="q-volume">
                    <input
                      id="q-volume"
                      value={form.volume}
                      onChange={set("volume")}
                      placeholder="e.g. 60 cases mixed / 2 pallets"
                      className={`${inputCls} border-white/15`}
                    />
                  </Field>
                </div>

                <fieldset>
                  <legend className="mb-2 block text-xs uppercase tracking-[0.2em] text-crema-dim">
                    Interested in
                  </legend>
                  <div className="flex flex-wrap gap-2">
                    {productInterests.map((p) => {
                      const on = interests.includes(p);
                      return (
                        <button
                          key={p}
                          type="button"
                          onClick={() => toggleInterest(p)}
                          aria-pressed={on}
                          className={`cursor-pointer rounded-lg border px-3.5 py-2 text-sm transition-colors ${
                            on
                              ? "border-arco-yellow bg-arco-yellow/15 text-arco-yellow"
                              : "border-white/15 text-crema-dim hover:border-white/40 hover:text-crema"
                          }`}
                        >
                          {p}
                        </button>
                      );
                    })}
                  </div>
                </fieldset>

                <Field label="Message" htmlFor="q-message">
                  <textarea
                    id="q-message"
                    value={form.message}
                    onChange={set("message")}
                    rows={3}
                    placeholder="Anything else we should know?"
                    className={`${inputCls} resize-none border-white/15`}
                  />
                </Field>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-arco-yellow px-6 font-display text-sm font-bold uppercase tracking-wide text-forest transition-colors hover:bg-arco-yellow-bright disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === "submitting" ? (
                    <>
                      <svg viewBox="0 0 24 24" className="h-5 w-5 animate-spin" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden>
                        <path d="M12 3a9 9 0 1 0 9 9" strokeLinecap="round" />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    "Send request"
                  )}
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-xs uppercase tracking-[0.2em] text-crema-dim"
      >
        {label}
      </label>
      {children}
      {error && <p className="mt-1.5 text-xs text-red-400">{error}</p>}
    </div>
  );
}
