import { brands } from "../../data/products";

export default function Partners() {
  const row = [...brands, ...brands];
  return (
    <section className="green-ornament border-y border-arco-yellow/20 py-8">
      <p className="mb-6 text-center text-xs uppercase tracking-[0.3em] text-crema-dim">
        Trusted by supermarkets &amp; hotels across Qatar
      </p>
      <div className="group relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-12 px-6 group-hover:[animation-play-state:paused]">
          {row.map((b, i) => (
            <span
              key={i}
              className="whitespace-nowrap font-display text-lg font-bold uppercase tracking-wide text-arco-cream/60"
            >
              {b.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
