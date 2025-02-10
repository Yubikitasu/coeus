import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const createPost = mutation({
  args: {
    userId: v.any(),
    orgId: v.any(),
    content: v.string(),
    username: v.string(),
  },
  handler: async (ctx, args) => {
    const messagesId = await ctx.db.insert("messages", {
      content: args.content,
      username: args.username,
      userId: args.userId,
      orgId: args.orgId,
    });
    return messagesId;
  },
});

export const createBaiTap = mutation({
  args: {
    userId: v.any(),
    orgId: v.any(),
    username: v.string(),
    baitapTitle: v.string(),
    baitapDescription: v.optional(v.string()),
    baiTapId: v.string(),
  },
  handler: async (ctx, args) => {
    const baiTap = await ctx.db.insert("baitap", {
      userId: args.userId,
      orgId: args.orgId,
      username: args.username,
      baitapTitle: args.baitapTitle,
      baitapDescription: args.baitapDescription,
      baiTapId: args.baiTapId,
    });
    return baiTap;
  },
});
