/*
 * WhySection: Two-column layout on home page
 * Left: headline + paragraphs + CTA link
 * Right: Four stacked feature cards with icons
 * Matches Xirge "WHY XIRGE CAPITAL" section pattern
 */
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, BarChart3, Shield, TrendingUp, Users } from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Rigorous Due Diligence",
    desc: "Every investment undergoes comprehensive analysis to ensure it meets our strict qualification criteria and ethical compliance standards.",
  },
  {
    icon: Shield,
    title: "Ethical Investing",
    desc: "Our Shariah-compliant approach means we invest ethically — no harmful industries, no excessive risk, and full transparency.",
  },
  {
    icon: TrendingUp,
    title: "SPV-Based Syndication",
    desc: "We invest deal-by-deal through Special Purpose Vehicles, giving investors flexibility to choose the opportunities that align with their interests.",
  },
  {
    icon: Users,
    title: "For All Investors",
    desc: "Whether you're just starting out or a seasoned investor, VI Pillars Capital is built to serve you with accessible, high-quality opportunities.",
  },
];

export default function WhySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-copper text-xs font-semibold tracking-[0.25em] uppercase mb-4">
              Why VI Pillars Capital
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-dark leading-tight mb-6">
              Your path to the{" "}
              <span className="italic text-gold-dark">next level.</span>
            </h2>
            <p className="text-foreground/60 text-[15px] leading-relaxed mb-5">
              Investing is a time-demanding activity, and picking the best options often 
              requires the full-time attention of professionals. Without proper methods 
              and expertise, your funds will struggle to reach their potential return on investment.
            </p>
            <p className="text-foreground/60 text-[15px] leading-relaxed mb-8">
              At VI Pillars Capital, we offer everything you need to make the best of your 
              capital. Our team conducts rigorous due diligence on every opportunity, ensuring 
              both strong returns and ethical standards. As a syndicate, we give you access to 
              deals typically reserved for institutional investors.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-forest-dark border border-forest-dark/20 rounded-md hover:bg-forest-dark hover:text-white transition-all duration-200"
            >
              Learn About Our Approach
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Right Column - Feature Cards */}
          <div className="space-y-4">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 24 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-4 p-5 rounded-lg border border-gold/10 hover:border-gold/25 bg-cream/30 hover:bg-cream/60 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-forest-dark/8 flex items-center justify-center shrink-0">
                  <feature.icon className="w-5 h-5 text-forest-dark" />
                </div>
                <div>
                  <h3 className="text-forest-dark text-sm font-semibold mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-foreground/55 text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
