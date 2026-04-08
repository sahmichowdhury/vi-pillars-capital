/**
 * Portal Router — investor portal API endpoints
 * - Investors: view own profile, deals, documents
 * - Admins: manage users, assign deals, manage documents
 */
import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { adminProcedure, protectedProcedure, router } from "./_core/trpc";
import * as db from "./db";

export const portalRouter = router({
  // ---- Investor: own data ----

  /** Get current user's full profile including approval status */
  me: protectedProcedure.query(async ({ ctx }) => {
    const user = await db.getUserByOpenId(ctx.user.openId);
    if (!user) throw new TRPCError({ code: "NOT_FOUND" });
    const profile = await db.getInvestorProfile(user.id);
    return { user, profile };
  }),

  /** Update investor profile */
  updateProfile: protectedProcedure
    .input(
      z.object({
        phone: z.string().optional(),
        accreditedInvestor: z.boolean().optional(),
        investmentFocus: z.string().optional(),
        bio: z.string().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const user = await db.getUserByOpenId(ctx.user.openId);
      if (!user) throw new TRPCError({ code: "NOT_FOUND" });
      await db.upsertInvestorProfile({ userId: user.id, ...input });
      return { success: true };
    }),

  /** Get deals assigned to the current investor */
  myDeals: protectedProcedure.query(async ({ ctx }) => {
    const user = await db.getUserByOpenId(ctx.user.openId);
    if (!user) throw new TRPCError({ code: "NOT_FOUND" });
    if (user.approvalStatus !== "approved") {
      return [];
    }
    return db.getInvestorDeals(user.id);
  }),

  /** Get documents available to the current investor */
  myDocuments: protectedProcedure.query(async ({ ctx }) => {
    const user = await db.getUserByOpenId(ctx.user.openId);
    if (!user) throw new TRPCError({ code: "NOT_FOUND" });
    if (user.approvalStatus !== "approved") {
      return [];
    }
    return db.getDocumentsForUser(user.id);
  }),

  // ---- Admin: user management ----

  /** List all users (admin only) */
  adminListUsers: adminProcedure.query(async () => {
    return db.getAllUsers();
  }),

  /** Approve or reject an investor (admin only) */
  adminUpdateApproval: adminProcedure
    .input(
      z.object({
        userId: z.number(),
        approvalStatus: z.enum(["pending", "approved", "rejected"]),
        adminNote: z.string().optional(),
      })
    )
    .mutation(async ({ input }) => {
      await db.updateUserApprovalStatus(input.userId, input.approvalStatus, input.adminNote);
      return { success: true };
    }),

  // ---- Admin: deal assignment ----

  /** List all investor deal assignments (admin only) */
  adminListDeals: adminProcedure.query(async () => {
    return db.getAllInvestorDeals();
  }),

  /** Assign a deal to an investor (admin only) */
  adminCreateDeal: adminProcedure
    .input(
      z.object({
        userId: z.number(),
        dealName: z.string().min(1),
        dealCategory: z.string().min(1),
        dealStatus: z.enum(["Active", "Deployed", "Exited", "Passed"]),
        investmentAmount: z.string().optional(),
        ownership: z.string().optional(),
        investmentDate: z.string().optional(),
        currentValue: z.string().optional(),
        notes: z.string().optional(),
      })
    )
    .mutation(async ({ input }) => {
      await db.createInvestorDeal(input);
      return { success: true };
    }),

  /** Update a deal assignment (admin only) */
  adminUpdateDeal: adminProcedure
    .input(
      z.object({
        dealId: z.number(),
        dealName: z.string().optional(),
        dealCategory: z.string().optional(),
        dealStatus: z.enum(["Active", "Deployed", "Exited", "Passed"]).optional(),
        investmentAmount: z.string().optional(),
        ownership: z.string().optional(),
        investmentDate: z.string().optional(),
        currentValue: z.string().optional(),
        notes: z.string().optional(),
      })
    )
    .mutation(async ({ input }) => {
      const { dealId, ...updates } = input;
      await db.updateInvestorDeal(dealId, updates);
      return { success: true };
    }),

  /** Remove a deal assignment (admin only) */
  adminDeleteDeal: adminProcedure
    .input(z.object({ dealId: z.number() }))
    .mutation(async ({ input }) => {
      await db.deleteInvestorDeal(input.dealId);
      return { success: true };
    }),

  // ---- Admin: documents ----

  /** List all documents (admin only) */
  adminListDocuments: adminProcedure.query(async () => {
    return db.getAllDocuments();
  }),

  /** Create a document entry (admin only) */
  adminCreateDocument: adminProcedure
    .input(
      z.object({
        userId: z.number().nullable().optional(),
        title: z.string().min(1),
        description: z.string().optional(),
        category: z.enum(["K1", "Operating Agreement", "Deal Memo", "Update", "Other"]),
        fileUrl: z.string().optional(),
        dealName: z.string().optional(),
        isPlaceholder: z.boolean().default(true),
      })
    )
    .mutation(async ({ input }) => {
      await db.createDocument({
        ...input,
        userId: input.userId ?? null,
      });
      return { success: true };
    }),
});
