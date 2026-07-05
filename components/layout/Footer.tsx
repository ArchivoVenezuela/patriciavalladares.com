import Link from "next/link";
import { navigation, siteConfig } from "@/content/site";
import { Container } from "./Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-cream/20 bg-forest text-cream">
      <Container className="py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1fr_1.5fr]">
          <div>
            <p className="font-serif text-lg font-medium text-paper">
              {siteConfig.name}
            </p>
            <p className="mt-2 max-w-sm font-mono text-xs leading-relaxed text-cream-muted">
              {siteConfig.titleLine}
              <br />
              {siteConfig.affiliation}
            </p>
          </div>
          <nav aria-label="Footer navigation">
            <ul className="columns-1 gap-x-8 font-mono text-xs sm:columns-2">
              {navigation.map((item) => (
                <li key={item.href} className="mb-2 break-inside-avoid">
                  <Link
                    href={item.href}
                    className="text-cream-muted no-underline transition-colors hover:text-paper"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="mt-10 border-t border-cream/20 pt-6 font-mono text-[10px] uppercase tracking-widest text-ink-faint">
          © {year} {siteConfig.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
