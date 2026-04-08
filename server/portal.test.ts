import { describe, expect, it, vi, beforeEach } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// Mock the db module
vi.mock("./db", () => ({
  getUserByOpenId: vi.fn(),
  getInvestorProfile: vi.fn(),
  upsertInvestorProfile: vi.fn(),
  getInvestorDeals: vi.fn(),
  getDocumentsForUser: vi.fn(),
  getAllUsers: vi.fn(),
  updateUserApprovalStatus: vi.fn(),
  getAllInvestorDeals: vi.fn(),
  createInvestorDeal: vi.fn(),
  deleteInvestorDeal: vi.fn(),
  getAllDocuments: vi.fn(),
  createDocument: vi.fn(),
}));

import * as db from "./db";

function makeCtx(overrides: Partial<TrpcContext["user"]> = {}): TrpcContext {
  return {
    user: {
      id: 1,
      openId: "test-open-id",
      name: "Test User",
      email: "test@example.com",
      loginMethod: "manus",
      role: "user",
      createdAt: new Date(),
      updatedAt: new Date(),
      lastSignedIn: new Date(),
      approvalStatus: "approved",
      adminNote: null,
      ...overrides,
    },
    req: { protocol: "https", headers: {} } as TrpcContext["req"],
    res: { clearCookie: vi.fn() } as unknown as TrpcContext["res"],
  };
}

function makeAdminCtx(): TrpcContext {
  return makeCtx({ role: "admin" });
}

const mockUser = {
  id: 1,
  openId: "test-open-id",
  name: "Test User",
  email: "test@example.com",
  loginMethod: "manus",
  role: "user" as const,
  approvalStatus: "approved" as const,
  adminNote: null,
  createdAt: new Date(),
  updatedAt: new Date(),
  lastSignedIn: new Date(),
};

describe("portal.me", () => {
  it("returns user and profile for authenticated user", async () => {
    vi.mocked(db.getUserByOpenId).mockResolvedValue(mockUser);
    vi.mocked(db.getInvestorProfile).mockResolvedValue(null);

    const caller = appRouter.createCaller(makeCtx());
    const result = await caller.portal.me();

    expect(result.user).toMatchObject({ id: 1, name: "Test User" });
    expect(result.profile).toBeNull();
  });

  it("throws NOT_FOUND if user not in DB", async () => {
    vi.mocked(db.getUserByOpenId).mockResolvedValue(undefined);

    const caller = appRouter.createCaller(makeCtx());
    await expect(caller.portal.me()).rejects.toThrow("NOT_FOUND");
  });
});

describe("portal.myDeals", () => {
  it("returns empty array if user is not approved", async () => {
    vi.mocked(db.getUserByOpenId).mockResolvedValue({ ...mockUser, approvalStatus: "pending" });

    const caller = appRouter.createCaller(makeCtx({ approvalStatus: "pending" }));
    const result = await caller.portal.myDeals();

    expect(result).toEqual([]);
    expect(db.getInvestorDeals).not.toHaveBeenCalled();
  });

  it("returns deals for approved user", async () => {
    vi.mocked(db.getUserByOpenId).mockResolvedValue(mockUser);
    vi.mocked(db.getInvestorDeals).mockResolvedValue([
      {
        id: 1,
        userId: 1,
        dealName: "SpaceX",
        dealCategory: "Venture",
        dealStatus: "Active",
        investmentAmount: "$50,000",
        ownership: "0.01%",
        investmentDate: "Q4 2025",
        currentValue: "$55,000",
        notes: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    const caller = appRouter.createCaller(makeCtx());
    const result = await caller.portal.myDeals();

    expect(result).toHaveLength(1);
    expect(result[0].dealName).toBe("SpaceX");
  });
});

describe("portal.adminListUsers", () => {
  it("returns all users for admin", async () => {
    vi.mocked(db.getAllUsers).mockResolvedValue([mockUser]);

    const caller = appRouter.createCaller(makeAdminCtx());
    const result = await caller.portal.adminListUsers();

    expect(result).toHaveLength(1);
    expect(result[0].name).toBe("Test User");
  });

  it("throws FORBIDDEN for non-admin user", async () => {
    const caller = appRouter.createCaller(makeCtx({ role: "user" }));
    await expect(caller.portal.adminListUsers()).rejects.toThrow("required permission");
  });
});

describe("portal.adminUpdateApproval", () => {
  it("updates approval status for admin", async () => {
    vi.mocked(db.updateUserApprovalStatus).mockResolvedValue(undefined);

    const caller = appRouter.createCaller(makeAdminCtx());
    const result = await caller.portal.adminUpdateApproval({
      userId: 1,
      approvalStatus: "approved",
      adminNote: "Welcome aboard",
    });

    expect(result.success).toBe(true);
    expect(db.updateUserApprovalStatus).toHaveBeenCalledWith(1, "approved", "Welcome aboard");
  });

  it("throws FORBIDDEN for non-admin", async () => {
    const caller = appRouter.createCaller(makeCtx({ role: "user" }));
    await expect(
      caller.portal.adminUpdateApproval({ userId: 1, approvalStatus: "approved" })
    ).rejects.toThrow("required permission");
  });
});
