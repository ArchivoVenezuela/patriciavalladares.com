import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { ProjectDetailPageClient } from "./ProjectDetailPageClient";
import { client } from "@/tina/__generated__/client";
import {
  findProjectRelativePath,
  projectSummaryFromTina,
} from "@/lib/tina/projects";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const result = await client.queries.projectConnection();
  const nodes = (result.data.projectConnection.edges ?? [])
    .map((e) => e?.node)
    .filter((n): n is NonNullable<typeof n> => Boolean(n));

  return nodes.map((node) => ({ slug: node.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const connectionResult = await client.queries.projectConnection();
  const relativePath = findProjectRelativePath(
    connectionResult.data.projectConnection.edges,
    slug,
  );
  if (!relativePath) return { title: "Project not found" };

  const result = await client.queries.project({ relativePath });
  return {
    title: result.data.project.title,
    description: projectSummaryFromTina(result.data.project),
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const connectionResult = await client.queries.projectConnection();
  const relativePath = findProjectRelativePath(
    connectionResult.data.projectConnection.edges,
    slug,
  );
  if (!relativePath) notFound();

  const result = await client.queries.project({ relativePath });

  return (
    <Container className="py-12 md:py-16">
      <ProjectDetailPageClient
        query={result.query}
        variables={result.variables}
        data={result.data}
      />
    </Container>
  );
}
