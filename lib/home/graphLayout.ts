import type { GraphNodeKey } from "@/content/homeDesign";

export const GRAPH_CENTER = { x: 450, y: 280 } as const;

export const GRAPH_NODE_COORDS: Record<GraphNodeKey, { x: number; y: number }> = {
  center: { x: 450, y: 280 },
  archive: { x: 450, y: 110 },
  studio: { x: 720, y: 180 },
  book: { x: 770, y: 360 },
  ailab: { x: 560, y: 490 },
  cert: { x: 340, y: 490 },
  counter: { x: 130, y: 360 },
  migration: { x: 180, y: 180 },
};

export const GRAPH_OUTER_EDGES: [GraphNodeKey, GraphNodeKey][] = [
  ["archive", "studio"],
  ["studio", "book"],
  ["book", "ailab"],
  ["ailab", "cert"],
  ["cert", "counter"],
  ["counter", "migration"],
  ["migration", "archive"],
];

export const GRAPH_SPOKE_KEYS: GraphNodeKey[] = [
  "archive",
  "studio",
  "book",
  "ailab",
  "cert",
  "counter",
  "migration",
];
