export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card__content">
        <p className="project-tag">{project.type}</p>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
      <div className="project-card__footer">
        <a href={project.link} target="_blank" rel="noreferrer" className="button tertiary">
          View Project
        </a>
      </div>
    </article>
  );
}
