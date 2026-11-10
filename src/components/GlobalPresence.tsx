"use client";

import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { LOCATIONS } from "@/lib/data";

export default function GlobalPresence() {
  return (
    <section
      id="presence"
      className="w-full py-24"
      style={{ backgroundColor: "var(--color-cream)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          className="text-xs tracking-[0.3em] mb-3 font-cinzel"
          style={{ color: "var(--color-muted-gold)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          GLOBAL PRESENCE &amp; DESKS
        </motion.p>

        <motion.h2
          className="font-playfair text-3xl md:text-4xl xl:text-5xl font-bold mb-14 max-w-2xl leading-tight"
          style={{ color: "var(--color-dark-slate)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Headquartered in Dubai, Represented Globally
        </motion.h2>

        <div className="flex gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-5 md:overflow-visible snap-x snap-mandatory">
          {LOCATIONS.map((loc, i) => (
            <motion.div
              key={loc.city}
              className="snap-start shrink-0 w-52 md:w-auto p-6 rounded-sm flex flex-col gap-3 transition-shadow duration-200"
              style={{
                backgroundColor: "var(--color-white)",
                border: "1px solid rgba(197,168,128,0.25)",
              }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ boxShadow: "0 6px 24px rgba(74,21,37,0.1)" }}
            >
              <div className="flex items-center gap-2">
                <MapPin size={14} style={{ color: "var(--color-muted-gold)" }} />
                <span
                  className="text-xs font-cinzel tracking-widest"
                  style={{ color: "var(--color-muted-grey)" }}
                >
                  {loc.num}
                </span>
              </div>
              <div>
                <h3
                  className="font-playfair text-lg font-bold leading-none"
                  style={{ color: "var(--color-dark-slate)" }}
                >
                  {loc.city}
                </h3>
                <p
                  className="text-xs mt-1"
                  style={{ color: "var(--color-muted-grey)" }}
                >
                  {loc.country}
                </p>
              </div>
              <span
                className="text-xs font-cinzel tracking-wider"
                style={{ color: "var(--color-burgundy)" }}
              >
                {loc.desk}
              </span>
            </motion.div>
          ))}
        </div>

        <p
          className="text-xs mt-6 italic text-center"
          style={{ color: "var(--color-muted-grey)" }}
        >
          These locations represent the firm&apos;s advisory coverage. Contact us to confirm
          regional desk availability.
        </p>
      </div>
    </section>
  );
}
