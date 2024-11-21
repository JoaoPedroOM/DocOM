// mutations.ts
import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const saveDocument = mutation({
  args: {
    userId: v.string(),
    user_email: v.string(),
    content: v.string(),
    title: v.string(),
    documentId: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    if (args.documentId) {

      return await ctx.db.patch(args.documentId, {
        content: args.content,
        title: args.title,
      });
    } else {

      return await ctx.db.insert("documents", {
        user_email: args.user_email,
        userId: args.userId,
        content: args.content,
        title: args.title,
        createdAt: Date.now(),
      });
    }
  },
});

export const deleteDocument = mutation({
  args: { 
    documentId: v.string() 
  },
  handler: async (ctx, args) => {
    return await ctx.db.delete(args.documentId);
  },
});

export const updateDocumentTitle = mutation({
  args: {
    documentId: v.string(),
    title: v.string(),
  },
  handler: async (ctx, args) => {
    const document = await ctx.db.get(args.documentId);
    
    if (!document) {
      throw new Error('Documento não encontrado');
    }

    return await ctx.db.patch(args.documentId, { title: args.title });
  }
});