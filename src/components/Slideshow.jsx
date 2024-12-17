import React, { useState } from "react"; // Importe React et le hook useState pour gérer l'état local
import "../assets/styles/Slideshow.scss"; // Importe les styles spécifiques au composant Slideshow

// Déclaration du composant fonctionnel Slideshow
const Slideshow = ({ images }) => {
  // Déclare un état local pour garder une trace de l'index de l'image courante
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fonction pour passer à l'image suivante
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Incrémente l'index, revient au début après la dernière image
  };

  // Fonction pour revenir à l'image précédente
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1 // Décrémente l'index, revient à la dernière image si on est à la première
    );
  };

  return (
    <div className="slideshow"> {/* Conteneur principal du diaporama */}
      {/* Affiche l'image courante */}
      <img
        src={images[currentIndex]} // Chemin de l'image basée sur l'index actuel
        alt={`Slide ${currentIndex + 1}`} // Texte alternatif pour l'image
        className="slide" // Classe CSS pour appliquer des styles à l'image
      />

      {/* Flèches pour naviguer */}
      {images.length > 1 && ( // Affiche les flèches uniquement s'il y a plus d'une image
        <>
          <button className="prev" onClick={prevSlide}>
            &#10094; {/* Flèche gauche (code HTML pour le caractère) */}
          </button>
          <button className="next" onClick={nextSlide}>
            &#10095; {/* Flèche droite (code HTML pour le caractère) */}
          </button>
        </>
      )}

      {/* Numérotation */}
      {images.length > 1 && ( // Affiche la numérotation uniquement s'il y a plus d'une image
        <p className="slide-number">
          {currentIndex + 1} / {images.length} {/* Indique l'index actuel et le nombre total d'images */}
        </p>
      )}
    </div>
  );
};

export default Slideshow; // Exporte le composant pour qu'il puisse être utilisé dans d'autres fichiers

