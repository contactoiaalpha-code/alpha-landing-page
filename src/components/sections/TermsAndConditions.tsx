"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTimes,
  FaFileContract,
  FaShieldAlt,
  FaGavel,
  FaUserShield,
} from "react-icons/fa";

interface TermsAndConditionsProps {
  isOpen: boolean;
  onClose: () => void;
}

const TermsAndConditions: React.FC<TermsAndConditionsProps> = ({
  isOpen,
  onClose,
}) => {
  const [activeSection, setActiveSection] = useState("empresa");

  const sections = [
    { id: "empresa", title: "Información de la Empresa", icon: FaFileContract },
    { id: "servicios", title: "Servicios Ofrecidos", icon: FaShieldAlt },
    { id: "comercial", title: "Condiciones Comerciales", icon: FaGavel },
    { id: "garantia", title: "Garantías y Devoluciones", icon: FaUserShield },
    { id: "propiedad", title: "Propiedad Intelectual", icon: FaFileContract },
    { id: "privacidad", title: "Protección de Datos", icon: FaShieldAlt },
    {
      id: "responsabilidad",
      title: "Limitación de Responsabilidad",
      icon: FaGavel,
    },
    { id: "soporte", title: "Soporte Técnico", icon: FaUserShield },
    { id: "legal", title: "Ley Aplicable", icon: FaFileContract },
  ];

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.2 },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-4 md:inset-8 lg:inset-16 bg-gray-900 rounded-2xl border border-gray-700 z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-700 bg-gray-800">
              <div className="flex items-center space-x-3">
                <FaFileContract className="text-gold-primary text-2xl" />
                <h2 className="text-2xl font-bold text-white">
                  Términos y Condiciones
                </h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-700 rounded-lg transition-colors duration-200"
              >
                <FaTimes className="text-gray-400 text-xl" />
              </button>
            </div>

            <div className="flex flex-1 overflow-hidden">
              {/* Sidebar Navigation */}
              <div className="w-64 bg-gray-800 border-r border-gray-700 p-4 overflow-y-auto">
                <nav className="space-y-2">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
                        activeSection === section.id
                          ? "bg-gold-primary/20 text-gold-primary border border-gold-primary/30"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white"
                      }`}
                    >
                      <section.icon className="text-lg" />
                      <span className="font-medium">{section.title}</span>
                    </button>
                  ))}
                </nav>
              </div>

              {/* Content Area */}
              <div className="flex-1 p-6 overflow-y-auto">
                <motion.div
                  key={activeSection}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="prose prose-invert max-w-none"
                >
                  {activeSection === "empresa" && (
                    <div>
                      <h3 className="text-2xl font-bold text-gold-primary mb-6">
                        Información de la Empresa
                      </h3>
                      <div className="space-y-6 text-gray-300">
                        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                          <h4 className="text-xl font-semibold text-white mb-4">
                            Datos Fiscales y Legales
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <p>
                                <strong className="text-gold-primary">
                                  Razón Social:
                                </strong>{" "}
                                Carlos César Gil Peralta
                              </p>
                              <p>
                                <strong className="text-gold-primary">
                                  RFC:
                                </strong>{" "}
                                GIPC920226GP5
                              </p>
                              <p>
                                <strong className="text-gold-primary">
                                  Actividad:
                                </strong>{" "}
                                Persona Física con Actividad Empresarial
                              </p>
                              <p>
                                <strong className="text-gold-primary">
                                  Nombre Comercial:
                                </strong>{" "}
                                Agencia Alpha México
                              </p>
                            </div>
                            <div>
                              <p>
                                <strong className="text-gold-primary">
                                  Domicilio Fiscal:
                                </strong>{" "}
                                Calle Haití, Colonia Santo Domingo, Comalcalco,
                                Tabasco, México, CP 86340
                              </p>
                              <p>
                                <strong className="text-gold-primary">
                                  Teléfonos:
                                </strong>{" "}
                                +52 993 250 0548 / +52 993 330 5557
                              </p>
                              <p>
                                <strong className="text-gold-primary">
                                  Email:
                                </strong>{" "}
                                contacto@alphamexico.com.mx
                              </p>
                              <p>
                                <strong className="text-gold-primary">
                                  Sitio Web:
                                </strong>{" "}
                                https://www.alphamexico.com.mx/
                              </p>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-xl font-semibold text-white mb-3">
                            Definiciones
                          </h4>
                          <div className="space-y-3">
                            <p>
                              <strong className="text-gold-primary">
                                "Agencia Alpha" o "la Empresa":
                              </strong>{" "}
                              Carlos César Gil Peralta operando bajo el nombre
                              comercial Agencia Alpha México.
                            </p>
                            <p>
                              <strong className="text-gold-primary">
                                "Cliente" o "Usuario":
                              </strong>{" "}
                              Persona física o moral que contrata los servicios
                              de Agencia Alpha.
                            </p>
                            <p>
                              <strong className="text-gold-primary">
                                "Servicios":
                              </strong>{" "}
                              Los servicios de automatización empresarial con
                              inteligencia artificial, desarrollo de agentes de
                              IA y consultoría tecnológica ofrecidos por Agencia
                              Alpha.
                            </p>
                            <p>
                              <strong className="text-gold-primary">
                                "Agentes de IA":
                              </strong>{" "}
                              Software especializado basado en inteligencia
                              artificial desarrollado por Agencia Alpha.
                            </p>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-xl font-semibold text-white mb-3">
                            Aceptación de Términos
                          </h4>
                          <p className="leading-relaxed">
                            Al acceder, navegar o utilizar nuestro Sitio Web,
                            contratar nuestros servicios o comunicarse con
                            nosotros, el Usuario acepta automática e
                            incondicionalmente estos Términos y Condiciones, así
                            como nuestra Política de Privacidad.
                          </p>
                          <p className="leading-relaxed mt-3">
                            Si no está de acuerdo con alguno de estos términos,
                            debe abstenerse de utilizar nuestros servicios y
                            abandonar el sitio web inmediatamente.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeSection === "servicios" && (
                    <div>
                      <h3 className="text-2xl font-bold text-gold-primary mb-6">
                        Servicios Ofrecidos
                      </h3>
                      <div className="space-y-6 text-gray-300">
                        <div>
                          <h4 className="text-xl font-semibold text-white mb-3">
                            Servicios Principales
                          </h4>
                          <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>
                              Desarrollo e implementación de agentes de
                              inteligencia artificial especializados
                            </li>
                            <li>Automatización de procesos empresariales</li>
                            <li>Consultoría en transformación digital</li>
                            <li>Soporte técnico y mantenimiento</li>
                            <li>Capacitación y entrenamiento de equipos</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-xl font-semibold text-white mb-3">
                            Planes de Servicio
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                              <h5 className="font-semibold text-gold-primary mb-2">
                                Plan Starter
                              </h5>
                              <p className="text-sm">
                                1 agente de IA especializado con funcionalidades
                                básicas
                              </p>
                            </div>
                            <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                              <h5 className="font-semibold text-gold-primary mb-2">
                                Plan Growth
                              </h5>
                              <p className="text-sm">
                                3 agentes de IA especializados con
                                funcionalidades avanzadas
                              </p>
                            </div>
                            <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                              <h5 className="font-semibold text-gold-primary mb-2">
                                Plan Enterprise
                              </h5>
                              <p className="text-sm">
                                Agentes de IA ilimitados con arquitectura
                                personalizada
                              </p>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-xl font-semibold text-white mb-3">
                            Garantías de Servicio
                          </h4>
                          <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>
                              Implementación garantizada en máximo 14 días
                              calendario
                            </li>
                            <li>Resultados visibles en los primeros 30 días</li>
                            <li>Soporte técnico 24/7 en español</li>
                            <li>
                              Actualizaciones y mejoras continuas incluidas
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeSection === "comercial" && (
                    <div>
                      <h3 className="text-2xl font-bold text-gold-primary mb-6">
                        Condiciones Comerciales
                      </h3>
                      <div className="space-y-6 text-gray-300">
                        <div>
                          <h4 className="text-xl font-semibold text-white mb-3">
                            Precios y Facturación
                          </h4>
                          <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>
                              Todos los precios publicados son en pesos
                              mexicanos (MXN)
                            </li>
                            <li>Los precios NO incluyen IVA (16%)</li>
                            <li>
                              Los precios están sujetos a cambios sin previo
                              aviso
                            </li>
                            <li>La facturación es mensual y por adelantado</li>
                            <li>
                              Las facturas se emiten dentro de los primeros 5
                              días hábiles de cada mes
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-xl font-semibold text-white mb-3">
                            Métodos de Pago
                          </h4>
                          <p className="leading-relaxed mb-3">
                            Aceptamos los siguientes métodos de pago:
                          </p>
                          <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Transferencia bancaria (SPEI)</li>
                            <li>
                              Tarjetas de crédito y débito (Visa, Mastercard)
                            </li>
                            <li>Depósito bancario</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-xl font-semibold text-white mb-3">
                            Términos de Pago
                          </h4>
                          <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>
                              El pago debe realizarse dentro de los primeros 5
                              días de cada mes
                            </li>
                            <li>
                              Los pagos vencidos generan intereses moratorios
                              del 2% mensual
                            </li>
                            <li>
                              La falta de pago por más de 15 días resulta en
                              suspensión inmediata del servicio
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-xl font-semibold text-white mb-3">
                            Contratos Mínimos
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                              <h5 className="font-semibold text-gold-primary mb-2">
                                Plan Starter
                              </h5>
                              <p className="text-sm">6 meses mínimo</p>
                            </div>
                            <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                              <h5 className="font-semibold text-gold-primary mb-2">
                                Plan Growth
                              </h5>
                              <p className="text-sm">12 meses mínimo</p>
                            </div>
                            <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                              <h5 className="font-semibold text-gold-primary mb-2">
                                Plan Enterprise
                              </h5>
                              <p className="text-sm">
                                Período negociable, mínimo 12 meses
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeSection === "garantia" && (
                    <div>
                      <h3 className="text-2xl font-bold text-gold-primary mb-6">
                        Garantías y Devoluciones
                      </h3>
                      <div className="space-y-6 text-gray-300">
                        <div>
                          <h4 className="text-xl font-semibold text-white mb-3">
                            Garantía de ROI
                          </h4>
                          <p className="leading-relaxed mb-3">
                            Garantizamos retorno positivo de inversión (ROI) en
                            30 días calendario. Esta garantía aplica únicamente
                            si el Cliente:
                          </p>
                          <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Está al corriente en todos sus pagos</li>
                            <li>
                              Ha implementado completamente las recomendaciones
                              de nuestro equipo
                            </li>
                            <li>
                              Proporciona acceso completo a métricas y datos
                              necesarios
                            </li>
                            <li>
                              No ha modificado los agentes de IA sin
                              autorización
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-xl font-semibold text-white mb-3">
                            Proceso de Reclamación
                          </h4>
                          <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>
                              Las solicitudes de devolución deben presentarse
                              por escrito a contacto@alphamexico.com.mx
                            </li>
                            <li>
                              Debe incluir evidencia documentada de la falta de
                              ROI
                            </li>
                            <li>
                              El análisis de la reclamación toma hasta 15 días
                              hábiles
                            </li>
                            <li>
                              Las devoluciones, de proceder, se realizan en un
                              plazo máximo de 30 días
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-xl font-semibold text-white mb-3">
                            Limitaciones de la Garantía
                          </h4>
                          <p className="leading-relaxed mb-3">
                            La garantía NO aplica en casos de:
                          </p>
                          <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Falta de pago o retrasos en pagos</li>
                            <li>
                              Modificaciones no autorizadas a los agentes de IA
                            </li>
                            <li>Falta de cooperación del Cliente</li>
                            <li>
                              Cambios drásticos en el mercado o industria del
                              Cliente
                            </li>
                            <li>Casos fortuitos o de fuerza mayor</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-xl font-semibold text-white mb-3">
                            Cancelación y Terminación
                          </h4>
                          <div className="space-y-4">
                            <div>
                              <h5 className="font-semibold text-gold-primary mb-2">
                                Cancelación por Parte del Cliente
                              </h5>
                              <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                                <li>
                                  Debe notificar por escrito con 30 días
                                  calendario de anticipación
                                </li>
                                <li>
                                  La notificación debe enviarse a
                                  contacto@alphamexico.com.mx
                                </li>
                                <li>
                                  Debe especificar el motivo de la cancelación
                                </li>
                                <li>No debe tener adeudos pendientes</li>
                              </ul>
                            </div>
                            <div>
                              <h5 className="font-semibold text-gold-primary mb-2">
                                Penalizaciones por Cancelación Temprana
                              </h5>
                              <p className="text-sm">
                                Si el Cliente cancela antes de cumplir el
                                período mínimo contratado:
                              </p>
                              <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                                <li>
                                  Deberá pagar el 50% del valor restante del
                                  período mínimo contratado
                                </li>
                                <li>
                                  Perderá inmediatamente el acceso a todos los
                                  agentes de IA
                                </li>
                                <li>
                                  No tendrá derecho a reembolsos parciales
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeSection === "propiedad" && (
                    <div>
                      <h3 className="text-2xl font-bold text-gold-primary mb-6">
                        Propiedad Intelectual
                      </h3>
                      <div className="space-y-6 text-gray-300">
                        <div>
                          <h4 className="text-xl font-semibold text-white mb-3">
                            Derechos de Agencia Alpha
                          </h4>
                          <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>
                              TODOS los agentes de IA desarrollados son
                              propiedad exclusiva de Agencia Alpha México
                            </li>
                            <li>
                              Los códigos fuente, algoritmos y metodologías son
                              propiedad intelectual protegida
                            </li>
                            <li>
                              Las marcas, logotipos y nombres comerciales son
                              propiedad registrada
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-xl font-semibold text-white mb-3">
                            Licencia de Uso
                          </h4>
                          <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>
                              El Cliente recibe únicamente una licencia de uso
                              no exclusiva
                            </li>
                            <li>
                              La licencia es válida únicamente durante la
                              vigencia del contrato
                            </li>
                            <li>
                              El uso está limitado a las actividades comerciales
                              autorizadas del Cliente
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-xl font-semibold text-white mb-3">
                            Prohibiciones del Cliente
                          </h4>
                          <p className="leading-relaxed mb-3">
                            El Cliente NO puede:
                          </p>
                          <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>
                              Copiar, reproducir o replicar los agentes de IA
                            </li>
                            <li>
                              Realizar ingeniería inversa de nuestro software
                            </li>
                            <li>
                              Compartir, vender o licenciar los agentes a
                              terceros
                            </li>
                            <li>
                              Modificar el código sin autorización expresa
                            </li>
                            <li>
                              Usar los agentes después de la terminación del
                              contrato
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-xl font-semibold text-white mb-3">
                            Violaciones a la Propiedad Intelectual
                          </h4>
                          <p className="leading-relaxed mb-3">
                            Las violaciones a estos términos resultarán en:
                          </p>
                          <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Terminación inmediata del contrato</li>
                            <li>Acciones legales por daños y perjuicios</li>
                            <li>Multas equivalentes a 12 mensualidades</li>
                            <li>Cobro de honorarios legales</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeSection === "privacidad" && (
                    <div>
                      <h3 className="text-2xl font-bold text-gold-primary mb-6">
                        Protección de Datos y Privacidad
                      </h3>
                      <div className="space-y-6 text-gray-300">
                        <div>
                          <h4 className="text-xl font-semibold text-white mb-3">
                            Recopilación de Datos
                          </h4>
                          <p className="leading-relaxed mb-3">
                            Recopilamos únicamente los datos necesarios para
                            brindar nuestros servicios:
                          </p>
                          <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Información de contacto empresarial</li>
                            <li>Datos financieros para facturación</li>
                            <li>Métricas de rendimiento de negocio</li>
                            <li>Logs de uso de los agentes de IA</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-xl font-semibold text-white mb-3">
                            Seguridad de Datos
                          </h4>
                          <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>
                              Utilizamos encriptación AES-256 para toda la
                              información sensible
                            </li>
                            <li>
                              Los datos se almacenan en servidores seguros en
                              territorio nacional
                            </li>
                            <li>
                              Implementamos sistema RAG (Retrieval-Augmented
                              Generation) encriptado
                            </li>
                            <li>
                              Realizamos auditorías de seguridad periódicas
                            </li>
                            <li>
                              Cumplimos con estándares internacionales de
                              protección de datos
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-xl font-semibold text-white mb-3">
                            Uso de Cookies y Tracking
                          </h4>
                          <p className="leading-relaxed mb-3">
                            Nuestro sitio web utiliza:
                          </p>
                          <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Google Analytics para análisis de tráfico</li>
                            <li>
                              Facebook Pixel para optimización de publicidad
                            </li>
                            <li>
                              Cookies técnicas necesarias para el funcionamiento
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-xl font-semibold text-white mb-3">
                            Compartir Información
                          </h4>
                          <p className="leading-relaxed mb-3">
                            No compartimos información personal con terceros,
                            excepto:
                          </p>
                          <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Cuando sea requerido por ley</li>
                            <li>
                              Para procesar pagos (con procesadores de pago
                              autorizados)
                            </li>
                            <li>Con autorización expresa del Cliente</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeSection === "responsabilidad" && (
                    <div>
                      <h3 className="text-2xl font-bold text-gold-primary mb-6">
                        Limitación de Responsabilidad
                      </h3>
                      <div className="space-y-6 text-gray-300">
                        <div>
                          <h4 className="text-xl font-semibold text-white mb-3">
                            Limitaciones Generales
                          </h4>
                          <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>
                              Nuestra responsabilidad máxima está limitada al
                              monto pagado por el Cliente en los últimos 12
                              meses
                            </li>
                            <li>
                              No somos responsables por daños indirectos, lucro
                              cesante o daños consecuenciales
                            </li>
                            <li>
                              Los agentes de IA son herramientas de apoyo y no
                              garantizan resultados específicos
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-xl font-semibold text-white mb-3">
                            Exclusiones de Responsabilidad
                          </h4>
                          <p className="leading-relaxed mb-3">
                            No nos hacemos responsables por:
                          </p>
                          <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>
                              Interrupciones del servicio por mantenimiento
                              programado
                            </li>
                            <li>
                              Fallas en servicios de terceros (internet,
                              electricidad, etc.)
                            </li>
                            <li>
                              Uso indebido de los agentes por parte del Cliente
                            </li>
                            <li>
                              Decisiones comerciales basadas en información de
                              los agentes
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-xl font-semibold text-white mb-3">
                            Caso Fortuito o Fuerza Mayor
                          </h4>
                          <p className="leading-relaxed mb-3">
                            No seremos responsables por incumplimientos debido
                            a:
                          </p>
                          <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Desastres naturales</li>
                            <li>Actos de gobierno o autoridades</li>
                            <li>Conflictos laborales</li>
                            <li>
                              Fallas masivas de internet o telecomunicaciones
                            </li>
                            <li>Pandemias o emergencias sanitarias</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeSection === "soporte" && (
                    <div>
                      <h3 className="text-2xl font-bold text-gold-primary mb-6">
                        Soporte Técnico
                      </h3>
                      <div className="space-y-6 text-gray-300">
                        <div>
                          <h4 className="text-xl font-semibold text-white mb-3">
                            Disponibilidad
                          </h4>
                          <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Soporte técnico 24/7 en español</li>
                            <li>
                              Tiempo de respuesta: máximo 4 horas en días
                              hábiles
                            </li>
                            <li>Soporte de emergencia: máximo 1 hora</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-xl font-semibold text-white mb-3">
                            Canales de Soporte
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                              <h5 className="font-semibold text-gold-primary mb-2">
                                Email
                              </h5>
                              <p className="text-sm">
                                contacto@alphamexico.com.mx
                              </p>
                            </div>
                            <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                              <h5 className="font-semibold text-gold-primary mb-2">
                                Teléfono
                              </h5>
                              <p className="text-sm">
                                +52 993 250 0548 / +52 993 330 5557
                              </p>
                            </div>
                            <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                              <h5 className="font-semibold text-gold-primary mb-2">
                                Sistema de Tickets
                              </h5>
                              <p className="text-sm">Para clientes activos</p>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-xl font-semibold text-white mb-3">
                            Mantenimiento
                          </h4>
                          <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>
                              Mantenimientos programados se notifican con 48
                              horas de anticipación
                            </li>
                            <li>
                              Actualizaciones de seguridad se implementan
                              automáticamente
                            </li>
                            <li>
                              Mejoras de funcionalidad se incluyen sin costo
                              adicional
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-xl font-semibold text-white mb-3">
                            Cobertura Geográfica
                          </h4>
                          <p className="leading-relaxed mb-3">
                            Nuestros servicios están disponibles para clientes
                            ubicados en:
                          </p>
                          <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>México (todo el territorio nacional)</li>
                            <li>Estados Unidos de América</li>
                            <li>Países de habla hispana en América Latina</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeSection === "legal" && (
                    <div>
                      <h3 className="text-2xl font-bold text-gold-primary mb-6">
                        Ley Aplicable y Jurisdicción
                      </h3>
                      <div className="space-y-6 text-gray-300">
                        <div>
                          <h4 className="text-xl font-semibold text-white mb-3">
                            Ley Aplicable
                          </h4>
                          <p className="leading-relaxed mb-3">
                            Estos términos se rigen por las leyes mexicanas,
                            específicamente:
                          </p>
                          <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Código Civil Federal</li>
                            <li>
                              Ley Federal de Protección de Datos Personales
                            </li>
                            <li>Código de Comercio</li>
                            <li>Ley Federal del Derecho de Autor</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-xl font-semibold text-white mb-3">
                            Jurisdicción
                          </h4>
                          <p className="leading-relaxed">
                            Cualquier controversia será resuelta por los
                            tribunales competentes de Comalcalco, Tabasco,
                            México, renunciando las partes a cualquier otro
                            fuero que pudiera corresponderles.
                          </p>
                        </div>

                        <div>
                          <h4 className="text-xl font-semibold text-white mb-3">
                            Resolución de Controversias
                          </h4>
                          <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>
                              Preferimos resolver disputas mediante negociación
                              directa
                            </li>
                            <li>De ser necesario, se procederá a mediación</li>
                            <li>
                              Como última instancia, se procederá por la vía
                              legal correspondiente
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-xl font-semibold text-white mb-3">
                            Disposiciones Generales
                          </h4>
                          <div className="space-y-4">
                            <div>
                              <h5 className="font-semibold text-gold-primary mb-2">
                                Modificaciones
                              </h5>
                              <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                                <li>
                                  Agencia Alpha se reserva el derecho de
                                  modificar estos términos en cualquier momento
                                </li>
                                <li>
                                  Las modificaciones se notificarán con 15 días
                                  de anticipación
                                </li>
                                <li>
                                  El uso continuado de los servicios implica
                                  aceptación de las modificaciones
                                </li>
                              </ul>
                            </div>
                            <div>
                              <h5 className="font-semibold text-gold-primary mb-2">
                                Severabilidad
                              </h5>
                              <p className="text-sm">
                                Si alguna disposición de estos términos fuere
                                inválida, el resto permanecerá en pleno vigor y
                                efecto.
                              </p>
                            </div>
                            <div>
                              <h5 className="font-semibold text-gold-primary mb-2">
                                Integralidad del Acuerdo
                              </h5>
                              <p className="text-sm">
                                Estos términos, junto con la Política de
                                Privacidad, constituyen el acuerdo completo
                                entre las partes.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                          <h4 className="text-xl font-semibold text-white mb-3">
                            Contacto
                          </h4>
                          <p className="leading-relaxed mb-3">
                            Para cualquier consulta relacionada con estos
                            Términos y Condiciones:
                          </p>
                          <div className="space-y-2">
                            <p>
                              <strong className="text-gold-primary">
                                Carlos César Gil Peralta
                              </strong>
                            </p>
                            <p>
                              <strong className="text-gold-primary">
                                Agencia Alpha México
                              </strong>
                            </p>
                            <p>
                              <strong>Dirección:</strong> Calle Haití, Colonia
                              Santo Domingo, Comalcalco, Tabasco, México, CP
                              86340
                            </p>
                            <p>
                              <strong>Teléfonos:</strong> +52 993 250 0548 / +52
                              993 330 5557
                            </p>
                            <p>
                              <strong>Email:</strong>{" "}
                              contacto@alphamexico.com.mx
                            </p>
                            <p>
                              <strong>Sitio Web:</strong>{" "}
                              https://www.alphamexico.com.mx/
                            </p>
                          </div>
                          <p className="text-sm text-gray-400 mt-4 italic">
                            <strong>IMPORTANTE:</strong> Al utilizar nuestros
                            servicios, el Cliente declara haber leído, entendido
                            y aceptado en su totalidad estos Términos y
                            Condiciones.
                          </p>
                          <p className="text-xs text-gray-500 mt-2">
                            Documento generado el 13 de septiembre de 2025
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-gray-700 p-6 bg-gray-800">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <p className="text-gray-400 text-sm">
                  Última actualización: {new Date().toLocaleDateString("es-MX")}
                </p>
                <div className="flex space-x-4">
                  <button
                    onClick={onClose}
                    className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors duration-200"
                  >
                    Cerrar
                  </button>
                  <button
                    onClick={() => window.print()}
                    className="px-6 py-2 bg-gold-primary text-black rounded-lg hover:bg-gold-secondary transition-colors duration-200"
                  >
                    Imprimir
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default TermsAndConditions;
