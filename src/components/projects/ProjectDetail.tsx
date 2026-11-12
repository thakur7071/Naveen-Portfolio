import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import InteriorPage from "@/components/layout/InteriorPage";

export default function ProjectDetail({ slug }: { slug: string }) {
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <InteriorPage eyebrow={`PROJECT ${project.number} / SELECTED WORK`} title={project.title}>
      <p className="project-detail-description">{project.description}</p>
      <div className="project-detail-grid">
        <section className="project-detail-panel">
          <p className="detail-eyebrow">OVERVIEW</p>
          <h2>What I built</h2>
          <p>{project.description}</p>
          <div className="project-placeholder">
            <span>PROJECT PREVIEW</span>
            <strong>{project.title}</strong>
            <small>Screenshot can be added here</small>
          </div>
        </section>
        <section className="project-detail-panel">
          <p className="detail-eyebrow">HIGHLIGHTS</p>
          <h2>Key features</h2>
          <ul className="detail-feature-list">
            {project.features.map((feature) => <li key={feature}>{feature}</li>)}
          </ul>
          <p className="detail-eyebrow tech-eyebrow">BUILT WITH</p>
          <div className="project-tech">
            {project.technologies.map((tech) => <span key={tech}>{tech}</span>)}
          </div>
        </section>
      </div>
      <div className="project-detail-actions">
        {project.githubUrl ? <a className="detail-link" href={project.githubUrl} target="_blank" rel="noreferrer">View GitHub ↗</a> : <span className="detail-link muted-link">GitHub link not added yet</span>}
        {project.liveUrl ? <a className="detail-link" href={project.liveUrl} target="_blank" rel="noreferrer">Live Demo ↗</a> : <span className="detail-link muted-link">Live demo not added yet</span>}
        <Link className="detail-link" href="/">Back to Terminal ←</Link>
      </div>
    </InteriorPage>
  );
}
