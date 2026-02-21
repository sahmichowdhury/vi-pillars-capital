/*
 * Navbar: Clean white sticky nav, logo left, centered links, LP Login right
 * Matches Xirge Capital navigation pattern with VI Pillars branding
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, LogIn } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Pipeline", href: "/pipeline" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Logo variant="dark" />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-md ${
                    isActive
                      ? "text-forest-dark"
                      : "text-foreground/60 hover:text-forest-dark"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-4 right-4 h-[2px] bg-gold"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* LP Login Button */}
          <div className="hidden md:flex items-center">
            <a
              href="mailto:info@vipillarscapital.com"
              className="inline-flex items-center gap-2 px-5 py-2 text-sm font-medium text-forest-dark border border-forest-dark/20 rounded-md hover:bg-forest-dark hover:text-white transition-all duration-200"
            >
              <LogIn className="w-4 h-4" />
              LP Login
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-forest-dark"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-border overflow-hidden"
          >
            <div className="px-6 py-4 space-y-1">
              {navLinks.map((link) => {
                const isActive = location === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                      isActive
                        ? "text-forest-dark bg-cream"
                        : "text-foreground/60 hover:text-forest-dark hover:bg-cream/50"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <a
                href="mailto:info@vipillarscapital.com"
                className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-forest-dark"
              >
                <LogIn className="w-4 h-4" />
                LP Login
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
