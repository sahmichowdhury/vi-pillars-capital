/*
 * LP Login Portal - Under Construction
 * Aesthetic "coming soon" page with VI Pillars branding
 */
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Lock, Mail, ArrowRight, Shield, Bell } from "lucide-react";
import Logo from "@/components/Logo";

export default function LPLoginPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="pt-[72px] min-h-screen bg-warm-dark relative overflow-hidden flex items-center">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-warm-dark via-[oklch(0.25_0.03_55)] to-[oklch(0.20_0.02_70)]" />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div ref={ref} className="relative max-w-xl mx-auto px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Lock Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gold/10 border border-gold/20 mb-8">
            <Lock className="w-8 h-8 text-gold" />
          </div>

          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Logo variant="light" size="md" />
          </div>

          {/* Heading */}
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
            LP Portal{" "}
            <span className="italic text-gold">Coming Soon</span>
          </h1>

          <p className="text-white/50 text-lg leading-relaxed mb-10 max-w-md mx-auto">
            We're building a secure, dedicated portal for our Limited Partners to
            access deal documents, performance reports, and investment updates.
          </p>

          {/* Features Preview */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {[
              {
                icon: Shield,
                label: "Secure Access",
                desc: "Bank-grade encryption",
              },
              {
                icon: Bell,
                label: "Real-Time Updates",
                desc: "Deal & distribution alerts",
              },
              {
                icon: Mail,
                label: "Document Center",
                desc: "K-1s, reports & more",
              },
            ].map((feature, i) => (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-xl p-4"
              >
                <feature.icon className="w-5 h-5 text-gold mx-auto mb-2" />
                <p className="text-white text-sm font-semibold">{feature.label}</p>
                <p className="text-white/40 text-xs mt-0.5">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Notify CTA */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <p className="text-white/60 text-sm mb-4">
              Are you an existing investor? Contact us for interim access to your
              documents and reports.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-warm-dark font-semibold text-sm rounded-full hover:bg-gold-dark transition-colors"
            >
              Contact Our Team
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Fine Print */}
          <p className="text-white/25 text-xs mt-8">
            The LP Portal is available exclusively to verified Limited Partners of
            VI Pillars Capital SPVs.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
