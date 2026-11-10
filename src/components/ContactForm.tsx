"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, CheckCircle, Building2, FileText } from "lucide-react";
import { COMPANY, ADVISORY_SCOPES } from "@/lib/data";

const schema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z
    .string()
    .email("Enter a valid corporate email")
    .refine(
      (v) =>
        !["gmail.com", "yahoo.com", "hotmail.com", "outlook.com"].some((d) =>
          v.toLowerCase().endsWith(d)
        ),
      "Please use a corporate email address"
    ),
  phone: z
    .string()
    .min(7, "Phone number is required")
    .regex(/^[+\d\s\-()]+$/, "Enter a valid international phone number"),
  entityName: z.string().min(2, "Entity name is required"),
  scope: z.string().min(1, "Please select an advisory scope"),
  briefing: z.string().min(10, "Please provide a brief description of your requirements"),
  consent: z.boolean().refine((v) => v, "You must acknowledge the privacy notice"),
});

type FormData = z.infer<typeof schema>;

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return (
    <p className="text-xs mt-1" style={{ color: "#c0392b" }}>
      {msg}
    </p>
  );
}

function inputStyle(hasError: boolean): React.CSSProperties {
  return {
    width: "100%",
    padding: "10px 12px",
    fontSize: "0.875rem",
    border: `1px solid ${hasError ? "#c0392b" : "rgba(197,168,128,0.4)"}`,
    borderRadius: 2,
    outline: "none",
    backgroundColor: "var(--color-ivory)",
    color: "var(--color-dark-slate)",
    fontFamily: "var(--font-inter)",
    transition: "border-color 0.2s",
  };
}

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
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
      className="w-full py-24"
      style={{ backgroundColor: "var(--color-ivory)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="flex flex-col lg:flex-row rounded-sm overflow-hidden"
          style={{ boxShadow: "0 8px 60px rgba(74,21,37,0.12)" }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Left panel */}
          <div
            className="flex-shrink-0 lg:w-80 xl:w-96 p-10 flex flex-col justify-between gap-10"
            style={{ backgroundColor: "var(--color-burgundy)" }}
          >
            <div>
              <p
                className="text-xs tracking-[0.3em] mb-5 font-cinzel"
                style={{ color: "var(--color-muted-gold)" }}
              >
                EXECUTIVE INQUIRIES
              </p>
              <h2
                className="font-playfair text-2xl xl:text-3xl font-bold leading-tight mb-6"
                style={{ color: "var(--color-ivory)" }}
              >
                Establishing a Trusted Financial Partnership.
              </h2>
              <p
                className="text-sm leading-relaxed mb-8"
                style={{ color: "rgba(250,247,242,0.75)" }}
              >
                Connect with our senior advisory team to discuss your organisation&apos;s
                financial, tax and regulatory requirements.
              </p>
              <ul className="space-y-3">
                {[
                  "Corporate Advisory",
                  "Tax & Compliance",
                  "Audit & Assurance",
                  "Accounting & CFO Services",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm"
                    style={{ color: "rgba(250,247,242,0.85)" }}
                  >
                    <CheckCircle
                      size={14}
                      style={{ color: "var(--color-muted-gold)", flexShrink: 0 }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              {[
                { icon: Mail, text: COMPANY.email },
                { icon: Phone, text: COMPANY.phone },
                { icon: MapPin, text: COMPANY.addressFull },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-start gap-3 text-xs"
                  style={{ color: "rgba(250,247,242,0.75)" }}
                >
                  <Icon
                    size={12}
                    className="mt-0.5 shrink-0"
                    style={{ color: "var(--color-muted-gold)" }}
                  />
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* Right panel */}
          <div
            className="flex-1 p-10 xl:p-14"
            style={{ backgroundColor: "var(--color-white)" }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full gap-6 text-center py-20">
                <CheckCircle
                  size={48}
                  style={{ color: "var(--color-burgundy)" }}
                />
                <h3
                  className="font-playfair text-2xl font-bold"
                  style={{ color: "var(--color-dark-slate)" }}
                >
                  Inquiry Received
                </h3>
                <p
                  className="text-sm max-w-sm leading-relaxed"
                  style={{ color: "var(--color-muted-grey)" }}
                >
                  Thank you for reaching out. Our advisory team will review your inquiry
                  and respond within one business day.
                </p>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <h3
                    className="font-playfair text-2xl font-bold mb-2"
                    style={{ color: "var(--color-dark-slate)" }}
                  >
                    Schedule Priority Assessment
                  </h3>
                  <p
                    className="text-sm"
                    style={{ color: "var(--color-muted-grey)" }}
                  >
                    Please provide your corporate details and advisory requirements.
                    Our team will review your inquiry and coordinate the appropriate
                    next steps.
                  </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
                  {/* Row 1 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        className="block text-xs tracking-wider mb-1.5 font-cinzel"
                        style={{ color: "var(--color-muted-grey)" }}
                      >
                        FULL NAME <span style={{ color: "#c0392b" }}>*</span>
                      </label>
                      <input
                        {...register("fullName")}
                        placeholder="Your full name"
                        style={inputStyle(!!errors.fullName)}
                      />
                      <FieldError msg={errors.fullName?.message} />
                    </div>
                    <div>
                      <label
                        className="block text-xs tracking-wider mb-1.5 font-cinzel"
                        style={{ color: "var(--color-muted-grey)" }}
                      >
                        CORPORATE EMAIL <span style={{ color: "#c0392b" }}>*</span>
                      </label>
                      <input
                        {...register("email")}
                        type="email"
                        placeholder="name@company.com"
                        style={inputStyle(!!errors.email)}
                      />
                      <FieldError msg={errors.email?.message} />
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        className="block text-xs tracking-wider mb-1.5 font-cinzel"
                        style={{ color: "var(--color-muted-grey)" }}
                      >
                        PHONE NUMBER <span style={{ color: "#c0392b" }}>*</span>
                      </label>
                      <input
                        {...register("phone")}
                        placeholder="+971 50 000 0000"
                        style={inputStyle(!!errors.phone)}
                      />
                      <FieldError msg={errors.phone?.message} />
                    </div>
                    <div>
                      <label
                        className="block text-xs tracking-wider mb-1.5 font-cinzel"
                        style={{ color: "var(--color-muted-grey)" }}
                      >
                        CORPORATE / ENTITY NAME <span style={{ color: "#c0392b" }}>*</span>
                      </label>
                      <input
                        {...register("entityName")}
                        placeholder="Company name"
                        style={inputStyle(!!errors.entityName)}
                      />
                      <FieldError msg={errors.entityName?.message} />
                    </div>
                  </div>

                  {/* Row 3 */}
                  <div>
                    <label
                      className="block text-xs tracking-wider mb-1.5 font-cinzel"
                      style={{ color: "var(--color-muted-grey)" }}
                    >
                      PRIMARY ADVISORY SCOPE <span style={{ color: "#c0392b" }}>*</span>
                    </label>
                    <select
                      {...register("scope")}
                      style={{
                        ...inputStyle(!!errors.scope),
                        appearance: "none",
                        backgroundImage:
                          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%2377716D' strokeWidth='1.5' fill='none' strokeLinecap='round'/%3E%3C/svg%3E\")",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 12px center",
                        paddingRight: 36,
                      }}
                    >
                      <option value="">Select advisory scope</option>
                      {ADVISORY_SCOPES.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                    <FieldError msg={errors.scope?.message} />
                  </div>

                  {/* Row 4 */}
                  <div>
                    <label
                      className="block text-xs tracking-wider mb-1.5 font-cinzel"
                      style={{ color: "var(--color-muted-grey)" }}
                    >
                      ENGAGEMENT CONTEXT / BRIEFING <span style={{ color: "#c0392b" }}>*</span>
                    </label>
                    <textarea
                      {...register("briefing")}
                      rows={4}
                      placeholder="Briefly describe your requirements, timeline and any specific context that would help our team prepare for the consultation."
                      style={{ ...inputStyle(!!errors.briefing), resize: "vertical" }}
                    />
                    <FieldError msg={errors.briefing?.message} />
                  </div>

                  {/* Consent */}
                  <div className="flex items-start gap-3">
                    <input
                      {...register("consent")}
                      type="checkbox"
                      id="consent"
                      className="mt-0.5 w-4 h-4 shrink-0"
                      style={{ accentColor: "var(--color-burgundy)" }}
                    />
                    <label
                      htmlFor="consent"
                      className="text-xs leading-relaxed cursor-pointer"
                      style={{ color: "var(--color-muted-grey)" }}
                    >
                      I acknowledge the privacy notice and understand that my information
                      will be handled confidentially for the purpose of responding to this
                      inquiry.
                    </label>
                  </div>
                  <FieldError msg={errors.consent?.message} />

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 text-sm font-medium tracking-widest font-cinzel transition-colors disabled:opacity-60"
                    style={{
                      backgroundColor: loading
                        ? "var(--color-secondary-burgundy)"
                        : "var(--color-burgundy)",
                      color: "var(--color-ivory)",
                    }}
                    onMouseEnter={(e) => {
                      if (!loading)
                        e.currentTarget.style.backgroundColor =
                          "var(--color-secondary-burgundy)";
                    }}
                    onMouseLeave={(e) => {
                      if (!loading)
                        e.currentTarget.style.backgroundColor = "var(--color-burgundy)";
                    }}
                  >
                    {loading
                      ? "PROCESSING…"
                      : "CONFIRM REQUEST FOR CONSULTATION →"}
                  </button>
                </form>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
