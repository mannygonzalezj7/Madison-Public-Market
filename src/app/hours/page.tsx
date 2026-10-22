import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/home/SiteFooter";
import { SiteHeader } from "@/components/home/SiteHeader";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { hoursPage, hoursPageMeta } from "@/content/hours";

export const metadata: Metadata = {
  title: hoursPageMeta.title,
  description: hoursPageMeta.description,
};

/**
 * Matches live WP /hours/ — no hero, circular logos + hours rows, coming-soon CTA.
 */
export default function HoursPage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="flex-1">
        {hoursPage.sections.map((section) => (
          <section
            key={section.title}
            className="bg-secondary px-6 py-12 md:px-16 md:py-14"
          >
            <div className="mx-auto max-w-[900px]">
              <h2 className="font-[family-name:var(--font-display)] text-[clamp(1.75rem,4vw,2.75rem)] uppercase text-primary">
                {section.title}
              </h2>
              <div className="mt-10 flex flex-col gap-8">
                {section.merchants.map((merchant) => (
                  <article
                    key={merchant.name}
                    className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6"
                  >
                    <div className="relative mx-auto size-24 shrink-0 overflow-hidden rounded-full bg-surface sm:mx-0">
                      <Image
                        src={merchant.logo}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="96px"
                      />
                    </div>
                    <div className="min-w-0 flex-1 text-center sm:text-left">
                      <h3 className="font-[family-name:var(--font-display)] text-xl uppercase text-mpm-text md:text-2xl">
                        {merchant.name}
                      </h3>
                      <ul className="text-style-body mt-2 space-y-1 text-mpm-text">
                        {merchant.hours.map((row) => (
                          <li key={row}>{row}</li>
                        ))}
                      </ul>
                      <Link
                        href={merchant.href}
                        className="mt-2 inline-block font-[family-name:var(--font-body)] text-sm font-medium text-primary underline-offset-4 hover:underline"
                      >
                        Learn More →
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ))}

        <section className="bg-surface px-6 py-12 md:px-16 md:py-16">
          <div className="mx-auto max-w-[700px] text-center">
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(1.75rem,4vw,2.75rem)] uppercase text-mpm-text">
              {hoursPage.growth.title}
            </h2>
            <p className="text-style-body mt-4 text-mpm-text">
              {hoursPage.growth.body}
            </p>
            <div className="mt-8 flex justify-center">
              <ButtonLink href={hoursPage.growth.cta.href}>
                {hoursPage.growth.cta.label}
              </ButtonLink>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
