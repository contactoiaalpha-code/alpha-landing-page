"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaShieldAlt, FaClock, FaUndoAlt } from "react-icons/fa";

const GuaranteeSection: React.FC = () => {
  const guarantees = [
    {
      icon: <FaShieldAlt className="text-3xl text-green-400" />,
      title: "100% Garantía de Resultados",
      description:
        "Si no ves mejoras en 30 días, te devolvemos el 100% de tu inversión",
    },
    {
      icon: <FaClock className="text-3xl text-blue-400" />,
      title: "Implementación en 14 Días",
      description:
        "Tu sistema estará funcionando en máximo 2 semanas o no pagas",
    },
    {
      icon: <FaUndoAlt className="text-3xl text-purple-400" />,
      title: "Soporte Ilimitado",
      description:
        "6 meses de soporte técnico gratuito para cualquier ajuste o duda",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-xl p-8 mb-8"
    >
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">
          🛡️ GARANTÍAS QUE TE PROTEGEN
        </h3>
        <p className="text-gray-300">
          Tu inversión está 100% protegida. Asumimos todo el riesgo.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {guarantees.map((guarantee, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="text-center p-6 bg-black/20 rounded-lg border border-gray-700/30 hover:border-green-500/30 transition-all duration-300"
          >
            <div className="mb-4 flex justify-center">{guarantee.icon}</div>
            <h4 className="font-semibold text-white mb-2">{guarantee.title}</h4>
            <p className="text-gray-300 text-sm">{guarantee.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-6 py-2">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          <span className="text-green-400 font-medium text-sm">
            Sin compromisos • Sin letra pequeña • Garantía real
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default GuaranteeSection;
