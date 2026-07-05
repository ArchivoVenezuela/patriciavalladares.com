import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/editorial/PageHeader";
import { getProjectBySlug, projects } from "@/content/projects";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project not found" };
  return { title: project.title };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <Container className="py-12 md:py-16">
      <PageHeader
        kicker={project.category}
        title={project.title}
        description={project.tagline}
      />
      <p className="text-ink-muted">{project.summary}</p>
      <p className="mt-4 text-sm text-ink-muted">
        Full project page content pending (Phase 2).
      </p>
    </Container>
  );
}
