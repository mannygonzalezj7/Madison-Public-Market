import type { Metadata } from "next";
import { ArtworkView } from "@/components/artwork/ArtworkView";
import { SiteFooter } from "@/components/home/SiteFooter";
import { SiteHeader } from "@/components/home/SiteHeader";
import { artworkPageMeta } from "@/content/artwork";

export const metadata: Metadata = {
  title: artworkPageMeta.title,
  description: artworkPageMeta.description,
};

export default function ArtworkPage() {
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
        <ArtworkView />
      </main>
      <SiteFooter />
    </>
  );
}
