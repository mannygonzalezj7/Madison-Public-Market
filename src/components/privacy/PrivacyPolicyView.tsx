import { AccentBar } from "@/components/ui/AccentBar";
import { privacy } from "@/content/privacy";

export function PrivacyPolicyView() {
  return (
    <section className="bg-secondary px-6 py-16 md:px-16 md:py-24">
      <article className="mx-auto max-w-[800px]">
        <h1 className="font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3.5rem)] leading-none uppercase text-mpm-text">
          {privacy.title}
        </h1>
        <div className="mt-4">
          <AccentBar orientation="horizontal" className="w-[254px]" />
        </div>
        <p className="text-style-body mt-6 text-mpm-text">
          Effective Date: {privacy.effectiveDate}
          <br />
          Last Updated: {privacy.lastUpdated}
        </p>

        {privacy.intro.map((paragraph) => (
          <p key={paragraph.slice(0, 40)} className="text-style-body mt-4 text-mpm-text">
            {paragraph}
          </p>
        ))}

        {privacy.sections.map((section) => (
          <section key={section.title} className="mt-12">
            <h2 className="font-[family-name:var(--font-display)] text-2xl uppercase text-mpm-text md:text-3xl">
              {section.title}
            </h2>

            {"subsections" in section && section.subsections
              ? section.subsections.map((sub) => (
                  <div key={sub.title} className="mt-6">
                    <h3 className="font-[family-name:var(--font-body)] text-lg font-bold text-mpm-text">
                      {sub.title}
                    </h3>
                    <p className="text-style-body mt-2 text-mpm-text">{sub.body}</p>
                    {"bullets" in sub && sub.bullets ? (
                      <ul className="text-style-body mt-3 list-disc space-y-2 pl-5 text-mpm-text">
                        {sub.bullets.map((bullet) => (
                          <li key={bullet.slice(0, 48)}>{bullet}</li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                ))
              : null}

            {"body" in section && section.body ? (
              <p className="text-style-body mt-4 text-mpm-text">{section.body}</p>
            ) : null}

            {"paragraphs" in section && section.paragraphs
              ? section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 40)}
                    className="text-style-body mt-4 text-mpm-text"
                  >
                    {paragraph}
                  </p>
                ))
              : null}

            {"bullets" in section && section.bullets ? (
              <ul className="text-style-body mt-3 list-disc space-y-2 pl-5 text-mpm-text">
                {section.bullets.map((bullet) => (
                  <li key={bullet.slice(0, 48)}>{bullet}</li>
                ))}
              </ul>
            ) : null}

            {"paragraphsAfter" in section && section.paragraphsAfter
              ? section.paragraphsAfter.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 40)}
                    className="text-style-body mt-4 text-mpm-text"
                  >
                    {paragraph}
                  </p>
                ))
              : null}
          </section>
        ))}
      </article>
    </section>
  );
}
