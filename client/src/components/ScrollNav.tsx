/**
 * ScrollNav — floating right-side navigation that:
 * - Tracks scroll position and highlights the active section with an animated dot
 * - Marks past sections with a filled dot
 * - Lets users click any section label to smooth-scroll there
 * - Has a collapse/expand toggle
 * - Appears after the user scrolls 80px down
 *
 * Usage:
 *   <ScrollNav sections={[{ id: "intro", label: "Introduction" }, ...]} />
 *
 * Each section must have a matching DOM element with the same id.
 */
import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, ChevronDown } from "lucide-react";

export interface NavSection {
  id: string;
  label: string;
}

interface ScrollNavProps {
  sections: NavSection[];
  /** Offset from top of viewport when detecting active section. Defaults to 120px */
  offset?: number;
}

export default function ScrollNav({ sections, offset = 120 }: ScrollNavProps) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? "");
  const [visible, setVisible] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const update = useCallback(() => {
    const scrollY = window.scrollY;
    setVisible(scrollY > 80);

    // Determine active section: last section whose top is at or above the offset line
    let current = sections[0]?.id ?? "";
    for (const section of sections) {
      const el = document.getElementById(section.id);
      if (el) {
        const top = el.getBoundingClientRect().top;
        if (top <= offset) {
          current = section.id;
        }
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

  const activeIndex = sections.findIndex((s) => s.id === activeId);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 24 }}
          transition={{ duration: 0.25 }}
          className="fixed right-5 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-end"
        >
          <div className="bg-white/95 backdrop-blur-md border border-sandstone/15 rounded-2xl shadow-lg overflow-hidden">
            {/* Collapse toggle */}
            <div className="flex items-center justify-end px-3 pt-2.5 pb-1">
              <button
                onClick={() => setCollapsed((c) => !c)}
                className="text-foreground/30 hover:text-leather transition-colors"
                aria-label={collapsed ? "Expand navigation" : "Collapse navigation"}
              >
                {collapsed ? (
                  <ChevronDown className="w-3.5 h-3.5" />
                ) : (
                  <ChevronUp className="w-3.5 h-3.5" />
                )}
              </button>
            </div>

            {/* Section list */}
            <AnimatePresence initial={false}>
              {!collapsed && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="flex pb-3 px-0">
                    {/* Vertical dot track */}
                    <div className="flex flex-col items-center pl-4 pr-3 py-0.5">
                      {sections.map((section, i) => {
                        const isActive = section.id === activeId;
                        const isPast = i < activeIndex;
                        return (
                          <div key={section.id} className="flex flex-col items-center">
                            {/* Dot */}
                            <button
                              onClick={() => scrollTo(section.id)}
                              className="relative flex items-center justify-center w-5 h-5 rounded-full focus:outline-none"
                              aria-label={`Go to ${section.label}`}
                            >
                              {isActive ? (
                                <>
                                  <span className="absolute inset-0 rounded-full bg-sandstone/20 animate-ping" />
                                  <span className="w-3 h-3 rounded-full bg-leather shadow-sm" />
                                </>
                              ) : (
                                <span
                                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                                    isPast ? "bg-sandstone/60" : "bg-foreground/15"
                                  }`}
                                />
                              )}
                            </button>
                            {/* Connector line between dots */}
                            {i < sections.length - 1 && (
                              <div className="w-px h-7 bg-gradient-to-b from-sandstone/20 to-sandstone/10" />
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {/* Labels */}
                    <div className="flex flex-col pr-4">
                      {sections.map((section, i) => {
                        const isActive = section.id === activeId;
                        const isPast = i < activeIndex;
                        return (
                          <div key={section.id} className="flex flex-col">
                            <button
                              onClick={() => scrollTo(section.id)}
                              className={`h-5 text-left text-xs transition-all duration-200 whitespace-nowrap ${
                                isActive
                                  ? "text-leather font-semibold"
                                  : isPast
                                  ? "text-foreground/45 hover:text-flint"
                                  : "text-foreground/30 hover:text-flint"
                              }`}
                            >
                              {section.label}
                            </button>
                            {/* Spacer matching connector line height */}
                            {i < sections.length - 1 && <div className="h-7" />}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
