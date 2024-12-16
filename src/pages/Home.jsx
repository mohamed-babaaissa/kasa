// Importation des bibliothèques React
import React from "react";

// Importation des données JSON contenant les informations sur les logements
import logements from "../data/logements.json";

// Importation des composants personnalisés
import Banner from "../components/Banner"; // Composant pour afficher une bannière avec une image et un texte
import Card from "../components/Card"; // Composant pour afficher une carte de logement

// Importation du fichier de styles spécifique à la page Home
import "../Home.scss";

import backGroundImage from "../assets/Banner.jpeg";

// Déclaration du composant fonctionnel "Home"
const Home = () => {
  return (
    <div>
      {/* Composant Banner */}
      {/* Affiche une bannière avec une image de fond et un texte */}
      <Banner
        image={`${backGroundImage}`} // Chemin vers l'image de la bannière
        text="Chez vous, partout et ailleurs" // Texte superposé sur la bannière
      />

      {/* Grille de cartes */}
      {/* Parcours du tableau "logements" et génération d'une Card pour chaque logement */}
      <div className="cards-container">
        {logements.map((logement) => (
          // Chaque carte est associée à un logement via sa clé unique (logement.id)
          <Card
            key={logement.id} // Clé unique pour React
            id={logement.id} // Passe l'ID pour la route dynamique
            title={logement.title} // Titre du logement
            cover={logement.cover} // Image du logement
          />
        ))}
      </div>
    </div>
  );
};

// Exportation du composant pour qu'il puisse être utilisé ailleurs dans l'application
export default Home;



