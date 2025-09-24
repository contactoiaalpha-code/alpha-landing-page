"use client";

import { useState, useEffect } from "react";

/**
 * Hook personalizado para gestionar el modo Matrix
 * Controla la activación/desactivación del efecto Matrix
 */
export const useMatrixMode = () => {
  const [isMatrixMode, setIsMatrixMode] = useState(false);

  // Aplicar clase CSS al body cuando Matrix mode está activo
  useEffect(() => {
    if (typeof document === "undefined") return;

    if (isMatrixMode) {
      document.body.classList.add("matrix-mode");
    } else {
      document.body.classList.remove("matrix-mode");
    }

    // Cleanup al desmontar el componente
    return () => {
      if (typeof document !== "undefined") {
        document.body.classList.remove("matrix-mode");
      }
    };
  }, [isMatrixMode]);

  const toggleMatrixMode = () => {
    setIsMatrixMode((prev) => !prev);
  };

  return {
    isMatrixMode,
    setIsMatrixMode,
    toggleMatrixMode,
  };
};
