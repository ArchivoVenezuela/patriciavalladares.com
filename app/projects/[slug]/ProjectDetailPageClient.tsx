"use client";

import { useTina, tinaField } from "tinacms/dist/react";
import { ProjectDetailTemplate } from "@/components/projects/ProjectDetailTemplate";
import { tinaProjectToDetail } from "@/lib/tina/projects";
import type { ProjectQuery } from "@/tina/__generated__/types";

interface ProjectDetailPageClientProps {
  query: string;
  variables: { relativePath: string };
  data: ProjectQuery;
}

export function ProjectDetailPageClient(props: ProjectDetailPageClientProps) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const doc = data.project;
  const project = tinaProjectToDetail(doc);

  return (
    <ProjectDetailTemplate
      project={project}
      heroTinaFields={{
        title: tinaField(doc, "title"),
        subtitle: tinaField(doc, "subtitle"),
        summary: tinaField(doc, "body"),
      }}
    />
  );
}
