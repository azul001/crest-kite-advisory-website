"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { COMPANY } from "@/lib/data";

export default function Leadership() {
  return (
    <section
      id="leadership"
      className="w-full py-24"
      style={{ backgroundColor: "var(--color-cream)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Panel */}
          <div
            className="p-10 md:p-14 rounded-sm"
            style={{
              backgroundColor: "var(--color-white)",
              border: "1px solid rgba(197,168,128,0.3)",
              boxShadow: "0 4px 40px rgba(74,21,37,0.06)",
            }}
          >
            {/* Eyebrow */}
            <p
              className="text-xs tracking-[0.3em] mb-8 font-cinzel text-center"
              style={{ color: "var(--color-muted-gold)" }}
            >
              SENIOR LEADERSHIP PERSPECTIVE
            </p>

            <div className="flex flex-col md:flex-row gap-10 items-start">
              {/* Avatar */}
              <div className="flex flex-col items-center md:items-start gap-4 shrink-0">
                <div
                  className="w-28 h-28 rounded-full flex items-center justify-center overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--color-burgundy) 0%, var(--color-secondary-burgundy) 60%, var(--color-muted-gold) 100%)",
                  }}
                >
                  <span
                    className="font-playfair text-3xl font-bold"
                    style={{ color: "var(--color-ivory)" }}
                  >
                    AP
                  </span>
                </div>
                <div className="text-center md:text-left">
                  <h3
                    className="font-playfair text-xl font-bold leading-tight"
                    style={{ color: "var(--color-dark-slate)" }}
                  >
                    Arun Podimannil
                  </h3>
                  <p
                    className="text-xs tracking-wide mt-1 font-cinzel"
                    style={{ color: "var(--color-muted-gold)" }}
                  >
                    FOUNDER &amp; CEO
                  </p>
                </div>
              </div>

              {/* Bio + Quote */}
              <div className="flex-1">
                <p
                  className="text-base leading-relaxed mb-8"
                  style={{ color: "var(--color-muted-grey)" }}
                >
                  Versatile, dynamic, enthusiastic professional Chartered Accountant
                  with 10 years of experience and knowledge application in all aspects
                  of auditing, accounts, finance VAT and Corporate Tax in UAE and India.
                  Strong capability to work in a multicultural environment, with the
                  ability to work independently as well as lead teams to achieve desired
                  results, meet client deadlines and deliver on organisational goals.
                </p>

                {/* Quote */}
                <div
                  className="pl-5 py-1 mb-8"
                  style={{ borderLeft: "3px solid var(--color-burgundy)" }}
                >
                  <p
                    className="font-playfair italic text-lg leading-relaxed"
                    style={{ color: "var(--color-dark-slate)" }}
                  >
                    &ldquo;In an era where regulatory frameworks evolve at unprecedented speed,
                    authentic financial leadership requires more than balance-sheet
                    compliance — it demands disciplined precision, ethical transparency,
                    and resolute strategic trust.&rdquo;
                  </p>
                  <p
                    className="text-xs mt-3 font-cinzel tracking-wider"
                    style={{ color: "var(--color-muted-grey)" }}
                  >
                    — ARUN PODIMANNIL, FOUNDER &amp; CEO
                  </p>
                </div>

                {/* Contact */}
                <div className="flex flex-wrap gap-5">
                  {[
                    { icon: Mail, text: COMPANY.email },
                    { icon: Phone, text: COMPANY.phone },
                    { icon: MapPin, text: COMPANY.address },
                  ].map(({ icon: Icon, text }) => (
                    <div
                      key={text}
                      className="flex items-center gap-2 text-xs"
                      style={{ color: "var(--color-muted-grey)" }}
                    >
                      <Icon size={12} style={{ color: "var(--color-muted-gold)" }} />
                      {text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
