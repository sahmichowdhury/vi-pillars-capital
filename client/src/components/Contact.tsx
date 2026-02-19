/*
 * Design: Classical Authority — Neoclassical Minimalism
 * Contact: CTA section with column detail background, then footer
 * Dark overlay on imagery, gold accents, white text
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, ArrowUpRight } from "lucide-react";

const CTA_BG = "https://private-us-east-1.manuscdn.com/sessionFile/9mxt3zhwlXmZIxHpvdjHNq/sandbox/hzaaKWDSLjK4eq8zph9evI-img-5_1771540452000_na1fn_Y3RhLWJn.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvOW14dDN6aHdsWG1aSXhIcHZkakhOcS9zYW5kYm94L2h6YWFLV0RTTGpLNGVxOHpwaDlldkktaW1nLTVfMTc3MTU0MDQ1MjAwMF9uYTFmbl9ZM1JoTFdKbi5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=B7m83uHPXEqbWQlKwB-tWKCesPH-ur3kY~m6KKqPiLaL-zQxeFSYmUxKW4fplSdDWoMA1CTnHj8e4-oZzZLAaNzXrKpv9ez7uX~Lam--kWpYTWy~-SVwWYyzBvun2zWHthMyEKMiKoKMPyy0nOmi8RT0Z0Z9LsgmhpS~Ri0lcw-LUphRPJZmTHpEg662rwtvJqEG71ZQH2pubvf-hnyXPMnYxZoVJk-IwpA7FZulMGtiKkJF2OPLAwoXWK1EmYY49Jn4kR7TAeXQ4tuN24A37C1fYcuSh~Rntr7Zj173J-EycWOtKi06Rdjp8g-L3QCxxZc6J~-c8wQpUMphBGiXgw__";

const LOGO_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663361696775/ZNMkGRujHqObRVDO.png";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <>
      {/* CTA Section */}
      <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${CTA_BG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/90 to-forest-dark/75" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="w-16 h-[2px] bg-gold mx-auto mb-8" />
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Begin Your Investment Journey
            </h2>
            <p className="text-white/75 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              Whether you are a seasoned investor or exploring ethical investing for the first time, 
              VI Pillars Capital welcomes you. Reach out to learn more about our upcoming 
              investment opportunities.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:info@vipillarscapital.com"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-forest-dark font-semibold text-sm tracking-wide uppercase rounded-sm hover:bg-gold-light transition-colors duration-300"
              >
                <Mail className="w-4 h-4" />
                Contact Us
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/30 text-white font-medium text-sm tracking-wide uppercase rounded-sm hover:bg-white/10 transition-colors duration-300"
              >
                Learn More
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a2218] py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Logo & Description */}
            <div className="md:col-span-1">
              <img
                src={LOGO_URL}
                alt="VI Pillars Capital"
                className="h-12 w-auto mb-5"
              />
              <p className="text-white/50 text-sm leading-relaxed">
                A purpose-built Syndicate Lead aiming to pair socially conscious 
                capital with exclusive private markets investment opportunities.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-5">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {[
                  { label: "About", href: "#about" },
                  { label: "Our Approach", href: "#approach" },
                  { label: "Core Values", href: "#values" },
                  { label: "Pipeline", href: "#pipeline" },
                  { label: "Team", href: "#team" },
                ].map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-white/50 text-sm hover:text-gold transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-5">
                Contact
              </h4>
              <div className="space-y-3">
                <a
                  href="mailto:info@vipillarscapital.com"
                  className="flex items-center gap-2 text-white/50 text-sm hover:text-gold transition-colors duration-300"
                >
                  <Mail className="w-4 h-4" />
                  info@vipillarscapital.com
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-white/30 text-xs">
                &copy; {new Date().getFullYear()} VI Pillars Capital, LLC. All rights reserved.
              </p>
              <p className="text-white/30 text-xs">
                This website is for informational purposes only and does not constitute an offer to sell or a solicitation of an offer to buy any security.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
