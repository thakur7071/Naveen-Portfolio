"use client";

import { useEffect, useState } from "react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";
import Terminal from "@/components/terminal/Terminal";
import Contact from "@/components/sections/Contact";
import SiteNavbar from "@/components/layout/SiteNavbar";

const skillCategories = [
  "Languages",
  "Web & Mobile Development",
  "Developer Tools",
  "Soft Skills",
];

const introRoles = [
  "Full-Stack Developer",
  "UI Engineer",
  "Problem Solver",
];

export default function HomePage({ skipCurtain = false }: { skipCurtain?: boolean }) {
  const [entered, setEntered] = useState(skipCurtain);
  const [curtainGone, setCurtainGone] = useState(skipCurtain);
  const [roleText, setRoleText] = useState(introRoles[0]);

  useEffect(() => {
    if (skipCurtain) {
      window.history.replaceState(
        {},
        "",
        `${window.location.pathname}${window.location.hash}`,
      );
      return;
    }

    if (!entered) return;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const timer = window.setTimeout(
      () => setCurtainGone(true),
      prefersReducedMotion ? 0 : 1150,
    );
    return () => window.clearTimeout(timer);
  }, [entered, skipCurtain]);

  useEffect(() => {
    if (skipCurtain) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let roleIndex = 0;
    let characterIndex = introRoles[0].length;
    let deleting = true;
    let timer: number;

    function tick() {
      const currentRole = introRoles[roleIndex];
      characterIndex += deleting ? -1 : 1;
      setRoleText(currentRole.slice(0, characterIndex));

      let delay = deleting ? 35 : 75;
      if (!deleting && characterIndex === currentRole.length) {
        deleting = true;
        delay = 1400;
      } else if (deleting && characterIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % introRoles.length;
        delay = 300;
      }

      timer = window.setTimeout(tick, delay);
    }

    timer = window.setTimeout(tick, 1400);
    return () => window.clearTimeout(timer);
  }, [skipCurtain]);

  useEffect(() => {
    if (curtainGone) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [curtainGone]);

  function enterPortfolio() {
    setEntered(true);
  }

  return (
    <>
      {!curtainGone && (
        <div
          id="curtain-stage"
          className={entered ? "open" : ""}
          aria-hidden={entered}
          onPointerMove={(event) => {
            const bounds = event.currentTarget.getBoundingClientRect();
            event.currentTarget.style.setProperty(
              "--mx",
              `${event.clientX - bounds.left}px`,
            );
            event.currentTarget.style.setProperty(
              "--my",
              `${event.clientY - bounds.top}px`,
            );
          }}
        >
          <div className="intro-vline" aria-hidden="true" />
          <div className="intro-hero">
            <div className="intro-hello">WELCOME TO MY PORTFOLIO</div>
            <h1 className="intro-name">
              Naveen <span>Singh</span>
            </h1>
            <p className="intro-role" aria-live="off">
              <span>{roleText}</span>
              <i aria-hidden="true" />
            </p>
            <p className="intro-tag">
              I build fast, clean web apps that solve real problems.
            </p>
            <button
              className="intro-enter"
              type="button"
              aria-label="Enter portfolio"
              onClick={enterPortfolio}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
            <span className="intro-cta">CLICK TO ENTER</span>
          </div>
          <nav className="intro-social" aria-label="Social links">
            <a
              href="https://github.com/thakur7071"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} aria-hidden="true" />
            </a>
            <a
              href="mailto:singhnaveen2370@gmail.com"
              aria-label="Email"
              title="Email"
            >
              <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" />
            </a>
            <a href="#" aria-label="LinkedIn" title="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} aria-hidden="true" />
            </a>
          </nav>
        </div>
      )}

      <div
        id="site"
        className={entered ? "visible" : ""}
        aria-hidden={!entered}
      >
        <SiteNavbar />

        <main>
          <section className="draft-hero" id="home">
            <div className="hero-left">
              <div className="tag-line">{"// full stack developer"}</div>
              <h1>
                Building
                <br />
                things
                <br />
                that work.
              </h1>
              <p className="hero-sub">
                I build modern, responsive, and user-friendly web applications.
                I enjoy turning ideas into functional digital experiences —
                currently studying <strong>MCA at NIET Greater Noida</strong>.
              </p>
              <div className="chips">
                {[
                  "Python",
                  "JavaScript",
                  "React",
                  "Django",
                  "Node.js",
                  "MySQL",
                  "MongoDB",
                  "React Native",
                ].map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
              <div className="cta-row">
                <a className="btn-main" href="#projects">
                  View Projects ↓
                </a>
                <a className="btn-ghost" href="#contact">
                  Contact Me
                </a>
              </div>
            </div>

            <div className="hero-right">
              <Terminal />
            </div>
          </section>

          <div className="stat-bar">
            {[
              ["3", "PROJECTS BUILT"],
              ["8", "TECHNOLOGIES"],
              ["2", "YEARS CODING"],
              ["∞", "CURIOSITY"],
            ].map(([number, label]) => (
              <div className="stat-item" key={label}>
                <div className="stat-n">
                  {number}
                  {number !== "∞" && <span>+</span>}
                </div>
                <div className="stat-l">{label}</div>
              </div>
            ))}
          </div>

          <section className="draft-section" id="skills">
            <div className="sec-eyebrow">{"// what I know"}</div>
            <h2 className="sec-title">Skills</h2>
            <div className="skills-wrap">
              {skillCategories.map((category, index) => (
                <div className="skill-group" key={category}>
                  <div className="skill-group-title">
                    <span className="skill-group-num">
                      {String(index + 1).padStart(2, "0")}
                    </span>{" "}
                    {category}
                  </div>
                  <div className="skill-tags">
                    {skills
                      .filter((skill) => skill.category === category)
                      .map((skill) => (
                        <span className="s-tag" key={skill.name}>
                          {skill.name}
                        </span>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="draft-section" id="projects">
            <div className="sec-eyebrow">{"// what I've built"}</div>
            <h2 className="sec-title">Projects</h2>
            <div className="projects-wrap">
              {projects.map((project) => (
                <article className="proj-card" key={project.slug}>
                  <div className="proj-top">
                    <span className="proj-num">{project.number} ↗</span>
                  </div>
                  <h3 className="proj-title">{project.title}</h3>
                  <p className="proj-desc">{project.description}</p>
                  <div className="proj-features">
                    {project.features.map((feature) => (
                      <p key={feature}>
                        <span>→</span> {feature}
                      </p>
                    ))}
                  </div>
                  <div className="proj-tech">
                    {project.technologies.map((tech) => (
                      <span className="p-tag" key={tech}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <Contact />
        </main>

        <footer className="draft-footer">
          <span>© 2026 Naveen Singh — built with passion</span>
          <span>v2.0.0 · Greater Noida, IN</span>
        </footer>
      </div>
    </>
  );
}
