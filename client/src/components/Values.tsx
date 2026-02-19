/*
 * Design: Classical Authority — Neoclassical Minimalism
 * Values: Five core values with icons, displayed in a staggered grid
 * Dark forest green background with gold accents, white text
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Eye, BookOpen, Users, Handshake, Award } from "lucide-react";

const VALUES_BG = "https://private-us-east-1.manuscdn.com/sessionFile/9mxt3zhwlXmZIxHpvdjHNq/sandbox/hzaaKWDSLjK4eq8zph9evI-img-3_1771540454000_na1fn_dmFsdWVzLWJn.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvOW14dDN6aHdsWG1aSXhIcHZkakhOcS9zYW5kYm94L2h6YWFLV0RTTGpLNGVxOHpwaDlldkktaW1nLTNfMTc3MTU0MDQ1NDAwMF9uYTFmbl9kbUZzZFdWekxXSm4uanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=OK~PR2fbCticsTQhN5R~r7JEsCZY~jPWSKPVY~Pprc-n1FFA-rIKEHTh7gWz02StZoDb3dVm3q~xnLAgphQMXRGwrfq~ki~PRimoJA4PToHUGHZCh8Z9wYDvggGw2PtmWzbRKF7bEcjC6OlfOrgwWlhpqwyCm9ecR87iCvrF0ktDQVBB6EIobJVdLYUVbzfynJUlM6QhGXnDpHHkacSc-8BzxIgTleR101cPyMgldpTz3wU-n2TzNLgFlw2NI~EaQyxGvhF2nP1HwuGvUX38lpB~nfZIzt2s2s4xPHqsnqMcLS6Fsf2OoQh87PviLSH4Hd2oF~1V85NL34EQEUN1Cw__";

const values = [
  {
    icon: Eye,
    title: "Integrity & Transparency",
    text: "We commit to honest communication and clear deal structures that reflect the true nature of each investment.",
  },
  {
    icon: BookOpen,
    title: "Shariah Compliance",
    text: "Every opportunity is screened and structured to avoid riba (interest), gharar (excessive uncertainty), and haram industries.",
  },
  {
    icon: Users,
    title: "Community & Inclusivity",
    text: "We welcome both seasoned and first-time investors, striving to educate and uplift communities through financial literacy and equitable wealth-building.",
  },
  {
    icon: Handshake,
    title: "Partnership & Shared Risk",
    text: "In line with Islamic principles, we prioritize profit-and-loss sharing over debt-based returns.",
  },
  {
    icon: Award,
    title: "Excellence & Accountability",
    text: "We hold ourselves to high standards in due diligence, deal selection, and investor relations.",
  },
];

export default function Values() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="values" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${VALUES_BG})` }}
      />
      <div className="absolute inset-0 bg-forest-dark/90" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-16"
        >
          <p className="text-gold text-sm font-medium tracking-[0.25em] uppercase mb-3">
            Our Foundation
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Core Values
          </h2>
          <div className="w-16 h-[2px] bg-gold mb-6" />
          <p className="text-white/70 text-lg leading-relaxed">
            Our values are the pillars upon which every investment decision is built, 
            ensuring alignment between financial returns and ethical responsibility.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm p-8 hover:bg-white/10 transition-all duration-500 ${
                i === 4 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="w-12 h-12 rounded-sm bg-gold/15 flex items-center justify-center mb-5 group-hover:bg-gold/25 transition-colors duration-300">
                <value.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-white mb-3">
                {value.title}
              </h3>
              <p className="text-white/60 text-[15px] leading-relaxed">
                {value.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
