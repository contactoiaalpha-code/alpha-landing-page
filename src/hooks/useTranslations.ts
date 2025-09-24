import { useMemo } from "react";
import { useLanguage } from "./useLanguage";
import { translations } from "@/lib/translations";

/**
 * Hook personalizado para acceder a las traducciones
 * Proporciona función 't' para obtener textos traducidos
 */
export const useTranslations = () => {
  const { language } = useLanguage();

  // Función para acceder a traducciones anidadas usando notación de puntos
  const t = useMemo(() => {
    return (key: string): string | string[] | Record<string, unknown> => {
      const keys = key.split(".");
      let value: unknown = translations[language] as unknown;
      
      for (const k of keys) {
        if (value && typeof value === "object" && k in (value as Record<string, unknown>)) {
          value = (value as Record<string, unknown>)[k];
        } else {
          // Fallback a español si no encuentra la traducción
          let fallbackValue: unknown = translations.es as unknown;
          for (const fallbackK of keys) {
            if (
              fallbackValue &&
              typeof fallbackValue === "object" &&
              fallbackK in (fallbackValue as Record<string, unknown>)
            ) {
              fallbackValue = (fallbackValue as Record<string, unknown>)[fallbackK];
            } else {
              return key; // Retorna la clave si no encuentra traducción
            }
          }
          return fallbackValue as string | string[] | Record<string, unknown>;
        }
      }
      return value as string | string[] | Record<string, unknown>;
    };
  }, [language]);

  return { t, language };
};
