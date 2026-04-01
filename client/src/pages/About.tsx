/*
 * About Page: Enhanced with more sections, icons, graphics, and compelling copy
 * Sections: Hero, Mission/Vision, Investment Philosophy, Ethical Differentiator,
 *           What We Avoid, Investor Journey, Core Values, FAQ, CTA
 */
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Shield, CheckCircle2, DollarSign, Building2, Rocket,
  Ban, Eye, Handshake, Star, Users, ChevronDown,
  Target, Scale, Heart, Globe, Leaf, Lock,
  TrendingUp, BarChart3, FileSearch, Briefcase,
  CircleDot, ArrowRight, Zap, Award,
} from "lucide-react";
import CTASection from "@/components/CTASection";

/* ---------- About Hero ---------- */
function AboutHero() {
  return (
    <section className="pt-[72px] bg-warm-dark relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-warm-dark via-[oklch(0.25_0.03_55)] to-[oklch(0.20_0.02_70)]" />
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.04]">
          <div className="absolute top-10 right-10 w-[350px] h-[350px] border border-gold rounded-full" />
          <div className="absolute top-32 right-32 w-[250px] h-[250px] border border-gold rounded-full" />
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
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full text-gold text-xs font-medium tracking-wider uppercase">
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
              Ethical investing for{" "}
              <span className="italic text-gold">everyone.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/55 text-lg leading-relaxed max-w-xl"
            >
              VI Pillars Capital is a purpose-built Syndicate Lead aiming to pair socially
              conscious capital with exclusive private markets investment opportunities.
              We believe that wealth creation and ethical responsibility are not mutually exclusive.
            </motion.p>
          </div>

          {/* Right side stats */}
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
                <stat.icon className="w-5 h-5 text-gold mb-3" />
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
              text: "VI Pillars provides ethical, Shariah-compliant investment opportunities through strategic syndications across a range of opportunistic deals that span private equity, venture capital, real estate, and hospitality.",
            },
            {
              icon: Briefcase,
              title: "How We Do It",
              text: "We invest deal-by-deal through Special Purpose Vehicles (SPVs), backing compelling opportunities with strategic capital from our unique investor base of socially conscious capital providers.",
            },
            {
              icon: FileSearch,
              title: "What We Look For",
              text: "Compelling businesses with clear product-market fit, non-traditional investments with strong upside potential, and real estate opportunities in high-growth markets — all ethically screened.",
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 rounded-2xl border border-gold/10 bg-tan-light/30 hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-warm-dark to-warm-dark/80 flex items-center justify-center mb-5">
                <card.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-serif text-xl font-bold text-warm-dark mb-4">
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
        "Hospitality and lifestyle brands",
        "Unique high-growth investments",
        "Strategic sector positioning",
      ],
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-tan-light/40">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-copper text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            Investment Philosophy
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-warm-dark leading-tight mb-5">
            How we{" "}
            <span className="italic text-gold-dark">invest.</span>
          </h2>
          <p className="text-foreground/60 text-base leading-relaxed max-w-2xl mx-auto">
            Our approach is built on ethical screening, rigorous due diligence, and
            Shariah compliance. Every investment must pass through all three filters before
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
              className="bg-white rounded-2xl border border-gold/10 p-7 hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-warm-dark to-warm-dark/80 flex items-center justify-center mb-5">
                <cat.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-serif text-lg font-bold text-warm-dark mb-2">
                {cat.title}
              </h3>
              <p className="text-foreground/50 text-sm mb-5">{cat.desc}</p>
              <ul className="space-y-3">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-gold-dark shrink-0 mt-0.5" />
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
    <section className="py-20 lg:py-28 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-gold/8 border border-gold/15 rounded-full text-gold-dark text-xs font-medium tracking-wider uppercase mb-6">
            <Shield className="w-3.5 h-3.5" />
            Our Differentiator
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-warm-dark leading-tight mb-5">
            Ethical investing for{" "}
            <span className="italic text-gold-dark">everyone.</span>
          </h2>
          <p className="text-foreground/60 text-base leading-relaxed max-w-3xl mx-auto">
            VI Pillars Capital is a Shariah-compliant syndicate, which means we adhere to
            the principles of Islamic finance. But Shariah compliance is more than a religious
            framework — it's a commitment to ethical, transparent, and socially responsible
            investing that benefits all communities and all investors, regardless of background.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
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
              desc: "We avoid highly leveraged companies and interest-based financing structures.",
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
              className="p-6 rounded-xl border border-gold/10 bg-tan-light/30 hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                <card.icon className="w-5 h-5 text-gold-dark" />
              </div>
              <h3 className="text-warm-dark text-sm font-semibold mb-2">{card.title}</h3>
              <p className="text-foreground/55 text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- What We Avoid ---------- */
function WhatWeAvoid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const excluded = [
    "Alcohol & Tobacco",
    "Gambling & Speculation",
    "Weapons & Defense",
    "Adult Entertainment",
    "Interest-Based Finance",
    "Excessive Leverage",
  ];

  return (
    <section className="py-20 lg:py-28 bg-warm-dark relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-[400px] h-[400px] border border-gold/5 rounded-full" />
        <div className="absolute -bottom-20 -right-20 w-[300px] h-[300px] border border-gold/5 rounded-full" />
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 text-xs font-medium tracking-wider uppercase mb-6">
              <Ban className="w-3.5 h-3.5" />
              Excluded Industries
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight mb-5">
              What we{" "}
              <span className="italic text-gold">don't invest in.</span>
            </h2>
            <p className="text-white/50 text-base leading-relaxed mb-8">
              Ethical investing starts with knowing where not to put your money. We maintain
              a strict exclusion list to ensure every dollar deployed aligns with our values
              and the principles of Shariah compliance. This isn't just about avoiding harm —
              it's about directing capital toward industries that build a better world.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-3"
          >
            {excluded.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.06 }}
                className="flex items-center gap-3 p-4 bg-white/[0.04] border border-white/[0.08] rounded-xl"
              >
                <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0">
                  <Ban className="w-4 h-4 text-red-400" />
                </div>
                <span className="text-white/70 text-sm font-medium">{item}</span>
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
    <section className="py-20 lg:py-28 bg-tan-light/40">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-copper text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            Your Journey
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-warm-dark leading-tight mb-5">
            From interest to{" "}
            <span className="italic text-gold-dark">investment.</span>
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
              className="relative bg-white rounded-2xl border border-gold/10 p-6 hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-gold/20 font-serif text-4xl font-bold absolute top-4 right-5">
                {step.num}
              </div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-warm-dark to-warm-dark/80 flex items-center justify-center mb-4">
                <step.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-serif text-base font-bold text-warm-dark mb-2">
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
      title: "Shariah Compliance",
      desc: "Every opportunity is screened and structured to avoid riba (interest), gharar (excessive uncertainty), and haram industries.",
    },
    {
      icon: Users,
      title: "Community & Inclusivity",
      desc: "We welcome both seasoned and first-time investors, striving to educate and uplift communities through financial literacy.",
    },
    {
      icon: Handshake,
      title: "Partnership & Shared Risk",
      desc: "In line with Islamic principles, we prioritize profit-and-loss sharing over debt-based returns.",
    },
    {
      icon: Star,
      title: "Excellence & Accountability",
      desc: "We hold ourselves to high standards in due diligence, deal selection, and investor relations.",
    },
    {
      icon: Award,
      title: "Stewardship",
      desc: "We treat every dollar entrusted to us as a responsibility — not just a transaction. Your capital deserves careful, principled management.",
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
          <p className="text-copper text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            Our Foundation
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-warm-dark leading-tight mb-5">
            Core{" "}
            <span className="italic text-gold-dark">Values.</span>
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
              className="bg-tan-light/30 rounded-2xl border border-gold/10 p-6 hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                <value.icon className="w-5 h-5 text-gold-dark" />
              </div>
              <h3 className="text-warm-dark text-sm font-semibold mb-2">{value.title}</h3>
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
      q: "Do I need to be Muslim to invest with VI Pillars Capital?",
      a: "Absolutely not. While our investments are Shariah-compliant, our ethical framework appeals to anyone who values transparent, socially responsible investing. Many of our investors simply appreciate that we exclude harmful industries and maintain clear, honest deal structures.",
    },
    {
      q: "What is the minimum investment amount?",
      a: "Our minimum investment starts at $20,000 per deal, providing access to high-quality private market opportunities with meaningful allocation sizes. Specific minimums may vary by deal.",
    },
    {
      q: "How are deals sourced and vetted?",
      a: "Our team leverages deep industry networks and rigorous analysis to identify compelling opportunities. Every deal undergoes comprehensive due diligence covering financial performance, market positioning, management quality, and Shariah compliance before being presented to investors.",
    },
    {
      q: "What types of returns can I expect?",
      a: "Returns vary by deal type and asset class. Real estate investments may generate rental income and appreciation, while pre-IPO investments target capital gains upon exit. We provide detailed projections and risk assessments for each opportunity so you can make informed decisions.",
    },
    {
      q: "How do I stay updated on my investments?",
      a: "Investors receive regular updates including quarterly reports, material event notifications, and exit summaries. Our team is also available for direct communication regarding any questions about your portfolio.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-tan-light/40">
      <div ref={ref} className="max-w-3xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-copper text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            Common Questions
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-warm-dark leading-tight mb-5">
            Frequently{" "}
            <span className="italic text-gold-dark">asked.</span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="bg-white rounded-xl border border-gold/10 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-tan-light/30 transition-colors"
              >
                <span className="text-warm-dark text-sm font-semibold pr-4">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gold-dark shrink-0 transition-transform duration-200 ${
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
      <WhatWeAvoid />
      <InvestorJourney />
      <CoreValues />
      <FAQ />
      <CTASection
        headline="Want to learn"
        accentWord="more?"
        description="Knowledge is the foundation of smart investing. Connect with our team to discuss your investment goals and learn about ethical investing with VI Pillars Capital."
        buttonText="Contact Us"
        buttonHref="/contact"
      />
    </>
  );
}
