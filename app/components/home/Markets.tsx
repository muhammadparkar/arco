import Reveal from "../Reveal";
import MarketsMapLoader from "./MarketsMapLoader";

export default function Markets() {
  return (
    <section id="markets" className="relative scroll-mt-24 overflow-hidden bg-forest py-20 sm:py-28">
      {/* faint route-lines backdrop */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.1] [background-image:radial-gradient(circle_at_20%_30%,rgba(255,215,0,0.7)_0_2px,transparent_3px),radial-gradient(circle_at_70%_60%,rgba(255,215,0,0.7)_0_2px,transparent_3px),radial-gradient(circle_at_45%_80%,rgba(255,215,0,0.7)_0_2px,transparent_3px)] [background-size:220px_220px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="font-display text-xs uppercase tracking-[0.3em] text-arco-red-bright">
            Where it comes from
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold uppercase tracking-wide text-crema sm:text-5xl">
            Sourced across four markets
          </h2>
          <p className="mt-4 text-crema-dim">
            Direct distribution agreements with manufacturers in Europe and the
            Gulf. The origins behind the range.
          </p>
        </Reveal>

        <Reveal className="mt-12">
          <MarketsMapLoader />
        </Reveal>
      </div>
    </section>
  );
}
