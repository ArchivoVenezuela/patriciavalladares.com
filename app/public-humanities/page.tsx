import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/editorial/PageHeader";
import { Section } from "@/components/editorial/Section";
import { publicHumanitiesItems } from "@/content/publicHumanities";

export const metadata = { title: "Public Humanities" };

export default function PublicHumanitiesPage() {
  return (
    <Container className="py-12 md:py-16">
      <PageHeader
        kicker="Public Humanities"
        title="Public Humanities"
        description="Community-facing work and public engagement — content pending."
      />
      <Section title="Initiatives">
        <ul className="space-y-6">
          {publicHumanitiesItems.map((item) => (
            <li key={item.id}>
              <h3 className="font-display text-xl text-ink">{item.title}</h3>
              <p className="mt-2 text-ink-muted">{item.description}</p>
            </li>
          ))}
        </ul>
      </Section>
    </Container>
  );
}
