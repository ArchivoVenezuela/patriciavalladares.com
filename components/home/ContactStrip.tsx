import Link from "next/link";
import { Download } from "lucide-react";
import { cvNavItem, siteConfig, socialLinks } from "@/content/site";
import { Container } from "@/components/layout/Container";

export function ContactStrip() {
  return (
    <section
      className="border-t border-border py-10"
      aria-label="Contact and scholarly profiles"
    >
      <Container>
        <ul className="flex flex-col gap-4 font-mono text-xs uppercase tracking-widest text-ink-muted sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8 sm:gap-y-3">
          <li>
            <a href={`mailto:${siteConfig.email}`} className="text-link">
              {siteConfig.email}
            </a>
          </li>
          {socialLinks.orcid !== "#" && (
            <li>
              <a
                href={socialLinks.orcid}
                className="text-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                ORCID
              </a>
            </li>
          )}
          {socialLinks.googleScholar !== "#" && (
            <li>
              <a
                href={socialLinks.googleScholar}
                className="text-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Scholar
              </a>
            </li>
          )}
          <li>
            <Link href="/contact" className="text-link">
              Contact
            </Link>
          </li>
          <li>
            <a
              href={cvNavItem.href}
              className="inline-flex items-center gap-1.5 text-link"
            >
              CV
              <Download size={14} aria-hidden="true" />
            </a>
          </li>
        </ul>
      </Container>
    </section>
  );
}
