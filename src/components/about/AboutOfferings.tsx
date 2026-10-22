import { learnMore } from "@/content/about";

/** Cream offerings list matching live About page product/experience bullets. */
export function AboutOfferings() {
  return (
    <section className="bg-surface px-6 py-12 md:px-16 md:py-14">
      <div className="mx-auto max-w-[800px]">
        <ul className="text-style-body list-disc space-y-3 pl-6 text-mpm-text">
          {learnMore.features.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
