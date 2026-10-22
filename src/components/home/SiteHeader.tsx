"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { nav } from "@/content/home";

const btnClass =
  "text-style-nav inline-flex items-center justify-center px-9 py-3 text-center uppercase tracking-wide";

function NavDropdownItem({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <li>
      <a
        href={href}
        className={`${btnClass} w-[11.5rem] bg-[#1e1e1e] text-text-inverse shadow-[0_4px_2px_rgba(0,0,0,0.25)] [text-shadow:0_4px_4px_rgba(0,0,0,0.25)] transition hover:brightness-110 focus-visible:brightness-110`}
      >
        {label}
      </a>
    </li>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-stroke/60 bg-secondary">
      <nav
        className="hidden w-full items-center justify-between px-6 py-4 desktop:flex tablet:px-10 desktop:px-12"
        aria-label="Primary"
      >
        <Link href="/" className="relative h-16 w-16 shrink-0">
          <Image
            src={nav.logo.src}
            alt={nav.logo.alt}
            fill
            className="object-contain"
            sizes="64px"
            priority
          />
        </Link>

        {nav.links.map((item) =>
          "children" in item && item.children ? (
            <div key={item.label} className="group relative shrink-0">
              <a
                href={item.href}
                className="text-style-nav text-mpm-text transition hover:text-primary"
              >
                {item.label}
              </a>
              <ul className="invisible absolute left-1/2 top-full z-10 flex -translate-x-1/2 flex-col opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                {item.children.map((child) => (
                  <NavDropdownItem
                    key={child.label}
                    href={child.href}
                    label={child.label}
                  />
                ))}
              </ul>
            </div>
          ) : (
            <a
              key={item.label}
              href={item.href}
              className="text-style-nav shrink-0 text-mpm-text transition hover:text-primary"
            >
              {item.label}
            </a>
          ),
        )}

        <a
          href={nav.donate.href}
          className={`${btnClass} shrink-0 bg-primary text-text-inverse shadow-[0_4px_2px_rgba(0,0,0,0.25)] transition hover:brightness-95`}
        >
          {nav.donate.label}
        </a>
      </nav>

      <div className="flex w-full items-center justify-between px-4 py-3 desktop:hidden">
        <Link href="/" className="relative h-12 w-12 shrink-0">
          <Image
            src={nav.logo.src}
            alt={nav.logo.alt}
            fill
            className="object-contain"
            sizes="48px"
            priority
          />
        </Link>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-4 w-5" aria-hidden="true">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 bg-mpm-text transition ${open ? "top-1.5 rotate-45" : ""}`}
            />
            <span
              className={`absolute left-0 top-1.5 h-0.5 w-5 bg-mpm-text transition ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`absolute left-0 top-3 h-0.5 w-5 bg-mpm-text transition ${open ? "top-1.5 -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-t border-stroke bg-secondary desktop:hidden">
          <ul className="flex flex-col px-4 py-3">
            {nav.links.map((item) => (
              <li key={item.label} className="border-b border-stroke py-3">
                {"children" in item && item.children ? (
                  <div>
                    <button
                      type="button"
                      className="text-style-nav flex w-full items-center justify-between text-left"
                      aria-expanded={mobileSection === item.label}
                      onClick={() =>
                        setMobileSection((current) =>
                          current === item.label ? null : item.label,
                        )
                      }
                    >
                      {item.label}
                      <span aria-hidden="true">
                        {mobileSection === item.label ? "−" : "+"}
                      </span>
                    </button>
                    {mobileSection === item.label ? (
                      <ul className="mt-3 flex flex-col gap-2">
                        {item.children.map((child) => (
                          <li key={child.label}>
                            <a
                              href={child.href}
                              className={`${btnClass} w-full max-w-[11.5rem] bg-[#1e1e1e] text-text-inverse shadow-[0_4px_2px_rgba(0,0,0,0.25)] [text-shadow:0_4px_4px_rgba(0,0,0,0.25)]`}
                            >
                              {child.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                ) : (
                  <a href={item.href} className="text-style-nav block">
                    {item.label}
                  </a>
                )}
              </li>
            ))}
            <li className="py-4">
              <a
                href={nav.donate.href}
                className={`${btnClass} bg-primary text-text-inverse shadow-[0_4px_2px_rgba(0,0,0,0.25)]`}
              >
                {nav.donate.label}
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
