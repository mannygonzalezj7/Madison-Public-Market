"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { marketExperience } from "@/content/about";

const cardBg = {
  yellow: "bg-yellow",
  accent: "bg-accent",
  primary: "bg-primary",
} as const;

export function MarketExperienceSection() {
  const [index, setIndex] = useState(0);
  const slides = marketExperience.slides;
  const slide = slides[index] ?? slides[0];

  return (
    <section className="bg-surface px-6 py-12 md:px-16 md:py-14">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-10">
        <h2 className="text-style-primary text-center text-mpm-text">
          {marketExperience.title}
        </h2>

        <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-9">
          <div className="text-style-body flex-1 space-y-4 text-mpm-text">
            {marketExperience.paragraphs.map((p) => (
              <p key={p.linkText}>
                {p.before}
                <Link
                  href={p.linkHref}
                  className="text-primary underline decoration-solid underline-offset-2"
                >
                  {p.linkText}
                </Link>
                {p.after}
              </p>
            ))}
          </div>

          <div className="relative w-full max-w-[591px] shrink-0">
            <div className="relative aspect-[541/339] border-[length:var(--mpm-accent-thickness)] border-primary shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 541px"
              />
            </div>
            {slides.length > 1 ? (
              <>
                <button
                  type="button"
                  aria-label="Previous image"
                  className="absolute top-1/2 left-0 z-10 -translate-x-1/2 -translate-y-1/2 cursor-pointer bg-secondary p-2 shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
                  onClick={() =>
                    setIndex((i) => (i - 1 + slides.length) % slides.length)
                  }
                >
                  <span aria-hidden className="text-2xl leading-none text-primary">
                    ‹
                  </span>
                </button>
                <button
                  type="button"
                  aria-label="Next image"
                  className="absolute top-1/2 right-0 z-10 translate-x-1/2 -translate-y-1/2 cursor-pointer bg-secondary p-2 shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
                  onClick={() => setIndex((i) => (i + 1) % slides.length)}
                >
                  <span aria-hidden className="text-2xl leading-none text-primary">
                    ›
                  </span>
                </button>
              </>
            ) : null}
          </div>
        </div>

        <div className="flex flex-wrap items-stretch justify-center gap-4">
          {marketExperience.cards.map((card) => (
            <div
              key={card.title}
              className={`${cardBg[card.color]} flex w-full max-w-[365px] flex-col gap-1 px-6 py-6 shadow-[0_4px_4px_rgba(0,0,0,0.25)]`}
            >
              <h3 className="font-[family-name:var(--font-display)] text-[1.875rem] uppercase leading-[35px] text-text-inverse drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                {card.title}
              </h3>
              <p className="font-[family-name:var(--font-body)] text-base font-bold leading-normal text-text-inverse drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
