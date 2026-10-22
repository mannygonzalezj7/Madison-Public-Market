import type { Metadata } from "next";
import { Koulen, Lalezar, Roboto } from "next/font/google";
import { siteMeta } from "@/content/home";
import "./globals.css";

const koulen = Koulen({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-koulen",
  display: "swap",
});

const lalezar = Lalezar({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-lalezar",
  display: "swap",
});

const roboto = Roboto({
  weight: ["400", "500", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: siteMeta.title,
  description: siteMeta.description,
  metadataBase: new URL(siteMeta.url),
  icons: {
    icon: "/favicon.webp",
  },
  openGraph: {
    title: siteMeta.title,
    description: siteMeta.description,
    url: siteMeta.url,
    siteName: "Madison Public Market",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${koulen.variable} ${lalezar.variable} ${roboto.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-body">{children}</body>
    </html>
  );
}
