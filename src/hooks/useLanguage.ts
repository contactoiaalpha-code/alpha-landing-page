import { useLanguageContext } from "@/contexts/LanguageContext";

/**
 * Hook personalizado para gestionar el idioma
 * Proporciona el idioma actual y función para cambiarlo
 */
export const useLanguage = () => {
  return useLanguageContext();
};
