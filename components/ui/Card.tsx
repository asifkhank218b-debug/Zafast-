
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  isSelected?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', onClick, isSelected = false }) => {
  const selectedClasses = isSelected ? 'ring-2 ring-brand-primary' : 'border-base-300';
  const hoverClasses = onClick ? 'hover:border-brand-secondary hover:shadow-lg' : '';

  return (
    <div
      className={`bg-base-200 border rounded-lg p-6 shadow-md transition-all duration-200 ${selectedClasses} ${hoverClasses} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;
