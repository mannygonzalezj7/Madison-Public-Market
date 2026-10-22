"use client";

import Image from "next/image";
import Link from "next/link";
import {
  getMerchantBySlug,
  getMerchantCardImage,
  getMerchantHref,
} from "@/content/merchants";
import type { Merchant } from "@/content/merchants";

const socialIcons = [
  {
    key: "instagram" as const,
    src: "/icons/social-instagram.svg",
    label: "Instagram",
    size: 22,
  },
  {
    key: "facebook" as const,
    src: "/icons/social-facebook.svg",
    label: "Facebook",
    size: 22,
  },
  {
    key: "google" as const,
    src: "/icons/social-google.svg",
    label: "Google",
    size: 19,
  },
];

export function MerchantCard({
  merchant,
  selected,
}: {
  merchant: Merchant;
  selected: boolean;
}) {
  const fullMerchant = getMerchantBySlug(merchant.slug) ?? merchant;
  const cardImage = getMerchantCardImage(fullMerchant);
  const href = getMerchantHref(merchant.slug);

  return (
    <article
      className={`flex w-full max-w-[340px] flex-col gap-2.5 ${
        selected ? "ring-2 ring-primary ring-offset-2 ring-offset-surface" : ""
      }`}
    >
      <Link href={href} className="group block">
        <div className="relative flex h-[298px] w-full flex-col items-center justify-center overflow-hidden bg-secondary px-3.5 py-16">
          <Image
            src={cardImage.src}
            alt={cardImage.alt}
            fill
            className="object-cover transition group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, 340px"
          />
          <div className="relative z-10 flex w-full max-w-[311px] items-center justify-between pointer-events-none">
            <Image
              src="/icons/arrow-left.svg"
              alt=""
              width={25}
              height={25}
              aria-hidden
              className="size-[25px] shrink-0"
            />
            <Image
              src="/icons/arrow-right.svg"
              alt=""
              width={25}
              height={25}
              aria-hidden
              className="size-[25px] shrink-0"
            />
          </div>
        </div>
      </Link>

      <div className="flex h-[23px] items-center justify-between px-4">
        <Link
          href={href}
          className="font-[family-name:var(--font-body)] text-base font-medium text-mpm-text hover:underline"
        >
          {fullMerchant.name}
        </Link>

        <div className="flex items-center gap-5">
          {socialIcons.map(({ key, src, label, size }) => {
            const href = fullMerchant.social?.[key];
            if (!href) return null;

            return (
              <a
                key={key}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${fullMerchant.name} on ${label}`}
                className="relative shrink-0"
                style={{ width: size, height: size }}
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  className="object-contain"
                  sizes={`${size}px`}
                />
              </a>
            );
          })}
        </div>
      </div>
    </article>
  );
}
