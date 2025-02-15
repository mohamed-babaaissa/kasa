import React, { useState } from "react";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import aboutBanner from "../assets/images/about-banner.png";

const About = () => {
  // État stockant l'état de chaque collapse (ouverte ou fermée)
  const [openCollapses, setOpenCollapses] = useState({});

  // Fonction pour ouvrir/fermer une collapse spécifique
  const toggleCollapse = (title) => {
    setOpenCollapses((prevState) => ({
      ...prevState,
      [title]: !prevState[title], // Inverse l'état de la collapse spécifique
    }));
  };

  return (
    <div>
      <Banner image={aboutBanner} text="" />
      <div className="about-content">
        {/* Section collapsable pour "Fiabilité" */}
        <Collapse
          className="about-collapse"
          title="Fiabilité"
          content="Les annonces postées sur Kasa garantissent une fiabilité totale..."
          isOpen={!!openCollapses["Fiabilité"]}
          onClick={() => toggleCollapse("Fiabilité")}
        />

        {/* Section collapsable pour "Respect" */}
        <Collapse
          className="about-collapse"
          title="Respect"
          content="Nous prônons le respect entre hôtes et voyageurs..."
          isOpen={!!openCollapses["Respect"]}
          onClick={() => toggleCollapse("Respect")}
        />

        {/* Section collapsable pour "Service" */}
        <Collapse
          className="about-collapse"
          title="Service"
          content="Nos équipes se tiennent à votre disposition..."
          isOpen={!!openCollapses["Service"]}
          onClick={() => toggleCollapse("Service")}
        />

        {/* Section collapsable pour "Sécurité" */}
        <Collapse
          className="about-collapse"
          title="Sécurité"
          content="La sécurité est la priorité de Kasa..."
          isOpen={!!openCollapses["Sécurité"]}
          onClick={() => toggleCollapse("Sécurité")}
        />
      </div>
    </div>
  );
};

export default About;