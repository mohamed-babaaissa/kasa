// src/contexts/CollapseContext.js
import React, { createContext, useContext, useState } from "react";

const CollapseContext = createContext();

// Provider pour gérer les collapses
export const CollapseProvider = ({ children }) => {
  const [openCollapses, setOpenCollapses] = useState({});

  // Fonction pour basculer l'état d'une collapse
  const toggleCollapse = (collapseName) => {
    setOpenCollapses((prev) => ({
      ...prev,
      [collapseName]: !prev[collapseName], // Inverse l'état de la collapse cliquée
    }));
  };

  return (
    <CollapseContext.Provider value={{ openCollapses, toggleCollapse }}>
      {children}
    </CollapseContext.Provider>
  );
};

// Hook personnalisé pour accéder au contexte
export const useCollapse = () => useContext(CollapseContext);

