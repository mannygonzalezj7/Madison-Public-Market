import { newsletter } from "@/content/about";

/**
 * Sitewide newsletter band — button to Mailchimp only (no email input).
 * Matches post-edit “STAY IN THE LOOP” screenshot.
 */
export function NewsletterSection() {
  return (
    <section
      className="px-6 py-12 md:px-16 md:py-16"
      style={{
        backgroundImage:
          "linear-gradient(105deg, #597f71 1%, #de8b27 60%, #d45928 117%)",
      }}
    >
      <div className="mx-auto flex max-w-[900px] flex-col items-center gap-6 text-center">
        <h2 className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,6vw,4.85rem)] uppercase leading-none text-text-inverse">
          {newsletter.title}
        </h2>
        <p className="text-style-body max-w-xl text-text-inverse">
          {newsletter.body}
        </p>
        <a
          href={newsletter.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-style-nav inline-flex min-h-[56px] items-center justify-center border-[5px] border-accent bg-secondary px-12 py-3 text-accent uppercase shadow-[0_4px_8px_rgba(0,0,0,0.2)] transition hover:brightness-95"
        >
          {newsletter.ctaLabel}
        </a>
      </div>
    </section>
  );
}
