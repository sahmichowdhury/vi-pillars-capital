/*
 * Logo: Clean text-based logo matching VI Pillars Capital branding
 * "VI" is large (same height as the pillar), warm tan/gold tones
 * Supports light (for dark backgrounds) and dark (for light backgrounds) variants
 */

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
}

export default function Logo({ variant = "dark", className = "" }: LogoProps) {
  // Use warm tan/copper tones instead of green
  const viColor = variant === "dark" ? "text-[#8B7355]" : "text-[#D4C4A8]";
  const labelColor = variant === "dark" ? "text-[#5C4A32]" : "text-white/90";
  const pillarFill = variant === "dark" ? "#8B7355" : "#D4C4A8";

  return (
    <div className={`flex items-center gap-0.5 select-none ${className}`}>
      {/* VI text - large, matching pillar height */}
      <span
        className={`font-serif text-[34px] font-bold leading-none tracking-[-0.02em] ${viColor}`}
        style={{ lineHeight: "38px" }}
      >
        VI
      </span>

      {/* Pillar SVG - same height as VI text */}
      <svg
        width="16"
        height="38"
        viewBox="0 0 16 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        {/* Capital (top plate) */}
        <rect x="1" y="0" width="14" height="2.5" rx="0.5" fill={pillarFill} />
        {/* Abacus */}
        <rect x="3" y="2.5" width="10" height="1.5" rx="0.3" fill={pillarFill} />
        {/* Shaft */}
        <rect x="4.5" y="4" width="7" height="27" rx="0.5" fill={pillarFill} />
        {/* Fluting */}
        <line x1="6" y1="5" x2="6" y2="30" stroke={variant === "dark" ? "#f5f0e8" : "rgba(58,90,64,0.25)"} strokeWidth="0.5" opacity="0.5" />
        <line x1="8" y1="5" x2="8" y2="30" stroke={variant === "dark" ? "#f5f0e8" : "rgba(58,90,64,0.25)"} strokeWidth="0.5" opacity="0.5" />
        <line x1="10" y1="5" x2="10" y2="30" stroke={variant === "dark" ? "#f5f0e8" : "rgba(58,90,64,0.25)"} strokeWidth="0.5" opacity="0.5" />
        {/* Bottom decoration */}
        <rect x="3" y="31" width="10" height="1.5" rx="0.3" fill={pillarFill} />
        {/* Base */}
        <rect x="1" y="32.5" width="14" height="2.5" rx="0.5" fill={pillarFill} />
        {/* Platform */}
        <rect x="0" y="35" width="16" height="3" rx="0.5" fill={pillarFill} />
      </svg>

      {/* Pillars Capital text */}
      <div className="flex flex-col leading-none ml-1">
        <span className={`font-serif text-[14px] font-bold tracking-wide ${labelColor}`}>
          Pillars
        </span>
        <span className={`font-serif text-[14px] font-bold tracking-wide ${labelColor}`}>
          Capital
        </span>
      </div>
    </div>
  );
}
