import Image from "next/image";
import Link from "next/link";
import { AccentBar } from "@/components/ui/AccentBar";
import {
  historyClosing,
  historyHero,
  journey,
  marketLocation,
} from "@/content/history";
import { NewsletterSection } from "@/components/about/NewsletterSection";

const accentBg = {
  primary: "bg-primary",
  yellow: "bg-yellow",
  accent: "bg-accent",
  gradient:
    "bg-[linear-gradient(106deg,#c24f2e_10%,#de8b27_41%,#50888d_80%,#597f71_99%)]",
} as const;

export function HistoryView() {
  return (
    <>
      <section className="bg-primary px-6 py-12 md:px-16 md:py-16">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-10 lg:flex-row lg:items-center lg:gap-14">
          <div className="flex-1 text-text-inverse">
            <Link
              href="/about"
              className="mb-6 inline-flex size-12 items-center justify-center rounded-full bg-accent text-text-inverse"
              aria-label="Back to About"
            >
              ←
            </Link>
            <h1 className="font-[family-name:var(--font-display)] text-[clamp(2.25rem,6vw,5rem)] leading-none uppercase">
              {historyHero.title}
            </h1>
            <p className="mt-4 max-w-xl font-[family-name:var(--font-body)] text-lg md:text-xl">
              {historyHero.subtitle}
            </p>
          </div>
          <div className="relative mx-auto aspect-[5/3] w-full max-w-[520px] border-[8px] border-accent lg:mx-0">
            <Image
              src={historyHero.image.src}
              alt={historyHero.image.alt}
              fill
              className="object-cover"
              sizes="520px"
              priority
            />
          </div>
        </div>
      </section>

      <section className="bg-secondary px-6 py-12 md:px-16 md:py-16">
        <div className="mx-auto max-w-[900px]">
          <h2 className="text-style-primary text-center text-mpm-text">
            {journey.title}
          </h2>
          <div className="relative mt-12">
            <div
              className="absolute left-4 top-0 hidden h-full w-[9px] bg-primary md:left-1/2 md:-ml-[4.5px] md:block"
              aria-hidden="true"
            />
            <ol className="flex flex-col gap-12">
              {journey.steps.map((step) => {
                const isCenter = step.align === "center";
                const isLeft = step.align === "left";
                return (
                  <li
                    key={step.title}
                    className={`relative grid gap-4 md:grid-cols-2 md:gap-16 ${
                      isCenter ? "md:grid-cols-1" : ""
                    }`}
                  >
                    <div
                      className={`hidden size-14 items-center justify-center rounded-full border-4 border-secondary bg-primary shadow md:absolute md:left-1/2 md:top-2 md:flex md:-ml-7 ${accentBg[step.accent]}`}
                      aria-hidden="true"
                    />
                    <div
                      className={`${
                        isCenter
                          ? "mx-auto max-w-lg text-center"
                          : isLeft
                            ? "md:col-start-1 md:text-right"
                            : "md:col-start-2"
                      }`}
                    >
                      <span
                        className={`inline-block px-4 py-2 font-[family-name:var(--font-display)] text-xl ${
                          step.accent === "yellow"
                            ? "bg-yellow text-mpm-text"
                            : `${accentBg[step.accent]} text-text-inverse`
                        }`}
                      >
                        {step.label}
                      </span>
                      <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl uppercase text-mpm-text md:text-3xl">
                        {step.title}
                      </h3>
                      <p className="text-style-body mt-2 text-mpm-text">
                        {step.body}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-surface px-6 py-12 md:px-16 md:py-16">
        <div className="mx-auto max-w-[1100px]">
          <h2 className="text-style-primary text-center text-mpm-text">
            {marketLocation.title}
          </h2>
          <div className="mt-4 flex justify-center">
            <AccentBar orientation="horizontal" className="w-[254px]" />
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-style-body text-mpm-text">{marketLocation.intro}</p>
              <p className="text-style-body mt-4 font-medium text-mpm-text">
                {marketLocation.reasonsTitle}
              </p>
              <div className="mt-4 flex gap-3 rounded-[11px] bg-accent/20">
                <div className="w-[11px] shrink-0 bg-accent" aria-hidden="true" />
                <ul className="text-style-body list-disc space-y-2 py-4 pr-4 pl-5 text-mpm-text">
                  {marketLocation.reasons.map((reason) => (
                    <li key={reason}>{reason}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden border border-stroke">
              <Image
                src={marketLocation.map.src}
                alt={marketLocation.map.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 540px"
              />
            </div>
          </div>

          <p className="text-style-body mx-auto mt-12 max-w-[800px] text-mpm-text">
            {marketLocation.interior}
          </p>
        </div>
      </section>

      <section className="bg-secondary px-6 py-12 md:px-16 md:py-16">
        <div className="mx-auto max-w-[720px] text-center">
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,4rem)] leading-none uppercase text-mpm-text">
            <span>{historyClosing.titleBefore}</span>
            <span className="text-primary">{historyClosing.titleAfter}</span>
          </h2>
          <p className="text-style-body mt-6 text-mpm-text">{historyClosing.body}</p>
          <div className="mt-8 flex justify-center">
            <AccentBar orientation="horizontal" className="w-[254px]" />
          </div>
        </div>
      </section>

      <NewsletterSection />
    </>
  );
}
