import type { Metadata } from "next";
import { SiteFooter } from "@/components/home/SiteFooter";
import { SiteHeader } from "@/components/home/SiteHeader";
import { PrivacyPolicyView } from "@/components/privacy/PrivacyPolicyView";
import { privacyPageMeta } from "@/content/privacy";

export const metadata: Metadata = {
  title: privacyPageMeta.title,
  description: privacyPageMeta.description,
};

export default function PrivacyPolicyPage() {
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
        <PrivacyPolicyView />
      </main>
      <SiteFooter />
    </>
  );
}
