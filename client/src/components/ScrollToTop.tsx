import { useEffect } from "react";
import { useLocation } from "wouter";

/**
 * ScrollToTop — scrolls the window to the top on every route change.
 * Place this inside the Router so it has access to location.
 */
export default function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location]);

  return null;
}
