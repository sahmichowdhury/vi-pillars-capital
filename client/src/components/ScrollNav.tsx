/**
 * ScrollNav — fixed left-side "On this page" navigation
 *
 * Behaviour:
 * - Fixed to the left edge of the viewport on ALL screen sizes
 * - White card with shadow so it is always visible against dark and light backgrounds
 * - On large screens (≥1280px): sits in the natural margin outside max-w-7xl content — never overlaps text
 * - On smaller screens: compact floating panel, starts expanded, user can minimize at any time
 * - Minimize/expand toggle always visible
 * - Highlights the active section with a leather left-border as the user scrolls
 * - Click any label to smooth-scroll to that section
 * - Appears after the user scrolls 80px down
 */
import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface NavSection {
  id: string;
  label: string;
}

interface ScrollNavProps {
  sections: NavSection[];
  /** Offset from top of viewport when detecting active section. Defaults to 130px */
  offset?: number;
}

export default function ScrollNav({ sections, offset = 130 }: ScrollNavProps) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? "");
  const [visible, setVisible] = useState(false);
  const [minimized, setMinimized] = useState(false);

  const update = useCallback(() => {
    const scrollY = window.scrollY;
    setVisible(scrollY > 80);

    let current = sections[0]?.id ?? "";
    for (const section of sections) {
      const el = document.getElementById(section.id);
      if (el) {
        const top = el.getBoundingClientRect().top;
        if (top <= offset) current = section.id;
      }
    }
    setActiveId(current);
  }, [sections, offset]);

  useEffect(() => {
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [update]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - offset + 10;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -12 }}
          transition={{ duration: 0.22 }}
          aria-label="On this page"
          className="fixed left-2 top-1/2 -translate-y-1/2 z-50"
        >
          <div className="bg-white/95 backdrop-blur-sm shadow-md border border-sandstone/25 rounded-xl overflow-hidden">
            {/* Header row — always visible */}
            <div className="flex items-center gap-2 px-2.5 py-2 border-b border-sandstone/10">
              <AnimatePresence initial={false} mode="wait">
                {!minimized && (
                  <motion.span
                    key="label"
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "auto" }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ duration: 0.15 }}
                    className="text-[9px] font-bold tracking-widest uppercase text-foreground/40 whitespace-nowrap overflow-hidden"
                  >
                    On this page
                  </motion.span>
                )}
              </AnimatePresence>
              <button
                onClick={() => setMinimized((m) => !m)}
                className="flex-shrink-0 ml-auto text-foreground/35 hover:text-leather transition-colors p-0.5 rounded"
                aria-label={minimized ? "Expand navigation" : "Minimize navigation"}
              >
                {minimized ? (
                  <ChevronRight className="w-3.5 h-3.5" />
                ) : (
                  <ChevronLeft className="w-3.5 h-3.5" />
                )}
              </button>
            </div>

            {/* Section list — hidden when minimized */}
            <AnimatePresence initial={false}>
              {!minimized && (
                <motion.ul
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  className="overflow-hidden py-1 max-w-[160px]"
                >
                  {sections.map((section) => {
                    const isActive = section.id === activeId;
                    return (
                      <li key={section.id}>
                        <button
                          onClick={() => scrollTo(section.id)}
                          className={`
                            w-full text-left py-1.5 pl-2.5 pr-3 text-[11px] leading-snug
                            border-l-2 transition-all duration-200
                            ${isActive
                              ? "border-leather text-leather font-semibold bg-sandstone/5"
                              : "border-transparent text-foreground/45 hover:border-sandstone/40 hover:text-foreground/70 hover:bg-sandstone/5"
                            }
                          `}
                        >
                          {section.label}
                        </button>
                      </li>
                    );
                  })}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
