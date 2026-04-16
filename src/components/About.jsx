import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Section, { SectionLabel, SectionTitle } from "./Section";
import { personal, skills } from "../data";

const categories = ["todas", "backend", "frontend", "database", "tools"];

export default function About() {
  const [filter, setFilter] = useState("todas");

  const filtered = filter === "todas" ? skills : skills.filter((s) => s.category === filter);

  return (
    <Section id="sobre">
      <SectionLabel>Sobre Mim</SectionLabel>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
        {/* Text */}
        <div>
          <SectionTitle>
            Developer
            <br />
            baseado em
            <br />
            <span style={{ color: "var(--accent2)" }}>Portugal</span>
          </SectionTitle>

          {personal.bio.map((p, i) => (
            <p
              key={i}
              style={{
                fontSize: "0.88rem",
                lineHeight: 1.8,
                color: "var(--muted)",
                marginBottom: "1rem",
              }}
            >
              {p}
            </p>
          ))}
        </div>

        {/* Skills */}
        <div>
          <div style={{ fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "1rem" }}>Stack técnico</div>

          {/* Filter tabs */}
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1.25rem" }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                style={{
                  padding: "0.3rem 0.8rem",
                  border: `1px solid ${filter === cat ? "var(--accent)" : "var(--border)"}`,
                  background: filter === cat ? "rgba(108,99,255,0.15)" : "transparent",
                  color: filter === cat ? "var(--accent2)" : "var(--muted)",
                  fontSize: "0.68rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  borderRadius: 2,
                  cursor: "pointer",
                  fontFamily: "inherit",
                  transition: "all 0.25s",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Pills */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
            <AnimatePresence mode="popLayout">
              {filtered.map((skill) => (
                <motion.span
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    padding: "0.4rem 0.9rem",
                    border: "1px solid var(--border)",
                    borderRadius: 2,
                    fontSize: "0.73rem",
                    color: "var(--muted)",
                    background: "var(--bg3)",
                    cursor: "default",
                    transition: "all 0.25s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--accent)";
                    e.currentTarget.style.color = "var(--accent2)";
                    e.currentTarget.style.background = "rgba(108,99,255,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.color = "var(--muted)";
                    e.currentTarget.style.background = "var(--bg3)";
                  }}
                >
                  {skill.name}
                </motion.span>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          #sobre > div > div:first-child,
          #sobre > div > div:last-child { grid-column: span 1 !important; }
          #sobre > div { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </Section>
  );
}
