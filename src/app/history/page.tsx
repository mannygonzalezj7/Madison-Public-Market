import type { Metadata } from "next";
import { HistoryView } from "@/components/history/HistoryView";
import { SiteFooter } from "@/components/home/SiteFooter";
import { SiteHeader } from "@/components/home/SiteHeader";
import { historyPageMeta } from "@/content/history";

export const metadata: Metadata = {
  title: historyPageMeta.title,
  description: historyPageMeta.description,
};

export default function HistoryPage() {
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
        <HistoryView />
      </main>
      <SiteFooter />
    </>
  );
}
