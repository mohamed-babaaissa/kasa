import React from "react";
import logements from "../data/logements.json";
import Banner from "../components/Banner"; // Composant pour la bannière avec image et texte
import Card from "../components/Card"; // Composant pour les cartes des logements
import "../assets/styles/Home.scss";
import backGroundImage from "../assets/images/Banner.jpeg";

const Home = () => {
  return (
    <div>
      {/* Bannière avec image de fond et texte */}
      <Banner image={backGroundImage}>
  Chez vous,<span className="banner-break"> partout et ailleurs</span>
</Banner>


      {/* Grille dynamique des cartes des logements */}
      <div className="cards-container">
        {logements.map((logement) => (
          <Card
            key={logement.id} // Identifiant unique requis pour React
            id={logement.id} // Pour les routes dynamiques
            title={logement.title} // Titre du logement
            cover={logement.cover} // Image du logement
          />
        ))}
      </div>
    </div>
  );
};

// Exportation du composant
export default Home;






