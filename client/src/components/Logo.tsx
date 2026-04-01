/*
 * Logo: Bold Doric Fluted — All Luxe Gold
 * "V" is large serif, "I" is a detailed Doric column with fluting
 * Pillar height matches the "V" height exactly.
 * All elements in unified deep gold. Supports light (on dark bg) and dark (on light bg) variants.
 */

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function Logo({ variant = "dark", className = "", size = "md" }: LogoProps) {
  // Unified gold colors
  const goldOnDark = "#b8935a";
  const goldOnLight = "#8a6d3b";
  const gold = variant === "light" ? goldOnDark : goldOnLight;
  const flutingColor = variant === "light" ? "#0f0b08" : "#f5f0eb";

  // Size scaling
  const scale = size === "sm" ? 0.6 : size === "lg" ? 1.4 : 1;
  const svgW = Math.round(320 * scale);
  const svgH = Math.round(95 * scale);

  return (
    <div className={`flex items-center select-none ${className}`}>
      <svg
        width={svgW}
        height={svgH}
        viewBox="0 0 320 95"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        {/* Large bold "V" — baseline at y=75, cap-height ~60px (from ~y=15 to y=75) */}
        <text
          x="2"
          y="75"
          fontFamily="'Playfair Display', Georgia, serif"
          fontSize="82"
          fontWeight="900"
          fill={gold}
          letterSpacing="-4"
        >
          V
        </text>

        {/* Bold Doric Fluted Pillar as "I" — same height as the V (~60px, from y=15 to y=75) */}
        <g transform="translate(66, 15)">
          {/* Capital - wide flat top */}
          <rect x="-12" y="0" width="24" height="3.5" rx="1.2" fill={gold} />
          {/* Echinus (middle tier) */}
          <rect x="-9" y="3.5" width="18" height="2.5" fill={gold} opacity="0.9" />
          {/* Necking */}
          <rect x="-6.5" y="6" width="13" height="2" fill={gold} opacity="0.85" />
          {/* Fluted shaft — spans from y=8 to y=52 (44px) */}
          <path d="M-5.5,8 L-4.5,52 L4.5,52 L5.5,8 Z" fill={gold} />
          {/* Prominent fluting channels */}
          <path d="M-3.5,9.5 Q-3.2,30 -3,50.5" fill="none" stroke={flutingColor} strokeWidth="1.1" opacity="0.2" strokeLinecap="round" />
          <path d="M-1.2,9.5 Q-1.1,30 -1,50.5" fill="none" stroke={flutingColor} strokeWidth="1.1" opacity="0.2" strokeLinecap="round" />
          <path d="M1.2,9.5 Q1.1,30 1,50.5" fill="none" stroke={flutingColor} strokeWidth="1.1" opacity="0.2" strokeLinecap="round" />
          <path d="M3.5,9.5 Q3.2,30 3,50.5" fill="none" stroke={flutingColor} strokeWidth="1.1" opacity="0.2" strokeLinecap="round" />
          {/* Base - necking */}
          <rect x="-6.5" y="52" width="13" height="2" fill={gold} opacity="0.85" />
          {/* Base - torus */}
          <rect x="-9" y="54" width="18" height="2.5" fill={gold} opacity="0.9" />
          {/* Base - plinth */}
          <rect x="-12" y="56.5" width="24" height="3.5" rx="1.2" fill={gold} />
        </g>

        {/* "Pillars" text */}
        <text
          x="100"
          y="40"
          fontFamily="'Playfair Display', Georgia, serif"
          fontSize="28"
          fontWeight="800"
          fill={gold}
          letterSpacing="0.5"
        >
          Pillars
        </text>
        {/* "Capital" text */}
        <text
          x="100"
          y="70"
          fontFamily="'Playfair Display', Georgia, serif"
          fontSize="28"
          fontWeight="800"
          fill={gold}
          letterSpacing="0.5"
        >
          Capital
        </text>
        {/* Gold underline rule */}
        <line x1="100" y1="77" x2="240" y2="77" stroke={gold} strokeWidth="1.6" />
      </svg>
    </div>
  );
}
