"use client";

import React from "react";
import { gradients } from "../utils/styles";

interface ButtonProps {
  text: string;
  variant?: "primary" | "secondary" | "outline";
  icon?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  text,
  variant = "primary",
  icon,
  onClick,
  disabled = false,
  className = "",
  type = "button",
}) => {
  const baseClasses =
    "inline-flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variantClasses = {
    primary: `${gradients.primaryFull} text-white focus:ring-blue-500`,
    secondary:
      "bg-gray-700 text-gray-100 hover:bg-gray-600 focus:ring-gray-500 active:bg-gray-500",
    outline:
      "border-2 border-blue-500 text-blue-500 bg-transparent hover:bg-blue-500/10 focus:ring-blue-500 active:bg-blue-500/20",
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      aria-label={text}
    >
      {icon && <span className='mr-2 flex items-center'>{icon}</span>}
      <span>{text}</span>
    </button>
  );
};

export default Button;
