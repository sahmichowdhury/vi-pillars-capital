/*
 * Hero: Warm dark gradient with architectural grid texture, asymmetric layout
 * Transparent navbar shows through — no top padding needed for nav bar overlap
 */
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Shield, ArrowRight, TrendingUp, Target, Users } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-flint pt-0 overflow-hidden min-h-[92vh] flex flex-col justify-center">
      {/* Rich layered background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.22_0.03_60)] via-flint to-[oklch(0.18_0.02_50)]" />
        {/* Architectural grid lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.035]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#C9A66B" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        {/* Concentric rings — top right */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] translate-x-1/3 -translate-y-1/4">
          {[0, 1, 2, 3].map(i => (
            <div
              key={i}
              className="absolute inset-0 rounded-full border border-sandstone/[0.06]"
              style={{ transform: `scale(${0.4 + i * 0.2})`, transformOrigin: "center" }}
            />
          ))}
        </div>
        {/* Vertical rule */}
        <div className="absolute left-[15%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-sandstone/10 to-transparent" />
        {/* Diagonal accent line */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sandstone/20 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-28 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-sandstone/10 border border-sandstone/20 rounded-full text-sandstone text-xs font-medium tracking-wider uppercase">
                <Shield className="w-3.5 h-3.5" />
                Principled Investing, Proven Structure
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-bold text-white leading-[1.08] mb-6"
            >
              Pairing Ethical Capital with{" "}
              <span className="italic text-sandstone">Exclusive Opportunities.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/55 text-base sm:text-lg max-w-xl mb-10 leading-relaxed"
            >
              VI Pillars Capital is a purpose-built Syndicate Lead offering ethically screened
              investment opportunities across private equity, venture capital, and real estate —
              built on rigorous due diligence and transparent deal structures.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <Link
                href="/dealflow"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-sandstone text-flint text-sm font-semibold rounded-md hover:bg-sandstone-light transition-all duration-200"
              >
                View Our Dealflow
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
                desc: "Invest in individual opportunities starting at $20,000 with full transparency",
              },
              {
                icon: Target,
                title: "Ethically Screened",
                desc: "Rigorous due diligence and ethical standards — no harmful industries",
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
                <div className="w-10 h-10 rounded-lg bg-sandstone/15 flex items-center justify-center shrink-0">
                  <card.icon className="w-5 h-5 text-sandstone" />
                </div>
                <div>
                  <h3 className="text-white text-sm font-semibold mb-1">{card.title}</h3>
                  <p className="text-white/40 text-xs leading-relaxed">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 flex flex-col items-center gap-2"
        >
          <div className="h-px w-full bg-gradient-to-r from-transparent via-sandstone/30 to-transparent" />
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="mt-4 w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-2 rounded-full bg-sandstone/60" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
