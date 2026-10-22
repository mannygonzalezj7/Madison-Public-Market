import type { Metadata } from "next";
import Image from "next/image";
import { NewsletterSection } from "@/components/about/NewsletterSection";
import { SiteFooter } from "@/components/home/SiteFooter";
import { SiteHeader } from "@/components/home/SiteHeader";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { firstStreetGallery } from "@/content/artwork";

export const metadata: Metadata = {
  title: "First Street Art Gallery | Madison Public Market",
  description: firstStreetGallery.paragraphs[0],
};

const purchaseHref =
  "mailto:info@madisonpublicmarket.org?subject=Interest%20in%20purchasing%20artwork";

export default function FirstStreetGalleryPage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="flex-1">
        <section className="relative isolate min-h-[280px] overflow-hidden md:min-h-[340px]">
          <Image
            src="/images/artwork/gallery-hero.jpg"
            alt="First Street Art Gallery interior"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-accent/65" aria-hidden="true" />
          <div className="relative mx-auto flex min-h-[280px] max-w-[1100px] flex-col items-center justify-end px-6 py-12 text-center md:min-h-[340px] md:px-16 md:py-16">
            <h1 className="text-style-secondary text-text-inverse">
              {firstStreetGallery.title}
            </h1>
          </div>
        </section>

        <section className="bg-secondary px-6 py-12 md:px-16 md:py-16">
          <div className="mx-auto flex max-w-[1100px] flex-col gap-10 lg:flex-row lg:items-start lg:gap-12">
            <div className="flex-1">
              <h2 className="text-style-primary text-mpm-text">
                {firstStreetGallery.subtitle}
              </h2>
              {firstStreetGallery.paragraphs.map((p) => (
                <p
                  key={p.slice(0, 40)}
                  className="text-style-body mt-4 text-mpm-text"
                >
                  {p}
                </p>
              ))}
            </div>
            <aside className="w-full shrink-0 border-[7px] border-accent bg-surface p-6 lg:max-w-[420px]">
              <p className="font-[family-name:var(--font-display)] text-lg uppercase text-mpm-text">
                {firstStreetGallery.themesTitle}
              </p>
              <ul className="text-style-body mt-4 list-disc space-y-2 pl-5 text-mpm-text">
                {firstStreetGallery.themes.map((theme) => (
                  <li key={theme}>{theme}</li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <section className="bg-surface px-6 py-12 md:px-16 md:py-16">
          <div className="mx-auto max-w-[1100px]">
            <h2 className="text-style-primary text-mpm-text">
              {firstStreetGallery.currentShow}
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {firstStreetGallery.works.map((work) => (
                <article
                  key={`${work.artist}-${work.title}`}
                  className="flex flex-col border-[7px] border-accent bg-secondary"
                >
                  <div className="relative aspect-square w-full bg-surface">
                    <Image
                      src={work.image}
                      alt={`${work.title} by ${work.artist}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 50vw, 360px"
                    />
                  </div>
                  <div className="flex flex-1 flex-col px-4 py-4">
                    <h3 className="font-[family-name:var(--font-display)] text-lg uppercase text-mpm-text">
                      {work.title}
                    </h3>
                    <p className="mt-1 font-[family-name:var(--font-body)] font-medium text-primary">
                      {work.artist}
                    </p>
                    <p className="text-style-body mt-1 text-mpm-text">
                      {work.meta}
                    </p>
                    <ButtonLink
                      href={`${purchaseHref}&body=${encodeURIComponent(`I'm interested in purchasing "${work.title}" by ${work.artist} (${work.meta}).`)}`}
                      className="mt-4 w-full text-sm md:text-base"
                    >
                      Click to Purchase
                    </ButtonLink>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <ButtonLink href="/artwork">All Market Artwork</ButtonLink>
            </div>
          </div>
        </section>

        <NewsletterSection />
      </main>
      <SiteFooter />
    </>
  );
}
