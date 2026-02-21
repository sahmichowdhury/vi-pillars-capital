/*
 * About Page: What We Do, How We Invest (SPV), Ethical Differentiator, Core Values
 * Warm tan/gold color scheme throughout
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Shield, CheckCircle2, DollarSign, Building2, Rocket,
  Ban, Eye, Handshake, Star, Users
} from "lucide-react";
import CTASection from "@/components/CTASection";

/* ---------- What We Do Hero ---------- */
function AboutHero() {
  return (
    <section className="pt-[72px] bg-tan-light/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <p className="text-copper text-xs font-semibold tracking-[0.25em] uppercase mb-4">
          About Us
        </p>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-warm-dark leading-tight mb-6 max-w-2xl">
          Ethical investing for{" "}
          <span className="italic text-gold-dark">everyone.</span>
        </h1>
        <p className="text-foreground/60 text-lg leading-relaxed max-w-2xl">
          VI Pillars Capital is a purpose-built Syndicate Lead aiming to pair socially
          conscious capital with exclusive private markets investment opportunities.
        </p>
      </div>
    </section>
  );
}

/* ---------- Mission / Vision Cards ---------- */
function MissionVision() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-16 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "What We Do",
              text: "VI Pillars provides ethical, Shariah-compliant investment opportunities through strategic syndications across a range of opportunistic deals that span private equity, venture capital, and real estate. We serve investors seeking Shariah-compliant alternatives to traditional finance and investors interested in socially responsible investments.",
            },
            {
              title: "How We Do It",
              text: "We invest deal-by-deal through Special Purpose Vehicles (SPVs), backing compelling opportunities with strategic capital from our unique investor base of socially conscious capital providers. We typically deploy a check size commensurate to the opportunity, with a preference for compelling businesses that have clear product-market fit, and non-traditional investments.",
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 lg:p-10 rounded-2xl border border-gold/10 bg-tan-light/30"
            >
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
            Shariah compliance. Every investment must pass through all three filters.
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
              <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mb-5">
                <cat.icon className="w-5 h-5 text-gold-dark" />
              </div>
              <h3 className="font-serif text-lg font-bold text-warm-dark mb-4">
                {cat.title}
              </h3>
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
          <p className="text-foreground/60 text-base leading-relaxed max-w-2xl mx-auto">
            VI Pillars Capital is a Shariah-compliant syndicate, which means we adhere to
            the principles of Islamic finance. But Shariah compliance is more than a religious
            framework — it's a commitment to ethical, transparent, and socially responsible
            investing that benefits all communities and all investors.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {[
            {
              icon: Ban,
              title: "No Harmful Industries",
              desc: "Investments are screened to exclude industries that cause social harm, including alcohol, gambling, weapons, and pornography.",
            },
            {
              icon: Eye,
              title: "Transparent Structures",
              desc: "Clear, transparent deal structures with no hidden fees or excessive uncertainty. Every investor knows exactly what they're investing in.",
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-start gap-4 p-6 rounded-2xl border border-gold/10 bg-tan-light/30"
            >
              <div className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                <card.icon className="w-4.5 h-4.5 text-gold-dark" />
              </div>
              <div>
                <h3 className="text-warm-dark text-sm font-semibold mb-1.5">{card.title}</h3>
                <p className="text-foreground/55 text-sm leading-relaxed">{card.desc}</p>
              </div>
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
              className={`bg-white rounded-2xl border border-gold/10 p-6 hover:shadow-md transition-shadow duration-300 ${
                i === 4 ? "sm:col-span-2 lg:col-span-1 sm:max-w-md sm:mx-auto lg:max-w-none" : ""
              }`}
            >
              <div className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                <value.icon className="w-4.5 h-4.5 text-gold-dark" />
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

/* ---------- About Page ---------- */
export default function About() {
  return (
    <>
      <AboutHero />
      <MissionVision />
      <InvestmentPhilosophy />
      <EthicalDifferentiator />
      <CoreValues />
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
