import Image from "next/image";
import { AccentBar } from "@/components/ui/AccentBar";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { comingSoon } from "@/content/coming-soon";

/**
 * Matches live WP /coming-soon/ screenshot —
 * white page, left tricolor AccentBar, list with seasons in parentheses, terracotta CTA, Eloura photo.
 */
export function ComingSoonView() {
  return (
    <section className="bg-secondary px-6 py-12 md:px-16 md:py-20">
      <div className="mx-auto grid max-w-[1100px] items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="flex gap-5 md:gap-8">
          <AccentBar orientation="vertical" className="min-h-[280px] self-stretch" />
          <div>
            <h1 className="font-[family-name:var(--font-display)] text-[clamp(1.75rem,4vw,3rem)] leading-none uppercase text-mpm-text">
              {comingSoon.title}
            </h1>
            <ul className="mt-8 space-y-3">
              {comingSoon.merchants.map((merchant) => (
                <li
                  key={merchant.name}
                  className="text-style-body font-medium text-mpm-text"
                >
                  {merchant.name}{" "}
                  <span className="font-normal">({merchant.season})</span>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <ButtonLink href={comingSoon.directoryCta.href}>
                {comingSoon.directoryCta.label}
              </ButtonLink>
            </div>
          </div>
        </div>
        <div className="relative mx-auto aspect-[3/4] w-full max-w-[420px] overflow-hidden">
          <Image
            src={comingSoon.image.src}
            alt={comingSoon.image.alt}
            fill
            className="object-cover"
            sizes="420px"
            priority
          />
        </div>
      </div>
    </section>
  );
}
