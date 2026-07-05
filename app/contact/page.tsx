import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/editorial/PageHeader";
import { siteConfig } from "@/content/site";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <Container className="py-12 md:py-16">
      <PageHeader
        kicker="Contact"
        title="Contact"
        description="Contact information pending."
      />
      <dl className="space-y-4 text-ink-muted">
        <div>
          <dt className="text-xs font-medium uppercase tracking-wider text-ink">
            Email
          </dt>
          <dd className="mt-1">
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-oxblood hover:underline"
            >
              {siteConfig.email}
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-xs font-medium uppercase tracking-wider text-ink">
            CV
          </dt>
          <dd className="mt-1">
            <a
              href={siteConfig.cvUrl}
              className="text-oxblood hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV (placeholder)
            </a>
          </dd>
        </div>
      </dl>
    </Container>
  );
}
