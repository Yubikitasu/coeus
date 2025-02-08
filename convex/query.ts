import { v } from "convex/values";
import { query } from "./_generated/server";

export const findPost = query({
    args: {
        userId: v.any(),
        orgId: v.any(),
    },
    handler: async (ctx, args) => {
        const messages = await ctx.db
        .query("messages")
        .withIndex("by_user_org", (q) => q.eq("userId", args.userId).eq("orgId", args.orgId))
        .collect();
        return messages;
    }
});