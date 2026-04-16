import { personal } from "../data";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "8rem 3rem 4rem",
        maxWidth: 1200,
        margin: "0 auto",
        gap: "4rem",
        position: "relative",
      }}
    >
      {/* BG glow */}
      <div style={{
        position: "fixed", top: "-15%", right: "-8%",
        width: 600, height: 600,
        background: "radial-gradient(circle, rgba(108,99,255,0.1) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Content */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div {...fade(0.05)} style={{
          display: "inline-block",
          fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase",
          color: "var(--accent)", border: "1px solid var(--accent)",
          padding: "0.3rem 0.8rem", borderRadius: 2, marginBottom: "1.5rem",
        }}>
          {personal.title}
        </div>

        <h1 {...fade(0.15)} style={{
          fontFamily: "Syne", fontWeight: 800,
          fontSize: "clamp(3rem, 8vw, 6rem)",
          lineHeight: 0.95, letterSpacing: "-0.03em",
          marginBottom: "1.5rem",
        }}>
          <span style={{ display: "block" }}>{personal.name.split(" ")[0]}</span>
          <span style={{ display: "block", color: "var(--accent2)" }}>
            {personal.name.split(" ").slice(1).join(" ")}
          </span>
        </h1>

        <p {...fade(0.25)} style={{
          maxWidth: 500, fontSize: "0.9rem", lineHeight: 1.75,
          color: "var(--muted)", marginBottom: "2.5rem",
        }}>
          {personal.bio[0]}
        </p>

        <div {...fade(0.35)} style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <a href="#projetos" style={btnPrimary}>Ver Projetos →</a>
          <a href={`mailto:${personal.email}`} style={btnOutline}>Contactar</a>
        </div>

        {/* Quick links */}
        <div {...fade(0.45)} style={{ display: "flex", gap: "1.5rem", marginTop: "2rem" }}>
          {[
            { label: "GitHub", href: personal.github },
            { label: "LinkedIn", href: personal.linkedin },
          ].map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
              style={{ fontSize: "0.75rem", letterSpacing: "0.06em", color: "var(--muted)", textDecoration: "none" }}
              onMouseEnter={e => e.target.style.color = "var(--accent2)"}
              onMouseLeave={e => e.target.style.color = "var(--muted)"}>
              {s.label} ↗
            </a>
          ))}
        </div>
      </div>

      {/* Photo */}
      <div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        style={{
          flex: "0 0 340px", position: "relative",
        }}
      >
        {/* gradient border */}
        <div style={{
          position: "absolute", inset: -2, borderRadius: 10,
          background: "linear-gradient(135deg, var(--accent), transparent 50%, var(--accent2))",
        }} />
        <img
          src={personal.photo}
          alt={personal.name}
          style={{
            width: "100%", height: 430,
            objectFit: "cover", objectPosition: "top center",
            borderRadius: 9, position: "relative",
            filter: "grayscale(10%) contrast(1.05)",
          }}
          onError={e => {
            e.target.style.background = "var(--bg3)";
            e.target.style.height = "430px";
          }}
        />
      </div>

      <style>{`
        @media (max-width: 900px) {
          #hero { flex-direction: column !important; padding-top: 7rem !important; }
          #hero > div:last-child { flex: none !important; width: 100% !important; max-width: 320px; margin: 0 auto; }
        }
      `}</style>
    </section>
  );
}

const btnPrimary = {
  display: "inline-flex", alignItems: "center", gap: "0.5rem",
  padding: "0.85rem 2rem",
  background: "var(--accent)", color: "#fff",
  textDecoration: "none", fontFamily: "Syne", fontWeight: 600,
  fontSize: "0.85rem", letterSpacing: "0.05em", borderRadius: 4,
  transition: "all 0.3s",
};

const btnOutline = {
  display: "inline-flex", alignItems: "center", gap: "0.5rem",
  padding: "0.85rem 2rem",
  border: "1px solid var(--border)", color: "var(--text)",
  textDecoration: "none", fontFamily: "Syne", fontWeight: 600,
  fontSize: "0.85rem", letterSpacing: "0.05em", borderRadius: 4,
  transition: "all 0.3s",
};
