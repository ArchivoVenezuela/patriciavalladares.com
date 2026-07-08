import type { ContactContent } from "@/lib/types";
import { getContactContent } from "@/lib/content";

const contact = getContactContent();

export const contactContent: ContactContent = {
  intro: contact.paragraphs[0] ?? contact.frontmatter.title,
};

export const contactDetails = contact.frontmatter;
