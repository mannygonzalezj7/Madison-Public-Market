import type { Metadata } from "next";
import { DownloadAppView } from "@/components/download/DownloadAppView";
import { SiteFooter } from "@/components/home/SiteFooter";
import { SiteHeader } from "@/components/home/SiteHeader";
import { downloadPageMeta } from "@/content/download";

export const metadata: Metadata = {
  title: downloadPageMeta.title,
  description: downloadPageMeta.description,
};

export default function DownloadPage() {
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
        <DownloadAppView />
      </main>
      <SiteFooter />
    </>
  );
}
