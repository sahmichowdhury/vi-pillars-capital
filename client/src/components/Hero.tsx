/*
 * Design: Classical Authority — Neoclassical Minimalism
 * Hero: Full-viewport cinematic hero with column imagery, dark overlay, white text
 * Parallax-like fixed background, fade-up entrance animations
 */

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const HERO_BG = "https://private-us-east-1.manuscdn.com/sessionFile/9mxt3zhwlXmZIxHpvdjHNq/sandbox/hzaaKWDSLjK4eq8zph9evI-img-1_1771540460000_na1fn_aGVyby1iZw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvOW14dDN6aHdsWG1aSXhIcHZkakhOcS9zYW5kYm94L2h6YWFLV0RTTGpLNGVxOHpwaDlldkktaW1nLTFfMTc3MTU0MDQ2MDAwMF9uYTFmbl9hR1Z5YnkxaVp3LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=HzgQuoYWYkzx5d-ppbHySbWgPhU~TvztGS-pshUCpY~s7PHkEwnAmot1k~FfeUZ2zlUnD5uOkNoh4faNtJblFhv9IjqYCYrzO-5-IHJlMYPeRDR5IASfxAOwN~plWHW0lBGNWTu1A7K4E0JXDrHJqK1OT3H397eTaJwYFkfyi-HgP8UwSajhWMnJc4ZPSDcQMukLXA4vEhKMZacB2iJoj2rm5EISL2n5lKi2iPCRznRtGmNeQ7Iv0VcLQ55qb6AA9qx0KSHiWtcQe6hasLKNrJmOgwkyZmM910~XJfeUXmtAMwV5GUdFwJNXQSmz9WtqQzpLvJ3SJtYVLqTilH5Bbw__";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      />
      {/* Dark overlay with green tint */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a2a1f]/70 via-[#1a2a1f]/50 to-[#1a2a1f]/80" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Decorative gold line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-[2px] bg-gold mb-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-gold-light text-sm font-medium tracking-[0.3em] uppercase mb-4"
          >
            Ethical Investment Syndication
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6"
          >
            Pairing Socially Conscious Capital with Exclusive Opportunities
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl mb-10"
          >
            VI Pillars Capital is a purpose-built Syndicate Lead offering Shariah-compliant 
            investment opportunities across private equity, venture capital, and real estate.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#about"
              className="inline-flex items-center px-8 py-3.5 bg-gold text-forest-dark font-semibold text-sm tracking-wide uppercase rounded-sm hover:bg-gold-light transition-colors duration-300"
            >
              Learn More
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3.5 border border-white/40 text-white font-medium text-sm tracking-wide uppercase rounded-sm hover:bg-white/10 transition-colors duration-300"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/60 hover:text-gold transition-colors"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={28} />
        </motion.div>
      </motion.a>
    </section>
  );
}
