import type { ComponentProps } from "react";

type ButtonLinkProps = ComponentProps<"a"> & {
  variant?: "primary" | "on-dark";
};

/** Shared CTA button — equal top/bottom padding (py-3) and horizontal px-9 */
export function ButtonLink({
  className = "",
  variant = "primary",
  children,
  ...props
}: ButtonLinkProps) {
  const base =
    "text-style-nav inline-flex items-center justify-center px-9 py-3 text-center uppercase tracking-wide transition hover:brightness-95";
  const styles = "bg-primary text-text-inverse";

  return (
    <a className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </a>
  );
}
