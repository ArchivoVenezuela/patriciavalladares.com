import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/editorial/PageHeader";
import { Section } from "@/components/editorial/Section";
import { ProjectCard } from "@/components/content/ProjectCard";
import {
  flagshipProjects,
  infrastructureProjects,
} from "@/content/projects";

export const metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <Container className="py-12 md:py-16">
      <PageHeader
        kicker="Projects"
        title="Projects"
        description="Flagship research projects and applied platforms supporting multilingual knowledge infrastructures."
        folioLabel="Projects — 01"
      />

      <Section kicker="Flagship" title="Flagship Projects" number="01">
        <div className="grid gap-6 md:grid-cols-2">
          {flagshipProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>

      <Section
        kicker="Platforms"
        title="Applied Platforms & Tools"
        number="02"
      >
        <p className="mb-8 max-w-2xl text-sm text-ink-muted">
          Archival workflow tools and utilities that support flagship projects.
          Presented as applied platforms and supporting infrastructure, not
          headline research initiatives.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {infrastructureProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>
    </Container>
  );
}
