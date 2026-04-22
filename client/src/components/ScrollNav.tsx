/**
 * ScrollNav — fixed left-side "On this page" navigation that:
 * - Sits on the far left of the viewport, never overlapping page content
 * - Shows a "On this page" heading and a vertical list of section labels
 * - Highlights the active section with an accent left-border line as the user scrolls
 * - Lets users click any label to smooth-scroll to that section
 * - Appears only after the user scrolls 100px down
 * - Only visible on xl+ screens (≥1280px) so it never crowds mobile/tablet layouts
 *
 * Usage:
 *   <ScrollNav sections={[{ id: "intro", label: "Introduction" }, ...]} />
 *
 * Each section must have a matching DOM element with the same id.
 */
import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

  const update = useCallback(() => {
    const scrollY = window.scrollY;
    setVisible(scrollY > 100);

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

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -12 }}
          transition={{ duration: 0.25 }}
          aria-label="On this page"
          className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden xl:block w-44"
        >
          {/* Heading */}
          <p className="text-[10px] font-semibold tracking-widest uppercase text-foreground/35 mb-4 pl-3">
            On this page
          </p>

          {/* Section list */}
          <ul className="space-y-0">
            {sections.map((section) => {
              const isActive = section.id === activeId;
              return (
                <li key={section.id}>
                  <button
                    onClick={() => scrollTo(section.id)}
                    className={`
                      group w-full text-left py-2 pl-3 pr-2 text-xs leading-snug
                      border-l-2 transition-all duration-200
                      ${isActive
                        ? "border-leather text-leather font-semibold"
                        : "border-foreground/10 text-foreground/40 hover:border-sandstone/50 hover:text-foreground/70"
                      }
                    `}
                  >
                    {section.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
