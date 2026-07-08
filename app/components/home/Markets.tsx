import Image from "next/image";
import Reveal from "../Reveal";
import { markets } from "../../data/site";
import { photos } from "../../data/photos";

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

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {markets.map((m, i) => (
            <Reveal key={m.country} delay={i * 80}>
              <article className="group relative flex h-56 overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src={photos[m.photo as keyof typeof photos]}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/60 to-forest/20" />
                <div className="relative mt-auto w-full p-6">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-crema">
                      {m.country}
                    </h3>
                    <span className="text-xs uppercase tracking-wide text-arco-yellow">
                      {m.lines}
                    </span>
                  </div>
                  <p className="text-sm text-arco-red-bright">{m.region}</p>
                  <p className="mt-2 max-h-0 overflow-hidden text-sm text-crema-dim opacity-0 transition-all duration-300 group-hover:max-h-24 group-hover:opacity-100 motion-reduce:max-h-24 motion-reduce:opacity-100">
                    {m.note}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
