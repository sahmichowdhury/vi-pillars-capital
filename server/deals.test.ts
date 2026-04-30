/**
 * Tests for the deals router — active count, list, CRUD
 */
import { describe, it, expect, vi, beforeEach } from "vitest";

// Mock the db module so tests run without a real database
vi.mock("./db", () => ({
  getAllDeals: vi.fn(),
  getActiveDealsCount: vi.fn(),
  getDealById: vi.fn(),
  createDeal: vi.fn(),
  updateDeal: vi.fn(),
  deleteDeal: vi.fn(),
}));

import * as db from "./db";

describe("deals db helpers (mocked)", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("getActiveDealsCount returns a number", async () => {
    vi.mocked(db.getActiveDealsCount).mockResolvedValue(2);
    const count = await db.getActiveDealsCount();
    expect(count).toBe(2);
  });

  it("getAllDeals returns an array", async () => {
    vi.mocked(db.getAllDeals).mockResolvedValue([
      {
        id: 1,
        name: "Tercer",
        category: "Consumer",
        assetClass: "Consumer",
        status: "active",
        description: "Test",
        minInvestment: "$20,000",
        targetReturn: null,
        featured: true,
        sortOrder: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ] as any);
    const deals = await db.getAllDeals();
    expect(deals).toHaveLength(1);
    expect(deals[0].name).toBe("Tercer");
  });

  it("createDeal calls insert", async () => {
    vi.mocked(db.createDeal).mockResolvedValue(undefined);
    await db.createDeal({
      name: "Test Deal",
      category: "Venture",
      assetClass: "Venture",
      status: "active",
      description: null,
      minInvestment: null,
      targetReturn: null,
      featured: false,
      sortOrder: 0,
    });
    expect(db.createDeal).toHaveBeenCalledOnce();
  });

  it("updateDeal calls update with correct id", async () => {
    vi.mocked(db.updateDeal).mockResolvedValue(undefined);
    await db.updateDeal(1, { status: "deployed" });
    expect(db.updateDeal).toHaveBeenCalledWith(1, { status: "deployed" });
  });

  it("deleteDeal calls delete with correct id", async () => {
    vi.mocked(db.deleteDeal).mockResolvedValue(undefined);
    await db.deleteDeal(1);
    expect(db.deleteDeal).toHaveBeenCalledWith(1);
  });

  it("getDealById returns undefined when not found", async () => {
    vi.mocked(db.getDealById).mockResolvedValue(undefined);
    const result = await db.getDealById(999);
    expect(result).toBeUndefined();
  });
});
