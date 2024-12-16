import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
// Importe les composants nécessaires de React Router pour gérer le routage.

import Layout from "./components/Layout"; // Importe le composant Layout, qui inclut le header, le footer, et le conteneur principal.
import Home from "./pages/Home"; // Importe la page d'accueil.
import About from "./pages/About"; // Importe la page "À propos".
import NotFound from "./pages/NotFound"; // Importe la page 404 pour les routes inexistantes.
import Property from "./pages/Property"; // Importe le composant pour afficher les propriétés.

const AppRouter = () => {
  return (
    <Router> {/* Enveloppe principale qui permet de configurer le routage de l'application */}
      <Routes> {/* Conteneur pour définir toutes les routes de l'application */}
        {/* Route principale avec le composant Layout */}
        <Route path="/" element={<Layout />}> 
          <Route index element={<Home />} /> {/* Route par défaut (index) affichant la page Home */}
          <Route path="about" element={<About />} /> {/* Route pour la page "À propos" */}
          <Route path="property/:id" element={<Property />} /> {/* Route dynamique pour afficher une propriété spécifique */}
          <Route path="*" element={<NotFound />} /> {/* Route pour gérer les chemins inexistants, menant à la page 404 */}
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter; // Exporte le composant AppRouter pour qu'il soit utilisé dans l'application.





