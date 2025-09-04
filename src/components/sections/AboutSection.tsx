"use client";

import React from "react";
import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import TestimonialsCarousel from "@/components/ui/TestimonialsCarousel";
import IndustryUseCases from "@/components/ui/IndustryUseCases";
import { useTranslations } from "@/hooks/useTranslations";
import { FaUsers, FaTrophy, FaChartLine, FaIndustry } from "react-icons/fa";

const AboutSection: React.FC = () => {
  const { t } = useTranslations();
  type Stat = { number: string; label: string; description: string };
  const statsData = t("about.stats") as unknown as Stat[];
  const stats = statsData.map((stat, index) => {
    const icons = [FaIndustry, FaChartLine, FaTrophy, FaUsers];
    return {
      ...stat,
      icon: icons[index],
    };
  });

  const aiAgents = [
    {
      name: "ALPHA Recepcionista",
      type: "Agente de Pedidos Gastronómicos",
      description:
        "Especializado en restaurantes y negocios de comida. Maneja pedidos 24/7, gestiona el menú digital y optimiza la experiencia del cliente.",
      capabilities: [
        "Recepción de pedidos automática",
        "Gestión de menú digital inteligente",
        "Procesamiento de pagos integrado",
        "Análisis de preferencias del cliente",
      ],
      color: "from-blue-500 to-cyan-400",
      icon: "🍽️",
      status: "Procesando 500+ pedidos/día",
    },
    {
      name: "ALPHA Vendedor",
      type: "Agente de Ventas Inteligente",
      description:
        "Especialista en conversión y cierre de ventas. Identifica necesidades, presenta soluciones personalizadas y maximiza el ROI.",
      capabilities: [
        "Calificación automática de leads",
        "Presentaciones personalizadas",
        "Follow-up inteligente",
        "Análisis predictivo de ventas",
      ],
      color: "from-green-500 to-emerald-400",
      icon: "💼",
      status: "200% más conversiones",
    },
    {
      name: "ALPHA Soporte",
      type: "Agente de Atención al Cliente",
      description:
        "Revoluciona la experiencia del cliente con soporte instantáneo e inteligente. Resuelve consultas complejas y escala cuando es necesario.",
      capabilities: [
        "Resolución instantánea de consultas",
        "Escalación inteligente",
        "Análisis de satisfacción del cliente",
        "Base de conocimiento auto-actualizable",
      ],
      color: "from-purple-500 to-pink-400",
      icon: "🎧",
      status: "95% satisfacción del cliente",
    },
    {
      name: "ALPHA Asistente Médico",
      type: "Asistente Médico Virtual",
      description:
        "Especializado en el sector salud. Gestiona citas, proporciona información médica básica y optimiza flujos de trabajo clínicos.",
      capabilities: [
        "Gestión inteligente de citas",
        "Información médica confiable",
        "Recordatorios de medicamentos",
        "Análisis de síntomas básicos",
      ],
      color: "from-red-500 to-orange-400",
      icon: "🏥",
      status: "24/7 disponibilidad médica",
    },
    {
      name: "ALPHA Jarvis",
      type: "Asistente Personal Ejecutivo",
      description:
        "Tu asistente personal inteligente. Gestiona tu agenda, emails, tareas y te ayuda a mantener la productividad al máximo nivel.",
      capabilities: [
        "Gestión completa de agenda",
        "Priorización inteligente de tareas",
        "Análisis de productividad",
        "Integración con todas tus herramientas",
      ],
      color: "from-indigo-500 to-purple-400",
      icon: "🤖",
      status: "80% más productividad",
    },
    {
      name: "CREA TU AGENTE ALPHA",
      type: "Agente Personalizable",
      description:
        "Diseña un agente especializado específicamente para las necesidades únicas de tu negocio e industria.",
      capabilities: [
        "100% personalizable",
        "Adaptable a cualquier industria",
        "Integración con tus sistemas",
        "Entrenamiento especializado",
      ],
      color: "from-yellow-500 to-orange-400",
      icon: "⚡",
      status: "∞ Posibilidades",
      isCustom: true,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="about" className="section-padding bg-black-primary">
      <motion.div
        className="container-custom"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* AI Agents Grid - Moved to top */}
        <motion.div variants={itemVariants} className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold text-white mb-6">
              Conoce Nuestros{" "}
              <span className="text-gradient">Agentes de IA</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Tu equipo de trabajo digital especializado. Cada agente está
              diseñado para{" "}
              <span className="text-gold-primary font-semibold">
                revolucionar tu industria específica
              </span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 mb-12">
            {aiAgents.map((agent, index) => (
              <motion.div
                key={index}
                className="group relative"
                variants={itemVariants}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card
                  variant="gradient"
                  className="h-full p-4 md:p-6 text-center relative overflow-visible"
                  hoverable={false}
                >
                  {/* Avatar */}
                  <div className="relative mb-6 flex justify-center">
                    {agent.isCustom ? (
                      // Custom agent avatar with electric energy effect
                      <div className="relative w-32 h-32 flex items-center justify-center">
                        <div className="relative w-full h-full rounded-full bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 animate-pulse">
                          {/* Electric spark effect */}
                          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-orange-400 via-yellow-500 to-pink-500 opacity-80 animate-spin"></div>

                          {/* Center icon */}
                          <div className="absolute inset-0 flex items-center justify-center z-10">
                            <span className="text-6xl">{agent.icon}</span>
                          </div>

                          {/* Glow effect */}
                          <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-yellow-400/30 to-orange-500/30 blur-lg animate-pulse"></div>
                        </div>
                      </div>
                    ) : (
                      // Standard emoji avatar for other agents
                      <div
                        className={`relative w-32 h-32 rounded-full bg-gradient-to-br ${agent.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <div className="absolute inset-0 flex items-center justify-center z-10">
                          <span className="text-6xl">{agent.icon}</span>
                        </div>
                        {/* Subtle glow effect */}
                        <div
                          className={`absolute -inset-2 rounded-full bg-gradient-to-r ${agent.color} opacity-30 blur-md group-hover:opacity-50 transition-opacity duration-300`}
                        ></div>
                      </div>
                    )}
                  </div>

                  {/* Agent Info */}
                  <div className={agent.isCustom ? "mb-2 -mt-6" : ""}>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                      {agent.name}
                    </h3>
                    {agent.isCustom && (
                      <div className="mb-4">
                        <span className="inline-block px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold rounded-full">
                          ⭐ PERSONALIZABLE
                        </span>
                      </div>
                    )}
                    <p className="text-gold-primary font-medium text-sm mb-3">
                      {agent.type}
                    </p>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {agent.description}
                    </p>
                  </div>

                  {/* Capabilities */}
                  <div className="mb-4">
                    <h4 className="text-white font-semibold text-sm mb-2">
                      Capacidades:
                    </h4>
                    <ul className="text-xs text-gray-400 space-y-1">
                      {agent.capabilities.map((capability, capIndex) => (
                        <li key={capIndex} className="flex items-start">
                          <span className="text-gold-primary mr-2">•</span>
                          {capability}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Status */}
                  <div className="mt-auto">
                    <div className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/30">
                      {agent.status}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Custom Agent Extra Info */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Tienes una industria específica?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Creamos agentes especializados para{" "}
              <span className="text-gold-primary font-semibold">
                cualquier industria
              </span>
              : Inmobiliaria, Educación, Turismo, E-commerce, Finanzas, Legal y
              más.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg text-sm">
                🏠 Inmobiliaria
              </span>
              <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-lg text-sm">
                📚 Educación
              </span>
              <span className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-lg text-sm">
                ✈️ Turismo
              </span>
              <span className="px-4 py-2 bg-red-500/20 text-red-400 rounded-lg text-sm">
                🛒 E-commerce
              </span>
              <span className="px-4 py-2 bg-yellow-500/20 text-yellow-400 rounded-lg text-sm">
                💰 Finanzas
              </span>
            </div>
            <Button variant="primary" size="lg">
              Diseñar Mi Agente Personalizado
            </Button>
          </motion.div>
        </motion.div>

        {/* Main About Section */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-white mb-6">
            {t("about.title") as string}{" "}
            <span className="text-gradient">
              {t("about.titleHighlight") as string}
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-4">
            {t("about.subtitle") as string}{" "}
            <span className="text-gold-primary font-semibold">
              {t("about.subtitleHighlight") as string}
            </span>
          </p>
          <p className="text-lg text-gray-300">
            {t("about.description") as string}
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-gradient-to-br from-gray-900/80 to-black/60 rounded-xl border border-gold-primary/20"
              whileHover={{
                scale: 1.05,
                borderColor: "rgba(255, 215, 0, 0.4)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <stat.icon className="text-4xl text-gold-primary mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-gold-primary font-semibold mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-400">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Who We Are Section */}
        <motion.div variants={itemVariants} className="mb-20">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              {t("about.whoWeAre.title") as string}
            </h3>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>{t("about.whoWeAre.description1") as string}</p>
              <p className="text-gold-primary font-semibold text-center text-xl">
                {t("about.whoWeAre.highlight") as string}
              </p>
              <p>{t("about.whoWeAre.description2") as string}</p>
              <p>
                {t("about.whoWeAre.description3") as string}{" "}
                <span className="text-gold-primary font-bold">
                  {t("about.whoWeAre.timeValue") as string}
                </span>{" "}
                {t("about.whoWeAre.description4") as string}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Guarantees */}
        <motion.div variants={itemVariants} className="mb-20">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            {t("about.guarantees.title") as string}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(t("about.guarantees.items") as string[]).map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-3 p-4 bg-green-500/10 border border-green-500/20 rounded-lg"
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-green-400 text-xl">✓</div>
                <p className="text-gray-300">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div variants={itemVariants}>
          <TestimonialsCarousel />
        </motion.div>

        {/* Industry Use Cases */}
        <motion.div variants={itemVariants}>
          <IndustryUseCases />
        </motion.div>

        {/* Mission */}
        <motion.div variants={itemVariants} className="text-center">
          <h3 className="text-3xl font-bold text-white mb-6">
            {t("about.mission.title") as string}
          </h3>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            {t("about.mission.description") as string}{" "}
            <span className="text-gold-primary font-semibold">
              {t("about.mission.highlight") as string}
            </span>{" "}
            {t("about.mission.cta") as string}
          </p>
          <Button variant="primary" size="lg">
            Transformar Mi Negocio Ahora
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
