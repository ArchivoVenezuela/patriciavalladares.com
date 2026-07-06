import type { TeachingContent } from "@/lib/types";
import { TODO } from "./draft";

export const teachingContent: TeachingContent = {
  statement: TODO,
  mentorshipStatement: TODO,
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
