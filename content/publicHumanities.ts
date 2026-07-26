/**
 * Compatibility bridge — derives public-humanities copy from manuscript themes/projects.
 */
import type { PublicHumanitiesContent } from "@/lib/types";
import { getProjectBySlug, getThemeById, TODO } from "@/lib/content";

const archivo = getProjectBySlug("archivo-venezuela");
const publicHumanitiesTheme = getThemeById("public-humanities");

export const publicHumanitiesContent: PublicHumanitiesContent = {
  intro: publicHumanitiesTheme?.description ?? TODO,
  statement: archivo?.summary ?? TODO,
  items: [
    {
      id: "ph-archivo",
      title: archivo?.title ?? "Archivo Venezuela",
      description: archivo?.summary ?? TODO,
    },
  ],
};

export const publicHumanitiesItems = publicHumanitiesContent.items;
