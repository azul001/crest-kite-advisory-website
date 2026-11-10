import { Mail, Phone, MapPin } from "lucide-react";
import { COMPANY } from "@/lib/data";

function KiteLogoSmall() {
  return (
    <svg width="28" height="28" viewBox="0 0 36 36" fill="none">
      <polygon
        points="18,2 32,18 18,30 4,18"
        fill="var(--color-muted-gold)"
        opacity="0.8"
      />
      <circle cx="18" cy="18" r="2" fill="var(--color-ivory)" opacity="0.6" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--color-burgundy)" }}>
      <div
        className="max-w-7xl mx-auto px-6 pt-16 pb-8"
        style={{ borderTop: "1px solid rgba(197,168,128,0.15)" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mb-12">
          {/* Col 1 */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <KiteLogoSmall />
              <div>
                <div
                  className="text-sm font-bold tracking-widest font-cinzel"
                  style={{ color: "var(--color-muted-gold)" }}
                >
                  CREST KITE
                </div>
                <div
                  className="text-[9px] tracking-wider font-cinzel"
                  style={{ color: "rgba(250,247,242,0.5)" }}
                >
                  ADVISORY & ASSURANCE LLC
                </div>
              </div>
            </div>
            <p
              className="text-xs leading-relaxed mb-5"
              style={{ color: "rgba(250,247,242,0.65)" }}
            >
              Strategic financial advisory, tax, audit and accounting solutions
              supporting business confidence and sustainable growth across the UAE,
              GCC and international markets.
            </p>
          </div>

          {/* Col 2 */}
          <div>
            <h4
              className="text-xs tracking-widest font-cinzel mb-5"
              style={{ color: "var(--color-muted-gold)" }}
            >
              ADVISORY PRACTICES
            </h4>
            <ul className="space-y-2.5">
              {[
                "Tax Advisory & Compliance",
                "Corporate Tax",
                "Transfer Pricing",
                "Statutory Audit",
                "Accounting & Bookkeeping",
                "Virtual CFO",
              ].map((item) => (
                <li key={item}>
                  <span
                    className="text-xs cursor-pointer hover:opacity-100 transition-opacity"
                    style={{ color: "rgba(250,247,242,0.65)" }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4
              className="text-xs tracking-widest font-cinzel mb-5"
              style={{ color: "var(--color-muted-gold)" }}
            >
              REGIONAL HEADQUARTERS
            </h4>
            <ul className="space-y-2.5">
              {[
                "Dubai, UAE",
                "Abu Dhabi, UAE",
                "Riyadh, Saudi Arabia",
                "London, United Kingdom",
                "Singapore",
              ].map((item) => (
                <li key={item}>
                  <span
                    className="text-xs"
                    style={{ color: "rgba(250,247,242,0.65)" }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4
              className="text-xs tracking-widest font-cinzel mb-5"
              style={{ color: "var(--color-muted-gold)" }}
            >
              CREDENTIALS & CONTACT
            </h4>
            <div className="space-y-3 mb-5">
              {[
                { icon: Mail, text: COMPANY.email },
                { icon: Phone, text: COMPANY.phone },
                { icon: MapPin, text: COMPANY.addressFull },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-start gap-2.5 text-xs"
                  style={{ color: "rgba(250,247,242,0.65)" }}
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
            <div
              className="text-xs leading-relaxed p-3 rounded-sm"
              style={{
                color: "rgba(250,247,242,0.5)",
                border: "1px solid rgba(197,168,128,0.15)",
              }}
            >
              Registered professional services firm operating in compliance with UAE
              regulatory requirements. Contact us to verify specific registrations
              and licences.
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(197,168,128,0.15)" }}
        >
          <p
            className="text-xs"
            style={{ color: "rgba(250,247,242,0.45)" }}
          >
            © 2024 {COMPANY.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            {["Privacy Policy", "Cookie Policy", "Terms of Engagement", "Disclaimer"].map(
              (link) => (
                <span
                  key={link}
                  className="text-xs cursor-pointer hover:opacity-100 transition-opacity"
                  style={{ color: "rgba(250,247,242,0.45)" }}
                >
                  {link}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
