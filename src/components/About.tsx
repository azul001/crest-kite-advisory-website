"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="w-full py-24"
      style={{ backgroundColor: "var(--color-cream)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Eyebrow */}
        <motion.p
          className="text-xs tracking-[0.3em] mb-3 font-cinzel"
          style={{ color: "var(--color-muted-gold)" }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          INSTITUTIONAL BACKGROUND
        </motion.p>

        <motion.h2
          className="font-playfair text-3xl md:text-4xl xl:text-5xl font-bold mb-14 max-w-3xl leading-tight"
          style={{ color: "var(--color-dark-slate)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Built on Expertise.{" "}
          <span
            className="italic"
            style={{ color: "var(--color-burgundy)" }}
          >
            Driven by Inviolable Trust.
          </span>
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-14">
          {/* Left */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-5 mb-10">
              <p
                className="text-base leading-relaxed"
                style={{ color: "var(--color-muted-grey)" }}
              >
                Crest Kite Advisory &amp; Assurance is positioned to support businesses
                navigating the complexities of financial governance, corporate taxation,
                statutory compliance and strategic financial management.
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ color: "var(--color-muted-grey)" }}
              >
                Our integrated approach combines regulatory understanding, financial
                expertise and practical business insight to help organisations operate
                with confidence.
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ color: "var(--color-muted-grey)" }}
              >
                We believe that trust is built through professional independence,
                transparent communication, rigorous execution and long-term client
                relationships.
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ color: "var(--color-muted-grey)" }}
              >
                With a presence spanning UAE&apos;s key financial centres and regional desks
                across the GCC and international markets, we bring focused expertise to
                multinational groups, family offices and high-growth enterprises seeking
                reliable advisory partnership.
              </p>
            </div>

            {/* Trust cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "15+ Years of GCC Acumen",
                  body: "Deep and continuously developed knowledge of regional regulatory environments, financial standards and business culture.",
                },
                {
                  title: "Full Spectrum Advisory",
                  body: "End-to-end coverage across tax, audit, accounting and strategic financial management from a single integrated practice.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="p-5 rounded-sm"
                  style={{
                    backgroundColor: "var(--color-white)",
                    border: `1px solid var(--color-muted-gold)`,
                  }}
                >
                  <h4
                    className="font-playfair text-base font-bold mb-2"
                    style={{ color: "var(--color-burgundy)" }}
                  >
                    {card.title}
                  </h4>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--color-muted-grey)" }}
                  >
                    {card.body}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            className="flex-shrink-0 w-full lg:w-96 xl:w-[440px]"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div
              className="relative overflow-hidden mb-4"
              style={{
                height: 380,
                background:
                  "linear-gradient(135deg, #1a2744 0%, #2d4066 40%, #3d5a8a 70%, #c5a880 100%)",
                borderRadius: 2,
              }}
            >
              {/* Boardroom silhouette */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg viewBox="0 0 320 200" className="w-full h-full opacity-30">
                  {/* Table */}
                  <ellipse cx="160" cy="140" rx="120" ry="20" fill="rgba(197,168,128,0.6)" />
                  {/* People silhouettes */}
                  {[60, 110, 160, 210, 260].map((x, i) => (
                    <g key={i}>
                      <circle cx={x} cy="90" r="12" fill="rgba(255,255,255,0.4)" />
                      <rect
                        x={x - 15}
                        y="102"
                        width="30"
                        height="38"
                        rx="4"
                        fill="rgba(255,255,255,0.3)"
                      />
                    </g>
                  ))}
                </svg>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="text-xs tracking-widest font-cinzel opacity-60"
                  style={{ color: "var(--color-muted-gold)" }}
                >
                  EXECUTIVE ADVISORY
                </span>
              </div>
            </div>

            {/* Compliance strip */}
            <div
              className="p-4 text-center"
              style={{
                backgroundColor: "var(--color-dark-slate)",
                borderRadius: 2,
              }}
            >
              <p
                className="text-xs tracking-widest font-cinzel"
                style={{ color: "var(--color-muted-gold)" }}
              >
                FEDERAL COMPLIANCE EXPOSURE · OUR AUDIT STANDARDS
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
