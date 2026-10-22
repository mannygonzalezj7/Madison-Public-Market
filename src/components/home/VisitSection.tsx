import type { ReactNode } from "react";
import Image from "next/image";
import { visit } from "@/content/home";
import { AccentBar } from "@/components/ui/AccentBar";

function VisitIcon({
  src,
  children,
}: {
  src?: string;
  children?: ReactNode;
}) {
  return (
    <span
      className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center text-mpm-text [&_svg]:size-5"
      aria-hidden="true"
    >
      {src ? (
        <Image src={src} alt="" width={22} height={22} className="object-contain" />
      ) : (
        children
      )}
    </span>
  );
}

function LocationCard() {
  return (
    <div className="rounded-sm bg-[#f3d6c8] p-5 tablet:p-6">
      <div className="flex items-start gap-3">
        <VisitIcon src="/icons/icon-pin.svg" />
        <div>
          <p className="text-style-accent font-black">{visit.location.label}</p>
          <p className="text-style-body mt-1 whitespace-pre-line">
            {visit.location.address}
          </p>
        </div>
      </div>
    </div>
  );
}

function HoursCard() {
  return (
    <div className="rounded-sm bg-[#f6e7d2] p-5 tablet:p-6">
      <div className="flex items-start gap-3">
        <VisitIcon src="/icons/icon-clock.svg" />
        <div className="w-full">
          <p className="text-style-accent font-black uppercase">
            {visit.hours.label}
          </p>
          {visit.hours.closedNote ? (
            <p className="mt-2 font-[family-name:var(--font-display)] text-base uppercase leading-tight text-mpm-text md:text-lg">
              {visit.hours.closedNote}
            </p>
          ) : null}
          <ul className="text-style-body mt-3 space-y-2">
            {visit.hours.rows.map((row) => (
              <li key={row.day}>
                <div className="grid grid-cols-[4.5rem_1fr] gap-2">
                  <span className="font-medium">{row.day}:</span>
                  <span>{row.time}</span>
                </div>
                {row.note ? (
                  <p className="mt-0.5 pl-[4.5rem] text-sm italic text-neutral-brown">
                    {row.note}
                  </p>
                ) : null}
              </li>
            ))}
          </ul>
          <a
            href="/hours"
            className="mt-4 inline-block font-[family-name:var(--font-body)] text-sm font-medium text-primary underline-offset-4 hover:underline"
          >
            Individual merchant hours →
          </a>
        </div>
      </div>
    </div>
  );
}

function GettingThereCard() {
  return (
    <div className="rounded-sm bg-[#e4ece7] p-5 tablet:p-6">
      <div className="flex items-start gap-3">
        <VisitIcon src="/icons/icon-car.svg" />
        <div>
          <p className="text-style-accent font-black">
            {visit.gettingThere.title}
          </p>
          <div className="mt-3 space-y-3">
            {visit.gettingThere.modes.map((mode) => (
              <div key={mode.label}>
                <p className="text-style-accent font-bold">{mode.label}</p>
                <ul className="text-style-body mt-1 space-y-0.5">
                  {mode.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {visit.gettingThere.petsNote ? (
            <p className="text-style-body mt-4 font-bold uppercase">
              {visit.gettingThere.petsNote}
            </p>
          ) : null}
          {visit.gettingThere.parkingNote ? (
            <p className="text-style-body mt-3 text-sm text-neutral-brown">
              {visit.gettingThere.parkingNote}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function MapPanel() {
  return (
    <div
      className="h-full overflow-hidden border border-solid border-primary"
      style={{ borderWidth: "var(--mpm-accent-thickness)" }}
    >
      <div className="relative aspect-[4/3] w-full desktop:aspect-auto desktop:h-full desktop:min-h-[520px]">
        <iframe
          title={visit.map.alt}
          src={visit.map.embedUrl}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export function VisitSection() {
  return (
    <section className="bg-surface" id="visit">
      <div className="mx-auto max-w-[1280px] px-5 py-12 tablet:px-8 desktop:px-12 desktop:py-16">
        <div className="mb-8 desktop:mb-10">
          <h2 className="text-style-primary">{visit.title}</h2>
          <AccentBar className="mt-3" />
        </div>

        <div className="grid gap-6 desktop:grid-cols-2 desktop:items-stretch desktop:gap-10">
          <div className="order-2 desktop:order-1 desktop:h-full">
            <MapPanel />
          </div>
          <div className="order-1 flex flex-col gap-4 desktop:order-2">
            <LocationCard />
            <HoursCard />
            <GettingThereCard />
          </div>
        </div>
      </div>
    </section>
  );
}
