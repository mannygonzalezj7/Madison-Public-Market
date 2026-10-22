"use client";

import Script from "next/script";
import { useEffect } from "react";
import { updates } from "@/content/home";
import { AccentBar } from "@/components/ui/AccentBar";

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

/** Live WP Updates — Instagram profile embed only (no custom tiles). */
export function UpdatesSection() {
  useEffect(() => {
    window.instgrm?.Embeds.process();
  }, []);

  return (
    <section className="relative bg-surface pb-16 pt-12" id="updates">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[45%] bg-primary"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-[1280px] px-5 tablet:px-8 desktop:px-12">
        <div className="mx-auto mb-8 flex w-fit flex-col items-center desktop:mb-12">
          <h2 className="text-style-primary text-center">{updates.title}</h2>
          <AccentBar className="mt-3" />
        </div>

        <div className="mx-auto w-full max-w-[540px]">
          <blockquote
            className="instagram-media"
            data-instgrm-permalink={updates.instagramPermalink}
            data-instgrm-version="14"
            style={{
              background: "#FFF",
              border: 0,
              borderRadius: 3,
              boxShadow:
                "0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)",
              margin: "1px auto",
              maxWidth: "100%",
              width: "100%",
              minWidth: 0,
              padding: 0,
            }}
          />
        </div>
      </div>

      <Script
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
        onLoad={() => {
          window.instgrm?.Embeds.process();
        }}
      />
    </section>
  );
}
