"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaGift, FaWhatsapp } from "react-icons/fa";
import Button from "./Button";

const ExitIntentPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Solo activar si el mouse sale por la parte superior de la ventana
      if (e.clientY <= 0 && !hasTriggered) {
        setIsVisible(true);
        setHasTriggered(true);
      }
    };

    // Delay para evitar que se active inmediatamente
    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 10000); // 10 segundos de delay

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [hasTriggered]);

  const closePopup = () => {
    setIsVisible(false);
  };

  const handleAccept = () => {
    // Redirigir a WhatsApp con mensaje especial
    const phone = "5219992500548";
    const text = encodeURIComponent(
      "🎁 ¡Hola! Vengo por la oferta especial de consultoría gratuita + descuento del 50%. ¡Quiero aprovecharla antes de que expire!"
    );
    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
    closePopup();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
          onClick={closePopup}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-gradient-to-br from-gray-800 via-gray-900 to-black border-2 border-gold-primary shadow-2xl shadow-gold-primary/20 rounded-2xl p-8 max-w-md w-full relative backdrop-blur-md"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <FaTimes className="text-xl" />
            </button>

            {/* Header */}
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-gold-primary to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-gold-primary/50">
                <FaGift className="text-3xl text-black" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-3 drop-shadow-lg">
                ¡ESPERA! 🎁
              </h3>
              <div className="bg-red-600/20 border-2 border-red-500/50 rounded-lg p-3 mb-4 shadow-lg">
                <p className="text-red-300 font-bold text-sm">
                  OFERTA EXCLUSIVA - Solo para visitantes que se van
                </p>
              </div>
            </div>

            {/* Offer */}
            <div className="space-y-4 mb-6">
              <div className="bg-green-600/20 border-2 border-green-500/50 rounded-lg p-4 shadow-lg">
                <h4 className="text-green-300 font-bold mb-3 text-lg">
                  🎯 CONSULTORÍA GRATUITA + 50% DESCUENTO
                </h4>
                <ul className="text-white text-sm space-y-2 font-medium">
                  <li className="flex items-center gap-2">
                    <span className="text-green-400 text-lg">✅</span>
                    Análisis completo de tu negocio GRATIS
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-400 text-lg">✅</span>
                    Estrategia de automatización personalizada
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-400 text-lg">✅</span>
                    50% de descuento en tu primer proyecto
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-400 text-lg">✅</span>
                    Válido solo por las próximas 24 horas
                  </li>
                </ul>
              </div>

              <div className="text-center bg-black/30 rounded-lg p-4 border border-gray-700/50">
                <div className="text-gray-300 line-through text-sm mb-1">
                  Valor normal: $2,500 USD
                </div>
                <div className="text-3xl font-bold text-green-300 drop-shadow-lg">
                  ¡GRATIS + 50% OFF!
                </div>
              </div>
            </div>

            {/* Timer */}
            <div className="bg-red-600/20 border-2 border-red-500/50 rounded-lg p-3 mb-6 text-center shadow-lg">
              <p className="text-red-300 text-sm font-bold">
                ⏰ Esta oferta expira en 24 horas
              </p>
            </div>

            {/* CTAs */}
            <div className="space-y-3">
              <Button
                variant="primary"
                size="lg"
                onClick={handleAccept}
                className="w-full text-lg font-bold py-4 shadow-xl shadow-gold-primary/30 hover:shadow-2xl hover:shadow-gold-primary/40 transition-all duration-300"
                leftIcon={<FaWhatsapp />}
              >
                SÍ, QUIERO MI CONSULTORÍA + 50% OFF
              </Button>
              <button
                onClick={closePopup}
                className="w-full text-gray-300 text-sm hover:text-white transition-colors font-medium"
              >
                No gracias, prefiero pagar el precio completo
              </button>
            </div>

            {/* Social Proof */}
            <div className="mt-4 text-center bg-blue-600/20 border border-blue-500/30 rounded-lg p-3">
              <p className="text-blue-300 text-sm font-medium">
                🏆 Más de 500+ empresas ya aprovecharon esta oferta
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExitIntentPopup;
