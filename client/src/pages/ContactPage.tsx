/*
 * Contact Page: Header + contact form + info sidebar cards
 * Earthy moss/sandstone/leather color scheme
 */
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Clock, Send } from "lucide-react";
import { toast } from "sonner";

export default function ContactPage() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-60px" });
  const formRef = useRef(null);
  const isFormInView = useInView(formRef, { once: true, margin: "-60px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your message! We'll be in touch within 24-48 business hours.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      {/* Header */}
      <section className="pt-[72px] bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 24 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-leather-light text-xs font-semibold tracking-[0.25em] uppercase mb-4">
              Contact Us
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-flint leading-tight mb-5 max-w-2xl">
              Let's start a{" "}
              <span className="italic text-leather">conversation.</span>
            </h1>
            <p className="text-foreground/60 text-lg leading-relaxed max-w-2xl">
              Whether you're an experienced investor or just starting your journey, our team
              is here to help. Reach out to learn more about ethical investing with VI Pillars Capital.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="border-t border-sandstone/10" />
      </div>

      {/* Form + Sidebar */}
      <section className="py-16 lg:py-20 bg-white">
        <div ref={formRef} className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <motion.form
              initial={{ opacity: 0, y: 24 }}
              animate={isFormInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              onSubmit={handleSubmit}
              className="lg:col-span-2 space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-flint mb-2">
                    Full Name <span className="text-leather-light">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 text-sm bg-white border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-sandstone/30 focus:border-sandstone transition-all placeholder:text-foreground/30"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-flint mb-2">
                    Email Address <span className="text-leather-light">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 text-sm bg-white border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-sandstone/30 focus:border-sandstone transition-all placeholder:text-foreground/30"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-flint mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="What would you like to discuss?"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 text-sm bg-white border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-sandstone/30 focus:border-sandstone transition-all placeholder:text-foreground/30"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-flint mb-2">
                  Message <span className="text-leather-light">*</span>
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell us about your investment goals, questions, or how we can help..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 text-sm bg-white border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-sandstone/30 focus:border-sandstone transition-all resize-none placeholder:text-foreground/30"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-sandstone text-flint text-sm font-semibold rounded-md hover:bg-sandstone-light transition-colors duration-200"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </motion.form>

            {/* Sidebar Info Cards */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isFormInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-5"
            >
              <div className="p-6 rounded-2xl border border-sandstone/10 bg-cream/30">
                <div className="w-10 h-10 rounded-lg bg-sandstone/10 flex items-center justify-center mb-4">
                  <Mail className="w-5 h-5 text-leather" />
                </div>
                <h3 className="text-flint text-sm font-semibold mb-1">Email Us</h3>
                <a
                  href="mailto:info@vipillarscapital.com"
                  className="text-leather text-sm font-medium hover:underline"
                >
                  info@vipillarscapital.com
                </a>
                <p className="text-foreground/50 text-sm mt-3 leading-relaxed">
                  For general inquiries, investment questions, or partnership opportunities.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-sandstone/10 bg-cream/30">
                <div className="w-10 h-10 rounded-lg bg-sandstone/10 flex items-center justify-center mb-4">
                  <Clock className="w-5 h-5 text-leather" />
                </div>
                <h3 className="text-flint text-sm font-semibold mb-1">Response Time</h3>
                <p className="text-leather-light text-sm font-medium">24-48 business hours</p>
                <p className="text-foreground/50 text-sm mt-3 leading-relaxed">
                  Our team reviews every inquiry personally and will respond with a
                  thoughtful, detailed reply.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
