import { NavLink, Outlet } from "react-router-dom"; // Importe les composants NavLink et Outlet de React Router
import headerLogo from "../assets/images/LOGO.png"; // Importe le logo pour le header
import footerLogo from "../assets/images/footer.png"; // Importe le logo pour le footer

const Layout = () => {
  return (
    <div className="header-footer-container"> {/* Conteneur principal pour le header, le contenu et le footer */}
      <header> {/* Définition de l'en-tête du site */}
        <NavLink to="/"> {/* Lien vers la page d'accueil */}
          <img src={`${headerLogo}`} alt="Kasa Logo" className="header-logo" /> {/* Affiche le logo du header */}
        </NavLink>
        <nav> {/* Section de navigation */}
          <ul> {/* Liste non ordonnée des liens */}
            <li> {/* Élément de liste pour le lien vers l'accueil */}
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : undefined)} // Ajoute la classe "active" si la route correspond
              >
                Accueil {/* Texte affiché pour le lien */}
              </NavLink>
            </li>
            <li> {/* Élément de liste pour le lien vers la page À propos */}
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active" : undefined)} // Ajoute la classe "active" si la route correspond
              >
                À propos {/* Texte affiché pour le lien */}
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main className="main-content"> {/* Section principale pour afficher le contenu dynamique */}
        <Outlet /> {/* Affiche le contenu de la route enfant */}
      </main>

      <footer> {/* Définition du pied de page */}
        <img src={footerLogo} alt="Kasa Footer Logo" className="footer-logo" /> {/* Affiche le logo du footer */}
      </footer>
    </div>
  );
};

export default Layout; // Exporte le composant Layout pour qu'il puisse être utilisé dans d'autres fichiers



