"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Card from "@/components/ui/Card";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaBuilding,
  FaDollarSign,
  FaRocket,
  FaCheck,
  FaArrowRight,
  FaArrowLeft,
  FaCalendarAlt,
  FaWhatsapp,
  FaLinkedin,
  FaEnvelopeOpen,
} from "react-icons/fa";
import { validateEmail, validatePhone } from "@/lib/utils";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  position: string;
  revenue: string;
  challenge: string;
  timeline: string;
}

const ContactSection: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    position: "",
    revenue: "",
    challenge: "",
    timeline: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const steps = [
    {
      title: "Información Personal",
      subtitle: "Cuéntanos sobre ti",
      fields: ["name", "email", "phone"],
    },
    {
      title: "Tu Empresa",
      subtitle: "Detalles de tu negocio",
      fields: ["company", "position", "revenue"],
    },
    {
      title: "Tu Desafío",
      subtitle: "¿Cómo podemos ayudarte?",
      fields: ["challenge", "timeline"],
    },
  ];

  const revenueOptions = [
    "Menos de $100K/año",
    "$100K - $500K/año",
    "$500K - $1M/año",
    "$1M - $5M/año",
    "$5M - $10M/año",
    "Más de $10M/año",
  ];

  const timelineOptions = [
    "Lo antes posible",
    "En las próximas 2 semanas",
    "En el próximo mes",
    "En los próximos 3 meses",
    "Solo estoy explorando",
  ];

  const challengeOptions = [
    "Generar más leads calificados",
    "Automatizar customer support",
    "Optimizar workflows con IA",
    "Reducir costos operativos",
    "Escalar sin aumentar personal",
    "Integrar sistemas existentes",
  ];

  const validateStep = (step: number): boolean => {
    const stepFields = steps[step - 1].fields;
    const newErrors: Partial<FormData> = {};
    let isValid = true;

    stepFields.forEach((field) => {
      const value = formData[field as keyof FormData];

      if (!value.trim()) {
        newErrors[field as keyof FormData] = "Este campo es requerido";
        isValid = false;
      } else if (field === "email" && !validateEmail(value)) {
        newErrors.email = "Email inválido";
        isValid = false;
      } else if (field === "phone" && !validatePhone(value)) {
        newErrors.phone = "Teléfono inválido";
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => prev - 1);
    setErrors({});
  };

  const handleSubmit = async () => {
    if (!validateStep(currentStep)) return;
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Error al enviar");
      setIsSubmitted(true);
    } catch {
      alert("Ocurrió un error al enviar tu solicitud. Intenta nuevamente.");
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const progressPercentage = (currentStep / steps.length) * 100;

  if (isSubmitted) {
    return (
      <section id="contact-form" className="section-padding bg-black-soft/50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center"
          >
            <Card variant="gradient" className="p-8">
              <div className="text-6xl text-gold-primary mb-6">🎉</div>
              <h2 className="text-4xl font-orbitron font-bold text-white mb-6">
                ¡Consultoría Agendada!
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Perfecto,{" "}
                <span className="text-gold-primary font-semibold">
                  {formData.name}
                </span>
                . Hemos recibido tu solicitud y nuestro equipo se pondrá en
                contacto contigo en las próximas 2 horas.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-center gap-3 text-green-400">
                  <FaCheck />
                  <span>Análisis personalizado de tu negocio</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-green-400">
                  <FaCheck />
                  <span>Propuesta de automatización custom</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-green-400">
                  <FaCheck />
                  <span>Roadmap de implementación detallado</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <a
                  href="https://wa.me/529932500548"
                  className="btn-secondary flex items-center justify-center gap-2"
                >
                  <FaWhatsapp />
                  WhatsApp
                </a>
                <a
                  href="mailto:contacto@alphamexico.com.mx"
                  className="btn-secondary flex items-center justify-center gap-2"
                >
                  <FaEnvelopeOpen />
                  Email
                </a>
                <a
                  href="https://linkedin.com/company/alpha-agency"
                  className="btn-secondary flex items-center justify-center gap-2"
                >
                  <FaLinkedin />
                  LinkedIn
                </a>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact-form" className="section-padding bg-black-soft/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold mb-6">
              <span className="text-white">Obtén Tu</span>
              <br />
              <span className="text-gradient">Consultoría Gratuita</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Agenda una sesión de 30 minutos donde analizaremos tu negocio y
              diseñaremos una estrategia de automatización{" "}
              <span className="text-gold-primary font-semibold">
                100% personalizada.
              </span>
            </p>
          </div>

          <Card variant="glass" className="overflow-hidden">
            {/* Progress Bar */}
            <div className="p-6 border-b border-gold-primary/20">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gold-primary font-semibold">
                  Paso {currentStep} de {steps.length}
                </span>
                <span className="text-gray-400">
                  {Math.round(progressPercentage)}% completado
                </span>
              </div>
              <div className="w-full bg-black-soft rounded-full h-2">
                <motion.div
                  className="bg-gold-gradient h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercentage}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>

            <div className="p-8">
              {/* Step Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-orbitron font-bold text-white mb-2">
                  {steps[currentStep - 1].title}
                </h3>
                <p className="text-gray-400">
                  {steps[currentStep - 1].subtitle}
                </p>
              </div>

              {/* Form Steps */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {/* Step 1: Personal Info */}
                  {currentStep === 1 && (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input
                          label="Nombre completo"
                          placeholder="Tu nombre"
                          value={formData.name}
                          onChange={(value) => handleInputChange("name", value)}
                          error={errors.name}
                          leftIcon={<FaUser />}
                          required
                        />
                        <Input
                          label="Email corporativo"
                          type="email"
                          placeholder="tu@empresa.com"
                          value={formData.email}
                          onChange={(value) =>
                            handleInputChange("email", value)
                          }
                          error={errors.email}
                          leftIcon={<FaEnvelope />}
                          required
                        />
                      </div>
                      <Input
                        label="Teléfono"
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        value={formData.phone}
                        onChange={(value) => handleInputChange("phone", value)}
                        error={errors.phone}
                        leftIcon={<FaPhone />}
                        required
                      />
                    </>
                  )}

                  {/* Step 2: Company Info */}
                  {currentStep === 2 && (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input
                          label="Nombre de la empresa"
                          placeholder="Tu Empresa SAS"
                          value={formData.company}
                          onChange={(value) =>
                            handleInputChange("company", value)
                          }
                          error={errors.company}
                          leftIcon={<FaBuilding />}
                          required
                        />
                        <Input
                          label="Tu cargo/posición"
                          placeholder="CEO, Director, etc."
                          value={formData.position}
                          onChange={(value) =>
                            handleInputChange("position", value)
                          }
                          error={errors.position}
                          leftIcon={<FaUser />}
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-3">
                          Revenue anual aproximado{" "}
                          <span className="text-gold-primary">*</span>
                        </label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {revenueOptions.map((option) => (
                            <button
                              key={option}
                              type="button"
                              onClick={() =>
                                handleInputChange("revenue", option)
                              }
                              className={`p-4 rounded-lg border-2 transition-all duration-300 text-left ${
                                formData.revenue === option
                                  ? "border-gold-primary bg-gold-primary/10 text-gold-primary"
                                  : "border-gray-600 bg-black-soft/50 text-gray-300 hover:border-gold-primary/50"
                              }`}
                            >
                              <FaDollarSign className="inline mr-2" />
                              {option}
                            </button>
                          ))}
                        </div>
                        {errors.revenue && (
                          <p className="text-red-400 text-sm mt-2">
                            {errors.revenue}
                          </p>
                        )}
                      </div>
                    </>
                  )}

                  {/* Step 3: Challenge */}
                  {currentStep === 3 && (
                    <>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-3">
                          ¿Cuál es tu principal desafío?{" "}
                          <span className="text-gold-primary">*</span>
                        </label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {challengeOptions.map((option) => (
                            <button
                              key={option}
                              type="button"
                              onClick={() =>
                                handleInputChange("challenge", option)
                              }
                              className={`p-4 rounded-lg border-2 transition-all duration-300 text-left ${
                                formData.challenge === option
                                  ? "border-gold-primary bg-gold-primary/10 text-gold-primary"
                                  : "border-gray-600 bg-black-soft/50 text-gray-300 hover:border-gold-primary/50"
                              }`}
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                        {errors.challenge && (
                          <p className="text-red-400 text-sm mt-2">
                            {errors.challenge}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-3">
                          ¿Cuándo quieres implementar?{" "}
                          <span className="text-gold-primary">*</span>
                        </label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {timelineOptions.map((option) => (
                            <button
                              key={option}
                              type="button"
                              onClick={() =>
                                handleInputChange("timeline", option)
                              }
                              className={`p-4 rounded-lg border-2 transition-all duration-300 text-left ${
                                formData.timeline === option
                                  ? "border-gold-primary bg-gold-primary/10 text-gold-primary"
                                  : "border-gray-600 bg-black-soft/50 text-gray-300 hover:border-gold-primary/50"
                              }`}
                            >
                              <FaCalendarAlt className="inline mr-2" />
                              {option}
                            </button>
                          ))}
                        </div>
                        {errors.timeline && (
                          <p className="text-red-400 text-sm mt-2">
                            {errors.timeline}
                          </p>
                        )}
                      </div>
                    </>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center mt-12">
                <div>
                  {currentStep > 1 && (
                    <Button
                      variant="outline"
                      onClick={handleBack}
                      leftIcon={<FaArrowLeft />}
                    >
                      Anterior
                    </Button>
                  )}
                </div>

                <div>
                  {currentStep < steps.length ? (
                    <Button
                      variant="primary"
                      onClick={handleNext}
                      rightIcon={<FaArrowRight />}
                    >
                      Siguiente
                    </Button>
                  ) : (
                    <Button
                      variant="primary"
                      onClick={handleSubmit}
                      rightIcon={<FaRocket />}
                      size="lg"
                    >
                      Agendar Consultoría
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </Card>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <div className="text-gold-primary text-2xl mb-2">🔒</div>
              <h4 className="font-semibold text-white mb-1">
                100% Confidencial
              </h4>
              <p className="text-gray-400 text-sm">
                Tus datos están protegidos
              </p>
            </div>
            <div className="text-center">
              <div className="text-gold-primary text-2xl mb-2">⚡</div>
              <h4 className="font-semibold text-white mb-1">
                Respuesta Rápida
              </h4>
              <p className="text-gray-400 text-sm">Te contactamos en 2 horas</p>
            </div>
            <div className="text-center">
              <div className="text-gold-primary text-2xl mb-2">🎯</div>
              <h4 className="font-semibold text-white mb-1">Sin Compromisos</h4>
              <p className="text-gray-400 text-sm">
                Consultoría totalmente gratuita
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
