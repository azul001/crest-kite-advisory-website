"use client";

import { motion } from "framer-motion";

/* ─── Service Data ─── */
const CATEGORIES = [
  {
    id: "corporate-tax",
    eyebrow: "SECTION 01",
    title: "Corporate Tax Advisory & Compliance",
    intro:
      "End-to-end corporate tax solutions aligned with UAE Federal Tax Authority requirements under Corporate Tax Law No. 47 of 2022.",
    services: [
      {
        title: "Corporate Tax Registration",
        desc: "Full FTA registration, entity classification, group structuring and registration status advisory for UAE businesses.",
      },
      {
        title: "Corporate Tax Returns",
        desc: "Accurate preparation and timely filing of annual CT returns, deductions scheduling and supporting reconciliations.",
      },
      {
        title: "Tax Impact Assessment",
        desc: "Detailed diagnostic of corporate tax exposure across UAE entities, identifying planning opportunities and compliance gaps.",
      },
      {
        title: "Tax Residency Certificates",
        desc: "Procurement of UAE Tax Residency Certificates for treaty benefit claims and international double-tax relief.",
      },
      {
        title: "Voluntary Disclosure Support",
        desc: "Structuring and filing voluntary disclosures to FTA with penalty mitigation strategy and documentation.",
      },
      {
        title: "Penalty Reconsideration",
        desc: "Representation before the FTA for administrative penalty review, objection filings and dispute resolution.",
      },
      {
        title: "Tax Optimization Planning",
        desc: "Identification of lawful CT deductions, exemptions and structuring to minimise effective tax rate.",
      },
      {
        title: "FTA Audit Defence",
        desc: "Representation and document preparation during FTA tax audits; risk management and audit-trail review.",
      },
      {
        title: "Tax Due Diligence",
        desc: "Pre-acquisition and pre-investment tax reviews identifying historic exposures and contingent liabilities.",
      },
      {
        title: "Advance Pricing Agreements",
        desc: "Bilateral and unilateral APA advisory and submission support for related-party transaction certainty.",
      },
      {
        title: "Group Consolidation Tax",
        desc: "Tax grouping elections, consolidated return preparation and intra-group transaction advisory under UAE CT rules.",
      },
      {
        title: "Free Zone Qualification",
        desc: "QFZP status analysis, qualifying income testing and ongoing monitoring to maintain 0 % CT eligibility.",
      },
    ],
  },
  {
    id: "vat",
    eyebrow: "SECTION 02",
    title: "UAE VAT & Excise Services",
    intro:
      "Comprehensive VAT and excise compliance and advisory services covering registration, filing, health checks and FTA dispute representation.",
    services: [
      {
        title: "VAT Registration & De-registration",
        desc: "Mandatory and voluntary VAT registration with the FTA; structured de-registration when thresholds are no longer met.",
      },
      {
        title: "VAT Return Preparation & Filing",
        desc: "Monthly and quarterly VAT return preparation, review and electronic filing with reconciliation to accounting records.",
      },
      {
        title: "VAT Health Checks",
        desc: "Independent review of VAT output, input recovery position, error identification and corrective action planning.",
      },
      {
        title: "VAT Reconciliation",
        desc: "Detailed VAT ledger to return reconciliation, identifying timing differences, errors and unrecovered input tax.",
      },
      {
        title: "VAT Refund Claims",
        desc: "Preparation and submission of VAT refund applications with supporting documentation for FTA review.",
      },
      {
        title: "Designated Zone Advisory",
        desc: "Tax treatment of goods and services within designated free zones; supply chain structuring for VAT efficiency.",
      },
      {
        title: "Excise Tax Compliance",
        desc: "Registration, return filing and stock reconciliation for excise tax on tobacco, energy drinks and carbonated beverages.",
      },
      {
        title: "VAT Implementation Reviews",
        desc: "ERP and accounting system VAT configuration review, ensuring correct tax codes and reporting outputs.",
      },
    ],
  },
  {
    id: "transfer-pricing",
    eyebrow: "SECTION 03",
    title: "Transfer Pricing Services",
    intro:
      "Full-scope transfer pricing documentation and advisory services ensuring compliance with OECD guidelines and UAE Cabinet Decision No. 97 of 2023.",
    services: [
      {
        title: "TP Documentation (Master & Local File)",
        desc: "Preparation of OECD-compliant Master File and Local File with functional analysis and benchmarking studies.",
      },
      {
        title: "Benchmarking Analysis",
        desc: "Comparable uncontrolled transactions search using authoritative databases to establish arm's-length pricing ranges.",
      },
      {
        title: "Country-by-Country Reporting",
        desc: "CbCR preparation and notification filing for multinational enterprise groups meeting UAE CbCR thresholds.",
      },
      {
        title: "TP Policy Design",
        desc: "Inter-company pricing policy frameworks covering goods, services, IP licensing, loans and guarantee fees.",
      },
      {
        title: "Related-Party Transaction Review",
        desc: "Review and documentation of all intra-group transactions to confirm arm's-length compliance and economic substance.",
      },
      {
        title: "TP Risk Assessment",
        desc: "Identification of high-risk related-party transactions and prioritised remediation roadmap for FTA readiness.",
      },
      {
        title: "Intercompany Agreements",
        desc: "Drafting and review of intercompany service, loan and cost-sharing agreements aligned with TP policy.",
      },
      {
        title: "Advance Pricing Agreements",
        desc: "Support for unilateral and bilateral APA applications to FTA and competent authority negotiations.",
      },
    ],
  },
  {
    id: "international-tax",
    eyebrow: "SECTION 04",
    title: "International Tax & Strategic Advisory",
    intro:
      "Cross-border tax planning, treaty advisory and corporate structuring services for multinationals and high-growth UAE enterprises.",
    services: [
      {
        title: "Double Tax Treaty Analysis",
        desc: "Identification and application of applicable treaty benefits for withholding tax reduction, residency and PE status.",
      },
      {
        title: "Permanent Establishment Review",
        desc: "Assessment of PE risk for foreign entities operating in the UAE and structuring advice to mitigate exposure.",
      },
      {
        title: "BEPS Compliance",
        desc: "BEPS Action Plan compliance review covering minimum standards: CbCR, treaty abuse, PE avoidance and dispute resolution.",
      },
      {
        title: "Economic Substance Advisory",
        desc: "Economic Substance Regulations assessment, notifications, annual reporting and remediation for UAE entities.",
      },
      {
        title: "Corporate Restructuring Advisory",
        desc: "Tax-efficient restructuring of corporate groups including mergers, acquisitions, hive-downs and cross-border migrations.",
      },
      {
        title: "Holding Structure Planning",
        desc: "Optimal UAE holding entity design leveraging participation exemptions, treaty networks and free zone benefits.",
      },
      {
        title: "Tax Ruling Applications",
        desc: "Preparation and submission of private tax ruling requests to the FTA for certainty on complex tax positions.",
      },
      {
        title: "Withholding Tax Advisory",
        desc: "Review of payments subject to foreign withholding taxes; treaty certification and reclaim support.",
      },
    ],
  },
];

/* ─── Free Zone Matrix ─── */
const FZ_MATRIX = [
  { zone: "DIFC", type: "Financial", ct: "0%", vat: "Exempt", esrReq: "Yes", eligible: true },
  { zone: "JAFZA", type: "Logistics / Trade", ct: "0%", vat: "Designated Zone", esrReq: "Yes", eligible: true },
  { zone: "DMCC", type: "Commodities / Multi", ct: "0% / 9%*", vat: "Standard", esrReq: "Yes", eligible: true },
  { zone: "ADGM", type: "Financial", ct: "0%", vat: "Exempt", esrReq: "Yes", eligible: true },
  { zone: "Dubai Silicon Oasis", type: "Technology", ct: "0% / 9%*", vat: "Standard", esrReq: "No", eligible: true },
  { zone: "Mainland Entity", type: "General", ct: "9%", vat: "Standard", esrReq: "No", eligible: false },
];

/* ─── Component ─── */
export default function Services() {
  return (
    <section id="services" className="w-full" style={{ backgroundColor: "var(--color-ivory)" }}>

      {/* Hero Header */}
      <div
        className="w-full py-20 relative overflow-hidden"
        style={{ backgroundColor: "var(--color-burgundy)" }}
      >
        {/* subtle geometric overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg, rgba(197,168,128,0.4) 0px, rgba(197,168,128,0.4) 1px, transparent 1px, transparent 60px)",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 relative">
          <motion.p
            className="text-xs tracking-[0.3em] mb-4 font-cinzel"
            style={{ color: "var(--color-muted-gold)" }}
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          >
            PRACTICE SPECIALTIES
          </motion.p>
          <motion.h2
            className="font-playfair text-4xl md:text-5xl xl:text-6xl font-bold leading-tight max-w-3xl mb-6"
            style={{ color: "var(--color-ivory)" }}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Tax Advisory &amp; Compliance
          </motion.h2>
          <div className="w-16 h-0.5" style={{ backgroundColor: "var(--color-muted-gold)" }} />
        </div>
      </div>

      {/* Service Categories */}
      {CATEGORIES.map((cat, ci) => (
        <div
          key={cat.id}
          id={cat.id}
          className="w-full"
          style={{ backgroundColor: ci % 2 === 0 ? "var(--color-ivory)" : "var(--color-cream)" }}
        >
          {/* Category Header */}
          <div
            className="w-full py-10"
            style={{
              borderBottom: "1px solid rgba(197,168,128,0.3)",
              borderTop: ci > 0 ? "none" : "none",
            }}
          >
            <div className="max-w-7xl mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-xs tracking-[0.3em] font-cinzel mb-2"
                  style={{ color: "var(--color-muted-gold)" }}>
                  {cat.eyebrow}
                </p>
                <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-3"
                  style={{ color: "var(--color-dark-slate)" }}>
                  {cat.title}
                </h3>
                <p className="text-sm max-w-2xl leading-relaxed"
                  style={{ color: "var(--color-muted-grey)" }}>
                  {cat.intro}
                </p>
              </motion.div>
            </div>
          </div>

          {/* Service Cards Grid */}
          <div className="max-w-7xl mx-auto px-6 py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {cat.services.map((svc, si) => (
                <motion.div
                  key={svc.title}
                  className="p-5 rounded-sm flex flex-col gap-2 group transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    backgroundColor: "var(--color-white)",
                    border: "1px solid rgba(197,168,128,0.25)",
                    boxShadow: "0 1px 8px rgba(74,21,37,0.04)",
                  }}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: si * 0.04 }}
                  whileHover={{ boxShadow: "0 6px 24px rgba(74,21,37,0.1)" }}
                >
                  {/* Accent bar */}
                  <div
                    className="w-6 h-0.5 mb-1 transition-all duration-300 group-hover:w-10"
                    style={{ backgroundColor: "var(--color-muted-gold)" }}
                  />
                  <h4
                    className="font-playfair text-sm font-bold leading-snug"
                    style={{ color: "var(--color-dark-slate)" }}
                  >
                    {svc.title}
                  </h4>
                  <p
                    className="text-xs leading-relaxed flex-1"
                    style={{ color: "var(--color-muted-grey)" }}
                  >
                    {svc.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* Free Zone Matrix */}
      <div style={{ backgroundColor: "var(--color-dark-slate)" }} className="w-full py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <p className="text-xs tracking-[0.3em] font-cinzel mb-3"
              style={{ color: "var(--color-muted-gold)" }}>
              UAE CORPORATE TAX — LAW NO. 47 &amp; FREE ZONE MATRIX
            </p>
            <h3 className="font-playfair text-2xl md:text-3xl font-bold"
              style={{ color: "var(--color-ivory)" }}>
              Free Zone Corporate Tax Quick Reference
            </h3>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "var(--color-burgundy)" }}>
                  {["Free Zone / Entity", "Category", "CT Rate", "VAT Treatment", "ESR Required", "QFZP Eligible"].map(h => (
                    <th key={h} className="px-4 py-3 text-left font-cinzel text-xs tracking-wider"
                      style={{ color: "var(--color-muted-gold)", borderBottom: "2px solid rgba(197,168,128,0.3)" }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {FZ_MATRIX.map((row, i) => (
                  <motion.tr
                    key={row.zone}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    style={{
                      backgroundColor: i % 2 === 0 ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.06)",
                      borderBottom: "1px solid rgba(197,168,128,0.1)",
                    }}
                  >
                    <td className="px-4 py-3 font-medium font-playfair"
                      style={{ color: "var(--color-ivory)" }}>{row.zone}</td>
                    <td className="px-4 py-3 text-xs" style={{ color: "var(--color-muted-grey)" }}>{row.type}</td>
                    <td className="px-4 py-3 font-medium text-xs"
                      style={{ color: row.eligible ? "#6ee7b7" : "#fca5a5" }}>{row.ct}</td>
                    <td className="px-4 py-3 text-xs" style={{ color: "var(--color-muted-grey)" }}>{row.vat}</td>
                    <td className="px-4 py-3 text-xs" style={{ color: "var(--color-muted-grey)" }}>{row.esrReq}</td>
                    <td className="px-4 py-3">
                      <span className="text-xs px-2 py-0.5 rounded-full font-cinzel"
                        style={{
                          backgroundColor: row.eligible ? "rgba(110,231,183,0.12)" : "rgba(252,165,165,0.12)",
                          color: row.eligible ? "#6ee7b7" : "#fca5a5",
                        }}>
                        {row.eligible ? "YES" : "NO"}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
            <p className="text-xs mt-3" style={{ color: "var(--color-muted-grey)" }}>
              * 0% applies to qualifying income only; non-qualifying income taxed at 9%. Subject to individual free zone authority conditions.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Strip */}
      <div
        className="w-full py-16"
        style={{
          background: "linear-gradient(135deg, var(--color-burgundy) 0%, var(--color-secondary-burgundy) 60%, var(--color-deep-wine) 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs tracking-[0.3em] font-cinzel mb-3"
                style={{ color: "var(--color-muted-gold)" }}>
                NEED PROFESSIONAL TAX SUPPORT?
              </p>
              <h3 className="font-playfair text-2xl md:text-3xl font-bold leading-snug mb-4"
                style={{ color: "var(--color-ivory)" }}>
                Let Our Specialists Handle Your UAE Tax Obligations
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(250,247,242,0.7)" }}>
                From corporate tax registration to FTA audit defence — Crest Kite Advisory delivers
                precision, speed and strategic value across every engagement.
              </p>
            </motion.div>
            {/* Right */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col sm:flex-row gap-4 md:justify-end"
            >
              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-4 text-xs font-cinzel tracking-widest transition-all duration-200 hover:opacity-90"
                style={{
                  backgroundColor: "var(--color-muted-gold)",
                  color: "var(--color-dark-slate)",
                }}
              >
                SCHEDULE A STRATEGY SESSION →
              </button>
              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-4 text-xs font-cinzel tracking-widest border transition-all duration-200 hover:bg-white/10"
                style={{
                  borderColor: "rgba(197,168,128,0.5)",
                  color: "var(--color-ivory)",
                }}
              >
                CONTACT OUR TEAM
              </button>
            </motion.div>
          </div>
        </div>
      </div>

    </section>
  );
}
