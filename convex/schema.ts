import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  documents: defineTable({
    title: v.string(),
    user_email: v.string(),
    userId: v.string(),
    content: v.optional(v.string()),
    createdAt: v.number(),
  })
});