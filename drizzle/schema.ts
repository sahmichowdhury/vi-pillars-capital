import { int, mysqlEnum, mysqlTable, text, timestamp, varchar, boolean } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  /** Investor portal approval status */
  approvalStatus: mysqlEnum("approvalStatus", ["pending", "approved", "rejected"]).default("pending").notNull(),
  /** Optional note from admin when approving/rejecting */
  adminNote: text("adminNote"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * Investor profile — extended info for LP portal users
 */
export const investorProfiles = mysqlTable("investor_profiles", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  phone: varchar("phone", { length: 32 }),
  accreditedInvestor: boolean("accreditedInvestor").default(false).notNull(),
  investmentFocus: text("investmentFocus"),
  bio: text("bio"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type InvestorProfile = typeof investorProfiles.$inferSelect;
export type InsertInvestorProfile = typeof investorProfiles.$inferInsert;

/**
 * Investor deals — links an investor (user) to a specific deal
 * Admin assigns deals to investors after approval
 */
export const investorDeals = mysqlTable("investor_deals", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  dealName: varchar("dealName", { length: 255 }).notNull(),
  dealCategory: varchar("dealCategory", { length: 64 }).notNull(),
  dealStatus: mysqlEnum("dealStatus", ["Active", "Deployed", "Exited", "Passed"]).notNull(),
  investmentAmount: varchar("investmentAmount", { length: 64 }),
  ownership: varchar("ownership", { length: 64 }),
  investmentDate: varchar("investmentDate", { length: 32 }),
  currentValue: varchar("currentValue", { length: 64 }),
  notes: text("notes"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type InvestorDeal = typeof investorDeals.$inferSelect;
export type InsertInvestorDeal = typeof investorDeals.$inferInsert;

/**
 * Portal documents — files available to investors
 */
export const portalDocuments = mysqlTable("portal_documents", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId"),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description"),
  category: mysqlEnum("category", ["K1", "Operating Agreement", "Deal Memo", "Update", "Other"]).default("Other").notNull(),
  fileUrl: text("fileUrl"),
  dealName: varchar("dealName", { length: 255 }),
  isPlaceholder: boolean("isPlaceholder").default(true).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type PortalDocument = typeof portalDocuments.$inferSelect;
export type InsertPortalDocument = typeof portalDocuments.$inferInsert;