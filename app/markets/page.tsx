import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";
import Markets from "../components/home/Markets";
import CtaBand from "../components/home/CtaBand";

export const metadata: Metadata = {
  title: "Markets",
  description:
    "The origin markets ARCO Trading & Marketing sources from — Europe, GCC & Levant, Americas, Asia & Oceania.",
};

export default function MarketsPage() {
  return (
    <div>
      <PageHeader eyebrow="Where It Comes From" title="Our Markets" photo="containerPort" tone="red">
        Direct distribution agreements across four continents bring 212+ SKUs
        from 25+ countries into Qatar.
      </PageHeader>
      <Markets />
      <CtaBand />
    </div>
  );
}
