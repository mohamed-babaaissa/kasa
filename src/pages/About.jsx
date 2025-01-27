import React, { useState } from "react";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import aboutBanner from "../assets/images/about-banner.png";

const About = () => {
  const [openCollapses, setOpenCollapses] = useState({});

  const toggleCollapse = (title) => {
    setOpenCollapses((prev) => ({
      ...prev,
      [title]: !prev[title], // Change uniquement l'état de la collapse cliquée
    }));
  };

  return (
    <div>
      <Banner image={aboutBanner} text="" />
      <div className="about-content">
        {[
          { title: "Fiabilité", content: "Les annonces postées sur Kasa garantissent une fiabilité totale." },
          { title: "Respect", content: "La bienveillance fait partie des valeurs fondatrices de Kasa." },
          { title: "Service", content: "Nos équipes se tiennent à votre disposition pour une expérience parfaite." },
          { title: "Sécurité", content: "La sécurité est la priorité de Kasa." },
        ].map((item, index) => (
          <Collapse
            key={index}
            className="about-collapse"
            title={item.title}
            content={item.content}
            isOpen={!!openCollapses[item.title]} // Vérifie si elle est ouverte
            onClick={() => toggleCollapse(item.title)}
          />
        ))}
      </div>
    </div>
  );
};

export default About;




















