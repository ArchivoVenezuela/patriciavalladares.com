import Link from "next/link";
import { EditorialContainer } from "@/components/design/EditorialContainer";
import { PlateKicker } from "@/components/ui/PlateKicker";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { homeNavLinks } from "@/content/home-nav";
import { siteConfig } from "@/content/site";

interface CorrespondenceFooterProps {
  /** Contact section heading from contact.mdx */
  contactTitle: string;
  /** Program label used in footer credit line + research nav link */
  programTitle: string;
}

export function CorrespondenceFooter({
  contactTitle,
  programTitle,
}: CorrespondenceFooterProps) {
  const year = new Date().getFullYear();
  const sectionLinks = homeNavLinks.filter((l) => l.id !== "contact");

  return (
    <footer id="contact" data-section="contact" className="scroll-anchor bg-forest section-x pb-[clamp(2.25rem,6vh,3.75rem)] pt-[clamp(4rem,11vh,8.75rem)] text-cream">
      <EditorialContainer className="!px-0">
        <div className="grid items-start gap-[clamp(2rem,5vw,4.25rem)] [grid-template-columns:repeat(auto-fit,minmax(240px,1fr))]">
          <div className="col-span-full max-w-[52ch]">
            <PlateKicker tone="gold-light" className="mb-[1.375rem]">{contactTitle}</PlateKicker>
            <SectionTitle id="contact-heading" as="h2" className="font-light text-[clamp(2.125rem,5.5vw,4.75rem)] leading-none text-paper">
              {contactTitle}
            </SectionTitle>
          </div>

          <div className="font-mono text-xs leading-[2.1] tracking-wide text-cream-muted">
            <div className="mb-2.5 text-[9.5px] uppercase tracking-[0.16em] text-gold-light">Email</div>
            <a href={`mailto:${siteConfig.email}`} className="border-b border-cream/30 text-paper no-underline">
              {siteConfig.email}
            </a>
            <div className="mt-2 text-ink-faint">
              {siteConfig.titleLine}
              <br />
              {siteConfig.department}
              <br />
              {siteConfig.affiliation}
            </div>
          </div>

          <nav aria-label="Homepage sections" className="font-mono text-xs leading-[2.1] tracking-wide text-cream-muted">
            <div className="mb-2.5 text-[9.5px] uppercase tracking-[0.16em] text-gold-light">Navigate</div>
            {sectionLinks.map((link) => (
              <a key={link.id} href={link.href} className="block text-cream-muted no-underline hover:text-paper">
                {link.label}
              </a>
            ))}
            <Link href="/research" className="mt-2 block text-cream-muted no-underline hover:text-paper">{programTitle}</Link>
            <Link href="/contact" className="block text-cream-muted no-underline hover:text-paper">{contactTitle}</Link>
          </nav>
        </div>

        <div className="mt-[clamp(2.75rem,8vh,5.25rem)] flex flex-wrap justify-between gap-4 border-t border-cream/20 pt-6 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-faint">
          <span>{siteConfig.name} — {programTitle}</span>
          <span>© {year}</span>
        </div>
      </EditorialContainer>
    </footer>
  );
}
