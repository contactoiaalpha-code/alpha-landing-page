"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguageContext } from "@/contexts/LanguageContext";

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguageContext();

  useEffect(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("lang") : null;
    if (saved === "es" || saved === "en") {
      setLanguage(saved);
    }
  }, [setLanguage]);

  const changeTo = (lang: "es" | "en") => {
    setLanguage(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("lang", lang);
    }
  };

  return (
    <div className="inline-flex items-center bg-white/5 border border-white/10 rounded-lg overflow-hidden">
      <motion.button
        className={`px-3 py-1 text-sm ${language === "en" ? "bg-gold-primary text-black" : "text-gray-300 hover:text-white"}`}
        onClick={() => changeTo("en")}
        whileTap={{ scale: 0.95 }}
        aria-pressed={language === "en"}
      >
        EN
      </motion.button>
      <motion.button
        className={`px-3 py-1 text-sm ${language === "es" ? "bg-gold-primary text-black" : "text-gray-300 hover:text-white"}`}
        onClick={() => changeTo("es")}
        whileTap={{ scale: 0.95 }}
        aria-pressed={language === "es"}
      >
        ES
      </motion.button>
    </div>
  );
};

export default LanguageToggle;
