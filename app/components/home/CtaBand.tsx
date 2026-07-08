import Link from "next/link";
import Reveal from "../Reveal";
import { partnerCta } from "../../data/site";

/** Full-width brand band — deep red wash for a cinematic break. */
export default function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-arco-red py-28 sm:py-36">
      <div
        className="absolute inset-0 opacity-[0.1] [background-image:linear-gradient(45deg,rgba(255,215,0,0.7)_25%,transparent_25%_75%,rgba(255,215,0,0.7)_75%),linear-gradient(45deg,rgba(255,215,0,0.7)_25%,transparent_25%_75%,rgba(255,215,0,0.7)_75%)] [background-position:0_0,17px_17px] [background-size:34px_34px]"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-arco-red-dark via-arco-red-dark/50 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-xl">
          <p className="font-display text-xs uppercase tracking-[0.3em] text-arco-yellow">
            {partnerCta.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold uppercase leading-tight tracking-wide text-white sm:text-6xl">
            {partnerCta.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-red-100 sm:text-lg">
            {partnerCta.copy}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/#quote"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-arco-yellow px-7 font-display text-sm font-bold uppercase tracking-wide text-forest transition-colors hover:bg-arco-yellow-bright"
            >
              Open a trade account
            </Link>
            <Link
              href="/#range"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-white/40 px-7 font-display text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-white hover:bg-white/5"
            >
              Browse the range
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
