import { siteConfig, socialLinks } from "@/content/site";
import type { Publication } from "@/lib/types";

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.titleLine,
    affiliation: {
      "@type": "Organization",
      name: siteConfig.affiliation,
    },
    email: siteConfig.email,
    url: siteConfig.url,
    sameAs: [
      socialLinks.googleScholar !== "#" ? socialLinks.googleScholar : null,
      socialLinks.orcid !== "#" ? socialLinks.orcid : null,
      socialLinks.archivoVenezuela,
    ].filter(Boolean),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    inLanguage: siteConfig.locale,
    author: {
      "@type": "Person",
      name: siteConfig.name,
    },
  };
}

export function scholarlyArticleJsonLd(publication: Publication) {
  return {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    headline: publication.title,
    datePublished: publication.year !== "—" ? publication.year : undefined,
    isPartOf: {
      "@type": "Periodical",
      name: publication.venue,
    },
    author: {
      "@type": "Person",
      name: siteConfig.name,
    },
  };
}
