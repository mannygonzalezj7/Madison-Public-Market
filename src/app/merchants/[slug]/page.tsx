import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MerchantDetailView } from "@/components/merchants/MerchantDetailView";
import { SiteFooter } from "@/components/home/SiteFooter";
import { SiteHeader } from "@/components/home/SiteHeader";
import { getMerchantBySlug, merchants } from "@/content/merchants";

type MerchantPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return merchants.map((merchant) => ({ slug: merchant.slug }));
}

export async function generateMetadata({
  params,
}: MerchantPageProps): Promise<Metadata> {
  const { slug } = await params;
  const merchant = getMerchantBySlug(slug);

  if (!merchant) {
    return { title: "Merchant Not Found | Madison Public Market" };
  }

  return {
    title: `${merchant.name} | Madison Public Market`,
    description:
      merchant.about ??
      `Visit ${merchant.name} at the Madison Public Market.`,
  };
}

export default async function MerchantDetailPage({ params }: MerchantPageProps) {
  const { slug } = await params;
  const merchant = getMerchantBySlug(slug);

  if (!merchant) {
    notFound();
  }

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
        <MerchantDetailView merchant={merchant} />
      </main>
      <SiteFooter />
    </>
  );
}
