"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  FaHospital, 
  FaUtensils, 
  FaShoppingCart, 
  FaGraduationCap, 
  FaIndustry, 
  FaHandshake,
  FaChartLine,
  FaUsers,
  FaDollarSign
} from "react-icons/fa";

const IndustryUseCases: React.FC = () => {
  const industries = [
    {
      name: "Restaurantes & Gastronomía",
      icon: <FaUtensils className="text-4xl" />,
      color: "from-orange-500 to-red-500",
      useCases: [
        "Pedidos automáticos 24/7",
        "Gestión de reservas inteligente",
        "Análisis de preferencias del cliente",
        "Optimización de menú basada en datos"
      ],
      results: "300% más pedidos, 40% reducción de costos"
    },
    {
      name: "Salud & Medicina",
      icon: <FaHospital className="text-4xl" />,
      color: "from-blue-500 to-cyan-500",
      useCases: [
        "Agenda médica automatizada",
        "Recordatorios de medicamentos",
        "Triage inicial inteligente",
        "Gestión de historiales clínicos"
      ],
      results: "60% menos tiempo de espera, 90% satisfacción"
    },
    {
      name: "E-commerce & Retail",
      icon: <FaShoppingCart className="text-4xl" />,
      color: "from-green-500 to-emerald-500",
      useCases: [
        "Chatbot de ventas inteligente",
        "Recomendaciones personalizadas",
        "Soporte post-venta automatizado",
        "Análisis de comportamiento del cliente"
      ],
      results: "250% más conversiones, 35% incremento en ticket promedio"
    },
    {
      name: "Educación & Training",
      icon: <FaGraduationCap className="text-4xl" />,
      color: "from-purple-500 to-pink-500",
      useCases: [
        "Tutor virtual personalizado",
        "Evaluación automática de progreso",
        "Contenido adaptativo",
        "Soporte administrativo 24/7"
      ],
      results: "80% mejor retención, 50% más engagement"
    },
    {
      name: "Manufactura & Logística",
      icon: <FaIndustry className="text-4xl" />,
      color: "from-gray-600 to-gray-800",
      useCases: [
        "Monitoreo predictivo de equipos",
        "Optimización de rutas de entrega",
        "Gestión de inventario inteligente",
        "Mantenimiento preventivo automatizado"
      ],
      results: "45% reducción de tiempo muerto, 30% ahorro en costos"
    },
    {
      name: "Servicios Profesionales",
      icon: <FaHandshake className="text-4xl" />,
      color: "from-indigo-500 to-purple-500",
      useCases: [
        "Calificación automática de leads",
        "Seguimiento de clientes inteligente",
        "Generación de propuestas automática",
        "Facturación y cobranza automatizada"
      ],
      results: "200% más leads calificados, 70% reducción en tiempo de cierre"
    }
  ];

  return (
    <div className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Casos de Uso por <span className="text-gradient">Industria</span>
        </h3>
        <p className="text-xl text-gray-400 max-w-4xl mx-auto">
          Descubre cómo la IA está transformando diferentes sectores con{" "}
          <span className="text-gold-primary font-semibold">
            resultados medibles y verificables.
          </span>
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {industries.map((industry, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 * index }}
            className="group"
          >
            <div className="bg-gradient-to-br from-gray-900/80 to-black/60 border border-gold-primary/20 rounded-xl p-8 hover:border-gold-primary/40 hover:shadow-xl hover:shadow-gold-primary/20 transition-all duration-300">
              {/* Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${industry.color} rounded-full flex items-center justify-center text-white shadow-lg`}>
                  {industry.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white group-hover:text-gold-primary transition-colors duration-300">
                    {industry.name}
                  </h4>
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <FaChartLine className="text-gold-primary" />
                    <span>Resultados verificados</span>
                  </div>
                </div>
              </div>

              {/* Use Cases */}
              <div className="mb-6">
                <h5 className="text-gold-primary font-semibold mb-3 flex items-center">
                  <FaUsers className="mr-2" />
                  Casos de Uso Principales:
                </h5>
                <ul className="space-y-2">
                  {industry.useCases.map((useCase, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-gray-300">
                      <div className="w-2 h-2 bg-gold-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm">{useCase}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Results */}
              <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <FaDollarSign className="text-green-400" />
                  <span className="text-green-400 font-semibold text-sm">RESULTADOS COMPROBADOS:</span>
                </div>
                <p className="text-white text-sm font-medium">
                  {industry.results}
                </p>
              </div>

              {/* CTA */}
              <div className="mt-6 text-center">
                <button className="text-gold-primary hover:text-yellow-400 text-sm font-medium transition-colors duration-300">
                  Ver Caso Completo →
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-center mt-12"
      >
        <div className="bg-gradient-to-r from-gold-primary/10 to-yellow-500/10 border border-gold-primary/20 rounded-xl p-8">
          <h4 className="text-2xl font-bold text-white mb-4">
            ¿Tu Industria No Está Aquí?
          </h4>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Creamos soluciones personalizadas para cualquier sector. Agenda una consultoría gratuita y descubre cómo la IA puede transformar tu industria específica.
          </p>
          <button
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="font-semibold rounded-xl transition-all duration-300 select-none px-8 py-4 text-lg bg-gold-primary text-black-primary hover:bg-gold-secondary hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
          >
            Consultoría Personalizada Gratuita
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default IndustryUseCases;
