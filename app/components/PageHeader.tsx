import Image from "next/image";
import type { ReactNode } from "react";
import { photos } from "../data/photos";

export default function PageHeader({
  eyebrow,
  title,
  children,
  photo = "warehouse",
  tone = "green",
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
  photo?: keyof typeof photos;
  tone?: "green" | "red";
}) {
  const bg = tone === "red" ? "bg-arco-red" : "bg-arco-green";
  const wash = tone === "red" ? "bg-arco-red/75" : "bg-arco-green/75";
  return (
    <header className={`relative overflow-hidden ${bg} pb-14 pt-32 text-white`}>
      <Image
        src={photos[photo]}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-25"
      />
      <div className={`absolute inset-0 ${wash}`} />
      <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-arco-yellow/15" aria-hidden="true" />
      <div className="absolute -bottom-20 left-1/4 h-64 w-64 rounded-full bg-black/15" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4">
        <p className="text-sm font-bold uppercase tracking-wider text-arco-yellow">
          {eyebrow}
        </p>
        <h1 className="mt-2 text-4xl font-extrabold md:text-5xl">{title}</h1>
        <p className="mt-3 max-w-2xl text-white/85">{children}</p>
      </div>
    </header>
  );
}
