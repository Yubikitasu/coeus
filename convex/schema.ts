import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  messages: defineTable({
    id: v.id("messages"),
    username: v.string(),
    content: v.string()
  }),
});
