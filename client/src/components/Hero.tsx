/*
 * Hero: Solid dark forest green background, centered layout
 * Pill badge, large serif headline with italic accent, subtitle, two CTA buttons
 * Three feature cards at bottom
 */
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Shield, ArrowRight, TrendingUp, Target, Users } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-forest-dark via-forest-dark to-[oklch(0.22_0.06_155)] pt-[72px]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-16 lg:pt-28 lg:pb-20">
        {/* Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 border border-white/15 rounded-full text-white/80 text-xs font-medium tracking-wider uppercase">
            <Shield className="w-3.5 h-3.5 text-gold" />
            Ethical & Shariah-Compliant Syndication
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center leading-[1.1] mb-6 max-w-4xl mx-auto"
        >
          Pairing Ethical Capital with{" "}
          <span className="italic text-gold">Exclusive Opportunities.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/65 text-base sm:text-lg text-center max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          VI Pillars Capital is a purpose-built Syndicate Lead offering Shariah-compliant 
          investment opportunities across private equity, venture capital, and real estate — 
          building wealth for all investors.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Link
            href="/pipeline"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-transparent border border-white/30 text-white text-sm font-medium rounded-md hover:bg-white/10 transition-all duration-200"
          >
            View Our Pipeline
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center px-7 py-3.5 bg-transparent border border-white/20 text-white/70 text-sm font-medium rounded-md hover:bg-white/5 hover:text-white transition-all duration-200"
          >
            Learn More
          </Link>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto"
        >
          {[
            {
              icon: TrendingUp,
              title: "Deal-by-Deal SPVs",
              desc: "Invest in individual opportunities starting at $1,000",
            },
            {
              icon: Target,
              title: "Ethically Screened",
              desc: "Shariah-compliant and socially responsible",
            },
            {
              icon: Users,
              title: "For All Investors",
              desc: "Accessible, high-quality investment opportunities",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="bg-white/8 border border-white/10 rounded-lg p-5 text-center hover:bg-white/12 transition-colors duration-300"
            >
              <card.icon className="w-5 h-5 text-gold mx-auto mb-3" />
              <h3 className="text-white text-sm font-semibold mb-1">{card.title}</h3>
              <p className="text-white/50 text-xs leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col items-center mt-12 text-white/30"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase mb-2">Scroll</span>
          <div className="w-px h-8 bg-white/20" />
        </motion.div>
      </div>
    </section>
  );
}
