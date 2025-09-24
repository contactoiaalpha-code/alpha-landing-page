import React from "react";
import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "glass" | "gradient";
  hoverable?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = "",
  variant = "default",
  hoverable = true,
}) => {
  const baseClasses = "rounded-xl overflow-hidden";
  
  const variantClasses = {
    default: "bg-gray-900/50 border border-gray-700/50",
    glass: "bg-white/5 backdrop-blur-lg border border-white/10",
    gradient: "bg-gradient-to-br from-gray-900/80 to-black/60 border border-gold-primary/20",
  };

  const hoverClasses = hoverable
    ? "hover:scale-105 hover:shadow-2xl hover:border-gold-primary/40 transition-all duration-300"
    : "";

  return (
    <motion.div
      className={`${baseClasses} ${variantClasses[variant]} ${hoverClasses} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};

export default Card;
