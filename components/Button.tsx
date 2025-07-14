import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'small' | 'brown';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, ...props }) => {
  const baseStyle = 'rounded font-medium focus:outline-none transition duration-300 ease-in-out transform';
  
  // Define responsive size styles
  const sizeStyles = {
    default: 'px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg lg:px-10 lg:py-4 lg:text-xl',
    small: 'px-3 py-2 text-xs sm:px-4 sm:py-2 sm:text-sm lg:px-5 lg:py-3 lg:text-base',
  };
  
  // Define variant styles with responsive size styles included
  const variantStyles = {
    primary: `bg-maroon text-white ${baseStyle} ${sizeStyles.default} hover:bg-maroon-dark`,
    secondary: `bg-orange text-white ${baseStyle} ${sizeStyles.default} hover:bg-orange-dark`,
    brown: `bg-brown text-maroon ${baseStyle} ${sizeStyles.default} hover:bg-brown-dark`,
    small: `bg-maroon text-white ${baseStyle} ${sizeStyles.small} hover:bg-maroon-dark`,
  };
  
  const hoverEffect = 'hover:-translate-y-1';

  return (
    <button className={`${variantStyles[variant] || variantStyles.primary} ${hoverEffect}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
