/**
 * Shared deals data — used by DealflowPage and AdminPanel deal assignment dropdown.
 * Keep this file in sync whenever deals are added or updated on the Dealflow page.
 */

export type DealStatus = "Active" | "Deployed" | "Exited" | "Passed";

export interface DealSummary {
  name: string;
  category: string;
  status: DealStatus;
  link?: string;
}

/**
 * Canonical list of all VI Pillars Capital deals.
 * Ordered: Active → Deployed → Passed, then Venture → Real Estate → Hospitality, largest valuation first.
 */
export const DEALS: DealSummary[] = [
  // Active — Venture
  { name: "InnerLens Media", category: "Venture", status: "Active", link: "https://www.innerlensmedia.com/" },
  // Active — Real Estate
  { name: "Single Family Home — Montague, NJ", category: "Real Estate", status: "Active" },
  // Active — Hospitality
  { name: "Tercer", category: "Hospitality", status: "Active", link: "https://www.tercerclub.com/" },
  // Deployed — Venture
  { name: "SpaceX", category: "Venture", status: "Deployed", link: "https://www.spacex.com/" },
  // Deployed — Real Estate
  { name: "4-Plex Newark Property", category: "Real Estate", status: "Deployed" },
  // Passed — Venture
  { name: "Whoop", category: "Venture", status: "Passed", link: "https://www.whoop.com/" },
  { name: "Aston Martin F1 Team", category: "Venture", status: "Passed", link: "https://www.astonmartinf1.com/en-GB" },
  { name: "CoreWeave", category: "Venture", status: "Passed", link: "https://www.coreweave.com/" },
];

/** Sentinel value used in the dropdown to indicate a custom/unlisted deal */
export const CUSTOM_DEAL_VALUE = "__custom__";
