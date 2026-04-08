import { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";
import type { Express, Request, Response } from "express";
import * as db from "../db";
import { getSessionCookieOptions } from "./cookies";
import { notifyOwner } from "./notification";
import { sdk } from "./sdk";

function getQueryParam(req: Request, key: string): string | undefined {
  const value = req.query[key];
  return typeof value === "string" ? value : undefined;
}

export function registerOAuthRoutes(app: Express) {
  app.get("/api/oauth/callback", async (req: Request, res: Response) => {
    const code = getQueryParam(req, "code");
    const state = getQueryParam(req, "state");

    if (!code || !state) {
      res.status(400).json({ error: "code and state are required" });
      return;
    }

    try {
      const tokenResponse = await sdk.exchangeCodeForToken(code, state);
      const userInfo = await sdk.getUserInfo(tokenResponse.accessToken);

      if (!userInfo.openId) {
        res.status(400).json({ error: "openId missing from user info" });
        return;
      }

      // Check if this is a brand-new registration (user doesn't exist yet)
      const existingUser = await db.getUserByOpenId(userInfo.openId);
      const isNewRegistration = !existingUser;

      await db.upsertUser({
        openId: userInfo.openId,
        name: userInfo.name || null,
        email: userInfo.email ?? null,
        loginMethod: userInfo.loginMethod ?? userInfo.platform ?? null,
        lastSignedIn: new Date(),
      });

      // Fire in-app notification for new investor registrations (skip the owner)
      if (isNewRegistration && userInfo.openId !== process.env.OWNER_OPEN_ID) {
        const investorName = userInfo.name || "Unknown";
        const investorEmail = userInfo.email || "No email provided";
        const registeredAt = new Date().toLocaleString("en-US", {
          timeZone: "America/New_York",
          dateStyle: "medium",
          timeStyle: "short",
        });
        notifyOwner({
          title: `New Investor Registration — ${investorName}`,
          content: `A new investor has registered for VI Pillars Capital portal access and is awaiting your approval.\n\nName: ${investorName}\nEmail: ${investorEmail}\nRegistered: ${registeredAt} ET\n\nLog in to the Admin Panel to review and approve or reject their application.`,
        }).catch(err => console.warn("[Notification] Failed to notify owner of new registration:", err));
      }

      const sessionToken = await sdk.createSessionToken(userInfo.openId, {
        name: userInfo.name || "",
        expiresInMs: ONE_YEAR_MS,
      });

      const cookieOptions = getSessionCookieOptions(req);
      res.cookie(COOKIE_NAME, sessionToken, { ...cookieOptions, maxAge: ONE_YEAR_MS });

      res.redirect(302, "/");
    } catch (error) {
      console.error("[OAuth] Callback failed", error);
      res.status(500).json({ error: "OAuth callback failed" });
    }
  });
}
