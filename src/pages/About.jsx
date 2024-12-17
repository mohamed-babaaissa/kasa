import React, { useState } from "react"; // Importation de useState
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import aboutBanner from "../assets/images/about-banner.png";

const About = () => {
  // État pour suivre la collapse ouverte
  const [openCollapse, setOpenCollapse] = useState(null);

  // Fonction pour gérer l'ouverture/fermeture
  const toggleCollapse = (title) => {
    setOpenCollapse((prevState) => (prevState === title ? null : title));
  };

  return (
    <div>
      <Banner image={`${aboutBanner}`} text="" />

      <div className="about-content">
        <div>
        <Collapse
        className="about-collapse"
          title="Fiabilité"
          content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes à la réalité, et toutes les informations sont régulièrement vérifiées par nos équipes."
          isOpen={openCollapse === "Fiabilité"}
          onClick={() => toggleCollapse("Fiabilité")}
        /> 
        </div>
        <div>
        <Collapse
        className="about-collapse"
          title="Respect"
          content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          isOpen={openCollapse === "Respect"}
          onClick={() => toggleCollapse("Respect")}
        />
        </div>
        <div>
        <Collapse
        className="about-collapse"
          title="Service"
          content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
          isOpen={openCollapse === "Service"}
          onClick={() => toggleCollapse("Service")}
        />
        </div>
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

export default About;




