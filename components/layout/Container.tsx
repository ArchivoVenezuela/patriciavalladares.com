import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "article";
  narrow?: boolean;
}

export function Container({
  children,
  className,
  as: Tag = "div",
  narrow = false,
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full px-6",
        narrow ? "max-w-[68.75rem]" : "max-w-[81.25rem]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
