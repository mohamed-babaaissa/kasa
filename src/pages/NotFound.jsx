import { Link } from "react-router-dom"; // Importation du composant Link pour la navigation entre les pages.
import "../assets/styles/NotFound.scss"; // Importation du fichier de styles spécifique à la page NotFound.

const NotFound = () => { // Déclaration du composant fonctionnel NotFound.
  return ( // Retourne le contenu du composant.
    <div className="not-found"> {/* Conteneur principal de la page avec une classe CSS pour le styliser. */}
      <h1 className="error-code">404</h1> {/* Affiche le code d'erreur 404. */}
      <p className="error-message">Oups! La page que vous demandez n'existe pas.</p> {/* Message d'erreur pour l'utilisateur. */}
      <Link to="/" className="return-link"> {/* Lien permettant de retourner à la page d'accueil. */}
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
};

export default NotFound; // Exporte le composant pour qu'il puisse être utilisé ailleurs.



