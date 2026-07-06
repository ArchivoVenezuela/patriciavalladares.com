import type { ProjectLink } from "@/lib/types";
import { TODO } from "@/content/draft";

interface ProjectLinksProps {
  links: ProjectLink[];
}

export function ProjectLinks({ links }: ProjectLinksProps) {
  if (links.length === 0) {
    return <p className="text-sm text-ink-muted">{TODO}</p>;
  }

  return (
    <ul className="flex flex-wrap gap-4">
      {links.map((link) => (
        <li key={link.url}>
          <a
            href={link.url}
            className="btn btn-outline"
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
          >
            {link.label}
            {link.external && (
              <span className="sr-only"> (opens in new tab)</span>
            )}
          </a>
        </li>
      ))}
    </ul>
  );
}
