import Link from "next/link";
import Reveal from "../Reveal";
import { pillars } from "../../data/site";

const ICONS: Record<string, React.ReactNode> = {
  food: <path d="M5 4h14v5H5zM8 9v3a4 4 0 0 0 8 0V9M9 20h6M12 16v4" />,
  chilled: <path d="M12 2v20M4 7l16 10M20 7L4 17M8 4l4 3 4-3M8 20l4-3 4 3" />,
  household: <path d="M10 2h4v3h3v4h-2v13H9V9H7V5h3V2zM11 13v3h2v-3z" />,
};

const ACCENT: Record<string, string> = {
  green: "group-hover:border-arco-green/60 text-arco-green",
  red: "group-hover:border-arco-red/60 group-hover:shadow-red-glow text-arco-red",
  gold: "group-hover:border-arco-yellow/70 text-arco-green-bright",
};

export default function Pillars() {
  return (
    <section className="relative border-y border-arco-ink/10 bg-arco-cream py-20 text-arco-ink sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="font-display text-xs uppercase tracking-[0.3em] text-arco-red">
            Three lines, one standard
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold uppercase tracking-wide text-arco-ink sm:text-5xl">
            Everything the shelf needs
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.id} delay={i * 90}>
              <Link
                href={p.href}
                className={`group flex h-full cursor-pointer flex-col rounded-2xl border border-arco-ink/10 bg-white/60 p-7 shadow-[0_18px_40px_-30px_rgba(26,43,33,0.5)] transition-all duration-300 hover:-translate-y-1 ${ACCENT[p.accent]}`}
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-arco-ink/10 bg-arco-cream">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
                    {ICONS[p.id]}
                  </svg>
                </span>
                <h3 className="mt-5 font-display text-2xl font-bold uppercase tracking-wide text-arco-ink">
                  {p.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-dim">
                  {p.copy}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium uppercase tracking-wide">
                  Explore
                  <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
