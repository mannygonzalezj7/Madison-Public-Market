import { AboutSection } from "@/components/home/AboutSection";
import { DustBanner } from "@/components/home/DustBanner";
import { Hero } from "@/components/home/Hero";
import { MerchantsSection } from "@/components/home/MerchantsSection";
import { SiteFooter } from "@/components/home/SiteFooter";
import { SiteHeader } from "@/components/home/SiteHeader";
import { UpdatesSection } from "@/components/home/UpdatesSection";
import { VisitSection } from "@/components/home/VisitSection";

/**
 * Live WP homepage order:
 * Hero → Visit → Dust banner → About → Merchants → Updates
 */
export default function HomePage() {
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
        <Hero />
        <VisitSection />
        <DustBanner />
        <AboutSection />
        <MerchantsSection />
        <UpdatesSection />
      </main>
      <SiteFooter />
    </>
  );
}
