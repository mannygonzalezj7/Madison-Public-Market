import type { Metadata } from "next";
import {
  DonateCauseSection,
  DonateHero,
  GivebutterSection,
} from "@/components/donate/DonateSections";
import { SiteFooter } from "@/components/home/SiteFooter";
import { SiteHeader } from "@/components/home/SiteHeader";
import { donatePageMeta } from "@/content/donate";

export const metadata: Metadata = {
  title: donatePageMeta.title,
  description: donatePageMeta.description,
};

/** Hero → cause + framed mural → brand CTA */
export default function DonatePage() {
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
        <DonateHero />
        <DonateCauseSection />
        <GivebutterSection />
      </main>
      <SiteFooter />
    </>
  );
}
