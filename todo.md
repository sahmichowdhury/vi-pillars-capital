
## Investor Portal (DONE)
- [x] Extend DB schema: investor_profiles, investor_deals tables
- [x] Add approval_status field to users (pending, approved, rejected)
- [x] Build LP registration page with approval flow
- [x] Build LP login page with real auth
- [x] Build portal dashboard (post-login overview)
- [x] Build My Investments page (per-investor deal tracking)
- [x] Build Documents page (placeholder documents)
- [x] Build Profile/Settings page
- [x] Build Admin panel (approve/reject investors, assign deals)
- [x] Wire up protected routes (redirect to login if not authenticated)
- [x] Add portal navigation sidebar
- [x] Write and pass vitest tests for portal router

## Aesthetic Enhancement Pass (NEW)
- [ ] Scroll-aware navbar: transparent + white logo on load, white bg + brown logo on scroll
- [ ] Home: investment process flow diagram (SPV lifecycle)
- [ ] Home: asset class breakdown visual / icon grid
- [ ] Home: subtle animated background texture on hero
- [ ] About: Shariah screening process diagram (step-by-step flow)
- [ ] About: VI Pillars visual (6-pillar diagram)
- [ ] Team: enhanced team card with richer layout
- [ ] Dealflow: portfolio composition chart (donut/bar)
- [ ] News: featured article hero card redesign
- [ ] Global: richer section dividers and spacing

## Batch UI Fixes (Apr 8)
- [ ] Home: SPV diagram — 2-column side-by-side on mobile (less vertical space)
- [ ] Home: Featured deals — replace Tercer with InnerLens, add Aston Martin (6 total)
- [ ] About: Screening funnel — improve aesthetics, rename "Industry Screen" to "Industry & Ethical Screen"
- [ ] About: Move Community & Purpose section above Investor Education / Understanding SPVs
- [ ] Team: Remove LinkedIn & Instagram links, schooling line, career tabs, area of expertise
- [ ] Team: Change title to "Founder", simplify page for single-member team
- [ ] Dealflow: Rename "Portfolio Composition" to "Deal Exposure Composition"
- [ ] Dealflow: Rename "Hospitality" category to "Consumer"
- [ ] Contact: Fix hero banner — add dark background, visible navbar and logo

## SPV Diagram Arrow Fix
- [ ] Add centered directional arrows to SPV flow diagram (desktop + mobile)

## Targeted Fixes (Apr 8 - Round 2)
- [ ] SPV diagram: fix Investor icon vertical alignment with other icons
- [ ] Dealflow: rename "Aston Martin F1 Team" to "Aston Martin Formula 1", change icon to F1 car
- [ ] About: move Community & Purpose above Investing with Intention
- [ ] Team: rewrite bio to reflect syndicate network and shared deal exposure
- [ ] Dealflow: change InnerLens Media category from Venture to Consumer
- [x] Integrate Resend email notifications — send approval email to user when admin approves their registration
- [x] Scroll-to-top on every route change (mobile and desktop)
- [x] Archive Team page, remove from nav
- [x] Add Meet the Founder section at bottom of Home page with updated humble bio + background
- [x] Replace all emojis with Lucide icons site-wide (deal screening diagram and elsewhere)

## Site Structure & UX Improvements (Apr 22)
- [x] Crop founder photo to reduce top empty space (zoom in, cut top wall)
- [x] Reduce cursive/italic text site-wide (too much looks AI-generated)
- [x] Create Investor Education page and move all educational "what is ___" content there
- [x] Add in-page side navigation (anchor links) to long pages
- [x] Remove repetitive content across pages
- [x] Update navbar to include Investor Education page link
- [x] Add real-time search bar to Investor Education page (filter topics, sections, FAQ)
- [x] Build sticky scroll-aware page navigator (active section highlight, progress bar, click-to-jump) for long pages
- [ ] Remove % read counter and progress bar from ScrollNav, keep only section dots + labels
- [ ] Add ScrollNav to all pages (Home, Dealflow, Contact, News, LP Login)
- [ ] Remove right-side key/legend table from Dealflow page

## Nav & Content Updates (Apr 22 - Round 2)
- [x] Move Education nav link to after About and before Dealflow
- [x] Update Tercer deal description: leading social club scene in Latin America, opening first location in Colombia
- [x] Update InnerLens deal description: HQ in New York City, operations in Miami, Dubai, Abu Dhabi, Kuwait, Riyadh
- [x] Crop founder headshot to chest level with more head room, no lower body, no Gemini star — provide options
- [x] Fix mobile navbar: bar goes opaque white when hamburger menu is open (was transparent/dark at top of page)
