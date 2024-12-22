// Importation de React pour pouvoir utiliser les composants fonctionnels
import React from "react";

// Importation des styles spécifiques au composant Banner depuis le fichier SCSS associé
import "../assets/styles/Banner.scss";

// Déclaration du composant fonctionnel Banner
// Ce composant reçoit deux propriétés (props) : "image" et "text"
const Banner = ({ image, text }) => {
  return (
    // Conteneur principal de la bannière
    <div 
      className="banner" // Classe CSS associée à la bannière
      style={{ backgroundImage: `url(${image})` }} // Définition dynamique de l'image d'arrière-plan via les styles inline
    >
      {/* Affichage du texte superposé sur la bannière */}
      <h1>{text}</h1>
    </div>
  );
};

// Exportation du composant pour qu'il puisse être utilisé ailleurs dans l'application
export default Banner;


