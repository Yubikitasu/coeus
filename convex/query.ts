import { v } from "convex/values";
import { query } from "./_generated/server";
import { paginationOptsValidator } from "convex/server";

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

export const findBaiTap = query({
    args: {
        userId: v.any(),
        orgId: v.any(),
        paginationOpts: paginationOptsValidator,
    },
    handler: async (ctx, args) => {
        const baitap = await ctx.db
        .query("baitap")
        .withIndex("by_user_org", (q) => q.eq("userId", args.userId).eq("orgId", args.orgId))
        .paginate(args.paginationOpts);
        return baitap;
    }
});

export const findBaiTapByOrg = query({
    args: {
        orgId: v.any(),
        paginationOpts: paginationOptsValidator,
    },
    handler: async (ctx, args) => {
        const baitap = await ctx.db
        .query("baitap")
        .withIndex("by_org", (q) => q.eq("orgId", args.orgId))
        .paginate(args.paginationOpts);
        return baitap;
    }
});

export const getCauHoiByBTId = query ({
    args: {
        baiTapId: v.any(),
    },
    handler: async (ctx, args) => {
        const cauhoi = await ctx.db
        .query("cauhoi")
        .withIndex("by_baiTapId", (q) => q.eq("baiTapId", args.baiTapId))
        .collect();
        return cauhoi;
    }
})