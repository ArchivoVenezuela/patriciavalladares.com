import type { TeachingContent } from "@/lib/types";

export const teachingContent: TeachingContent = {
  statement:
    "I teach humanistic interpretation and digital practice as inseparable activities. Whether in a graduate seminar on diasporic cinema or an undergraduate course in digital storytelling, students learn to read cultural forms critically while also understanding how archives, metadata, and platforms shape what can be known and shared.",
  mentorshipStatement:
    "Graduate mentorship is central to my scholarly identity. I direct dissertations and serve on committees across Latin American and Caribbean studies, cultural studies, and digital humanities. I also train undergraduate researchers through archival internships connected to Archivo Venezuela.",
  mentorship: {
    dissertationsDirected: "15+",
    dissertationCommittees: "20+",
    presidentialFellows: "5",
    undergraduateInterns: "7 (2025)",
  },
  courses: [
    {
      id: "hum7075l",
      title: "AI Lab for Teaching and Research in the Humanities",
      code: "HUM 7075L",
      semester: "Spring 2026",
      description:
        "Graduate seminar exploring AI within humanities research and pedagogy, with emphasis on ethical frameworks, archival context, and interpretive accountability.",
    },
    {
      id: "dhum7001",
      title: "Introduction to Digital Humanities",
      code: "DHUM 7001",
      semester: "Fall 2026",
      description:
        "Core course for the Graduate Certificate in Applied Digital Humanities. Introduces digital methodologies, metadata, curation, and theoretical debates in the field.",
    },
    {
      id: "span3080",
      title: "Digital Storytelling in Spanish",
      code: "SPAN 3080",
      semester: "Fall 2026",
      description:
        "Undergraduate course integrating Spanish-language learning with digital media production, narrative technique, and cultural analysis.",
    },
    {
      id: "span7080",
      title: "El oficio de escribir(se)",
      code: "SPAN 7080",
      semester: "Spring 2027",
      description:
        "Graduate seminar on academic and creative writing in Spanish, examining self-reflexive writing practices across genres.",
    },
  ],
};

/** @deprecated use teachingContent.statement */
export const teachingStatement = teachingContent.statement;
export const courses = teachingContent.courses;
