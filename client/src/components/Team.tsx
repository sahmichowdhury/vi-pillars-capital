/*
 * Design: Classical Authority — Neoclassical Minimalism
 * Team: Three co-founders with detailed bios, professional card layout
 * White background, forest green headings, gold accents
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap } from "lucide-react";

const team = [
  {
    name: "Sahmi Chowdhury",
    role: "Co-Founder",
    bio: "Mr. Chowdhury serves as a Product Manager at Mastercard on the New Payment Platforms team. He also serves as a mentor for interns and new hires to help them set career goals as they both interview and join the company.",
    experience: [
      "Previously Co-Founder and CEO of JORE, a South Asian Digital Media platform, successfully sold in 2024",
      "Product Researcher at ValueChampion, an Asia-focused FinTech company",
      "Investment Analyst at True Capital Management, a boutique Wealth Management firm",
      "Career began as a Sales & Trading Analyst at Brown Brothers Harriman",
    ],
    education: "Bachelor's in Finance and Marketing from Northeastern University",
    companies: ["Mastercard", "JORE", "True Capital Mgmt", "Brown Brothers Harriman"],
    initials: "SC",
  },
  {
    name: "Wumpini Ahmed",
    role: "Co-Founder",
    bio: "Mr. Ahmed previously served as an Associate in the Direct Investing team at HarbourVest Partners and an Associate in the Private Equity team at Two Sigma Impact, where he was involved in the execution of the $100MM+ investment in Eclipse Advantage, a light industrial staffing business.",
    experience: [
      "Before Two Sigma Impact, worked in the Industrials group of Citigroup's Investment Banking division",
      "Volunteer Mentor at Access Distributed, a non-profit focused on expanding access to finance careers for underrepresented candidates",
      "Serves on the NYC Board and Mentor Coordination Committee of the Panther Immersion Program Alumni Board at Georgia State University",
    ],
    education: "Bachelor's in Finance from Georgia State University",
    companies: ["HarbourVest", "Two Sigma Impact", "Citi"],
    initials: "WA",
  },
  {
    name: "Ravin Rijhsinghani, CFA",
    role: "Co-Founder",
    bio: "Mr. Rijhsinghani currently serves as Director of Corporate Development at Coaction Global, a sponsor-backed specialty P&C insurance carrier.",
    experience: [
      "Previously VP in the Financial Institutions Group of TD Bank's Investment Banking division",
      "Associate at MarshBerry, a boutique Investment Bank",
      "Career began as a reinsurance broker at Willis Towers Watson (WTW)",
      "CFA charterholder",
    ],
    education: "Bachelor's in Math and Economics from Haverford College, and a Master's of Arts in Finance from Claremont McKenna College",
    companies: ["Coaction Global", "TD Bank", "MarshBerry", "Willis Towers Watson"],
    initials: "RR",
  },
];

function TeamCard({ member, index }: { member: typeof team[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="bg-white rounded-sm shadow-sm hover:shadow-lg transition-shadow duration-500 border border-gold/10 overflow-hidden"
    >
      {/* Top accent */}
      <div className="h-1 bg-gradient-to-r from-forest via-gold to-forest" />

      <div className="p-8 lg:p-10">
        {/* Header */}
        <div className="flex items-start gap-5 mb-6">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-forest to-forest-light flex items-center justify-center shrink-0">
            <span className="text-white font-serif text-xl font-bold">
              {member.initials}
            </span>
          </div>
          <div>
            <h3 className="font-serif text-xl font-bold text-forest-dark">
              {member.name}
            </h3>
            <p className="text-copper text-sm font-medium tracking-wide">
              {member.role}
            </p>
          </div>
        </div>

        {/* Bio */}
        <p className="text-foreground/70 text-[15px] leading-relaxed mb-6">
          {member.bio}
        </p>

        {/* Experience */}
        <div className="mb-5">
          <div className="flex items-center gap-2 mb-3">
            <Briefcase className="w-4 h-4 text-gold-dark" />
            <span className="text-sm font-semibold text-forest-dark tracking-wide uppercase">
              Experience
            </span>
          </div>
          <ul className="space-y-2">
            {member.experience.map((exp, i) => (
              <li
                key={i}
                className="text-foreground/60 text-sm leading-relaxed pl-4 border-l-2 border-gold/20"
              >
                {exp}
              </li>
            ))}
          </ul>
        </div>

        {/* Education */}
        <div className="mb-5">
          <div className="flex items-center gap-2 mb-2">
            <GraduationCap className="w-4 h-4 text-gold-dark" />
            <span className="text-sm font-semibold text-forest-dark tracking-wide uppercase">
              Education
            </span>
          </div>
          <p className="text-foreground/60 text-sm leading-relaxed pl-4 border-l-2 border-gold/20">
            {member.education}
          </p>
        </div>

        {/* Companies */}
        <div className="flex flex-wrap gap-2 pt-4 border-t border-gold/10">
          {member.companies.map((company) => (
            <span
              key={company}
              className="text-xs font-medium text-forest-dark/70 bg-cream px-3 py-1.5 rounded-sm border border-gold/15"
            >
              {company}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Team() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section id="team" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-16"
        >
          <p className="text-copper text-sm font-medium tracking-[0.25em] uppercase mb-3">
            Leadership
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-dark mb-6 leading-tight">
            Our Team
          </h2>
          <div className="w-16 h-[2px] bg-gold mb-6" />
          <p className="text-foreground/70 text-lg leading-relaxed">
            A unique blend of investing, product, and advisory experience equips the VIP team 
            with the network and expertise to source and identify compelling investment opportunities.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {team.map((member, i) => (
            <TeamCard key={member.name} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
