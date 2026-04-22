/**
 * PageSideNav — shared inline "On this page" side navigation
 *
 * Matches the style used on the About and Investor Education pages:
 * - Sticky left sidebar, hidden on mobile (hidden lg:block)
 * - "On this page" label in small caps
 * - Active section highlighted with leather left-border and sandstone bg
 * - Click any label to smooth-scroll to that section
 * - Scroll-aware: updates active section as user scrolls
 */
import { useState, useEffect, useCallback } from "react";

export interface SideNavSection {
  id: string;
  label: string;
}

interface PageSideNavProps {
  sections: SideNavSection[];
  /** Width class for the aside. Defaults to "w-48" */
  width?: string;
  /** Scroll offset from top. Defaults to 100 */
  offset?: number;
}

export default function PageSideNav({
  sections,
  width = "w-48",
  offset = 100,
}: PageSideNavProps) {
  const [active, setActive] = useState(sections[0]?.id ?? "");

  const updateActive = useCallback(() => {
    let current = sections[0]?.id ?? "";
    for (const section of sections) {
      const el = document.getElementById(section.id);
      if (el) {
        const top = el.getBoundingClientRect().top;
        if (top <= offset + 20) current = section.id;
      }
    }
    setActive(current);
  }, [sections, offset]);

  useEffect(() => {
    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    return () => window.removeEventListener("scroll", updateActive);
  }, [updateActive]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
      setActive(id);
    }
  };

  return (
    <aside className={`hidden lg:block ${width} shrink-0`}>
      <div className="sticky top-28 space-y-1">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/35 mb-4 px-3">
          On this page
        </p>
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => scrollTo(s.id)}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
              active === s.id
                ? "bg-sandstone/10 text-leather font-semibold border-l-2 border-leather"
                : "text-foreground/50 hover:text-flint hover:bg-cream/60"
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>
    </aside>
  );
}
