/*
 * Team Page: Header with warm tan bg, team member card
 * Only Sahmi Chowdhury per user request
 * Warm gold/tan color scheme
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin } from "lucide-react";
import CTASection from "@/components/CTASection";

const team = [
  {
    name: "Sahmi Chowdhury",
    role: "Founder",
    initials: "SC",
    photo: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663361696775/kehEUkmbrxHxxoJn.jpg",
    bio: "Sahmi has deep expertise in investment analysis and evaluating opportunities across multiple asset classes, with comprehensive exposure to capital markets infrastructure, digital payments, and financial technology platforms. Sahmi also owns and operates a global media and marketing agency headquartered in New York City. His analytical skills and strategic insight provide VI Pillars Capital with a critical edge in identifying investment opportunities, structuring deals, and building strong investor relationships. Sahmi leads deal sourcing and investor relations at VI Pillars Capital, leveraging his experience across the finance and technology sectors and bringing a global perspective to every deal, shaped by his international upbringing.",
    tags: ["Deal Sourcing", "Investor Relations", "Capital Markets", "Product Strategy"],
    companies: ["Mastercard", "innerLens", "True Capital Mgmt", "Brown Brothers Harriman"],
    education: "Bachelor's in Finance and Marketing from Northeastern University",
  },
];

export default function TeamPage() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-60px" });
  const cardsRef = useRef(null);
  const isCardsInView = useInView(cardsRef, { once: true, margin: "-60px" });

  return (
    <>
      {/* Header */}
      <section className="pt-[72px] bg-tan-light/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 24 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-copper text-xs font-semibold tracking-[0.25em] uppercase mb-4">
              Our Team
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-warm-dark leading-tight mb-6 max-w-2xl">
              The people behind{" "}
              <span className="italic text-gold-dark">VIP.</span>
            </h1>
            <p className="text-foreground/60 text-lg leading-relaxed max-w-2xl">
              A unique blend of investing, product, and advisory experience equips the
              VIP team with the network and expertise to source and identify compelling
              investment opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Cards */}
      <section className="py-16 lg:py-20 bg-white">
        <div ref={cardsRef} className="max-w-3xl mx-auto px-6 lg:px-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isCardsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-white rounded-2xl p-8 lg:p-10 text-center"
            >
              {/* Avatar */}
              <div className="w-28 h-28 rounded-full overflow-hidden mx-auto mb-5">
                {member.photo ? (
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gold-dark to-gold flex items-center justify-center">
                    <span className="text-white font-serif text-2xl font-bold">
                      {member.initials}
                    </span>
                  </div>
                )}
              </div>

              {/* Name & Role */}
              <h3 className="font-serif text-2xl font-bold text-warm-dark mb-1">
                {member.name}
              </h3>
              <p className="text-copper text-sm font-medium mb-6">{member.role}</p>

              {/* Bio */}
              <p className="text-foreground/60 text-[15px] leading-relaxed text-left mb-6">
                {member.bio}
              </p>

              {/* Education */}
              <p className="text-foreground/50 text-sm italic text-left mb-6">
                {member.education}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {member.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium text-gold-dark/80 bg-tan-light border border-gold/15 px-3 py-1.5 rounded-full uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Company logos as text badges */}
              <div className="flex flex-wrap gap-2 mb-6 justify-center">
                {member.companies.map((company) => (
                  <span
                    key={company}
                    className="text-xs font-medium text-foreground/50 bg-white border border-border px-3 py-1.5 rounded-md"
                  >
                    {company}
                  </span>
                ))}
              </div>

              {/* LinkedIn */}
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); }}
                className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gold/15 text-gold-dark/50 hover:text-gold-dark hover:border-gold/30 transition-colors duration-200"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      <CTASection
        headline="Want to join our"
        accentWord="network?"
        description="We're always looking to connect with investors, advisors, and partners who share our commitment to ethical investing."
        buttonText="Get in Touch"
        buttonHref="/contact"
      />
    </>
  );
}
