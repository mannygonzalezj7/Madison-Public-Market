import Image from "next/image";
import { AccentBar } from "@/components/ui/AccentBar";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { downloadApp } from "@/content/download";

/**
 * Matches live WP /download/ — white page, left tricolor bar, copy + app art.
 */
export function DownloadAppView() {
  return (
    <section className="bg-secondary px-6 py-12 md:px-16 md:py-20">
      <div className="mx-auto grid max-w-[1100px] items-center gap-10 lg:grid-cols-2">
        <div className="flex gap-5 md:gap-8">
          <AccentBar orientation="vertical" className="min-h-[280px] w-[10px]" />
          <div>
            <h1 className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,6vw,4.5rem)] leading-none uppercase text-mpm-text">
              {downloadApp.title}
            </h1>
            <ol className="mt-8 space-y-3">
              {downloadApp.steps.map((step, index) => (
                <li
                  key={step}
                  className="font-[family-name:var(--font-body)] text-lg text-mpm-text md:text-xl"
                >
                  {index + 1}. {step}
                </li>
              ))}
            </ol>
            <p className="mt-4 font-[family-name:var(--font-body)] text-lg text-mpm-text md:text-xl">
              · {downloadApp.tagline}
            </p>
            <div className="mt-10">
              <ButtonLink
                href={downloadApp.cta.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {downloadApp.cta.label}
              </ButtonLink>
            </div>
          </div>
        </div>
        <div className="relative mx-auto aspect-[3/4] w-full max-w-[360px]">
          <Image
            src={downloadApp.image.src}
            alt={downloadApp.image.alt}
            fill
            className="object-contain"
            sizes="360px"
            priority
          />
        </div>
      </div>
    </section>
  );
}
