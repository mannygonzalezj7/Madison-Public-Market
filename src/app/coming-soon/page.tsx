import type { Metadata } from "next";
import { ComingSoonView } from "@/components/coming-soon/ComingSoonView";
import { SiteFooter } from "@/components/home/SiteFooter";
import { SiteHeader } from "@/components/home/SiteHeader";
import { comingSoonPageMeta } from "@/content/coming-soon";

export const metadata: Metadata = {
  title: comingSoonPageMeta.title,
  description: comingSoonPageMeta.description,
};

export default function ComingSoonPage() {
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
        <ComingSoonView />
      </main>
      <SiteFooter />
    </>
  );
}
