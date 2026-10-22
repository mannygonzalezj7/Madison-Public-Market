import type { Metadata } from "next";
import { SiteFooter } from "@/components/home/SiteFooter";
import { SiteHeader } from "@/components/home/SiteHeader";
import { BecomeVendorView } from "@/components/merchants/BecomeVendorView";
import { becomeVendorPageMeta } from "@/content/become-a-vendor";

export const metadata: Metadata = {
  title: becomeVendorPageMeta.title,
  description: becomeVendorPageMeta.description,
};

/**
 * Live URL: https://madisonpublicmarket.org/our-merchants/interest/
 * “Become a Vendor” / Selling at the Market page.
 */
export default function MerchantInterestPage() {
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
        <BecomeVendorView />
      </main>
      <SiteFooter />
    </>
  );
}
