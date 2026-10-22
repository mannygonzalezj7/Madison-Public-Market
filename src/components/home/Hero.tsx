import Image from "next/image";
import { hero } from "@/content/home";

export function Hero() {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden tablet:min-h-[75vh] desktop:min-h-[85vh]">
      <Image
        src={hero.image.src}
        alt={hero.image.alt}
        fill
        priority
        className="object-cover object-[center_40%]"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-black/25"
        aria-hidden="true"
      />

      {/* SEO / a11y only — not visible */}
      <h1 className="sr-only">{hero.title}</h1>

      {/* Mobile / tablet */}
      <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-[1280px] items-end px-5 py-10 text-text-inverse tablet:min-h-[75vh] tablet:px-8 desktop:hidden">
        <p className="text-style-primary whitespace-pre-line pb-2">
          {hero.tagline}
        </p>
      </div>

      {/* Desktop: tagline bottom-right */}
      <div className="relative z-10 mx-auto hidden min-h-[85vh] max-w-[1280px] desktop:flex desktop:items-end desktop:justify-end desktop:px-12 desktop:pb-16">
        <p className="text-style-secondary whitespace-pre-line text-right text-text-inverse drop-shadow-md">
          {hero.tagline}
        </p>
      </div>
    </section>
  );
}
