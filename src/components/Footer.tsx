import { Mail, Phone, MapPin } from "lucide-react";
import { COMPANY } from "@/lib/data";

function KiteLogo() {
  return (
    <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
      <polygon points="18,2 32,18 18,30 4,18" fill="var(--color-muted-gold)" opacity="0.85" />
      <polygon points="18,8 26,18 18,26 10,18" fill="none" stroke="var(--color-burgundy)" strokeWidth="1" />
      <circle cx="18" cy="18" r="2" fill="var(--color-ivory)" opacity="0.7" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0d0408" }}>
      {/* Gold top border */}
      <div className="w-full h-px" style={{ background: "linear-gradient(90deg, transparent 0%, rgba(197,168,128,0.6) 30%, rgba(197,168,128,0.6) 70%, transparent 100%)" }} />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mb-14">

          {/* Col 1 — Brand */}
          <div className="xl:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <KiteLogo />
              <div>
                <div className="text-sm font-bold tracking-[0.2em] font-cinzel"
                  style={{ color: "var(--color-muted-gold)" }}>
                  CREST KITE
                </div>
                <div className="text-[9px] tracking-wider font-cinzel"
                  style={{ color: "rgba(250,247,242,0.45)" }}>
                  ADVISORY &amp; ASSURANCE LLC
                </div>
              </div>
            </div>
            <p className="text-xs leading-relaxed mb-6"
              style={{ color: "rgba(250,247,242,0.55)" }}>
              Strategic financial advisory, tax, audit and accounting solutions
              supporting business confidence and sustainable growth across the UAE,
              GCC and international markets.
            </p>
            <div className="flex gap-3">
              {["in", "tw", "wb"].map((s) => (
                <div key={s}
                  className="w-7 h-7 flex items-center justify-center rounded-sm text-xs font-bold font-cinzel cursor-pointer hover:opacity-80 transition-opacity"
                  style={{
                    border: "1px solid rgba(197,168,128,0.25)",
                    color: "var(--color-muted-gold)",
                  }}>
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Col 2 — Advisory Practices */}
          <div>
            <h4 className="text-xs tracking-[0.25em] font-cinzel mb-6 pb-3"
              style={{
                color: "var(--color-muted-gold)",
                borderBottom: "1px solid rgba(197,168,128,0.15)",
              }}>
              ADVISORY PRACTICES
            </h4>
            <ul className="space-y-3">
              {[
                "Tax Advisory & Compliance",
                "Corporate Tax",
                "Transfer Pricing",
                "Statutory Audit",
                "Accounting & Bookkeeping",
                "Virtual CFO",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span style={{ color: "rgba(197,168,128,0.3)", fontSize: 7 }}>◆</span>
                  <span className="text-xs cursor-pointer hover:opacity-90 transition-opacity"
                    style={{ color: "rgba(250,247,242,0.6)" }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Regional HQ */}
          <div>
            <h4 className="text-xs tracking-[0.25em] font-cinzel mb-6 pb-3"
              style={{
                color: "var(--color-muted-gold)",
                borderBottom: "1px solid rgba(197,168,128,0.15)",
              }}>
              REGIONAL HEADQUARTERS
            </h4>
            <ul className="space-y-3">
              {[
                { city: "Dubai", country: "UAE — Primary Office" },
                { city: "Abu Dhabi", country: "UAE" },
                { city: "Riyadh", country: "Saudi Arabia" },
                { city: "London", country: "United Kingdom" },
                { city: "Singapore", country: "Singapore" },
              ].map((loc) => (
                <li key={loc.city} className="flex flex-col">
                  <span className="text-xs font-medium" style={{ color: "rgba(250,247,242,0.75)" }}>
                    {loc.city}
                  </span>
                  <span className="text-xs" style={{ color: "rgba(250,247,242,0.4)" }}>
                    {loc.country}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h4 className="text-xs tracking-[0.25em] font-cinzel mb-6 pb-3"
              style={{
                color: "var(--color-muted-gold)",
                borderBottom: "1px solid rgba(197,168,128,0.15)",
              }}>
              CONTACT US
            </h4>
            <div className="space-y-4 mb-6">
              {[
                { Icon: Mail, text: COMPANY.email },
                { Icon: Phone, text: COMPANY.phone },
                { Icon: MapPin, text: COMPANY.addressFull },
              ].map(({ Icon, text }) => (
                <div key={text} className="flex items-start gap-3 text-xs"
                  style={{ color: "rgba(250,247,242,0.6)" }}>
                  <Icon size={12} className="mt-0.5 shrink-0" style={{ color: "var(--color-muted-gold)" }} />
                  {text}
                </div>
              ))}
            </div>
            <div className="p-3 rounded-sm text-xs leading-relaxed"
              style={{
                color: "rgba(250,247,242,0.4)",
                border: "1px solid rgba(197,168,128,0.12)",
                backgroundColor: "rgba(197,168,128,0.03)",
              }}>
              Registered professional services firm operating in compliance with UAE regulatory requirements.
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(197,168,128,0.12)" }}>
          <p className="text-xs" style={{ color: "rgba(250,247,242,0.35)" }}>
            © 2026 {COMPANY.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-5 justify-center">
            {["Privacy Policy", "Cookie Policy", "Terms of Engagement", "Disclaimer"].map((link) => (
              <span key={link}
                className="text-xs cursor-pointer hover:opacity-80 transition-opacity"
                style={{ color: "rgba(250,247,242,0.4)" }}>
                {link}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
