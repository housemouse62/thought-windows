import { useState } from "react";
import "./ImageCarousel.css";

export default function ImageCarousel({ photos, project }) {
  const [activeIndex, setActiveIndex] = useState(0);

  function goToSlide(index) {
    setActiveIndex(index);
  }

  function moveSlide(offset) {
    setActiveIndex((prev) => (prev + offset + photos.length) % photos.length);
  }

  // function startAutoplay() {
  //   intervalRef.current = setInterval(() => moveSlide(1), 4000);
  // }

  // function resetAutoplay() {
  //   clearInterval(intervalRef.current);
  //   startAutoplay();
  // }

  // useEffect(() => {
  //   startAutoplay();
  //   return () => clearInterval(intervalRef.current);
  // }, []);

  return (
    <section
      className="carousel-div"
      aria-label={`${project} image carousel`}
    >
      <div className="carousel">
        <div className="carousel-slides">
          {photos.map((photo, index) => (
            <img
              key={index}
              src={photo}
              className="photo"
              {...(index === activeIndex ? { "data-active": "" } : {})}
              alt={`${project} — image ${index + 1} of ${photos.length}`}
            />
          ))}
        </div>
      </div>

      <div className="carousel-controls">
        <button
          className="carousel-button"
          onClick={() => moveSlide(-1)}
          aria-label="Previous image"
        >
          ← prev
        </button>

        <div className="navdots" role="tablist" aria-label="Image navigation">
          {photos.map((_, index) => (
            <button
              key={index}
              role="tab"
              className="navdot"
              {...(index === activeIndex ? { "data-active": "" } : {})}
              onClick={() => goToSlide(index)}
              aria-label={`Image ${index + 1}`}
              aria-selected={index === activeIndex}
            />
          ))}
        </div>

        <button
          className="carousel-button"
          onClick={() => moveSlide(1)}
          aria-label="Next image"
        >
          next →
        </button>
      </div>
    </section>
  );
}
