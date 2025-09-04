"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPlay,
  FaExpand,
  FaLightbulb,
  FaCog,
  FaRocket,
  FaCheckCircle,
} from "react-icons/fa";

const VideoSection: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const processSteps = [
    {
      icon: <FaLightbulb className="text-3xl" />,
      title: "Descubrimiento",
      description:
        "Analizamos tu negocio y identificamos oportunidades de automatización",
      duration: "1-2 días",
    },
    {
      icon: <FaCog className="text-3xl" />,
      title: "Configuración",
      description: "Implementamos los agentes de IA y workflows personalizados",
      duration: "3-5 días",
    },
    {
      icon: <FaRocket className="text-3xl" />,
      title: "Lanzamiento",
      description: "Activamos la automatización y monitoreamos el rendimiento",
      duration: "1 día",
    },
    {
      icon: <FaCheckCircle className="text-3xl" />,
      title: "Optimización",
      description: "Ajustamos y mejoramos basándonos en los resultados",
      duration: "Continuo",
    },
  ];

  const handlePlayVideo = () => {
    setShowModal(true);
  };

  return (
    <section className="section-padding bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="container-custom">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-white mb-6">
            Descubre Nuestro{" "}
            <span className="text-gradient">Proceso Exclusivo</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            En solo 7 días transformamos tu negocio con IA.{" "}
            <span className="text-gold-primary font-semibold">
              Mira cómo lo hacemos paso a paso.
            </span>
          </p>
        </motion.div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="relative group">
            {/* Video Thumbnail */}
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-black border-2 border-gold-primary/20 shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-gray-800 via-gray-900 to-black flex items-center justify-center">
                {/* Placeholder for video - you can replace with actual video */}
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-gold-primary to-yellow-400 rounded-full flex items-center justify-center shadow-2xl shadow-gold-primary/50">
                    <FaPlay className="text-4xl text-black" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Proceso Alpha Agency
                  </h3>
                  <p className="text-gray-300">
                    Descubre cómo automatizamos tu negocio en 7 días
                  </p>
                </div>
              </div>

              {/* Play Button Overlay */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePlayVideo}
                className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/20 transition-all duration-300 group-hover:bg-black/30"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-gold-primary to-yellow-400 rounded-full flex items-center justify-center shadow-2xl shadow-gold-primary/50 group-hover:shadow-gold-primary/70 transition-all duration-300">
                  <FaPlay className="text-3xl text-black ml-2" />
                </div>
              </motion.button>

              {/* Video Controls */}
              <div className="absolute bottom-4 right-4 flex space-x-3">
                <button className="p-3 bg-black/60 hover:bg-black/80 rounded-full text-white transition-all duration-300">
                  <FaExpand className="text-lg" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Process Steps Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-6xl mx-auto"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Nuestro Proceso en{" "}
            <span className="text-gold-primary">4 Pasos</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="relative"
              >
                {/* Timeline Connector */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-gold-primary to-transparent transform -translate-y-1/2 z-0" />
                )}

                {/* Step Card */}
                <div className="relative z-10 bg-gradient-to-br from-gray-900/80 to-black/60 border border-gold-primary/20 rounded-xl p-6 text-center hover:border-gold-primary/40 hover:shadow-xl hover:shadow-gold-primary/20 transition-all duration-300 group">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-gold-primary to-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-sm shadow-lg">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-gray-800 to-gray-700 rounded-full flex items-center justify-center text-gold-primary group-hover:text-yellow-400 transition-all duration-300">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h4 className="text-xl font-bold text-white mb-3">
                    {step.title}
                  </h4>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Duration Badge */}
                  <div className="inline-flex items-center px-3 py-1 bg-gold-primary/20 border border-gold-primary/30 rounded-full">
                    <span className="text-gold-primary text-xs font-medium">
                      ⏱️ {step.duration}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-gold-primary/10 to-yellow-500/10 border border-gold-primary/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Listo para Transformar tu Negocio?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Agenda una consultoría gratuita y descubre exactamente cómo
              podemos automatizar tu empresa en solo 7 días.
            </p>
            <button
              onClick={() =>
                document
                  .getElementById("contact-form")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="font-semibold rounded-xl transition-all duration-300 select-none px-8 py-4 text-lg bg-gold-primary text-black-primary hover:bg-gold-secondary hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
            >
              Agendar Consultoría Gratuita
            </button>
          </div>
        </motion.div>
      </div>

      {/* Video Modal */}
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
          onClick={() => setShowModal(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute -top-12 right-0 text-white hover:text-gold-primary transition-colors text-2xl"
            >
              ✕
            </button>

            {/* Video Container */}
            <div className="aspect-video bg-black rounded-xl overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-gold-primary to-yellow-400 rounded-full flex items-center justify-center">
                    <FaPlay className="text-4xl text-black" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Video del Proceso</h3>
                  <p className="text-gray-300">
                    Aquí puedes integrar tu video de YouTube o Vimeo
                  </p>
                  <p className="text-sm text-gray-400 mt-2">
                    Ejemplo: &lt;iframe
                    src=&quot;https://www.youtube.com/embed/TU_VIDEO_ID&quot;&gt;
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default VideoSection;
