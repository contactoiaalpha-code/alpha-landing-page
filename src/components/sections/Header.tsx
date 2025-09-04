"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";
import { FaBars, FaTimes, FaRocket } from "react-icons/fa";
import LanguageToggle from "@/components/ui/LanguageToggle";
import { useTranslations } from "@/hooks/useTranslations";
import Image from "next/image";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslations();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const menuItems = [
    { id: "home", label: t("header.home") as string, href: "#home" },
    { id: "packages", label: t("header.packages") as string, href: "#packages" },
    { id: "about", label: t("header.about") as string, href: "#about" },
    { id: "contact", label: t("header.contact") as string, href: "#contact-form" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ["home", "packages", "about", "contact-form"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);

        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(
          currentSection === "contact-form" ? "contact" : currentSection
        );
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToContact = () => {
    document.getElementById("contact-form")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const openWhatsApp = () => {
    const phone = "529932500548";
    const text = encodeURIComponent(
      "Hola, me interesa una consultoría gratuita de IA para mi negocio. Vengo de la web."
    );
    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black-soft/95 backdrop-blur-md border-b border-gold-primary/20 shadow-2xl shadow-black/50"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-4 cursor-pointer"
            onClick={() => scrollToSection("#")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Tu Logo personalizado */}
            <motion.div 
              className="relative w-12 h-12 md:w-16 md:h-16"
              whileHover={{ rotate: 5, scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/alpha-logo.svg"
                alt="Alpha Agency Logo"
                width={64}
                height={64}
                className="w-full h-full object-contain filter drop-shadow-2xl"
                priority
              />
            </motion.div>
            
            <div>
              <h1 className="text-2xl md:text-3xl font-orbitron font-bold text-white">
                Alpha <span className="text-gold-primary">Agency</span>
              </h1>
              <p className="text-xs md:text-sm text-gray-400 -mt-1">
                La IA que libera tu TIEMPO, para que TU LIDERES.
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.href)}
                className={`relative font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? "text-gold-primary"
                    : "text-gray-300 hover:text-gold-primary"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold-primary"
                    layoutId="activeIndicator"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Desktop CTA + Language */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageToggle />
            <Button variant="secondary" onClick={openWhatsApp} className="text-sm">
              {t("header.freeConsultation") as string}
            </Button>
            <Button variant="primary" onClick={scrollToContact} leftIcon={<FaRocket />} className="text-sm">
              {t("header.startNow") as string}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gold-primary hover:bg-gold-primary/10 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isMobileMenuOpen ? "close" : "menu"}
                initial={{ rotate: 0 }}
                animate={{ rotate: 0 }}
                exit={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden absolute top-full left-0 right-0 bg-black-soft/98 backdrop-blur-md border-b border-gold-primary/20"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container-custom py-6">
              <nav className="space-y-4">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.href)}
                    className={`block w-full text-left py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
                      activeSection === item.id
                        ? "text-gold-primary bg-gold-primary/10"
                        : "text-gray-300 hover:text-gold-primary hover:bg-gold-primary/5"
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </nav>

              <motion.div
                className="mt-6 space-y-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex justify-center mb-3">
                  <LanguageToggle />
                </div>
                <Button variant="secondary" onClick={scrollToContact} className="w-full">
                  {t("header.freeConsultation") as string}
                </Button>
                <Button variant="primary" onClick={scrollToContact} leftIcon={<FaRocket />} className="w-full">
                  {t("header.startNow") as string}
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Glow Effect */}
      {isScrolled && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-primary/5 to-transparent opacity-50 pointer-events-none" />
      )}
    </motion.header>
  );
};

export default Header;


