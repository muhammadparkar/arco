import Reveal from "../Reveal";
import { steps } from "../../data/site";

export default function Process() {
  return (
    <section id="process" className="green-ornament scroll-mt-24 border-y border-arco-yellow/20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="font-display text-xs uppercase tracking-[0.3em] text-arco-red-bright">
            How we work
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold uppercase tracking-wide text-crema sm:text-5xl">
            Sourced to delivered
          </h2>
        </Reveal>

        <div className="relative mt-14">
          {/* connecting line */}
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-arco-red/0 via-arco-red/50 to-arco-red/0 lg:block" />

          <ol className="grid gap-8 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.n} as="li" delay={i * 110} className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-arco-yellow/50 bg-arco-green font-display text-lg font-bold text-arco-yellow-bright">
                  {s.n}
                </div>
                <h3 className="mt-5 font-display text-xl font-bold uppercase tracking-wide text-crema">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-crema-dim">
                  {s.copy}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
