import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Callout } from "@/components/mdx/Callout";
import { Figure } from "@/components/mdx/Figure";
import { PullQuote } from "@/components/mdx/PullQuote";

function createHeading(level: 2 | 3 | 4) {
  const Tag = `h${level}` as const;

  return function MdxHeading({
    children,
    id,
  }: {
    children?: ReactNode;
    id?: string;
  }) {
    const className =
      level === 2
        ? "font-serif text-2xl font-normal text-ink"
        : level === 3
          ? "font-serif text-xl font-normal text-ink"
          : "font-serif text-lg font-normal text-ink";

    return (
      <Tag id={id} className={className}>
        {children}
      </Tag>
    );
  };
}

export const mdxComponents = {
  h1: createHeading(2),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  p: ({ children }: { children?: ReactNode }) => (
    <p className="m-0 leading-relaxed text-ink-body">{children}</p>
  ),
  ul: ({ children }: { children?: ReactNode }) => (
    <ul className="list-disc space-y-2 pl-5 text-ink-body">{children}</ul>
  ),
  ol: ({ children }: { children?: ReactNode }) => (
    <ol className="list-decimal space-y-2 pl-5 text-ink-body">{children}</ol>
  ),
  li: ({ children }: { children?: ReactNode }) => <li>{children}</li>,
  blockquote: ({ children }: { children?: ReactNode }) => (
    <blockquote className="border-l-2 border-gold pl-4 font-serif italic text-ink">
      {children}
    </blockquote>
  ),
  a: ({ href, children }: { href?: string; children?: ReactNode }) => {
    if (!href) return <span>{children}</span>;
    const external = href.startsWith("http");
    return (
      <Link
        href={href}
        className="text-link"
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {children}
      </Link>
    );
  },
  img: ({ src, alt }: { src?: string; alt?: string }) => {
    if (!src) return null;
    return (
      <Image
        src={src}
        alt={alt ?? ""}
        width={1200}
        height={800}
        className="h-auto w-full"
      />
    );
  },
  table: ({ children }: { children?: ReactNode }) => (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-sm">{children}</table>
    </div>
  ),
  th: ({ children }: { children?: ReactNode }) => (
    <th className="border border-border px-3 py-2 text-left font-medium">
      {children}
    </th>
  ),
  td: ({ children }: { children?: ReactNode }) => (
    <td className="border border-border px-3 py-2">{children}</td>
  ),
  Callout,
  Figure,
  PullQuote,
};
