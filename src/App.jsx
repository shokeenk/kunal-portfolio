import BackToTop from "./components/BackToTop.jsx";
import Contact from "./components/Contact.jsx";
import Education from "./components/Education.jsx";
import Experience from "./components/Experience.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import Nav from "./components/Nav.jsx";
import Projects from "./components/Projects.jsx";
import QuickFacts from "./components/QuickFacts.jsx";
import SkillHighlightProvider from "./components/SkillHighlightProvider.jsx";
import Skills from "./components/Skills.jsx";
import useRevealOnScroll from "./hooks/useRevealOnScroll.js";

export default function App() {
  useRevealOnScroll();
  return (
    <SkillHighlightProvider>
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
      <BackToTop />
    </SkillHighlightProvider>
  );
}
