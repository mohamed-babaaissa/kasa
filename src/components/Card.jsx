import { Link } from "react-router-dom"; // Importe le composant Link de React Router pour permettre la navigation entre les pages
import "../assets/styles/Card.scss"; // Importe le fichier de styles spécifique au composant Card

// Déclare le composant fonctionnel Card, qui reçoit trois props : id, title, et cover
const Card = ({ id, title, cover }) => {
  return (
    // Crée un lien cliquable vers la route dynamique associée à une propriété spécifique
    <Link to={`/property/${id}`} className="card">
      {/* Affiche l'image de couverture du logement */}
      <img src={cover} alt={title} className="card-image" />
      {/* Affiche le titre du logement en dessous de l'image */}
      <h2 className="card-title">{title}</h2>
    </Link>
  );
};

// Exporte le composant pour qu'il puisse être importé et utilisé dans d'autres fichiers
export default Card;




