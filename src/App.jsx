import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import { Divider } from "./components/Section";
import "./index.css";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Projects />
        <Divider />
        <Experience />
        <Divider />
        <Contact />
      </main>
      <footer style={{
        textAlign: "center", padding: "1.5rem",
        fontSize: "0.7rem", color: "var(--muted)", letterSpacing: "0.05em",
      }}>
        © {new Date().getFullYear()} André Matias

      </footer>
    </>
  );
}
