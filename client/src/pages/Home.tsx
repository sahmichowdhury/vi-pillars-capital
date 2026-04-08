import Hero from "@/components/Hero";
import WhySection from "@/components/WhySection";
import CTASection from "@/components/CTASection";
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  ArrowRight,
  Shield,
  CheckCircle2,
  TrendingUp,
  Building2,
  Rocket,
  Watch,
  Sparkles,
  Hammer,
  BarChart3,
  Users,
  FileSearch,
  Handshake,
  Ban,
  Heart,
  Globe,
  Leaf,
  Scale,
} from "lucide-react";

/* ---------- Animated Counter ---------- */
function AnimatedCounter({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1800;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

/* ---------- Stats Bar ---------- */
function StatsBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  const stats = [
    { value: 1, suffix: "+", label: "Deals Deployed" },
    { value: 3, suffix: "", label: "Asset Classes" },
    { value: 20000, prefix: "$", suffix: "", label: "Minimum Investment" },
    { value: 100, suffix: "%", label: "Ethically Screened" },
  ];

  return (
    <section className="relative -mt-1 z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl border border-sandstone/15 shadow-lg p-8 lg:p-10"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-serif text-3xl lg:text-4xl font-bold text-flint mb-1">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                </div>
                <p className="text-foreground/50 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- How It Works ---------- */
function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const steps = [
    {
      num: "01",
      icon: FileSearch,
      title: "We Source the Deal",
      desc: "Our team identifies high-quality, ethically screened investment opportunities across private equity, real estate, hospitality, and pre-IPO ventures.",
    },
    {
      num: "02",
      icon: Shield,
      title: "Rigorous Due Diligence",
      desc: "Every opportunity undergoes comprehensive analysis — financial performance, market positioning, management quality, and ethical compliance. We exclude harmful industries and ensure transparent structures.",
    },
    {
      num: "03",
      icon: Handshake,
      title: "You Invest, We Execute",
      desc: "Choose the deals that align with your goals. We handle the structuring, legal, and management through a dedicated SPV — you invest with confidence.",
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
            Simple & Transparent
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-flint leading-tight mb-5">
            How it{" "}
            <span className="italic text-leather">works.</span>
          </h2>
          <p className="text-foreground/60 text-base leading-relaxed max-w-2xl mx-auto">
            Investing with VI Pillars Capital is straightforward. We handle the complexity so you can focus on building wealth with purpose.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative"
            >
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[calc(50%+40px)] right-[calc(-50%+40px)] h-px bg-gradient-to-r from-sandstone/30 to-sandstone/10" />
              )}
              <div className="bg-white rounded-2xl border border-sandstone/10 p-7 text-center hover:shadow-md transition-shadow duration-300 relative">
                <div className="text-sandstone/30 font-serif text-5xl font-bold absolute top-4 right-6">
                  {step.num}
                </div>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-flint to-flint-light flex items-center justify-center mx-auto mb-5">
                  <step.icon className="w-7 h-7 text-sandstone" />
                </div>
                <h3 className="font-serif text-lg font-bold text-flint mb-3">
                  {step.title}
                </h3>
                <p className="text-foreground/55 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* SPV Lifecycle Flow Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white rounded-2xl border border-sandstone/10 p-8 lg:p-12"
        >
          <p className="text-center text-leather-light text-xs font-semibold tracking-[0.2em] uppercase mb-10">SPV Structure — How Your Investment is Held</p>

          {/* Desktop: single horizontal row with long arrows */}
          <div className="hidden lg:flex flex-row items-center justify-center gap-0">
            {[
              { label: "Investor", sub: "You commit capital", color: "bg-flint", icon: "👤" },
              { label: "SPV", sub: "Special Purpose Vehicle", color: "bg-sandstone", icon: "🏛" },
              { label: "Target Asset", sub: "The deal we execute", color: "bg-leather/80", icon: "📈" },
              { label: "Returns", sub: "Distributed to investors", color: "bg-moss", icon: "💰" },
            ].map((node, i, arr) => (
              <div key={node.label} className="flex flex-row items-center">
                {/* Node */}
                <div className="flex flex-col items-center w-28">
                  <div className={`w-20 h-20 rounded-2xl ${node.color} flex flex-col items-center justify-center shadow-sm`}>
                    <span className="text-2xl">{node.icon}</span>
                  </div>
                  <p className="mt-3 text-xs font-bold text-flint text-center">{node.label}</p>
                  <p className="text-[10px] text-foreground/40 text-center max-w-[90px] mt-0.5">{node.sub}</p>
                </div>
                {/* Arrow between nodes */}
                {i < arr.length - 1 && (
                  <div className="flex flex-row items-center mx-2">
                    <div className="w-16 h-[2px] bg-sandstone/40" />
                    <svg className="w-4 h-4 text-sandstone shrink-0 -ml-0.5" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M8 0l8 8-8 8v-5H0V5h8V0z"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile: 2×2 grid with down-arrow between rows and right-arrow within rows */}
          <div className="lg:hidden">
            {/* Row 1: Investor → SPV */}
            <div className="flex flex-row items-center justify-center gap-0 mb-2">
              {/* Investor */}
              <div className="flex flex-col items-center w-28">
                <div className="w-16 h-16 rounded-2xl bg-flint flex flex-col items-center justify-center shadow-sm">
                  <span className="text-xl">👤</span>
                </div>
                <p className="mt-2 text-xs font-bold text-flint text-center">Investor</p>
                <p className="text-[10px] text-foreground/40 text-center max-w-[80px]">You commit capital</p>
              </div>
              {/* Right arrow */}
              <div className="flex flex-row items-center mx-1">
                <div className="w-10 h-[2px] bg-sandstone/40" />
                <svg className="w-3.5 h-3.5 text-sandstone shrink-0 -ml-0.5" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0l8 8-8 8v-5H0V5h8V0z"/>
                </svg>
              </div>
              {/* SPV */}
              <div className="flex flex-col items-center w-28">
                <div className="w-16 h-16 rounded-2xl bg-sandstone flex flex-col items-center justify-center shadow-sm">
                  <span className="text-xl">🏛</span>
                </div>
                <p className="mt-2 text-xs font-bold text-flint text-center">SPV</p>
                <p className="text-[10px] text-foreground/40 text-center max-w-[80px]">Special Purpose Vehicle</p>
              </div>
            </div>
            {/* Down arrow */}
            <div className="flex justify-center my-1">
              <div className="flex flex-col items-center">
                <div className="w-[2px] h-8 bg-sandstone/40" />
                <svg className="w-3.5 h-3.5 text-sandstone -mt-0.5" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 16L0 8h5V0h6v8h5L8 16z"/>
                </svg>
              </div>
            </div>
            {/* Row 2: Target Asset → Returns */}
            <div className="flex flex-row items-center justify-center gap-0 mt-2">
              {/* Target Asset */}
              <div className="flex flex-col items-center w-28">
                <div className="w-16 h-16 rounded-2xl bg-leather/80 flex flex-col items-center justify-center shadow-sm">
                  <span className="text-xl">📈</span>
                </div>
                <p className="mt-2 text-xs font-bold text-flint text-center">Target Asset</p>
                <p className="text-[10px] text-foreground/40 text-center max-w-[80px]">The deal we execute</p>
              </div>
              {/* Right arrow */}
              <div className="flex flex-row items-center mx-1">
                <div className="w-10 h-[2px] bg-sandstone/40" />
                <svg className="w-3.5 h-3.5 text-sandstone shrink-0 -ml-0.5" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0l8 8-8 8v-5H0V5h8V0z"/>
                </svg>
              </div>
              {/* Returns */}
              <div className="flex flex-col items-center w-28">
                <div className="w-16 h-16 rounded-2xl bg-moss flex flex-col items-center justify-center shadow-sm">
                  <span className="text-xl">💰</span>
                </div>
                <p className="mt-2 text-xs font-bold text-flint text-center">Returns</p>
                <p className="text-[10px] text-foreground/40 text-center max-w-[80px]">Distributed to investors</p>
              </div>
            </div>
          </div>

          <p className="text-center text-foreground/35 text-xs mt-10 max-w-xl mx-auto">
            Each deal is held in a dedicated SPV — legally separating your investment from other assets, providing clean ownership, and ensuring transparent reporting.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- Featured Deals Preview ---------- */
function FeaturedDeals() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const deals = [
    {
      icon: Rocket,
      name: "SpaceX",
      category: "Venture",
      status: "Deployed",
      statusColor: "bg-blue-50 text-blue-700",
    },
    {
      icon: Sparkles,
      name: "InnerLens Media",
      category: "Venture",
      status: "Active",
      statusColor: "bg-emerald-50 text-emerald-700",
    },
    {
      icon: Watch,
      name: "Whoop",
      category: "Venture",
      status: "Passed",
      statusColor: "bg-amber-50 text-amber-700",
    },
    {
      icon: Building2,
      name: "4-Plex Newark Property",
      category: "Real Estate",
      status: "Deployed",
      statusColor: "bg-blue-50 text-blue-700",
    },
    {
      icon: Hammer,
      name: "SFH — Montague, NJ",
      category: "Real Estate",
      status: "Active",
      statusColor: "bg-emerald-50 text-emerald-700",
    },
    {
      icon: TrendingUp,
      name: "Aston Martin F1 Team",
      category: "Venture",
      status: "Passed",
      statusColor: "bg-amber-50 text-amber-700",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-4"
        >
          <div>
            <p className="text-leather-light text-xs font-semibold tracking-[0.25em] uppercase mb-4">
              Current Opportunities
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-flint leading-tight">
              Featured{" "}
              <span className="italic text-leather">deals.</span>
            </h2>
          </div>
          <Link
            href="/dealflow"
            className="inline-flex items-center gap-2 text-sm font-medium text-leather hover:text-leather-light transition-colors"
          >
            View Full Dealflow
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {deals.map((deal, i) => (
            <motion.div
              key={deal.name}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link href="/dealflow" className="block">
                <div className="group p-5 rounded-xl border border-sandstone/10 bg-cream/20 hover:bg-cream/50 hover:border-sandstone/25 transition-all duration-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-flint flex items-center justify-center shrink-0">
                      <deal.icon className="w-5 h-5 text-sandstone" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-flint text-sm font-semibold truncate group-hover:text-leather transition-colors">
                        {deal.name}
                      </h3>
                      <p className="text-foreground/40 text-xs">{deal.category}</p>
                    </div>
                  </div>
                  <span className={`inline-flex items-center gap-1.5 text-[10px] font-semibold px-2.5 py-1 rounded-full ${deal.statusColor}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${
                      deal.status === "Active" ? "bg-emerald-500 animate-pulse" :
                      deal.status === "Passed" ? "bg-amber-500" :
                      "bg-blue-500"
                    }`} />
                    {deal.status}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Ethics & Values Banner ---------- */
function EthicsBanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const principles = [
    {
      icon: Ban,
      title: "No Harmful Industries",
      desc: "We exclude alcohol, gambling, weapons, tobacco, and other industries that cause social harm.",
    },
    {
      icon: Scale,
      title: "Fair & Transparent",
      desc: "No hidden fees, no excessive uncertainty. Every deal structure is clear and equitable for all parties.",
    },
    {
      icon: Heart,
      title: "Socially Responsible",
      desc: "Investments that create real value — jobs, innovation, and community growth — not just financial returns.",
    },
    {
      icon: Globe,
      title: "Inclusive Access",
      desc: "Opportunities once reserved for institutions are now accessible to individual investors starting at $20,000.",
    },
    {
      icon: Leaf,
      title: "Sustainable Growth",
      desc: "We prioritize long-term, sustainable businesses over speculative short-term plays.",
    },
    {
      icon: Shield,
      title: "Principled Standards",
      desc: "Every investment is screened against our ethical framework — ensuring integrity, transparency, and accountability in every deal.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-flint relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] border border-sandstone/5 rounded-full" />
        <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] border border-sandstone/5 rounded-full" />
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-sandstone/10 border border-sandstone/20 rounded-full text-sandstone text-xs font-medium tracking-wider uppercase mb-6">
            <Shield className="w-3.5 h-3.5" />
            Our Ethical Commitment
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
            Investing with{" "}
            <span className="italic text-sandstone">purpose.</span>
          </h2>
          <p className="text-white/50 text-base leading-relaxed max-w-2xl mx-auto">
            Ethical investing is more than a label — it's a commitment to transparent,
            principled, and socially responsible capital deployment that uplifts communities
            and creates lasting value.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-6 rounded-xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm hover:bg-white/[0.07] transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-sandstone/15 flex items-center justify-center mb-4">
                <p.icon className="w-5 h-5 text-sandstone" />
              </div>
              <h3 className="text-white text-sm font-semibold mb-2">{p.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Social Proof / Trust ---------- */
function TrustSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-20 lg:py-24 bg-cream/40">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-leather-light text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            Built on Trust
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-flint leading-tight mb-8">
            Why investors choose{" "}
            <span className="italic text-leather">VI Pillars.</span>
          </h2>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: BarChart3,
                stat: "Deal-by-Deal",
                label: "No blind pool — you choose every investment",
              },
              {
                icon: Users,
                stat: "Open to All",
                label: "Seasoned and first-time investors welcome",
              },
              {
                icon: TrendingUp,
                stat: "Multi-Asset",
                label: "Real estate, venture, hospitality & more",
              },
            ].map((item, i) => (
              <motion.div
                key={item.stat}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-xl border border-sandstone/10 p-6 hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-sandstone/10 flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-5 h-5 text-leather" />
                </div>
                <div className="font-serif text-xl font-bold text-flint mb-1">{item.stat}</div>
                <p className="text-foreground/50 text-sm">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- Home Page ---------- */
export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <StatsBar />
      <WhySection />
      <HowItWorks />
      <FeaturedDeals />
      <EthicsBanner />
      <TrustSection />
      <CTASection />
    </div>
  );
}
