import React, { useState } from "react"; // Importation des modules nécessaires de React.
import { useParams, Navigate } from "react-router-dom"; // Importation des hooks React Router pour obtenir les paramètres d'URL et rediriger.
import logements from "../data/logements.json"; // Importation des données des logements depuis un fichier JSON local.
import Slideshow from "../components/Slideshow"; // Importation du composant Slideshow.
import Collapse from "../components/Collapse"; // Importation du composant Collapse.
import "../assets/styles/Property.scss"; // Importation des styles spécifiques au composant Property.

const Property = () => { // Déclaration d'un composant fonctionnel nommé Property.
  const { id } = useParams(); // Récupère l'ID du logement depuis les paramètres de l'URL.

  // État pour suivre la collapse ouverte
  const [openCollapse, setOpenCollapse] = useState(null); // Utilisation de useState pour gérer l'état de la collapse ouverte.

  // Fonction pour ouvrir/fermer une collapse spécifique
  const toggleCollapse = (collapseName) => { // Fonction pour basculer l'ouverture d'une collapse.
    setOpenCollapse((prev) => (prev === collapseName ? null : collapseName)); // Si la collapse est déjà ouverte, on la ferme. Sinon, on l'ouvre.
  };

  const logement = logements.find((logement) => logement.id === id); // Recherche le logement correspondant à l'ID dans les données JSON.

  if (!logement) { // Si aucun logement correspondant n'est trouvé...
    return <Navigate to="/notfound" replace />; // Redirige vers une page Not Found.
  }

  // Déstructure les données du logement pour un accès plus facile.
  const { title, location, tags, host, rating, pictures, description, equipments } = logement;

  return ( // Rend le contenu du composant.
    <div className="property"> {/* Conteneur principal du composant avec une classe CSS. */}
      <Slideshow images={pictures} /> {/* Affiche un diaporama des images du logement. */}

      <div className="property-header"> {/* Section pour l'en-tête du logement. */}
        <div className="property-details"> {/* Informations principales sur le logement. */}
          <h1 className="property-title">{title}</h1> {/* Titre du logement. */}
          <p className="property-location">{location}</p> {/* Localisation du logement. */}
          <div className="property-tags"> {/* Affichage des tags du logement. */}
            {tags.map((tag, index) => ( // Parcourt la liste des tags pour les afficher.
              <span key={index} className="tag"> {/* Chaque tag est affiché dans un span. */}
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="property-owner"> {/* Informations sur le propriétaire. */}
          <div className="owner-info"> {/* Section contenant le nom et la photo du propriétaire. */}
            <p className="owner-name">{host.name}</p> {/* Nom du propriétaire. */}
            <img src={host.picture} alt={host.name} className="owner-picture" /> {/* Photo du propriétaire. */}
          </div>
          <div className="property-rating"> {/* Affichage de la note sous forme d'étoiles. */}
            {[...Array(5)].map((_, index) => ( // Génère 5 étoiles dynamiquement.
              <span key={index} className={`star ${index < rating ? "" : "star-empty"}`}> {/* Si l'index est inférieur à la note, affiche une étoile pleine. */}
                &#9733; {/* Caractère pour une étoile. */}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="property-collapse"> {/* Section contenant les collapses. */}
        {/* Collapse pour la description */}
        <div>
        <Collapse
          className="description-collapse" // Classe spécifique à la collapse de description.
          title="Description" // Titre affiché pour la collapse.
          content={description} // Contenu de la collapse, ici la description du logement.
          isOpen={openCollapse === "description"} // Vérifie si cette collapse est ouverte.
          onClick={() => toggleCollapse("description")} // Gère l'ouverture/fermeture de cette collapse.
        />
        </div>

        <div>
        {/* Collapse pour les équipements */}
        <Collapse
          className="equipments-collapse" // Classe spécifique à la collapse des équipements.
          title="Équipements" // Titre affiché pour la collapse.
          content={ // Contenu de la collapse, ici une liste d'équipements.
            <ul>
              {equipments.map((item, index) => ( // Parcourt la liste des équipements.
                <li key={index}>{item}</li> // Affiche chaque équipement dans un élément de liste.
              ))}
            </ul>
          }
          isOpen={openCollapse === "equipments"} // Vérifie si cette collapse est ouverte.
          onClick={() => toggleCollapse("equipments")} // Gère l'ouverture/fermeture de cette collapse.
        />
        </div>
      </div>
    </div>
  );
};

export default Property; // Exporte le composant pour qu'il puisse être utilisé ailleurs.






















