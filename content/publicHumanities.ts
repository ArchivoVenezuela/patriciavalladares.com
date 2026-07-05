import type { PublicHumanitiesContent } from "@/lib/types";

export const publicHumanitiesContent: PublicHumanitiesContent = {
  intro:
    "Public humanities, in my practice, means meeting audiences where they are—online, in diaspora communities, and in collaborative exhibit spaces—without abandoning scholarly standards of curation, citation, and contextual interpretation.",
  statement:
    "Archivo Venezuela is the anchor of my public-facing work: a bilingual archive and exhibit platform that documents Venezuelan diasporic cultural production for researchers, educators, and community members. Public scholarship here is not outreach appended to research; it is research, reframed for wider access.",
  items: [
    {
      id: "ph-archivo",
      title: "Archivo Venezuela",
      description:
        "Founder and Director of a bilingual digital archive documenting literature, film, visual art, theater, and music across the Venezuelan diaspora. The archive serves as both research infrastructure and public resource.",
      year: "2025–",
      url: "https://archivovenezuela.com",
    },
    {
      id: "ph-exhibits",
      title: "Digital Exhibits",
      description:
        "Curated digital exhibitions with scholarly statements and international guest curators, presenting diasporic cultural production to academic and public audiences.",
      year: "2025",
      url: "https://archivovenezuela.com/exhibits",
    },
    {
      id: "ph-community",
      title: "Community Collaboration",
      description:
        "Partnerships with diaspora communities, guest curators, and international collaborators (including CUNY and Cornell) to ensure the archive reflects diverse perspectives and remains publicly accountable.",
      year: "2025–",
    },
    {
      id: "ph-bilingual",
      title: "Bilingual Dissemination",
      description:
        "All public-facing metadata and exhibits maintain Spanish and English descriptions, enabling access across linguistic communities without privileging a single audience.",
    },
    {
      id: "ph-interns",
      title: "Undergraduate Research Internships",
      description:
        "Training undergraduate researchers in digital curation, metadata creation, and exhibit development through hands-on participation in Archivo Venezuela.",
      year: "2025",
    },
  ],
};

/** @deprecated */
export const publicHumanitiesItems = publicHumanitiesContent.items;
