import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import {
  eventsHero,
  formatEventDateTime,
  rentEventSpace,
  sortEventsByDate,
  upcomingEvents,
} from "@/content/events";

export function EventsHero() {
  return (
    <section className="relative isolate min-h-[280px] overflow-hidden md:min-h-[368px]">
      <Image
        src={eventsHero.image.src}
        alt={eventsHero.image.alt}
        fill
        className="object-cover"
        sizes="100vw"
        priority
      />
      <div className="absolute inset-0 bg-mpm-text/40" aria-hidden="true" />
      <div className="relative mx-auto flex min-h-[280px] max-w-[1280px] flex-col justify-end px-6 py-12 md:min-h-[368px] md:px-16 md:py-16">
        <h1 className="font-[family-name:var(--font-display)] text-[clamp(3rem,8vw,5.5rem)] leading-none text-text-inverse uppercase">
          {eventsHero.title}
        </h1>
        <p className="mt-2 max-w-xl font-[family-name:var(--font-body)] text-lg font-medium text-text-inverse md:text-xl">
          {eventsHero.subtitle}
        </p>
      </div>
    </section>
  );
}

export function UpcomingEventsSection() {
  const events = sortEventsByDate(upcomingEvents.items);

  return (
    <section id="upcoming" className="bg-secondary px-6 py-12 md:px-16 md:py-16">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <article
              key={event.id}
              className="flex flex-col border-[7px] border-accent bg-secondary p-5"
            >
              <div className="relative mb-4 aspect-[341/233] w-full overflow-hidden bg-surface">
                <Image
                  src={event.image}
                  alt={event.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 360px"
                />
              </div>
              <h2 className="font-[family-name:var(--font-display)] text-2xl uppercase text-mpm-text md:text-3xl">
                {event.name}
              </h2>
              <p className="text-style-body mt-3 flex-1 text-mpm-text">
                {event.description}
              </p>
              <div className="mt-6 flex w-full flex-col gap-3">
                <span className="flex w-full items-center justify-center rounded-full border-[3px] border-accent bg-secondary px-5 py-2 text-center font-[family-name:var(--font-body)] text-base font-medium text-accent">
                  {formatEventDateTime(event)}
                </span>
                <ButtonLink
                  href={event.href}
                  className="w-full px-6 text-sm md:text-base"
                >
                  Click for more info!
                </ButtonLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function RentEventSpaceSection() {
  return (
    <section className="bg-secondary px-6 py-12 md:px-16 md:py-16">
      <div className="mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src={rentEventSpace.image.src}
            alt={rentEventSpace.image.alt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 560px"
          />
        </div>
        <div>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3.25rem)] leading-none uppercase text-mpm-text">
            {rentEventSpace.title}
          </h2>
          <p className="text-style-body mt-6 text-mpm-text">
            {rentEventSpace.body}{" "}
            <a
              href={`mailto:${rentEventSpace.email}`}
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              {rentEventSpace.email}
            </a>
          </p>
          <p className="text-style-body mt-6 font-medium text-mpm-text">
            {rentEventSpace.comingSoonTitle}
          </p>
          <ul className="text-style-body mt-3 list-disc space-y-2 pl-5 text-mpm-text">
            {rentEventSpace.comingSoon.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
