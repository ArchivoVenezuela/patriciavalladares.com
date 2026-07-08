import { Container } from "@/components/layout/Container";
import { MdxBody } from "@/components/mdx/MdxContent";
import { PageHeader } from "@/components/editorial/PageHeader";
import { Section } from "@/components/editorial/Section";
import { getBiographyContent, sectionTitles, TODO } from "@/lib/content";

const biography = getBiographyContent();

export const metadata = { title: "Biography" };

export default async function AboutPage() {
  return (
    <Container className="py-12 md:py-16">
      <PageHeader
        kicker={biography.frontmatter.kicker ?? sectionTitles.biography}
        title={biography.frontmatter.title}
        description={biography.paragraphs[1]}
        folioLabel={biography.frontmatter.folioLabel ?? "Biography — 01"}
      />

      <Section kicker={sectionTitles.biography} title={sectionTitles.biography} number="01">
        <MdxBody
          body={biography.body}
          className="max-w-3xl leading-relaxed text-ink-muted"
        />
      </Section>

      <Section kicker="Languages" title="Languages" number="02">
        <p className="max-w-3xl text-sm text-ink-muted">{TODO}</p>
      </Section>

      <Section kicker="Education" title="Education" number="03">
        <p className="max-w-3xl text-sm text-ink-muted">{TODO}</p>
      </Section>
    </Container>
  );
}
