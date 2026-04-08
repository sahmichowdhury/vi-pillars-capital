/*
 * Team Page: Simplified Founder-only layout
 * No social links, no education line, no company tabs, no expertise section
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import CTASection from "@/components/CTASection";

export default function TeamPage() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-60px" });
  const cardRef = useRef(null);
  const isCardInView = useInView(cardRef, { once: true, margin: "-60px" });

  return (
    <>
      {/* Header */}
      <section className="pt-[72px] bg-flint relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-flint via-[oklch(0.25_0.03_55)] to-[oklch(0.20_0.02_70)]" />
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.04]">
            <div className="absolute top-10 right-10 w-[350px] h-[350px] border border-sandstone rounded-full" />
            <div className="absolute top-32 right-32 w-[250px] h-[250px] border border-sandstone rounded-full" />
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 24 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sandstone text-xs font-semibold tracking-[0.25em] uppercase mb-4">
              Our Team
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 max-w-2xl">
              The people behind{" "}
              <span className="italic text-sandstone">VI Pillars.</span>
            </h1>
            <p className="text-white/55 text-lg leading-relaxed max-w-2xl">
              A unique blend of investing, product, and advisory experience equips the
              VI Pillars team with the network and expertise to source and identify compelling
              investment opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Card */}
      <section className="py-20 lg:py-32 bg-white">
        <div ref={cardRef} className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isCardInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl border border-sandstone/10 shadow-sm overflow-hidden"
          >
            {/* Photo + Name row */}
            <div className="flex flex-col md:flex-row">
              {/* Photo */}
              <div className="md:w-64 shrink-0">
                <div className="aspect-square md:h-full w-full overflow-hidden">
                  <img
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663361696775/kehEUkmbrxHxxoJn.jpg"
                    alt="Sahmi Chowdhury"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Name + Title */}
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <h2 className="font-serif text-2xl lg:text-3xl font-bold text-flint mb-2">
                  Sahmi Chowdhury
                </h2>
                <p className="text-leather text-sm font-semibold tracking-wide uppercase mb-6">
                  Founder
                </p>
                <div className="w-10 h-px bg-sandstone/30" />
              </div>
            </div>

            {/* Bio */}
            <div className="px-8 lg:px-10 pb-10">
              <div className="border-t border-sandstone/10 pt-7">
                <p className="text-foreground/60 text-[15px] leading-relaxed">
                  Sahmi has deep expertise in investment analysis and evaluating opportunities
                  across multiple asset classes, with comprehensive exposure to capital markets
                  infrastructure, digital payments, and financial technology platforms. Sahmi
                  also owns and operates a global media and marketing agency headquartered in
                  New York City. His analytical skills and strategic insight provide VI Pillars
                  Capital with a critical edge in identifying investment opportunities, structuring
                  deals, and building strong investor relationships. Sahmi leads deal sourcing and
                  investor relations at VI Pillars Capital, leveraging his experience across the
                  finance and technology sectors and bringing a global perspective to every deal,
                  shaped by his international upbringing.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <CTASection
        headline="Want to join our"
        accentWord="network?"
        description="We're always looking to connect with investors, advisors, and partners who share our commitment to principled investing."
        buttonText="Get in Touch"
        buttonHref="/contact"
      />
    </>
  );
}
