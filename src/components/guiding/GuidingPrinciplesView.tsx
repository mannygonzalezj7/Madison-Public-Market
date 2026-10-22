import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import {
  guidingPrinciples,
  guidingPrinciplesHero,
  type GuidingPrinciple,
} from "@/content/guiding-principles";
import { NewsletterSection } from "@/components/about/NewsletterSection";

function PrincipleCard({ item }: { item: GuidingPrinciple }) {
  const iconBottomRight =
    item.id === "of-its-place" ||
    item.id === "all-season-draw" ||
    item.id === "adaptable";

  return (
    <article
      tabIndex={0}
      className={`group relative flex h-full min-h-[220px] flex-col overflow-hidden p-5 text-text-inverse shadow-[0_4px_8px_rgba(0,0,0,0.25)] outline-none transition-[box-shadow,transform] duration-300 hover:z-10 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.3)] focus-visible:z-10 focus-visible:ring-4 focus-visible:ring-accent/60 ${item.tone} ${item.border ?? ""} ${item.layout.minH}`}
    >
      <span
        className={`pointer-events-none absolute font-[family-name:var(--font-number)] text-[clamp(5rem,11vw,8.35rem)] leading-none select-none ${item.numberColor} ${
          item.id === "beautifully-simple" || item.id === "of-its-place"
            ? "bottom-[-0.1em] left-1"
            : item.id === "equitably-designed" || item.id === "functional"
              ? "bottom-[-0.15em] left-0"
              : item.id === "nourishing" || item.id === "adaptable"
                ? "left-2 top-0"
                : item.id === "all-season-draw"
                  ? "-right-2 top-0"
                  : "right-0 top-0"
        }`}
        aria-hidden="true"
      >
        {item.number}
      </span>

      {/* Top row: icon + title (layout varies by card) */}
      {!iconBottomRight || item.id === "adaptable" ? (
        <div
          className={`relative z-10 flex gap-3 ${
            item.id === "equitably-designed" || item.id === "adaptable"
              ? "items-start"
              : item.id === "nourishing"
                ? "items-start justify-between"
                : item.id === "functional"
                  ? "flex-row-reverse items-start"
                  : "flex-col items-start"
          }`}
        >
          {item.id !== "adaptable" && item.id !== "of-its-place" ? (
            <div
              className={`relative flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-full ${
                item.iconIsBadge ? "" : (item.iconCircle ?? "bg-secondary/90")
              }`}
            >
              <Image
                src={item.icon}
                alt=""
                width={item.iconIsBadge ? 56 : 34}
                height={item.iconIsBadge ? 56 : 34}
                className="object-contain"
              />
            </div>
          ) : null}

          {item.id !== "nourishing" && item.id !== "budget-driven" ? (
            <h2
              className={`relative z-10 font-[family-name:var(--font-display)] text-[clamp(1.75rem,2.8vw,2.75rem)] leading-none uppercase drop-shadow-sm ${
                item.id === "equitably-designed" || item.id === "adaptable"
                  ? "flex-1 text-right"
                  : ""
              }`}
            >
              {item.title}
            </h2>
          ) : null}
        </div>
      ) : (
        <h2 className="relative z-10 font-[family-name:var(--font-display)] text-[clamp(1.75rem,2.8vw,2.75rem)] leading-none uppercase drop-shadow-sm">
          {item.title}
        </h2>
      )}

      {/* Body: visible on mobile; hover/focus on desktop (Figma hover text) */}
      <p
        className={`relative z-10 font-[family-name:var(--font-body)] text-[0.95rem] leading-snug font-black text-text-inverse transition-all duration-300 ease-out ${
          item.id === "budget-driven"
            ? "mt-4 md:absolute md:inset-x-5 md:top-[42%] md:mt-0 md:max-h-0 md:overflow-hidden md:opacity-0 md:group-hover:max-h-40 md:group-hover:opacity-100 md:group-focus-visible:max-h-40 md:group-focus-visible:opacity-100"
            : item.id === "nourishing"
              ? "mt-4 mb-4 md:mt-6 md:max-h-0 md:overflow-hidden md:opacity-0 md:group-hover:max-h-40 md:group-hover:opacity-100 md:group-focus-visible:max-h-40 md:group-focus-visible:opacity-100"
              : "mt-4 md:max-h-0 md:overflow-hidden md:opacity-0 md:group-hover:mt-4 md:group-hover:max-h-48 md:group-hover:opacity-100 md:group-focus-visible:mt-4 md:group-focus-visible:max-h-48 md:group-focus-visible:opacity-100"
        }`}
      >
        {item.body}
      </p>

      {item.id === "budget-driven" || item.id === "nourishing" ? (
        <h2 className="relative z-10 mt-auto pt-6 font-[family-name:var(--font-display)] text-[clamp(1.75rem,2.8vw,2.75rem)] leading-none uppercase drop-shadow-sm">
          {item.title}
        </h2>
      ) : null}

      {iconBottomRight ? (
        <div className="relative z-10 mt-auto flex justify-end pt-4">
          <div
            className={`flex size-14 items-center justify-center rounded-full ${item.iconCircle ?? "bg-secondary/90"}`}
          >
            <Image
              src={item.icon}
              alt=""
              width={34}
              height={34}
              className="object-contain"
            />
          </div>
        </div>
      ) : null}
    </article>
  );
}

export function GuidingPrinciplesView() {
  return (
    <>
      <section className="relative overflow-hidden bg-yellow px-6 py-12 md:min-h-[404px] md:px-16 md:py-16">
        <div className="relative z-10 mx-auto flex max-w-[1173px] flex-col gap-8 lg:flex-row lg:items-center">
          <div className="max-w-[560px] text-text-inverse">
            <Link
              href="/about"
              className="mb-6 inline-flex size-[50px] items-center justify-center"
              aria-label="Back to About"
            >
              <Image
                src="/icons/arrow-back-circle.svg"
                alt=""
                width={50}
                height={50}
              />
            </Link>
            <h1 className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,7vw,5.95rem)] leading-[0.83] uppercase">
              {guidingPrinciplesHero.title}
            </h1>
            <p className="mt-4 font-[family-name:var(--font-body)] text-base font-medium md:text-lg">
              {guidingPrinciplesHero.subtitle}
            </p>
          </div>
          <div className="pointer-events-none relative mx-auto h-[200px] w-full max-w-[420px] opacity-40 md:h-[280px] lg:absolute lg:right-0 lg:top-1/2 lg:mx-0 lg:h-[340px] lg:w-[55%] lg:max-w-[640px] lg:-translate-y-1/2">
            <Image
              src={guidingPrinciplesHero.image.src}
              alt=""
              fill
              className="object-contain object-right"
              sizes="(max-width: 1024px) 420px, 640px"
              priority
            />
          </div>
        </div>
      </section>

      <section className="bg-secondary px-4 py-12 md:px-10 md:py-16 lg:px-16">
        <div
          className="mx-auto grid max-w-[1020px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:gap-x-5 lg:gap-y-4"
          style={{ gridAutoRows: "minmax(52px, auto)" }}
        >
          {guidingPrinciples.map((item) => {
            const style = {
              ["--gp-col"]: item.layout.col,
              ["--gp-row"]: item.layout.row,
            } as CSSProperties;
            return (
              <div
                key={item.id}
                className="h-full lg:[grid-column:var(--gp-col)] lg:[grid-row:var(--gp-row)]"
                style={style}
              >
                <PrincipleCard item={item} />
              </div>
            );
          })}
        </div>
      </section>

      <NewsletterSection />
    </>
  );
}
