/*
 * Footer: Warm dark background (charcoal-brown), 4-column layout
 * Logo + tagline, Quick Links, Investment Focus, Get in Touch
 */
import { Link } from "wouter";
import { Mail, Shield } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-flint text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <Logo variant="light" size="sm" className="mb-5" />
            <p className="text-white/45 text-sm leading-relaxed mb-5">
              A purpose-built Syndicate Lead pairing ethical capital with exclusive 
              private markets investment opportunities.
            </p>
            <div className="flex items-center gap-2 text-sandstone/80 text-xs font-medium">
              <Shield className="w-3.5 h-3.5" />
              Principled & Ethically Screened
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sandstone text-sm font-semibold tracking-wider uppercase mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Dealflow", href: "/dealflow" },
                { label: "News & Insights", href: "/news" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/45 text-sm hover:text-sandstone transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Investment Focus */}
          <div>
            <h4 className="text-sandstone text-sm font-semibold tracking-wider uppercase mb-5">
              Investment Focus
            </h4>
            <ul className="space-y-3">
              {[
                "Private Equity",
                "Venture Capital",
                "Real Estate",
                "Consumer",
              ].map((item) => (
                <li key={item} className="text-white/45 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h4 className="text-sandstone text-sm font-semibold tracking-wider uppercase mb-5">
              Get in Touch
            </h4>
            <a
              href="mailto:info@vipillarscapital.com"
              className="flex items-center gap-2 text-white/45 text-sm hover:text-sandstone transition-colors duration-200 mb-5"
            >
              <Mail className="w-4 h-4" />
              info@vipillarscapital.com
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center px-5 py-2.5 text-sm font-medium bg-sandstone/15 border border-sandstone/25 text-sandstone rounded-md hover:bg-sandstone/25 transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/25 text-xs">
              &copy; {new Date().getFullYear()} VI Pillars Capital, LLC. All rights reserved.
            </p>
            <p className="text-white/25 text-xs text-center md:text-right max-w-lg italic">
              This website is for informational purposes only and does not constitute an offer 
              to sell or a solicitation of an offer to buy any security.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
