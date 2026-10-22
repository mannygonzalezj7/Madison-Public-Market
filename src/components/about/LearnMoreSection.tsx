import Image from "next/image";
import Link from "next/link";
import { learnMore } from "@/content/about";

const accentBorder = {
  primary: "border-primary",
  yellow: "border-yellow",
  accent: "border-accent",
} as const;

export function LearnMoreSection() {
  return (
    <section className="bg-secondary px-6 py-12 md:px-16 md:py-16">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-10">
        <h2 className="text-style-primary text-center text-mpm-text">
          {learnMore.title}
        </h2>

        <div className="flex w-full flex-col flex-wrap items-stretch justify-center gap-6 lg:flex-row">
          {learnMore.cards.map((card) => (
            <Link
              key={card.label}
              href={card.href}
              className={`relative flex min-h-[200px] w-full max-w-[280px] flex-col justify-end overflow-hidden border-[length:var(--mpm-accent-thickness)] ${accentBorder[card.accent]} shadow-[0_4px_4px_rgba(0,0,0,0.25)] transition hover:brightness-95 mx-auto lg:mx-0`}
            >
              <Image
                src={card.image}
                alt=""
                fill
                className="object-cover"
                sizes="280px"
              />
              <div className="absolute inset-0 bg-black/35" aria-hidden="true" />
              <p className="relative z-10 p-4 font-[family-name:var(--font-display)] text-[1.8rem] uppercase leading-none text-text-inverse drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                {card.label}
              </p>
            </Link>
          ))}
        </div>

        <div className="flex w-full max-w-[667px] items-stretch bg-secondary shadow-[0_4px_2px_rgba(0,0,0,0.25)]">
          <span
            className="w-[length:var(--mpm-accent-thickness)] shrink-0 bg-gradient-to-b from-primary via-yellow to-accent"
            aria-hidden="true"
          />
          <ul className="text-style-body list-disc space-y-2 px-8 py-6 text-mpm-text">
            {learnMore.features.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
