import type { Product } from "../data/products";

// ponytail: no product photography yet — branded gradient tiles + category icon stand in.
export const categoryStyles: Record<string, { bg: string; icon: React.ReactNode }> = {
  "Sugar & Essentials": {
    bg: "from-amber-200 to-amber-500",
    icon: <path d="M6 3h12l-2 5H8L6 3zm2 7h8l1 11H7l1-11zm3 3v5h2v-5h-2z" />,
  },
  "Oils & Ghee": {
    bg: "from-arco-yellow/90 to-amber-600",
    icon: <path d="M10 2h4v3l3 4v13H7V9l3-4V2zm1 2v2h2V4h-2zM9 10v10h6V10l-2-3h-2l-2 3z" />,
  },
  "Dairy & Chilled": {
    bg: "from-slate-300 to-slate-500",
    icon: <path d="M8 2h8v3l2 4v13H6V9l2-4V2zm2 2v2h4V4h-4zM9 10v9h6v-9l-1-2h-4l-1 2z" />,
  },
  "Water & Beverages": {
    bg: "from-sky-500 to-blue-700",
    icon: <path d="M6 3h12l-1.5 18h-9L6 3zm2.2 4l.9 12h5.8l.9-12H8.2z" />,
  },
  "Spreads & Condiments": {
    bg: "from-arco-red to-rose-800",
    icon: <path d="M8 4h8v3a3 3 0 011 2v11H7V9a3 3 0 011-2V4zm2 2v1h4V6h-4zM9 10v9h6v-9H9z" />,
  },
  "Breakfast & Biscuits": {
    bg: "from-orange-400 to-amber-700",
    icon: <path d="M12 3C7 3 4 7 4 11c0 5 3.6 10 8 10s8-5 8-10c0-4-3-8-8-8zm0 3c1.5 2 2.5 3.5 2.5 5.5S13.5 15 12 15s-2.5-1.5-2.5-3.5S10.5 8 12 6z" />,
  },
  "Snacks & Confectionery": {
    bg: "from-arco-green to-emerald-800",
    icon: <path d="M4 6h16v4a2 2 0 010 4v4H4v-4a2 2 0 010-4V6zm4 3v6h2V9H8zm6 0v6h2V9h-2z" />,
  },
  "Tea & Coffee": {
    bg: "from-arco-green-dark to-forest",
    icon: <path d="M5 5h12v4h2a3 3 0 010 6h-2v3H5V5zm12 6v2h2a1 1 0 000-2h-2zM4 20h14v1.5H4z" />,
  },
  "Spices & Nuts": {
    bg: "from-red-600 to-orange-800",
    icon: <path d="M12 3c3 4 5 7 5 10a5 5 0 01-10 0c0-3 2-6 5-10zm0 10v6" />,
  },
};

const fallback = {
  bg: "from-arco-green to-forest",
  icon: <path d="M4 6h16v12H4z" />,
};

export default function ProductVisual({
  product,
  className = "",
}: {
  product: Product;
  className?: string;
}) {
  const style = categoryStyles[product.category] ?? fallback;
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br ${style.bg} ${className}`}
      role="img"
      aria-label={`${product.brand} ${product.name}`}
    >
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/10" aria-hidden="true" />
      <div className="absolute -bottom-8 -left-8 h-28 w-28 rounded-full bg-black/10" aria-hidden="true" />
      <svg
        viewBox="0 0 24 24"
        className="h-1/3 w-1/3 fill-white/85 transition-transform duration-300 group-hover:scale-110"
        aria-hidden="true"
      >
        {style.icon}
      </svg>
    </div>
  );
}
