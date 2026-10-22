import Image from "next/image";
import { NewsletterSection } from "@/components/about/NewsletterSection";
import { AccentBar } from "@/components/ui/AccentBar";
import { ButtonLink } from "@/components/ui/ButtonLink";
import {
  artworkHero,
  artworkIntro,
  artworks,
  firstStreetGallery,
} from "@/content/artwork";

/**
 * Artwork page — sage hero, centered intro, 2-col image grid, cream gallery blurb.
 */
export function ArtworkView() {
  return (
    <>
      <section className="bg-accent px-6 py-16 md:px-16 md:py-20">
        <div className="mx-auto max-w-[1100px] text-text-inverse">
          <h1 className="text-style-secondary leading-none">
            {artworkHero.title}
          </h1>
          <p className="text-style-body mt-4 max-w-2xl text-text-inverse">
            {artworkHero.subtitle}
          </p>
        </div>
      </section>

      <section className="bg-secondary px-6 py-12 md:px-16 md:py-16">
        <div className="mx-auto max-w-[900px] text-center">
          <h2 className="text-style-primary text-mpm-text">
            {artworkIntro.title}
          </h2>
          <div className="mt-4 flex justify-center">
            <AccentBar orientation="horizontal" />
          </div>
          {artworkIntro.paragraphs.map((p) => (
            <p key={p.slice(0, 40)} className="text-style-body mt-6 text-mpm-text">
              {p}
            </p>
          ))}
        </div>
      </section>

      <section className="bg-secondary px-6 pb-12 md:px-16 md:pb-16">
        <div className="mx-auto grid max-w-[1100px] gap-6 sm:grid-cols-2 sm:gap-8">
          {artworks.map((work) => (
            <article
              key={work.title}
              tabIndex={0}
              className="group relative aspect-square w-full overflow-hidden bg-surface outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <Image
                src={work.image}
                alt={`${work.title} — ${work.artist}`}
                fill
                className="object-cover transition duration-300 group-hover:scale-[1.02] group-focus-within:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 540px"
              />
              {/* Hover / focus info panel — image-only at rest */}
              <div className="absolute inset-x-0 bottom-0 max-h-[90%] translate-y-3 overflow-y-auto bg-white/92 px-5 py-5 opacity-0 shadow-[0_-4px_24px_rgba(0,0,0,0.12)] transition duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
                <h3 className="font-[family-name:var(--font-display)] text-xl uppercase leading-none text-mpm-text md:text-2xl">
                  {work.title}
                </h3>
                <p className="mt-2 font-[family-name:var(--font-body)] text-sm font-bold uppercase tracking-wide text-mpm-text md:text-base">
                  {work.artist}
                </p>
                <p className="mt-3 font-[family-name:var(--font-body)] text-sm leading-relaxed text-mpm-text md:text-base">
                  {work.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-surface px-6 py-12 md:px-16 md:py-16">
        <div className="mx-auto max-w-[1100px]">
          <h2 className="text-style-primary text-mpm-text">
            {firstStreetGallery.title}
          </h2>
          <p className="mt-2 font-[family-name:var(--font-body)] font-medium text-primary">
            {firstStreetGallery.currentShow}
          </p>
          <div className="mt-8 flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-12">
            <div className="flex-1">
              {firstStreetGallery.paragraphs.map((p) => (
                <p
                  key={p.slice(0, 40)}
                  className="text-style-body mt-4 text-mpm-text first:mt-0"
                >
                  {p}
                </p>
              ))}
              <div className="mt-8">
                <ButtonLink href="/artwork/first-street-gallery">
                  View Gallery Works
                </ButtonLink>
              </div>
            </div>
            <aside className="w-full shrink-0 border-[7px] border-accent bg-secondary p-6 lg:max-w-[420px]">
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
        </div>
      </section>

      <NewsletterSection />
    </>
  );
}
