import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CalloutProps {
  title?: string;
  children?: ReactNode;
}

export function Callout({ title, children }: CalloutProps) {
  return (
    <aside className="border border-border bg-paper-light px-5 py-4">
      {title && (
        <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.14em] text-gold">
          {title}
        </p>
      )}
      <div className="space-y-3 text-sm leading-relaxed text-ink-body">
        {children}
      </div>
    </aside>
  );
}
