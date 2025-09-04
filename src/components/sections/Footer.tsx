"use client";

import React from "react";
import { motion } from "framer-motion";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import { useTranslations } from "@/hooks/useTranslations";
import ClientOnly from "@/components/ui/ClientOnly";
import {
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

const Footer: React.FC = () => {
  const { t } = useTranslations();

  const socialLinks = [
    {
      name: "Twitter",
      href: "https://twitter.com/alphagency",
      icon: FaTwitter,
      color: "hover:text-blue-400",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/alphagency",
      icon: FaLinkedin,
      color: "hover:text-blue-600",
    },
    {
      name: "Instagram",
      href: "https://instagram.com/alphagency",
      icon: FaInstagram,
      color: "hover:text-pink-500",
    },
    {
      name: "YouTube",
      href: "https://youtube.com/@alphagency",
      icon: FaYoutube,
      color: "hover:text-red-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
      "Hola, me interesa más información sobre Alpha Agency. Vengo de la web."
    );
    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
  };

  return (
    <footer className="bg-black border-t border-gray-800">
      <motion.div
        className="container-custom py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <Logo size="lg" className="mb-6" />
            <p className="text-gray-400 mb-6 leading-relaxed">
              {t("footer.mission") as string}
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-gold-primary flex-shrink-0" />
                <a
                  href={`mailto:${t("footer.contact.email") as string}`}
                  className="text-gray-300 hover:text-gold-primary transition-colors duration-300"
                >
                  {t("footer.contact.email") as string}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhoneAlt className="text-gold-primary flex-shrink-0" />
                <a
                  href={`tel:${t("footer.contact.phone") as string}`}
                  className="text-gray-300 hover:text-gold-primary transition-colors duration-300"
                >
                  {t("footer.contact.phone") as string}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-gold-primary flex-shrink-0" />
                <ClientOnly
                  fallback={
                    <span className="text-gray-300">Cargando ubicación...</span>
                  }
                >
                  <span className="text-gray-300">
                    {t("footer.contact.address") as string}
                  </span>
                </ClientOnly>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${social.color} transition-colors duration-300`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="text-xl" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-semibold text-lg mb-6">
              {t("footer.sections.services") as string}
            </h3>
            <ul className="space-y-3">
              {(t("footer.services") as string[]).map((service, index) => (
                <li key={index}>
                  <a
                    href="#packages"
                    className="text-gray-400 hover:text-gold-primary transition-colors duration-300 text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-semibold text-lg mb-6">
              {t("footer.sections.company") as string}
            </h3>
            <ul className="space-y-3">
              {(t("footer.company") as string[]).map((item, index) => (
                <li key={index}>
                  <a
                    href="#about"
                    className="text-gray-400 hover:text-gold-primary transition-colors duration-300 text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-semibold text-lg mb-6">
              {t("footer.sections.stayConnected") as string}
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              {t("footer.stayConnected.description") as string}
            </p>
            <div className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder={t("footer.stayConnected.placeholder") as string}
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-gold-primary focus:outline-none text-sm"
              />
              <Button variant="primary" size="sm" className="w-full text-sm">
                {t("footer.stayConnected.button") as string}
                <FaArrowRight className="ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Legal Links */}
        <motion.div
          variants={itemVariants}
          className="border-t border-gray-800 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap justify-center md:justify-start space-x-6">
              {(t("footer.legal") as string[]).map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-400 hover:text-gold-primary transition-colors duration-300 text-sm"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          className="border-t border-gray-800 pt-8 mt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 text-sm text-gray-400">
              <span>{t("footer.copyright") as string}</span>
              <span className="hidden md:block">•</span>
              <span>{t("footer.madeWith") as string}</span>
            </div>

            <div className="flex items-center space-x-2 text-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-gray-400">
                {t("footer.systems") as string}
              </span>
            </div>
          </div>
        </motion.div>

        {/* WhatsApp CTA */}
        <motion.div variants={itemVariants} className="mt-12 text-center">
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-3">
              ¿Listo para transformar tu negocio?
            </h3>
            <p className="text-gray-300 mb-4">
              Contáctanos ahora y descubre cómo la IA puede revolucionar tu
              empresa
            </p>
            <Button
              variant="primary"
              size="lg"
              onClick={openWhatsApp}
              className="inline-flex items-center"
            >
              <FaPhoneAlt className="mr-2" />
              Hablar por WhatsApp
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
