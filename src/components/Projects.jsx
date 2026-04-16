import Section, { SectionLabel, SectionTitle } from "./Section";
import { motion } from "framer-motion";
import { projects } from "../data";

function ProjectCard({ project, index }) {
  const isFeatured = project.featured;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      style={{
        gridColumn: isFeatured ? "span 2" : "span 1",
        background: "var(--card)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius)",
        padding: "2rem",
        display: isFeatured ? "grid" : "flex",
        gridTemplateColumns: isFeatured ? "1fr 1fr" : undefined,
        flexDirection: isFeatured ? undefined : "column",
        gap: "2rem",
        alignItems: isFeatured ? "center" : undefined,
        position: "relative",
        overflow: "hidden",
        transition: "border-color 0.3s, transform 0.3s",
        cursor: "default",
      }}
      whileHover={{ y: -4, borderColor: "rgba(108,99,255,0.45)" }}
    >
      {/* top accent line */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 2,
        background: "linear-gradient(90deg, var(--accent), var(--accent2))",
        opacity: 0, transition: "opacity 0.3s",
      }} className="project-line" />

      {/* Main content */}
      <div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
          <span style={{ fontSize: "0.65rem", color: "var(--accent)", letterSpacing: "0.1em" }}>
            {String(index + 1).padStart(2, "0")}
          </span>
          <div style={{ display: "flex", gap: "0.75rem" }}>
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer"
                style={{ fontSize: "0.72rem", color: "var(--muted)", textDecoration: "none", letterSpacing: "0.05em" }}
                onMouseEnter={e => e.target.style.color = "var(--accent2)"}
                onMouseLeave={e => e.target.style.color = "var(--muted)"}>
                GitHub ↗
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noreferrer"
                style={{ fontSize: "0.72rem", color: "var(--muted)", textDecoration: "none", letterSpacing: "0.05em" }}
                onMouseEnter={e => e.target.style.color = "var(--accent2)"}
                onMouseLeave={e => e.target.style.color = "var(--muted)"}>
                Demo ↗
              </a>
            )}
          </div>
        </div>

        <h3 style={{ fontFamily: "Syne", fontWeight: 700, fontSize: "1.35rem", marginBottom: "0.75rem" }}>
          {project.title}
        </h3>

        <p style={{ fontSize: "0.85rem", lineHeight: 1.75, color: "var(--muted)", marginBottom: "1.5rem" }}>
          {project.description}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          {project.stack.map(t => (
            <span key={t} style={{
              fontSize: "0.68rem", padding: "0.25rem 0.6rem",
              background: "rgba(108,99,255,0.1)", border: "1px solid rgba(108,99,255,0.22)",
              borderRadius: 2, color: "var(--accent2)", letterSpacing: "0.05em",
            }}>
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Featured side panel */}
      {isFeatured && project.highlights && (
        <div style={{
          padding: "1.5rem", background: "var(--bg3)",
          borderRadius: 6, border: "1px solid var(--border)",
        }}>
          <div style={{ fontSize: "0.68rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "1rem" }}>
            Destaques
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            {project.highlights.map(h => (
              <div key={h} style={{ fontSize: "0.82rem", color: "var(--muted)", paddingLeft: "1rem", position: "relative" }}>
                <span style={{ position: "absolute", left: 0, color: "var(--accent)" }}>→</span>
                {h}
              </div>
            ))}
          </div>
        </div>
      )}
    </motion.article>
  );
}

export default function Projects() {
  return (
    <Section id="projetos">
      <SectionLabel>Projetos</SectionLabel>
      <SectionTitle>O que construí</SectionTitle>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "1.5rem",
      }}>
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>

      <style>{`
        @media (max-width: 800px) {
          #projetos article { grid-column: span 1 !important; grid-template-columns: 1fr !important; }
          #projetos > div:last-child { grid-template-columns: 1fr !important; }
        }
        article:hover .project-line { opacity: 1 !important; }
      `}</style>
    </Section>
  );
}
