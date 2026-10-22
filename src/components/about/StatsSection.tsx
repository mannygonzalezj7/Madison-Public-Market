import { statistics } from "@/content/about";

export function StatsSection() {
  return (
    <section className="bg-primary px-6 py-12 md:px-16 md:py-16">
      <div className="mx-auto grid max-w-[1100px] grid-cols-2 gap-8 text-center md:grid-cols-3 md:gap-x-12 md:gap-y-14">
        {statistics.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-1">
            <p className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,6vw,4.5rem)] leading-none text-text-inverse uppercase">
              {stat.value}
            </p>
            <p className="font-[family-name:var(--font-body)] text-sm font-bold uppercase tracking-wide text-text-inverse md:text-base">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
