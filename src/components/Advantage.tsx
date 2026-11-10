"use client";

import { Layers, Globe, Handshake } from "lucide-react";
import { motion } from "framer-motion";
import { ADVANTAGES, PRACTICE_STRIP } from "@/lib/data";

const ICON_MAP = { Layers, Globe, Handshake } as const;

export default function Advantage() {
  return (
    <section
      id="advantage"
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
          THE FIRM ADVANTAGE
        </motion.p>

        <motion.h2
          className="font-playfair text-3xl md:text-4xl xl:text-5xl font-bold mb-14 max-w-2xl leading-tight"
          style={{ color: "var(--color-dark-slate)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Why Discerning Enterprises Choose Us
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {ADVANTAGES.map((adv, i) => {
            const Icon = ICON_MAP[adv.icon as keyof typeof ICON_MAP];
            return (
              <motion.div
                key={adv.title}
                className="p-8 rounded-sm"
                style={{
                  backgroundColor: "var(--color-white)",
                  border: "1px solid rgba(197,168,128,0.25)",
                }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ boxShadow: "0 6px 32px rgba(74,21,37,0.1)" }}
              >
                <div
                  className="w-10 h-10 flex items-center justify-center rounded-sm mb-5"
                  style={{ backgroundColor: "rgba(74,21,37,0.06)" }}
                >
                  <Icon size={18} style={{ color: "var(--color-burgundy)" }} />
                </div>
                <h3
                  className="font-playfair text-lg font-bold mb-3"
                  style={{ color: "var(--color-dark-slate)" }}
                >
                  {adv.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--color-muted-grey)" }}
                >
                  {adv.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Practice strip */}
        <motion.div
          className="py-5 px-6 flex flex-wrap gap-x-6 gap-y-2 justify-center rounded-sm"
          style={{ backgroundColor: "var(--color-cream)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {PRACTICE_STRIP.map((item, i) => (
            <span key={item} className="flex items-center gap-6">
              <span
                className="text-xs tracking-widest font-cinzel"
                style={{ color: "var(--color-muted-grey)" }}
              >
                {item}
              </span>
              {i < PRACTICE_STRIP.length - 1 && (
                <span style={{ color: "var(--color-muted-gold)" }}>·</span>
              )}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
