import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";
import ProcessStoryline from "../components/process/ProcessStoryline";
import Services from "../components/home/Services";
import CtaBand from "../components/home/CtaBand";

export const metadata: Metadata = {
  title: "Process",
  description:
    "How ARCO Trading & Marketing sources, imports, warehouses and delivers — from origin to shelf in Qatar.",
};

export default function ProcessPage() {
  return (
    <div>
      <PageHeader eyebrow="How We Work" title="Sourced to Delivered" photo="deliveryTruck">
        Import, warehousing and last-mile logistics handled end to end, so
        retailers deal with one supplier, not five.
      </PageHeader>
      <ProcessStoryline />
      <Services />
      <CtaBand />
    </div>
  );
}
