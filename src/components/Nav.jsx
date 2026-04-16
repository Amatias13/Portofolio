import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

const links = [
  { label: "Sobre", href: "#sobre" },
  { label: "Projetos", href: "#projetos" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Contacto", href: "#contacto" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]     = useState("");
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = links.map(l => document.querySelector(l.href));
      sections.forEach(s => {
        if (s && window.scrollY >= s.offsetTop - 120) setActive(`#${s.id}`);
      });
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navStyle = {
    position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
    padding: "1.1rem 3rem",
    display: "flex", justifyContent: "space-between", alignItems: "center",
    background: scrolled ? "rgba(10,10,15,0.92)" : "transparent",
    backdropFilter: scrolled ? "blur(20px)" : "none",
    borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
    transition: "all 0.4s",
  };

  return (
    <nav style={navStyle}>
      {/* Logo */}
      <a href="#hero" style={{ textDecoration: "none" }}>
        <span style={{ fontFamily: "Syne", fontWeight: 800, fontSize: "1.1rem", letterSpacing: "0.04em" }}>
          AM<span style={{ color: "var(--accent)" }}>.</span>
        </span>
      </a>

      {/* Desktop links */}
      <div style={{ display: "flex", gap: "2rem" }} className="nav-desktop">
        {links.map(l => (
          <a
            key={l.href}
            href={l.href}
            style={{
              textDecoration: "none",
              fontSize: "0.75rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: active === l.href ? "var(--accent2)" : "var(--muted)",
              transition: "color 0.3s",
            }}
            onMouseEnter={e => e.target.style.color = "var(--accent2)"}
            onMouseLeave={e => e.target.style.color = active === l.href ? "var(--accent2)" : "var(--muted)"}
          >
            {l.label}
          </a>
        ))}
      </div>

      {/* Hamburger */}
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          display: "none", background: "none", border: "none",
          cursor: "pointer", color: "var(--text)", padding: "4px",
        }}
        className="nav-burger"
        aria-label="Menu"
      >
        <div style={{ width: 22, height: 2, background: "currentColor", marginBottom: 5, borderRadius: 2 }} />
        <div style={{ width: 22, height: 2, background: "currentColor", marginBottom: 5, borderRadius: 2 }} />
        <div style={{ width: 14, height: 2, background: "currentColor", borderRadius: 2 }} />
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            style={{
              position: "absolute", top: "100%", left: 0, right: 0,
              background: "var(--bg2)", borderBottom: "1px solid var(--border)",
              padding: "1.5rem 2rem",
              display: "flex", flexDirection: "column", gap: "1.2rem",
            }}
          >
            {links.map(l => (
              <a key={l.href} href={l.href}
                onClick={() => setOpen(false)}
                style={{ textDecoration: "none", fontSize: "0.85rem", color: "var(--text)" }}>
                {l.label}
              </a>
            ))}
          </div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 700px) {
          .nav-desktop { display: none !important; }
          .nav-burger  { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
