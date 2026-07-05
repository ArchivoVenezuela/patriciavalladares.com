import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/editorial/PageHeader";
import { Section } from "@/components/editorial/Section";
import { appliedProjects, flagshipProjects } from "@/content/projects";

export const metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <Container className="py-12 md:py-16">
      <PageHeader
        kicker="Projects"
        title="Projects"
        description="Flagship projects and applied platforms supporting multilingual knowledge infrastructures."
      />
      <Section kicker="Flagship" title="Flagship Projects">
        <ul className="space-y-4">
          {flagshipProjects.map((project) => (
            <li key={project.slug}>
              <Link
                href={`/projects/${project.slug}`}
                className="font-display text-xl text-oxblood hover:underline"
              >
                {project.title}
              </Link>
              <p className="mt-1 text-sm text-ink-muted">{project.summary}</p>
            </li>
          ))}
        </ul>
      </Section>
      <Section kicker="Infrastructure" title="Applied Platforms / Tools">
        <ul className="space-y-4">
          {appliedProjects.map((project) => (
            <li key={project.slug}>
              <Link
                href={`/projects/${project.slug}`}
                className="text-lg text-ink hover:text-oxblood"
              >
                {project.title}
              </Link>
              <p className="mt-1 text-sm text-ink-muted">{project.summary}</p>
            </li>
          ))}
        </ul>
      </Section>
    </Container>
  );
}
