// Ornaments — reusable SVG components inspired by Uzbek mosaic/suzani patterns.
// Color via currentColor + var(--cobalt) tokens so they adapt to theme.

const OrnamentBird = ({ size = 80, color = "currentColor" }) => (
  <svg viewBox="0 0 200 160" width={size} style={{ display: 'block' }}>
    <defs>
      <radialGradient id="birdGrad" cx="50%" cy="40%">
        <stop offset="0%" stopColor="#2a55b3" />
        <stop offset="60%" stopColor="#1f3f8a" />
        <stop offset="100%" stopColor="#142a5e" />
      </radialGradient>
    </defs>
    {/* Bird silhouette filled with mosaic-ish pattern */}
    <g fill="url(#birdGrad)">
      <path d="M40 90 Q42 55 78 42 Q110 30 132 38 Q150 30 166 44 Q172 50 168 56 Q160 60 158 52 Q156 58 152 60 Q140 64 132 60 Q138 75 130 90 Q120 108 96 116 Q70 122 50 110 Q38 102 40 90 Z" />
    </g>
    {/* Mosaic dots */}
    <g fill="#d8a657">
      <circle cx="155" cy="48" r="2" />
      <circle cx="115" cy="58" r="1.5" />
      <circle cx="95" cy="80" r="1.5" />
      <circle cx="75" cy="95" r="1.5" />
      <circle cx="135" cy="78" r="1.5" />
    </g>
    <g fill="#4a6b3a" opacity="0.7">
      <circle cx="100" cy="70" r="3" />
      <circle cx="120" cy="90" r="2.5" />
      <circle cx="80" cy="85" r="2" />
    </g>
  </svg>
);

// Persian-style 8-pointed star (girih)
const OrnamentStar = ({ size = 60, color = "currentColor", thin = false }) => (
  <svg viewBox="0 0 100 100" width={size} style={{ display: 'block', color }}>
    <g fill="none" stroke="currentColor" strokeWidth={thin ? 0.8 : 1.5}>
      <polygon points="50,5 60,30 86,30 65,48 75,75 50,60 25,75 35,48 14,30 40,30" />
      <circle cx="50" cy="50" r="8" />
      <circle cx="50" cy="50" r="22" />
    </g>
  </svg>
);

// Suzani-style floral medallion
const OrnamentMedallion = ({ size = 120, color = "currentColor" }) => (
  <svg viewBox="0 0 200 200" width={size} style={{ display: 'block', color }}>
    <g fill="none" stroke="currentColor" strokeWidth="1">
      <circle cx="100" cy="100" r="90" />
      <circle cx="100" cy="100" r="60" />
      <circle cx="100" cy="100" r="30" />
      {/* radial petals */}
      {Array.from({ length: 16 }).map((_, i) => {
        const a = (i / 16) * 2 * Math.PI;
        const x1 = 100 + Math.cos(a) * 30;
        const y1 = 100 + Math.sin(a) * 30;
        const x2 = 100 + Math.cos(a) * 60;
        const y2 = 100 + Math.sin(a) * 60;
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
      })}
      {/* outer petals */}
      {Array.from({ length: 8 }).map((_, i) => {
        const a = (i / 8) * 2 * Math.PI;
        const cx = 100 + Math.cos(a) * 75;
        const cy = 100 + Math.sin(a) * 75;
        return <circle key={i} cx={cx} cy={cy} r="10" />;
      })}
      {/* inner star */}
      <polygon points="100,82 106,96 120,98 110,108 113,122 100,115 87,122 90,108 80,98 94,96" />
    </g>
  </svg>
);

// Wide dome/arch ornament for hero bottom
const OrnamentDome = ({ width = 800, color = "currentColor" }) => (
  <svg viewBox="0 0 800 200" width={width} style={{ display: 'block', color }}>
    <g fill="none" stroke="currentColor" strokeWidth="1">
      <path d="M0 200 Q400 0 800 200" />
      <path d="M40 200 Q400 30 760 200" />
      <path d="M80 200 Q400 60 720 200" />
      {/* hanging beads */}
      {Array.from({ length: 13 }).map((_, i) => {
        const t = (i + 1) / 14;
        const x = t * 800;
        const y = 200 - 200 * Math.sin(t * Math.PI);
        return (
          <g key={i}>
            <line x1={x} y1={y} x2={x} y2={y + 30} />
            <circle cx={x} cy={y + 36} r="3" fill="currentColor" />
          </g>
        );
      })}
    </g>
  </svg>
);

// Tiled corner decoration
const OrnamentCorner = ({ size = 200, color = "currentColor" }) => (
  <svg viewBox="0 0 200 200" width={size} style={{ display: 'block', color }}>
    <g fill="none" stroke="currentColor" strokeWidth="1">
      {/* Concentric arches */}
      <path d="M0 0 L0 200 Q0 100 100 100 Q200 100 200 0 Z" opacity="0.3" />
      <path d="M0 0 L0 160 Q0 80 80 80 Q160 80 160 0 Z" opacity="0.5" />
      <path d="M0 0 L0 120 Q0 60 60 60 Q120 60 120 0 Z" opacity="0.7" />
      {/* dots */}
      <circle cx="30" cy="30" r="2" fill="currentColor" />
      <circle cx="60" cy="20" r="1.5" fill="currentColor" />
      <circle cx="20" cy="60" r="1.5" fill="currentColor" />
      <circle cx="90" cy="60" r="1.5" fill="currentColor" />
      <circle cx="60" cy="90" r="1.5" fill="currentColor" />
    </g>
  </svg>
);

// Decorative divider line with center diamond
const OrnamentDivider = ({ width = 200, color = "currentColor" }) => (
  <svg viewBox="0 0 200 20" width={width} style={{ display: 'block', color }}>
    <g stroke="currentColor" strokeWidth="0.8" fill="none">
      <line x1="0" y1="10" x2="80" y2="10" />
      <line x1="120" y1="10" x2="200" y2="10" />
      <polygon points="100,2 108,10 100,18 92,10" fill="currentColor" />
      <circle cx="80" cy="10" r="1.5" fill="currentColor" />
      <circle cx="120" cy="10" r="1.5" fill="currentColor" />
    </g>
  </svg>
);

// Circular text label "BADGE"
const CircularText = ({ text = "MAHALLA 90 · SINCE 2024 · TASHKENT ·", radius = 60, fontSize = 9 }) => {
  const id = `c${Math.random().toString(36).slice(2, 8)}`;
  return (
    <svg viewBox="-80 -80 160 160" width="100%" height="100%">
      <defs>
        <path id={id} d={`M 0,0 m -${radius},0 a ${radius},${radius} 0 1,1 ${radius * 2},0 a ${radius},${radius} 0 1,1 -${radius * 2},0`} />
      </defs>
      <text fontFamily="var(--font-body)" fontSize={fontSize} letterSpacing="3" fill="currentColor" fontWeight="500">
        <textPath href={`#${id}`}>{text}</textPath>
      </text>
    </svg>
  );
};

// Repeating tile pattern (CSS background alternative)
const PatternTile = ({ size = 40, opacity = 0.06 }) => (
  <svg viewBox="0 0 40 40" width={size} height={size} style={{ opacity }}>
    <g fill="none" stroke="currentColor" strokeWidth="0.5">
      <circle cx="20" cy="20" r="14" />
      <circle cx="20" cy="20" r="6" />
      <polygon points="20,4 24,16 36,20 24,24 20,36 16,24 4,20 16,16" />
    </g>
  </svg>
);

Object.assign(window, {
  OrnamentBird,
  OrnamentStar,
  OrnamentMedallion,
  OrnamentDome,
  OrnamentCorner,
  OrnamentDivider,
  CircularText,
  PatternTile,
});
