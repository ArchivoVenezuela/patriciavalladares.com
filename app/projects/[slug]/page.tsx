import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { ProjectDetailTemplate } from "@/components/projects/ProjectDetailTemplate";
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
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <Container className="py-12 md:py-16">
      <ProjectDetailTemplate project={project} />
    </Container>
  );
}
