import ProjectCard from "./ProjectCard";

export default function ProjectsGrid({ projects }) {
  if (projects.length === 0) {
    return (
      <div className="empty-state" role="status">
        No projects in this category yet.
      </div>
    );
  }

  return (
    <div className="projects-grid" role="list">
      {projects.map((project) => (
        <div key={project.id} role="listitem">
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
}
