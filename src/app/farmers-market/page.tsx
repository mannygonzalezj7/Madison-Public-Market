import type { Metadata } from "next";
import Image from "next/image";
import { SiteFooter } from "@/components/home/SiteFooter";
import { SiteHeader } from "@/components/home/SiteHeader";
import { ButtonLink } from "@/components/ui/ButtonLink";
import {
  farmersMarket,
  farmersMarketPageMeta,
} from "@/content/farmers-market";

export const metadata: Metadata = {
  title: farmersMarketPageMeta.title,
  description: farmersMarketPageMeta.description,
};

/**
 * Desktop layout: photo hero → two-col (photo | schedule/content) → sage CTA band.
 */
export default function FarmersMarketPage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="flex-1">
        <section className="relative isolate min-h-[280px] overflow-hidden md:min-h-[360px]">
          <Image
            src={farmersMarket.image.src}
            alt={farmersMarket.image.alt}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-primary/70" aria-hidden="true" />
          <div className="relative mx-auto flex min-h-[280px] max-w-[1100px] flex-col justify-end px-6 py-12 md:min-h-[360px] md:px-16 md:py-16">
            <h1 className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,7vw,5rem)] leading-none text-text-inverse uppercase">
              {farmersMarket.title}
            </h1>
          </div>
        </section>

        <section className="bg-secondary px-6 py-12 md:px-16 md:py-16">
          <div className="mx-auto grid max-w-[1200px] items-start gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={farmersMarket.contentImage.src}
                alt={farmersMarket.contentImage.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 560px"
              />
            </div>

            <div>
              <p className="font-[family-name:var(--font-display)] text-xl uppercase text-mpm-text md:text-2xl">
                {farmersMarket.schedule}
              </p>
              <p className="text-style-body mt-2 font-medium text-primary">
                {farmersMarket.location}
              </p>
              <p className="text-style-body mt-5 text-mpm-text">
                {farmersMarket.intro}
              </p>
              <ul className="text-style-body mt-5 list-disc space-y-2 pl-5 text-mpm-text">
                {farmersMarket.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-6 font-[family-name:var(--font-display)] text-lg uppercase text-mpm-text">
                {farmersMarket.admission}
              </p>

              <h2 className="mt-10 font-[family-name:var(--font-display)] text-xl uppercase text-mpm-text md:text-2xl">
                {farmersMarket.vendorSeasonLabel}
              </h2>
              <ul className="text-style-body mt-4 columns-1 gap-x-8 sm:columns-2">
                {farmersMarket.vendors.map((vendor) => (
                  <li key={vendor} className="mb-1.5 break-inside-avoid">
                    {vendor}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="border-y-[length:var(--mpm-accent-thickness)] border-primary bg-accent px-6 py-12 md:px-16 md:py-16">
          <div className="mx-auto max-w-[700px] text-center text-text-inverse">
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(1.75rem,4vw,2.75rem)] uppercase leading-tight">
              {farmersMarket.boothCta.title}
            </h2>
            <div className="mt-8 flex justify-center">
              <ButtonLink href={farmersMarket.boothCta.href}>
                {farmersMarket.boothCta.label}
              </ButtonLink>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
