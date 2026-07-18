import Image from "next/image";

// Partner logos sliced from the supplied brand grid → public/logos/*.png.
// Each tile is the logo on solid white; rendered as a white chip on the
// green band so mixed-background marks all read cleanly.
const LOGOS = [
  "evian", "barilla", "kelloggs", "lotus-biscoff", "bayara", "alpro",
  "bonne-maman", "philadelphia", "cadbury", "gullon", "lutosa", "oreo",
  "pinar", "flora", "mentos", "mars", "pringles", "qbb",
  "al-kanater", "master", "chupa-chups", "afia", "el-sabor", "kiri",
  "baladna", "puck", "lurpak", "monin", "tang", "nutella",
  "sis", "langnese", "belcolade", "nestle", "red-bull", "american-garden",
  "colosseum", "maple-joe", "sanpellegrino", "galaxy", "twinings", "kdd",
  "amul", "nescafe", "double-up", "kinza", "foster-clarks",
];

const label = (slug: string) =>
  slug.replace(/-/g, " ").replace(/\b\w/g, (m) => m.toUpperCase());

const mid = Math.ceil(LOGOS.length / 2);
const rowTop = LOGOS.slice(0, mid);
const rowBottom = LOGOS.slice(mid);

function Chip({ slug }: { slug: string }) {
  return (
    <div className="flex h-16 w-32 shrink-0 items-center justify-center rounded-xl bg-white px-4 shadow-sm">
      <Image
        src={`/logos/${slug}.png`}
        alt={label(slug)}
        width={110}
        height={44}
        className="h-auto max-h-11 w-auto max-w-full object-contain"
        style={{ width: "auto", height: "auto" }}
      />
    </div>
  );
}

function Row({
  logos,
  reverse = false,
}: {
  logos: string[];
  reverse?: boolean;
}) {
  const track = [...logos, ...logos];
  return (
    <div className="group relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
      <div
        className={`flex w-max items-center gap-4 px-6 group-hover:[animation-play-state:paused] ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {track.map((slug, i) => (
          <Chip key={i} slug={slug} />
        ))}
      </div>
    </div>
  );
}

export default function Partners() {
  return (
    <section className="green-ornament border-y border-arco-yellow/20 py-10">
      <p className="mb-7 text-center text-xs uppercase tracking-[0.3em] text-crema-dim">
        Trusted by supermarkets &amp; hotels across Qatar
      </p>
      <div className="flex flex-col gap-4">
        <Row logos={rowTop} />
        <Row logos={rowBottom} reverse />
      </div>
    </section>
  );
}
