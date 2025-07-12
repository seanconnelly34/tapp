import React from "react";
import { surfaces, typography } from "../utils/styles";

interface CardProps {
  title: string;
  value?: string | number;
  valueColor?: string;
  children?: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  value,
  valueColor = "text-white",
  children,
  className = "",
}) => {
  return (
    <div className={`${surfaces.card} overflow-hidden ${className}`}>
      <div className='bg-gradient-to-r from-blue-900 to-blue-700 px-4 py-3'>
        <h3 className={typography.h3}>{title}</h3>
      </div>
      <div className='p-4'>
        {value && <p className={`text-3xl font-bold ${valueColor}`}>{value}</p>}
        {children && <div className={typography.bodySecondary}>{children}</div>}
      </div>
    </div>
  );
};

export default Card;
