"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

// Definir los tipos de idioma disponibles
type Language = "es" | "en";

// Interfaz para el contexto
interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
}

// Crear el contexto
const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// Proveedor del contexto
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("es");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useLanguageContext = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguageContext must be used within a LanguageProvider");
  }
  return context;
};
