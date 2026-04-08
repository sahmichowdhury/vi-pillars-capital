/*
 * About Page: Enhanced with SPV education diagram, community focus,
 * ethical investing emphasis, investor journey, core values, FAQ
 * Shariah language softened — focus on ethics, structure, due diligence
 */
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Shield, CheckCircle2, DollarSign, Building2, Rocket,
  Ban, Eye, Handshake, Star, Users, ChevronDown,
  Target, Scale, Heart, Globe, Leaf, Lock,
  TrendingUp, BarChart3, FileSearch, Briefcase,
  ArrowRight, Award, BookOpen, Lightbulb, GraduationCap,
  ArrowDown, CircleDot, Layers,
} from "lucide-react";
import CTASection from "@/components/CTASection";

/* ---------- About Hero ---------- */
function AboutHero() {
  return (
    <section className="pt-[72px] bg-flint relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-flint via-[oklch(0.25_0.03_55)] to-[oklch(0.20_0.02_70)]" />
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.04]">
          <div className="absolute top-10 right-10 w-[350px] h-[350px] border border-sandstone rounded-full" />
          <div className="absolute top-32 right-32 w-[250px] h-[250px] border border-sandstone rounded-full" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-sandstone/10 border border-sandstone/20 rounded-full text-sandstone text-xs font-medium tracking-wider uppercase">
                <Shield className="w-3.5 h-3.5" />
                About VI Pillars Capital
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
            >
              Principled investing,{" "}
              <span className="italic text-sandstone">purposeful returns.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/55 text-lg leading-relaxed max-w-xl"
            >
              VI Pillars Capital is a purpose-built Syndicate Lead pairing socially
              conscious capital with exclusive private markets investment opportunities.
              We believe that wealth creation and ethical responsibility go hand in hand.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { label: "Asset Classes", value: "3+", icon: BarChart3 },
              { label: "Min. Investment", value: "$20K", icon: DollarSign },
              { label: "Ethically Screened", value: "100%", icon: Shield },
              { label: "Investor Access", value: "Open", icon: Users },
            ].map((stat) => (
              <div
                key={stat.label}
                className="p-5 bg-white/[0.04] border border-white/[0.08] rounded-xl backdrop-blur-sm"
              >
                <stat.icon className="w-5 h-5 text-sandstone mb-3" />
                <div className="font-serif text-2xl font-bold text-white mb-1">{stat.value}</div>
                <p className="text-white/40 text-xs">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Mission / Vision Cards ---------- */
function MissionVision() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Target,
              title: "What We Do",
              text: "VI Pillars provides ethically screened investment opportunities through strategic syndications across a range of deals spanning private equity, venture capital, real estate, and consumer — all structured with integrity and transparency.",
            },
            {
              icon: Briefcase,
              title: "How We Do It",
              text: "We invest deal-by-deal through Special Purpose Vehicles (SPVs), backing compelling opportunities with strategic capital from our unique investor base of socially conscious capital providers.",
            },
            {
              icon: FileSearch,
              title: "What We Look For",
              text: "Compelling businesses with clear product-market fit, non-traditional investments with strong upside potential, and real estate opportunities in high-growth markets — all rigorously vetted and ethically screened.",
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 rounded-2xl border border-sandstone/10 bg-cream/30 hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-flint to-flint-light flex items-center justify-center mb-5">
                <card.icon className="w-6 h-6 text-sandstone" />
              </div>
              <h3 className="font-serif text-xl font-bold text-flint mb-4">
                {card.title}
              </h3>
              <p className="text-foreground/60 text-[15px] leading-relaxed">
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- SPV Education Diagram ---------- */
function SPVDiagram() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-20 lg:py-28 bg-cream/40">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-sandstone/8 border border-sandstone/15 rounded-full text-leather text-xs font-medium tracking-wider uppercase mb-6">
            <GraduationCap className="w-3.5 h-3.5" />
            Investor Education
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-flint leading-tight mb-5">
            Understanding{" "}
            <span className="italic text-leather">SPVs.</span>
          </h2>
          <p className="text-foreground/60 text-base leading-relaxed max-w-2xl mx-auto">
            A Special Purpose Vehicle (SPV) is a dedicated legal entity created for a single investment.
            It's the backbone of how VI Pillars Capital structures every deal — giving you transparency,
            control, and direct exposure.
          </p>
        </motion.div>

        {/* Interactive SPV Flow Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-white rounded-2xl border border-sandstone/15 p-8 lg:p-10 shadow-sm">
            {/* Flow: Investors → SPV → Deal */}
            <div className="flex flex-col items-center gap-4">
              {/* Investors Row */}
              <div className="flex flex-wrap justify-center gap-3">
                {["Investor A", "Investor B", "Investor C", "You"].map((inv, i) => (
                  <motion.div
                    key={inv}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                    className={`px-5 py-3 rounded-xl border text-sm font-semibold text-center ${
                      inv === "You"
                        ? "bg-sandstone/15 border-sandstone/40 text-leather"
                        : "bg-cream/50 border-sandstone/10 text-flint/70"
                    }`}
                  >
                    <Users className="w-4 h-4 mx-auto mb-1.5 opacity-60" />
                    {inv}
                  </motion.div>
                ))}
              </div>

              {/* Arrow Down */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.7 }}
                className="flex flex-col items-center gap-1"
              >
                <div className="w-px h-8 bg-gradient-to-b from-sandstone/40 to-sandstone" />
                <ArrowDown className="w-5 h-5 text-sandstone" />
                <span className="text-xs text-foreground/40 font-medium">Capital Pooled</span>
              </motion.div>

              {/* SPV Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="w-full max-w-sm bg-flint rounded-2xl p-6 text-center"
              >
                <Layers className="w-8 h-8 text-sandstone mx-auto mb-3" />
                <h4 className="text-white font-serif text-lg font-bold mb-1">Special Purpose Vehicle</h4>
                <p className="text-white/40 text-xs">Dedicated legal entity for this deal</p>
              </motion.div>

              {/* Arrow Down */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.3, delay: 1.0 }}
                className="flex flex-col items-center gap-1"
              >
                <div className="w-px h-8 bg-gradient-to-b from-sandstone/40 to-sandstone" />
                <ArrowDown className="w-5 h-5 text-sandstone" />
                <span className="text-xs text-foreground/40 font-medium">Capital Deployed</span>
              </motion.div>

              {/* Deal Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.1 }}
                className="w-full max-w-sm bg-sandstone/10 border border-sandstone/25 rounded-2xl p-6 text-center"
              >
                <TrendingUp className="w-8 h-8 text-leather mx-auto mb-3" />
                <h4 className="text-flint font-serif text-lg font-bold mb-1">The Investment</h4>
                <p className="text-foreground/50 text-xs">Real estate, venture, consumer, etc.</p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* SPV Pros & Cons Table */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-2xl border border-sandstone/10 p-7"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="font-serif text-lg font-bold text-flint">Advantages of SPVs</h3>
            </div>
            <ul className="space-y-3">
              {[
                "Choose exactly which deals to invest in — no blind pool",
                "Full transparency into each investment's structure and terms",
                "Limited liability — your risk is capped at your investment",
                "Direct ownership exposure to the underlying asset",
                "Professional management and reporting per deal",
                "Flexible — invest in one deal or many, on your terms",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-foreground/60 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-white rounded-2xl border border-sandstone/10 p-7"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-amber-600" />
              </div>
              <h3 className="font-serif text-lg font-bold text-flint">Things to Consider</h3>
            </div>
            <ul className="space-y-3">
              {[
                "Investments are typically illiquid — capital is locked until exit",
                "Each deal carries its own risk profile and timeline",
                "Returns are not guaranteed and depend on deal performance",
                "Due diligence is critical — always review the deal memo",
                "Minimum investment amounts apply per deal ($20,000)",
                "Tax implications vary — consult your advisor",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CircleDot className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span className="text-foreground/60 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Why SPVs? */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 max-w-4xl mx-auto bg-flint rounded-2xl p-8 lg:p-10"
        >
          <h3 className="font-serif text-2xl font-bold text-white mb-4 text-center">
            Why does VI Pillars use <span className="italic text-sandstone">SPVs?</span>
          </h3>
          <div className="grid sm:grid-cols-3 gap-6 mt-6">
            {[
              {
                icon: Eye,
                title: "Transparency",
                desc: "Each SPV is a single deal — you know exactly where your money goes and how it's performing.",
              },
              {
                icon: Shield,
                title: "Alignment",
                desc: "SPVs ensure our interests are aligned with yours. We invest alongside you and succeed only when you do.",
              },
              {
                icon: Scale,
                title: "Ethical Structure",
                desc: "SPVs allow us to structure each deal to meet our ethical standards — no interest-based debt, no harmful industries.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-sandstone/15 flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-6 h-6 text-sandstone" />
                </div>
                <h4 className="text-white text-sm font-semibold mb-2">{item.title}</h4>
                <p className="text-white/40 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- Investment Philosophy ---------- */
function InvestmentPhilosophy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const categories = [
    {
      icon: DollarSign,
      title: "Private Equity",
      desc: "Strategic investments in established businesses with proven models.",
      items: [
        "Compelling businesses with clear product-market fit",
        "Deal-by-deal SPV syndication structure",
        "Focus on sustainable, long-term returns",
        "Active management and value creation",
      ],
    },
    {
      icon: Building2,
      title: "Real Estate",
      desc: "Tangible assets with strong cash flow and appreciation potential.",
      items: [
        "Commercial and residential properties",
        "Strong cash flow potential",
        "Long-term asset appreciation",
        "Portfolio diversification benefits",
      ],
    },
    {
      icon: Rocket,
      title: "Non-Traditional Assets",
      desc: "Unique opportunities in emerging sectors and pre-IPO ventures.",
      items: [
        "Pre-IPO venture opportunities",
        "Consumer and lifestyle brands",
        "Unique high-growth investments",
        "Strategic sector positioning",
      ],
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-leather-light text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            Investment Philosophy
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-flint leading-tight mb-5">
            How we{" "}
            <span className="italic text-leather">invest.</span>
          </h2>
          <p className="text-foreground/60 text-base leading-relaxed max-w-2xl mx-auto">
            Our approach is built on ethical screening, rigorous due diligence, and
            principled deal structuring. Every investment must pass through all three filters before
            it reaches our investors.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-cream/30 rounded-2xl border border-sandstone/10 p-7 hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-flint to-flint-light flex items-center justify-center mb-5">
                <cat.icon className="w-6 h-6 text-sandstone" />
              </div>
              <h3 className="font-serif text-lg font-bold text-flint mb-2">
                {cat.title}
              </h3>
              <p className="text-foreground/50 text-sm mb-5">{cat.desc}</p>
              <ul className="space-y-3">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-leather shrink-0 mt-0.5" />
                    <span className="text-foreground/60 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Ethical Differentiator ---------- */
function EthicalDifferentiator() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-20 lg:py-28 bg-cream/40">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-sandstone/8 border border-sandstone/15 rounded-full text-leather text-xs font-medium tracking-wider uppercase mb-6">
            <Shield className="w-3.5 h-3.5" />
            Our Differentiator
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-flint leading-tight mb-5">
            Investing with{" "}
            <span className="italic text-leather">intention.</span>
          </h2>
          <p className="text-foreground/60 text-base leading-relaxed max-w-3xl mx-auto">
            VI Pillars Capital operates under a principled investment framework rooted in ethical
            finance. This means every deal is structured for transparency, fairness, and social
            responsibility — creating value for investors and communities alike.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto mb-16">
          {[
            {
              icon: Ban,
              title: "No Harmful Industries",
              desc: "Investments are screened to exclude alcohol, gambling, weapons, tobacco, and pornography.",
            },
            {
              icon: Eye,
              title: "Full Transparency",
              desc: "Clear deal structures with no hidden fees or excessive uncertainty. You always know what you're investing in.",
            },
            {
              icon: Lock,
              title: "No Excessive Debt",
              desc: "We avoid highly leveraged companies and interest-based financing structures that create systemic risk.",
            },
            {
              icon: Heart,
              title: "Social Impact",
              desc: "Investments that create real value — jobs, innovation, and community growth beyond just financial returns.",
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-xl border border-sandstone/10 bg-white hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-sandstone/10 flex items-center justify-center mb-4">
                <card.icon className="w-5 h-5 text-leather" />
              </div>
              <h3 className="text-flint text-sm font-semibold mb-2">{card.title}</h3>
              <p className="text-foreground/55 text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Ethical Screening Funnel Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-2xl border border-sandstone/10 p-8 lg:p-10 shadow-sm">
            <p className="text-center text-leather-light text-xs font-semibold tracking-[0.2em] uppercase mb-8">Our Deal Screening Funnel</p>
            <div className="flex flex-col items-center gap-2">
              {[
                { label: "Deal Universe", sub: "All potential opportunities reviewed", widthPct: 100, gradient: "from-flint to-flint-light", textColor: "text-white", icon: "🌐" },
                { label: "Industry & Ethical Screen", sub: "Exclude harmful sectors & unethical structures", widthPct: 83, gradient: "from-amber-600 to-amber-500", textColor: "text-white", icon: "🚫" },
                { label: "Debt & Structure Screen", sub: "No excessive leverage or interest", widthPct: 66, gradient: "from-leather to-sandstone", textColor: "text-white", icon: "⚖️" },
                { label: "Due Diligence", sub: "Financial, legal & market analysis", widthPct: 50, gradient: "from-flint-light to-flint", textColor: "text-white", icon: "🔍" },
                { label: "Approved Deal", sub: "Presented to VI Pillars investors", widthPct: 33, gradient: "from-moss to-[oklch(0.42_0.09_155)]", textColor: "text-white", icon: "✅" },
              ].map((tier, i) => (
                <motion.div
                  key={tier.label}
                  initial={{ opacity: 0, scaleX: 0.5 }}
                  animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
                  transition={{ duration: 0.45, delay: 0.6 + i * 0.13 }}
                  style={{ width: `${tier.widthPct}%` }}
                  className={`flex items-center justify-center gap-3 px-5 py-4 rounded-2xl bg-gradient-to-r ${tier.gradient} shadow-sm`}
                >
                  <span className="text-lg shrink-0">{tier.icon}</span>
                  <div className="text-center">
                    <p className={`text-xs font-bold ${tier.textColor}`}>{tier.label}</p>
                    <p className="text-[10px] text-white/60">{tier.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="text-center text-foreground/35 text-xs mt-6 max-w-md mx-auto">
              Only deals that pass every layer of our screening process are presented to investors — ensuring quality, ethics, and transparency at every step.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- Community & Purpose ---------- */
function CommunityPurpose() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-20 lg:py-28 bg-flint relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-[400px] h-[400px] border border-sandstone/5 rounded-full" />
        <div className="absolute -bottom-20 -right-20 w-[300px] h-[300px] border border-sandstone/5 rounded-full" />
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-sandstone/10 border border-sandstone/20 rounded-full text-sandstone text-xs font-medium tracking-wider uppercase mb-6">
              <Globe className="w-3.5 h-3.5" />
              Community & Purpose
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight mb-5">
              Building wealth that{" "}
              <span className="italic text-sandstone">uplifts.</span>
            </h2>
            <p className="text-white/55 text-base leading-relaxed mb-6">
              At VI Pillars Capital, we believe investing should be more than a transaction — it should
              be a force for positive change. Our commitment extends beyond returns to financial literacy,
              community empowerment, and equitable access to wealth-building opportunities.
            </p>
            <p className="text-white/55 text-base leading-relaxed mb-8">
              We are dedicated to democratizing access to private markets, educating our investor community,
              and ensuring that every dollar deployed creates value not just for investors, but for the
              broader communities our investments touch.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                "Financial Literacy",
                "Community Empowerment",
                "Equitable Access",
                "Sustainable Impact",
              ].map((tag) => (
                <div
                  key={tag}
                  className="flex items-center gap-2 px-4 py-2.5 bg-white/[0.04] border border-white/[0.08] rounded-xl"
                >
                  <CheckCircle2 className="w-4 h-4 text-sandstone shrink-0" />
                  <span className="text-white/70 text-sm font-medium">{tag}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {[
              {
                icon: BookOpen,
                title: "Investor Education",
                desc: "We publish insights, guides, and articles to help our community make informed investment decisions — whether you're a first-time investor or a seasoned allocator.",
              },
              {
                icon: Users,
                title: "Inclusive by Design",
                desc: "Our $20,000 minimum opens doors to opportunities traditionally reserved for institutions and ultra-high-net-worth individuals. We believe great deals should be accessible.",
              },
              {
                icon: Leaf,
                title: "Sustainable Value Creation",
                desc: "Every investment we make is evaluated not just on financial merit, but on its potential to create lasting, positive impact in the communities it serves.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="flex items-start gap-4 p-5 bg-white/[0.04] border border-white/[0.08] rounded-xl"
              >
                <div className="w-10 h-10 rounded-lg bg-sandstone/15 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-sandstone" />
                </div>
                <div>
                  <h3 className="text-white text-sm font-semibold mb-1">{item.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Investor Journey ---------- */
function InvestorJourney() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const steps = [
    {
      num: "01",
      icon: Users,
      title: "Join Our Network",
      desc: "Sign up to receive deal flow and learn about upcoming opportunities. No commitment required.",
    },
    {
      num: "02",
      icon: FileSearch,
      title: "Review Opportunities",
      desc: "Each deal comes with a comprehensive memo detailing the opportunity, risks, terms, and ethical screening results.",
    },
    {
      num: "03",
      icon: CheckCircle2,
      title: "Choose Your Deals",
      desc: "Invest only in the deals that align with your goals. No blind pool — you have full control over every allocation.",
    },
    {
      num: "04",
      icon: TrendingUp,
      title: "Watch Your Capital Grow",
      desc: "Receive regular updates on your investments. We handle the management, reporting, and exits.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-leather-light text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            Your Journey
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-flint leading-tight mb-5">
            From interest to{" "}
            <span className="italic text-leather">investment.</span>
          </h2>
          <p className="text-foreground/60 text-base leading-relaxed max-w-2xl mx-auto">
            Getting started with VI Pillars Capital is simple and transparent. Here's what your journey looks like.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative bg-cream/30 rounded-2xl border border-sandstone/10 p-6 hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-sandstone/20 font-serif text-4xl font-bold absolute top-4 right-5">
                {step.num}
              </div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-flint to-flint-light flex items-center justify-center mb-4">
                <step.icon className="w-6 h-6 text-sandstone" />
              </div>
              <h3 className="font-serif text-base font-bold text-flint mb-2">
                {step.title}
              </h3>
              <p className="text-foreground/55 text-sm leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Core Values ---------- */
function CoreValues() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const values = [
    {
      icon: Eye,
      title: "Integrity & Transparency",
      desc: "We commit to honest communication and clear deal structures that reflect the true nature of each investment.",
    },
    {
      icon: Shield,
      title: "Principled Standards",
      desc: "Every opportunity is screened against our ethical framework — avoiding harmful industries, excessive leverage, and opaque structures.",
    },
    {
      icon: Users,
      title: "Community & Inclusivity",
      desc: "We welcome both seasoned and first-time investors, striving to educate and uplift communities through financial literacy and equitable access.",
    },
    {
      icon: Handshake,
      title: "Partnership & Shared Risk",
      desc: "We prioritize profit-and-loss sharing over debt-based returns — aligning our interests with yours in every deal.",
    },
    {
      icon: Star,
      title: "Excellence & Accountability",
      desc: "We hold ourselves to the highest standards in due diligence, deal selection, and investor relations — because your trust is earned, not given.",
    },
    {
      icon: Award,
      title: "Stewardship",
      desc: "We treat every dollar entrusted to us as a responsibility — not just a transaction. Your capital deserves careful, principled management.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-cream/40">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-leather-light text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            Our Foundation
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-flint leading-tight mb-5">
            Built on{" "}
            <span className="italic text-leather">values.</span>
          </h2>
          <p className="text-foreground/60 text-base leading-relaxed max-w-2xl mx-auto">
            Our values are the pillars upon which every investment decision is built,
            ensuring alignment between financial returns and ethical responsibility.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white rounded-2xl border border-sandstone/10 p-6 hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-sandstone/10 flex items-center justify-center mb-4">
                <value.icon className="w-5 h-5 text-leather" />
              </div>
              <h3 className="text-flint text-sm font-semibold mb-2">{value.title}</h3>
              <p className="text-foreground/55 text-sm leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ Accordion ---------- */
function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "What is an SPV and how does it work?",
      a: "A Special Purpose Vehicle (SPV) is a legal entity created specifically for a single investment. When you invest through an SPV with VI Pillars Capital, your capital is pooled with other investors into a dedicated entity that holds a specific asset or deal. This gives you direct ownership exposure, full transparency, and the flexibility to choose which deals you participate in.",
    },
    {
      q: "Do I need a specific background to invest with VI Pillars Capital?",
      a: "Not at all. While our investments follow ethical and principled standards, our framework appeals to anyone who values transparent, socially responsible investing. Many of our investors simply appreciate that we exclude harmful industries and maintain clear, honest deal structures — regardless of their personal background.",
    },
    {
      q: "What is the minimum investment amount?",
      a: "Our minimum investment starts at $20,000 per deal, providing access to high-quality private market opportunities with meaningful allocation sizes. Specific minimums may vary by deal.",
    },
    {
      q: "How are deals sourced and vetted?",
      a: "Our team leverages deep industry networks and rigorous analysis to identify compelling opportunities. Every deal undergoes comprehensive due diligence covering financial performance, market positioning, management quality, and ethical compliance before being presented to investors.",
    },
    {
      q: "What types of returns can I expect?",
      a: "Returns vary by deal type and asset class. Real estate investments may generate rental income and appreciation, while venture investments target capital gains upon exit. We provide detailed projections and risk assessments for each opportunity so you can make informed decisions.",
    },
    {
      q: "How do I stay updated on my investments?",
      a: "Investors receive regular updates including quarterly reports, material event notifications, and exit summaries. Our team is also available for direct communication regarding any questions about your portfolio.",
    },
    {
      q: "What is Shariah finance?",
      a: "Shariah finance is a system of financial principles rooted in Islamic law that emphasizes fairness, transparency, and shared risk. It prohibits interest (riba), excessive uncertainty (gharar), and investment in harmful industries such as alcohol, gambling, and weapons. Instead, it favors asset-backed transactions and profit-and-loss sharing structures like Musharakah (joint ventures) and Murabaha (cost-plus financing). At VI Pillars Capital, our investment framework is deeply informed by these principles — ensuring every deal is structured with integrity, transparency, and ethical accountability.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div ref={ref} className="max-w-3xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-leather-light text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            Common Questions
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-flint leading-tight mb-5">
            Frequently{" "}
            <span className="italic text-leather">asked.</span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="bg-cream/30 rounded-xl border border-sandstone/10 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-cream/50 transition-colors"
              >
                <span className="text-flint text-sm font-semibold pr-4">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-leather shrink-0 transition-transform duration-200 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-5 pb-5 text-foreground/60 text-sm leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- About Page ---------- */
export default function About() {
  return (
    <>
      <AboutHero />
      <MissionVision />
      <InvestmentPhilosophy />
      <EthicalDifferentiator />
      <CommunityPurpose />
      <SPVDiagram />
      <InvestorJourney />
      <CoreValues />
      <FAQ />
      <CTASection
        headline="Want to learn"
        accentWord="more?"
        description="Knowledge is the foundation of smart investing. Connect with our team to discuss your investment goals and learn about principled investing with VI Pillars Capital."
        buttonText="Contact Us"
        buttonHref="/contact"
      />
    </>
  );
}
