"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { NAV_LINKS, COMPANY } from "@/lib/data";

function KiteLogo() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon
        points="18,2 32,18 18,30 4,18"
        fill="var(--color-burgundy)"
        stroke="var(--color-muted-gold)"
        strokeWidth="1"
      />
      <polygon
        points="18,6 28,18 18,27 8,18"
        fill="none"
        stroke="var(--color-ivory)"
        strokeWidth="0.5"
        opacity="0.4"
      />
      <circle cx="18" cy="18" r="2" fill="var(--color-muted-gold)" />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className="sticky top-0 z-50 w-full transition-shadow duration-300"
        style={{
          backgroundColor: "var(--color-ivory)",
          borderBottom: `1px solid var(--color-muted-gold)`,
          boxShadow: scrolled ? "0 2px 20px rgba(74,21,37,0.08)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
          {/* Logo */}
          <button
            onClick={() => handleNav("#home")}
            className="flex items-center gap-3 shrink-0"
          >
            <KiteLogo />
            <div className="text-left">
              <div
                className="text-sm font-bold tracking-widest font-cinzel leading-none"
                style={{ color: "var(--color-burgundy)" }}
              >
                CREST KITE
              </div>
              <div
                className="text-[9px] tracking-wider font-cinzel leading-none mt-0.5"
                style={{ color: "var(--color-muted-grey)" }}
              >
                ADVISORY & ASSURANCE LLC
              </div>
            </div>
          </button>

          {/* Centre nav */}
          <div className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.href)}
                className="text-xs tracking-wide font-medium transition-colors hover:opacity-70 whitespace-nowrap"
                style={{ color: "var(--color-dark-slate)", fontFamily: "var(--font-inter)" }}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <a
              href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-1.5 text-xs"
              style={{ color: "var(--color-muted-grey)" }}
            >
              <Phone size={12} />
              {COMPANY.phone}
            </a>
            <span
              className="text-xs font-medium border px-2 py-1 rounded-sm cursor-pointer"
              style={{ borderColor: "var(--color-muted-gold)", color: "var(--color-muted-grey)" }}
            >
              EN
            </span>
            <button
              onClick={() => handleNav("#contact")}
              className="text-xs font-medium tracking-widest px-4 py-2 rounded-sm font-cinzel transition-colors"
              style={{
                backgroundColor: "var(--color-burgundy)",
                color: "var(--color-ivory)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "var(--color-secondary-burgundy)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "var(--color-burgundy)")
              }
            >
              BOOK CONSULTATION
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{ color: "var(--color-burgundy)" }}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col pt-24 px-8 gap-6 lg:hidden"
          style={{ backgroundColor: "var(--color-ivory)" }}
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.href)}
              className="text-left text-lg font-medium border-b pb-3"
              style={{
                color: "var(--color-dark-slate)",
                borderColor: "var(--color-cream)",
              }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav("#contact")}
            className="mt-4 text-sm font-medium tracking-widest px-6 py-3 rounded-sm font-cinzel"
            style={{
              backgroundColor: "var(--color-burgundy)",
              color: "var(--color-ivory)",
            }}
          >
            BOOK CONSULTATION
          </button>
        </div>
      )}
    </>
  );
}
