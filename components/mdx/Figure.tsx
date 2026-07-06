import Image from "next/image";

interface FigureProps {
  src: string;
  alt: string;
  caption?: string;
  number?: string;
}

export function Figure({ src, alt, caption, number }: FigureProps) {
  return (
    <figure className="my-8">
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={800}
        className="h-auto w-full border border-border"
      />
      {caption && (
        <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-muted">
          {number ? `${number} — ${caption}` : caption}
        </figcaption>
      )}
    </figure>
  );
}
