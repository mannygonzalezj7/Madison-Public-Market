import type { Metadata } from "next";
import { KiosksSection } from "@/components/merchants/KiosksSection";
import { MarketMapSection } from "@/components/merchants/MarketMapSection";
import { MerchantsDirectorySection } from "@/components/merchants/MerchantsDirectorySection";
import { MerchantsHero } from "@/components/merchants/MerchantsHero";
import { MerchantsSelectionProvider } from "@/components/merchants/MerchantsSelectionProvider";
import { SiteFooter } from "@/components/home/SiteFooter";
import { SiteHeader } from "@/components/home/SiteHeader";
import { merchantsPageMeta } from "@/content/merchants";

export const metadata: Metadata = {
  title: merchantsPageMeta.title,
  description: merchantsPageMeta.description,
};

export default function MerchantsPage() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-secondary focus:px-4 focus:py-2"
      >
        Skip to content
      </a>
      <SiteHeader />
      <MerchantsSelectionProvider>
        <main id="main" className="flex-1">
          <MerchantsHero />
          <MarketMapSection />
          <MerchantsDirectorySection />
          <KiosksSection />
        </main>
      </MerchantsSelectionProvider>
      <SiteFooter />
    </>
  );
}
