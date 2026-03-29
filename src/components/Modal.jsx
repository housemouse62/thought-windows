import { useEffect, useRef, useState } from "react";
import ImageCarousel from "./ImageCarousel";

export default function Modal({ title, content, onClose }) {
  const closeRef = useRef(null);
  const [activeSubProject, setActiveSubProject] = useState(null);

  // Focus the close button on open, restore focus on close
  useEffect(() => {
    closeRef.current?.focus();
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal">
        <div className="modal-header">
          <h2 className="modal-title" id="modal-title">
            {title}
          </h2>
          <button
            ref={closeRef}
            className="modal-close"
            onClick={onClose}
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        <div className="modal-body">
          {content.narrative && !activeSubProject && (
            <p className="modal-narrative">{content.narrative}</p>
          )}

          {content.projects && content.projects.length > 0 && (
            <>
              {/* All project title buttons rendered together */}
              <div className="modal-projects">
                {content.projects.map((project) => (
                  <button
                    key={project.id}
                    className={`modal-project-button ${activeSubProject === project.id ? "project-active" : ""}`}
                    onClick={() =>
                      setActiveSubProject(
                        activeSubProject === project.id ? null : project.id,
                      )
                    }
                    aria-expanded={activeSubProject === project.id}
                    aria-controls={`project-detail-${project.id}`}
                  >
                    {project.title}
                  </button>
                ))}
              </div>

              {/* Detail panels — always in the DOM so CSS transitions work on open and close */}
              {content.projects.map((project) => {
                const isOpen = activeSubProject === project.id;
                return (
                  <div
                    key={project.id}
                    id={`project-detail-${project.id}`}
                    className={`project-information${isOpen ? " project-information--open" : ""}`}
                    aria-hidden={!isOpen}
                  >
                    <p className="project-objective">{project.objective}</p>
                    <ImageCarousel
                      photos={project.images}
                      project={project.title}
                    />
                  </div>
                );
              })}
            </>
          )}

          {!content.narrative &&
            (!content.projects || content.projects.length === 0) && (
              <p className="modal-placeholder">Assets coming soon.</p>
            )}
        </div>
      </div>
    </div>
  );
}
