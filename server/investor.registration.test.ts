/**
 * Tests for new investor registration notification logic.
 * Verifies that notifyOwner is called for new users and skipped for returning users / owner.
 */
import { describe, expect, it, vi, beforeEach } from "vitest";

// Mock the db module
vi.mock("./db", () => ({
  getUserByOpenId: vi.fn(),
  upsertUser: vi.fn(),
}));

// Mock the notification module
vi.mock("./_core/notification", () => ({
  notifyOwner: vi.fn().mockResolvedValue(true),
}));

import * as db from "./db";
import { notifyOwner } from "./_core/notification";

// Replicate the registration notification logic extracted from oauth.ts
async function handleRegistrationNotification(
  openId: string,
  name: string | null,
  email: string | null,
  ownerOpenId: string
): Promise<void> {
  const existingUser = await db.getUserByOpenId(openId);
  const isNewRegistration = !existingUser;

  await db.upsertUser({
    openId,
    name,
    email,
    loginMethod: "google",
    lastSignedIn: new Date(),
  });

  if (isNewRegistration && openId !== ownerOpenId) {
    const investorName = name || "Unknown";
    const investorEmail = email || "No email provided";
    await notifyOwner({
      title: `New Investor Registration — ${investorName}`,
      content: `A new investor has registered for VI Pillars Capital portal access and is awaiting your approval.\n\nName: ${investorName}\nEmail: ${investorEmail}\n\nLog in to the Admin Panel to review and approve or reject their application.`,
    });
  }
}

describe("investor registration notification", () => {
  const OWNER_OPEN_ID = "owner-open-id-123";

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("fires notifyOwner when a brand-new investor registers", async () => {
    // Simulate user not existing yet
    vi.mocked(db.getUserByOpenId).mockResolvedValue(undefined);
    vi.mocked(db.upsertUser).mockResolvedValue(undefined);

    await handleRegistrationNotification(
      "new-investor-openid",
      "Alice Smith",
      "alice@example.com",
      OWNER_OPEN_ID
    );

    expect(notifyOwner).toHaveBeenCalledOnce();
    expect(notifyOwner).toHaveBeenCalledWith(
      expect.objectContaining({
        title: "New Investor Registration — Alice Smith",
        content: expect.stringContaining("alice@example.com"),
      })
    );
  });

  it("does NOT fire notifyOwner when a returning investor logs in again", async () => {
    // Simulate user already existing
    vi.mocked(db.getUserByOpenId).mockResolvedValue({
      id: 42,
      openId: "returning-investor-openid",
      name: "Bob Jones",
      email: "bob@example.com",
      role: "user",
      approvalStatus: "approved",
      adminNote: null,
      loginMethod: "google",
      createdAt: new Date(),
      updatedAt: new Date(),
      lastSignedIn: new Date(),
    });
    vi.mocked(db.upsertUser).mockResolvedValue(undefined);

    await handleRegistrationNotification(
      "returning-investor-openid",
      "Bob Jones",
      "bob@example.com",
      OWNER_OPEN_ID
    );

    expect(notifyOwner).not.toHaveBeenCalled();
  });

  it("does NOT fire notifyOwner when the owner logs in for the first time", async () => {
    // Owner is a new user but should be skipped
    vi.mocked(db.getUserByOpenId).mockResolvedValue(undefined);
    vi.mocked(db.upsertUser).mockResolvedValue(undefined);

    await handleRegistrationNotification(
      OWNER_OPEN_ID,
      "Sahmi Chowdhury",
      "sahmi@vipillarscapital.com",
      OWNER_OPEN_ID
    );

    expect(notifyOwner).not.toHaveBeenCalled();
  });

  it("includes investor name and email in the notification content", async () => {
    vi.mocked(db.getUserByOpenId).mockResolvedValue(undefined);
    vi.mocked(db.upsertUser).mockResolvedValue(undefined);

    await handleRegistrationNotification(
      "investor-xyz",
      "Carol White",
      "carol@example.com",
      OWNER_OPEN_ID
    );

    const call = vi.mocked(notifyOwner).mock.calls[0]?.[0];
    expect(call?.content).toContain("Carol White");
    expect(call?.content).toContain("carol@example.com");
    expect(call?.title).toBe("New Investor Registration — Carol White");
  });

  it("handles missing name/email gracefully with fallback values", async () => {
    vi.mocked(db.getUserByOpenId).mockResolvedValue(undefined);
    vi.mocked(db.upsertUser).mockResolvedValue(undefined);

    await handleRegistrationNotification(
      "anonymous-investor",
      null,
      null,
      OWNER_OPEN_ID
    );

    const call = vi.mocked(notifyOwner).mock.calls[0]?.[0];
    expect(call?.title).toBe("New Investor Registration — Unknown");
    expect(call?.content).toContain("No email provided");
  });
});
