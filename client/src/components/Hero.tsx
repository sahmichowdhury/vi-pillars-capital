/*
 * Hero: Warm dark gradient (charcoal-brown), asymmetric layout
 * More aesthetic and unique than a simple centered layout
 * Decorative geometric accents, warm gold highlights
 */
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Shield, ArrowRight, TrendingUp, Target, Users } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-warm-dark pt-[72px] overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Warm gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-warm-dark via-[oklch(0.25_0.03_55)] to-[oklch(0.20_0.02_70)]" />
        {/* Geometric accent lines */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.04]">
          <div className="absolute top-20 right-20 w-[400px] h-[400px] border border-gold rounded-full" />
          <div className="absolute top-40 right-40 w-[300px] h-[300px] border border-gold rounded-full" />
          <div className="absolute top-60 right-60 w-[200px] h-[200px] border border-gold rounded-full" />
        </div>
        {/* Vertical accent line */}
        <div className="absolute left-[15%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/10 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-16 lg:pt-28 lg:pb-24">
        {/* Asymmetric layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left content - takes 7 columns */}
          <div className="lg:col-span-7">
            {/* Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full text-gold text-xs font-medium tracking-wider uppercase">
                <Shield className="w-3.5 h-3.5" />
                Ethical & Shariah-Compliant Syndication
              </div>
            </motion.div>

            {/* Headline - left aligned */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-bold text-white leading-[1.08] mb-6"
            >
              Pairing Ethical Capital with{" "}
              <span className="italic text-gold">Exclusive Opportunities.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/55 text-base sm:text-lg max-w-xl mb-10 leading-relaxed"
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
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <Link
                href="/pipeline"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-warm-dark text-sm font-semibold rounded-md hover:bg-gold-light transition-all duration-200"
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
          </div>

          {/* Right side - feature cards stacked vertically */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="lg:col-span-5 space-y-4"
          >
            {[
              {
                icon: TrendingUp,
                title: "Deal-by-Deal SPVs",
                desc: "Invest in individual opportunities starting at $1,000 with full transparency",
              },
              {
                icon: Target,
                title: "Ethically Screened",
                desc: "Shariah-compliant and socially responsible — no harmful industries",
              },
              {
                icon: Users,
                title: "For All Investors",
                desc: "Accessible, high-quality opportunities for seasoned and first-time investors",
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                className="flex items-start gap-4 p-5 bg-white/[0.04] border border-white/[0.08] rounded-xl backdrop-blur-sm hover:bg-white/[0.07] transition-colors duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-gold/15 flex items-center justify-center shrink-0">
                  <card.icon className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="text-white text-sm font-semibold mb-1">{card.title}</h3>
                  <p className="text-white/40 text-xs leading-relaxed">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom accent bar */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent origin-center"
        />
      </div>
    </section>
  );
}
