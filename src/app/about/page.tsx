import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { ArtworkCta } from "@/components/about/ArtworkCta";
import { EquitySection } from "@/components/about/EquitySection";
import { FoundationSection } from "@/components/about/FoundationSection";
import { NewsletterSection } from "@/components/about/NewsletterSection";
import { RealitySection } from "@/components/about/RealitySection";
import { VisionSection } from "@/components/about/VisionSection";
import { SiteFooter } from "@/components/home/SiteFooter";
import { SiteHeader } from "@/components/home/SiteHeader";
import { aboutPageMeta } from "@/content/about";

export const metadata: Metadata = {
  title: aboutPageMeta.title,
  description: aboutPageMeta.description,
};

/**
 * Live WP /about/ desktop order:
 * Hero → location/points + Our Vision/offerings → Artwork CTA → Equity → Foundation → Reality → Newsletter
 */
export default function AboutPage() {
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
        <AboutHero />
        <VisionSection />
        <ArtworkCta />
        <EquitySection />
        <FoundationSection />
        <RealitySection />
        <NewsletterSection />
      </main>
      <SiteFooter />
    </>
  );
}
