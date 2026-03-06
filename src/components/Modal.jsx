import { useEffect, useRef } from 'react';

export default function Modal({ title, content, onClose }) {
  const closeRef = useRef(null);

  // Focus the close button on open, restore focus on close
  useEffect(() => {
    closeRef.current?.focus();
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="modal">
        <div className="modal-header">
          <h2 className="modal-title" id="modal-title">{title}</h2>
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

          {content.images && content.images.length > 0 && (
            <div className="modal-images">
              {content.images.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`${title} — sample ${i + 1}`}
                  className="modal-image"
                />
              ))}
            </div>
          )}

          {(!content.narrative && (!content.images || content.images.length === 0)) && (
            <p className="modal-placeholder">Assets coming soon.</p>
          )}
        </div>
      </div>
    </div>
  );
}
