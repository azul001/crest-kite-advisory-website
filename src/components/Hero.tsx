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
        style={{ color: "var(--color-burgundy)" }}
      >
        {metric.prefix}
        {display}
        {metric.suffix}
      </div>
      <div
        className="text-xs mt-1 tracking-wide"
        style={{ color: "var(--color-muted-grey)" }}
      >
        {metric.label}
      </div>
    </div>
  );
}

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
      style={{ backgroundColor: "var(--color-ivory)" }}
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
            style={{ color: "var(--color-dark-slate)" }}
          >
            Where Financial Expertise Meets Business{" "}
            <span style={{ color: "var(--color-burgundy)" }}>Confidence.</span>
          </h1>

          <p
            className="text-base md:text-lg leading-relaxed mb-10 max-w-xl"
            style={{ color: "var(--color-muted-grey)" }}
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
                backgroundColor: "var(--color-burgundy)",
                color: "var(--color-ivory)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "var(--color-secondary-burgundy)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "var(--color-burgundy)")
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
                borderColor: "var(--color-burgundy)",
                color: "var(--color-burgundy)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--color-burgundy)";
                e.currentTarget.style.color = "var(--color-ivory)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "var(--color-burgundy)";
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

        {/* Right — image placeholder */}
        <motion.div
          className="flex-shrink-0 w-full max-w-sm lg:max-w-md xl:max-w-lg relative"
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div
            className="relative w-full overflow-hidden"
            style={{ height: 480, borderRadius: 2 }}
          >
            {/* Burgundy gradient background */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(160deg, #2a0a14 0%, #4A1525 35%, #722F37 65%, #C5A880 100%)",
              }}
            />
            {/* Subtle geometric pattern overlay */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: "repeating-linear-gradient(45deg, rgba(197,168,128,0.5) 0px, rgba(197,168,128,0.5) 1px, transparent 1px, transparent 50px)",
              }}
            />
            {/* Silhouette cityscape */}
            <svg
              className="absolute bottom-0 left-0 w-full"
              viewBox="0 0 400 200"
              preserveAspectRatio="none"
              style={{ height: 200 }}
            >
              <rect x="20" y="80" width="30" height="120" fill="rgba(42,10,20,0.85)" />
              <rect x="55" y="60" width="20" height="140" fill="rgba(42,10,20,0.9)" />
              <rect x="80" y="40" width="25" height="160" fill="rgba(42,10,20,0.85)" />
              <rect x="110" y="30" width="15" height="170" fill="rgba(42,10,20,0.8)" />
              <rect x="130" y="20" width="40" height="180" fill="rgba(42,10,20,0.9)" />
              <rect x="175" y="10" width="20" height="190" fill="rgba(42,10,20,0.85)" />
              <rect x="200" y="35" width="30" height="165" fill="rgba(42,10,20,0.8)" />
              <rect x="235" y="50" width="25" height="150" fill="rgba(42,10,20,0.85)" />
              <rect x="265" y="65" width="20" height="135" fill="rgba(42,10,20,0.75)" />
              <rect x="290" y="45" width="35" height="155" fill="rgba(42,10,20,0.85)" />
              <rect x="330" y="75" width="25" height="125" fill="rgba(42,10,20,0.8)" />
              <rect x="360" y="85" width="30" height="115" fill="rgba(42,10,20,0.75)" />
              {/* Gold water reflection */}
              <rect x="0" y="200" width="400" height="40" fill="rgba(197,168,128,0.15)" />
            </svg>

            {/* Overlay panel */}
            <div
              className="absolute bottom-0 left-0 right-0 p-5"
              style={{ backgroundColor: "var(--color-burgundy)" + "f0" }}
            >
              <p
                className="text-xs tracking-widest font-cinzel mb-1"
                style={{ color: "var(--color-muted-gold)" }}
              >
                UAE CORPORATE TAX & REGULATORY ALIGNED
              </p>
              <p
                className="text-xs leading-relaxed"
                style={{ color: "var(--color-ivory)" + "cc" }}
              >
                Committed to compliance excellence and international financial reporting standards.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
