"use client";

import { MerchantCard } from "@/components/merchants/MerchantCard";
import { useMerchantsSelection } from "@/components/merchants/MerchantsSelectionProvider";

export function MerchantGridSection() {
  const { filteredMerchants, selectedMerchant } = useMerchantsSelection();

  const rows: (typeof filteredMerchants)[] = [];
  for (let index = 0; index < filteredMerchants.length; index += 3) {
    rows.push(filteredMerchants.slice(index, index + 3));
  }

  return (
    <section className="relative bg-surface px-6 py-12 md:px-16 md:py-16">
      <div className="pointer-events-none absolute inset-x-0 top-[138px] hidden h-[150px] bg-yellow lg:block" />
      <div className="pointer-events-none absolute inset-x-0 top-[533px] hidden h-[150px] bg-yellow lg:block" />
      <div className="pointer-events-none absolute inset-x-0 top-[928px] hidden h-[150px] bg-yellow lg:block" />

      <div className="relative mx-auto flex max-w-[1280px] flex-col gap-12 md:gap-16">
        {rows.length === 0 ? (
          <p className="text-style-body text-center text-mpm-text">
            No merchants match your search.
          </p>
        ) : (
          rows.map((row, rowIndex) => (
            <div
              key={`row-${rowIndex}`}
              className="flex flex-col items-center gap-10 lg:flex-row lg:justify-center lg:gap-16"
            >
              {row.map((merchant) => (
                <MerchantCard
                  key={merchant.slug}
                  merchant={merchant}
                  selected={selectedMerchant?.slug === merchant.slug}
                />
              ))}
            </div>
          ))
        )}
      </div>
    </section>
  );
}
