import Reveal from "../Reveal";
import { services } from "../../data/site";

const ICONS: Record<string, React.ReactNode> = {
  ship: <path d="M4 15l8-3 8 3-2 5H6zM12 12V4M8 7l4-3 4 3" />,
  warehouse: <path d="M3 20V9l9-5 9 5v11M7 20v-6h10v6M10 17h4" />,
  megaphone: <path d="M3 10v4h3l6 4V6l-6 4H3zM16 9a4 4 0 0 1 0 6M18.5 6.5a8 8 0 0 1 0 11" />,
  truck: <path d="M3 6h11v9H3zM14 9h4l3 3v3h-7zM7 18a1.5 1.5 0 1 0 0 .01M18 18a1.5 1.5 0 1 0 0 .01" />,
};

export default function Services() {
  return (
    <section className="relative overflow-hidden border-y border-arco-ink/10 bg-arco-cream py-20 text-arco-ink sm:py-28">
      {/* subtle red wash on the right */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 lg:block" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-l from-arco-red/[0.06] to-transparent" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="font-display text-xs uppercase tracking-[0.3em] text-arco-red">
            More than a supplier
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold uppercase tracking-wide text-arco-ink sm:text-5xl">
            What we do for the trade
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <article className="flex h-full gap-4 rounded-2xl border border-arco-ink/10 bg-white/70 p-6 backdrop-blur-sm transition-colors hover:border-arco-red/40">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-arco-red/30 bg-arco-red/10 text-arco-red">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
                    {ICONS[s.icon]}
                  </svg>
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold uppercase tracking-wide text-arco-ink">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-dim">
                    {s.copy}
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
