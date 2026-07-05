import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface EditorialContainerProps {
  children: ReactNode;
  className?: string;
  narrow?: boolean;
}

export function EditorialContainer({
  children,
  className,
  narrow,
}: EditorialContainerProps) {
  return (
    <div
      className={cn(
        "editorial-container",
        narrow && "max-w-[68.75rem]",
        className,
      )}
    >
      {children}
    </div>
  );
}
