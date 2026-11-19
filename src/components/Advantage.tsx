"use client";

import { motion } from "framer-motion";

const ADVANTAGES = [
  {
    num: "01",
    title: "Comprehensive Service Integration",
    body: "An integrated approach combining taxation, audit, accounting and financial advisory expertise to deliver coordinated solutions across your organisation.",
    detail: "One firm. Full coverage. No coordination gaps.",
  },
  {
    num: "02",
    title: "Local Expertise, Global Standards",
    body: "Deep understanding of UAE regulatory requirements combined with internationally recognised accounting, financial reporting and governance practices.",
    detail: "UAE-qualified advisors. IFRS & OECD aligned.",
  },
  {
    num: "03",
    title: "Proactive Strategic Partnership",
    body: "We focus on understanding business objectives, anticipating challenges and providing strategic financial guidance beyond routine compliance.",
    detail: "Advisory-first mindset — not just compliance tick-boxes.",
  },
  {
    num: "04",
    title: "Speed & Regulatory Responsiveness",
    body: "Dedicated teams with direct FTA access, rapid turnaround on filings and immediate advisory response when regulations change.",
    detail: "Fast. Accurate. Always aligned with current law.",
  },
  {
    num: "05",
    title: "Confidentiality & Independence",
    body: "Strict professional independence, client confidentiality and conflict-free advisory relationships underpinned by chartered accountancy ethics.",
    detail: "Your financial matters, protected and privileged.",
  },
  {
    num: "06",
    title: "Multicultural Business Acumen",
    body: "Advisory experience across UAE, GCC, South Asian and international business contexts — bridging cultural and regulatory nuance with precision.",
    detail: "Global mindset. Regional fluency. Local execution.",
  },
];

const PRACTICE_STRIP = [
  "TAX STRATEGY", "STATUTORY AUDITS", "IFRS COMPLIANCE",
  "VAT ACCOUNTING", "CORPORATE DUE DILIGENCE", "FINANCIAL CONTROLS",
  "TRANSFER PRICING", "VIRTUAL CFO",
];

export default function Advantage() {
  return (
    <section id="advantage" className="w-full" style={{ backgroundColor: "var(--color-ivory)" }}>

      {/* Dark header band */}
      <div
        className="w-full py-16"
        style={{
          background: "linear-gradient(135deg, var(--color-burgundy) 0%, var(--color-secondary-burgundy) 60%, var(--color-deep-wine) 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs tracking-[0.3em] mb-4 font-cinzel"
                style={{ color: "var(--color-muted-gold)" }}>
                THE FIRM ADVANTAGE
              </p>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold leading-tight"
                style={{ color: "var(--color-ivory)" }}>
                Why Discerning Enterprises{" "}
                <span style={{ color: "var(--color-muted-gold)" }}>Choose Us</span>
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
              We combine professional rigour with strategic thinking — delivering
              advisory services that drive compliance, reduce risk and unlock
              financial value for UAE businesses and multinational enterprises.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Advantage cards */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {ADVANTAGES.map((adv, i) => (
            <motion.div
              key={adv.num}
              className="group relative p-7 rounded-sm flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: "var(--color-white)",
                border: "1px solid rgba(197,168,128,0.2)",
                boxShadow: "0 1px 8px rgba(74,21,37,0.04)",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              whileHover={{ boxShadow: "0 12px 40px rgba(74,21,37,0.12)" }}
            >
              {/* Top row */}
              <div className="flex items-start justify-between">
                <span className="font-playfair text-5xl font-bold leading-none"
                  style={{ color: "rgba(74,21,37,0.08)" }}>
                  {adv.num}
                </span>
                <div className="w-6 h-0.5 mt-3 transition-all duration-300 group-hover:w-12"
                  style={{ backgroundColor: "var(--color-muted-gold)" }} />
              </div>

              <h3 className="font-playfair text-lg font-bold leading-snug"
                style={{ color: "var(--color-dark-slate)" }}>
                {adv.title}
              </h3>

              <p className="text-sm leading-relaxed flex-1"
                style={{ color: "var(--color-muted-grey)" }}>
                {adv.body}
              </p>

              {/* Bottom tag */}
              <div className="pt-3 border-t" style={{ borderColor: "rgba(197,168,128,0.2)" }}>
                <span className="text-xs font-cinzel tracking-wider italic"
                  style={{ color: "var(--color-burgundy)" }}>
                  {adv.detail}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Practice strip */}
      <div
        style={{
          backgroundColor: "var(--color-dark-slate)",
          borderTop: "1px solid rgba(197,168,128,0.12)",
        }}
      >
        <motion.div
          className="max-w-7xl mx-auto px-6 py-5 flex flex-wrap gap-x-8 gap-y-3 justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {PRACTICE_STRIP.map((item, i) => (
            <span key={item} className="flex items-center gap-8">
              <span className="text-xs tracking-[0.25em] font-cinzel"
                style={{ color: "var(--color-muted-grey)" }}>
                {item}
              </span>
              {i < PRACTICE_STRIP.length - 1 && (
                <span style={{ color: "rgba(197,168,128,0.3)", fontSize: 8 }}>◆</span>
              )}
            </span>
          ))}
        </motion.div>
      </div>

    </section>
  );
}
