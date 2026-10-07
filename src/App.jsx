import Contact from "./components/Contact.jsx";
import Education from "./components/Education.jsx";
import Experience from "./components/Experience.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import Nav from "./components/Nav.jsx";
import Projects from "./components/Projects.jsx";
import QuickFacts from "./components/QuickFacts.jsx";
import Skills from "./components/Skills.jsx";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main" tabIndex={-1}>
        <Hero />
        <QuickFacts />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
