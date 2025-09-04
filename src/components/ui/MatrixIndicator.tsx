"use client";

import React from "react";
import { motion } from "framer-motion";

interface MatrixIndicatorProps {
  isMatrixMode: boolean;
  onToggle: () => void;
}

/**
 * Indicador visual del modo Matrix con botón para activar/desactivar
 * Aparece en la esquina inferior derecha
 */
const MatrixIndicator: React.FC<MatrixIndicatorProps> = ({
  isMatrixMode,
  onToggle,
}) => {
  return (
    <motion.div
      className="fixed bottom-6 right-6 z-[9999]"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, type: "spring" }}
    >
      <motion.button
        onClick={onToggle}
        className={`relative p-4 rounded-full backdrop-blur-sm border-2 transition-all duration-300 ${
          isMatrixMode
            ? "bg-green-500/20 border-green-400 text-green-400 shadow-lg shadow-green-500/25"
            : "bg-black/20 border-gold-primary/30 text-gold-primary hover:border-gold-primary"
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title={isMatrixMode ? "Desactivar Matrix Mode" : "Activar Matrix Mode"}
      >
        <motion.div
          animate={{
            rotate: isMatrixMode ? 360 : 0,
          }}
          transition={{ duration: 0.5 }}
          className="w-6 h-6 flex items-center justify-center font-mono font-bold text-lg"
        >
          {isMatrixMode ? "⟡" : "◉"}
        </motion.div>

        {/* Efecto de pulso cuando está activo */}
        {isMatrixMode && (
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-green-400"
            animate={{
              scale: [1, 1.5],
              opacity: [0.5, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        )}
      </motion.button>

      {/* Tooltip */}
      <motion.div
        className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-black/80 text-white text-sm rounded-lg whitespace-nowrap"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3 }}
      >
        {isMatrixMode ? "Matrix Mode ON" : "Matrix Mode"}
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/80" />
      </motion.div>
    </motion.div>
  );
};

export default MatrixIndicator;
