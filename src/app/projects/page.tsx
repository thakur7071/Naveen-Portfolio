import Link from "next/link";
import InteriorPage from "@/components/layout/InteriorPage";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <InteriorPage eyebrow="03 / WHAT I'VE BUILT" title="Selected projects">
      <section className="projects-wrap project-index">
        {projects.map((project) => (
          <article className="proj-card" key={project.slug}>
            <div className="proj-top">
              <span className="proj-num">{project.number} ↗</span>
            </div>
            <h2 className="proj-title">{project.title}</h2>
            <p className="proj-desc">{project.description}</p>
            <div className="proj-features">
              {project.features.map((feature) => (
                <p key={feature}>
                  <span>→</span> {feature}
                </p>
              ))}
            </div>
            <div className="proj-tech">
              {project.technologies.map((technology) => (
                <span className="p-tag" key={technology}>
                  {technology}
                </span>
              ))}
            </div>
            <Link className="project-index-link" href={`/projects/${project.slug}`}>
              View project details ↗
            </Link>
          </article>
        ))}
      </section>
    </InteriorPage>
  );
}
