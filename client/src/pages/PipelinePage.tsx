/*
 * Pipeline Page: Dark green hero header, filter tabs, deal cards grid
 * Matches Xirge Holdings page structure
 */
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Calendar, DollarSign, Tag } from "lucide-react";
import CTASection from "@/components/CTASection";

const deals = [
  {
    name: "Confidential Raise",
    sector: "Sports | Soccer",
    date: "May 2025",
    allocation: "Confidential",
    category: "Sports",
    description: "A unique opportunity to invest in a professional soccer club with strong growth potential and a passionate global fanbase.",
    status: "Active",
  },
  {
    name: "Aman Group",
    sector: "Hospitality",
    date: "March 2025",
    allocation: "Confidential",
    category: "Real Estate",
    raiseSize: "$2.0B",
    description: "Investment in one of the world's most prestigious luxury hospitality brands, known for ultra-premium resorts and residences across the globe.",
    status: "Active",
  },
  {
    name: "Datadog",
    sector: "Fintech",
    date: "December 2024",
    allocation: "Confidential",
    category: "Pre-IPO",
    description: "A leading cloud monitoring and analytics platform serving enterprise customers worldwide, with strong recurring revenue and market positioning.",
    status: "Completed",
  },
  {
    name: "SpaceX",
    sector: "Aerospace",
    date: "February 2024",
    allocation: "Confidential",
    category: "Pre-IPO",
    description: "The world's leading private aerospace manufacturer and space transportation company, pioneering reusable rocket technology and satellite internet.",
    status: "Completed",
  },
];

const categories = ["All Pipeline", "Pre-IPO", "Real Estate", "Sports"];

const categoryColors: Record<string, string> = {
  "Sports": "text-copper bg-copper/8",
  "Real Estate": "text-forest bg-forest/8",
  "Pre-IPO": "text-gold-dark bg-gold/10",
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
      <section className="pt-[72px] bg-forest-dark">
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
            <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto">
              Explore our curated selection of ethically-screened investment opportunities
              across private equity, real estate, and non-traditional assets.
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
                    ? "bg-forest-dark text-white border-forest-dark"
                    : "bg-white text-foreground/60 border-border hover:border-forest-dark/30 hover:text-forest-dark"
                }`}
              >
                {cat}
              </button>
            ))}
            <div className="ml-auto hidden sm:flex items-center gap-2 text-xs text-forest-dark/60 bg-cream px-4 py-2 rounded-full">
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
                className="rounded-xl border border-gold/10 bg-white hover:shadow-md transition-shadow duration-300 overflow-hidden"
              >
                <div className="p-7">
                  {/* Category Label */}
                  <span className={`inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4 ${categoryColors[deal.category] || "text-foreground/60 bg-muted"}`}>
                    {deal.category}
                  </span>

                  {/* Deal Name */}
                  <h3 className="font-serif text-xl font-bold text-forest-dark mb-2">
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
                    {deal.raiseSize && (
                      <div className="flex items-center gap-1.5 text-foreground/50">
                        <DollarSign className="w-3.5 h-3.5" />
                        <span>{deal.raiseSize} Raise</span>
                      </div>
                    )}
                  </div>

                  {/* Status Tag */}
                  <div className="mt-4 flex items-center gap-2">
                    <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full ${
                      deal.status === "Active"
                        ? "bg-forest/8 text-forest"
                        : "bg-gold/10 text-gold-dark"
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        deal.status === "Active" ? "bg-forest" : "bg-gold-dark"
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
