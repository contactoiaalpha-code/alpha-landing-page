"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import NeuralBackground from "@/components/ui/NeuralBackground";
import Button from "@/components/ui/Button";
import {
  FaRocket,
  FaChartLine,
  FaBolt,
  FaClock,
  FaBuilding,
} from "react-icons/fa";

const HeroSection: React.FC = () => {
  const [typingText, setTypingText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const words = useMemo(
    () => [
      "Automatización de procesos con IA",
      "Integración de IA en atención al cliente",
      "Optimización de marketing con IA",
      "Análisis de datos predictivo",
      "Flujos de trabajo automatizados",
      "Soluciones IA para PYMES",
    ],
    []
  );

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    let currentIndex = 0;

    const typeInterval = setInterval(() => {
      if (currentIndex <= currentWord.length) {
        setTypingText(currentWord.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentWordIndex, words]);

  // scrollToContact no se usa en este componente

  const openWhatsApp = () => {
    const phone = "529932500548";
    const text = encodeURIComponent(
      "Hola, me interesa una consultoría gratuita de IA para mi negocio. Vengo de la web."
    );
    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects: Red neuronal */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <NeuralBackground className="absolute inset-0 w-full h-full" />
      </div>

      {/* Main Content */}
      <motion.div
        className="container-custom section-padding text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Trust Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 bg-red-500/10 backdrop-blur-md 
                     border border-red-500/30 rounded-full px-6 py-2 mb-8 animate-pulse"
        >
          <FaClock className="text-red-400" />
          <span className="text-red-400 font-medium">
            🔥 ÚLTIMAS 3 PLAZAS para consultoría gratuita esta semana
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-bold mb-6"
        >
          <span className="text-white">Automatizamos tu</span>
          <br />
          <span className="text-gradient">
            negocio con Inteligencia Artificial.
          </span>
        </motion.h1>

        {/* Dynamic Typing Subheadline */}
        <motion.div
          variants={itemVariants}
          className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-6 h-20 flex items-center justify-center"
        >
          <span>Especialistas en </span>
          <span className="text-gold-primary font-semibold ml-2 min-w-[400px] text-left">
            {typingText}
            <span className="animate-pulse">|</span>
          </span>
        </motion.div>

        {/* Value Proposition */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed text-center"
        >
          Ponemos la{" "}
          <span className="text-gold-primary font-semibold">
            IA a trabajar para ti
          </span>
          : automatizamos las tareas repetitivas y operativas para que tu equipo
          <span className="text-gold-primary font-semibold">
            {" "}
            recupere tiempo
          </span>{" "}
          y se concentre en lo que realmente genera valor.
          <br className="hidden md:block" />
          Mientras tu negocio crece con sistemas inteligentes.
        </motion.p>

        {/* Emphasized phrase */}
        <motion.div
          variants={itemVariants}
          className="mt-4 mb-12 text-2xl md:text-3xl font-orbitron text-center"
        >
          <span className="text-gradient">
            Más velocidad, menos errores y procesos que funcionan 24/7
          </span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          <Button
            variant="primary"
            size="lg"
            onClick={openWhatsApp}
            leftIcon={<FaRocket />}
            className="text-lg px-8 py-4 relative"
          >
            Agendar Mi Consultoría GRATIS
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-bounce">
              SOLO HOY
            </span>
          </Button>

          <Button
            variant="secondary"
            size="lg"
            onClick={() =>
              document
                .getElementById("packages")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            leftIcon={<FaChartLine />}
            className="text-lg px-8 py-4"
          >
            Ver Casos de Éxito (2 min)
          </Button>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto"
        >
          {[
            {
              number: "500+",
              label: "Empresas Transformadas",
              icon: FaBuilding,
            },
            { number: "80%", label: "Ahorro de Tiempo", icon: FaClock },
            { number: "300%", label: "ROI Promedio", icon: FaChartLine },
            { number: "24/7", label: "Operación Continua", icon: FaBolt },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="card-glass p-4 md:p-6 text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <stat.icon className="text-gold-primary text-2xl md:text-3xl mx-auto mb-3 md:mb-4" />
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-gold-primary mb-1 md:mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 font-medium text-sm md:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-gold-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gold-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </motion.div>
      </motion.div>

      {/* Sutilezas energéticas */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[60%] h-40 bg-gold-primary/10 blur-3xl rounded-full" />
      </div>
    </section>
  );
};

export default HeroSection;
