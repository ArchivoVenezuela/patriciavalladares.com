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
    <header className="sticky top-0 z-50 border-b border-border bg-paper/95 backdrop-blur-sm">
      <Container className="flex items-center justify-between gap-4 py-4">
        <Link
          href="/"
          className="shrink-0 font-display text-lg font-semibold tracking-tight text-ink hover:text-oxblood"
        >
          {siteConfig.wordmark}
        </Link>

        <nav aria-label="Main navigation" className="hidden lg:block">
          <NavLinks variant="desktop" />
        </nav>

        <button
          type="button"
          className={cn(
            "lg:hidden rounded px-3 py-2 text-sm font-medium text-ink",
            "border border-border bg-surface hover:border-border-strong",
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
          className="border-t border-border bg-surface lg:hidden"
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
