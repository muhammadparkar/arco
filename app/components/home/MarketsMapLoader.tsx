"use client";

import dynamic from "next/dynamic";

// Leaflet touches `window` on import — must stay client-only, never prerendered.
const MarketsMap = dynamic(() => import("./MarketsMap"), {
  ssr: false,
  loading: () => (
    <div className="h-[420px] w-full animate-pulse rounded-2xl border border-white/10 bg-white/5" />
  ),
});

export default function MarketsMapLoader() {
  return <MarketsMap />;
}
