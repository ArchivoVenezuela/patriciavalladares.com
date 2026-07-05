import Link from "next/link";
import { cn } from "@/lib/utils";

interface SectionLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function SectionLink({ href, children, className }: SectionLinkProps) {
  return (
    <p className={cn("mt-6", className)}>
      <Link href={href} className="text-link text-sm font-medium">
        {children} →
      </Link>
    </p>
  );
}
