/*
 * Logo: Bold Doric Fluted — All Luxe Gold
 * "V" is large serif, "I" is a detailed Doric column with fluting
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
  const svgW = Math.round(360 * scale);
  const svgH = Math.round(110 * scale);

  return (
    <div className={`flex items-center select-none ${className}`}>
      <svg
        width={svgW}
        height={svgH}
        viewBox="0 0 360 110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        {/* Large bold "V" */}
        <text
          x="2"
          y="82"
          fontFamily="'Playfair Display', Georgia, serif"
          fontSize="90"
          fontWeight="900"
          fill={gold}
          letterSpacing="-4"
        >
          V
        </text>

        {/* Bold Doric Fluted Pillar as "I" */}
        <g transform="translate(70, 5)">
          {/* Capital - wide flat top */}
          <rect x="-13" y="0" width="26" height="4" rx="1.5" fill={gold} />
          {/* Echinus (middle tier) */}
          <rect x="-10" y="4" width="20" height="3" fill={gold} opacity="0.9" />
          {/* Necking */}
          <rect x="-7" y="7" width="14" height="2.5" fill={gold} opacity="0.85" />
          {/* Fluted shaft */}
          <path d="M-6,9.5 L-5,66 L5,66 L6,9.5 Z" fill={gold} />
          {/* Prominent fluting channels */}
          <path d="M-4,11 Q-3.5,38 -3.2,64" fill="none" stroke={flutingColor} strokeWidth="1.2" opacity="0.2" strokeLinecap="round" />
          <path d="M-1.5,11 Q-1.3,38 -1.2,64" fill="none" stroke={flutingColor} strokeWidth="1.2" opacity="0.2" strokeLinecap="round" />
          <path d="M1.5,11 Q1.3,38 1.2,64" fill="none" stroke={flutingColor} strokeWidth="1.2" opacity="0.2" strokeLinecap="round" />
          <path d="M4,11 Q3.5,38 3.2,64" fill="none" stroke={flutingColor} strokeWidth="1.2" opacity="0.2" strokeLinecap="round" />
          {/* Base - necking */}
          <rect x="-7" y="66" width="14" height="2.5" fill={gold} opacity="0.85" />
          {/* Base - torus */}
          <rect x="-10" y="68.5" width="20" height="3" fill={gold} opacity="0.9" />
          {/* Base - plinth */}
          <rect x="-13" y="71.5" width="26" height="4" rx="1.5" fill={gold} />
        </g>

        {/* "Pillars" text */}
        <text
          x="108"
          y="44"
          fontFamily="'Playfair Display', Georgia, serif"
          fontSize="30"
          fontWeight="800"
          fill={gold}
          letterSpacing="0.5"
        >
          Pillars
        </text>
        {/* "Capital" text */}
        <text
          x="108"
          y="76"
          fontFamily="'Playfair Display', Georgia, serif"
          fontSize="30"
          fontWeight="800"
          fill={gold}
          letterSpacing="0.5"
        >
          Capital
        </text>
        {/* Gold underline rule */}
        <line x1="108" y1="84" x2="260" y2="84" stroke={gold} strokeWidth="1.8" />
      </svg>
    </div>
  );
}
