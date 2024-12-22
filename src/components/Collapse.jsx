// Importation de React pour utiliser le composant fonctionnel
import React from "react";

// Importation du fichier de styles SCSS pour styliser le composant
import "../assets/styles/Collapse.scss";

// Déclaration du composant fonctionnel "Collapse"
const Collapse = ({ className, title, content, isOpen, onClick }) => {
  // Le composant accepte plusieurs props :
  // - className : Classe CSS supplémentaire pour personnaliser le composant
  // - title : Titre affiché dans l'en-tête du collapse
  // - content : Contenu à afficher dans la partie développée
  // - isOpen : Indique si le collapse est ouvert ou non
  // - onClick : Fonction de gestion de clic pour ouvrir/fermer le collapse

  return (
    <div 
      className={`collapse ${className} ${isOpen ? "open" : ""}`} 
      // Ajoute des classes dynamiques : "open" si le collapse est ouvert
    >
      {/* En-tête du collapse */}
      <div 
        className="collapse-header" 
        onClick={onClick} 
        // Appelle la fonction `onClick` lorsqu'on clique sur l'en-tête
      >
        <h2>{title}</h2> 
        {/* Titre du collapse, passé en prop */}
        
        {/* Flèche pour indiquer l'état ouvert/fermé */}
        <span className={`arrow ${isOpen ? "open" : ""}`}>
          &#9660; {/* Code HTML pour afficher une flèche vers le bas */}
        </span>
      </div>

      {/* Contenu du collapse */}
      <div className={`collapse-content ${isOpen ? "open" : ""}`}>
        {/* Ajoute la classe "open" au contenu si le collapse est ouvert */}
        {content} 
        {/* Affiche le contenu passé en prop */}
      </div>
    </div>
  );
};

// Exportation du composant pour qu'il puisse être utilisé ailleurs
export default Collapse;

























