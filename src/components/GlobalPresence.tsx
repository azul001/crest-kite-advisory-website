"use client";

import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { LOCATIONS } from "@/lib/data";

export default function GlobalPresence() {
  return (
    <section id="presence" className="w-full" style={{ backgroundColor: "var(--color-ivory)" }}>

      {/* Dark header band */}
      <div
        className="w-full py-16"
        style={{
          background: "linear-gradient(135deg, var(--color-burgundy) 0%, var(--color-secondary-burgundy) 60%, var(--color-deep-wine) 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs tracking-[0.3em] mb-4 font-cinzel"
                style={{ color: "var(--color-muted-gold)" }}>
                GLOBAL PRESENCE &amp; DESKS
              </p>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold leading-tight"
                style={{ color: "var(--color-ivory)" }}>
                Headquartered in Dubai,{" "}
                <span style={{ color: "var(--color-muted-gold)" }}>Represented Globally</span>
              </h2>
            </motion.div>
            <motion.p
              className="text-base leading-relaxed"
              style={{ color: "rgba(250,247,242,0.72)" }}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Our advisory network spans key financial centres across the UAE, GCC and
              international markets — delivering consistent counsel wherever your business operates.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Location cards */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-5">
          {LOCATIONS.map((loc, i) => (
            <motion.div
              key={loc.city}
              className="group relative p-6 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: "var(--color-white)",
                border: "1px solid rgba(197,168,128,0.2)",
                boxShadow: "0 1px 8px rgba(74,21,37,0.04)",
              }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ boxShadow: "0 12px 40px rgba(74,21,37,0.1)" }}
            >
              {/* Number + pin */}
              <div className="flex items-center justify-between">
                <span className="font-playfair text-4xl font-bold leading-none"
                  style={{ color: "rgba(74,21,37,0.08)" }}>
                  {loc.num}
                </span>
                <MapPin size={14} style={{ color: "var(--color-muted-gold)" }} />
              </div>

              {/* Gold bar on hover */}
              <div className="w-5 h-0.5 transition-all duration-300 group-hover:w-10"
                style={{ backgroundColor: "var(--color-muted-gold)" }} />

              <div className="flex-1">
                <h3 className="font-playfair text-xl font-bold leading-none mb-1"
                  style={{ color: "var(--color-dark-slate)" }}>
                  {loc.city}
                </h3>
                <p className="text-xs" style={{ color: "var(--color-muted-grey)" }}>
                  {loc.country}
                </p>
              </div>

              <div className="pt-3 border-t" style={{ borderColor: "rgba(197,168,128,0.2)" }}>
                <span className="text-xs font-cinzel tracking-wider italic"
                  style={{ color: "var(--color-burgundy)" }}>
                  {loc.desk}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-xs mt-8 italic text-center"
          style={{ color: "var(--color-muted-grey)" }}>
          These locations represent the firm&apos;s advisory coverage. Contact us to confirm
          regional desk availability.
        </p>
      </div>

    </section>
  );
}
