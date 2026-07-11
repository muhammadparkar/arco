import Image from "next/image";
import Reveal from "../Reveal";
import Logo from "../Logo";
import { story } from "../../data/site";
import { photos } from "../../data/photos";

export default function Story() {
  return (
    <section className="kraft border-y border-arco-ink/10 py-20 text-arco-ink sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
        {/* brand board with corner frame accents */}
        <Reveal>
          <div className="relative">
            <div className="absolute -left-3 -top-3 h-24 w-24 rounded-tl-3xl border-l-2 border-t-2 border-arco-red" />
            <div className="absolute -bottom-3 -right-3 h-24 w-24 rounded-br-3xl border-b-2 border-r-2 border-arco-yellow" />
            <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl bg-forest">
              <Image
                src={photos.dairyFarm}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-forest/20 to-transparent" />
              <Logo
                className="relative h-20 w-auto drop-shadow-[0_8px_24px_rgba(0,0,0,0.6)] sm:h-24"
                color="#ffffff"
              />
            </div>
          </div>
        </Reveal>

        {/* copy */}
        <Reveal delay={120}>
          <p className="font-display text-xs uppercase tracking-[0.3em] text-arco-green">
            {story.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold uppercase tracking-wide text-arco-ink sm:text-5xl">
            {story.title}
          </h2>
          {story.copy.map((para) => (
            <p key={para.slice(0, 16)} className="mt-4 text-ink-dim">
              {para}
            </p>
          ))}

          <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-arco-ink/15 pt-6">
            {story.stats.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-2xl font-bold text-arco-red sm:text-3xl">
                  {s.value}
                </dt>
                <dd className="mt-1 text-xs uppercase tracking-[0.15em] text-ink-dim">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
