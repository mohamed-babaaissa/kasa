import { Link } from "react-router-dom"; // Importation du composant Link pour la navigation.
import "../assets/styles/NotFound.scss"; // Importation des styles pour la page NotFound.

const NotFound = () => {
  return (
    <div className="not-found">
      <h1 className="error-code">404</h1>
      <p className="error-message">Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="return-link">Retourner sur la page d'accueil</Link>
    </div>
  );
};

export default NotFound; // Export du composant.




