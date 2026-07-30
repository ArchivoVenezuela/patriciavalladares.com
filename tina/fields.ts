/**
 * Shared Tina field fragments — keep collection schemas consistent.
 * Constrained rich-text toolbar (no custom MDX component blocks).
 */

export const richTextToolbar = [
  "heading",
  "bold",
  "italic",
  "link",
  "ul",
  "ol",
] as const;

export const titleField = {
  type: "string" as const,
  name: "title",
  label: "Title",
  isTitle: true,
  required: true,
};

export const kickerField = {
  type: "string" as const,
  name: "kicker",
  label: "Kicker",
  required: true,
};

export const folioLabelField = {
  type: "string" as const,
  name: "folioLabel",
  label: "Folio label",
};

export const bodyField = {
  type: "rich-text" as const,
  name: "body",
  label: "Body",
  isBody: true,
  toolbarOverride: [...richTextToolbar],
};

export const lockDocumentActions = {
  create: false,
  delete: false,
} as const;
