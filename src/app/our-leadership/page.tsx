import type { Metadata } from "next";
import { SiteFooter } from "@/components/home/SiteFooter";
import { SiteHeader } from "@/components/home/SiteHeader";
import { LeadershipView } from "@/components/leadership/LeadershipView";
import { leadershipPageMeta } from "@/content/leadership";

export const metadata: Metadata = {
  title: leadershipPageMeta.title,
  description: leadershipPageMeta.description,
};

export default function LeadershipPage() {
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
        <LeadershipView />
      </main>
      <SiteFooter />
    </>
  );
}
