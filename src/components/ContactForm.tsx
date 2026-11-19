"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, CheckCircle } from "lucide-react";
import { COMPANY, ADVISORY_SCOPES } from "@/lib/data";

const schema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z
    .string()
    .email("Enter a valid corporate email")
    .refine(
      (v) => !["gmail.com", "yahoo.com", "hotmail.com", "outlook.com"].some((d) => v.toLowerCase().endsWith(d)),
      "Please use a corporate email address"
    ),
  phone: z.string().min(7, "Phone number is required").regex(/^[+\d\s\-()]+$/, "Enter a valid phone number"),
  entityName: z.string().min(2, "Entity name is required"),
  scope: z.string().min(1, "Please select an advisory scope"),
  briefing: z.string().min(10, "Please provide a brief description"),
  consent: z.boolean().refine((v) => v, "You must acknowledge the privacy notice"),
});

type FormData = z.infer<typeof schema>;

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return <p className="text-xs mt-1" style={{ color: "#f87171" }}>{msg}</p>;
}

function inputCls(err: boolean): React.CSSProperties {
  return {
    width: "100%",
    padding: "11px 14px",
    fontSize: "0.875rem",
    border: `1px solid ${err ? "#f87171" : "rgba(197,168,128,0.25)"}`,
    borderRadius: 2,
    outline: "none",
    backgroundColor: "rgba(250,247,242,0.04)",
    color: "var(--color-ivory)",
    fontFamily: "var(--font-inter)",
    transition: "border-color 0.2s",
  };
}

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (_data: FormData) => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="w-full relative overflow-hidden"
      style={{
        background: "linear-gradient(145deg, #0d0408 0%, #1a0810 30%, #2a0a14 60%, #4A1525 100%)",
      }}
    >
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: "repeating-linear-gradient(45deg, rgba(197,168,128,0.6) 0px, rgba(197,168,128,0.6) 1px, transparent 1px, transparent 55px)",
        }} />

      <div className="max-w-7xl mx-auto px-6 py-24 relative">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-14 items-start">

          {/* ── Left ── */}
          <motion.div
            className="lg:col-span-2 flex flex-col gap-8"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <p className="text-xs tracking-[0.3em] mb-4 font-cinzel"
                style={{ color: "var(--color-muted-gold)" }}>
                EXECUTIVE INQUIRIES
              </p>
              <h2 className="font-playfair text-4xl xl:text-5xl font-bold leading-tight mb-6"
                style={{ color: "var(--color-ivory)" }}>
                Establishing a Trusted{" "}
                <span style={{ color: "var(--color-muted-gold)" }}>Financial Partnership.</span>
              </h2>
              <div className="w-12 h-0.5 mb-6" style={{ backgroundColor: "var(--color-muted-gold)" }} />
              <p className="text-sm leading-relaxed" style={{ color: "rgba(250,247,242,0.7)" }}>
                Connect with our senior advisory team to discuss your organisation&apos;s financial,
                tax and regulatory requirements. We respond within one business day.
              </p>
            </div>

            {/* Services list */}
            <div className="space-y-3">
              {["Corporate Tax Advisory", "VAT & Excise Compliance", "Audit & Assurance", "Transfer Pricing", "Accounting & CFO Services", "International Tax Advisory"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "var(--color-muted-gold)" }} />
                  <span className="text-sm" style={{ color: "rgba(250,247,242,0.8)" }}>{item}</span>
                </div>
              ))}
            </div>

            {/* Contact info */}
            <div className="p-6 rounded-sm space-y-4"
              style={{ border: "1px solid rgba(197,168,128,0.2)", backgroundColor: "rgba(197,168,128,0.05)" }}>
              {[
                { Icon: Mail, text: COMPANY.email },
                { Icon: Phone, text: COMPANY.phone },
                { Icon: MapPin, text: COMPANY.addressFull },
              ].map(({ Icon, text }) => (
                <div key={text} className="flex items-start gap-3 text-xs"
                  style={{ color: "rgba(250,247,242,0.7)" }}>
                  <Icon size={13} className="mt-0.5 shrink-0" style={{ color: "var(--color-muted-gold)" }} />
                  {text}
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Right: Form ── */}
          <motion.div
            className="lg:col-span-3 p-8 xl:p-10 rounded-sm"
            style={{
              backgroundColor: "rgba(250,247,242,0.04)",
              border: "1px solid rgba(197,168,128,0.2)",
              backdropFilter: "blur(8px)",
            }}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full gap-6 text-center py-20">
                <CheckCircle size={52} style={{ color: "var(--color-muted-gold)" }} />
                <h3 className="font-playfair text-2xl font-bold" style={{ color: "var(--color-ivory)" }}>
                  Inquiry Received
                </h3>
                <p className="text-sm max-w-sm leading-relaxed" style={{ color: "rgba(250,247,242,0.65)" }}>
                  Thank you for reaching out. Our advisory team will review your inquiry
                  and respond within one business day.
                </p>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <h3 className="font-playfair text-2xl font-bold mb-2" style={{ color: "var(--color-ivory)" }}>
                    Schedule Priority Assessment
                  </h3>
                  <p className="text-sm" style={{ color: "rgba(250,247,242,0.55)" }}>
                    Please provide your corporate details and advisory requirements.
                  </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs tracking-wider mb-1.5 font-cinzel"
                        style={{ color: "rgba(197,168,128,0.9)" }}>
                        FULL NAME <span style={{ color: "#f87171" }}>*</span>
                      </label>
                      <input {...register("fullName")} placeholder="Your full name" style={inputCls(!!errors.fullName)} />
                      <FieldError msg={errors.fullName?.message} />
                    </div>
                    <div>
                      <label className="block text-xs tracking-wider mb-1.5 font-cinzel"
                        style={{ color: "rgba(197,168,128,0.9)" }}>
                        CORPORATE EMAIL <span style={{ color: "#f87171" }}>*</span>
                      </label>
                      <input {...register("email")} type="email" placeholder="name@company.com" style={inputCls(!!errors.email)} />
                      <FieldError msg={errors.email?.message} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs tracking-wider mb-1.5 font-cinzel"
                        style={{ color: "rgba(197,168,128,0.9)" }}>
                        PHONE NUMBER <span style={{ color: "#f87171" }}>*</span>
                      </label>
                      <input {...register("phone")} placeholder="+971 50 000 0000" style={inputCls(!!errors.phone)} />
                      <FieldError msg={errors.phone?.message} />
                    </div>
                    <div>
                      <label className="block text-xs tracking-wider mb-1.5 font-cinzel"
                        style={{ color: "rgba(197,168,128,0.9)" }}>
                        ENTITY NAME <span style={{ color: "#f87171" }}>*</span>
                      </label>
                      <input {...register("entityName")} placeholder="Company name" style={inputCls(!!errors.entityName)} />
                      <FieldError msg={errors.entityName?.message} />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs tracking-wider mb-1.5 font-cinzel"
                      style={{ color: "rgba(197,168,128,0.9)" }}>
                      PRIMARY ADVISORY SCOPE <span style={{ color: "#f87171" }}>*</span>
                    </label>
                    <select {...register("scope")} style={{
                      ...inputCls(!!errors.scope),
                      appearance: "none",
                      backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23C5A880' strokeWidth='1.5' fill='none' strokeLinecap='round'/%3E%3C/svg%3E\")",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 12px center",
                      paddingRight: 36,
                    }}>
                      <option value="" style={{ backgroundColor: "#1a0810" }}>Select advisory scope</option>
                      {ADVISORY_SCOPES.map((s) => (
                        <option key={s} value={s} style={{ backgroundColor: "#1a0810" }}>{s}</option>
                      ))}
                    </select>
                    <FieldError msg={errors.scope?.message} />
                  </div>

                  <div>
                    <label className="block text-xs tracking-wider mb-1.5 font-cinzel"
                      style={{ color: "rgba(197,168,128,0.9)" }}>
                      ENGAGEMENT CONTEXT / BRIEFING <span style={{ color: "#f87171" }}>*</span>
                    </label>
                    <textarea {...register("briefing")} rows={4}
                      placeholder="Briefly describe your requirements, timeline and any specific context that would help our team prepare for the consultation."
                      style={{ ...inputCls(!!errors.briefing), resize: "vertical" }} />
                    <FieldError msg={errors.briefing?.message} />
                  </div>

                  <div className="flex items-start gap-3">
                    <input {...register("consent")} type="checkbox" id="consent"
                      className="mt-0.5 w-4 h-4 shrink-0"
                      style={{ accentColor: "var(--color-muted-gold)" }} />
                    <label htmlFor="consent" className="text-xs leading-relaxed cursor-pointer"
                      style={{ color: "rgba(250,247,242,0.55)" }}>
                      I acknowledge the privacy notice and understand that my information will be
                      handled confidentially for the purpose of responding to this inquiry.
                    </label>
                  </div>
                  <FieldError msg={errors.consent?.message} />

                  <button type="submit" disabled={loading}
                    className="w-full py-4 text-sm font-medium tracking-widest font-cinzel transition-all disabled:opacity-60"
                    style={{
                      backgroundColor: loading ? "var(--color-dark-gold)" : "var(--color-muted-gold)",
                      color: "var(--color-dark-slate)",
                    }}
                    onMouseEnter={(e) => { if (!loading) e.currentTarget.style.backgroundColor = "var(--color-dark-gold)"; }}
                    onMouseLeave={(e) => { if (!loading) e.currentTarget.style.backgroundColor = "var(--color-muted-gold)"; }}
                  >
                    {loading ? "PROCESSING…" : "CONFIRM REQUEST FOR CONSULTATION →"}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
