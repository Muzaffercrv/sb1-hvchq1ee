import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'hover' | 'elevated';
}

const Card = ({ children, className = '', variant = 'default' }: CardProps) => {
  const baseStyles = 'bg-white rounded-lg overflow-hidden';
  
  const variantStyles = {
    default: 'shadow-sm',
    hover: 'shadow-sm hover:shadow-md transition-shadow duration-300',
    elevated: 'shadow-md',
  };
  
  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </div>
  );
};

interface CardImageProps {
  src: string;
  alt: string;
  className?: string;
}

const CardImage = ({ src, alt, className = '' }: CardImageProps) => (
  <div className={`w-full ${className}`}>
    <img src={src} alt={alt} className="w-full h-full object-cover" />
  </div>
);

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

const CardContent = ({ children, className = '' }: CardContentProps) => (
  <div className={`p-4 ${className}`}>{children}</div>
);

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

const CardTitle = ({ children, className = '' }: CardTitleProps) => (
  <h3 className={`font-heading font-bold text-lg mb-2 ${className}`}>{children}</h3>
);

interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

const CardFooter = ({ children, className = '' }: CardFooterProps) => (
  <div className={`p-4 pt-0 ${className}`}>{children}</div>
);

Card.Image = CardImage;
Card.Content = CardContent;
Card.Title = CardTitle;
Card.Footer = CardFooter;

export default Card;