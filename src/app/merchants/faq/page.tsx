import type { Metadata } from "next";
import { SiteFooter } from "@/components/home/SiteFooter";
import { SiteHeader } from "@/components/home/SiteHeader";
import { MerchantFaqView } from "@/components/merchants/MerchantFaqView";
import { merchantFaqPageMeta } from "@/content/merchant-faq";

export const metadata: Metadata = {
  title: merchantFaqPageMeta.title,
  description: merchantFaqPageMeta.description,
};

export default function MerchantFaqPage() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-secondary focus:px-4 focus:py-2"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" className="flex-1">
        <MerchantFaqView />
      </main>
      <SiteFooter />
    </>
  );
}
