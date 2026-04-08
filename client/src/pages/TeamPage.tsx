/*
 * Team Page: Header with warm tan bg, team member card
 * Only Sahmi Chowdhury per user request
 * Includes LinkedIn, Instagram, expertise tags
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Instagram, ExternalLink } from "lucide-react";
import CTASection from "@/components/CTASection";

const team = [
  {
    name: "Sahmi Chowdhury",
    role: "Founder & Syndicate Lead",
    initials: "SC",
    photo: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663361696775/kehEUkmbrxHxxoJn.jpg",
    bio: "Sahmi has deep expertise in investment analysis and evaluating opportunities across multiple asset classes, with comprehensive exposure to capital markets infrastructure, digital payments, and financial technology platforms. Sahmi also owns and operates a global media and marketing agency headquartered in New York City. His analytical skills and strategic insight provide VI Pillars Capital with a critical edge in identifying investment opportunities, structuring deals, and building strong investor relationships. Sahmi leads deal sourcing and investor relations at VI Pillars Capital, leveraging his experience across the finance and technology sectors and bringing a global perspective to every deal, shaped by his international upbringing.",
    expertise: [
      "Deal Sourcing & Origination",
      "Investor Relations",
      "Capital Markets & Infrastructure",
      "Product Strategy & Development",
      "Financial Technology",
      "Media & Marketing",
    ],
    companies: ["Mastercard", "innerLens", "True Capital Mgmt", "Brown Brothers Harriman"],
    education: "Bachelor's in Finance and Marketing from Northeastern University",
    linkedin: "https://www.linkedin.com/in/sahmichowdhury",
    instagram: "https://www.instagram.com/sahmichowdhury",
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
      <section className="pt-[72px] bg-flint relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-flint via-[oklch(0.25_0.03_55)] to-[oklch(0.20_0.02_70)]" />
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.04]">
            <div className="absolute top-10 right-10 w-[350px] h-[350px] border border-sandstone rounded-full" />
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
              <span className="italic text-sandstone">VIP.</span>
            </h1>
            <p className="text-white/55 text-lg leading-relaxed max-w-2xl">
              A unique blend of investing, product, and advisory experience equips the
              VIP team with the network and expertise to source and identify compelling
              investment opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Cards */}
      <section className="py-16 lg:py-24 bg-white">
        <div ref={cardsRef} className="max-w-4xl mx-auto px-6 lg:px-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isCardsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-white rounded-2xl border border-sandstone/10 shadow-sm overflow-hidden"
            >
              {/* Top section with photo and basic info */}
              <div className="flex flex-col md:flex-row">
                {/* Photo */}
                <div className="md:w-72 shrink-0">
                  <div className="aspect-square md:h-full w-full overflow-hidden">
                    {member.photo ? (
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-leather to-sandstone flex items-center justify-center">
                        <span className="text-white font-serif text-4xl font-bold">
                          {member.initials}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Info */}
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <h3 className="font-serif text-2xl lg:text-3xl font-bold text-flint mb-1">
                    {member.name}
                  </h3>
                  <p className="text-leather-light text-sm font-semibold mb-4">{member.role}</p>

                  {/* Social Links */}
                  <div className="flex items-center gap-3 mb-6">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-sandstone/15 text-leather/70 hover:text-leather hover:border-sandstone/30 hover:bg-sandstone/5 transition-all duration-200 text-xs font-medium"
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                      LinkedIn
                      <ExternalLink className="w-3 h-3 opacity-50" />
                    </a>
                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-sandstone/15 text-leather/70 hover:text-leather hover:border-sandstone/30 hover:bg-sandstone/5 transition-all duration-200 text-xs font-medium"
                    >
                      <Instagram className="w-3.5 h-3.5" />
                      Instagram
                      <ExternalLink className="w-3 h-3 opacity-50" />
                    </a>
                  </div>

                  {/* Education */}
                  <p className="text-foreground/50 text-sm italic mb-4">
                    {member.education}
                  </p>

                  {/* Company badges */}
                  <div className="flex flex-wrap gap-2">
                    {member.companies.map((company) => (
                      <span
                        key={company}
                        className="text-xs font-medium text-foreground/50 bg-cream/60 border border-sandstone/10 px-3 py-1.5 rounded-md"
                      >
                        {company}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bio section */}
              <div className="px-8 lg:px-10 pb-8 lg:pb-10">
                <div className="border-t border-sandstone/10 pt-6">
                  <p className="text-foreground/60 text-[15px] leading-relaxed mb-6">
                    {member.bio}
                  </p>

                  {/* Expertise Tags */}
                  <div>
                    <p className="text-xs font-semibold text-leather-light tracking-wider uppercase mb-3">
                      Areas of Expertise
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium text-leather bg-sandstone/8 border border-sandstone/15 px-3 py-1.5 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
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
