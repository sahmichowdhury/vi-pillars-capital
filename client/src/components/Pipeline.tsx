/*
 * Design: Classical Authority — Neoclassical Minimalism
 * Pipeline: Recent VIP allocation opportunities displayed as elegant cards
 * Cream background, gold borders, forest green text
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Building2, Lock } from "lucide-react";

const deals = [
  {
    name: "Confidential Sports Investment",
    sector: "Sports | Soccer",
    date: "May 2025",
    allocation: "Confidential",
    raise: "Confidential Raise",
    color: "from-forest to-forest-light",
  },
  {
    name: "Aman Group",
    sector: "Hospitality",
    date: "March 2025",
    allocation: "Confidential",
    raise: "$2.0B Raise",
    color: "from-copper to-gold-dark",
  },
  {
    name: "Datadog",
    sector: "Fintech",
    date: "December 2024",
    allocation: "Confidential",
    raise: "Confidential Raise",
    color: "from-forest-dark to-forest",
  },
  {
    name: "SpaceX",
    sector: "Aerospace",
    date: "February 2024",
    allocation: "Confidential",
    raise: "Confidential Raise",
    color: "from-gold-dark to-copper",
  },
];

export default function Pipeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="pipeline" className="py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-16"
        >
          <p className="text-copper text-sm font-medium tracking-[0.25em] uppercase mb-3">
            Track Record
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-dark mb-6 leading-tight">
            Recent Allocations
          </h2>
          <div className="w-16 h-[2px] bg-gold mb-6" />
          <p className="text-foreground/70 text-lg leading-relaxed">
            A selection of recent investment opportunities sourced and syndicated 
            by VI Pillars Capital for our investor community.
          </p>
        </motion.div>

        {/* Deals Grid */}
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {deals.map((deal, i) => (
            <motion.div
              key={deal.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 border border-gold/10"
            >
              {/* Top gradient bar */}
              <div className={`h-1.5 bg-gradient-to-r ${deal.color}`} />
              
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-forest-dark mb-1">
                      {deal.name}
                    </h3>
                    <p className="text-copper text-sm font-medium">{deal.raise}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-forest/8 flex items-center justify-center shrink-0">
                    <Building2 className="w-5 h-5 text-forest/60" />
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <Calendar className="w-4 h-4 text-gold-dark" />
                    <span className="text-foreground/60">{deal.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Building2 className="w-4 h-4 text-gold-dark" />
                    <span className="text-foreground/60">Sector: {deal.sector}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Lock className="w-4 h-4 text-gold-dark" />
                    <span className="text-foreground/60">VIP Allocation: {deal.allocation}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
