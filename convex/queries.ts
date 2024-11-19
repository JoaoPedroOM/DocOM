import { query } from "./_generated/server";
import { v } from "convex/values";

export const getUserDocuments = query({
  args: { 
    userId: v.string() 
  },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("documents")
      .filter((q) => q.eq(q.field("userId"), args.userId))
      .collect();
  },
});

export const getDocumentById = query({
  args: { 
    documentId: v.string() 
  },
  handler: async (ctx, args) => {
    const document = await ctx.db
      .query("documents")
      .filter((q) => q.eq(q.field("_id"), args.documentId)) 
      .first();

    return document;
  },
});
