// tina/config.ts
import { defineConfig } from "tinacms";

// tina/fields.ts
var richTextToolbar = [
  "heading",
  "bold",
  "italic",
  "link",
  "ul",
  "ol"
];
var titleField = {
  type: "string",
  name: "title",
  label: "Title",
  isTitle: true,
  required: true
};
var kickerField = {
  type: "string",
  name: "kicker",
  label: "Kicker",
  required: true
};
var folioLabelField = {
  type: "string",
  name: "folioLabel",
  label: "Folio label"
};
var bodyField = {
  type: "rich-text",
  name: "body",
  label: "Body",
  isBody: true,
  toolbarOverride: [...richTextToolbar]
};
var lockDocumentActions = {
  create: false,
  delete: false
};

// tina/config.ts
var branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";
var config_default = defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      // ── Biography (/about) ──────────────────────────────────────────
      {
        name: "biography",
        label: "Biography",
        path: "manuscript/biography",
        format: "mdx",
        ui: {
          router: ({ document }) => document._sys.filename === "biography" ? "/about" : void 0,
          allowedActions: lockDocumentActions
        },
        fields: [
          titleField,
          kickerField,
          { ...folioLabelField, required: true },
          {
            type: "string",
            name: "languagesTitle",
            label: "Languages section title",
            required: true
          },
          {
            type: "string",
            name: "languagesBody",
            label: "Languages section text",
            ui: { component: "textarea" },
            required: true
          },
          {
            type: "string",
            name: "educationTitle",
            label: "Education section title",
            required: true
          },
          {
            type: "string",
            name: "educationBody",
            label: "Education section text",
            ui: { component: "textarea" },
            required: true
          },
          bodyField
        ]
      },
      // ── Home: hero ──────────────────────────────────────────────────
      {
        name: "homeHero",
        label: "Home \u2014 Hero",
        path: "manuscript/home",
        format: "mdx",
        match: { include: "hero" },
        ui: {
          router: () => "/",
          allowedActions: lockDocumentActions
        },
        fields: [
          {
            type: "string",
            name: "label",
            label: "Hero label",
            required: true
          },
          {
            type: "string",
            name: "name",
            label: "Name",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "titleLine",
            label: "Professional title",
            required: true
          },
          {
            type: "string",
            name: "institution",
            label: "Institution",
            required: true
          },
          {
            type: "string",
            name: "figureLabel",
            label: "Figure label",
            required: true
          },
          bodyField
        ]
      },
      // ── Home: research themes (+ Critical AI demo fields) ───────────
      {
        name: "homeThemes",
        label: "Home \u2014 Research Themes",
        path: "manuscript/home",
        format: "mdx",
        match: { include: "research-themes" },
        ui: {
          router: () => "/",
          allowedActions: lockDocumentActions
        },
        fields: [
          titleField,
          kickerField,
          {
            type: "object",
            name: "themes",
            label: "Themes",
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.title || item?.id || "Theme" })
            },
            fields: [
              {
                type: "string",
                name: "id",
                label: "ID",
                required: true
              },
              {
                type: "string",
                name: "title",
                label: "Title",
                required: true
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                ui: { component: "textarea" },
                required: true
              }
            ]
          },
          {
            type: "object",
            name: "criticalAi",
            label: "Critical AI homepage panel",
            fields: [
              {
                type: "string",
                name: "machineReading",
                label: "Machine reading label",
                required: true
              },
              {
                type: "string",
                name: "communityReading",
                label: "Community reading label",
                required: true
              },
              {
                type: "string",
                name: "captionMachine",
                label: "Machine caption",
                ui: { component: "textarea" },
                required: true
              },
              {
                type: "string",
                name: "captionCommunity",
                label: "Community caption",
                ui: { component: "textarea" },
                required: true
              },
              {
                type: "string",
                name: "objectId",
                label: "Demo object ID",
                required: true
              },
              {
                type: "string",
                name: "objectLabel",
                label: "Demo object label",
                ui: { component: "textarea" },
                required: true
              },
              {
                type: "string",
                name: "machineTags",
                label: "Machine tags",
                list: true
              },
              {
                type: "string",
                name: "machineConfidence",
                label: "Machine confidence",
                required: true
              },
              {
                type: "string",
                name: "machineNote",
                label: "Machine note",
                ui: { component: "textarea" },
                required: true
              },
              {
                type: "string",
                name: "communityLead",
                label: "Community lead",
                ui: { component: "textarea" },
                required: true
              },
              {
                type: "string",
                name: "communityNote",
                label: "Community note",
                ui: { component: "textarea" },
                required: true
              }
            ]
          },
          bodyField
        ]
      },
      // ── Home: research questions ────────────────────────────────────
      {
        name: "homeQuestions",
        label: "Home \u2014 Research Questions",
        path: "manuscript/home",
        format: "mdx",
        match: { include: "research-questions" },
        ui: {
          router: () => "/",
          allowedActions: lockDocumentActions
        },
        fields: [
          titleField,
          kickerField,
          {
            type: "string",
            name: "questions",
            label: "Questions",
            list: true,
            ui: { component: "textarea" }
          },
          bodyField
        ]
      },
      // ── Home: research program (projects index intro source) ────────
      {
        name: "homeProgram",
        label: "Home \u2014 Research Program",
        path: "manuscript/home",
        format: "mdx",
        match: { include: "research-program" },
        ui: {
          router: () => "/research",
          allowedActions: lockDocumentActions
        },
        fields: [titleField, kickerField, bodyField]
      },
      // ── Home: projects overview (/projects chrome) ──────────────────
      {
        name: "homeProjectsOverview",
        label: "Projects \u2014 Overview",
        path: "manuscript/home",
        format: "mdx",
        match: { include: "projects-overview" },
        ui: {
          router: () => "/projects",
          allowedActions: lockDocumentActions
        },
        fields: [
          titleField,
          kickerField,
          folioLabelField,
          {
            type: "string",
            name: "toolsSectionTitle",
            label: "Tools section title",
            required: true
          },
          {
            type: "string",
            name: "toolsIntro",
            label: "Tools section introduction",
            ui: { component: "textarea" },
            required: true
          },
          bodyField
        ]
      },
      // ── Research program overview ───────────────────────────────────
      {
        name: "researchOverview",
        label: "Research Program",
        path: "manuscript/research",
        format: "mdx",
        match: { include: "overview" },
        ui: {
          router: () => "/research",
          allowedActions: lockDocumentActions
        },
        fields: [
          titleField,
          kickerField,
          folioLabelField,
          {
            type: "string",
            name: "programSectionTitle",
            label: "Program section title",
            required: true
          },
          {
            type: "string",
            name: "themesSectionTitle",
            label: "Themes section title",
            required: true
          },
          {
            type: "string",
            name: "monographSectionKicker",
            label: "Monograph section kicker",
            required: true
          },
          bodyField
        ]
      },
      // ── Digital scholarship / methods ───────────────────────────────
      {
        name: "researchMethods",
        label: "Digital Scholarship",
        path: "manuscript/research",
        format: "mdx",
        match: { include: "methods" },
        ui: {
          router: () => "/digital-scholarship",
          allowedActions: lockDocumentActions
        },
        fields: [
          titleField,
          kickerField,
          folioLabelField,
          {
            type: "string",
            name: "methods",
            label: "Methods",
            list: true
          },
          bodyField
        ]
      },
      // ── Projects ────────────────────────────────────────────────────
      {
        name: "project",
        label: "Projects",
        path: "manuscript/projects",
        format: "mdx",
        ui: {
          router: ({ document }) => {
            const slug = document.slug || document._sys.filename;
            return `/projects/${slug}`;
          },
          allowedActions: {
            create: true,
            delete: false
          }
        },
        fields: [
          {
            type: "string",
            name: "slug",
            label: "Slug",
            required: true
          },
          titleField,
          {
            type: "string",
            name: "subtitle",
            label: "Subtitle",
            required: true
          },
          {
            type: "string",
            name: "tier",
            label: "Tier",
            options: ["flagship", "infrastructure"],
            required: true
          },
          {
            type: "string",
            name: "status",
            label: "Status",
            options: [
              "active",
              "in-development",
              "planned",
              "beta",
              "prototype",
              "placeholder"
            ],
            required: true
          },
          {
            type: "boolean",
            name: "featured",
            label: "Featured"
          },
          {
            type: "boolean",
            name: "homepageFeatured",
            label: "Homepage featured"
          },
          {
            type: "boolean",
            name: "homepageItalic",
            label: "Homepage italic title"
          },
          {
            type: "object",
            name: "links",
            label: "Links",
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.label || "Link" })
            },
            fields: [
              {
                type: "string",
                name: "label",
                label: "Label",
                required: true
              },
              {
                type: "string",
                name: "url",
                label: "URL",
                required: true
              },
              {
                type: "boolean",
                name: "external",
                label: "External"
              }
            ]
          },
          {
            type: "object",
            name: "homepage",
            label: "Homepage archive panel",
            fields: [
              {
                type: "string",
                name: "specimensLabel",
                label: "Specimens gallery label"
              },
              {
                type: "string",
                name: "specimenCardLabel",
                label: "Specimen card label"
              },
              {
                type: "object",
                name: "stats",
                label: "Stats",
                list: true,
                ui: {
                  itemProps: (item) => ({ label: item?.label || "Stat" })
                },
                fields: [
                  {
                    type: "string",
                    name: "value",
                    label: "Value",
                    required: true
                  },
                  {
                    type: "string",
                    name: "label",
                    label: "Label",
                    required: true
                  },
                  {
                    type: "string",
                    name: "accent",
                    label: "Accent",
                    options: ["oxblood", "forest"],
                    required: true
                  }
                ]
              },
              {
                type: "object",
                name: "specimens",
                label: "Specimens",
                list: true,
                ui: {
                  itemProps: (item) => ({ label: item?.title || item?.id || "Specimen" })
                },
                fields: [
                  {
                    type: "string",
                    name: "year",
                    label: "Year",
                    required: true
                  },
                  {
                    type: "string",
                    name: "id",
                    label: "ID",
                    required: true
                  },
                  {
                    type: "string",
                    name: "title",
                    label: "Title",
                    required: true
                  },
                  {
                    type: "object",
                    name: "meta",
                    label: "Meta rows",
                    list: true,
                    fields: [
                      {
                        type: "string",
                        name: "label",
                        label: "Label",
                        required: true
                      },
                      {
                        type: "string",
                        name: "value",
                        label: "Value",
                        required: true
                      }
                    ]
                  },
                  {
                    type: "string",
                    name: "note",
                    label: "Note",
                    ui: { component: "textarea" },
                    required: true
                  }
                ]
              }
            ]
          },
          {
            type: "string",
            name: "summary",
            label: "Summary (legacy alias \u2014 prefer Body)",
            ui: { component: "textarea" }
          },
          bodyField
        ]
      },
      // ── Publications ────────────────────────────────────────────────
      {
        name: "publications",
        label: "Publications",
        path: "manuscript/publications",
        format: "mdx",
        ui: {
          router: () => "/publications",
          allowedActions: lockDocumentActions
        },
        fields: [
          titleField,
          kickerField,
          folioLabelField,
          {
            type: "string",
            name: "intro",
            label: "Introduction",
            ui: { component: "textarea" }
          },
          {
            type: "string",
            name: "booksSectionTitle",
            label: "Books section title",
            required: true
          },
          {
            type: "string",
            name: "articlesSectionTitle",
            label: "Articles section title",
            required: true
          },
          {
            type: "string",
            name: "filterSectionTitle",
            label: "Filter section title",
            required: true
          },
          {
            type: "object",
            name: "books",
            label: "Books",
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.title || "Book" })
            },
            fields: [
              { type: "string", name: "id", label: "ID", required: true },
              { type: "string", name: "title", label: "Title", required: true },
              { type: "string", name: "subtitle", label: "Subtitle" },
              { type: "string", name: "venue", label: "Venue" },
              { type: "string", name: "publisher", label: "Publisher" },
              { type: "string", name: "year", label: "Year", required: true },
              {
                type: "string",
                name: "type",
                label: "Type",
                options: ["book", "article", "forthcoming", "chapter"]
              },
              { type: "boolean", name: "featured", label: "Featured" },
              {
                type: "string",
                name: "description",
                label: "Description",
                ui: { component: "textarea" }
              },
              { type: "string", name: "coverImage", label: "Cover image path" }
            ]
          },
          {
            type: "object",
            name: "articles",
            label: "Articles",
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.title || "Article" })
            },
            fields: [
              { type: "string", name: "id", label: "ID", required: true },
              { type: "string", name: "title", label: "Title", required: true },
              { type: "string", name: "venue", label: "Venue", required: true },
              { type: "string", name: "volume", label: "Volume" },
              { type: "string", name: "pages", label: "Pages" },
              { type: "string", name: "year", label: "Year", required: true },
              {
                type: "string",
                name: "type",
                label: "Type",
                options: ["book", "article", "forthcoming", "chapter"]
              },
              { type: "string", name: "topic", label: "Topic" },
              { type: "boolean", name: "featured", label: "Featured" }
            ]
          },
          bodyField
        ]
      },
      // ── Public humanities ───────────────────────────────────────────
      {
        name: "publicHumanities",
        label: "Public Humanities",
        path: "manuscript/public-humanities",
        format: "mdx",
        ui: {
          router: () => "/public-humanities",
          allowedActions: lockDocumentActions
        },
        fields: [
          titleField,
          kickerField,
          folioLabelField,
          {
            type: "string",
            name: "projectsSectionTitle",
            label: "Projects section title",
            required: true
          },
          {
            type: "string",
            name: "featuredProjectSlug",
            label: "Featured project slug (canonical project MDX)",
            required: true
          },
          {
            type: "string",
            name: "introThemeId",
            label: "Intro theme ID (from Research Themes)",
            required: true
          },
          bodyField
        ]
      },
      // ── Teaching ────────────────────────────────────────────────────
      {
        name: "teaching",
        label: "Teaching",
        path: "manuscript/teaching",
        format: "mdx",
        ui: {
          router: () => "/teaching",
          allowedActions: lockDocumentActions
        },
        fields: [
          titleField,
          kickerField,
          folioLabelField,
          {
            type: "string",
            name: "mentorshipTitle",
            label: "Mentorship title"
          },
          {
            type: "object",
            name: "courses",
            label: "Courses",
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.title || "Course" })
            },
            fields: [
              { type: "string", name: "id", label: "ID", required: true },
              { type: "string", name: "title", label: "Title", required: true },
              { type: "string", name: "code", label: "Code" },
              { type: "string", name: "semester", label: "Semester" },
              {
                type: "string",
                name: "description",
                label: "Description",
                ui: { component: "textarea" }
              }
            ]
          },
          bodyField
        ]
      },
      // ── Contact ─────────────────────────────────────────────────────
      {
        name: "contact",
        label: "Contact",
        path: "manuscript/contact",
        format: "mdx",
        ui: {
          router: () => "/contact",
          allowedActions: lockDocumentActions
        },
        fields: [
          titleField,
          kickerField,
          folioLabelField,
          {
            type: "string",
            name: "affiliationLabel",
            label: "Affiliation label",
            required: true
          },
          {
            type: "string",
            name: "emailLabel",
            label: "Email label",
            required: true
          },
          {
            type: "string",
            name: "phoneLabel",
            label: "Phone label",
            required: true
          },
          {
            type: "string",
            name: "cvLabel",
            label: "CV label",
            required: true
          },
          {
            type: "string",
            name: "cvButtonLabel",
            label: "CV button label",
            required: true
          },
          {
            type: "string",
            name: "linksLabel",
            label: "External links label",
            required: true
          },
          {
            type: "object",
            name: "externalLinks",
            label: "External links",
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.label || "Link" })
            },
            fields: [
              {
                type: "string",
                name: "label",
                label: "Label",
                required: true
              },
              {
                type: "string",
                name: "url",
                label: "URL",
                required: true
              }
            ]
          },
          bodyField
        ]
      }
    ]
  }
});
export {
  config_default as default
};
