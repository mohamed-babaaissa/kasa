// Importation des composants et des fichiers nécessaires
import { NavLink, Outlet } from "react-router-dom";
import headerLogo from "../assets/images/LOGO.png";
import footerLogo from "../assets/images/LOGO-footer.svg";

// Déclaration du composant Layout
const Layout = () => {
  return (
    <div className="header-footer-container"> 
      {/* Header */}
      <header>
        <NavLink to="/">
          <img 
            src={`${headerLogo}`} 
            alt="Kasa Logo" 
            className="header-logo" 
          /> 
        </NavLink>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/" 
                className={({ isActive }) => (isActive ? "active" : undefined)} 
              >
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about" 
                className={({ isActive }) => (isActive ? "active" : undefined)} 
              >
                À propos
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      {/* Contenu principal */}
      <main className="main-content">
        <Outlet /> 
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-logo-container">
          <img 
            src={footerLogo}
            alt="Kasa Footer Logo" 
            className="footer-logo" 
          />
        </div>
        <p className="footer-text">© 2020 Kasa. All rights reserved</p>
      </footer>
    </div>
  );
};

export default Layout;





