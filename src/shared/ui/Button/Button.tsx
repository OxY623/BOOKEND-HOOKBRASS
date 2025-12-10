import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'icon' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center font-light tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#34a798] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-[#34a798] text-white hover:bg-[#2a8a7a] dark:hover:bg-[#2a8a7a] hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl',
    secondary: 'bg-[#1a1814]/50 dark:bg-[#0a0a0a]/50 backdrop-blur-sm border border-[#34a798]/30 text-[#e5e1d8] dark:text-[#c2beb6] hover:border-[#34a798] hover:bg-[#34a798]/10 hover:scale-105 active:scale-95',
    icon: 'bg-black/20 dark:bg-white/20 backdrop-blur-sm text-white dark:text-white hover:bg-black/40 dark:hover:bg-white/40 hover:scale-110 active:scale-95 shadow-lg',
    ghost: 'bg-transparent text-current hover:bg-black/10 dark:hover:bg-white/10 hover:scale-105 active:scale-95'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm rounded-md',
    md: 'px-6 py-3 text-base rounded-lg',
    lg: 'px-8 py-4 text-lg rounded-lg'
  };

  const iconSizes = {
    sm: 'p-2 rounded-md',
    md: 'p-3 rounded-lg',
    lg: 'p-4 rounded-lg'
  };

  const sizeClasses = variant === 'icon' ? iconSizes[size] : sizes[size];

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizeClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

