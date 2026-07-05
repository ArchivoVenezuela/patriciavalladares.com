"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cvNavItem, navigation } from "@/content/site";
import { cn } from "@/lib/utils";

function isActiveRoute(href: string, pathname: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

interface NavLinksProps {
  variant: "desktop" | "mobile";
  onNavigate?: () => void;
}

export function NavLinks({ variant, onNavigate }: NavLinksProps) {
  const pathname = usePathname();

  const linkClass = (href: string) =>
    cn(
      "transition-colors",
      variant === "desktop"
        ? "text-[0.8125rem] leading-snug"
        : "block py-2.5 text-sm",
      isActiveRoute(href, pathname)
        ? "font-medium text-oxblood"
        : "text-ink-muted hover:text-oxblood",
    );

  if (variant === "desktop") {
    return (
      <ul className="flex flex-wrap items-center justify-end gap-x-4 gap-y-1 xl:gap-x-5">
        {navigation.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={linkClass(item.href)}
              aria-current={isActiveRoute(item.href, pathname) ? "page" : undefined}
              title={item.shortLabel ? item.label : undefined}
            >
              {item.shortLabel ?? item.label}
            </Link>
          </li>
        ))}
        <li>
          <a
            href={cvNavItem.href}
            className="btn btn-outline ml-1 px-3 py-1.5 text-[0.8125rem]"
            target="_blank"
            rel="noopener noreferrer"
          >
            {cvNavItem.label}
          </a>
        </li>
      </ul>
    );
  }

  return (
    <ul>
      {navigation.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className={linkClass(item.href)}
            aria-current={isActiveRoute(item.href, pathname) ? "page" : undefined}
            onClick={onNavigate}
          >
            {item.label}
          </Link>
        </li>
      ))}
      <li className="mt-3 border-t border-border pt-3">
        <a
          href={cvNavItem.href}
          className="btn btn-primary w-full"
          target="_blank"
          rel="noopener noreferrer"
          onClick={onNavigate}
        >
          Download {cvNavItem.label}
        </a>
      </li>
    </ul>
  );
}
