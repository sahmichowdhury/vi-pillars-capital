/**
 * Seed script: inserts the canonical deals into the `deals` table.
 * Run: npx tsx scripts/seed-deals.ts
 */
import "dotenv/config";
import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import { deals } from "../drizzle/schema";

async function main() {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not set");
  }

  const connection = await mysql.createConnection(process.env.DATABASE_URL);
  const db = drizzle(connection);

  const seedDeals = [
    {
      name: "Tercer",
      category: "Consumer",
      assetClass: "Consumer" as const,
      status: "active" as const,
      description: "Leading the social club scene in Latin America, opening its first location in Colombia.",
      minInvestment: "$20,000",
      targetReturn: null,
      featured: true,
      sortOrder: 1,
    },
    {
      name: "InnerLens Media",
      category: "Consumer",
      assetClass: "Consumer" as const,
      status: "active" as const,
      description: "HQ in New York City, with operations in Miami, Dubai, Abu Dhabi, Kuwait, and Riyadh.",
      minInvestment: "$20,000",
      targetReturn: null,
      featured: true,
      sortOrder: 2,
    },
    {
      name: "4-Plex Newark Property",
      category: "Real Estate",
      assetClass: "Real Estate" as const,
      status: "deployed" as const,
      description: "Multi-family residential property in Newark, NJ.",
      minInvestment: null,
      targetReturn: null,
      featured: false,
      sortOrder: 3,
    },
    {
      name: "SFH — Montague, NJ",
      category: "Real Estate",
      assetClass: "Real Estate" as const,
      status: "deployed" as const,
      description: "Single-family home investment in Montague, NJ.",
      minInvestment: null,
      targetReturn: null,
      featured: false,
      sortOrder: 4,
    },
    {
      name: "Whoop",
      category: "Venture",
      assetClass: "Venture" as const,
      status: "passed" as const,
      description: "Health and fitness wearable technology company.",
      minInvestment: null,
      targetReturn: null,
      featured: false,
      sortOrder: 5,
    },
    {
      name: "Aston Martin Formula 1",
      category: "Venture",
      assetClass: "Venture" as const,
      status: "passed" as const,
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
  } catch (err: any) {
    if (err.code === "ER_DUP_ENTRY") {
      console.log("⚠️  Some deals already exist — skipping duplicates.");
    } else {
      console.error("❌ Seed failed:", err.message);
      process.exit(1);
    }
  }

  await connection.end();
}

main();
