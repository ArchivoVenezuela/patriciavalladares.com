"use client";

import { useMemo, useState } from "react";
import type { Publication } from "@/lib/types";
import { PublicationEntry } from "@/components/content/PublicationEntry";

interface PublicationsFilterProps {
  publications: Publication[];
}

export function PublicationsFilter({ publications }: PublicationsFilterProps) {
  const topics = useMemo(
    () =>
      Array.from(
        new Set(
          publications
            .map((p) => p.topic)
            .filter((t): t is string => Boolean(t)),
        ),
      ).sort(),
    [publications],
  );

  const years = useMemo(
    () =>
      Array.from(new Set(publications.map((p) => p.year)))
        .filter((y) => y !== "—")
        .sort((a, b) => Number(b) - Number(a)),
    [publications],
  );

  const [topic, setTopic] = useState("");
  const [year, setYear] = useState("");

  const filtered = publications.filter((pub) => {
    if (topic && pub.topic !== topic) return false;
    if (year && pub.year !== year) return false;
    return true;
  });

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-4">
        <label className="flex flex-col gap-1 font-mono text-[10px] uppercase tracking-widest text-ink-faint">
          Topic
          <select
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="min-w-[12rem] border border-border bg-surface px-3 py-2 font-sans text-sm normal-case tracking-normal text-ink"
          >
            <option value="">All topics</option>
            {topics.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-1 font-mono text-[10px] uppercase tracking-widest text-ink-faint">
          Year
          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="min-w-[8rem] border border-border bg-surface px-3 py-2 font-sans text-sm normal-case tracking-normal text-ink"
          >
            <option value="">All years</option>
            {years.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="space-y-4 max-w-3xl">
        {filtered.length === 0 ? (
          <p className="text-sm text-ink-muted">No publications match the selected filters.</p>
        ) : (
          filtered.map((pub) => (
            <PublicationEntry key={pub.id} publication={pub} />
          ))
        )}
      </div>
    </div>
  );
}
