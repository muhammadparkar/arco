import type { ReactNode } from "react";

// Hand-drawn line icons, matching the inline-SVG convention used across the
// site (Hero, ProductCard, Navbar) — no icon-library dependency.
export const icons: Record<string, ReactNode> = {
  hotel: (
    <path d="M4 21V6a1 1 0 011-1h6a1 1 0 011 1v15M4 21h16M12 21v-6h4a1 1 0 011 1v5M7 8h.01M7 11h.01M7 14h.01M7 17h.01" />
  ),
  restaurant: (
    <path d="M7 3v6a2 2 0 002 2v10M7 3a2 2 0 00-2 2v4a2 2 0 002 2M7 3a2 2 0 012 2v4a2 2 0 01-2 2m10-8v18M17 3c-1.7 0-3 1.8-3 4s1.3 4 3 4" />
  ),
  cafe: (
    <path d="M4 8h13v6a5 5 0 01-5 5H9a5 5 0 01-5-5V8zM17 9h1a3 3 0 010 6h-1M6 3c0 1-1 1-1 2s1 1 1 2M10 3c0 1-1 1-1 2s1 1 1 2" />
  ),
  catering: <path d="M3 13a9 9 0 0118 0H3zM3 13h18M9 5a3 3 0 016 0" />,
  cart: (
    <path d="M3 4h2l2.4 12.4a1 1 0 001 .8h9.2a1 1 0 001-.8L20 8H6M9 20a1 1 0 100-2 1 1 0 000 2zM17 20a1 1 0 100-2 1 1 0 000 2z" />
  ),
  boxes: (
    <path d="M4 9l4-2.5L12 9l-4 2.5L4 9zM12 9l4-2.5L20 9l-4 2.5L12 9zM4 9v6l4 2.5M12 9v6l4 2.5M20 9v6l-4 2.5M12 15v6" />
  ),
  distribution: (
    <path d="M3 7h11v10H3zM14 10h4l3 3v4h-7zM6.5 20a2 2 0 100-4 2 2 0 000 4zM17.5 20a2 2 0 100-4 2 2 0 000 4z" />
  ),
  building: (
    <path d="M3 21h18M6 21V4a1 1 0 011-1h10a1 1 0 011 1v17M9 8h1M14 8h1M9 12h1M14 12h1M9 16h1M14 16h1" />
  ),
  eye: (
    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7zM12 15a3 3 0 100-6 3 3 0 000 6z" />
  ),
  compass: <path d="M12 22a10 10 0 100-20 10 10 0 000 20zM15 9l-2 6-6 2 2-6z" />,
  leaf: (
    <path d="M5 21c8-1 13-6 14-14-8 1-13 6-14 14zM5 21c1-4 3-7 6-9" />
  ),
  bag: (
    <path d="M6 8h12l1 13H5L6 8zM9 8V6a3 3 0 016 0v2" />
  ),
  bell: (
    <path d="M3 18h18M4 18a8 8 0 0116 0M12 6v2M9 6h6" />
  ),
  check: <path d="M5 13l4 4L19 7" />,
};

export function Icon({
  path,
  className = "h-6 w-6",
}: {
  path: ReactNode;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {path}
    </svg>
  );
}
