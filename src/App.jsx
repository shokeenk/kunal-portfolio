import React, { useState, useEffect, useRef } from "react";
import kunalPhoto from "./assets/kunal-photo.png";
/**
 * KUNAL — PORTFOLIO
 * Theme: "The Dossier" — light ivory + deep navy + brass gold.
 * Concept: every section reads like a case file — a wax-seal hero card,
 * a transcript-style education ledger, and projects filed as case folders.
 * Built with real details from Kunal's background. Anywhere you see
 * an EDIT comment or bracketed placeholder, swap in your own info.
 */

const FONT_IMPORT_URL =
  "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap";

const ROLES = ["Full-Stack Developer", "Student", "React & Spring Architect"];

const SKILLS = [
  {
    group: "Backend",
    items: [
      { name: "Spring Boot", level: 3 },
      { name: "Java", level: 3 },
      { name: "REST APIs", level: 3 },
    ],
  },
  {
    group: "Frontend",
    items: [
      { name: "React", level: 2 },
      { name: "JavaScript", level: 3 },
      { name: "Spring Boot", level: 3 },
      { name: "HTML / CSS", level: 2 },
    ],
  },
  {
    group: "Databases",
    items: [
      { name: "MongoDB", level: 2 },
      { name: "MySQL", level: 2 },
    ],
  },
  {
    group: "Design & Storytelling",
    items: [
      { name: "PowerPoint / pptxgenjs", level: 3 },
      { name: "Data Visualization", level: 3 },
      { name: "Branding & Identity Design", level: 3 },
    ],
  },
];

const EDUCATION = [
  {
    school: "Jagan Institute of Management Studies",
    degree: "Master of Computer Applications (MCA)",
    period: "2024 — 2026",
    note: "Built two full-stack projects during the program: a Journal App (Spring Boot, React, MongoDB) and a Rapid Medico System (Spring Boot, React, MySQL)."
  },
  {
    school: "Vivekanda Institute of Management Studies, Pitampura",
    degree: "Bachlor of Computer Application (BCA)", 
    period: "2020-2023",
    note: "Completed MCA with a focus on shipping real systems, not just theory — built a Journal App (Spring Boot, React, MongoDB) and a Rapid Medico System (Spring Boot, React, MySQL) from the ground up.ember; picked up HTML and JavaScript alongside it.",
    placeholder: true,
  },
];

const PROJECTS = [
  {
    id: "billing-system",
    tag: "Academic",
    file: "No. 02",
    title: "Retailer Billing System",
    summary:
      "An MCA systems-design report modelling a retail billing workflow end to end.",
    detail:
      "Included Level 0 and Level 1 Data Flow Diagrams, produced as clean, professional SVGs rather than the usual hand-drawn boxes.",
    href: "#", // EDIT: link to report / repo
  },
  {
    id: "chandra-ice",
    tag: "Hackathon",
    file: "No. 01",
    title: "CHANDRA-ICE",
    summary:
      "An AI-powered framework for lunar ice discovery, built on Chandrayaan-2 radar and optical imagery. Submitted to ISRO's Bharatiya Antariksh Hackathon (BAH) 2026.",
    detail:
      "Delivered as a full presentation deck on ISRO's official template — including the deep XML-level fixes needed to make a fixed template behave.",
    href: "#", // EDIT: link to repo / deck
  },
  
  {
    id: "Eafc-tournament",
    tag: "Community",
    file: "No. 03",
    title: "EAFC 26 Tournament",
    summary:
      "A competitive EAFC 26 tournament run entirely through a WhatsApp community.",
    detail:
      "Co-managed with a partner handling audience growth and sponsorship — this side covered structure, brackets, and running the thing week to week.",
    href: "#", // EDIT: link if you have a recap / community page
  },
];

const FILTERS = ["All", "Hackathon", "Academic", "Community"];

function useRevealOnScroll() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function Reveal({ children, delay = 0, as: Tag = "div", className = "" }) {
  const [ref, visible] = useRevealOnScroll();
  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "reveal-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

function TypedRole() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = ROLES[roleIdx];
    const speed = deleting ? 35 : 65;
    const timeout = setTimeout(() => {
      if (!deleting) {
        if (text.length < full.length) {
          setText(full.slice(0, text.length + 1));
        } else {
          setTimeout(() => setDeleting(true), 1100);
        }
      } else {
        if (text.length > 0) {
          setText(full.slice(0, text.length - 1));
        } else {
          setDeleting(false);
          setRoleIdx((i) => (i + 1) % ROLES.length);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, roleIdx]);

  return (
    <span className="typed-role">
      {text}
      <span className="cursor">|</span>
    </span>
  );
}

function Seal() {
  return (
    <div className="seal" aria-hidden="true">
      <svg viewBox="0 0 200 200" width="100%" height="100%">
        <circle cx="100" cy="100" r="94" className="seal-ring" />
        <circle cx="100" cy="100" r="78" className="seal-ring-inner" />
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = (i / 24) * Math.PI * 2;
          const x1 = 100 + Math.cos(angle) * 86;
          const y1 = 100 + Math.sin(angle) * 86;
          const x2 = 100 + Math.cos(angle) * 92;
          const y2 = 100 + Math.sin(angle) * 92;
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              className="seal-tick"
            />
          );
        })}
        <text x="100" y="94" textAnchor="middle" className="seal-text-main">
          KUNAL
        </text>
        <text x="100" y="118" textAnchor="middle" className="seal-text-sub">
          FILE No. 2026
        </text>
      </svg>
    </div>
  );
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [openProject, setOpenProject] = useState(null);
  const [navSolid, setNavSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setNavSolid(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const filteredProjects =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.tag === activeFilter);

  return (
    <div className="dossier">
      <style>{`
        @import url('${FONT_IMPORT_URL}');

        :root {
          --bg: #FAF8F3;
          --bg-alt: #F1ECDF;
          --navy: #0E2340;
          --navy-2: #1B3A63;
          --gold: #B8862B;
          --gold-light: #E4C273;
          --ink: #23262B;
          --muted: #6B6459;
          --line: #DCD3BC;
          --card: #FFFFFF;
        }

        .dossier {
          background: var(--bg);
          color: var(--ink);
          font-family: 'Inter', -apple-system, sans-serif;
          line-height: 1.55;
          min-height: 100%;
        }

        .dossier * { box-sizing: border-box; }

        .dossier h1, .dossier h2, .dossier h3 {
          font-family: 'Fraunces', Georgia, serif;
          color: var(--navy);
          margin: 0;
          letter-spacing: -0.01em;
        }

        .eyebrow {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 12px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--gold);
          font-weight: 500;
        }

        .reveal {
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .reveal-visible { opacity: 1; transform: translateY(0); }

        @media (prefers-reduced-motion: reduce) {
          .reveal { opacity: 1; transform: none; transition: none; }
        }

        /* NAV */
        .nav {
          position: sticky; top: 0; z-index: 40;
          display: flex; align-items: center; justify-content: space-between;
          padding: 18px 6vw;
          background: transparent;
          border-bottom: 1px solid transparent;
          transition: background 0.3s ease, border-color 0.3s ease;
        }
        .nav.solid {
          background: rgba(250, 248, 243, 0.92);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid var(--line);
        }
        .nav-brand {
          font-family: 'Fraunces', serif;
          font-weight: 600; font-size: 20px; color: var(--navy);
          display: flex; align-items: center; gap: 8px;
        }
        .nav-brand .dot { width: 8px; height: 8px; border-radius: 50%; background: var(--gold); }
        .nav-links { display: flex; gap: 34px; list-style: none; padding: 0; margin: 0; }
        .nav-links a {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 12.5px; letter-spacing: 0.06em; text-transform: uppercase;
          color: var(--navy-2); text-decoration: none; position: relative;
        }
        .nav-links a::after {
          content: ''; position: absolute; left: 0; bottom: -6px; width: 0; height: 1.5px;
          background: var(--gold); transition: width 0.25s ease;
        }
        .nav-links a:hover::after { width: 100%; }

        /* HERO */
        .hero {
          display: grid; grid-template-columns: 1.15fr 0.85fr; gap: 60px;
          align-items: center;
          padding: 8vh 6vw 10vh;
          max-width: 1280px; margin: 0 auto;
        }
        .hero h1 { font-size: clamp(40px, 5vw, 64px); font-weight: 600; line-height: 1.05; }
        .hero .role-line {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 18px; color: var(--navy-2); margin: 18px 0 22px;
        }
        .typed-role { color: var(--gold); font-weight: 500; }
        .cursor { animation: blink 1s step-start infinite; color: var(--navy); }
        @keyframes blink { 50% { opacity: 0; } }

        .hero p.bio { color: var(--muted); font-size: 16px; max-width: 46ch; margin-bottom: 30px; }

        .cta-row { display: flex; gap: 14px; align-items: center; flex-wrap: wrap; }
        .btn {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 12.5px; letter-spacing: 0.06em; text-transform: uppercase;
          padding: 13px 26px; border-radius: 2px; text-decoration: none;
          display: inline-block; transition: all 0.2s ease;
        }
        .btn-primary { background: var(--navy); color: var(--bg); border: 1px solid var(--navy); }
        .btn-primary:hover { background: var(--navy-2); }
        .btn-outline { border: 1px solid var(--navy); color: var(--navy); }
        .btn-outline:hover { background: var(--navy); color: var(--bg); }

        .social-row { display: flex; gap: 16px; margin-top: 24px; }
        .social-row a {
          width: 34px; height: 34px; border: 1px solid var(--line); border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          color: var(--navy-2); text-decoration: none; font-size: 13px;
          font-family: 'IBM Plex Mono', monospace; transition: border-color 0.2s ease, color 0.2s ease;
        }
        .social-row a:hover { border-color: var(--gold); color: var(--gold); }

        .seal-wrap {
          background: var(--card); border: 1px solid var(--line);
          border-radius: 6px; padding: 36px;
          display: flex; flex-direction: column; align-items: center; gap: 22px;
          box-shadow: 0 24px 50px -30px rgba(14,35,64,0.25);
        }
        .seal { width: 170px; height: 170px; }
        .seal-ring { fill: none; stroke: var(--navy); stroke-width: 1.5; }
        .seal-ring-inner { fill: none; stroke: var(--gold); stroke-width: 1; }
        .seal-tick { stroke: var(--navy); stroke-width: 1; }
        .seal-text-main {
          font-family: 'Fraunces', serif; font-size: 20px; font-weight: 600; fill: var(--navy);
          letter-spacing: 0.06em;
        }
        .seal-text-sub {
          font-family: 'IBM Plex Mono', monospace; font-size: 9px; fill: var(--gold);
          letter-spacing: 0.14em;
        }
        .seal-caption {
  font-family: 'IBM Plex Mono', monospace; font-size: 11.5px; color: var(--muted);
  text-align: center; letter-spacing: 0.05em;
}
  .photo-frame {
  position: relative;
  width: 200px; height: 200px;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid var(--line);
  box-shadow: 0 14px 30px -18px rgba(14,35,64,0.35);
  transform: rotate(-1.5deg);
}
.photo-frame img {
  width: 100%; height: 100%; object-fit: cover;
  filter: grayscale(15%) contrast(1.03);
}
.photo-pin {
  position: absolute; top: 10px; right: 14px;
  width: 12px; height: 12px; border-radius: 50%;
  background: var(--gold);
  box-shadow: 0 2px 4px rgba(0,0,0,0.25);
}
.subject-plate {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 12px; letter-spacing: 0.05em; text-transform: uppercase;
  color: var(--navy-2); text-align: center;
}
.subject-plate div { color: var(--navy); font-weight: 600; margin-top: 2px; }

        /* SECTION SHELL */
        .section { padding: 9vh 6vw; max-width: 1280px; margin: 0 auto; }
        .section.alt { background: var(--bg-alt); max-width: none; }
        .section.alt > .inner { max-width: 1280px; margin: 0 auto; }
        .section-head { margin-bottom: 44px; }
        .section-head h2 { font-size: clamp(28px, 3.2vw, 38px); font-weight: 600; margin-top: 8px; }

        /* SKILLS LEDGER */
        .ledger { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }
        .ledger-card {
          background: var(--card); border: 1px solid var(--line); border-radius: 4px;
          padding: 26px 24px;
        }
        .ledger-card h3 {
          font-size: 15px; font-family: 'IBM Plex Mono', monospace; font-weight: 500;
          text-transform: uppercase; letter-spacing: 0.05em; color: var(--navy-2);
          padding-bottom: 14px; margin-bottom: 16px; border-bottom: 1px solid var(--line);
        }
        .ledger-row {
          display: flex; align-items: center; justify-content: space-between;
          padding: 9px 0; font-size: 14.5px; color: var(--ink);
          border-bottom: 1px dashed var(--line);
        }
        .ledger-row:last-child { border-bottom: none; }
        .dots { display: flex; gap: 4px; }
        .dots span { width: 6px; height: 6px; border-radius: 50%; background: var(--line); }
        .dots span.filled { background: var(--gold); }

        /* EDUCATION TRANSCRIPT */
        .transcript { border-left: 2px solid var(--line); padding-left: 30px; display: flex; flex-direction: column; gap: 30px; }
        .transcript-entry { position: relative; }
        .transcript-entry::before {
          content: ''; position: absolute; left: -35.5px; top: 6px;
          width: 9px; height: 9px; border-radius: 50%; background: var(--gold);
          border: 2px solid var(--bg-alt);
        }
        .transcript-entry.placeholder::before { background: var(--line); }
        .transcript-entry .period { font-family: 'IBM Plex Mono', monospace; font-size: 12px; color: var(--gold); letter-spacing: 0.05em; }
        .transcript-entry h3 { font-size: 20px; margin: 6px 0 3px; }
        .transcript-entry .degree { color: var(--navy-2); font-size: 14.5px; margin-bottom: 8px; }
        .transcript-entry .note { color: var(--muted); font-size: 14px; max-width: 60ch; }
        .transcript-entry.placeholder .note { font-style: italic; }

        /* PROJECTS */
        .filter-row { display: flex; gap: 10px; margin-bottom: 36px; flex-wrap: wrap; }
        .filter-chip {
          font-family: 'IBM Plex Mono', monospace; font-size: 12px; letter-spacing: 0.05em;
          text-transform: uppercase; padding: 8px 16px; border-radius: 999px;
          border: 1px solid var(--line); background: transparent; color: var(--navy-2);
          cursor: pointer; transition: all 0.2s ease;
        }
        .filter-chip.active { background: var(--navy); border-color: var(--navy); color: var(--bg); }
        .filter-chip:hover:not(.active) { border-color: var(--gold); color: var(--gold); }

        .case-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .case-card {
          background: var(--card); border: 1px solid var(--line); border-radius: 4px;
          padding: 26px 24px; cursor: pointer; position: relative; overflow: hidden;
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }
        .case-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px -26px rgba(14,35,64,0.3);
          border-color: var(--gold);
        }
        .case-card .file-no {
          font-family: 'IBM Plex Mono', monospace; font-size: 11px; color: var(--gold);
          letter-spacing: 0.08em; margin-bottom: 10px; display: block;
        }
        .case-card h3 { font-size: 20px; margin-bottom: 10px; }
        .case-card p { color: var(--muted); font-size: 14px; margin: 0 0 14px; }
        .case-card .tag {
          font-family: 'IBM Plex Mono', monospace; font-size: 10.5px; letter-spacing: 0.06em;
          text-transform: uppercase; color: var(--navy-2); border: 1px solid var(--line);
          padding: 4px 10px; border-radius: 999px; display: inline-block;
        }
        .case-detail {
          max-height: 0; overflow: hidden; transition: max-height 0.35s ease, margin-top 0.35s ease;
          font-size: 13.5px; color: var(--muted); border-top: 1px dashed var(--line);
        }
        .case-card.open .case-detail { max-height: 200px; margin-top: 14px; padding-top: 14px; }

        /* CONTACT */
        .contact-card {
          background: var(--navy); color: var(--bg); border-radius: 6px;
          padding: 48px 6vw; display: grid; grid-template-columns: 1fr 1fr; gap: 40px;
          max-width: 1280px; margin: 0 auto;
        }
        .contact-card h2 { color: var(--bg); }
        .contact-item { margin-bottom: 20px; }
        .contact-item .eyebrow { color: var(--gold-light); }
        .contact-item .value { font-size: 16px; margin-top: 4px; }
        .contact-item .value.placeholder { color: rgba(250,248,243,0.5); font-style: italic; }
        .footer {
          text-align: center; padding: 28px; font-family: 'IBM Plex Mono', monospace;
          font-size: 12px; color: var(--muted); letter-spacing: 0.05em;
        }

        @media (max-width: 900px) {
          .hero { grid-template-columns: 1fr; }
          .nav-links { display: none; }
          .ledger, .case-grid { grid-template-columns: 1fr; }
          .contact-card { grid-template-columns: 1fr; }
        }
      `}</style>

      <nav className={`nav ${navSolid ? "solid" : ""}`}>
        <div className="nav-brand"><span className="dot" /> Kunal</div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <header className="hero" id="about">
        <Reveal>
          <div className="eyebrow">Portfolio</div>
          <h1>Hi, I'm Kunal Shokeen.</h1>
<div className="role-line">I am a <TypedRole /></div>
<p className="bio">
  Computer Applications postgraduate with hands-on full-stack experience
  across React.js, Java, and Spring Boot — building RESTful APIs,
  JWT-based authentication, and event-driven systems with Kafka. Shipped
  end-to-end products including an online medicine-ordering platform and
  a secure journaling application, backed by a strong DSA foundation.
</p>
          <div className="cta-row">
            <a className="btn btn-primary" href="https://drive.google.com/file/d/19Z4YRhnmouYZDqSi0A3dKObBTrJ-rXDP/view?usp=sharing">Resume</a> {/* EDIT: link your resume */}
            <a className="btn btn-outline" href="#contact">Contact Me</a>
          </div>
          <div className="social-row">
            <a href="https://github.com/shokeenk" aria-label="GitHub">GH</a> 
            <a href="https://www.linkedin.com/in/kunal-shokeen-967099361" aria-label="LinkedIn">IN</a> 
            <a href="https://leetcode.com/u/shokeenk14/" aria-label="LeetCode">LEET</a> 
          </div>
        </Reveal>
        <Reveal delay={150}>
  <div className="seal-wrap">
    <div className="photo-frame">
      <img src={kunalPhoto} alt="Kunal" />
      <span className="photo-pin" aria-hidden="true" />
    </div>
    <div className="subject-plate">
      <span className="eyebrow">Subject</span>
      <div>KUNAL — FILE</div>
    </div>
    <div className="seal-caption">Certified — MCA, JIMS<br/>Full-Stack Developer</div>
  </div>
</Reveal>
      </header>

      <section className="section" id="skills">
        <Reveal as="div" className="section-head">
          <div className="eyebrow">Proficiency Ledger</div>
          <h2>Skills</h2>
        </Reveal>
        <div className="ledger">
          {SKILLS.map((group, gi) => (
            <Reveal key={group.group} delay={gi * 100}>
              <div className="ledger-card">
                <h3>{group.group}</h3>
                {group.items.map((item) => (
                  <div className="ledger-row" key={item.name}>
                    <span>{item.name}</span>
                    <span className="dots">
                      {[0, 1, 2].map((i) => (
                        <span key={i} className={i < item.level ? "filled" : ""} />
                      ))}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section alt" id="education">
        <div className="inner">
          <Reveal as="div" className="section-head">
            <div className="eyebrow">Transcript</div>
            <h2>Education</h2>
          </Reveal>
          <div className="transcript">
            {EDUCATION.map((e) => (
              <Reveal as="div" key={e.school} className={`transcript-entry ${e.placeholder ? "placeholder" : ""}`}>
                <div className="period">{e.period}</div>
                <h3>{e.school}</h3>
                <div className="degree">{e.degree}</div>
                <div className="note">{e.note}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="projects">
        <Reveal as="div" className="section-head">
          <div className="eyebrow">Case Files</div>
          <h2>Projects</h2>
        </Reveal>
        <div className="filter-row">
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`filter-chip ${activeFilter === f ? "active" : ""}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="case-grid">
          {filteredProjects.map((p, i) => (
            <Reveal key={p.id} delay={i * 90}>
              <div
                className={`case-card ${openProject === p.id ? "open" : ""}`}
                onClick={() => setOpenProject(openProject === p.id ? null : p.id)}
              >
                <span className="file-no">{p.file}</span>
                <h3>{p.title}</h3>
                <p>{p.summary}</p>
                <span className="tag">{p.tag}</span>
                <div className="case-detail">{p.detail}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section" id="contact">
        <Reveal>
          <div className="contact-card">
            <div>
              <div className="eyebrow" style={{ color: "var(--gold-light)" }}>Get In Touch</div>
              <h2>Contact me</h2>
              <p style={{ color: "rgba(250,248,243,0.7)", marginTop: 14, maxWidth: "40ch" }}>
              I'm a Full Stack Developer with hands-on experience across React.js, Java/Spring Boot, 
              and REST API design, currently open to opportunities in software development, 
              presentation design, and data storytelling. 
              Feel free to reach out to discuss how I can contribute to your team.
              </p>
            </div>
            <div>
              <div className="contact-item">
                <div className="eyebrow">Based in</div>
                <div className="value placeholder">Delhi</div> 
              </div>
              <div className="contact-item">
                <div className="eyebrow">Email me at</div>
                <div className="value placeholder">shokeenk14@gmail.com</div> 
              </div>
              <div className="contact-item">
                <div className="eyebrow">Call me at</div>
                <div className="value placeholder">+91 7011467765</div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <footer className="footer"> Built with React, Spring Boot, and stubbornness. — © 2026 Kunal Shokeen</footer>
    </div>
  );
}
