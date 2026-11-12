import { projects } from "@/data/projects";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="03 / SELECTED WORK"
          title="Things I've built."
          description="A selection of projects I've worked on and learned from."
        />

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-top">
                <span className="project-number">{project.number}</span>
                <span className="project-symbol">↗</span>
              </div>

              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-features">
                {project.features.map((feature) => (
                  <p key={feature}>
                    <span>↳</span> {feature}
                  </p>
                ))}
              </div>

              <div className="project-tech">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="project-links">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub ↗
                  </a>
                )}

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo ↗
                  </a>
                )}

                {!project.githubUrl && !project.liveUrl && (
                  <span className="project-link-placeholder">
                    Links coming soon
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}