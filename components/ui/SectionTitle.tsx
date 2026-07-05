import { cn } from "@/lib/utils";

type TitleSize = "default" | "large" | "archive" | "display";

const sizeClasses: Record<TitleSize, string> = {
  default: "section-title",
  large: "section-title section-title-lg",
  archive: "section-title section-title-archive",
  display: "hero-title",
};

interface SectionTitleProps {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3";
  size?: TitleSize;
  className?: string;
  id?: string;
}

export function SectionTitle({
  children,
  as: Tag = "h2",
  size = "default",
  className,
  id,
}: SectionTitleProps) {
  return (
    <Tag id={id} className={cn("m-0", sizeClasses[size], className)}>
      {children}
    </Tag>
  );
}
