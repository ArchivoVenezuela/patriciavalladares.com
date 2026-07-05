"use client";

import { usePathname } from "next/navigation";
import { Footer } from "./Footer";
import { Header } from "./Header";

interface SiteShellProps {
  children: React.ReactNode;
}

export function SiteShell({ children }: SiteShellProps) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      {!isHome && <Header />}
      <main id="main-content" className="flex-1">
        {children}
      </main>
      {!isHome && <Footer />}
    </>
  );
}
