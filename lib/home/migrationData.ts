export interface MigrationCity {
  name: string;
  count: string;
  isOrigin: boolean;
  cx: number;
  cy: number;
  labelY: number;
}

/** TODO: Replace collection counts with verified diaspora network data */
export const migrationCities: MigrationCity[] = [
  { name: "Caracas", count: "Point of origin", isOrigin: true, cx: 250, cy: 250, labelY: 234 },
  { name: "Bogotá", count: "TODO: collections", isOrigin: false, cx: 150, cy: 330, labelY: 352 },
  { name: "Miami", count: "TODO: collections", isOrigin: false, cx: 330, cy: 140, labelY: 128 },
  { name: "Madrid", count: "TODO: collections", isOrigin: false, cx: 760, cy: 150, labelY: 138 },
  { name: "Lisboa", count: "TODO: collections", isOrigin: false, cx: 700, cy: 210, labelY: 230 },
  { name: "Santiago", count: "TODO: collections", isOrigin: false, cx: 300, cy: 430, labelY: 452 },
  { name: "Buenos Aires", count: "TODO: collections", isOrigin: false, cx: 420, cy: 440, labelY: 462 },
];

export const migrationFlowPaths = [
  "M250 250 Q200 200 150 330",
  "M250 250 Q290 105 330 140",
  "M250 250 Q505 90 760 150",
  "M250 250 Q475 120 700 210",
  "M250 250 Q230 360 300 430",
  "M250 250 Q320 380 420 440",
];
