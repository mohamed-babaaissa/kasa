// Importation des bibliothèques React, notamment useState pour gérer l'état local
import React, { useState } from "react"; 

// Importation des composants personnalisés
import Banner from "../components/Banner"; // Composant pour afficher une bannière
import Collapse from "../components/Collapse"; // Composant pour afficher des sections pliables

// Importation de l'image utilisée dans la bannière
import aboutBanner from "../assets/images/about-banner.png";

// Déclaration du composant fonctionnel "About"
const About = () => {
  // État local pour gérer la collapse actuellement ouverte
  const [openCollapse, setOpenCollapse] = useState(null);

  // Fonction pour gérer l'ouverture/fermeture d'une collapse spécifique
  const toggleCollapse = (title) => {
    // Si la collapse cliquée est déjà ouverte, on la ferme. Sinon, on l'ouvre.
    setOpenCollapse((prevState) => (prevState === title ? null : title));
  };

  return (
    <div>
      {/* Composant Banner */}
      {/* Affiche une bannière avec une image en fond et aucun texte */}
      <Banner image={`${aboutBanner}`} text="" />

      {/* Contenu de la page "À propos" */}
      <div className="about-content">
        {/* Section collapsable pour "Fiabilité" */}
        <div>
          <Collapse
            className="about-collapse"
            title="Fiabilité" // Titre de la section
            content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes à la réalité, et toutes les informations sont régulièrement vérifiées par nos équipes." // Contenu de la section
            isOpen={openCollapse === "Fiabilité"} // Vérifie si cette section est ouverte
            onClick={() => toggleCollapse("Fiabilité")} // Gère l'ouverture/fermeture
          />
        </div>

        {/* Section collapsable pour "Respect" */}
        <div>
          <Collapse
            className="about-collapse"
            title="Respect"
            content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
            isOpen={openCollapse === "Respect"}
            onClick={() => toggleCollapse("Respect")}
          />
        </div>

        {/* Section collapsable pour "Service" */}
        <div>
          <Collapse
            className="about-collapse"
            title="Service"
            content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
            isOpen={openCollapse === "Service"}
            onClick={() => toggleCollapse("Service")}
          />
        </div>

        {/* Section collapsable pour "Sécurité" */}
        <div>
          <Collapse
            className="about-collapse"
            title="Sécurité"
            content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services."
            isOpen={openCollapse === "Sécurité"}
            onClick={() => toggleCollapse("Sécurité")}
          />
        </div>
      </div>
    </div>
  );
};

// Exportation du composant pour qu'il puisse être utilisé dans d'autres parties de l'application
export default About;





