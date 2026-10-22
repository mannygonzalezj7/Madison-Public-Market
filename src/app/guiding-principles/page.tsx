import type { Metadata } from "next";
import { GuidingPrinciplesView } from "@/components/guiding/GuidingPrinciplesView";
import { SiteFooter } from "@/components/home/SiteFooter";
import { SiteHeader } from "@/components/home/SiteHeader";
import { guidingPrinciplesPageMeta } from "@/content/guiding-principles";

export const metadata: Metadata = {
  title: guidingPrinciplesPageMeta.title,
  description: guidingPrinciplesPageMeta.description,
};

export default function GuidingPrinciplesPage() {
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
        <GuidingPrinciplesView />
      </main>
      <SiteFooter />
    </>
  );
}
