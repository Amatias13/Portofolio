import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiPhone } from "react-icons/fi";
import { personal } from "../data";

export default function Contact() {
  const socials = [
    { ic: FiGithub, label: "GitHub", href: personal.github },
    { ic: FiLinkedin, label: "LinkedIn", href: personal.linkedin },
    { ic: FiPhone, label: personal.phone, href: `tel:${personal.phone.replace(/\s/g, "")}` },
  ];

  return (
    <motion.div
      id="contacto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      style={{
        textAlign: "center",
        padding: "6rem 2rem",
        background: "var(--bg2)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div
        style={{
          fontSize: "0.68rem",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--accent)",
          marginBottom: "1rem",
        }}
      >
        Contacto
      </div>

      <h2
        style={{
          fontFamily: "Syne",
          fontWeight: 800,
          fontSize: "clamp(1.8rem, 4vw, 3rem)",
          letterSpacing: "-0.02em",
          marginBottom: "0.5rem",
        }}
      >
        Vamos trabalhar juntos?
      </h2>

      <p style={{ color: "var(--muted)", fontSize: "0.85rem", maxWidth: 360, margin: "0 auto 2rem" }}>Disponível para novas oportunidades e projetos interessantes.</p>

      <a
        href={`mailto:${personal.email}`}
        style={{
          display: "inline-block",
          fontFamily: "Syne",
          fontWeight: 800,
          fontSize: "clamp(1.3rem, 3vw, 2.2rem)",
          letterSpacing: "-0.02em",
          color: "var(--text)",
          textDecoration: "none",
          marginBottom: "2.5rem",
          transition: "color 0.3s",
        }}
        onMouseEnter={(e) => (e.target.style.color = "var(--accent2)")}
        onMouseLeave={(e) => (e.target.style.color = "var(--text)")}
      >
        {personal.email}
      </a>

      <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
        {socials.map(({ label, href, ic }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.6rem 1.2rem",
              border: "1px solid var(--border)",
              borderRadius: 4,
              fontSize: "0.78rem",
              letterSpacing: "0.06em",
              color: "var(--muted)",
              textDecoration: "none",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--accent2)";
              e.currentTarget.style.borderColor = "var(--accent)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--muted)";
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            {React.createElement(ic, { size: 14 })}
            {label}
          </a>
        ))}
      </div>
    </motion.div>
  );
}
