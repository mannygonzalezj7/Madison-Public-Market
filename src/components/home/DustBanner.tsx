import Image from "next/image";
import { dustBanner } from "@/content/home";

export function DustBanner() {
  return (
    <section
      className="relative isolate overflow-hidden px-6 py-12 text-center text-text-inverse md:px-16 md:py-16"
      aria-labelledby="dust-banner-title"
    >
      <Image
        src={dustBanner.image.src}
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 bg-accent/80"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto max-w-[900px]">
        <h2
          id="dust-banner-title"
          className="font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3.5rem)] leading-none uppercase"
        >
          {dustBanner.title}
        </h2>
        <p className="mt-4 font-[family-name:var(--font-body)] text-lg font-medium md:text-xl">
          {dustBanner.body}
        </p>
      </div>
    </section>
  );
}
