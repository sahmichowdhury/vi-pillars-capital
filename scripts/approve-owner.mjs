/**
 * One-time script to approve the owner account and set role to admin
 * Run: node scripts/approve-owner.mjs
 */
import mysql from "mysql2/promise";
import { readFileSync } from "fs";

// Load .env manually
const envPath = new URL("../.env", import.meta.url).pathname;
let DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  try {
    const envContent = readFileSync(envPath, "utf8");
    for (const line of envContent.split("\n")) {
      const [key, ...rest] = line.split("=");
      if (key?.trim() === "DATABASE_URL") {
        DATABASE_URL = rest.join("=").trim().replace(/^["']|["']$/g, "");
        break;
      }
    }
  } catch {}
}

if (!DATABASE_URL) {
  console.error("DATABASE_URL not found. Make sure .env exists or env var is set.");
  process.exit(1);
}

const conn = await mysql.createConnection(DATABASE_URL);

// Show current users
const [users] = await conn.execute("SELECT id, name, email, role, approvalStatus FROM users");
console.log("Current users:", users);

// Approve all and set admin
for (const user of users) {
  await conn.execute(
    "UPDATE users SET approvalStatus = 'approved', role = 'admin' WHERE id = ?",
    [user.id]
  );
  console.log(`✓ Approved + admin: ${user.name} (${user.email})`);
}

await conn.end();
console.log("Done.");
