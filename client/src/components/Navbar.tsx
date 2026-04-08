/*
 * Navbar: Transparent with white logo on page load (hero shows through).
 * On scroll > 60px: transitions to white background with brown/leather logo.
 * Mobile menu always uses white background.
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
  { label: "Dealflow", href: "/dealflow" },
  { label: "News & Insights", href: "/news" },
  { label: "Contact", href: "/contact" },
];

// Pages where the hero is dark — navbar starts transparent with white text/logo
const DARK_HERO_PAGES = ["/", "/about", "/team", "/dealflow", "/news", "/contact"];

export default function Navbar() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const hasDarkHero = DARK_HERO_PAGES.includes(location);
  // When at top of a dark-hero page: transparent + white text/logo
  // After scrolling: white bg + dark text/logo
  const isTransparent = hasDarkHero && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    // Check initial scroll position (e.g. after navigation)
    setScrolled(window.scrollY > 60);
    return () => window.removeEventListener("scroll", onScroll);
  }, [location]);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        isTransparent
          ? "bg-transparent"
          : "bg-white/97 backdrop-blur-md shadow-sm border-b border-sandstone/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo — light variant (white/sandstone) when transparent, dark (leather) when scrolled */}
          <Link href="/" className="flex items-center shrink-0">
            <Logo variant={isTransparent ? "light" : "dark"} size="sm" />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md whitespace-nowrap ${
                    isTransparent
                      ? isActive
                        ? "text-white"
                        : "text-white/70 hover:text-white"
                      : isActive
                      ? "text-flint"
                      : "text-foreground/50 hover:text-flint"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className={`absolute bottom-0 left-3 right-3 h-[2px] ${isTransparent ? "bg-white/60" : "bg-sandstone"}`}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* LP Login Button */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/lp-login"
              className={`inline-flex items-center gap-2 px-5 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                isTransparent
                  ? "text-white border border-white/40 hover:bg-white/15"
                  : "text-flint border border-sandstone/30 hover:bg-sandstone hover:text-flint"
              }`}
            >
              <LogIn className="w-4 h-4" />
              LP Login
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 transition-colors ${isTransparent ? "text-white" : "text-flint"}`}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu — always white bg */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-border overflow-hidden"
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
                        ? "text-flint bg-cream"
                        : "text-foreground/60 hover:text-flint hover:bg-cream/50"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/lp-login"
                className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-flint"
              >
                <LogIn className="w-4 h-4" />
                LP Login
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
