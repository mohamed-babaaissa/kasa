// Importation de React pour pouvoir utiliser les composants fonctionnels
import React from "react";

// Importation des styles spécifiques au composant Banner depuis le fichier SCSS associé
import "../assets/styles/Banner.scss";

// Déclaration du composant fonctionnel Banner
// Ce composant reçoit deux propriétés (props) : "image" et "text"
const Banner = ({ image, children }) => {
  return (
    <div 
      className="banner"
      style={{ backgroundImage: `url(${image})` }}
    >
      <h1>{children}</h1> {/* Affiche le texte avec le `<span>` inclus */}
    </div>
  );
};

export default Banner;




