"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

/* ─── SVG fallbacks for logos without supplied images ─── */

/* GS IT — no image provided */
const GSITLogo = () => (
  <svg viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="200" height="80" fill="#fff"/>
    {/* L-bracket mark */}
    <path d="M18 18 L18 62 L38 62" fill="none" stroke="#d63384" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
    <text x="48" y="52" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="30" fill="#d63384">GS</text>
    <text x="112" y="52" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="30" fill="#1a1a1a">IT</text>
    <text x="48" y="68" fontFamily="Arial, sans-serif" fontSize="9" fill="#888" letterSpacing="0.5">Complete IT Solution</text>
  </svg>
);

/* FreshWay — low-res raster → clean SVG */
const FreshwayLogo = () => (
  <svg viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="200" height="80" fill="#0d1117"/>
    {/* Clover / 4-leaf mark */}
    <circle cx="22" cy="34" r="7" fill="#aadd00"/>
    <circle cx="34" cy="34" r="7" fill="#aadd00"/>
    <circle cx="22" cy="46" r="7" fill="#aadd00"/>
    <circle cx="34" cy="46" r="7" fill="#aadd00"/>
    <circle cx="28" cy="40" r="5" fill="#0d1117"/>
    {/* FRESH bold yellow-green, WAY slightly smaller */}
    <text x="50" y="46" fontFamily="Arial Black, Impact, sans-serif" fontWeight="900" fontSize="24" fill="#aadd00" letterSpacing="1">FRESH</text>
    <text x="130" y="46" fontFamily="Arial Black, Impact, sans-serif" fontWeight="900" fontSize="24" fill="#fff" letterSpacing="1">WAY</text>
    <text x="50" y="62" fontFamily="Arial, sans-serif" fontSize="8" fill="#555" letterSpacing="2">FRESH FRUIT LLC</text>
  </svg>
);

/* KP Group — 3-D mock-up raster → clean flat SVG */
const KPGroupLogo = () => (
  <svg viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="200" height="80" fill="#1c2333"/>
    {/* Double-ring emblem */}
    <circle cx="30" cy="40" r="22" fill="none" stroke="#8899bb" strokeWidth="2"/>
    <circle cx="30" cy="40" r="16" fill="none" stroke="#8899bb" strokeWidth="1.2"/>
    <text x="30" y="45" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="13" fill="#c8d4e8"
      textAnchor="middle" letterSpacing="0.5">KP</text>
    {/* Text block */}
    <text x="68" y="36" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="22" fill="#c8d4e8" letterSpacing="1">KP GROUP</text>
    <line x1="68" y1="44" x2="192" y2="44" stroke="#5566aa" strokeWidth="0.8"/>
    <text x="130" y="58" fontFamily="Arial, sans-serif" fontWeight="300" fontSize="9" fill="#8899bb"
      textAnchor="middle" letterSpacing="3">— INTERNATIONAL —</text>
  </svg>
);

/* ─── Client list ─── */
/* Card bg: neutral light-gray for white-bg logos so they're framed cleanly.
   Coloured bg only where the logo itself bleeds to its edges. */
type ClientEntry =
  | { name: string; type: "image"; src: string; bg: string; zoom?: number }
  | { name: string; type: "svg";   Logo: () => React.ReactElement; bg: string };

const clients: ClientEntry[] = [
  { name: "MRC Shipping & Logistics",  type: "image", src: "/logos/mrc.png",      bg: "#ffffff", zoom: 1.2 },
  { name: "MXPRESS",                   type: "image", src: "/logos/mxpress.png",   bg: "#ffffff", zoom: 1.6 },
  { name: "alfapack",                  type: "image", src: "/logos/alfapack.png",  bg: "#ffffff", zoom: 0.7 },
  { name: "r8ink",                     type: "image", src: "/logos/r8ink.png",     bg: "#1a1a1a", zoom: 0.65 },
  { name: "TAJVI Gold & Diamonds",     type: "image", src: "/logos/tajvi.png",     bg: "#1b4a42", zoom: 1.1 },
  { name: "HWGAS Happy Way Gas",       type: "image", src: "/logos/hwgas.png",     bg: "#ffffff", zoom: 1.3 },
  { name: "Alpha Art Real Estate",     type: "image", src: "/logos/alphaart.png",  bg: "#000000", zoom: 1.5 },
  { name: "Shiloh Travel",             type: "image", src: "/logos/shiloh.png",    bg: "#c8102e", zoom: 1.1 },
  { name: "M FIT",                     type: "image", src: "/logos/mfit.png",      bg: "#ffffff", zoom: 1.6 },
  { name: "GS IT",                     type: "image", src: "/logos/gsit.png",      bg: "#ffffff", zoom: 1.5 },
  { name: "Promise Gold & Diamonds",   type: "image", src: "/logos/promise.png",   bg: "#ffffff", zoom: 0.7 },
  { name: "Freshway",                  type: "svg",   Logo: FreshwayLogo,          bg: "#0d1117" },
  { name: "KP Group International",    type: "svg",   Logo: KPGroupLogo,           bg: "#1c2333" },
];

export default function Clients() {
  return (
    <section
      id="clients"
      className="py-20"
      style={{ background: "var(--color-cream)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p
            className="font-cinzel text-xs tracking-widest uppercase mb-4"
            style={{ color: "var(--color-muted-gold)" }}
          >
            OUR CLIENTS
          </p>
          <h2
            className="font-playfair text-4xl md:text-5xl font-bold"
            style={{ color: "var(--color-dark-slate)" }}
          >
            Our Top Clients
          </h2>
          <div
            className="w-16 h-0.5 mx-auto mt-6"
            style={{ background: "var(--color-muted-gold)" }}
          />
        </motion.div>

        {/* Grid — 4 cols desktop · 3 tablet · 2 mobile · all same height */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative flex items-center justify-center overflow-hidden rounded-sm border transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              style={{
                background: client.bg,
                borderColor: "rgba(197,168,128,0.25)",
                height: "90px",
              }}
              title={client.name}
            >
              {client.type === "image" ? (
                <div
                  className="relative w-full h-full transition-transform duration-300 group-hover:scale-[1.04]"
                  style={{ transform: `scale(${client.zoom ?? 1})` }}
                >
                  <Image
                    src={client.src}
                    alt={client.name}
                    fill
                    sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 25vw"
                    className="object-contain"
                    quality={95}
                  />
                </div>
              ) : (
                <div className="w-full h-full transition-transform duration-300 group-hover:scale-[1.04]">
                  <client.Logo />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-10 text-sm italic"
          style={{ color: "var(--color-muted-grey)" }}
        >
          A selection of enterprises we have been privileged to serve across the UAE and beyond.
        </motion.p>
      </div>
    </section>
  );
}
