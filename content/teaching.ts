/**
 * Compatibility bridge — teaching prose lives in manuscript/teaching/overview.mdx.
 * Mentorship metrics and course lists remain structured here until approved data exists.
 */
import type { TeachingContent } from "@/lib/types";
import { getTeachingContent, TODO } from "@/lib/content";

const teaching = getTeachingContent();

export const teachingContent: TeachingContent = {
  statement: teaching.statement,
  mentorshipStatement: teaching.mentorshipStatement,
  mentorship: {
    dissertationsDirected: "—",
    dissertationCommittees: "—",
    presidentialFellows: "—",
    undergraduateInterns: "—",
  },
  courses: [],
};

export const teachingStatement = teachingContent.statement;
export const courses = teachingContent.courses;

export { TODO };
