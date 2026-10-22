import type { Metadata } from "next";
import Image from "next/image";
import { SiteFooter } from "@/components/home/SiteFooter";
import { SiteHeader } from "@/components/home/SiteHeader";
import { movieNight, movieNightPageMeta } from "@/content/movienight";

export const metadata: Metadata = {
  title: movieNightPageMeta.title,
  description: movieNightPageMeta.description,
};

/**
 * Desktop layout: theater seats hero → two-col (logo | intro + upcoming movies).
 */
export default function MovieNightPage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="flex-1">
        <section className="relative isolate min-h-[280px] overflow-hidden md:min-h-[360px]">
          <Image
            src="/images/events/auditorium.webp"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-primary/75" aria-hidden="true" />
          <div className="relative mx-auto flex min-h-[280px] max-w-[1100px] flex-col justify-end gap-2 px-6 py-12 md:min-h-[360px] md:px-16 md:py-16">
            <h1 className="font-[family-name:var(--font-display)] text-[clamp(2rem,6vw,4.5rem)] leading-none text-text-inverse uppercase">
              {movieNight.title}
            </h1>
            <p className="font-[family-name:var(--font-display)] text-[clamp(1.25rem,3vw,2rem)] uppercase leading-tight text-text-inverse">
              {movieNight.subtitle}
            </p>
          </div>
        </section>

        <section className="bg-secondary px-6 py-12 md:px-16 md:py-16">
          <div className="mx-auto grid max-w-[1200px] items-start gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="relative mx-auto aspect-square w-full max-w-[420px] lg:mx-0">
              <Image
                src={movieNight.image.src}
                alt={movieNight.image.alt}
                fill
                className="object-contain"
                sizes="420px"
              />
            </div>

            <div>
              {movieNight.paragraphs.map((p) => (
                <p
                  key={p.slice(0, 40)}
                  className="text-style-body mt-0 mb-4 text-mpm-text last:mb-0"
                >
                  {p}
                </p>
              ))}

              <h2 className="mt-10 font-[family-name:var(--font-display)] text-[clamp(1.5rem,3vw,2.25rem)] uppercase text-mpm-text">
                {movieNight.upcomingTitle}
              </h2>
              <ul className="mt-6 space-y-4">
                {movieNight.showtimes.map((show) => (
                  <li
                    key={`${show.movie}-${show.date}`}
                    className="border-l-[length:var(--mpm-accent-thickness)] border-primary bg-surface px-5 py-4"
                  >
                    <p className="text-style-body text-mpm-text">
                      <span className="font-medium">Movie:</span> {show.movie}
                    </p>
                    <p className="text-style-body text-mpm-text">
                      <span className="font-medium">Date:</span> {show.date}
                    </p>
                    <p className="text-style-body text-mpm-text">
                      <span className="font-medium">Time:</span> {show.time}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
