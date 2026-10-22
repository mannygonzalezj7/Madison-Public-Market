import {
  locationBanner,
  pointsOfEntry,
  vision,
  visionOfferings,
} from "@/content/about";

/**
 * Live desktop About: location stamp + points → Our Vision | offerings box
 * Matches madisonpublicmarket.org/about/ screenshots.
 */
export function VisionSection() {
  return (
    <section className="bg-secondary px-6 py-12 md:px-16 md:py-16">
      <div className="mx-auto flex max-w-[1100px] flex-col gap-14 md:gap-20">
        {/* Row 1: address stamp | points of entry */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative bg-primary px-8 py-10 md:px-12 md:py-12">
            {/* Yellow ticket / stamp edge */}
            <div
              className="pointer-events-none absolute inset-[7px] border-[3px] border-dashed border-yellow md:inset-[9px]"
              aria-hidden="true"
            />
            <p className="relative font-[family-name:var(--font-display)] text-center text-[clamp(1.35rem,2.6vw,2rem)] uppercase leading-[1.25] tracking-wide text-text-inverse">
              {locationBanner.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4.5vw,3.25rem)] leading-none uppercase text-mpm-text">
              {pointsOfEntry.title}
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 font-[family-name:var(--font-body)] text-base text-mpm-text md:text-lg">
              {pointsOfEntry.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Row 2: our vision | offerings callout */}
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4.5vw,3.25rem)] leading-none uppercase text-mpm-text">
              {vision.title}
            </h2>
            <p className="mt-5 font-[family-name:var(--font-body)] text-base leading-relaxed text-mpm-text md:text-lg">
              {vision.body}
            </p>
          </div>

          <aside className="flex bg-surface">
            <span
              className="w-[10px] shrink-0 bg-accent"
              aria-hidden="true"
            />
            <div className="px-6 py-6 md:px-8 md:py-8">
              <p className="font-[family-name:var(--font-body)] text-base font-bold text-mpm-text md:text-lg">
                {visionOfferings.title}
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 font-[family-name:var(--font-body)] text-base text-mpm-text md:text-lg">
                {visionOfferings.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
