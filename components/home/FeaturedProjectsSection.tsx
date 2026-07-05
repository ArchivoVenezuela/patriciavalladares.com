import Link from "next/link";
import { featuredHomeProjects } from "@/content/projects";
import { ProjectCard } from "@/components/content/ProjectCard";
import { Kicker } from "@/components/editorial/Kicker";
import { Rule } from "@/components/editorial/Rule";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";

export function FeaturedProjectsSection() {
  return (
    <section className="py-section md:py-section-lg" aria-labelledby="featured-projects">
      <Container>
        <Reveal>
          <Kicker className="mb-2">Projects</Kicker>
          <h2
            id="featured-projects"
            className="font-display text-section font-medium text-ink"
          >
            Featured Projects
          </h2>
          <Rule className="mt-5 max-w-xs" />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {featuredHomeProjects.map((project) => (
            <Reveal key={project.slug}>
              <ProjectCard
                project={project}
                featured={project.slug === "archivo-venezuela"}
              />
            </Reveal>
          ))}
        </div>
        <p className="mt-10">
          <Link href="/projects" className="text-link text-sm font-medium">
            View all projects →
          </Link>
        </p>
      </Container>
    </section>
  );
}
