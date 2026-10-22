"use client";

import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { getMerchantHref } from "@/content/merchants";
import { useMerchantsSelection } from "@/components/merchants/MerchantsSelectionProvider";
import { marketStalls } from "@/content/market-map";

const PANEL_HEIGHT =
  "min-h-[442px] w-full max-w-[346px] lg:min-h-0 lg:self-stretch";

export function MerchantInfoPanel() {
  const { selectedMerchant, selectedStallId } = useMerchantsSelection();
  const stall = marketStalls.find((item) => item.id === selectedStallId);

  if (selectedMerchant) {
    const stallLabel = selectedMerchant.location ?? selectedStallId;

    return (
      <div
        className={`${PANEL_HEIGHT} flex flex-col items-center justify-between`}
      >
        <div className="relative size-[300px] shrink-0 border-[10px] border-[#323232] bg-secondary">
          <Image
            src={selectedMerchant.image.src}
            alt={selectedMerchant.image.alt}
            fill
            className="object-cover"
            sizes="300px"
          />
        </div>

        <div className="flex flex-col items-center gap-3 px-2 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-[2rem] leading-[0.9] text-text-inverse uppercase">
            {selectedMerchant.name}
          </h2>
          <p className="min-h-6 text-style-body text-text-inverse/90">
            {stallLabel ? `Stall ${stallLabel}` : "\u00A0"}
          </p>
        </div>

        <div className="flex min-h-[52px] shrink-0 items-end justify-center">
          <ButtonLink href={getMerchantHref(selectedMerchant.slug)}>
            Learn More
          </ButtonLink>
        </div>
      </div>
    );
  }

  if (selectedStallId && stall) {
    return (
      <div
        className={`${PANEL_HEIGHT} flex flex-col items-center justify-between text-center text-text-inverse`}
      >
        <div className="flex size-[300px] shrink-0 items-center justify-center border-[10px] border-[#323232] bg-secondary/20">
          <p className="font-[family-name:var(--font-display)] text-5xl uppercase">
            {selectedStallId}
          </p>
        </div>

        <div className="flex flex-col items-center gap-3 px-2">
          <h2 className="font-[family-name:var(--font-display)] text-[2rem] leading-[0.9] uppercase">
            {stall.kiosk ? "Kiosk Stall" : "Market Stall"} {selectedStallId}
          </h2>
          <p className="min-h-6 text-style-body text-text-inverse/90">
            Merchant coming soon!
          </p>
        </div>

        <div className="min-h-[52px] shrink-0" aria-hidden="true" />
      </div>
    );
  }

  return (
    <div
      className={`${PANEL_HEIGHT} flex flex-col items-center justify-center text-center text-text-inverse`}
    >
      <p className="text-style-body">
        Hover a stall on the map to view merchant details.
      </p>
    </div>
  );
}
