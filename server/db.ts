import { eq, isNull, or, count } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import {
  InsertUser,
  InsertInvestorProfile,
  InsertInvestorDeal,
  InsertPortalDocument,
  InsertDeal,
  users,
  investorProfiles,
  investorDeals,
  portalDocuments,
  deals,
} from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

export async function getUserById(id: number) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(users).where(eq(users.id, id)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function getAllUsers() {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(users).orderBy(users.createdAt);
}

export async function updateUserApprovalStatus(
  userId: number,
  approvalStatus: "pending" | "approved" | "rejected",
  adminNote?: string
) {
  const db = await getDb();
  if (!db) return;
  await db
    .update(users)
    .set({ approvalStatus, adminNote: adminNote ?? null })
    .where(eq(users.id, userId));
}

// ---- Investor Profiles ----

export async function getInvestorProfile(userId: number) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db
    .select()
    .from(investorProfiles)
    .where(eq(investorProfiles.userId, userId))
    .limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function upsertInvestorProfile(profile: InsertInvestorProfile) {
  const db = await getDb();
  if (!db) return;
  const existing = await getInvestorProfile(profile.userId);
  if (existing) {
    await db
      .update(investorProfiles)
      .set({ phone: profile.phone, accreditedInvestor: profile.accreditedInvestor, investmentFocus: profile.investmentFocus, bio: profile.bio })
      .where(eq(investorProfiles.userId, profile.userId));
  } else {
    await db.insert(investorProfiles).values(profile);
  }
}

// ---- Investor Deals ----

export async function getInvestorDeals(userId: number) {
  const db = await getDb();
  if (!db) return [];
  return db
    .select()
    .from(investorDeals)
    .where(eq(investorDeals.userId, userId))
    .orderBy(investorDeals.createdAt);
}

export async function getAllInvestorDeals() {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(investorDeals).orderBy(investorDeals.createdAt);
}

export async function createInvestorDeal(deal: InsertInvestorDeal) {
  const db = await getDb();
  if (!db) return;
  await db.insert(investorDeals).values(deal);
}

export async function updateInvestorDeal(
  dealId: number,
  updates: Partial<InsertInvestorDeal>
) {
  const db = await getDb();
  if (!db) return;
  await db.update(investorDeals).set(updates).where(eq(investorDeals.id, dealId));
}

export async function deleteInvestorDeal(dealId: number) {
  const db = await getDb();
  if (!db) return;
  await db.delete(investorDeals).where(eq(investorDeals.id, dealId));
}

// ---- Portal Documents ----

export async function getDocumentsForUser(userId: number) {
  const db = await getDb();
  if (!db) return [];
  return db
    .select()
    .from(portalDocuments)
    .where(or(isNull(portalDocuments.userId), eq(portalDocuments.userId, userId)))
    .orderBy(portalDocuments.createdAt);
}

export async function getAllDocuments() {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(portalDocuments).orderBy(portalDocuments.createdAt);
}

export async function createDocument(doc: InsertPortalDocument) {
  const db = await getDb();
  if (!db) return;
  await db.insert(portalDocuments).values(doc);
}

// ---- Deals ----

export async function getAllDeals() {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(deals).orderBy(deals.sortOrder, deals.createdAt);
}

export async function getActiveDealsCount(): Promise<number> {
  const db = await getDb();
  if (!db) return 0;
  const result = await db
    .select({ count: count() })
    .from(deals)
    .where(eq(deals.status, "active"));
  return result[0]?.count ?? 0;
}

export async function getDealById(id: number) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(deals).where(eq(deals.id, id)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function createDeal(deal: InsertDeal) {
  const db = await getDb();
  if (!db) return;
  await db.insert(deals).values(deal);
}

export async function updateDeal(id: number, updates: Partial<InsertDeal>) {
  const db = await getDb();
  if (!db) return;
  await db.update(deals).set(updates).where(eq(deals.id, id));
}

export async function deleteDeal(id: number) {
  const db = await getDb();
  if (!db) return;
  await db.delete(deals).where(eq(deals.id, id));
}
