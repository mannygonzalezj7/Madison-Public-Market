"use client";

import { useState } from "react";
import { AccentBar } from "@/components/ui/AccentBar";
import { merchantFaq } from "@/content/merchant-faq";

export function MerchantFaqView() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <section className="bg-surface px-6 py-16 md:px-16 md:py-24">
        <div className="mx-auto max-w-[800px]">
          <h1 className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,6vw,4.5rem)] leading-none uppercase text-mpm-text">
            {merchantFaq.title}
          </h1>
          <div className="mt-4">
            <AccentBar orientation="horizontal" className="w-[254px]" />
          </div>
          <p className="text-style-body mt-8 text-mpm-text">{merchantFaq.intro}</p>

          <ul className="mt-12 space-y-3">
            {merchantFaq.items.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <li key={item.question} className="border border-stroke bg-secondary">
                  <button
                    type="button"
                    className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left"
                    aria-expanded={isOpen}
                    onClick={() =>
                      setOpenIndex((current) => (current === index ? null : index))
                    }
                  >
                    <span className="font-[family-name:var(--font-body)] text-base font-medium text-mpm-text md:text-lg">
                      {item.question}
                    </span>
                    <span
                      className="font-[family-name:var(--font-display)] text-2xl leading-none text-primary"
                      aria-hidden="true"
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen ? (
                    <div className="border-t border-stroke px-5 py-4">
                      <p className="text-style-body text-mpm-text">{item.answer}</p>
                    </div>
                  ) : null}
                </li>
              );
            })}
          </ul>

          <p className="text-style-body mt-10 text-mpm-text">
            More questions?{" "}
            <a
              href={`mailto:${merchantFaq.contactEmail}`}
              className="underline hover:text-primary"
            >
              {merchantFaq.contactEmail}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
