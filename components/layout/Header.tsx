import Link from "next/link";
import { cvNavItem, navigation, siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-paper/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link
          href="/"
          className="font-display text-lg font-semibold text-ink hover:text-oxblood"
        >
          {siteConfig.name}
        </Link>

        <nav aria-label="Main navigation" className="hidden lg:block">
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-ink-muted transition-colors hover:text-oxblood"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={cvNavItem.href}
                className="text-sm font-medium text-oxblood hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {cvNavItem.label}
              </a>
            </li>
          </ul>
        </nav>

        <nav aria-label="Mobile navigation" className="lg:hidden">
          <details className="group">
            <summary
              className={cn(
                "cursor-pointer list-none text-sm font-medium text-ink",
                "[&::-webkit-details-marker]:hidden",
              )}
            >
              Menu
            </summary>
            <ul className="absolute right-6 top-full mt-2 min-w-56 rounded border border-border bg-surface p-4 shadow-sm">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block py-2 text-sm text-ink-muted hover:text-oxblood"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="border-t border-border pt-2 mt-2">
                <a
                  href={cvNavItem.href}
                  className="block py-2 text-sm font-medium text-oxblood"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {cvNavItem.label}
                </a>
              </li>
            </ul>
          </details>
        </nav>
      </div>
    </header>
  );
}
