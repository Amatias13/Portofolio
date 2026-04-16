import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Section({ id, children, style = {} }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      style={{
        padding: "6rem 3rem",
        maxWidth: 1200,
        margin: "0 auto",
        position: "relative",
        ...style,
      }}
    >
      {children}
    </motion.section>
  );
}

export function SectionLabel({ children }) {
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: "0.75rem",
      fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase",
      color: "var(--accent)", marginBottom: "0.85rem",
    }}>
      {children}
      <div style={{ width: 50, height: 1, background: "var(--accent)", opacity: 0.5 }} />
    </div>
  );
}

export function SectionTitle({ children }) {
  return (
    <h2 style={{
      fontFamily: "Syne", fontWeight: 800,
      fontSize: "clamp(1.8rem, 4vw, 3rem)",
      letterSpacing: "-0.02em", lineHeight: 1.1,
      marginBottom: "3rem",
    }}>
      {children}
    </h2>
  );
}

export function Divider() {
  return (
    <div style={{
      maxWidth: 1200, margin: "0 auto",
      height: 1,
      background: "linear-gradient(90deg, transparent, var(--border), transparent)",
    }} />
  );
}
