import { AccentBar } from "@/components/ui/AccentBar";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { merchantInterest } from "@/content/merchant-interest";

export function MerchantInterestView() {
  return (
    <>
      <section className="bg-accent px-6 py-16 md:px-16 md:py-24">
        <div className="mx-auto max-w-[800px] text-center text-text-inverse">
          <h1 className="font-[family-name:var(--font-display)] text-[clamp(2rem,6vw,4rem)] leading-none uppercase">
            {merchantInterest.title}
          </h1>
          <p className="mt-4 font-[family-name:var(--font-body)] text-lg md:text-xl">
            {merchantInterest.subtitle}
          </p>
          <div className="mt-6 flex justify-center">
            <AccentBar orientation="horizontal" className="w-[254px]" />
          </div>
        </div>
      </section>

      <section className="bg-surface px-6 py-12 md:px-16 md:py-16">
        <div className="mx-auto max-w-[720px] text-center">
          <p className="text-style-body text-mpm-text">{merchantInterest.body}</p>
          <p className="text-style-body mt-6 text-mpm-text">
            {merchantInterest.note}
          </p>

          {/* TODO: replace external Airtable CTA with native interest form (Supabase or Foundation workflow) */}
          <div className="mt-10">
            <ButtonLink
              href={merchantInterest.formUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {merchantInterest.ctaLabel}
            </ButtonLink>
          </div>

          <ul className="mt-12 flex flex-wrap justify-center gap-6">
            {merchantInterest.related.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-style-link text-mpm-text underline hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
