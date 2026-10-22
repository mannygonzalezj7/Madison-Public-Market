import { kiosksSection } from "@/content/merchants";

export function KiosksSection() {
  return (
    <section className="bg-secondary px-6 py-12 md:px-16 md:py-16">
      <div className="mx-auto max-w-[1280px]">
        <h2 className="text-style-primary text-mpm-text">
          {kiosksSection.title}
        </h2>
        {kiosksSection.items.length === 0 ? (
          <p className="text-style-body mt-6 max-w-2xl text-mpm-text">
            [CONFIRM WITH STEVE: weekly kiosk vendor list and carousel content]
          </p>
        ) : null}
      </div>
    </section>
  );
}
