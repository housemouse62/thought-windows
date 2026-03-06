import { useState } from "react";
import Modal from "./Modal";

export default function ProjectCard({ project }) {
  const [modalOpen, setModalOpen] = useState(false);
  const {
    type,
    title,
    description,
    stack,
    demoUrl,
    githubUrl,
    modalContent,
    category,
  } = project;

  const hasModal = !!modalContent;

  function handleCardAction(e) {
    e.preventDefault();
    if (hasModal) setModalOpen(true);
  }

  return (
    <>
      <article
        className={`project-card project-card--${category}`}
        aria-labelledby={`card-title-${project.id}`}
      >
        <div className="card-body">
          <p className="card-type">{type}</p>
          <h3 className="card-title" id={`card-title-${project.id}`}>
            {title}
          </h3>
          <p className="card-desc">{description}</p>
          <div className="card-tags" aria-label="Stack / skills">
            {stack.map((tag) => (
              <span key={tag} className="card-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="card-footer">
          {demoUrl && (
            <a
              href={demoUrl}
              className="card-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View live demo of ${title}`}
            >
              Live demo →
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              className="card-link card-link-muted"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${title} on GitHub`}
            >
              GitHub ↗
            </a>
          )}
          {hasModal && (
            <button
              className="card-link card-link-btn"
              onClick={handleCardAction}
              aria-label={`View details for ${title}`}
            >
              View work →
            </button>
          )}
        </div>
      </article>

      {hasModal && modalOpen && (
        <Modal
          title={title}
          content={modalContent}
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  );
}
