import { MDXRemote } from "next-mdx-remote/rsc";
import type { ReactNode } from "react";
import { mdxComponents } from "@/components/mdx/mdx-components";
import { cn } from "@/lib/utils";

interface MdxContentProps {
  source: string;
  className?: string;
}

export async function MdxContent({ source, className }: MdxContentProps) {
  if (!source.trim()) return null;

  return (
    <div className={cn("space-y-6", className)}>
      <MDXRemote source={source} components={mdxComponents} />
    </div>
  );
}

interface MdxParagraphsProps {
  paragraphs: string[];
  className?: string;
  paragraphClassName?: string;
}

export function MdxParagraphs({
  paragraphs,
  className,
  paragraphClassName,
}: MdxParagraphsProps) {
  return (
    <div className={cn("space-y-6", className)}>
      {paragraphs.map((paragraph) => (
        <p
          key={paragraph.slice(0, 48)}
          className={cn("m-0", paragraphClassName)}
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
}

interface MdxBodyProps {
  body: string;
  className?: string;
}

export async function MdxBody({ body, className }: MdxBodyProps) {
  return <MdxContent source={body} className={className} />;
}
