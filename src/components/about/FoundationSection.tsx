import { foundation } from "@/content/about";

export function FoundationSection() {
  return (
    <section
      id="leadership"
      className="scroll-mt-24 bg-secondary px-6 py-12 md:px-10 md:py-14"
    >
      <div className="mx-auto flex max-w-[1280px] flex-col items-stretch gap-10 lg:flex-row lg:gap-12">
        <div className="flex flex-1 flex-col gap-4">
          <h2 className="text-style-primary text-mpm-text">{foundation.title}</h2>
          <p className="text-style-body text-mpm-text">{foundation.body}</p>
          <p className="text-style-body text-mpm-text">
            We encourage those who are interested in getting involved to join
            one of our workgroups and committees.{" "}
            <strong className="font-bold">
              Please fill out the Community Interest Form to be considered.
            </strong>
          </p>
        </div>

        <div className="flex flex-1 bg-surface">
          <span
            className="w-[length:var(--mpm-accent-thickness)] shrink-0 bg-accent"
            aria-hidden="true"
          />
          <div className="px-6 py-6 md:px-8 md:py-8">
            <p className="text-style-body mb-3 font-bold text-mpm-text">
              {foundation.listTitle}
            </p>
            <ul className="text-style-body list-disc space-y-2 pl-6 text-mpm-text">
              {foundation.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
