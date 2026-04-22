/*
 * Investor Education Page
 * Contains: SPV education, ethical screening, FAQ, investor journey
 * Moved from About.tsx to keep About focused on firm identity
 */
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Shield, CheckCircle2, Ban, Eye, Scale, Users, ChevronDown,
  TrendingUp, FileSearch, ArrowDown, CircleDot, Layers,
  Search, CheckSquare, Globe, GraduationCap, Lightbulb,
  BookOpen, DollarSign, Lock, Heart, ArrowRight,
} from "lucide-react";
import CTASection from "@/components/CTASection";
import { Link } from "wouter";

/* ---------- Side Navigation ---------- */
const sections = [
  { id: "spv", label: "What is an SPV?" },
  { id: "screening", label: "Ethical Screening" },
  { id: "journey", label: "Investor Journey" },
  { id: "faq", label: "FAQ" },
];

function SideNav() {
  const [active, setActive] = useState("spv");

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 100;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
      setActive(id);
    }
  };

  return (
    <aside className="hidden lg:block w-52 shrink-0">
      <div className="sticky top-28 space-y-1">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/35 mb-4 px-3">
          On this page
        </p>
        {sections.map((s) => (
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

/* ---------- SPV Section ---------- */
function SPVSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="spv" className="py-16 scroll-mt-24">
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-sandstone/8 border border-sandstone/15 rounded-full text-leather text-xs font-medium tracking-wider uppercase mb-5">
            <Layers className="w-3.5 h-3.5" />
            Special Purpose Vehicles
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-flint leading-tight mb-4">
            What is an SPV?
          </h2>
          <p className="text-foreground/60 text-base leading-relaxed max-w-2xl">
            A Special Purpose Vehicle (SPV) is a dedicated legal entity created for a single investment.
            It is the backbone of how VI Pillars Capital structures every deal — giving you transparency,
            control, and direct exposure to the underlying asset.
          </p>
        </motion.div>

        {/* Flow Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mb-12"
        >
          <div className="bg-white rounded-2xl border border-sandstone/15 p-8 shadow-sm">
            <div className="flex flex-col items-center gap-4">
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
              <div className="flex flex-col items-center gap-1">
                <div className="w-px h-8 bg-gradient-to-b from-sandstone/40 to-sandstone" />
                <ArrowDown className="w-5 h-5 text-sandstone" />
                <span className="text-xs text-foreground/40 font-medium">Capital Pooled</span>
              </div>
              <div className="w-full max-w-sm bg-flint rounded-2xl p-6 text-center">
                <Layers className="w-8 h-8 text-sandstone mx-auto mb-3" />
                <h4 className="text-white font-serif text-lg font-bold mb-1">Special Purpose Vehicle</h4>
                <p className="text-white/40 text-xs">Dedicated legal entity for this deal</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="w-px h-8 bg-gradient-to-b from-sandstone/40 to-sandstone" />
                <ArrowDown className="w-5 h-5 text-sandstone" />
                <span className="text-xs text-foreground/40 font-medium">Capital Deployed</span>
              </div>
              <div className="w-full max-w-sm bg-sandstone/10 border border-sandstone/25 rounded-2xl p-6 text-center">
                <TrendingUp className="w-8 h-8 text-leather mx-auto mb-3" />
                <h4 className="text-flint font-serif text-lg font-bold mb-1">The Investment</h4>
                <p className="text-foreground/50 text-xs">Real estate, venture, consumer, etc.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Pros & Cons */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mb-10">
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
              <h3 className="font-serif text-lg font-bold text-flint">Advantages</h3>
            </div>
            <ul className="space-y-3">
              {[
                "Choose exactly which deals to invest in — no blind pool",
                "Full transparency into each investment's structure and terms",
                "Limited liability — your risk is capped at your investment",
                "Direct ownership exposure to the underlying asset",
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

        {/* Why SPVs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-3xl bg-flint rounded-2xl p-8"
        >
          <h3 className="font-serif text-xl font-bold text-white mb-6 text-center">
            Why VI Pillars uses SPVs
          </h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: Eye, title: "Transparency", desc: "Each SPV is a single deal — you know exactly where your money goes and how it's performing." },
              { icon: Shield, title: "Alignment", desc: "SPVs ensure our interests are aligned with yours. We invest alongside you and succeed only when you do." },
              { icon: Scale, title: "Ethical Structure", desc: "SPVs allow us to structure each deal to meet our ethical standards — no harmful industries." },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-12 h-12 rounded-xl bg-sandstone/15 flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-6 h-6 text-sandstone" />
                </div>
                <h4 className="text-white text-sm font-semibold mb-2">{item.title}</h4>
                <p className="text-white/40 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- Ethical Screening Section ---------- */
function ScreeningSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="screening" className="py-16 border-t border-sandstone/10 scroll-mt-24">
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-sandstone/8 border border-sandstone/15 rounded-full text-leather text-xs font-medium tracking-wider uppercase mb-5">
            <Shield className="w-3.5 h-3.5" />
            Our Screening Process
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-flint leading-tight mb-4">
            Ethical Screening
          </h2>
          <p className="text-foreground/60 text-base leading-relaxed max-w-2xl">
            Every deal passes through a multi-layer screening process before it reaches our investors.
            This ensures quality, ethics, and transparency at every step.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-start max-w-4xl">
          {/* Screening criteria cards */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Ban, title: "No Harmful Industries", desc: "Alcohol, gambling, weapons, tobacco, and pornography are excluded." },
              { icon: Eye, title: "Full Transparency", desc: "Clear structures with no hidden fees or excessive uncertainty." },
              { icon: Lock, title: "No Excessive Debt", desc: "We avoid highly leveraged companies and interest-based financing." },
              { icon: Heart, title: "Social Impact", desc: "Investments that create real value for communities and people." },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-5 rounded-xl border border-sandstone/10 bg-white hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-9 h-9 rounded-lg bg-sandstone/10 flex items-center justify-center mb-3">
                  <card.icon className="w-4 h-4 text-leather" />
                </div>
                <h3 className="text-flint text-xs font-semibold mb-1">{card.title}</h3>
                <p className="text-foreground/55 text-xs leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Funnel diagram */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-white rounded-2xl border border-sandstone/10 p-7 shadow-sm">
              <p className="text-center text-leather-light text-xs font-semibold tracking-[0.2em] uppercase mb-6">Deal Screening Funnel</p>
              <div className="flex flex-col items-center gap-2">
                {[
                  { label: "Deal Universe", sub: "All potential opportunities reviewed", widthPct: 100, gradient: "from-flint to-flint-light", Icon: Globe },
                  { label: "Industry & Ethical Screen", sub: "Exclude harmful sectors", widthPct: 83, gradient: "from-amber-600 to-amber-500", Icon: Ban },
                  { label: "Debt & Structure Screen", sub: "No excessive leverage", widthPct: 66, gradient: "from-leather to-sandstone", Icon: Scale },
                  { label: "Due Diligence", sub: "Financial, legal & market analysis", widthPct: 50, gradient: "from-flint-light to-flint", Icon: Search },
                  { label: "Approved Deal", sub: "Presented to investors", widthPct: 33, gradient: "from-moss to-[oklch(0.42_0.09_155)]", Icon: CheckSquare },
                ].map((tier, i) => (
                  <motion.div
                    key={tier.label}
                    initial={{ opacity: 0, scaleX: 0.5 }}
                    animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
                    transition={{ duration: 0.45, delay: 0.5 + i * 0.13 }}
                    style={{ width: `${tier.widthPct}%` }}
                    className={`flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-gradient-to-r ${tier.gradient} shadow-sm`}
                  >
                    <tier.Icon className="w-4 h-4 text-white/90 shrink-0" />
                    <div className="text-center">
                      <p className="text-xs font-bold text-white">{tier.label}</p>
                      <p className="text-[10px] text-white/60">{tier.sub}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Investor Journey Section ---------- */
function JourneySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const steps = [
    { num: "01", icon: Users, title: "Join Our Network", desc: "Register to receive deal flow and learn about upcoming opportunities. No commitment required." },
    { num: "02", icon: FileSearch, title: "Review Opportunities", desc: "Each deal comes with a comprehensive memo detailing the opportunity, risks, terms, and screening results." },
    { num: "03", icon: CheckCircle2, title: "Choose Your Deals", desc: "Invest only in the deals that align with your goals. No blind pool — full control over every allocation." },
    { num: "04", icon: TrendingUp, title: "Track Your Capital", desc: "Receive regular updates on your investments. We handle management, reporting, and exits." },
  ];

  return (
    <section id="journey" className="py-16 border-t border-sandstone/10 scroll-mt-24">
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-leather-light text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            Your Journey
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-flint leading-tight mb-4">
            From interest to investment
          </h2>
          <p className="text-foreground/60 text-base leading-relaxed max-w-2xl">
            Getting started with VI Pillars Capital is straightforward. Here is what your journey looks like from registration to your first deal.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl">
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
              <h3 className="font-serif text-base font-bold text-flint mb-2">{step.title}</h3>
              <p className="text-foreground/55 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ Section ---------- */
function FAQSection() {
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
      a: "Shariah finance is a system of financial principles rooted in Islamic law that emphasizes fairness, transparency, and shared risk. It prohibits interest (riba), excessive uncertainty (gharar), and investment in harmful industries such as alcohol, gambling, and weapons. At VI Pillars Capital, our investment framework is deeply informed by these principles — ensuring every deal is structured with integrity, transparency, and ethical accountability.",
    },
  ];

  return (
    <section id="faq" className="py-16 border-t border-sandstone/10 scroll-mt-24">
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-leather-light text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            Common Questions
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-flint leading-tight mb-4">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="space-y-3 max-w-3xl">
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
                <p className="px-5 pb-5 text-foreground/60 text-sm leading-relaxed">{faq.a}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Page ---------- */
export default function InvestorEducationPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-[72px] bg-flint relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-flint via-[oklch(0.25_0.03_55)] to-[oklch(0.20_0.02_70)]" />
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.04]">
            <div className="absolute top-10 right-10 w-[350px] h-[350px] border border-sandstone rounded-full" />
            <div className="absolute top-32 right-32 w-[250px] h-[250px] border border-sandstone rounded-full" />
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-sandstone/10 border border-sandstone/20 rounded-full text-sandstone text-xs font-medium tracking-wider uppercase">
              <GraduationCap className="w-3.5 h-3.5" />
              Investor Education
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5 max-w-2xl"
          >
            Everything you need to invest with confidence
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/55 text-base leading-relaxed max-w-xl mb-8"
          >
            From understanding how SPVs work to navigating our ethical screening process,
            this page covers the fundamentals of investing with VI Pillars Capital.
          </motion.p>
          {/* Quick nav pills */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-2"
          >
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => {
                  const el = document.getElementById(s.id);
                  if (el) {
                    const top = el.getBoundingClientRect().top + window.scrollY - 100;
                    window.scrollTo({ top, behavior: "smooth" });
                  }
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-white/[0.07] border border-white/[0.12] rounded-full text-white/70 text-xs font-medium hover:bg-white/[0.12] transition-colors"
              >
                {s.label}
                <ArrowRight className="w-3 h-3" />
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main content with side nav */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="flex gap-16">
            <SideNav />
            <div className="flex-1 min-w-0">
              <SPVSection />
              <ScreeningSection />
              <JourneySection />
              <FAQSection />
            </div>
          </div>
        </div>
      </div>

      <CTASection
        headline="Ready to start"
        accentWord="investing?"
        description="Connect with our team to discuss your investment goals and learn about current opportunities."
        buttonText="Contact Us"
        buttonHref="/contact"
      />
    </>
  );
}
