import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { protectedProcedure, publicProcedure, router } from "./_core/trpc";
import {
  getAllDeals,
  getActiveDealsCount,
  getDealById,
  createDeal,
  updateDeal,
  deleteDeal,
} from "./db";

const assetClassValues = ["Private Equity", "Venture", "Real Estate", "Consumer", "Other"] as const;
const statusValues = ["active", "deployed", "passed", "closed"] as const;

const dealInput = z.object({
  name: z.string().min(1).max(255),
  category: z.string().min(1).max(64),
  assetClass: z.enum(assetClassValues),
  status: z.enum(statusValues),
  description: z.string().optional(),
  minInvestment: z.string().optional(),
  targetReturn: z.string().optional(),
  featured: z.boolean().optional(),
  sortOrder: z.number().int().optional(),
});

/** Guard: only admins may call this procedure */
const adminProcedure = protectedProcedure.use(({ ctx, next }) => {
  if (ctx.user.role !== "admin") {
    throw new TRPCError({ code: "FORBIDDEN", message: "Admin access required" });
  }
  return next({ ctx });
});

export const dealsRouter = router({
  /** Public: count of active deals — used by the home page stats bar */
  activeCount: publicProcedure.query(async () => {
    return getActiveDealsCount();
  }),

  /** Public: list all deals (for the public dealflow page) */
  list: publicProcedure.query(async () => {
    return getAllDeals();
  }),

  /** Admin: create a new deal */
  create: adminProcedure.input(dealInput).mutation(async ({ input }) => {
    await createDeal({
      name: input.name,
      category: input.category,
      assetClass: input.assetClass,
      status: input.status,
      description: input.description ?? null,
      minInvestment: input.minInvestment ?? null,
      targetReturn: input.targetReturn ?? null,
      featured: input.featured ?? false,
      sortOrder: input.sortOrder ?? 0,
    });
    return { success: true };
  }),

  /** Admin: update an existing deal */
  update: adminProcedure
    .input(z.object({ id: z.number().int(), data: dealInput.partial() }))
    .mutation(async ({ input }) => {
      const existing = await getDealById(input.id);
      if (!existing) throw new TRPCError({ code: "NOT_FOUND", message: "Deal not found" });
      await updateDeal(input.id, input.data);
      return { success: true };
    }),

  /** Admin: delete a deal */
  delete: adminProcedure
    .input(z.object({ id: z.number().int() }))
    .mutation(async ({ input }) => {
      const existing = await getDealById(input.id);
      if (!existing) throw new TRPCError({ code: "NOT_FOUND", message: "Deal not found" });
      await deleteDeal(input.id);
      return { success: true };
    }),

  /** Admin: list all deals with full detail */
  adminList: adminProcedure.query(async () => {
    return getAllDeals();
  }),
});
