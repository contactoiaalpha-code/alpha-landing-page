"use client";

import React from "react";
import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import GuaranteeSection from "@/components/ui/GuaranteeSection";
import { useTranslations } from "@/hooks/useTranslations";
import {
  FaCheck,
  FaStar,
  FaRocket,
  FaCrown,
  FaShieldAlt,
  FaBolt,
} from "react-icons/fa";

const PackagesSection: React.FC = () => {
  const { t } = useTranslations();

  const packages = [
    {
      name: t("packages.starter.name") as string,
      subtitle: t("packages.starter.subtitle") as string,
      price: t("packages.starter.price") as string,
      period: t("packages.starter.period") as string,
      originalPrice: t("packages.starter.originalPrice") as string,
      features: t("packages.starter.features") as string[],
      cta: t("packages.starter.cta") as string,
      results: t("packages.starter.results") as string,
      icon: FaRocket,
      color: "from-blue-500 to-cyan-400",
      popular: false,
    },
    {
      name: t("packages.growth.name") as string,
      subtitle: t("packages.growth.subtitle") as string,
      price: t("packages.growth.price") as string,
      period: t("packages.growth.period") as string,
      originalPrice: t("packages.growth.originalPrice") as string,
      features: t("packages.growth.features") as string[],
      cta: t("packages.growth.cta") as string,
      results: t("packages.growth.results") as string,
      icon: FaCrown,
      color: "from-gold-primary to-yellow-400",
      popular: true,
      popularText: t("packages.growth.popular") as string,
    },
    {
      name: t("packages.enterprise.name") as string,
      subtitle: t("packages.enterprise.subtitle") as string,
      price: t("packages.enterprise.price") as string,
      period: t("packages.enterprise.period") as string,
      originalPrice: t("packages.enterprise.originalPrice") as string,
      features: t("packages.enterprise.features") as string[],
      cta: t("packages.enterprise.cta") as string,
      results: t("packages.enterprise.results") as string,
      icon: FaShieldAlt,
      color: "from-purple-500 to-pink-400",
      popular: false,
    },
  ];

  const trustIndicators = t("packages.trustIndicators") as unknown as Array<{
    text: string;
    highlight: boolean;
  }>;

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

  const openWhatsApp = () => {
    const phone = "529932500548";
    const text = encodeURIComponent(
      "Hola, me interesa información sobre los paquetes de IA. Vengo de la web."
    );
    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
  };

  return (
    <section id="packages" className="section-padding bg-gray-900">
      <motion.div
        className="container-custom"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-white mb-6">
            {t("packages.title") as string}{" "}
            <span className="text-gradient">
              {t("packages.titleHighlight") as string}
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            {t("packages.subtitle") as string}{" "}
            <span className="text-gold-primary font-semibold">
              {t("packages.subtitleHighlight") as string}
            </span>
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {trustIndicators.map((indicator, index) => (
              <motion.div
                key={index}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                  indicator.highlight
                    ? "bg-gold-primary/20 border border-gold-primary/30"
                    : "bg-gray-800/50"
                }`}
                whileHover={{ scale: 1.05 }}
              >
                <span
                  className={
                    indicator.highlight ? "text-gold-primary" : "text-gray-300"
                  }
                >
                  {indicator.text}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Packages Grid */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
        >
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              className={`relative ${pkg.popular ? "lg:-mt-8 lg:mb-8" : ""}`}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-gold-primary to-yellow-400 text-black px-6 py-2 rounded-full text-sm font-bold flex items-center space-x-2">
                    <FaStar />
                    <span>{pkg.popularText as string}</span>
                  </div>
                </div>
              )}

              <Card
                variant="gradient"
                className={`h-full p-8 text-center relative ${
                  pkg.popular
                    ? "border-2 border-gold-primary shadow-xl shadow-gold-primary/20"
                    : ""
                }`}
                hoverable={false}
              >
                {/* Icon */}
                <div className="mb-6">
                  <div
                    className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-br ${pkg.color} flex items-center justify-center`}
                  >
                    <pkg.icon className="text-3xl text-white" />
                  </div>
                </div>

                {/* Package Info */}
                <h3 className="text-2xl font-bold text-white mb-2">
                  {pkg.name as string}
                </h3>
                <p className="text-gray-400 text-sm mb-6">
                  {pkg.subtitle as string}
                </p>

                {/* Pricing */}
                <div className="mb-6">
                  {pkg.originalPrice && (
                    <div className="text-gray-500 line-through text-lg mb-1">
                      {pkg.originalPrice as string}
                    </div>
                  )}
                  <div className="text-4xl font-bold text-white mb-1">
                    {pkg.price as string}
                    {pkg.period && (
                      <span className="text-lg text-gray-400">
                        {pkg.period as string}
                      </span>
                    )}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <ul className="space-y-3 text-left">
                    {pkg.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start space-x-3"
                      >
                        <FaCheck className="text-gold-primary mt-1 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Results */}
                <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <p className="text-green-400 text-sm font-medium">
                    {pkg.results as string}
                  </p>
                </div>

                {/* CTA Button */}
                <Button
                  variant={pkg.popular ? "primary" : "secondary"}
                  size="lg"
                  onClick={openWhatsApp}
                  className="w-full"
                >
                  {pkg.cta as string}
                </Button>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Guarantee Section */}
        <motion.div variants={itemVariants}>
          <GuaranteeSection />
        </motion.div>

        {/* Consultation Section */}
        <motion.div
          variants={itemVariants}
          className="bg-gradient-to-r from-gold-primary/10 to-yellow-500/10 border border-gold-primary/20 rounded-xl p-8 text-center"
        >
          <FaBolt className="text-4xl text-gold-primary mx-auto mb-4" />
          <div className="mb-4">
            <span className="text-gray-400 line-through text-lg">
              Valor normal: $2,500 USD
            </span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">
            {t("packages.consultation.title") as string}
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            {t("packages.consultation.subtitle") as string}
          </p>
          <div className="mb-6">
            <Button variant="primary" size="lg" onClick={openWhatsApp}>
              {t("packages.consultation.cta") as string}
            </Button>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm text-gray-400">
            <span>{t("packages.consultation.guarantee") as string}</span>
            <span className="hidden sm:block">•</span>
            <span>{t("packages.consultation.moneyBack") as string}</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PackagesSection;
