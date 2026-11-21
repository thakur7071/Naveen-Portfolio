"use client";

import { useEffect, useState } from "react";
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

export default function HomePage({ skipCurtain = false }: { skipCurtain?: boolean }) {
  const [entered, setEntered] = useState(skipCurtain);
  const [curtainGone, setCurtainGone] = useState(skipCurtain);

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
    const timer = window.setTimeout(() => setCurtainGone(true), 1150);
    return () => window.clearTimeout(timer);
  }, [entered, skipCurtain]);

  function enterPortfolio() {
    setEntered(true);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      enterPortfolio();
    }
  }

  return (
    <>
      {!curtainGone && (
        <div
          id="curtain-stage"
          className={entered ? "open" : ""}
          aria-hidden={entered}
        >
          <div className="curtain curtain-left" />
          <div className="curtain curtain-right" />
          <div
            id="enter-btn"
            role="button"
            tabIndex={0}
            aria-label="Enter portfolio"
            onClick={enterPortfolio}
            onKeyDown={handleKeyDown}
          >
            <div className="enter-label">welcome to my portfolio</div>
            <div className="enter-name">
              Naveen
              <br />
              <em>Singh</em>
            </div>
            <div className="arrow-ring">
              <svg className="arrow-icon" viewBox="0 0 24 24" aria-hidden="true">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
            <div className="enter-label">click to enter</div>
          </div>
        </div>
      )}

      <div id="site" className={entered ? "visible" : ""}>
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
