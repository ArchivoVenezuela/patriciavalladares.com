import type { ResearchQuestion as ResearchQuestionType } from "@/lib/types";
import { cn } from "@/lib/utils";

interface ResearchQuestionProps {
  item: ResearchQuestionType;
  index?: number;
  className?: string;
}

export function ResearchQuestion({
  item,
  index,
  className,
}: ResearchQuestionProps) {
  return (
    <blockquote
      className={cn(
        "border-l-2 border-gold pl-6 font-display text-lg leading-relaxed text-ink",
        className,
      )}
    >
      {index !== undefined && (
        <span className="mr-2 text-sm text-gold tabular-nums" aria-hidden="true">
          {String(index).padStart(2, "0")}.
        </span>
      )}
      {item.question}
    </blockquote>
  );
}
