"use client";

import React from "react";
import { useMatrixMode } from "@/hooks/useMatrixMode";
import MatrixRain from "./MatrixRain";
import MatrixIndicator from "./MatrixIndicator";

/**
 * Sistema completo del modo Matrix
 * Orquesta la lluvia de Matrix y el indicador
 */
const MatrixSystem: React.FC = () => {
  const { isMatrixMode, toggleMatrixMode } = useMatrixMode();

  return (
    <>
      <MatrixRain isActive={isMatrixMode} />
      <MatrixIndicator
        isMatrixMode={isMatrixMode}
        onToggle={toggleMatrixMode}
      />
    </>
  );
};

export default MatrixSystem;
