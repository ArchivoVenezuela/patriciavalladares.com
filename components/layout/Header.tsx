"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";
import { Container } from "./Container";
import { NavLinks } from "./NavLinks";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-paper/90 backdrop-blur-sm">
      <Container className="flex items-center justify-between gap-4 py-3.5">
        <Link
          href="/"
          className="flex shrink-0 flex-col gap-0.5 no-underline"
        >
          <span className="font-serif text-lg font-medium tracking-wide text-ink hover:text-oxblood">
            {siteConfig.wordmark}
          </span>
          <span className="font-mono text-[9px] uppercase tracking-[0.28em] text-gold">
            Research Program
          </span>
        </Link>

        <nav aria-label="Main navigation" className="hidden lg:block">
          <NavLinks variant="desktop" />
        </nav>

        <button
          type="button"
          className={cn(
            "rounded-sm border border-border-strong px-3 py-2 font-mono text-[10px] uppercase tracking-widest text-ink lg:hidden",
            "hover:border-oxblood",
          )}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav-panel"
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? "Close" : "Menu"}
        </button>
      </Container>

      {mobileOpen && (
        <nav
          id="mobile-nav-panel"
          aria-label="Mobile navigation"
          className="border-t border-border bg-paper lg:hidden"
        >
          <Container className="py-4">
            <NavLinks
              variant="mobile"
              onNavigate={() => setMobileOpen(false)}
            />
          </Container>
        </nav>
      )}
    </header>
  );
}
