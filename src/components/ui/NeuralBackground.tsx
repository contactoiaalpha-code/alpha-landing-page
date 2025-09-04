import React from "react";

interface NeuralBackgroundProps {
  className?: string;
}

// Fondo SVG con líneas y nodos que simulan una red neuronal con energía
const NeuralBackground: React.FC<NeuralBackgroundProps> = ({ className }) => {
  // Curvas orgánicas tipo fibras neuronales (C = curvas cúbicas)
  const conexiones = [
    {
      id: "conn-1",
      d: "M60 220 C 260 80, 540 180, 820 120 S 1120 180, 1180 100",
    },
    {
      id: "conn-2",
      d: "M80 520 C 240 460, 560 480, 820 520 S 1080 560, 1140 460",
    },
    {
      id: "conn-3",
      d: "M100 320 C 320 240, 640 300, 900 280 S 1120 300, 1180 260",
    },
    {
      id: "conn-4",
      d: "M40 660 C 280 600, 560 720, 840 660 S 1060 640, 1200 680",
    },
    {
      id: "conn-5",
      d: "M120 140 C 260 280, 520 360, 820 320 S 1040 260, 1160 300",
    },
    {
      id: "conn-6",
      d: "M20 420 C 260 400, 560 380, 860 420 S 1100 500, 1180 520",
    },
  ];

  const nodos = [
    [100, 200],
    [400, 120],
    [700, 200],
    [1000, 120],
    [150, 500],
    [420, 420],
    [780, 520],
    [1050, 450],
    [200, 300],
    [500, 260],
    [850, 320],
    [1100, 300],
    [80, 650],
    [360, 600],
    [720, 700],
    [980, 640],
    [250, 150],
    [300, 350],
    [600, 380],
    [900, 300],
  ];

  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="energyGradientA" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFD700" stopOpacity="0.8">
            <animate
              attributeName="stop-color"
              values="#FFD700;#00D4FF;#FF00CC;#FFD700"
              dur="12s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="100%" stopColor="#FF8C00" stopOpacity="0.4">
            <animate
              attributeName="stop-color"
              values="#FF8C00;#0080FF;#A000FF;#FF8C00"
              dur="12s"
              repeatCount="indefinite"
            />
          </stop>
        </linearGradient>
        <linearGradient id="energyGradientB" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#A000FF" stopOpacity="0.5" />
        </linearGradient>
        <filter id="glow" filterUnits="userSpaceOnUse">
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Líneas (energía) */}
      <g strokeWidth="1.6" strokeLinecap="round">
        {conexiones.map((c, i) => (
          <path
            key={c.id}
            id={c.id}
            className="energy-line"
            d={c.d}
            stroke={
              i % 2 === 0 ? "url(#energyGradientA)" : "url(#energyGradientB)"
            }
          />
        ))}
      </g>

      {/* Nodos con brillo y anillos sinápticos */}
      <g filter="url(#glow)">
        {nodos.map(([x, y], idx) => (
          <g key={idx}>
            <circle cx={x} cy={y} r="3" className="glow-node" />
            <circle
              cx={x}
              cy={y}
              r="3"
              fill="none"
              stroke="#FFD700"
              strokeWidth="1.2"
              opacity="0.7"
            >
              <animate
                attributeName="r"
                values="3;11;3"
                dur="3.2s"
                repeatCount="indefinite"
                begin={`${idx * 0.25}s`}
              />
              <animate
                attributeName="opacity"
                values="0.8;0;0.8"
                dur="3.2s"
                repeatCount="indefinite"
                begin={`${idx * 0.25}s`}
              />
            </circle>
          </g>
        ))}
      </g>

      {/* Rayos de energía (bolts) moviéndose sobre las líneas) */}
      <g>
        {conexiones.map((c, i) => (
          <g key={`bolt-${c.id}-${i}`}>
            <circle r="2.6" fill="#FFD700" filter="url(#glow)">
              <animateMotion
                dur={`${5 + (i % 3)}s`}
                repeatCount="indefinite"
                begin={`${i * 0.7}s`}
              >
                <mpath href={`#${c.id}`} />
              </animateMotion>
            </circle>
            <circle r="2.2" fill="#00D4FF" filter="url(#glow)">
              <animateMotion
                dur={`${4.5 + (i % 2)}s`}
                repeatCount="indefinite"
                begin={`${i * 0.5 + 0.9}s`}
              >
                <mpath href={`#${c.id}`} />
              </animateMotion>
            </circle>
            <circle r="2.0" fill="#FF00CC" filter="url(#glow)">
              <animateMotion
                dur={`${6 + (i % 4)}s`}
                repeatCount="indefinite"
                begin={`${i * 0.6 + 1.2}s`}
              >
                <mpath href={`#${c.id}`} />
              </animateMotion>
            </circle>
          </g>
        ))}
      </g>
    </svg>
  );
};

export default NeuralBackground;
