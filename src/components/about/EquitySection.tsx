import Image from "next/image";
import { equity } from "@/content/about";

export function EquitySection() {
  return (
    <section
      id="equity"
      className="scroll-mt-24 bg-secondary px-6 py-12 md:px-16 md:py-16"
    >
      <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-2 lg:gap-16 lg:items-start">
        <div className="relative order-2 aspect-[543/333] w-full border-[length:var(--mpm-accent-thickness)] border-accent lg:order-1 lg:sticky lg:top-28">
          <Image
            src={equity.image.src}
            alt={equity.image.alt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 543px"
          />
        </div>

        <div className="order-1 flex flex-col gap-8 lg:order-2">
          <h2 className="text-style-primary max-w-[502px] text-mpm-text">
            {equity.title}
          </h2>
          <p className="text-style-body text-mpm-text">{equity.intro}</p>

          <div className="relative flex gap-0">
            <span
              className="w-[11px] shrink-0 bg-accent"
              aria-hidden="true"
            />
            <div className="rounded-[11px] bg-accent/20 px-5 py-3">
              <p className="text-style-body text-mpm-text">{equity.callout}</p>
            </div>
          </div>

          <p className="text-style-body text-mpm-text">{equity.closing}</p>
        </div>
      </div>
    </section>
  );
}
