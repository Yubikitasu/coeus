import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const createPost = mutation({
    args: {
        userId: v.any(),
        orgId: v.any(),
        content: v.string(),
        username: v.string()
    },
    handler: async (ctx, args) => {
        const messagesId = await ctx.db.insert("messages", { 
            content: args.content,  
            username: args.username,
            userId: args.userId,
            orgId: args.orgId
        });
        return messagesId;
    }
});