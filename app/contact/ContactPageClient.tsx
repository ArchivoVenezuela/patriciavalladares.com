"use client";

import { useTina, tinaField } from "tinacms/dist/react";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/editorial/PageHeader";
import { extractParagraphTexts } from "@/lib/tina/richText";
import { cvNavItem, siteConfig } from "@/content/site";
import type { ContactQuery } from "@/tina/__generated__/types";

interface ContactPageClientProps {
  query: string;
  variables: { relativePath: string };
  data: ContactQuery;
}

/**
 * Visual-editing client shell for /contact.
 * Prose/labels from Tina; identity VALUES from content/site.ts.
 */
export function ContactPageClient(props: ContactPageClientProps) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const doc = data.contact;
  const paragraphs = extractParagraphTexts(doc.body);
  const description = paragraphs[0];
  const externalLinks = (doc.externalLinks ?? []).filter(
    (l): l is NonNullable<typeof l> => Boolean(l),
  );

  return (
    <Container className="py-12 md:py-16">
      <PageHeader
        kicker={doc.kicker}
        title={doc.title}
        description={description}
        folioLabel={doc.folioLabel ?? "Contact — 01"}
        tinaFields={{
          kicker: tinaField(doc, "kicker"),
          title: tinaField(doc, "title"),
          folioLabel: tinaField(doc, "folioLabel"),
        }}
      />

      <dl className="grid max-w-3xl gap-8 sm:grid-cols-2">
        <div>
          <dt className="text-kicker" data-tina-field={tinaField(doc, "affiliationLabel")}>
            {doc.affiliationLabel}
          </dt>
          <dd className="mt-2 text-ink">
            <p className="font-medium">{siteConfig.name}</p>
            <p className="mt-1 text-sm text-ink-muted">{siteConfig.titleLine}</p>
            <p className="text-sm text-ink-muted">{siteConfig.department}</p>
            <p className="text-sm text-ink-muted">{siteConfig.affiliation}</p>
          </dd>
        </div>
        <div>
          <dt className="text-kicker" data-tina-field={tinaField(doc, "emailLabel")}>
            {doc.emailLabel}
          </dt>
          <dd className="mt-2">
            <a href={`mailto:${siteConfig.email}`} className="text-link">
              {siteConfig.email}
            </a>
          </dd>
          {siteConfig.phone && (
            <>
              <dt className="text-kicker mt-6" data-tina-field={tinaField(doc, "phoneLabel")}>
                {doc.phoneLabel}
              </dt>
              <dd className="mt-2 text-ink-muted">{siteConfig.phone}</dd>
            </>
          )}
        </div>
        <div>
          <dt className="text-kicker" data-tina-field={tinaField(doc, "cvLabel")}>
            {doc.cvLabel}
          </dt>
          <dd className="mt-2">
            <a
              href={cvNavItem.href}
              className="btn btn-outline"
              target="_blank"
              rel="noopener noreferrer"
              data-tina-field={tinaField(doc, "cvButtonLabel")}
            >
              {doc.cvButtonLabel}
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-kicker" data-tina-field={tinaField(doc, "linksLabel")}>
            {doc.linksLabel}
          </dt>
          <dd className="mt-2">
            <ul className="space-y-2 text-sm">
              {externalLinks.map((link) => (
                <li key={link.url}>
                  <a
                    href={link.url}
                    className="text-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </dd>
        </div>
      </dl>
    </Container>
  );
}
