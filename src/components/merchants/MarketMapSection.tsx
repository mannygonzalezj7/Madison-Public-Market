import { InteractiveMarketMap } from "@/components/merchants/InteractiveMarketMap";
import { MerchantInfoPanel } from "@/components/merchants/MerchantInfoPanel";

export function MarketMapSection() {
  return (
    <section className="bg-yellow px-6 py-12 md:px-16 md:py-16">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-10 lg:flex-row lg:items-stretch lg:justify-center lg:gap-5">
        <MerchantInfoPanel />
        <InteractiveMarketMap />
      </div>
    </section>
  );
}
