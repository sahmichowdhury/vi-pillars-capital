/*
 * About Page: Firm identity, mission, investment philosophy, ethical standards, core values
 * Educational content (SPV, FAQ, Investor Journey) lives on /investor-education
 */
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Shield, CheckCircle2, DollarSign, Building2, Rocket,
  Ban, Eye, Handshake, Star, Users,
  Target, Scale, Heart, Globe, Leaf, Lock,
  TrendingUp, BarChart3, FileSearch, Briefcase,
  ArrowRight, Award, BookOpen,
} from "lucide-react";
import CTASection from "@/components/CTASection";
import ScrollNav from "@/components/ScrollNav";
import { Link } from "wouter";

/* ---------- Side Navigation ---------- */
const aboutSections = [
  { id: "mission", label: "Our Mission" },
  { id: "philosophy", label: "Investment Philosophy" },
  { id: "ethics", label: "Ethical Standards" },
  { id: "community", label: "Community" },
  { id: "values", label: "Core Values" },
];

function AboutSideNav() {
  const [active, setActive] = useState("mission");

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: "smooth" });
      setActive(id);
    }
  };

  return (
    <aside className="hidden lg:block w-48 shrink-0">
      <div className="sticky top-28 space-y-1">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/35 mb-4 px-3">
          On this page
        </p>
        {aboutSections.map((s) => (
          <button
            key={s.id}
            onClick={() => scrollTo(s.id)}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
              active === s.id
                ? "bg-sandstone/10 text-leather font-semibold border-l-2 border-leather"
                : "text-foreground/50 hover:text-flint hover:bg-cream/60"
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>
    </aside>
  );
}

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
              Principled investing, purposeful returns.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/55 text-lg leading-relaxed max-w-xl"
            >
              VI Pillars Capital is a purpose-built Syndicate Lead pairing socially
              conscious capital with exclusive private markets investment opportunities.
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
    <section id="mission" className="py-16 scroll-mt-24">
      <div ref={ref} className="grid md:grid-cols-3 gap-6">
        {[
          {
            icon: Target,
            title: "What We Do",
            text: "VI Pillars provides ethically screened investment opportunities through strategic syndications across private equity, venture capital, real estate, and consumer — all structured with integrity and transparency.",
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
            <h3 className="font-serif text-xl font-bold text-flint mb-4">{card.title}</h3>
            <p className="text-foreground/60 text-[15px] leading-relaxed">{card.text}</p>
          </motion.div>
        ))}
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
    <section id="philosophy" className="py-16 border-t border-sandstone/10 scroll-mt-24">
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-leather-light text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            Investment Philosophy
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-flint leading-tight mb-4">
            How we invest
          </h2>
          <p className="text-foreground/60 text-base leading-relaxed max-w-2xl">
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
              <h3 className="font-serif text-lg font-bold text-flint mb-2">{cat.title}</h3>
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

/* ---------- Ethical Standards ---------- */
function EthicalStandards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="ethics" className="py-16 border-t border-sandstone/10 scroll-mt-24">
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-sandstone/8 border border-sandstone/15 rounded-full text-leather text-xs font-medium tracking-wider uppercase mb-5">
            <Shield className="w-3.5 h-3.5" />
            Our Differentiator
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-flint leading-tight mb-4">
            Investing with intention
          </h2>
          <p className="text-foreground/60 text-base leading-relaxed max-w-2xl">
            VI Pillars Capital operates under a principled investment framework rooted in ethical
            finance — creating value for investors and communities alike.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {[
            { icon: Ban, title: "No Harmful Industries", desc: "Investments are screened to exclude alcohol, gambling, weapons, tobacco, and pornography." },
            { icon: Eye, title: "Full Transparency", desc: "Clear deal structures with no hidden fees or excessive uncertainty." },
            { icon: Lock, title: "No Excessive Debt", desc: "We avoid highly leveraged companies and interest-based financing structures." },
            { icon: Heart, title: "Social Impact", desc: "Investments that create real value — jobs, innovation, and community growth." },
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

        {/* Link to Education page for the full screening funnel */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link
            href="/investor-education#screening"
            className="inline-flex items-center gap-2 text-leather text-sm font-semibold hover:gap-3 transition-all duration-200"
          >
            View our full deal screening process
            <ArrowRight className="w-4 h-4" />
          </Link>
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
    <section id="community" className="py-16 border-t border-sandstone/10 scroll-mt-24">
      <div ref={ref} className="bg-flint rounded-2xl p-10 lg:p-14 relative overflow-hidden">
        <div className="absolute -top-20 -left-20 w-[400px] h-[400px] border border-sandstone/5 rounded-full pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-[300px] h-[300px] border border-sandstone/5 rounded-full pointer-events-none" />

        <div className="relative grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-sandstone/10 border border-sandstone/20 rounded-full text-sandstone text-xs font-medium tracking-wider uppercase mb-6">
              <Globe className="w-3.5 h-3.5" />
              Community & Purpose
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight mb-5">
              Building wealth that uplifts
            </h2>
            <p className="text-white/55 text-base leading-relaxed mb-6">
              At VI Pillars Capital, we believe investing should be more than a transaction — it should
              be a force for positive change. Our commitment extends beyond returns to financial literacy,
              community empowerment, and equitable access to wealth-building opportunities.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {["Financial Literacy", "Community Empowerment", "Equitable Access", "Sustainable Impact"].map((tag) => (
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
              { icon: BookOpen, title: "Investor Education", desc: "We publish insights and guides to help our community make informed investment decisions — whether you're a first-time investor or a seasoned allocator." },
              { icon: Users, title: "Inclusive by Design", desc: "Our $20,000 minimum opens doors to opportunities traditionally reserved for institutions and ultra-high-net-worth individuals." },
              { icon: Leaf, title: "Sustainable Value Creation", desc: "Every investment is evaluated not just on financial merit, but on its potential to create lasting, positive impact in the communities it serves." },
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

/* ---------- Core Values ---------- */
function CoreValues() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const values = [
    { icon: Eye, title: "Integrity & Transparency", desc: "Honest communication and clear deal structures that reflect the true nature of each investment." },
    { icon: Shield, title: "Principled Standards", desc: "Every opportunity is screened against our ethical framework — avoiding harmful industries, excessive leverage, and opaque structures." },
    { icon: Users, title: "Community & Inclusivity", desc: "We welcome both seasoned and first-time investors, striving to educate and uplift communities through financial literacy and equitable access." },
    { icon: Handshake, title: "Partnership & Shared Risk", desc: "We prioritize profit-and-loss sharing over debt-based returns — aligning our interests with yours in every deal." },
    { icon: Star, title: "Excellence & Accountability", desc: "We hold ourselves to the highest standards in due diligence, deal selection, and investor relations." },
    { icon: Award, title: "Stewardship", desc: "We treat every dollar entrusted to us as a responsibility — not just a transaction." },
  ];

  return (
    <section id="values" className="py-16 border-t border-sandstone/10 scroll-mt-24">
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-leather-light text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            Our Foundation
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-flint leading-tight mb-4">
            Built on values
          </h2>
          <p className="text-foreground/60 text-base leading-relaxed max-w-2xl">
            Our values are the pillars upon which every investment decision is built,
            ensuring alignment between financial returns and ethical responsibility.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
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

/* ---------- About Page ---------- */
export default function About() {
  return (
    <>
      <AboutHero />
      {/* Main content with side nav */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="flex gap-16">
            <AboutSideNav />
            <div className="flex-1 min-w-0">
              <MissionVision />
              <InvestmentPhilosophy />
              <EthicalStandards />
              <CommunityPurpose />
              <CoreValues />
            </div>
          </div>
        </div>
      </div>
      <CTASection
        headline="Want to learn"
        accentWord="more?"
        description="Connect with our team to discuss your investment goals and learn about principled investing with VI Pillars Capital."
        buttonText="Contact Us"
        buttonHref="/contact"
      />

      {/* Floating scroll-aware page navigator */}
      <ScrollNav sections={aboutSections} />
    </>
  );
}
