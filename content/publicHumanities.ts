import type { PublicHumanitiesContent } from "@/lib/types";
import { TODO, draftProjects, draftThemes } from "./draft";

const archivo = draftProjects.find((p) => p.slug === "archivo-venezuela");
const publicHumanitiesTheme = draftThemes.find((t) => t.id === "public-humanities");

export const publicHumanitiesContent: PublicHumanitiesContent = {
  intro: publicHumanitiesTheme?.description ?? TODO,
  statement: archivo?.description ?? TODO,
  items: [
    {
      id: "ph-archivo",
      title: archivo?.title ?? "Archivo Venezuela",
      description: archivo?.description ?? TODO,
    },
  ],
};

export const publicHumanitiesItems = publicHumanitiesContent.items;
