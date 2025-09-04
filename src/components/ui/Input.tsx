import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface InputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  disabled?: boolean;
  required?: boolean;
  id?: string;
  name?: string;
  label?: string;
  leftIcon?: React.ReactNode;
  error?: string;
}

const Input: React.FC<InputProps> = ({
  type = "text",
  placeholder,
  value,
  onChange,
  className = "",
  disabled = false,
  required = false,
  id,
  name,
  label,
  leftIcon,
  error,
}) => {
  const baseClasses =
    "w-full px-4 py-3 bg-gray-900/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:border-gold-primary focus:ring-2 focus:ring-gold-primary/20 focus:outline-none transition-all duration-300";

  const disabledClasses = disabled
    ? "opacity-50 cursor-not-allowed"
    : "hover:border-gray-600/70";

  const inputPadding = leftIcon ? "pl-10" : "";

  return (
    <div className={cn("w-full", className)}>
      {label && (
        <label className="block text-sm font-medium text-gray-300 mb-2">
          {label} {required && <span className="text-gold-primary">*</span>}
        </label>
      )}

      <div className="relative">
        {leftIcon && (
          <div className="absolute inset-y-0 left-3 flex items-center text-gray-400">
            {leftIcon}
          </div>
        )}

        <motion.input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          disabled={disabled}
          required={required}
          id={id}
          name={name}
          className={cn(baseClasses, disabledClasses, inputPadding)}
          whileFocus={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        />
      </div>

      {error && (
        <div className="mt-2 text-sm text-red-400">
          {error}
        </div>
      )}
    </div>
  );
};

export default Input;
