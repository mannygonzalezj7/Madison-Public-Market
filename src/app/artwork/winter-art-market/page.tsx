import type { Metadata } from "next";
import Image from "next/image";
import { SiteFooter } from "@/components/home/SiteFooter";
import { SiteHeader } from "@/components/home/SiteHeader";
import { ButtonLink } from "@/components/ui/ButtonLink";
import {
  winterArtMarket,
  winterArtMarketPageMeta,
} from "@/content/winter-art-market";

export const metadata: Metadata = {
  title: winterArtMarketPageMeta.title,
  description: winterArtMarketPageMeta.description,
};

export default function WinterArtMarketPage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="flex-1">
        <section className="relative isolate min-h-[280px] overflow-hidden md:min-h-[400px]">
          <Image
            src={winterArtMarket.image.src}
            alt={winterArtMarket.image.alt}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-primary/70" aria-hidden="true" />
          <div className="relative mx-auto flex min-h-[280px] max-w-[1100px] flex-col justify-end px-6 py-12 md:min-h-[400px] md:px-16 md:py-16">
            <h1 className="text-style-secondary text-text-inverse">
              {winterArtMarket.title}
            </h1>
          </div>
        </section>

        <section className="bg-secondary px-6 py-12 md:px-16 md:py-16">
          <div className="mx-auto flex max-w-[1100px] flex-col items-start gap-10 lg:flex-row lg:gap-14">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-[480px] shrink-0 border-[8px] border-accent lg:mx-0">
              <Image
                src={winterArtMarket.image.src}
                alt={winterArtMarket.image.alt}
                fill
                className="object-cover"
                sizes="480px"
              />
            </div>
            <div className="min-w-0 flex-1">
              <h2 className="text-style-primary text-mpm-text">
                {winterArtMarket.headline}
              </h2>
              <p className="text-style-body mt-6 text-mpm-text">
                {winterArtMarket.body}
              </p>
              <dl className="mt-8 space-y-3 border-[7px] border-accent bg-surface px-6 py-5">
                {winterArtMarket.details.map((item) => (
                  <div key={item.label}>
                    <dt className="font-[family-name:var(--font-body)] font-bold text-mpm-text">
                      {item.label}
                    </dt>
                    <dd className="text-style-body text-mpm-text">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section className="border-y-[length:var(--mpm-accent-thickness)] border-primary bg-accent px-6 py-12 md:px-16 md:py-16">
          <div className="mx-auto flex max-w-[900px] flex-col items-center gap-6 text-center">
            <h2 className="text-style-primary text-text-inverse">
              {winterArtMarket.ctaBand.title}
            </h2>
            <ButtonLink
              href={winterArtMarket.cta.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {winterArtMarket.cta.label}
            </ButtonLink>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
