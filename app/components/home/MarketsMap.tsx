"use client";

import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect, useRef, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { markets } from "../../data/site";

// Representative coordinates per sourcing region — one pin per market entry,
// not per country (the data groups several countries under each region).
const coords: Record<string, [number, number]> = {
  Europe: [48.5, 9.5],
  "GCC & Levant": [25.3, 51.5],
  Americas: [15, -78],
  "Asia & Oceania": [-3, 112],
};

const accents: Record<string, string> = {
  Europe: "#c8102e", // arco-red
  "GCC & Levant": "#206040", // arco-green
  Americas: "#a30d26", // arco-red-dark
  "Asia & Oceania": "#184a31", // arco-green-dark
};

function pinIcon(color: string, active: boolean) {
  return L.divIcon({
    className: "",
    html: `<div style="position:relative;width:28px;height:36px;">
      <span class="market-pulse-ring" style="position:absolute;left:2px;top:20px;width:24px;height:24px;border-radius:9999px;background:${color};opacity:${active ? 0.5 : 0.28};"></span>
      <svg width="28" height="36" viewBox="0 0 28 36" xmlns="http://www.w3.org/2000/svg" style="position:relative;transform:scale(${active ? 1.15 : 1});transform-origin:bottom center;transition:transform .3s ease;filter:drop-shadow(0 3px 4px rgba(13,43,27,0.35));">
        <path d="M14 0C6.3 0 0 6.3 0 14c0 10.5 14 22 14 22s14-11.5 14-22C28 6.3 21.7 0 14 0z" fill="${color}" stroke="#ffffff" stroke-width="2"/>
        <circle cx="14" cy="14" r="5" fill="#ffffff"/>
      </svg>
    </div>`,
    iconSize: [28, 36],
    iconAnchor: [14, 36],
    popupAnchor: [0, -34],
  });
}

const TOUR_DELAY = 3800;

/** Cycles the map through each market, opens its popup, pauses on user interaction. */
function TourController({
  activeIndex,
  onAdvance,
  markerRefs,
}: {
  activeIndex: number;
  onAdvance: () => void;
  markerRefs: React.RefObject<Record<string, L.Marker | null>>;
}) {
  const map = useMap();
  const playingRef = useRef(true);
  const programmaticRef = useRef(false);

  useMapEvents({
    dragstart: () => {
      playingRef.current = false;
    },
    zoomstart: () => {
      if (!programmaticRef.current) playingRef.current = false;
    },
  });

  useEffect(() => {
    const id = setInterval(() => {
      if (playingRef.current) onAdvance();
    }, TOUR_DELAY);
    return () => clearInterval(id);
  }, [onAdvance]);

  useEffect(() => {
    const m = markets[activeIndex];
    if (!m) return;
    const pos = coords[m.country];
    if (!pos) return;
    programmaticRef.current = true;
    map.flyTo(pos, 4, { duration: 1.3 });
    map.once("moveend", () => {
      programmaticRef.current = false;
    });
    const marker = markerRefs.current[m.country];
    const t = setTimeout(() => marker?.openPopup(), 700);
    return () => clearTimeout(t);
  }, [activeIndex, map, markerRefs]);

  return null;
}

export default function MarketsMap() {
  const [activeIndex, setActiveIndex] = useState(0);
  const markerRefs = useRef<Record<string, L.Marker | null>>({});
  const active = markets[activeIndex];

  return (
    <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_24px_60px_-30px_rgba(13,43,27,0.6)]">
      {/* header bar */}
      <div className="flex items-center justify-between gap-3 border-b border-gray-100 px-5 py-3.5">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="market-pulse-ring absolute inline-flex h-full w-full rounded-full bg-arco-green opacity-60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-arco-green" />
          </span>
          <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-arco-ink">
            Live Sourcing Map
          </p>
        </div>
        <p className="font-display text-xs font-bold uppercase tracking-wide text-arco-red">
          {active?.country}
        </p>
      </div>

      <div className="relative h-[380px] w-full">
        <MapContainer
          center={[18, 20]}
          zoom={2}
          scrollWheelZoom={false}
          zoomControl={false}
          className="h-full w-full"
          attributionControl={false}
        >
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
          />
          <ZoomControl position="bottomright" />
          {markets.map((m) => {
            const pos = coords[m.country];
            if (!pos) return null;
            const isActive = active?.country === m.country;
            return (
              <Marker
                key={m.country}
                position={pos}
                icon={pinIcon(accents[m.country] ?? "#206040", isActive)}
                ref={(ref) => {
                  markerRefs.current[m.country] = ref;
                }}
                eventHandlers={{
                  click: () => setActiveIndex(markets.findIndex((x) => x.country === m.country)),
                }}
              >
                <Popup>
                  <p className="font-display text-sm font-bold uppercase tracking-wide text-arco-ink">
                    {m.country}
                  </p>
                  <p className="mt-0.5 text-xs text-slate-500">{m.region}</p>
                  <p className="mt-1.5 text-xs font-semibold text-arco-red">{m.lines}</p>
                </Popup>
              </Marker>
            );
          })}
          <TourController
            activeIndex={activeIndex}
            onAdvance={() => setActiveIndex((i) => (i + 1) % markets.length)}
            markerRefs={markerRefs}
          />
        </MapContainer>
      </div>

      {/* legend — click to jump */}
      <div className="flex flex-wrap items-center gap-2 border-t border-gray-100 px-5 py-3.5">
        {markets.map((m, i) => (
          <button
            key={m.country}
            type="button"
            onClick={() => setActiveIndex(i)}
            aria-label={`Show ${m.country}`}
            aria-current={activeIndex === i}
            className={`flex h-8 cursor-pointer items-center gap-1.5 rounded-full px-3 text-xs font-semibold transition-colors ${
              activeIndex === i
                ? "text-white"
                : "border border-gray-200 text-slate-600 hover:border-arco-green hover:text-arco-green"
            }`}
            style={activeIndex === i ? { backgroundColor: accents[m.country] } : undefined}
          >
            <span
              className="h-2 w-2 shrink-0 rounded-full"
              style={{ backgroundColor: activeIndex === i ? "white" : accents[m.country] }}
            />
            {m.country}
          </button>
        ))}
      </div>
    </div>
  );
}
