import { useState, useEffect, useRef } from "react";
import "./ImageCarousel.css";

export default function ImageCarousel({ photos }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);

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
    <section aria-label="Photography Portfolio">
      <div
        className="carousel"
        onMouseEnter={() => clearInterval(intervalRef.current)}
        // onMouseLeave={() => startAutoplay()}
      >
        <button
          className="carousel-button prev"
          onClick={() => {
            moveSlide(-1);
            // resetAutoplay();
          }}
        >
          &#10232;
        </button>
        <button
          className="carousel-button next"
          onClick={() => {
            moveSlide(1);
            // resetAutoplay();
          }}
        >
          &#10233;
        </button>

        <div className="carousel-slides">
          {photos.map((photo, index) => (
            <img
              key={index}
              src={photo}
              className="photo"
              {...(index === activeIndex ? { "data-active": "" } : {})}
              alt={`Slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="navdots">
          {photos.map((_, index) => (
            <div
              key={index}
              className="navdot"
              {...(index === activeIndex ? { "data-active": "" } : {})}
              onClick={() => {
                goToSlide(index);
                // resetAutoplay();
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
