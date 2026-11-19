"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { METRICS } from "@/lib/data";

function useCounter(target: number, duration = 1800, start = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      setValue(parseFloat((progress * target).toFixed(1)));
      if (progress < 1) requestAnimationFrame(step);
      else setValue(target);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return value;
}

function MetricCounter({
  metric,
  start,
}: {
  metric: (typeof METRICS)[0];
  start: boolean;
}) {
  const val = useCounter(metric.value, 1800, start);
  const display = metric.value % 1 === 0 ? Math.floor(val) : val.toFixed(1);
  return (
    <div className="text-center md:text-left">
      <div
        className="text-3xl font-bold font-playfair leading-none"
        style={{ color: "var(--color-muted-gold)" }}
      >
        {metric.prefix}
        {display}
        {metric.suffix}
      </div>
      <div
        className="text-xs mt-1 tracking-wide"
        style={{ color: "rgba(250,247,242,0.6)" }}
      >
        {metric.label}
      </div>
    </div>
  );
}

const STARS: [number, number, number, string][] = [
  [30,20,0.9,"s1"],[80,45,0.6,"s3"],[140,15,0.85,"s2"],[200,35,0.7,"s4"],[260,20,0.95,"s1"],
  [320,40,0.65,"s5"],[370,15,0.8,"s2"],[55,70,0.5,"s4"],[110,55,0.75,"s3"],[175,80,0.6,"s1"],
  [240,60,0.9,"s5"],[300,75,0.55,"s2"],[350,50,0.8,"s4"],[20,100,0.7,"s3"],[90,110,0.5,"s1"],
  [160,95,0.85,"s5"],[230,105,0.65,"s2"],[310,90,0.9,"s4"],[380,115,0.6,"s3"],
];

const WINDOW_LIGHTS: [number, number, number, string][] = [
  [132,80,0.7,"wl1"],[136,80,0.5,"wl3"],[140,80,0.65,"wl2"],[132,95,0.45,"wl4"],
  [136,95,0.6,"wl1"],[140,95,0.5,"wl3"],[165,70,0.8,"wl2"],[165,85,0.55,"wl4"],
  [165,100,0.7,"wl1"],[165,115,0.5,"wl3"],[204,100,0.65,"wl2"],[208,100,0.5,"wl4"],
  [204,115,0.6,"wl1"],[208,115,0.45,"wl3"],[267,85,0.7,"wl2"],[271,85,0.55,"wl4"],
  [267,100,0.65,"wl1"],[271,100,0.5,"wl3"],
];

const BADGES = [
  { label: "FTA Registered", icon: "✓" },
  { label: "IFRS Compliant", icon: "✓" },
  { label: "VAT Registered", icon: "✓" },
];

export default function Hero() {
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="home"
      ref={ref}
      className="w-full py-20 md:py-28"
      style={{ backgroundColor: "var(--color-burgundy)" }}
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-14">
        {/* Left */}
        <motion.div
          className="flex-1 max-w-2xl"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p
            className="text-xs tracking-[0.3em] mb-6 font-cinzel"
            style={{ color: "var(--color-muted-gold)" }}
          >
            STRATEGIC CORPORATE ADVISORY UAE
          </p>

          <h1
            className="font-playfair text-4xl md:text-5xl xl:text-6xl leading-tight font-bold mb-6"
            style={{ color: "var(--color-ivory)" }}
          >
            Where Financial Expertise Meets Business{" "}
            <span style={{ color: "var(--color-muted-gold)" }}>Confidence.</span>
          </h1>

          <p
            className="text-base md:text-lg leading-relaxed mb-10 max-w-xl"
            style={{ color: "rgba(250,247,242,0.75)" }}
          >
            Pioneering audit governance, precision tax structuring, and compliance
            excellence for multinational groups, conglomerates, and high-growth
            enterprises across the United Arab Emirates.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <button
              onClick={() => {
                document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-7 py-3 text-sm font-medium tracking-widest font-cinzel transition-colors"
              style={{
                backgroundColor: "var(--color-muted-gold)",
                color: "var(--color-dark-slate)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "var(--color-dark-gold)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "var(--color-muted-gold)")
              }
            >
              EXPLORE OUR SERVICES →
            </button>
            <button
              onClick={() => {
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-7 py-3 text-sm font-medium tracking-widest font-cinzel border transition-colors"
              style={{
                borderColor: "rgba(197,168,128,0.6)",
                color: "var(--color-ivory)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(197,168,128,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              CONTACT OUR PARTNERS
            </button>
          </div>

          {/* Metrics */}
          <div
            className="flex flex-wrap gap-8 pt-8 border-t"
            style={{ borderColor: "var(--color-muted-gold)" + "40" }}
          >
            {METRICS.map((m) => (
              <MetricCounter key={m.label} metric={m} start={started} />
            ))}
          </div>
        </motion.div>

        {/* Right — animated Dubai skyline panel */}
        <motion.div
          className="flex-shrink-0 w-full max-w-sm lg:max-w-md xl:max-w-lg relative"
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div
            className="relative w-full overflow-hidden"
            style={{ height: 480, borderRadius: 2, border: "1px solid rgba(197,168,128,0.2)" }}
          >
            {/* Sky gradient */}
            <div className="absolute inset-0" style={{
              background: "linear-gradient(180deg, #0d0408 0%, #1a0810 30%, #2d1018 55%, #4A1525 75%, #722F37 100%)",
            }} />

            {/* Stars with twinkle CSS animation */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 480">
              <defs>
                <style>{`
                  @keyframes twinkle {
                    0%,100%{opacity:1} 40%{opacity:0.08} 70%{opacity:0.6}
                  }
                  .s1{animation:twinkle 2.6s ease-in-out infinite}
                  .s2{animation:twinkle 3.4s ease-in-out infinite 0.9s}
                  .s3{animation:twinkle 1.9s ease-in-out infinite 1.7s}
                  .s4{animation:twinkle 4.2s ease-in-out infinite 0.4s}
                  .s5{animation:twinkle 2.9s ease-in-out infinite 1.3s}
                `}</style>
              </defs>
              {STARS.map(([cx, cy, op, cls], i) => (
                <circle key={i} cx={cx} cy={cy}
                  r={i % 3 === 0 ? 1.2 : 0.7}
                  fill={i % 4 === 0 ? "#C5A880" : "rgba(250,247,242,0.6)"}
                  opacity={op}
                  className={cls}
                />
              ))}
            </svg>

            {/* Dubai skyline with staggered building entrance */}
            <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 400 260" preserveAspectRatio="none" style={{ height: 260 }}>
              <defs>
                <linearGradient id="bldg1" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#C5A880" stopOpacity="0.9"/>
                  <stop offset="100%" stopColor="#4A1525" stopOpacity="1"/>
                </linearGradient>
                <linearGradient id="bldg2" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#9E7D47" stopOpacity="0.8"/>
                  <stop offset="100%" stopColor="#2d1018" stopOpacity="1"/>
                </linearGradient>
                <linearGradient id="water" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(197,168,128,0.25)"/>
                  <stop offset="100%" stopColor="rgba(74,21,37,0.1)"/>
                </linearGradient>
                <style>{`
                  @keyframes winFlicker{
                    0%,80%,100%{opacity:var(--op,0.6)}
                    83%,87%{opacity:calc(var(--op,0.6)*0.1)}
                    91%{opacity:calc(var(--op,0.6)*0.7)}
                  }
                  .wl1{animation:winFlicker 5.2s ease-in-out infinite}
                  .wl2{animation:winFlicker 4.1s ease-in-out infinite 1.3s}
                  .wl3{animation:winFlicker 6.7s ease-in-out infinite 0.6s}
                  .wl4{animation:winFlicker 3.8s ease-in-out infinite 2.1s}
                `}</style>
              </defs>

              {/* Back layer — rises first */}
              <motion.g
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
              >
                <rect x="0"   y="160" width="22" height="100" fill="url(#bldg2)" opacity="0.5"/>
                <rect x="25"  y="140" width="16" height="120" fill="url(#bldg2)" opacity="0.5"/>
                <rect x="345" y="150" width="20" height="110" fill="url(#bldg2)" opacity="0.5"/>
                <rect x="370" y="135" width="30" height="125" fill="url(#bldg2)" opacity="0.5"/>
              </motion.g>

              {/* Mid layer */}
              <motion.g
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.75, ease: "easeOut" }}
              >
                <rect x="45"  y="120" width="28" height="140" fill="url(#bldg1)" opacity="0.7"/>
                <rect x="78"  y="90"  width="22" height="170" fill="url(#bldg1)" opacity="0.75"/>
                <rect x="105" y="130" width="18" height="130" fill="url(#bldg1)" opacity="0.6"/>
                <rect x="290" y="100" width="24" height="160" fill="url(#bldg1)" opacity="0.7"/>
                <rect x="318" y="120" width="22" height="140" fill="url(#bldg1)" opacity="0.65"/>
              </motion.g>

              {/* Main towers — rises last, most dramatic */}
              <motion.g
                initial={{ y: 55, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.0, delay: 1.0, ease: "easeOut" }}
              >
                <rect x="128" y="60"  width="36" height="200" fill="url(#bldg1)"/>
                <rect x="162" y="60"  width="12" height="200" fill="url(#bldg1)"/>
                <rect x="200" y="80"  width="30" height="180" fill="url(#bldg1)" opacity="0.9"/>
                <rect x="234" y="95"  width="26" height="165" fill="url(#bldg1)" opacity="0.85"/>
                <rect x="264" y="70"  width="22" height="190" fill="url(#bldg1)"/>
                {/* Window lights with flicker */}
                {WINDOW_LIGHTS.map(([wx, wy, op, cls], i) => (
                  <rect key={i} x={wx} y={wy} width="3" height="2"
                    fill="#C5A880" opacity={op} className={cls}
                    style={{ ["--op" as string]: op }}
                  />
                ))}
                {/* Water reflection */}
                <rect x="0" y="250" width="400" height="10" fill="url(#water)"/>
              </motion.g>

              {/* Burj Khalifa spire — pulses after towers appear */}
              <motion.polygon
                points="168,0 174,60 162,60"
                fill="#C5A880"
                initial={{ opacity: 0, y: 55 }}
                animate={{ opacity: [0, 0.9, 0.5, 0.9], y: [55, 55, 0, 0] }}
                transition={{ duration: 1.4, delay: 1.0, times: [0, 0.4, 0.7, 1], ease: "easeOut" }}
              />
            </svg>

            {/* Badges — staggered slide-in from right */}
            <div className="absolute top-5 right-5 flex flex-col gap-2">
              {BADGES.map((badge, i) => (
                <motion.div
                  key={badge.label}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-sm text-xs font-cinzel tracking-wide"
                  style={{
                    backgroundColor: "rgba(197,168,128,0.12)",
                    border: "1px solid rgba(197,168,128,0.35)",
                    color: "var(--color-muted-gold)",
                    backdropFilter: "blur(4px)",
                  }}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.5 + i * 0.18, ease: "easeOut" }}
                >
                  <span style={{ color: "#6ee7b7" }}>{badge.icon}</span>
                  {badge.label}
                </motion.div>
              ))}
            </div>

            {/* Bottom panel — fades up last */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 p-5"
              style={{
                background: "linear-gradient(0deg, rgba(10,2,6,0.95) 0%, rgba(42,10,20,0.85) 60%, transparent 100%)",
              }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.8 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-4 h-px" style={{ backgroundColor: "var(--color-muted-gold)" }}/>
                <p className="text-xs tracking-[0.25em] font-cinzel"
                  style={{ color: "var(--color-muted-gold)" }}>
                  UAE CORPORATE TAX &amp; REGULATORY ALIGNED
                </p>
              </div>
              <p className="text-xs leading-relaxed" style={{ color: "rgba(250,247,242,0.65)" }}>
                Committed to compliance excellence and international financial reporting standards.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
