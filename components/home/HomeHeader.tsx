"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { homeNavLinks } from "@/content/homeDesign";
import { useSectionObserver } from "@/hooks/useSectionObserver";
import { cn } from "@/lib/utils";

export function HomeHeader() {
  const active = useSectionObserver();
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-border bg-paper/90 section-x py-3.5 backdrop-blur-sm">
      <Link href="#top" className="flex flex-col gap-0.5 no-underline">
        <span className="font-serif text-[19px] font-medium tracking-wide text-ink">
          Patricia&nbsp;Valladares-Ruiz
        </span>
        <span className="font-mono text-[9.5px] uppercase tracking-[0.34em] text-gold">
          Research&nbsp;Program
        </span>
      </Link>

      <nav
        aria-label="Homepage sections"
        className="hidden items-center gap-[clamp(0.75rem,1.8vw,1.625rem)] font-mono text-[10.5px] uppercase tracking-[0.18em] lg:flex"
      >
        {homeNavLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            className={cn(
              "no-underline transition-colors duration-300",
              link.id === "contact"
                ? "border border-border-strong px-3 py-1.5 text-ink"
                : active === link.id
                  ? "text-ink opacity-100"
                  : "text-ink-muted opacity-70 hover:text-ink hover:opacity-100",
            )}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <button
        type="button"
        className="border border-border-strong px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-ink lg:hidden"
        aria-expanded={mobileOpen}
        aria-controls="home-mobile-nav"
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
        onClick={() => setMobileOpen((o) => !o)}
      >
        {mobileOpen ? "Close" : "Menu"}
      </button>

      {mobileOpen && (
        <nav
          id="home-mobile-nav"
          ref={menuRef}
          aria-label="Mobile homepage sections"
          className="absolute inset-x-0 top-full border-b border-border bg-paper section-x py-4 lg:hidden"
        >
          <ul className="flex flex-col gap-3 font-mono text-[10px] uppercase tracking-[0.18em]">
            {homeNavLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className="text-ink-muted no-underline hover:text-ink"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
