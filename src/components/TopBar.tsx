"use client";

import { useState, useEffect } from "react";
import { COMPANY } from "@/lib/data";

export default function TopBar() {
  const [timeStr, setTimeStr] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const hour = now.getHours();
      const isOpen = hour >= 9 && hour < 18;
      const formatted = now.toLocaleTimeString("en-AE", {
        timeZone: "Asia/Dubai",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
      setTimeStr(`${isOpen ? "Open" : "Closed"} · ${formatted} GST`);
    };
    update();
    const id = setInterval(update, 30000);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="w-full text-xs py-2 px-4"
      style={{ backgroundColor: "var(--color-burgundy)", color: "var(--color-muted-gold)" }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <span className="whitespace-nowrap" style={{ color: "var(--color-ivory)" }}>
          Office: {COMPANY.address}
        </span>
        <span className="hidden md:flex items-center gap-3 tracking-wide font-cinzel">
          <span>UAE Corporate Tax Registered</span>
          <span style={{ color: "var(--color-muted-gold)" }}>|</span>
          <span>VAT Registered</span>
          <span style={{ color: "var(--color-muted-gold)" }}>|</span>
          <span>IFRS Compliant</span>
        </span>
        <span className="whitespace-nowrap" style={{ color: "var(--color-ivory)" }}>
          {timeStr}
        </span>
      </div>
    </div>
  );
}
