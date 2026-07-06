"use client";

import { useEffect, useState } from "react";

const NAV_SECTION_IDS = new Set([
  "hero",
  "projects",
  "themes",
  "inquiry",
  "archive",
  "ai",
  "publications",
  "contact",
]);

export function useSectionObserver() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("[data-section]");
    const visible = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("data-section");
          if (!id) return;
          if (entry.isIntersecting) {
            visible.set(id, entry.intersectionRatio);
          } else {
            visible.delete(id);
          }
        });

        const navMatch = [...visible.entries()]
          .filter(([id]) => NAV_SECTION_IDS.has(id))
          .sort((a, b) => b[1] - a[1]);

        if (navMatch.length > 0) {
          setActive(navMatch[0][0]);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.1, 0.25, 0.5] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return active;
}
