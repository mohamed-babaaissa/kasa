import React, { useState } from "react"; // Import de React et du hook useState
import "../assets/styles/Slideshow.scss"; // Import des styles pour le composant

const Slideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % images.length // Passe à l'image suivante ou revient au début
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1 // Passe à l'image précédente ou va à la dernière
    );
  };

  return (
    <div className="slideshow">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="slide"
      />

      {images.length > 1 && (
        <>
          <button className="prev" onClick={prevSlide}>
            &#10094;
          </button>
          <button className="next" onClick={nextSlide}>
            &#10095;
          </button>
        </>
      )}

      {images.length > 1 && (
        <p className="slide-number">
          {currentIndex + 1} / {images.length}
        </p>
      )}
    </div>
  );
};

export default Slideshow;



