import type { Metadata } from "next";
import Image from "next/image";
import { SiteFooter } from "@/components/home/SiteFooter";
import { SiteHeader } from "@/components/home/SiteHeader";
import { ButtonLink } from "@/components/ui/ButtonLink";
import {
  vendingFarmersMarket,
  vendingFarmersMarketPageMeta,
} from "@/content/vending-farmers-market";

export const metadata: Metadata = {
  title: vendingFarmersMarketPageMeta.title,
  description: vendingFarmersMarketPageMeta.description,
};

/**
 * Desktop layout: photo hero → photo left + copy right → two sage CTA bands.
 */
export default function VendingFarmersMarketPage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="flex-1">
        <section className="relative isolate min-h-[280px] overflow-hidden md:min-h-[360px]">
          <Image
            src={vendingFarmersMarket.image.src}
            alt={vendingFarmersMarket.image.alt}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-primary/70" aria-hidden="true" />
          <div className="relative mx-auto flex min-h-[280px] max-w-[1100px] flex-col justify-end gap-3 px-6 py-12 md:min-h-[360px] md:px-16 md:py-16">
            <h1 className="font-[family-name:var(--font-display)] text-[clamp(2rem,6vw,4.5rem)] leading-none text-text-inverse uppercase">
              {vendingFarmersMarket.title}
            </h1>
            <p className="text-style-body max-w-2xl text-text-inverse">
              {vendingFarmersMarket.subtitle}
            </p>
          </div>
        </section>

        <section className="bg-secondary px-6 py-12 md:px-16 md:py-16">
          <div className="mx-auto grid max-w-[1200px] items-start gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={vendingFarmersMarket.image.src}
                alt={vendingFarmersMarket.image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 560px"
              />
            </div>
            <div>
              {vendingFarmersMarket.paragraphs.map((p) => (
                <p
                  key={p.slice(0, 48)}
                  className="text-style-body mt-0 mb-4 text-mpm-text last:mb-0"
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y-[length:var(--mpm-accent-thickness)] border-primary bg-accent px-6 py-12 md:px-16 md:py-14">
          <div className="mx-auto flex max-w-[800px] flex-col items-center gap-6 text-center text-text-inverse">
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(1.5rem,3.5vw,2.5rem)] uppercase leading-tight">
              {vendingFarmersMarket.guidelines.title}
            </h2>
            <ButtonLink
              href={vendingFarmersMarket.guidelines.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {vendingFarmersMarket.guidelines.label}
            </ButtonLink>
          </div>
        </section>

        <section className="border-b-[length:var(--mpm-accent-thickness)] border-primary bg-accent px-6 py-12 md:px-16 md:py-14">
          <div className="mx-auto flex max-w-[800px] flex-col items-center gap-6 text-center text-text-inverse">
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(1.5rem,3.5vw,2.5rem)] uppercase leading-tight">
              {vendingFarmersMarket.apply.title}
            </h2>
            <ButtonLink
              href={vendingFarmersMarket.apply.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {vendingFarmersMarket.apply.label}
            </ButtonLink>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
