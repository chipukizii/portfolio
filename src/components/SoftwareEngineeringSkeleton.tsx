import React from 'react';
import { motion } from 'framer-motion';

export function SoftwareEngineeringSkeleton() {
  return (
    <div className="relative w-full h-full min-h-[420px] flex items-center justify-center z-10">
      <svg
        viewBox="0 0 580 420"
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-full max-h-[480px] opacity-90 dark:opacity-80 transition-opacity duration-300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* ===== DEFS ===== */}
        <defs>
          <marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <polygon points="0 0, 6 3, 0 6" fill="#a8a29e" opacity="0.8" />
          </marker>
          <marker id="arr-amber" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <polygon points="0 0, 6 3, 0 6" fill="#f59e0b" opacity="0.9" />
          </marker>
          {/* Glow filter for travelling dot */}
          <filter id="dotGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* =================== PATHS =================== */}

        {/* Left vertical rail */}
        <motion.line x1="38" y1="120" x2="38" y2="310"
          stroke="#a8a29e" strokeWidth="2.5" strokeLinecap="round"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 1.2 }}
        />
        {/* Left top → Monitor */}
        <motion.line x1="38" y1="140" x2="90" y2="140"
          stroke="#a8a29e" strokeWidth="1.5" strokeDasharray="5 4" markerEnd="url(#arr)"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
        {/* Left bottom → Hand-gear */}
        <motion.line x1="38" y1="290" x2="90" y2="290"
          stroke="#a8a29e" strokeWidth="1.5" strokeDasharray="5 4" markerEnd="url(#arr)"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />

        {/* Dashed decoration rows top */}
        <motion.line x1="55" y1="105" x2="210" y2="105"
          stroke="#d6d3d1" strokeWidth="1" strokeDasharray="4 5"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 1.4, delay: 0.2 }}
        />
        <motion.line x1="55" y1="118" x2="210" y2="118"
          stroke="#d6d3d1" strokeWidth="1" strokeDasharray="4 5"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 1.4, delay: 0.3 }}
        />

        {/* Monitor → Analyze */}
        <motion.line x1="163" y1="140" x2="200" y2="140"
          stroke="#a8a29e" strokeWidth="1.5" strokeDasharray="5 4" markerEnd="url(#arr)"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        />

        {/* Analyze top loop arc */}
        <motion.path d="M 278 105 C 295 70 330 60 355 85 L 368 105"
          stroke="#a8a29e" strokeWidth="1.5" strokeDasharray="5 4"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        />

        {/* Analyze → Planning */}
        <motion.path d="M 278 165 L 355 165 L 355 140"
          stroke="#a8a29e" strokeWidth="1.5" strokeDasharray="5 4" markerEnd="url(#arr)"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        />

        {/* Planning → right rail top */}
        <motion.path d="M 395 140 L 440 140 L 440 110"
          stroke="#a8a29e" strokeWidth="1.5" strokeDasharray="5 4"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        />

        {/* Dashed decoration rows right of planning */}
        <motion.line x1="397" y1="162" x2="545" y2="162"
          stroke="#d6d3d1" strokeWidth="1" strokeDasharray="4 5" markerEnd="url(#arr)"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 1.3, delay: 1.0 }}
        />
        <motion.line x1="397" y1="175" x2="545" y2="175"
          stroke="#d6d3d1" strokeWidth="1" strokeDasharray="4 5"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 1.3, delay: 1.1 }}
        />

        {/* Right vertical rail */}
        <motion.line x1="545" y1="108" x2="545" y2="330"
          stroke="#a8a29e" strokeWidth="2.5" strokeLinecap="round"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: 1.0 }}
        />
        {/* Right → Gauge */}
        <motion.line x1="490" y1="140" x2="545" y2="140"
          stroke="#a8a29e" strokeWidth="1.5" strokeDasharray="5 4" markerEnd="url(#arr)"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        />
        {/* Right → Validation */}
        <motion.line x1="545" y1="300" x2="490" y2="300"
          stroke="#a8a29e" strokeWidth="1.5" strokeDasharray="5 4" markerEnd="url(#arr)"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        />

        {/* Hand-gear → Dev arc */}
        <motion.path d="M 163 290 L 230 290 C 250 290 260 275 260 258 C 260 241 272 228 290 228"
          stroke="#a8a29e" strokeWidth="1.5" strokeDasharray="5 4" markerEnd="url(#arr)"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 1.3, delay: 1.0 }}
        />

        {/* Dashed decoration bottom rows */}
        <motion.line x1="55" y1="318" x2="230" y2="318"
          stroke="#d6d3d1" strokeWidth="1" strokeDasharray="4 5"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 1.3, delay: 0.7 }}
        />
        <motion.line x1="55" y1="332" x2="230" y2="332"
          stroke="#d6d3d1" strokeWidth="1" strokeDasharray="4 5" markerEnd="url(#arr)"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 1.3, delay: 0.8 }}
        />

        {/* Dev → Browser */}
        <motion.line x1="322" y1="258" x2="390" y2="258"
          stroke="#a8a29e" strokeWidth="1.5" strokeDasharray="5 4" markerEnd="url(#arr)"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        />
        {/* Browser → Validation */}
        <motion.path d="M 456 275 L 476 288"
          stroke="#a8a29e" strokeWidth="1.5" strokeDasharray="5 4" markerEnd="url(#arr)"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        />
        {/* Bottom right dashed row */}
        <motion.line x1="457" y1="318" x2="545" y2="318"
          stroke="#d6d3d1" strokeWidth="1" strokeDasharray="4 5" markerEnd="url(#arr)"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: 1.3 }}
        />

        {/* =================== PLAY TRIANGLES =================== */}
        <polygon points="62,133 68,137 62,141" fill="#f59e0b" opacity="0.8" />
        <polygon points="175,133 181,137 175,141" fill="#a8a29e" opacity="0.7" />
        <polygon points="310,158 316,162 310,166" fill="#a8a29e" opacity="0.7" />
        <polygon points="420,155 426,159 420,163" fill="#f59e0b" opacity="0.8" />
        <polygon points="62,283 68,287 62,291" fill="#a8a29e" opacity="0.7" />
        <polygon points="195,283 201,287 195,291" fill="#f59e0b" opacity="0.8" />
        <polygon points="355,251 361,255 355,259" fill="#a8a29e" opacity="0.7" />
        <polygon points="463,293 469,297 463,301" fill="#f59e0b" opacity="0.8" />

        {/* Small dot nodes */}
        <circle cx="200" cy="140" r="3.5" fill="#f59e0b" opacity="0.9" />
        <circle cx="355" cy="165" r="3.5" fill="#a8a29e" opacity="0.7" />
        <circle cx="440" cy="140" r="3.5" fill="#a8a29e" opacity="0.7" />
        <circle cx="476" cy="300" r="3.5" fill="#f59e0b" opacity="0.9" />
        <circle cx="290" cy="228" r="3" fill="#a8a29e" opacity="0.5" />
        <circle cx="390" cy="258" r="3" fill="#a8a29e" opacity="0.5" />
        <circle cx="240" cy="175" r="4" stroke="#a8a29e" strokeWidth="1.5" fill="none" opacity="0.5" />
        <circle cx="480" cy="240" r="4" stroke="#a8a29e" strokeWidth="1.5" fill="none" opacity="0.5" />

        {/* =================== NODE 1: Monitor (Programming) =================== */}
        <motion.g initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }}>
          <rect x="90" y="120" width="60" height="40" rx="5" stroke="#f59e0b" strokeWidth="2" fill="#fefce8" />
          <rect x="90" y="120" width="60" height="14" rx="5" fill="#fef3c7" />
          <text x="120" y="147" textAnchor="middle" fontSize="13" fontFamily="monospace" fontWeight="800" fill="#92400e">&lt;/&gt;</text>
          <rect x="108" y="160" width="24" height="5" rx="2" fill="#f59e0b" opacity="0.5" />
          <rect x="100" y="165" width="40" height="3" rx="1.5" fill="#a8a29e" opacity="0.4" />
          <text x="120" y="179" textAnchor="middle" fontSize="7.5" fontFamily="monospace" fontWeight="600" fill="#78716c">PROGRAMMING</text>
        </motion.g>

        {/* =================== NODE 2: Analyze (Lens Circle) =================== */}
        <motion.g initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6 }}>
          <circle cx="240" cy="135" r="38" stroke="#a8a29e" strokeWidth="2" fill="#f5f5f4" />
          <circle cx="240" cy="135" r="30" stroke="#d6d3d1" strokeWidth="1" strokeDasharray="3 3" fill="none" />
          <circle cx="235" cy="128" r="17" stroke="#38bdf8" strokeWidth="2.5" fill="#e0f2fe" />
          <text x="235" y="133" textAnchor="middle" fontSize="11" fontFamily="monospace" fontWeight="700" fill="#0369a1">&lt;/&gt;</text>
          <line x1="248" y1="140" x2="258" y2="150" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" />
          <text x="240" y="186" textAnchor="middle" fontSize="7.5" fontFamily="monospace" fontWeight="600" fill="#78716c">ANALYZE</text>
        </motion.g>

        {/* =================== NODE 3: Planning (Clipboard) =================== */}
        <motion.g initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8 }}>
          <rect x="348" y="90" width="44" height="54" rx="4" stroke="#f59e0b" strokeWidth="2" fill="#fefce8" />
          <rect x="357" y="86" width="26" height="12" rx="4" fill="#f59e0b" opacity="0.9" />
          <line x1="355" y1="113" x2="385" y2="113" stroke="#a8a29e" strokeWidth="1.5" />
          <line x1="355" y1="120" x2="385" y2="120" stroke="#a8a29e" strokeWidth="1.5" />
          <line x1="355" y1="127" x2="372" y2="127" stroke="#a8a29e" strokeWidth="1.5" />
          <rect x="355" y="104" width="9" height="9" rx="2" stroke="#f59e0b" strokeWidth="1.5" fill="none" />
          <polyline points="357,109 360,112 364,106" stroke="#f59e0b" strokeWidth="1.5" fill="none" />
          <text x="370" y="158" textAnchor="middle" fontSize="7.5" fontFamily="monospace" fontWeight="600" fill="#78716c">PLANNING</text>
        </motion.g>

        {/* =================== NODE 4: Testing (Gauge) =================== */}
        <motion.g initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.0 }}>
          <path d="M 452 155 A 35 35 0 0 1 525 155" stroke="#38bdf8" strokeWidth="2.5" fill="none" />
          <path d="M 460 155 A 27 27 0 0 1 517 155" stroke="#bae6fd" strokeWidth="1" fill="none" />
          <line x1="488" y1="155" x2="473" y2="133" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
          <circle cx="488" cy="155" r="4.5" fill="#ef4444" />
          <line x1="452" y1="155" x2="457" y2="148" stroke="#a8a29e" strokeWidth="1.5" />
          <line x1="488" y1="120" x2="488" y2="127" stroke="#a8a29e" strokeWidth="1.5" />
          <line x1="525" y1="155" x2="520" y2="148" stroke="#a8a29e" strokeWidth="1.5" />
          <text x="488" y="170" textAnchor="middle" fontSize="7.5" fontFamily="monospace" fontWeight="600" fill="#78716c">TESTING</text>
        </motion.g>

        {/* =================== NODE 5: Implementation (Hand + Gear) =================== */}
        <motion.g initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.0 }}>
          <circle cx="130" cy="290" r="17" stroke="#a8a29e" strokeWidth="2" fill="#f5f5f4" />
          <circle cx="130" cy="290" r="8" stroke="#f59e0b" strokeWidth="2" fill="#fef3c7" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
            const rad = (angle * Math.PI) / 180;
            return (
              <line key={i}
                x1={130 + 16 * Math.cos(rad)} y1={290 + 16 * Math.sin(rad)}
                x2={130 + 21 * Math.cos(rad)} y2={290 + 21 * Math.sin(rad)}
                stroke="#a8a29e" strokeWidth="3" strokeLinecap="round"
              />
            );
          })}
          <path d="M 103 280 C 99 272 103 263 109 270 L 114 279" stroke="#f59e0b" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M 109 270 C 107 262 113 260 116 269 L 118 279" stroke="#f59e0b" strokeWidth="2" fill="none" strokeLinecap="round" />
          <text x="120" y="320" textAnchor="middle" fontSize="7" fontFamily="monospace" fontWeight="600" fill="#78716c">IMPLEMENTATION</text>
        </motion.g>

        {/* =================== NODE 6: Development (Gear Arc) =================== */}
        <motion.g initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.1 }}>
          <path d="M 258 258 C 258 237 272 225 290 225 C 308 225 322 237 322 258 C 322 279 308 291 290 291 C 272 291 258 279 258 258 Z"
            stroke="#a8a29e" strokeWidth="2" fill="#f5f5f4" />
          <circle cx="290" cy="272" r="12" stroke="#a8a29e" strokeWidth="2" fill="#f5f5f4" />
          <circle cx="290" cy="272" r="5" stroke="#f59e0b" strokeWidth="2" fill="#fef3c7" />
          {[0, 60, 120, 180, 240, 300].map((angle, i) => {
            const rad = (angle * Math.PI) / 180;
            return (
              <line key={i}
                x1={290 + 11 * Math.cos(rad)} y1={272 + 11 * Math.sin(rad)}
                x2={290 + 15 * Math.cos(rad)} y2={272 + 15 * Math.sin(rad)}
                stroke="#a8a29e" strokeWidth="2.5" strokeLinecap="round"
              />
            );
          })}
          <polyline points="285,243 289,247 297,239" stroke="#22c55e" strokeWidth="2" fill="none" strokeLinecap="round" />
          <text x="290" y="306" textAnchor="middle" fontSize="7.5" fontFamily="monospace" fontWeight="600" fill="#78716c">DEVELOPMENT</text>
        </motion.g>

        {/* =================== NODE 7: Design (Browser Window) =================== */}
        <motion.g initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.2 }}>
          <rect x="390" y="240" width="64" height="46" rx="5" stroke="#f59e0b" strokeWidth="2" fill="#fefce8" />
          <rect x="390" y="240" width="64" height="14" rx="5" fill="#fef3c7" />
          <circle cx="401" cy="247" r="2.5" fill="#ef4444" opacity="0.7" />
          <circle cx="409" cy="247" r="2.5" fill="#f59e0b" opacity="0.7" />
          <circle cx="417" cy="247" r="2.5" fill="#22c55e" opacity="0.7" />
          <rect x="397" y="258" width="18" height="14" rx="2" fill="#bae6fd" opacity="0.7" />
          <rect x="420" y="258" width="12" height="6" rx="1.5" fill="#a8a29e" opacity="0.5" />
          <rect x="420" y="267" width="25" height="5" rx="1.5" fill="#a8a29e" opacity="0.4" />
          <text x="422" y="300" textAnchor="middle" fontSize="7.5" fontFamily="monospace" fontWeight="600" fill="#78716c">DESIGN</text>
        </motion.g>

        {/* =================== NODE 8: Validation (Monitor + Checks) =================== */}
        <motion.g initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.4 }}>
          <rect x="458" y="275" width="54" height="38" rx="5" stroke="#38bdf8" strokeWidth="2" fill="#e0f2fe" />
          <rect x="458" y="275" width="54" height="13" rx="5" fill="#bae6fd" />
          <polyline points="466,294 470,299 480,287" stroke="#22c55e" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="487,294 491,299 501,287" stroke="#22c55e" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="477" y="313" width="14" height="4" rx="2" fill="#38bdf8" opacity="0.5" />
          <rect x="471" y="317" width="26" height="3" rx="1.5" fill="#a8a29e" opacity="0.4" />
          <text x="485" y="330" textAnchor="middle" fontSize="7" fontFamily="monospace" fontWeight="600" fill="#78716c">VALIDATION</text>
        </motion.g>

        {/* =================== ANIMATED TRAVELLING DOT =================== */}

        {/* Hidden path that traces the full workflow route */}
        <path
          id="dotRoute"
          d="
            M 38,120
            L 38,140
            L 90,140
            L 163,140
            L 200,140
            L 240,135
            L 278,165
            L 355,165
            L 355,140
            L 395,140
            L 440,140
            L 488,140
            L 545,140
            L 545,300
            L 490,300
            L 485,295
            L 456,275
            L 422,258
            L 390,258
            L 322,258
            L 290,258
            L 290,228
            L 260,258
            L 230,290
            L 163,290
            L 130,290
            L 90,290
            L 38,290
            L 38,310
            L 38,120
          "
          fill="none"
          stroke="none"
        />

        {/* Trail dot 3 (faintest, most delayed) */}
        <circle r="3" fill="#f59e0b" opacity="0.15" filter="url(#dotGlow)">
          <animateMotion
            dur="10s"
            repeatCount="indefinite"
            begin="0.6s"
          >
            <mpath href="#dotRoute" />
          </animateMotion>
        </circle>

        {/* Trail dot 2 (medium) */}
        <circle r="3.5" fill="#f59e0b" opacity="0.3" filter="url(#dotGlow)">
          <animateMotion
            dur="10s"
            repeatCount="indefinite"
            begin="0.3s"
          >
            <mpath href="#dotRoute" />
          </animateMotion>
        </circle>

        {/* Main dot (brightest, leading) */}
        <circle r="5" fill="#f59e0b" opacity="0.95" filter="url(#dotGlow)">
          <animateMotion
            dur="10s"
            repeatCount="indefinite"
          >
            <mpath href="#dotRoute" />
          </animateMotion>
        </circle>

      </svg>
    </div>
  );
}
