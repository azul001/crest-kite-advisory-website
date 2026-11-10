"use client";

import { TrendingUp, Shield, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { SERVICES } from "@/lib/data";

const ICON_MAP = {
  TrendingUp,
  Shield,
  BookOpen,
} as const;

export default function Services() {
  return (
    <section
      id="services"
      className="w-full py-24"
      style={{ backgroundColor: "var(--color-ivory)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          className="text-xs tracking-[0.3em] mb-3 font-cinzel"
          style={{ color: "var(--color-muted-gold)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          PRACTICE SPECIALTIES
        </motion.p>

        <motion.h2
          className="font-playfair text-3xl md:text-4xl xl:text-5xl font-bold mb-14 max-w-2xl leading-tight"
          style={{ color: "var(--color-dark-slate)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Comprehensive Financial Solutions.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = ICON_MAP[service.icon as keyof typeof ICON_MAP];
            return (
              <motion.div
                key={service.number}
                className="flex flex-col p-8 rounded-sm transition-shadow duration-300"
                style={{
                  backgroundColor: "var(--color-white)",
                  border: "1px solid rgba(197,168,128,0.25)",
                }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{
                  boxShadow: "0 8px 40px rgba(74,21,37,0.12)",
                  y: -2,
                }}
              >
                {/* Number + Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span
                    className="text-4xl font-bold font-playfair leading-none"
                    style={{ color: "rgba(74,21,37,0.12)" }}
                  >
                    {service.number}
                  </span>
                  <div
                    className="w-10 h-10 flex items-center justify-center rounded-sm"
                    style={{ backgroundColor: "rgba(74,21,37,0.06)" }}
                  >
                    <Icon size={18} style={{ color: "var(--color-burgundy)" }} />
                  </div>
                </div>

                <h3
                  className="font-playfair text-xl font-bold mb-3"
                  style={{ color: "var(--color-dark-slate)" }}
                >
                  {service.title}
                </h3>

                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{ color: "var(--color-muted-grey)" }}
                >
                  {service.description}
                </p>

                <ul className="space-y-2 mb-8 flex-1">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm"
                      style={{ color: "var(--color-dark-slate)" }}
                    >
                      <span
                        className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                        style={{ backgroundColor: "var(--color-muted-gold)" }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <button
                  className="text-xs font-medium tracking-widest font-cinzel text-left transition-colors"
                  style={{ color: "var(--color-burgundy)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--color-dark-gold)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--color-burgundy)")
                  }
                >
                  {service.cta}
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
