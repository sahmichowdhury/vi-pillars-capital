/*
 * Dealflow Page: Renamed from Pipeline
 * Statuses: Active (green), Deployed (blue), Exited (red), Passed (yellow)
 * Whoop = Passed, Pre-IPO filter renamed to Venture
 * Includes VIP Allocation, Valuation, and pass reasons
 */
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Shield,
  Calendar,
  ExternalLink,
  Building2,
  Rocket,
  Watch,
  Sparkles,
  Hammer,
  TrendingUp,
  DollarSign,
  BarChart3,
  Layers,
  Target,
  Users,
  CircleDot,
  CheckCircle2,
  ArrowRight,
  Briefcase,
  Globe,
  Scale,
  FileSearch,
  AlertTriangle,
  XCircle,
  BadgeDollarSign,
} from "lucide-react";
import { Link } from "wouter";
import CTASection from "@/components/CTASection";

type DealStatus = "Active" | "Deployed" | "Exited" | "Passed";

interface Deal {
  name: string;
  description: string;
  category: string;
  industry: string;
  subIndustry: string;
  revenueModel: string;
  date: string;
  allocation: string;
  valuation: string;
  vipAllocation: string;
  status: DealStatus;
  passReason?: string;
  link?: string;
  icon: React.ElementType;
  highlights: string[];
}

const deals: Deal[] = [
  {
    name: "4-Plex Newark Property",
    description:
      "A four-unit residential property in Newark, NJ offering strong cash flow potential and long-term appreciation in one of the fastest-growing metro areas on the East Coast.",
    category: "Real Estate",
    industry: "Real Estate",
    subIndustry: "Residential Multi-Family",
    revenueModel: "Rental Income & Appreciation",
    date: "Q1 2025",
    allocation: "Confidential",
    valuation: "$850,000",
    vipAllocation: "Confidential",
    status: "Deployed",
    icon: Building2,
    highlights: [
      "4-unit residential property",
      "Strong cash flow potential",
      "High-growth metro area",
    ],
  },
  {
    name: "Single Family Home — Montague, NJ",
    description:
      "Ground-up construction of a single-family home in Montague, NJ, targeting the growing demand for new residential builds in Northern New Jersey. The property will be sold upon completion for a projected profit.",
    category: "Real Estate",
    industry: "Real Estate",
    subIndustry: "Residential Construction",
    revenueModel: "Build-to-Sell (Flip)",
    date: "Q2 2025",
    allocation: "Confidential",
    valuation: "$425,000",
    vipAllocation: "Confidential",
    status: "Active",
    icon: Hammer,
    highlights: [
      "New construction build",
      "Build-to-sell strategy",
      "Northern NJ market",
    ],
  },
  {
    name: "Tercer",
    description:
      "An exclusive members-only social club redefining hospitality and leisure. Tercer offers a curated experience blending wellness, entertainment, and community in a sophisticated setting.",
    category: "Hospitality",
    industry: "Hospitality & Leisure",
    subIndustry: "Members-Only Club",
    revenueModel: "Membership Fees & Event Revenue",
    date: "Q1 2025",
    allocation: "Confidential",
    valuation: "$2,500,000",
    vipAllocation: "Confidential",
    status: "Active",
    link: "https://www.tercerclub.com/",
    icon: Sparkles,
    highlights: [
      "Exclusive membership model",
      "Wellness & entertainment blend",
      "Recurring revenue base",
    ],
  },
  {
    name: "Whoop",
    description:
      "A leading wearable health and fitness technology company providing advanced biometric tracking for sleep, recovery, and strain. Whoop has built a loyal subscriber base and is positioned as a top pre-IPO opportunity in the health tech space.",
    category: "Venture",
    industry: "Technology",
    subIndustry: "Wearable Health Tech (Pre-IPO)",
    revenueModel: "Subscription (SaaS / Hardware)",
    date: "Q4 2024",
    allocation: "—",
    valuation: "$3,600,000,000",
    vipAllocation: "—",
    status: "Passed",
    passReason: "Economic uncertainty regarding the energy and other sectors due to the Israel-Iran conflict.",
    link: "https://www.whoop.com/",
    icon: Watch,
    highlights: [
      "Loyal subscriber base",
      "Biometric tracking leader",
      "Pre-IPO growth stage",
    ],
  },
  {
    name: "SpaceX",
    description:
      "The world's leading private aerospace manufacturer and space transportation company, pioneering reusable rocket technology and satellite internet with Starlink.",
    category: "Venture",
    industry: "Aerospace & Defense",
    subIndustry: "Space Transportation (Pre-IPO)",
    revenueModel: "Launch Services & Satellite Subscriptions",
    date: "February 2024",
    allocation: "Confidential",
    valuation: "$350,000,000,000",
    vipAllocation: "Confidential",
    status: "Deployed",
    icon: Rocket,
    highlights: [
      "Reusable rocket technology",
      "Starlink satellite internet",
      "Market-leading position",
    ],
  },
];

const categories = ["All Dealflow", "Venture", "Real Estate", "Hospitality"];

const statusConfig: Record<
  DealStatus,
  { bg: string; text: string; dot: string; label: string; borderColor: string }
> = {
  Active: {
    bg: "bg-emerald-50",
    text: "text-emerald-700",
    dot: "bg-emerald-500",
    label: "Active",
    borderColor: "border-emerald-200",
  },
  Deployed: {
    bg: "bg-blue-50",
    text: "text-blue-700",
    dot: "bg-blue-500",
    label: "Deployed",
    borderColor: "border-blue-200",
  },
  Exited: {
    bg: "bg-red-50",
    text: "text-red-700",
    dot: "bg-red-500",
    label: "Exited",
    borderColor: "border-red-200",
  },
  Passed: {
    bg: "bg-amber-50",
    text: "text-amber-700",
    dot: "bg-amber-500",
    label: "Passed",
    borderColor: "border-amber-200",
  },
};

const categoryColors: Record<string, string> = {
  "Real Estate": "text-copper bg-copper/8",
  Hospitality: "text-gold-dark bg-gold/10",
  Venture: "text-warm-mid bg-warm-mid/8",
};

/* ---------- Dealflow Summary Stats ---------- */
function DealflowStats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  const activeCount = deals.filter((d) => d.status === "Active").length;
  const deployedCount = deals.filter((d) => d.status === "Deployed").length;
  const passedCount = deals.filter((d) => d.status === "Passed").length;

  const stats = [
    { label: "Total Deals Reviewed", value: String(deals.length), icon: Briefcase },
    { label: "Active", value: String(activeCount), icon: TrendingUp },
    { label: "Deployed", value: String(deployedCount), icon: CheckCircle2 },
    { label: "Asset Classes", value: "3", icon: Layers },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10"
    >
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-tan-light/40 rounded-xl border border-gold/10 p-5 flex items-center gap-4"
        >
          <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
            <stat.icon className="w-5 h-5 text-gold-dark" />
          </div>
          <div>
            <div className="font-serif text-2xl font-bold text-warm-dark">{stat.value}</div>
            <p className="text-foreground/50 text-xs">{stat.label}</p>
          </div>
        </div>
      ))}
    </motion.div>
  );
}

/* ---------- Why Invest With Us ---------- */
function WhyInvestSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const reasons = [
    {
      icon: Shield,
      title: "Ethically Screened",
      desc: "Every deal passes through rigorous ethical screening and compliance review before it reaches our investors.",
    },
    {
      icon: FileSearch,
      title: "Thorough Due Diligence",
      desc: "Our team conducts comprehensive analysis covering financials, market positioning, management quality, and risk factors.",
    },
    {
      icon: Scale,
      title: "Transparent Structures",
      desc: "Clear SPV structures with no hidden fees. You know exactly what you're investing in, how much it costs, and what the terms are.",
    },
    {
      icon: Globe,
      title: "Diverse Opportunities",
      desc: "From real estate to pre-IPO ventures to hospitality — access a diversified pipeline across multiple asset classes.",
    },
    {
      icon: Users,
      title: "Accessible Entry",
      desc: "With minimums starting at $20,000, institutional-quality deals are now accessible to individual investors.",
    },
    {
      icon: BarChart3,
      title: "Deal-by-Deal Choice",
      desc: "No blind pools. Review each opportunity independently and invest only in the deals that align with your personal goals.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-warm-dark relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] border border-gold/5 rounded-full" />
        <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] border border-gold/5 rounded-full" />
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-gold/10 border border-gold/20 rounded-full text-gold text-xs font-medium tracking-wider uppercase mb-6">
            <Shield className="w-3.5 h-3.5" />
            Why Invest With Us
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
            Your capital,{" "}
            <span className="italic text-gold">our commitment.</span>
          </h2>
          <p className="text-white/50 text-base leading-relaxed max-w-2xl mx-auto">
            We treat every dollar entrusted to us as a responsibility. Here's why investors
            choose VI Pillars Capital for their ethical investment journey.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-6 rounded-xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm hover:bg-white/[0.07] transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-gold/15 flex items-center justify-center mb-4">
                <r.icon className="w-5 h-5 text-gold" />
              </div>
              <h3 className="text-white text-sm font-semibold mb-2">{r.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Dealflow Page ---------- */
export default function DealflowPage() {
  const [activeFilter, setActiveFilter] = useState("All Dealflow");
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-60px" });
  const cardsRef = useRef(null);
  const isCardsInView = useInView(cardsRef, { once: true, margin: "-60px" });

  const filteredDeals =
    activeFilter === "All Dealflow"
      ? deals
      : deals.filter((d) => d.category === activeFilter);

  return (
    <>
      {/* Hero Header */}
      <section className="pt-[72px] bg-warm-dark relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-warm-dark via-[oklch(0.25_0.03_55)] to-[oklch(0.20_0.02_70)]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 24 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-gold/10 border border-gold/20 rounded-full text-gold text-xs font-medium tracking-wider uppercase mb-6">
              <Briefcase className="w-3.5 h-3.5" />
              Dealflow
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
              Our <span className="italic text-gold">Dealflow</span>
            </h1>
            <p className="text-white/55 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              Explore our curated selection of ethically-screened investment
              opportunities across venture, real estate, and hospitality. Every deal
              in our pipeline has been rigorously vetted for both financial merit
              and principled compliance.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-white/40 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Active
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                Deployed
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500" />
                Exited
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                Passed
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter & Cards */}
      <section className="py-16 lg:py-20 bg-white">
        <div ref={cardsRef} className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Summary Stats */}
          <DealflowStats />

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 text-sm font-medium rounded-full border transition-all duration-200 ${
                  activeFilter === cat
                    ? "bg-warm-dark text-white border-warm-dark"
                    : "bg-white text-foreground/60 border-border hover:border-gold/40 hover:text-warm-dark"
                }`}
              >
                {cat}
              </button>
            ))}
            <div className="ml-auto hidden sm:flex items-center gap-2 text-xs text-gold-dark/70 bg-tan-light px-4 py-2 rounded-full">
              <Shield className="w-3.5 h-3.5" />
              All investments are ethically screened
            </div>
          </div>

          {/* Deal Cards — Clean box layout */}
          <div className="grid gap-6 lg:grid-cols-2">
            {filteredDeals.map((deal, i) => {
              const Icon = deal.icon;
              const status = statusConfig[deal.status];

              return (
                <motion.div
                  key={deal.name}
                  initial={{ opacity: 0, y: 24 }}
                  animate={isCardsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={`rounded-2xl border bg-white hover:shadow-lg transition-all duration-300 overflow-hidden ${status.borderColor}`}
                >
                  {/* Status Bar */}
                  <div className={`px-6 py-3 ${status.bg} flex items-center justify-between`}>
                    <span className={`inline-flex items-center gap-1.5 text-xs font-semibold ${status.text}`}>
                      <span
                        className={`w-2 h-2 rounded-full ${status.dot} ${
                          deal.status === "Active" ? "animate-pulse" : ""
                        }`}
                      />
                      {status.label}
                    </span>
                    <span className={`text-[10px] font-semibold uppercase tracking-[0.15em] px-2.5 py-0.5 rounded-full ${
                      categoryColors[deal.category] || "text-foreground/60 bg-muted"
                    }`}>
                      {deal.category}
                    </span>
                  </div>

                  <div className="p-6">
                    {/* Header: Icon + Name */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-warm-dark to-warm-dark/80 flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6 text-gold" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-serif text-xl font-bold text-warm-dark">
                            {deal.name}
                          </h3>
                          {deal.link && (
                            <a
                              href={deal.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gold-dark hover:text-copper transition-colors"
                              title="Visit website"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                        <p className="text-foreground/50 text-xs">{deal.subIndustry}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-foreground/60 text-sm leading-relaxed mb-5">
                      {deal.description}
                    </p>

                    {/* Pass Reason */}
                    {deal.status === "Passed" && deal.passReason && (
                      <div className="mb-5 p-3 rounded-lg bg-amber-50 border border-amber-200/50 flex items-start gap-2.5">
                        <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-amber-800 text-xs font-semibold mb-0.5">Reason for Passing</p>
                          <p className="text-amber-700 text-xs leading-relaxed">{deal.passReason}</p>
                        </div>
                      </div>
                    )}

                    {/* Detail Grid */}
                    <div className="grid grid-cols-2 gap-3 mb-5">
                      <div className="bg-stone-50 rounded-lg p-3">
                        <div className="flex items-center gap-1.5 text-foreground/40 text-[10px] uppercase tracking-wider font-semibold mb-1">
                          <DollarSign className="w-3 h-3" />
                          Valuation When Offered
                        </div>
                        <p className="text-warm-dark text-sm font-semibold">{deal.valuation}</p>
                      </div>
                      <div className="bg-stone-50 rounded-lg p-3">
                        <div className="flex items-center gap-1.5 text-foreground/40 text-[10px] uppercase tracking-wider font-semibold mb-1">
                          <BadgeDollarSign className="w-3 h-3" />
                          VIP Allocation
                        </div>
                        <p className="text-warm-dark text-sm font-semibold">{deal.vipAllocation}</p>
                      </div>
                      <div className="bg-stone-50 rounded-lg p-3">
                        <div className="flex items-center gap-1.5 text-foreground/40 text-[10px] uppercase tracking-wider font-semibold mb-1">
                          <BarChart3 className="w-3 h-3" />
                          Revenue Model
                        </div>
                        <p className="text-warm-dark text-xs font-medium">{deal.revenueModel}</p>
                      </div>
                      <div className="bg-stone-50 rounded-lg p-3">
                        <div className="flex items-center gap-1.5 text-foreground/40 text-[10px] uppercase tracking-wider font-semibold mb-1">
                          <Calendar className="w-3 h-3" />
                          Date
                        </div>
                        <p className="text-warm-dark text-sm font-medium">{deal.date}</p>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2">
                      {deal.highlights.map((h) => (
                        <span
                          key={h}
                          className="inline-flex items-center gap-1.5 text-xs text-foreground/50 bg-stone-50 border border-stone-100 px-3 py-1.5 rounded-full"
                        >
                          <CircleDot className="w-2.5 h-2.5 text-gold-dark/60" />
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Invest Section */}
      <WhyInvestSection />

      {/* Disclaimer */}
      <section className="py-12 bg-tan-light/40">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-xl border border-gold/10 p-6 lg:p-8">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-gold-dark shrink-0 mt-0.5" />
              <div>
                <h3 className="text-warm-dark text-sm font-semibold mb-2">Important Disclosure</h3>
                <p className="text-foreground/50 text-xs leading-relaxed">
                  All investments carry risk, including the potential loss of principal. Past performance
                  does not guarantee future results. The information presented here is for informational
                  purposes only and does not constitute an offer to sell or a solicitation of an offer to
                  buy any securities. Prospective investors should conduct their own due diligence and
                  consult with their financial, legal, and tax advisors before making any investment decisions.
                  VI Pillars Capital operates in compliance with applicable securities regulations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Status Key Legend */}
      <section className="py-8 bg-stone-50 border-t border-stone-200">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <Target className="w-4 h-4 text-foreground/40" />
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground/50">Status Key</h4>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-stone-200">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse mt-1 shrink-0" />
              <div>
                <p className="text-xs font-semibold text-emerald-700">Active</p>
                <p className="text-[11px] text-foreground/45 leading-snug">Deal is currently active and VIP is still fundraising.</p>
              </div>
            </div>
            <div className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-stone-200">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500 mt-1 shrink-0" />
              <div>
                <p className="text-xs font-semibold text-blue-700">Deployed</p>
                <p className="text-[11px] text-foreground/45 leading-snug">The deal is closed. VIP has deployed the capital and is invested.</p>
              </div>
            </div>
            <div className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-stone-200">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 mt-1 shrink-0" />
              <div>
                <p className="text-xs font-semibold text-red-700">Exited</p>
                <p className="text-[11px] text-foreground/45 leading-snug">VIP has exited the deal.</p>
              </div>
            </div>
            <div className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-stone-200">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 mt-1 shrink-0" />
              <div>
                <p className="text-xs font-semibold text-amber-700">Passed</p>
                <p className="text-[11px] text-foreground/45 leading-snug">VIP has passed on the deal.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        headline="Interested in our"
        accentWord="dealflow?"
        description="Connect with our team to learn more about current and upcoming investment opportunities. New deals are sourced regularly and we'd love to discuss how they align with your goals."
        buttonText="Contact Us"
        buttonHref="/contact"
      />
    </>
  );
}
