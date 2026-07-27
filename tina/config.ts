import { defineConfig } from "tinacms";

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

/**
 * Stage 1 spike: Biography collection only.
 * Edits manuscript/biography/*.mdx in place — no parallel content tree.
 */
export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "biography",
        label: "Biography",
        path: "manuscript/biography",
        format: "mdx",
        ui: {
          // Preview the public About route while editing.
          router: ({ document }) =>
            document._sys.filename === "biography" ? "/about" : undefined,
          // Prevent creating/deleting biography documents in this spike.
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "kicker",
            label: "Kicker",
            required: true,
          },
          {
            type: "string",
            name: "folioLabel",
            label: "Folio label",
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
            // Constrained toolbar — no custom MDX component blocks.
            toolbarOverride: ["heading", "bold", "italic", "link", "ul", "ol"],
          },
        ],
      },
    ],
  },
});
