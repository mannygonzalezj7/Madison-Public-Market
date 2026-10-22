import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import {
  donateCause,
  donateHero,
  givebutter,
} from "@/content/donate";

export function DonateHero() {
  return (
    <section className="relative isolate min-h-[280px] overflow-hidden md:min-h-[420px]">
      <Image
        src={donateHero.image.src}
        alt={donateHero.image.alt}
        fill
        className="object-cover"
        sizes="100vw"
        priority
      />
      <div className="absolute inset-0 bg-mpm-text/35" aria-hidden="true" />
      <div className="relative mx-auto flex min-h-[280px] max-w-[1280px] flex-col justify-end px-6 py-12 md:min-h-[420px] md:px-16 md:py-16">
        <h1 className="font-[family-name:var(--font-display)] text-[clamp(3rem,8vw,5.5rem)] leading-none text-text-inverse uppercase">
          {donateHero.title}
        </h1>
        <p className="mt-3 max-w-xl font-[family-name:var(--font-body)] text-lg font-medium text-text-inverse md:text-xl">
          {donateHero.overlay}
        </p>
      </div>
    </section>
  );
}

export function DonateCauseSection() {
  return (
    <section className="bg-secondary px-6 py-12 md:px-16 md:py-16">
      <div className="mx-auto grid max-w-[1200px] items-start gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="flex gap-4 md:gap-5">
          <span
            className="w-[6px] shrink-0 self-stretch bg-primary md:w-[8px]"
            aria-hidden="true"
          />
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(1.75rem,4vw,2.75rem)] leading-none uppercase text-mpm-text">
              {donateCause.title}
            </h2>
            {donateCause.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 32)}
                className="mt-5 font-[family-name:var(--font-body)] text-base leading-relaxed text-mpm-text md:text-lg"
              >
                {paragraph}
              </p>
            ))}
            <ButtonLink
              href={givebutter.campaignUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8"
            >
              {givebutter.label}
            </ButtonLink>
          </div>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden border-[8px] border-accent bg-secondary lg:aspect-[5/4]">
          <Image
            src={donateCause.image.src}
            alt={donateCause.image.alt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 560px"
          />
        </div>
      </div>
    </section>
  );
}

/** Brand close — logo, name, tagline, Donate CTA */
export function GivebutterSection() {
  return (
    <section className="bg-secondary px-6 py-14 md:px-16 md:py-20">
      <div className="mx-auto flex max-w-[720px] flex-col items-center text-center">
        <div className="relative size-20 md:size-24">
          <Image
            src={givebutter.logo.src}
            alt={givebutter.logo.alt}
            fill
            className="object-contain"
            sizes="96px"
          />
        </div>
        <h2 className="mt-6 font-[family-name:var(--font-display)] text-[clamp(1.75rem,4vw,2.75rem)] uppercase leading-none text-mpm-text">
          {givebutter.brandName}
        </h2>
        <p className="mt-3 font-[family-name:var(--font-body)] text-base text-mpm-text md:text-lg">
          {givebutter.tagline}
        </p>
        <ButtonLink
          href={givebutter.campaignUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8"
        >
          {givebutter.label}
        </ButtonLink>
      </div>
    </section>
  );
}
