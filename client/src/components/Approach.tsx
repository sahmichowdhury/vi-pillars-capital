/*
 * Design: Classical Authority — Neoclassical Minimalism
 * Approach: SPV overview with advantages/disadvantages, asymmetric layout
 * White background, forest green headings, gold accents
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, Shield, TrendingUp, DollarSign, Users, ArrowRight } from "lucide-react";

const CITY_BG = "https://private-us-east-1.manuscdn.com/sessionFile/9mxt3zhwlXmZIxHpvdjHNq/sandbox/hzaaKWDSLjK4eq8zph9evI-img-4_1771540454000_na1fn_YWJvdXQtc2VjdGlvbg.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvOW14dDN6aHdsWG1aSXhIcHZkakhOcS9zYW5kYm94L2h6YWFLV0RTTGpLNGVxOHpwaDlldkktaW1nLTRfMTc3MTU0MDQ1NDAwMF9uYTFmbl9ZV0p2ZFhRdGMyVmpkR2x2YmcuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=pPuyiRNuBW1QiD8-TA9lIp0RJC9FFyK7OsG8Wciire~cMKvsywwBLTIuAXzqREbAXEl3RD1YaX5xCaqSh4a6l7CSU33ExrvF84OUYmUG-Hszyw20TmSvhNoJLC7EDpFE4WAz3LAWUXLX7s1stG4UQo~bW5dKCtaiSB5cLSRjrN8OE9IPAbwojGKZgjZ31lsjMwf1e8nAOz7BJpXUdpqb~vJymSh2LA0gku4YJPO62N6B9VsiMoANCfR~wSP0hMFR-v9RFvAhyU1t81IzFkp0AtHRl2tNd9easS49dZNWK56hTbKrLFvbfhBqNoby69qUStH6pi7AFBdMkSspn-mIww__";

const advantages = [
  {
    icon: DollarSign,
    title: "Lower Barriers to Entry",
    text: "Invest with as little as $1,000 in an SPV, compared to $500,000+ for a traditional VC or PE fund. SPVs enable investors with less capital to access asset classes with high barriers to entry.",
  },
  {
    icon: Shield,
    title: "Isolated Financial Risk",
    text: "If an SPV investment performs poorly, it won't weigh down the IRR or TVPI of your core portfolio. Each investment is ring-fenced within its own vehicle.",
  },
  {
    icon: TrendingUp,
    title: "Faster Returns",
    text: "SPV investors typically see a faster return on their money compared to traditional VC fund investments, as returns depend on a single company exit rather than an entire portfolio.",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Deal Sourcing",
    text: "VIP identifies compelling investment opportunities across private equity, venture capital, real estate, and non-traditional assets.",
  },
  {
    step: "02",
    title: "SPV Formation",
    text: "A Special Purpose Vehicle is created for each deal, allowing multiple investors to pool their capital into a unified investment.",
  },
  {
    step: "03",
    title: "Investor Participation",
    text: "LPs review opportunities and choose which deals to participate in, investing only into the SPVs that align with their interests.",
  },
  {
    step: "04",
    title: "Capital Deployment",
    text: "The SPV deploys pooled capital to acquire shares in the target company, managed by VIP as the Syndicate Lead.",
  },
];

export default function Approach() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-80px" });
  const advantagesRef = useRef(null);
  const isAdvInView = useInView(advantagesRef, { once: true, margin: "-80px" });
  const stepsRef = useRef(null);
  const isStepsInView = useInView(stepsRef, { once: true, margin: "-80px" });

  return (
    <section id="approach" className="relative">
      {/* SPV Overview Banner */}
      <div className="relative py-20 lg:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${CITY_BG})` }}
        />
        <div className="absolute inset-0 bg-forest-dark/85" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <p className="text-gold text-sm font-medium tracking-[0.25em] uppercase mb-3">
              Our Approach
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Special Purpose Vehicles
            </h2>
            <div className="w-16 h-[2px] bg-gold mb-6" />
            <p className="text-white/80 text-lg leading-relaxed">
              A special purpose vehicle (SPV) is an alternative fundraising structure that allows 
              multiple investors to pool their capital and make a unified investment. Multiple LPs 
              invest smaller check sizes into a single SPV, managed by the Syndicate Lead. The SPV 
              then uses proceeds to acquire shares in the target company.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Advantages */}
      <div className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            ref={advantagesRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isAdvInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="mb-14"
          >
            <p className="text-copper text-sm font-medium tracking-[0.25em] uppercase mb-3">
              Why SPVs
            </p>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-forest-dark mb-4">
              SPV Advantages
            </h3>
            <div className="w-12 h-[2px] bg-gold" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map((adv, i) => (
              <motion.div
                key={adv.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isAdvInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative pl-6 border-l-2 border-gold/40 hover:border-gold transition-colors duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center mb-4">
                  <adv.icon className="w-5 h-5 text-forest" />
                </div>
                <h4 className="font-serif text-xl font-semibold text-forest-dark mb-3">
                  {adv.title}
                </h4>
                <p className="text-foreground/65 text-[15px] leading-relaxed">
                  {adv.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works Steps */}
      <div className="py-20 lg:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            ref={stepsRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isStepsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="mb-14"
          >
            <p className="text-copper text-sm font-medium tracking-[0.25em] uppercase mb-3">
              Process
            </p>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-forest-dark mb-4">
              How It Works
            </h3>
            <div className="w-12 h-[2px] bg-gold" />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                animate={isStepsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="relative bg-white rounded-sm p-8 shadow-sm border border-gold/10 group hover:shadow-md transition-shadow duration-300"
              >
                <span className="font-serif text-4xl font-bold text-gold/30 group-hover:text-gold/50 transition-colors duration-300">
                  {step.step}
                </span>
                <h4 className="font-serif text-lg font-semibold text-forest-dark mt-3 mb-3">
                  {step.title}
                </h4>
                <p className="text-foreground/65 text-sm leading-relaxed">
                  {step.text}
                </p>
                {i < howItWorks.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gold/50" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
