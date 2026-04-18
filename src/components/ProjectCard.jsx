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
    image,
    imageStyle,
    desktopOnly,
  } = project;

  const hasModal = !!modalContent;

  function isMobile() {
    return window.matchMedia("(max-width: 768px)").matches;
  }

  function openDemo(e) {
    if (desktopOnly && isMobile()) {
      const proceed = window.confirm(
        "This project was built for desktop and may not display well on mobile. Open it anyway?"
      );
      if (!proceed) {
        e.preventDefault();
        return false;
      }
    }
    return true;
  }

  function handleCardClick(e) {
    if (e.target.closest("a, button")) return;
    if (demoUrl) {
      if (desktopOnly && isMobile()) {
        const proceed = window.confirm(
          "This project was built for desktop and may not display well on mobile. Open it anyway?"
        );
        if (!proceed) return;
      }
      window.open(demoUrl, "_blank", "noopener,noreferrer");
    } else if (hasModal) {
      setModalOpen(true);
    }
  }

  return (
    <>
      <article
        className={`project-card project-card--${category}${demoUrl || hasModal ? " project-card--clickable" : ""}`}
        aria-labelledby={`card-title-${project.id}`}
        onClick={handleCardClick}
      >
        <div className="card-body">
          <div className="card-top">
            <p className="card-type">{type}</p>
          </div>
          <img
            className="card-title card-image"
            src={`${image}`}
            style={imageStyle}
          />
          {/* <h3 className="card-title" id={`card-title-${project.id}`}>
            {title}
          </h3> */}
          <hr className="card-line"></hr>
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
              onClick={openDemo}
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
              onClick={() => setModalOpen(true)}
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
