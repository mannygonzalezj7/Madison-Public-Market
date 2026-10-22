import Image from "next/image";
import { AccentBar } from "@/components/ui/AccentBar";
import { NewsletterSection } from "@/components/about/NewsletterSection";
import {
  boardColumns,
  foundationStaffIntro,
  leadershipHero,
  operationalPartners,
  staff,
} from "@/content/leadership";

/**
 * Desktop live /our-leadership/ layout from WP + user screenshots.
 */
export function LeadershipView() {
  return (
    <>
      {/* Hero: text left, tilted photo right — never overlapping */}
      <section className="overflow-hidden bg-accent">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-10 px-6 py-14 md:flex-row md:items-center md:justify-between md:gap-12 md:px-16 md:py-20">
          <div className="w-full max-w-xl shrink-0 text-text-inverse">
            <h1 className="font-[family-name:var(--font-display)] text-[clamp(2.25rem,5vw,4.25rem)] leading-none uppercase">
              {leadershipHero.title}
            </h1>
            <p className="text-style-body mt-4 max-w-md text-text-inverse">
              {leadershipHero.subtitle}
            </p>
          </div>
          <div className="w-full max-w-[520px] shrink-0">
            <div className="relative aspect-[522/315] w-full -rotate-[5deg] border-[10px] border-primary shadow-[0_8px_24px_rgba(0,0,0,0.25)]">
              <Image
                src={leadershipHero.image.src}
                alt={leadershipHero.image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 90vw, 520px"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Foundation Staff */}
      <section className="bg-secondary px-6 py-12 md:px-16 md:py-16">
        <div className="mx-auto grid max-w-[1100px] items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="flex gap-5 md:gap-7">
            <AccentBar orientation="vertical" className="min-h-[220px]" />
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-[clamp(1.75rem,3.5vw,2.75rem)] uppercase leading-none text-mpm-text">
                {foundationStaffIntro.title}
              </h2>
              {foundationStaffIntro.paragraphs.map((p) => (
                <p
                  key={p.slice(0, 40)}
                  className="text-style-body mt-5 text-mpm-text"
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
          <div className="relative mx-auto aspect-[768/397] w-full max-w-[480px] border-[8px] border-accent">
            <Image
              src={foundationStaffIntro.logo.src}
              alt={foundationStaffIntro.logo.alt}
              fill
              className="object-contain bg-[#5c4033] p-2"
              sizes="480px"
            />
          </div>
        </div>
      </section>

      {/* Our Leadership — photo stretches to bio height; name under photo */}
      <section className="bg-surface px-6 py-12 md:px-16 md:py-16">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-center font-[family-name:var(--font-display)] text-[clamp(2rem,4.5vw,3.25rem)] uppercase leading-none text-mpm-text">
            Our Leadership
          </h2>
          <div className="mt-12 grid gap-14 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-16">
            {staff.map((person) => (
              <article key={person.name}>
                <div className="flex items-stretch gap-3 md:gap-4">
                  <div className="relative w-[38%] min-h-[200px] max-w-[220px] shrink-0 overflow-hidden bg-secondary self-stretch">
                    <Image
                      src={person.image.src}
                      alt={person.image.alt}
                      fill
                      className="object-cover object-top"
                      sizes="220px"
                    />
                  </div>
                  <span
                    className={`w-[6px] shrink-0 self-stretch md:w-[8px] ${
                      person.accent === "accent" ? "bg-accent" : "bg-primary"
                    }`}
                    aria-hidden="true"
                  />
                  <div className="min-w-0 flex-1 space-y-3">
                    {person.paragraphs.map((p) => (
                      <p
                        key={p.slice(0, 36)}
                        className="font-[family-name:var(--font-body)] text-base leading-relaxed text-mpm-text md:text-lg"
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
                <h3 className="mt-4 font-[family-name:var(--font-display)] text-xl uppercase leading-tight text-mpm-text md:text-2xl">
                  {person.name}, {person.role}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Operational Partners — 2-col rows: logo | colored bar | name/role */}
      <section className="bg-secondary px-6 py-12 md:px-16 md:py-16">
        <div className="mx-auto max-w-[1100px]">
          <h2 className="text-style-primary text-center text-mpm-text">
            {operationalPartners.title}
          </h2>
          <ul className="mt-12 grid gap-8 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-10">
            {operationalPartners.items.map((item) => (
              <li key={item.name} className="flex items-center gap-4 md:gap-5">
                <div className="relative size-20 shrink-0 overflow-hidden bg-surface md:size-24">
                  <Image
                    src={item.logo}
                    alt=""
                    fill
                    className="object-contain p-2"
                    sizes="96px"
                  />
                </div>
                <span
                  className={`w-[length:var(--mpm-accent-thickness)] shrink-0 self-stretch ${
                    item.accent === "accent"
                      ? "bg-accent"
                      : item.accent === "yellow"
                        ? "bg-yellow"
                        : "bg-primary"
                  }`}
                  aria-hidden="true"
                />
                <div className="min-w-0">
                  <p className="font-[family-name:var(--font-display)] text-lg uppercase leading-tight text-mpm-text md:text-xl">
                    {item.name}
                  </p>
                  <p className="text-style-body mt-1 text-mpm-text">
                    {item.role}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Foundation Board — 3 centered columns */}
      <section className="bg-secondary px-6 py-12 md:px-16 md:py-16">
        <div className="mx-auto max-w-[1000px]">
          <div className="mx-auto mb-10 flex w-fit flex-col items-center">
            <h2 className="text-style-primary text-center text-mpm-text">
              Foundation Board Members
            </h2>
            <AccentBar className="mt-4" />
          </div>
          <div className="grid gap-10 sm:grid-cols-3 sm:gap-8">
            {boardColumns.map((column, colIndex) => (
              <ul
                key={colIndex}
                className="flex flex-col items-center gap-8 text-center"
              >
                {column.map((member) => (
                  <li key={member.name}>
                    <p className="font-[family-name:var(--font-body)] text-lg font-bold text-mpm-text md:text-xl">
                      {member.name}
                    </p>
                    <p className="text-style-body mt-1 text-mpm-text/80">
                      {member.detail}
                    </p>
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <p className="text-style-body mx-auto mt-12 max-w-[720px] text-center text-mpm-text">
            The Foundation manages the day-to-day operations of the Market. The
            Foundation leads vendor selection, the employee hiring process,
            applies for grants, and works closely with the City on the
            architectural design.
          </p>
        </div>
      </section>

      <NewsletterSection />
    </>
  );
}
