"use client";

import { useCallback, useState } from "react";
import { EditorialContainer } from "@/components/design/EditorialContainer";
import { HomeSection } from "@/components/ui/HomeSection";
import { PlateKicker } from "@/components/ui/PlateKicker";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { graphNodes, instrumentsGraphAside, instrumentsGraphHeading, type GraphNodeKey } from "@/content/homeDesign";
import {
  GRAPH_NODE_COORDS,
  GRAPH_OUTER_EDGES,
  GRAPH_SPOKE_KEYS,
} from "@/lib/home/graphLayout";
import { cn } from "@/lib/utils";

function handleNodeKeyDown(
  e: React.KeyboardEvent,
  key: GraphNodeKey,
  onActivate: (key: GraphNodeKey) => void,
) {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    onActivate(key);
  }
}

export function InstrumentsGraph() {
  const [active, setActive] = useState<GraphNodeKey>("center");
  const info = graphNodes[active];
  const reset = useCallback(() => setActive("center"), []);

  return (
    <HomeSection id="instruments" sectionId="instruments" variant="forest">
      <EditorialContainer>
        <div className="mb-[clamp(1.75rem,4vh,3rem)] flex flex-wrap items-baseline justify-between gap-4">
          <div>
            <PlateKicker tone="gold-light">{instrumentsGraphHeading}</PlateKicker>
            <SectionTitle size="large" className="text-paper">
              {instrumentsGraphHeading}
            </SectionTitle>
          </div>
          <p className="max-w-[40ch] text-sm leading-relaxed text-[#8FA08E]">
            {instrumentsGraphAside}
          </p>
        </div>

        <div className="grid items-center gap-[clamp(1.25rem,3vw,3.25rem)] lg:grid-cols-[minmax(0,1.9fr)_minmax(240px,0.9fr)]">
          <div className="w-full" onMouseLeave={reset}>
            <svg
              viewBox="0 0 900 560"
              className="block w-full overflow-visible"
              role="img"
              aria-label="Research program knowledge graph"
            >
              <g stroke="var(--color-forest-muted)" strokeWidth={1}>
                {GRAPH_SPOKE_KEYS.map((key) => {
                  const from = GRAPH_NODE_COORDS.center;
                  const to = GRAPH_NODE_COORDS[key];
                  const on = active === key;
                  return (
                    <line
                      key={key}
                      x1={from.x}
                      y1={from.y}
                      x2={to.x}
                      y2={to.y}
                      stroke={on ? "var(--color-gold-light)" : "#4A5A4C"}
                      strokeWidth={on ? 2 : 1}
                    />
                  );
                })}
              </g>
              <g stroke="#33402F" strokeWidth={1} strokeDasharray="2 6">
                {GRAPH_OUTER_EDGES.map(([a, b]) => {
                  const p1 = GRAPH_NODE_COORDS[a];
                  const p2 = GRAPH_NODE_COORDS[b];
                  return (
                    <line
                      key={`${a}-${b}`}
                      x1={p1.x}
                      y1={p1.y}
                      x2={p2.x}
                      y2={p2.y}
                    />
                  );
                })}
              </g>
              <GraphNode id="center" active={active} onActivate={setActive} />
              <GraphNode id="archive" active={active} onActivate={setActive} />
              <GraphNode id="studio" active={active} onActivate={setActive} />
              <GraphNode id="book" active={active} onActivate={setActive} />
              <GraphNode id="ailab" active={active} onActivate={setActive} />
              <GraphNode id="cert" active={active} onActivate={setActive} />
              <GraphNode id="counter" active={active} onActivate={setActive} variant="accent" />
              <GraphNode id="migration" active={active} onActivate={setActive} variant="accent" />
            </svg>
          </div>

          <aside
            className="min-h-[180px] border-l border-cream/20 pl-[clamp(1.125rem,2vw,1.875rem)]"
            aria-live="polite"
            aria-atomic="true"
          >
            <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-gold-light">
              {info.index}
            </div>
            <h3 className="mb-4 font-serif text-[clamp(1.5rem,2.6vw,2.125rem)] font-normal leading-[1.08] text-paper">
              {info.title}
            </h3>
            <p className="m-0 max-w-[34ch] text-base leading-relaxed text-cream-muted">
              {info.text}
            </p>
          </aside>
        </div>
      </EditorialContainer>
    </HomeSection>
  );
}

interface GraphNodeProps {
  id: GraphNodeKey;
  active: GraphNodeKey;
  onActivate: (key: GraphNodeKey) => void;
  variant?: "default" | "accent";
}

function GraphNode({ id, active, onActivate, variant = "default" }: GraphNodeProps) {
  const pos = GRAPH_NODE_COORDS[id];
  const isCenter = id === "center";
  const r = isCenter ? 70 : 32;
  const dimmed = active !== "center" && active !== id;
  const fill = variant === "accent" ? "#3A2A2A" : isCenter ? "#101A13" : "var(--color-forest-muted)";
  const stroke = variant === "accent" ? "#8A5A54" : isCenter ? "var(--color-gold-light)" : "#5C6B5E";

  const labels: Record<GraphNodeKey, string[][]> = {
    center: [["CULTURAL", "274"], ["KNOWLEDGE", "291"]],
    archive: [["ARCHIVO", "107"], ["VENEZUELA", "119"]],
    studio: [["ARCHIVO", "177"], ["STUDIO", "189"]],
    book: [["ARCHIVING", "357"], ["THE PRESENT", "369"]],
    ailab: [["AI", "487"], ["LAB", "499"]],
    cert: [["GRAD.", "487"], ["CERT.", "499"]],
    counter: [["COUNTER-", "357"], ["ARCHIVE", "369"]],
    migration: [["MIGRA-", "177"], ["TION", "189"]],
  };

  return (
    <g
      tabIndex={isCenter ? -1 : 0}
      className={cn("outline-none", !isCenter && "cursor-pointer", dimmed && "graph-node-dimmed")}
      onMouseEnter={() => onActivate(id)}
      onFocus={() => onActivate(id)}
      onKeyDown={(e) => !isCenter && handleNodeKeyDown(e, id, onActivate)}
      role={isCenter ? undefined : "button"}
      aria-label={graphNodes[id].title}
    >
      <circle cx={pos.x} cy={pos.y} r={r} fill={fill} stroke={stroke} strokeWidth={isCenter ? 1.5 : 1} />
      {labels[id].map(([text, y]) => (
        <text key={text} x={pos.x} y={Number(y)} textAnchor="middle" fill="var(--color-cream)" fontSize={isCenter ? 12 : id === "cert" || id === "counter" ? 9 : 9.5}>
          {text}
        </text>
      ))}
      {isCenter && (
        <text x={pos.x} y={309} textAnchor="middle" fill="var(--color-gold-light)" fontSize={9}>
          {graphNodes.center.index}
        </text>
      )}
    </g>
  );
}
