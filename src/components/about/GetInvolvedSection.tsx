import { ButtonLink } from "@/components/ui/ButtonLink";
import { getInvolved } from "@/content/about";

export function GetInvolvedSection() {
  return (
    <section className="bg-surface px-6 py-8 text-center md:px-16">
      <div className="mx-auto flex max-w-md flex-col items-center gap-4">
        <p className="font-[family-name:var(--font-body)] text-lg font-bold leading-snug text-mpm-text">
          {getInvolved.lines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </p>
        <ButtonLink
          href={getInvolved.cta.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {getInvolved.cta.label}
        </ButtonLink>
      </div>
    </section>
  );
}
