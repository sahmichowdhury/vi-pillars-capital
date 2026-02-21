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
    { value: 5, suffix: "+", label: "Deals Deployed" },
    { value: 3, suffix: "", label: "Asset Classes" },
    { value: 1000, prefix: "$", suffix: "", label: "Minimum Investment" },
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
          className="bg-white rounded-2xl border border-gold/15 shadow-lg p-8 lg:p-10"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {stats.map((stat, i) => (
              <div key={stat.label} className="text-center">
                <div className="font-serif text-3xl lg:text-4xl font-bold text-warm-dark mb-1">
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
      desc: "Our team identifies high-quality, ethically-screened investment opportunities across private equity, real estate, hospitality, and pre-IPO ventures.",
    },
    {
      num: "02",
      icon: Shield,
      title: "We Vet for Compliance",
      desc: "Every opportunity undergoes rigorous due diligence and Shariah compliance screening. We exclude harmful industries and ensure transparent deal structures.",
    },
    {
      num: "03",
      icon: Handshake,
      title: "You Invest, We Execute",
      desc: "Choose the deals that align with your goals. We handle the structuring, legal, and management through a dedicated SPV — you invest with confidence.",
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
            Simple & Transparent
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-warm-dark leading-tight mb-5">
            How it{" "}
            <span className="italic text-gold-dark">works.</span>
          </h2>
          <p className="text-foreground/60 text-base leading-relaxed max-w-2xl mx-auto">
            Investing with VI Pillars Capital is straightforward. We handle the complexity so you can focus on building wealth ethically.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[calc(50%+40px)] right-[calc(-50%+40px)] h-px bg-gradient-to-r from-gold/30 to-gold/10" />
              )}
              <div className="bg-white rounded-2xl border border-gold/10 p-7 text-center hover:shadow-md transition-shadow duration-300 relative">
                <div className="text-gold/30 font-serif text-5xl font-bold absolute top-4 right-6">
                  {step.num}
                </div>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-warm-dark to-warm-dark/80 flex items-center justify-center mx-auto mb-5">
                  <step.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-serif text-lg font-bold text-warm-dark mb-3">
                  {step.title}
                </h3>
                <p className="text-foreground/55 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
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
      icon: Sparkles,
      name: "Tercer",
      category: "Hospitality",
      status: "Deployed",
      statusColor: "bg-blue-50 text-blue-700",
    },
    {
      icon: Watch,
      name: "Whoop",
      category: "Pre-IPO",
      status: "Active",
      statusColor: "bg-emerald-50 text-emerald-700",
    },
    {
      icon: Rocket,
      name: "SpaceX",
      category: "Pre-IPO",
      status: "Deployed",
      statusColor: "bg-blue-50 text-blue-700",
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
            <p className="text-copper text-xs font-semibold tracking-[0.25em] uppercase mb-4">
              Current Opportunities
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-warm-dark leading-tight">
              Featured{" "}
              <span className="italic text-gold-dark">deals.</span>
            </h2>
          </div>
          <Link
            href="/pipeline"
            className="inline-flex items-center gap-2 text-sm font-medium text-gold-dark hover:text-copper transition-colors"
          >
            View Full Pipeline
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
              <Link href="/pipeline" className="block">
                <div className="group p-5 rounded-xl border border-gold/10 bg-tan-light/20 hover:bg-tan-light/50 hover:border-gold/25 transition-all duration-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-warm-dark flex items-center justify-center shrink-0">
                      <deal.icon className="w-5 h-5 text-gold" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-warm-dark text-sm font-semibold truncate group-hover:text-gold-dark transition-colors">
                        {deal.name}
                      </h3>
                      <p className="text-foreground/40 text-xs">{deal.category}</p>
                    </div>
                  </div>
                  <span className={`inline-flex items-center gap-1.5 text-[10px] font-semibold px-2.5 py-1 rounded-full ${deal.statusColor}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${deal.status === "Active" ? "bg-emerald-500 animate-pulse" : "bg-blue-500"}`} />
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
      desc: "Opportunities once reserved for institutions are now accessible to individual investors starting at $1,000.",
    },
    {
      icon: Leaf,
      title: "Sustainable Growth",
      desc: "We prioritize long-term, sustainable businesses over speculative short-term plays.",
    },
    {
      icon: Shield,
      title: "Shariah Compliant",
      desc: "Every investment is screened for compliance with Islamic finance principles — no riba, no gharar, no haram.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-warm-dark relative overflow-hidden">
      {/* Decorative circles */}
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
            Our Ethical Commitment
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
            Investing with{" "}
            <span className="italic text-gold">purpose.</span>
          </h2>
          <p className="text-white/50 text-base leading-relaxed max-w-2xl mx-auto">
            Shariah compliance is more than a religious framework — it's a commitment to ethical,
            transparent, and socially responsible investing that benefits all communities.
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
              <div className="w-10 h-10 rounded-lg bg-gold/15 flex items-center justify-center mb-4">
                <p.icon className="w-5 h-5 text-gold" />
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
    <section className="py-20 lg:py-24 bg-tan-light/40">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-copper text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            Built on Trust
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-warm-dark leading-tight mb-8">
            Why investors choose{" "}
            <span className="italic text-gold-dark">VI Pillars.</span>
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
                label: "Real estate, pre-IPO, hospitality & more",
              },
            ].map((item, i) => (
              <motion.div
                key={item.stat}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-xl border border-gold/10 p-6 hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-5 h-5 text-gold-dark" />
                </div>
                <h3 className="text-warm-dark font-semibold text-sm mb-1">{item.stat}</h3>
                <p className="text-foreground/50 text-xs leading-relaxed">{item.label}</p>
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
    <>
      <Hero />
      <StatsBar />
      <WhySection />
      <HowItWorks />
      <FeaturedDeals />
      <EthicsBanner />
      <TrustSection />
      <CTASection />
    </>
  );
}
