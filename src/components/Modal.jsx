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
          {content.narrative && (
            <p className="modal-narrative">{content.narrative}</p>
          )}

          {content.projects && content.projects.length > 0 && (
            <div className="modal-projects">
              {content.projects.map((project) => (
                <div key={project.id}>
                  <div
                    onClick={() => setActiveSubProject(project.id)}
                    className="modal-project"
                  >
                    {project.title}
                  </div>
                  {activeSubProject === project.id && (
                    <div>
                      <p className="project-objective">{project.objective}</p>
                      {<ImageCarousel photos={project.images} />}
                      <button onClick={() => setActiveSubProject(false)}>
                        close project
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
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
