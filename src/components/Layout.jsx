// Importation des composants et des fichiers nécessaires
import { NavLink, Outlet } from "react-router-dom"; // NavLink pour les liens de navigation avec gestion de l'état actif, Outlet pour rendre les routes enfants dynamiquement
import headerLogo from "../assets/images/LOGO.png"; // Logo utilisé dans le header
import footerLogo from "../assets/images/footer.png"; // Logo utilisé dans le footer

// Déclaration du composant Layout
const Layout = () => {
  return (
    // Conteneur global pour le header, le contenu principal et le footer
    <div className="header-footer-container"> 

      {/* Début de la section Header */}
      <header>
        {/* Lien vers la page d'accueil avec le logo */}
        <NavLink to="/"> 
          <img 
            src={`${headerLogo}`} // Source du logo, importée précédemment
            alt="Kasa Logo" // Texte alternatif pour le logo (important pour l'accessibilité)
            className="header-logo" // Classe CSS pour styliser le logo
          /> 
        </NavLink>

        {/* Section de navigation avec des liens */}
        <nav>
          <ul> {/* Liste des liens de navigation */}
            <li> {/* Élément de liste pour le lien vers la page d'accueil */}
              <NavLink
                to="/" // URL de destination
                className={({ isActive }) => (isActive ? "active" : undefined)} 
                // Ajoute la classe "active" si le lien correspond à la route actuelle
              >
                Accueil {/* Texte affiché pour ce lien */}
              </NavLink>
            </li>
            <li> {/* Élément de liste pour le lien vers la page "À propos" */}
              <NavLink
                to="/about" // URL de destination
                className={({ isActive }) => (isActive ? "active" : undefined)} 
                // Ajoute la classe "active" si le lien est actif
              >
                À propos {/* Texte affiché pour ce lien */}
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      {/* Fin de la section Header */}

      {/* Section principale */}
      <main className="main-content">
        <Outlet /> 
        {/* Rend dynamiquement le contenu de la route enfant */}
      </main>

      {/* Début de la section Footer */}
      <footer>
        <img 
          src={footerLogo} // Source du logo pour le footer
          alt="Kasa Footer Logo" // Texte alternatif pour le logo
          className="footer-logo" // Classe CSS pour styliser le logo
        />
      </footer>
      {/* Fin de la section Footer */}
    </div>
  );
};

// Exportation du composant pour l'utiliser dans d'autres parties de l'application
export default Layout;




