import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/** True when copy is a manuscript placeholder, not approved text */
export function isPendingCopy(value: string): boolean {
  return (
    value === "—" ||
    value.startsWith("[TODO") ||
    value.includes("Copy not provided in Texto para la web.md")
  );
}
