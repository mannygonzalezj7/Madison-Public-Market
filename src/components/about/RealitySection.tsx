import Image from "next/image";
import { AccentBar } from "@/components/ui/AccentBar";
import { reality } from "@/content/about";

const borderColor = {
  primary: "border-primary text-primary",
  accent: "border-accent text-accent",
  yellow: "border-yellow text-yellow",
} as const;

const iconBg = {
  primary: "bg-primary",
  accent: "bg-accent",
  yellow: "bg-yellow",
} as const;

export function RealitySection() {
  return (
    <section
      id="reality"
      className="scroll-mt-24 bg-secondary px-6 py-14 md:px-16"
    >
      <div className="mx-auto flex max-w-[1100px] flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-style-primary text-center text-mpm-text">
            {reality.title}
          </h2>
          <AccentBar />
        </div>
        <p className="text-style-body max-w-3xl text-center text-mpm-text">
          {reality.body}
        </p>

        <div className="mt-2 flex flex-wrap items-stretch justify-center gap-6">
          {reality.cards.map((card) => (
            <article
              key={card.title}
              className={`flex w-full max-w-[280px] flex-col items-center gap-4 border-[length:var(--mpm-accent-thickness)] ${borderColor[card.accent]} bg-secondary px-7 pb-10 pt-8`}
            >
              <div
                className={`relative flex h-[92px] w-[100px] items-center justify-center ${iconBg[card.accent]}`}
              >
                <Image
                  src={card.icon}
                  alt=""
                  width={72}
                  height={70}
                  className="object-contain"
                />
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-center text-[clamp(1.75rem,3vw,2.6rem)] uppercase leading-tight">
                {card.title}
              </h3>
              <p className="text-style-body text-center text-mpm-text">
                {card.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
