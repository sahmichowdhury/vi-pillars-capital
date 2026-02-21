/*
 * Logo: Clean text-based logo matching VI Pillars Capital branding
 * Renders "VI" + pillar icon + "Pillars Capital" without any background
 * Supports light (for dark backgrounds) and dark (for light backgrounds) variants
 */

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
}

export default function Logo({ variant = "dark", className = "" }: LogoProps) {
  const textColor = variant === "dark" ? "text-forest-dark" : "text-white";
  const accentColor = variant === "dark" ? "text-gold-dark" : "text-gold";
  const pillarColor = variant === "dark" ? "#3a5a40" : "#ffffff";

  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      {/* VI text */}
      <span className={`font-serif text-2xl font-bold leading-none tracking-tight ${textColor}`}>
        VI
      </span>

      {/* Pillar SVG */}
      <svg
        width="14"
        height="32"
        viewBox="0 0 14 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        {/* Capital */}
        <rect x="1" y="0" width="12" height="2.5" rx="0.5" fill={pillarColor} />
        {/* Top decoration */}
        <rect x="2.5" y="2.5" width="9" height="1.5" rx="0.3" fill={pillarColor} />
        {/* Shaft */}
        <rect x="4" y="4" width="6" height="22" rx="0.5" fill={pillarColor} />
        {/* Fluting lines */}
        <line x1="5.5" y1="5" x2="5.5" y2="25" stroke={variant === "dark" ? "#f5f0e8" : "#3a5a40"} strokeWidth="0.4" opacity="0.4" />
        <line x1="7" y1="5" x2="7" y2="25" stroke={variant === "dark" ? "#f5f0e8" : "#3a5a40"} strokeWidth="0.4" opacity="0.4" />
        <line x1="8.5" y1="5" x2="8.5" y2="25" stroke={variant === "dark" ? "#f5f0e8" : "#3a5a40"} strokeWidth="0.4" opacity="0.4" />
        {/* Bottom decoration */}
        <rect x="2.5" y="26" width="9" height="1.5" rx="0.3" fill={pillarColor} />
        {/* Base */}
        <rect x="1" y="27.5" width="12" height="2.5" rx="0.5" fill={pillarColor} />
        {/* Platform */}
        <rect x="0" y="30" width="14" height="2" rx="0.5" fill={pillarColor} />
      </svg>

      {/* Pillars Capital text */}
      <div className="flex flex-col leading-none">
        <span className={`font-serif text-[13px] font-bold tracking-wide ${textColor}`}>
          Pillars
        </span>
        <span className={`font-serif text-[13px] font-bold tracking-wide ${textColor}`}>
          Capital
        </span>
      </div>
    </div>
  );
}
