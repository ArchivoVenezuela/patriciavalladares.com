import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/editorial/PageHeader";
import { contactContent } from "@/content/contact";
import { cvNavItem, siteConfig, socialLinks } from "@/content/site";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <Container className="py-12 md:py-16">
      <PageHeader
        kicker="Contact"
        title="Contact"
        description={contactContent.intro}
        folioLabel="Contact — 01"
      />

      <dl className="grid gap-8 sm:grid-cols-2 max-w-3xl">
        <div>
          <dt className="text-kicker">Affiliation</dt>
          <dd className="mt-2 text-ink">
            <p className="font-medium">{siteConfig.name}</p>
            <p className="mt-1 text-sm text-ink-muted">{siteConfig.titleLine}</p>
            <p className="text-sm text-ink-muted">{siteConfig.department}</p>
            <p className="text-sm text-ink-muted">{siteConfig.affiliation}</p>
          </dd>
        </div>
        <div>
          <dt className="text-kicker">Email</dt>
          <dd className="mt-2">
            <a href={`mailto:${siteConfig.email}`} className="text-link">
              {siteConfig.email}
            </a>
          </dd>
          {siteConfig.phone && (
            <>
              <dt className="text-kicker mt-6">Phone</dt>
              <dd className="mt-2 text-ink-muted">{siteConfig.phone}</dd>
            </>
          )}
        </div>
        <div>
          <dt className="text-kicker">CV</dt>
          <dd className="mt-2">
            <a href={cvNavItem.href} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
              Download CV
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-kicker">External links</dt>
          <dd className="mt-2">
            <ul className="space-y-2 text-sm">
              <li>
                <a href={socialLinks.archivoVenezuela} className="text-link" target="_blank" rel="noopener noreferrer">
                  Archivo Venezuela
                </a>
              </li>
              <li>
                <a href={socialLinks.googleScholar} className="text-link">
                  Google Scholar (link pending)
                </a>
              </li>
              <li>
                <a href={socialLinks.orcid} className="text-link">
                  ORCID (link pending)
                </a>
              </li>
            </ul>
          </dd>
        </div>
      </dl>
      {contactContent.officeNote && (
        <p className="mt-10 text-sm text-ink-muted">{contactContent.officeNote}</p>
      )}
    </Container>
  );
}
