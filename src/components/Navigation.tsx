"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Главная" },
  { href: "/calendar", label: "Календарь ярмарок" },
  { href: "/conditions", label: "Условия участия" },
  { href: "/contacts", label: "Контакты" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      style={{
        backgroundColor: "white",
        boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)",
        position: "relative",
        zIndex: 50
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1rem 0"
          }}
        >
          <div style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#1f2937" }}>
            Сайт о Ярмарках
          </div>

          <button
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
            className="burger-button"
            type="button"
            style={{
              display: "none",
              cursor: "pointer",
              padding: "10px",
              background: "none",
              border: "none"
            }}
          >
            <div style={{ width: "25px", height: "3px", backgroundColor: "#1f2937", margin: "4px 0" }} />
            <div style={{ width: "25px", height: "3px", backgroundColor: "#1f2937", margin: "4px 0" }} />
            <div style={{ width: "25px", height: "3px", backgroundColor: "#1f2937", margin: "4px 0" }} />
          </button>

          <div className="desktop-menu" style={{ display: "flex", gap: "1.5rem" }}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  color: pathname === item.href ? "#2563eb" : "#4b5563",
                  textDecoration: "none",
                  fontWeight: pathname === item.href ? "600" : "400"
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {isMenuOpen && (
          <div className="mobile-menu" style={{ padding: "1rem 0", borderTop: "1px solid #e5e7eb" }}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                style={{
                  display: "block",
                  padding: "0.75rem 0.5rem",
                  color: pathname === item.href ? "#2563eb" : "#4b5563",
                  textDecoration: "none"
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important;
          }
          .burger-button {
            display: block !important;
            margin-left: auto !important;
            margin-right: 20px !important;
          }
        }
        @media (min-width: 769px) {
          .burger-button {
            display: none !important;
          }
          .desktop-menu {
            display: flex !important;
          }
          .mobile-menu {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
}