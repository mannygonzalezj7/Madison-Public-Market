import Image from "next/image";
import { aboutHero } from "@/content/about";

export function AboutHero() {
  return (
    <section className="relative isolate min-h-[280px] overflow-hidden md:min-h-[381px]">
      <Image
        src={aboutHero.image.src}
        alt={aboutHero.image.alt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 bg-primary/75"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-col justify-end gap-5 px-8 pb-12 pt-24 md:px-16 md:pb-16 md:pt-40">
        <h1 className="font-[family-name:var(--font-display)] text-[clamp(3rem,8vw,5.95rem)] leading-[0.83] text-text-inverse uppercase">
          {aboutHero.title}
        </h1>
        <p className="max-w-xl font-[family-name:var(--font-body)] text-lg font-bold text-text-inverse md:text-2xl md:leading-tight">
          {aboutHero.subtitle}
        </p>
      </div>
    </section>
  );
}
