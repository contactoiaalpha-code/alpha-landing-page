"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar, FaQuoteLeft, FaLinkedin } from "react-icons/fa";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
  results: string;
  linkedinUrl?: string;
}

const TestimonialsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Carlos Mendoza",
      position: "Director General",
      company: "TechSolutions MX",
      content:
        "Alpha Agency transformó completamente nuestro proceso de atención al cliente. Ahora respondemos el 95% de consultas automáticamente, 24/7. Nuestros clientes están más satisfechos que nunca.",
      rating: 5,
      avatar: "👨‍💼",
      results: "95% automatización + $50K ahorrados/mes",
      linkedinUrl: "#",
    },
    {
      id: 2,
      name: "María García",
      position: "CEO",
      company: "RestaurantChain Plus",
      content:
        "El agente de IA de Alpha maneja todos nuestros pedidos online. Incrementamos las ventas un 280% y eliminamos errores humanos. La implementación fue súper rápida.",
      rating: 5,
      avatar: "👩‍💼",
      results: "280% más ventas + 0% errores",
      linkedinUrl: "#",
    },
    {
      id: 3,
      name: "Roberto Sánchez",
      position: "Founder",
      company: "PropTech Innovations",
      content:
        "Nuestro agente inmobiliario virtual califica leads automáticamente y agenda visitas. Cerramos 3x más ventas con la mitad del esfuerzo. ROI increíble.",
      rating: 5,
      avatar: "👨‍🚀",
      results: "3x más ventas + 50% menos esfuerzo",
      linkedinUrl: "#",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Cambiar cada 5 segundos

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-2">
          ⭐ LO QUE DICEN NUESTROS CLIENTES
        </h3>
        <p className="text-gray-300">
          Resultados reales de empresarios que ya transformaron sus negocios
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-black/30 rounded-xl p-6 border border-gray-700/30"
          >
            <div className="flex items-start space-x-4">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-gold-primary to-yellow-400 rounded-full flex items-center justify-center text-2xl">
                  {testimonials[currentIndex].avatar}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                {/* Quote */}
                <div className="relative mb-4">
                  <FaQuoteLeft className="absolute -top-2 -left-2 text-gold-primary/30 text-xl" />
                  <p className="text-gray-300 leading-relaxed pl-6">
                    &ldquo;{testimonials[currentIndex].content}&rdquo;
                  </p>
                </div>

                {/* Results Badge */}
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3 mb-4">
                  <div className="text-green-400 font-semibold text-sm">
                    📊 RESULTADOS: {testimonials[currentIndex].results}
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-sm" />
                  ))}
                </div>

                {/* Author Info */}
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-white">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {testimonials[currentIndex].position} en{" "}
                      {testimonials[currentIndex].company}
                    </p>
                  </div>

                  {testimonials[currentIndex].linkedinUrl && (
                    <a
                      href={testimonials[currentIndex].linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <FaLinkedin className="text-xl" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Indicators */}
        <div className="flex justify-center space-x-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-gold-primary scale-125"
                  : "bg-gray-600 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Trust indicators */}
      <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-sm text-gray-400">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 bg-green-400 rounded-full"></span>
          <span>Testimonios verificados</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
          <span>Resultados auditados</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
          <span>Clientes activos 2025</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
