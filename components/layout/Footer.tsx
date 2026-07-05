import Link from "next/link";
import { navigation, siteConfig } from "@/content/site";
import { Container } from "./Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border bg-ink-band text-paper">
      <Container className="py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1fr_1.5fr]">
          <div>
            <p className="font-display text-lg font-semibold">
              {siteConfig.name}
            </p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-paper/70">
              {siteConfig.titleLine}
              <br />
              {siteConfig.affiliation}
            </p>
          </div>
          <nav aria-label="Footer navigation">
            <ul className="columns-1 gap-x-8 sm:columns-2">
              {navigation.map((item) => (
                <li key={item.href} className="mb-2 break-inside-avoid">
                  <Link
                    href={item.href}
                    className="text-sm text-paper/70 transition-colors hover:text-paper"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="mt-10 border-t border-paper/10 pt-6 text-xs text-paper/50">
          © {year} {siteConfig.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
