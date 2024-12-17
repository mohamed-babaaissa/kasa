// Importation de React pour utiliser les fonctionnalités de React
import React from "react";

// Importation des styles spécifiques pour le composant Banner depuis le fichier SCSS
import "../assets/styles/Banner.scss";

// Déclaration du composant fonctionnel "Banner"
// Il accepte deux props : "image" (lien de l'image en arrière-plan) et "text" (texte affiché dans la bannière)
const Banner = ({ image, text }) => {
  return (
    // La div principale de la bannière
    // "style" est utilisé pour définir dynamiquement l'image d'arrière-plan via "backgroundImage"
    <div className="banner" style={{ backgroundImage: `url(${image})` }}>
      {/* Le titre ou le texte qui sera affiché au-dessus de l'image */}
      <h1>{text}</h1>
    </div>
  );
};

// Exportation du composant pour qu'il puisse être utilisé dans d'autres fichiers
export default Banner;

