/*
 * CTA Section: Light mint/cream background, centered card with headline + button
 * Reused across multiple pages, matching Xirge's "Ready to start your journey?" pattern
 */
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  headline?: string;
  accentWord?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function CTASection({
  headline = "Ready to start your",
  accentWord = "journey?",
  description = "Connect with our team to learn how VI Pillars Capital can help you access exclusive, ethically-screened investment opportunities.",
  buttonText = "Schedule a Consultation",
  buttonHref = "/contact",
}: CTASectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-white rounded-xl border border-gold/15 p-10 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          <div className="lg:max-w-lg">
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-forest-dark leading-tight mb-3">
              {headline}{" "}
              <span className="italic text-gold-dark">{accentWord}</span>
            </h2>
            <p className="text-foreground/60 text-[15px] leading-relaxed">
              {description}
            </p>
          </div>
          <Link
            href={buttonHref}
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-forest-dark text-white text-sm font-semibold rounded-md hover:bg-forest transition-colors duration-200 shrink-0"
          >
            {buttonText}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
