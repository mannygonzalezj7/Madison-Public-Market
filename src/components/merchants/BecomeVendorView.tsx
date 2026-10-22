import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import {
  becomeVendorBands,
  becomeVendorHero,
  becomeVendorIntro,
  waysToSell,
} from "@/content/become-a-vendor";

/**
 * Matches live WP /our-merchants/interest/ —
 * photo hero, landscape image + grow copy + grey Ways to Sell callout,
 * full-width sage CTA bands with centered title + orange button.
 */
export function BecomeVendorView() {
  return (
    <>
      <section className="relative isolate min-h-[280px] overflow-hidden md:min-h-[360px]">
        <Image
          src={becomeVendorHero.image.src}
          alt={becomeVendorHero.image.alt}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-mpm-text/45" aria-hidden="true" />
        <div className="relative mx-auto flex min-h-[280px] max-w-[1280px] flex-col justify-end px-6 py-12 md:min-h-[360px] md:px-16 md:py-16">
          <h1 className="font-[family-name:var(--font-display)] text-[clamp(2.75rem,7vw,5.5rem)] leading-none text-text-inverse uppercase">
            {becomeVendorHero.title}
          </h1>
          <p className="mt-3 max-w-2xl font-[family-name:var(--font-body)] text-lg text-text-inverse md:text-xl">
            {becomeVendorHero.subtitle}
          </p>
        </div>
      </section>

      <section className="bg-secondary px-6 py-12 md:px-16 md:py-16">
        <div className="mx-auto grid max-w-[1200px] items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="relative aspect-[4/3] w-full overflow-hidden border-[8px] border-accent">
            <Image
              src={becomeVendorIntro.image.src}
              alt={becomeVendorIntro.image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 560px"
            />
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(1.75rem,4vw,2.75rem)] leading-none uppercase text-mpm-text">
              {becomeVendorIntro.title}
            </h2>
            {becomeVendorIntro.paragraphs.map((p) => (
              <p key={p.slice(0, 48)} className="text-style-body mt-5 text-mpm-text">
                {p}
              </p>
            ))}

            <aside className="mt-8 rounded-xl bg-[#e5e5e5] px-6 py-6 md:px-8 md:py-8">
              <h3 className="font-[family-name:var(--font-body)] text-lg font-bold text-mpm-text md:text-xl">
                {waysToSell.title}
              </h3>
              <ul className="mt-4 list-disc space-y-4 pl-5">
                {waysToSell.items.map((item) => (
                  <li key={item.title} className="text-style-body text-mpm-text">
                    <span className="font-bold">{item.title}:</span> {item.body}
                  </li>
                ))}
              </ul>
            </aside>

            <p className="text-style-body mt-6 text-mpm-text">
              {becomeVendorIntro.closing}
            </p>
          </div>
        </div>
      </section>

      <div>
        {becomeVendorBands.map((band, index) => {
          const external = "external" in band.cta && band.cta.external;
          return (
            <section
              key={band.title}
              className={`bg-accent px-6 py-12 md:px-16 md:py-14 ${
                index === 0 ? "border-t-[6px] border-yellow" : ""
              } border-b-[6px] border-yellow`}
            >
              <div className="mx-auto flex max-w-[900px] flex-col items-center gap-6 text-center">
                <h2 className="font-[family-name:var(--font-display)] text-[clamp(1.5rem,3.5vw,2.5rem)] leading-none text-text-inverse uppercase">
                  {band.title}
                </h2>
                <ButtonLink
                  href={band.cta.href}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {band.cta.label}
                </ButtonLink>
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}
