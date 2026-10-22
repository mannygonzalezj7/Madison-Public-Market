import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { jobListings, jobsHero } from "@/content/jobs";

/**
 * Matches live WP /jobs/ — photo hero + terracotta overlay, stacked listings with logos.
 */
export function JobsView() {
  return (
    <>
      <section className="relative isolate min-h-[260px] overflow-hidden md:min-h-[320px]">
        <Image
          src={jobsHero.image.src}
          alt={jobsHero.image.alt}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-primary/70" aria-hidden="true" />
        <div className="relative mx-auto flex min-h-[260px] max-w-[1100px] flex-col justify-end px-6 py-12 md:min-h-[320px] md:px-16 md:py-16">
          <h1 className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,7vw,5rem)] leading-none text-text-inverse uppercase">
            {jobsHero.title}
          </h1>
          <p className="mt-3 max-w-xl font-[family-name:var(--font-body)] text-lg text-text-inverse md:text-xl">
            {jobsHero.subtitle}
          </p>
        </div>
      </section>

      <section className="bg-secondary px-6 py-12 md:px-16 md:py-16">
        <div className="mx-auto flex max-w-[900px] flex-col gap-8">
          {jobListings.map((job) => (
            <article
              key={job.title}
              className="border-l-[length:var(--mpm-accent-thickness)] border-primary bg-surface px-6 py-6"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                {job.logo ? (
                  <div className="relative mx-auto size-20 shrink-0 overflow-hidden rounded-full bg-secondary sm:mx-0">
                    <Image
                      src={job.logo}
                      alt=""
                      fill
                      className="object-contain p-1"
                      sizes="80px"
                    />
                  </div>
                ) : null}
                <div className="min-w-0 flex-1">
                  <h2 className="font-[family-name:var(--font-display)] text-2xl uppercase text-mpm-text md:text-3xl">
                    {job.title}
                  </h2>
                  <p className="mt-1 font-[family-name:var(--font-body)] font-medium text-primary">
                    {job.employer}
                  </p>
                  <p className="text-style-body mt-4 text-mpm-text">{job.body}</p>
                  <ul className="text-style-body mt-3 list-disc space-y-1 pl-5 text-mpm-text">
                    {job.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <ButtonLink href={job.cta.href}>{job.cta.label}</ButtonLink>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
