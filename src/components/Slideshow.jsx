// Importation des dépendances nécessaires
import React, { useState } from "react"; // Importe React et le hook useState pour gérer l'état local
import "../assets/styles/Slideshow.scss"; // Importe les styles spécifiques au composant Slideshow

// Déclaration du composant fonctionnel Slideshow
const Slideshow = ({ images }) => {
  // État local pour gérer l'index de l'image courante
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fonction pour passer à l'image suivante
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % images.length // Incrémente l'index et revient à 0 après la dernière image
    );
  };

  // Fonction pour revenir à l'image précédente
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1 // Si on est à la première image, on passe à la dernière, sinon on décrémente
    );
  };

  return (
    <div className="slideshow"> {/* Conteneur principal du diaporama */}
      {/* Image courante */}
      <img
        src={images[currentIndex]} // Source de l'image basée sur l'index courant
        alt={`Slide ${currentIndex + 1}`} // Texte alternatif pour l'image avec l'index affiché
        className="slide" // Classe CSS pour appliquer des styles à l'image
      />

      {/* Flèches de navigation */}
      {images.length > 1 && ( // Affiche les flèches uniquement si le diaporama contient plusieurs images
        <>
          <button className="prev" onClick={prevSlide}>
            &#10094; {/* Code HTML pour la flèche gauche */}
          </button>
          <button className="next" onClick={nextSlide}>
            &#10095; {/* Code HTML pour la flèche droite */}
          </button>
        </>
      )}

      {/* Indicateur de numérotation */}
      {images.length > 1 && ( // Affiche la numérotation uniquement s'il y a plus d'une image
        <p className="slide-number">
          {currentIndex + 1} / {images.length} {/* Indique l'image actuelle et le total */}
        </p>
      )}
    </div>
  );
};

// Exportation du composant pour l'utiliser ailleurs
export default Slideshow;


