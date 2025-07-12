import React from "react";

interface CardGridProps {
  children: React.ReactNode;
  columns?: 1 | 2 | 3 | 4;
  className?: string;
}

const CardGrid: React.FC<CardGridProps> = ({
  children,
  columns = 4,
  className = "",
}) => {
  const getGridClasses = () => {
    const baseClasses = "grid gap-6";
    const columnClasses = {
      1: "grid-cols-1",
      2: "grid-cols-1 md:grid-cols-2",
      3: "grid-cols-1 md:grid-cols-3",
      4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
    };

    return `${baseClasses} ${columnClasses[columns]}`;
  };

  return <div className={`${getGridClasses()} ${className}`}>{children}</div>;
};

export default CardGrid;
