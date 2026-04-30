/**
 * Seed script: inserts the canonical deals into the `deals` table.
 * Run once: node scripts/seed-deals.mjs
 */
import "dotenv/config";
import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

const connection = await mysql.createConnection(process.env.DATABASE_URL);
const db = drizzle(connection);

// Import schema via dynamic import (ESM)
const { deals } = await import("../drizzle/schema.js").catch(async () => {
  // fallback: use ts-node style path
  const m = await import("../drizzle/schema.ts");
  return m;
});

const seedDeals = [
  {
    name: "Tercer",
    category: "Consumer",
    assetClass: "Consumer",
    status: "active",
    description: "Leading the social club scene in Latin America, opening its first location in Colombia.",
    minInvestment: "$20,000",
    targetReturn: null,
    featured: true,
    sortOrder: 1,
  },
  {
    name: "InnerLens Media",
    category: "Consumer",
    assetClass: "Consumer",
    status: "active",
    description: "HQ in New York City, with operations in Miami, Dubai, Abu Dhabi, Kuwait, and Riyadh.",
    minInvestment: "$20,000",
    targetReturn: null,
    featured: true,
    sortOrder: 2,
  },
  {
    name: "4-Plex Newark Property",
    category: "Real Estate",
    assetClass: "Real Estate",
    status: "deployed",
    description: "Multi-family residential property in Newark, NJ.",
    minInvestment: null,
    targetReturn: null,
    featured: false,
    sortOrder: 3,
  },
  {
    name: "SFH — Montague, NJ",
    category: "Real Estate",
    assetClass: "Real Estate",
    status: "deployed",
    description: "Single-family home investment in Montague, NJ.",
    minInvestment: null,
    targetReturn: null,
    featured: false,
    sortOrder: 4,
  },
  {
    name: "Whoop",
    category: "Venture",
    assetClass: "Venture",
    status: "passed",
    description: "Health and fitness wearable technology company.",
    minInvestment: null,
    targetReturn: null,
    featured: false,
    sortOrder: 5,
  },
  {
    name: "Aston Martin Formula 1",
    category: "Venture",
    assetClass: "Venture",
    status: "passed",
    description: "Formula 1 racing team investment opportunity.",
    minInvestment: null,
    targetReturn: null,
    featured: false,
    sortOrder: 6,
  },
];

try {
  await db.insert(deals).values(seedDeals);
  console.log(`✅ Seeded ${seedDeals.length} deals successfully.`);
} catch (err) {
  if (err.code === "ER_DUP_ENTRY") {
    console.log("⚠️  Some deals already exist — skipping duplicates.");
  } else {
    console.error("❌ Seed failed:", err.message);
    process.exit(1);
  }
}

await connection.end();
