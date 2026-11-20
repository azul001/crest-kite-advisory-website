"use client";

import { motion } from "framer-motion";

const PILLARS = [
  { num: "01", title: "Regulatory Precision", body: "Deep command of UAE Federal Tax Authority requirements, IFRS standards and GCC regulatory frameworks." },
  { num: "02", title: "Professional Independence", body: "Objective, conflict-free advisory built on ethical practice, transparent communication and fiduciary integrity." },
  { num: "03", title: "Strategic Partnership", body: "Long-term engagement model focused on client outcomes — not transactions. We grow with your business." },
  { num: "04", title: "Full-Spectrum Coverage", body: "Tax, audit, accounting and financial management delivered from one integrated practice with a single point of accountability." },
];

const STATS = [
  { value: "10+", label: "Years UAE Experience" },
  { value: "100+", label: "Enterprise Clients" },
  { value: "100%", label: "Client Retention" },
  { value: "AED 1.4B+", label: "Deals Advised" },
];

export default function About() {
  return (
    <section id="about" className="w-full" style={{ backgroundColor: "var(--color-cream)" }}>

      {/* Top banner */}
      <div
        className="w-full py-3 overflow-hidden"
        style={{ backgroundColor: "var(--color-dark-slate)", borderBottom: "1px solid rgba(197,168,128,0.15)" }}
      >
        <div className="flex gap-12 animate-none whitespace-nowrap px-6 max-w-7xl mx-auto">
          {["Corporate Tax Advisory", "VAT Compliance", "Statutory Audit", "Transfer Pricing", "IFRS Reporting", "Virtual CFO"].map((item) => (
            <span key={item} className="text-xs font-cinzel tracking-widest inline-flex items-center gap-3"
              style={{ color: "var(--color-muted-gold)" }}>
              <span style={{ color: "rgba(197,168,128,0.4)" }}>◆</span> {item}
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16 items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs tracking-[0.3em] mb-4 font-cinzel"
              style={{ color: "var(--color-muted-gold)" }}>
              INSTITUTIONAL BACKGROUND
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl xl:text-6xl font-bold leading-tight"
              style={{ color: "var(--color-dark-slate)" }}>
              Built on Expertise.{" "}
              <span className="italic" style={{ color: "var(--color-burgundy)" }}>
                Driven by Inviolable Trust.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-4"
          >
            <p className="text-base leading-relaxed" style={{ color: "var(--color-muted-grey)" }}>
              Crest Line Finance and Tax Consultants is positioned to support businesses navigating the
              complexities of financial governance, corporate taxation, statutory compliance and
              strategic financial management.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "var(--color-muted-grey)" }}>
              With a presence spanning UAE&apos;s key financial centres and regional desks across the
              GCC and international markets, we bring focused expertise to multinational groups,
              family offices and high-growth enterprises seeking reliable advisory partnership.
            </p>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-px mb-16"
          style={{ backgroundColor: "rgba(197,168,128,0.2)", border: "1px solid rgba(197,168,128,0.2)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {STATS.map((s, i) => (
            <div key={s.label} className="flex flex-col items-center justify-center py-8 px-4 text-center"
              style={{ backgroundColor: i % 2 === 0 ? "var(--color-white)" : "var(--color-cream)" }}>
              <div className="font-playfair text-3xl font-bold mb-1"
                style={{ color: "var(--color-burgundy)" }}>
                {s.value}
              </div>
              <div className="text-xs font-cinzel tracking-wider"
                style={{ color: "var(--color-muted-grey)" }}>
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Pillars + visual */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">

          {/* Pillars grid */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {PILLARS.map((p, i) => (
              <motion.div
                key={p.num}
                className="p-6 rounded-sm group hover:-translate-y-0.5 transition-all duration-300"
                style={{
                  backgroundColor: "var(--color-white)",
                  border: "1px solid rgba(197,168,128,0.25)",
                  boxShadow: "0 1px 8px rgba(74,21,37,0.04)",
                }}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ boxShadow: "0 8px 32px rgba(74,21,37,0.1)" }}
              >
                <div className="flex items-start gap-4">
                  <span className="font-playfair text-3xl font-bold leading-none shrink-0"
                    style={{ color: "rgba(74,21,37,0.1)" }}>
                    {p.num}
                  </span>
                  <div>
                    <div className="w-5 h-0.5 mb-3 transition-all duration-300 group-hover:w-8"
                      style={{ backgroundColor: "var(--color-muted-gold)" }} />
                    <h4 className="font-playfair text-base font-bold mb-2"
                      style={{ color: "var(--color-dark-slate)" }}>
                      {p.title}
                    </h4>
                    <p className="text-sm leading-relaxed"
                      style={{ color: "var(--color-muted-grey)" }}>
                      {p.body}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right visual panel */}
          <motion.div
            className="lg:col-span-2 flex flex-col gap-4"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Main visual */}
            <div className="relative overflow-hidden rounded-sm"
              style={{
                height: 300,
                background: "linear-gradient(145deg, #0d0408 0%, #2a0a14 40%, #4A1525 70%, #722F37 100%)",
                border: "1px solid rgba(197,168,128,0.2)",
              }}>
              {/* Pattern */}
              <div className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: "repeating-linear-gradient(45deg, rgba(197,168,128,0.6) 0px, rgba(197,168,128,0.6) 1px, transparent 1px, transparent 40px)",
                }} />
              {/* Centre emblem */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
                <svg viewBox="0 0 120 120" className="w-28 h-28">
                  <circle cx="60" cy="60" r="55" fill="none" stroke="rgba(197,168,128,0.3)" strokeWidth="1"/>
                  <circle cx="60" cy="60" r="44" fill="none" stroke="rgba(197,168,128,0.5)" strokeWidth="0.8"/>
                  <circle cx="60" cy="60" r="33" fill="none" stroke="rgba(197,168,128,0.2)" strokeWidth="0.6"/>
                  {/* Diamond */}
                  <polygon points="60,20 90,60 60,100 30,60" fill="none" stroke="rgba(197,168,128,0.6)" strokeWidth="1.2"/>
                  <polygon points="60,32 78,60 60,88 42,60" fill="rgba(74,21,37,0.4)" stroke="rgba(197,168,128,0.4)" strokeWidth="0.8"/>
                  <text x="60" y="65" textAnchor="middle" fontFamily="serif" fontSize="11"
                    fill="rgba(197,168,128,0.9)" letterSpacing="2">CL</text>
                </svg>
                <div className="text-center px-6">
                  <p className="font-cinzel text-xs tracking-[0.3em] mb-1"
                    style={{ color: "var(--color-muted-gold)" }}>
                    CREST LINE
                  </p>
                  <p className="text-xs" style={{ color: "rgba(250,247,242,0.5)" }}>
                    Tax · Audit · Accounting
                  </p>
                </div>
              </div>
            </div>

            {/* Compliance strip */}
            <div className="p-5 rounded-sm"
              style={{
                backgroundColor: "var(--color-dark-slate)",
                border: "1px solid rgba(197,168,128,0.15)",
              }}>
              <p className="text-xs font-cinzel tracking-[0.2em] mb-3"
                style={{ color: "var(--color-muted-gold)" }}>
                REGULATORY CREDENTIALS
              </p>
              <div className="space-y-2">
                {[
                  "FTA — Federal Tax Authority Registered",
                  "IFRS — International Reporting Standards",
                  "UAE Corporate Tax Law No. 47 of 2022",
                  "Economic Substance Regulations Compliant",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs"
                    style={{ color: "rgba(250,247,242,0.65)" }}>
                    <span style={{ color: "#6ee7b7", fontSize: 10 }}>✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
