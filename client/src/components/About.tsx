/*
 * Design: Classical Authority — Neoclassical Minimalism
 * About: Three-column layout for What We Do / How We Do It / What We Look For
 * Cream background with subtle Islamic pattern texture, forest green headings
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Layers, Search } from "lucide-react";

const PATTERN_BG = "https://private-us-east-1.manuscdn.com/sessionFile/9mxt3zhwlXmZIxHpvdjHNq/sandbox/hzaaKWDSLjK4eq8zph9evI-img-2_1771540466000_na1fn_aXNsYW1pYy1wYXR0ZXJu.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvOW14dDN6aHdsWG1aSXhIcHZkakhOcS9zYW5kYm94L2h6YWFLV0RTTGpLNGVxOHpwaDlldkktaW1nLTJfMTc3MTU0MDQ2NjAwMF9uYTFmbl9hWE5zWVcxcFl5MXdZWFIwWlhKdS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=dnMDPRmXxaVcINdKJn6h5E-WQ5nIKWgifU2Vr5TDWSrwT2-6iRkHVNQ3Q-dGEvO-n3uRIcLynq75Xwkdd7aZ8B2vNcziqxRUdzW0lS2I3VQPKUetfM7qrG9p4BCqlTu~~NuuQigMRRvvF~R5RasfgJVUlogi2~9rGxz5sFjTjfpLfJPLC4sV3CLJikVklADuJGMldHY4GABWUEnDDpC579UahLPuQFVm7ap1togWMT47Nu2zGZq7cYrYvm9wR7VbCauaC0Xo6DtQDC6w5X8TjUCmQ~Q1xQ7~Jb2BwFp176ouqCtpv2zzs~MPfcM0C4csBTVx2YNNEvOP~oqjEF6Qwg__";

const cards = [
  {
    icon: Target,
    title: "What We Do",
    text: "VI Pillars provides ethical, Shariah-compliant investment opportunities through strategic syndications across a range of opportunistic deals that span private equity, venture capital, and real estate. We serve investors seeking Shariah compliant alternatives to traditional finance and investors who are interested in socially responsible investments.",
  },
  {
    icon: Layers,
    title: "How We Do It",
    text: "We invest deal-by-deal through Special Purpose Vehicles (SPVs), backing compelling opportunities with strategic capital from our unique investor base of socially conscious capital providers.",
  },
  {
    icon: Search,
    title: "What We Look For",
    text: "We typically deploy a check size that is commensurate to the opportunity, with a preference for compelling businesses that have clear product market fit, and non-traditional investments such as sports teams and media productions.",
  },
];

function AnimatedCard({ card, index }: { card: typeof cards[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="group relative bg-white rounded-sm p-8 lg:p-10 shadow-sm hover:shadow-lg transition-shadow duration-500 border border-gold/10"
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-forest to-gold rounded-t-sm" />
      
      <div className="w-12 h-12 rounded-sm bg-forest/10 flex items-center justify-center mb-6 group-hover:bg-forest/15 transition-colors duration-300">
        <card.icon className="w-6 h-6 text-forest" />
      </div>

      <h3 className="font-serif text-2xl font-semibold text-forest-dark mb-4">
        {card.title}
      </h3>

      <p className="text-foreground/70 leading-relaxed text-[15px]">
        {card.text}
      </p>
    </motion.div>
  );
}

export default function About() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{
        backgroundImage: `url(${PATTERN_BG})`,
        backgroundSize: "600px",
        backgroundRepeat: "repeat",
      }}
    >
      {/* Overlay to soften pattern */}
      <div className="absolute inset-0 bg-cream/85" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-16"
        >
          <p className="text-copper text-sm font-medium tracking-[0.25em] uppercase mb-3">
            Overview
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-dark mb-6 leading-tight">
            VI Pillars Capital
          </h2>
          <div className="w-16 h-[2px] bg-gold mb-6" />
          <p className="text-foreground/70 text-lg leading-relaxed">
            A purpose-built Syndicate Lead aiming to pair socially conscious capital 
            with exclusive private markets investment opportunities.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, i) => (
            <AnimatedCard key={card.title} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
