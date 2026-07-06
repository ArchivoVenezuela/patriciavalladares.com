import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/editorial/PageHeader";
import { Section } from "@/components/editorial/Section";
import { ProjectCard } from "@/components/content/ProjectCard";
import {
  draftResearchProgram,
  draftSectionTitles,
  TODO,
} from "@/content/draft";
import {
  flagshipProjects,
  infrastructureProjects,
} from "@/content/projects";

export const metadata = { title: "Research Projects" };

export default function ProjectsPage() {
  return (
    <Container className="py-12 md:py-16">
      <PageHeader
        kicker={draftSectionTitles.researchProjects}
        title={draftSectionTitles.researchProjects}
        description={draftResearchProgram.paragraphs[1]}
        folioLabel="Projects — 01"
      />

      <Section kicker="Projects" title={draftSectionTitles.researchProjects} number="01">
        <div className="grid gap-6 md:grid-cols-2">
          {flagshipProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>

      <Section kicker="Tools" title="Applied Platforms & Tools" number="02">
        <p className="mb-8 max-w-2xl text-sm text-ink-muted">{TODO}</p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {infrastructureProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>
    </Container>
  );
}
