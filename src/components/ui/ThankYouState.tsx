"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaCheck, FaWhatsapp, FaEnvelopeOpen, FaLinkedin, FaRocket, FaClock, FaUserTie, FaChartLine } from "react-icons/fa";

interface ThankYouStateProps {
  formData: {
    name: string;
    email: string;
    company: string;
  };
}

const ThankYouState: React.FC<ThankYouStateProps> = ({ formData }) => {
  const nextSteps = [
    {
      icon: <FaClock className="text-2xl" />,
      title: "En 2 Horas",
      description: "Nuestro equipo se pondrá en contacto contigo",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <FaUserTie className="text-2xl" />,
      title: "Consultoría Personalizada",
      description: "Análisis completo de tu negocio y desafíos",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <FaChartLine className="text-2xl" />,
      title: "Propuesta Detallada",
      description: "Roadmap de implementación con ROI estimado",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="contact-form" className="section-padding bg-gradient-to-br from-black-soft/50 via-gray-900/30 to-black-soft/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="max-w-4xl mx-auto"
        >
          {/* Success Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-12"
          >
            <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/30">
              <FaCheck className="text-6xl text-white" />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-orbitron font-bold text-white mb-6">
              ¡Consultoría{" "}
              <span className="text-gradient">Agendada!</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Perfecto,{" "}
              <span className="text-gold-primary font-bold text-2xl">
                {formData.name}
              </span>
              . Hemos recibido tu solicitud y nuestro equipo de expertos se pondrá en contacto contigo{" "}
              <span className="text-green-400 font-semibold">
                en las próximas 2 horas.
              </span>
            </p>
          </motion.div>

          {/* What You'll Get */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              Lo que recibirás en tu consultoría:
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: "🎯",
                  title: "Análisis Personalizado",
                  description: "Evaluación completa de tu negocio y oportunidades de automatización"
                },
                {
                  icon: "🚀",
                  title: "Propuesta Custom",
                  description: "Solución de IA adaptada específicamente a tus necesidades"
                },
                {
                  icon: "📊",
                  title: "ROI Estimado",
                  description: "Proyección detallada de retorno de inversión y timeline"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/80 to-black/60 border border-gold-primary/20 rounded-xl p-6 text-center hover:border-gold-primary/40 hover:shadow-xl hover:shadow-gold-primary/20 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Next Steps Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              Próximos pasos:
            </h2>
            
            <div className="space-y-6">
              {nextSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="flex items-center space-x-6 p-6 bg-gradient-to-br from-gray-900/60 to-black/40 border border-gray-700/30 rounded-xl hover:border-gold-primary/30 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white shadow-lg flex-shrink-0`}>
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                  <div className="text-3xl text-gray-600">→</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Options */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6">
              ¿No puedes esperar? Contáctanos ahora:
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
              <a
                href="https://wa.me/529932500548?text=Hola! Vengo por la consultoría gratuita de Alpha Agency. ¿Podemos agendar ahora?"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 p-4 bg-green-600 hover:bg-green-700 text-white rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <FaWhatsapp className="text-xl" />
                WhatsApp
              </a>
              
              <a
                href="mailto:contacto.ia.alpha@gmail.com?subject=Consultoría Gratuita - {formData.company}"
                className="flex items-center justify-center gap-3 p-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <FaEnvelopeOpen className="text-xl" />
                Email
              </a>
              
              <a
                href="https://linkedin.com/company/alpha-agency"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 p-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <FaLinkedin className="text-xl" />
                LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-gold-primary/10 to-yellow-500/10 border border-gold-primary/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                ¡Tu Transformación Digital Comienza Ahora!
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Mientras esperas, descubre más sobre cómo la IA está revolucionando negocios como el tuyo.
              </p>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="font-semibold rounded-xl transition-all duration-300 select-none px-8 py-4 text-lg bg-gold-primary text-black-primary hover:bg-gold-secondary hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer inline-flex items-center gap-2"
              >
                <FaRocket />
                Explorar Más Servicios
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ThankYouState;
