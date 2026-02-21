/*
 * Pipeline Page: Warm dark hero header, filter tabs, deal cards grid
 * Updated deals: SpaceX, Whoop (Pre-IPO), 4-Plex Newark (Real Estate), Tercer (Hospitality)
 */
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Calendar, DollarSign, Tag, ExternalLink } from "lucide-react";
import CTASection from "@/components/CTASection";

const deals = [
  {
    name: "4-Plex Newark Property",
    sector: "Residential Multi-Family",
    date: "2025",
    allocation: "Confidential",
    category: "Real Estate",
    description: "A four-unit residential property in Newark, NJ offering strong cash flow potential and long-term appreciation in one of the fastest-growing metro areas on the East Coast.",
    status: "Active",
  },
  {
    name: "Tercer",
    sector: "Members-Only Club",
    date: "2025",
    allocation: "Confidential",
    category: "Hospitality",
    description: "An exclusive members-only social club redefining nightlife and hospitality. Tercer offers a curated experience blending wellness, entertainment, and community in a sophisticated setting.",
    status: "Active",
    link: "https://www.tercerclub.com/",
  },
  {
    name: "Whoop",
    sector: "Wearable Technology",
    date: "2025",
    allocation: "Confidential",
    category: "Pre-IPO",
    description: "A leading wearable health and fitness technology company providing advanced biometric tracking for sleep, recovery, and strain. Whoop has built a loyal subscriber base and is positioned as a top pre-IPO opportunity in the health tech space.",
    status: "Active",
    link: "https://www.whoop.com/",
  },
  {
    name: "SpaceX",
    sector: "Aerospace",
    date: "February 2024",
    allocation: "Confidential",
    category: "Pre-IPO",
    description: "The world's leading private aerospace manufacturer and space transportation company, pioneering reusable rocket technology and satellite internet with Starlink.",
    status: "Completed",
  },
];

const categories = ["All Pipeline", "Pre-IPO", "Real Estate", "Hospitality"];

const categoryColors: Record<string, string> = {
  "Real Estate": "text-copper bg-copper/8",
  "Hospitality": "text-gold-dark bg-gold/10",
  "Pre-IPO": "text-warm-mid bg-warm-mid/8",
};

export default function PipelinePage() {
  const [activeFilter, setActiveFilter] = useState("All Pipeline");
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-60px" });
  const cardsRef = useRef(null);
  const isCardsInView = useInView(cardsRef, { once: true, margin: "-60px" });

  const filteredDeals = activeFilter === "All Pipeline"
    ? deals
    : deals.filter((d) => d.category === activeFilter);

  return (
    <>
      {/* Hero Header */}
      <section className="pt-[72px] bg-warm-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28 text-center">
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 24 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
              Our{" "}
              <span className="italic text-gold">Pipeline</span>
            </h1>
            <p className="text-white/55 text-lg leading-relaxed max-w-2xl mx-auto">
              Explore our curated selection of ethically-screened investment opportunities
              across private equity, real estate, hospitality, and pre-IPO ventures.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter & Cards */}
      <section className="py-16 lg:py-20 bg-white">
        <div ref={cardsRef} className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 mb-8">
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

          {/* Deal Cards Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {filteredDeals.map((deal, i) => (
              <motion.div
                key={deal.name}
                initial={{ opacity: 0, y: 24 }}
                animate={isCardsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-gold/10 bg-white hover:shadow-md transition-shadow duration-300 overflow-hidden"
              >
                <div className="p-7">
                  {/* Category Label */}
                  <span className={`inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4 ${categoryColors[deal.category] || "text-foreground/60 bg-muted"}`}>
                    {deal.category}
                  </span>

                  {/* Deal Name */}
                  <h3 className="font-serif text-xl font-bold text-warm-dark mb-2">
                    {deal.name}
                  </h3>

                  {/* Description */}
                  <p className="text-foreground/55 text-sm leading-relaxed mb-5">
                    {deal.description}
                  </p>

                  {/* Metadata */}
                  <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
                    <div className="flex items-center gap-1.5 text-foreground/50">
                      <Tag className="w-3.5 h-3.5" />
                      <span>{deal.sector}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-foreground/50">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{deal.date}</span>
                    </div>
                    {deal.link && (
                      <a
                        href={deal.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-gold-dark hover:text-copper transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Website</span>
                      </a>
                    )}
                  </div>

                  {/* Status Tag */}
                  <div className="mt-4 flex items-center gap-2">
                    <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full ${
                      deal.status === "Active"
                        ? "bg-gold/10 text-gold-dark"
                        : "bg-warm-mid/8 text-warm-mid"
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        deal.status === "Active" ? "bg-gold-dark" : "bg-warm-mid"
                      }`} />
                      {deal.status}
                    </span>
                    <span className="text-xs text-foreground/40">
                      VIP Allocation: {deal.allocation}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="Interested in our"
        accentWord="pipeline?"
        description="Connect with our team to learn more about current and upcoming investment opportunities. New deals are sourced regularly."
        buttonText="Contact Us"
        buttonHref="/contact"
      />
    </>
  );
}
