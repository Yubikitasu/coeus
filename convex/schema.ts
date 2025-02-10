import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  messages: defineTable({
    userId: v.any(),
    orgId: v.any(),
    username: v.string(),
    content: v.string(),
  }).index("by_user_org", ["userId", "orgId"]),
  baitap: defineTable({
    userId: v.any(),
    orgId: v.any(),
    username: v.string(),
    baitapTitle: v.string(),
    baitapDescription: v.optional(v.string()),
    baiTapId: v.string(),
  })
    .index("by_user_org", ["userId", "orgId"])
    .index("by_org", ["orgId"])
    .index("by_baitapId", ["baiTapId"]),
});
