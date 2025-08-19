// src/components/ui/Button.tsx
import { ButtonProps } from '../../types';

const Button = ({
  children,
  variant = 'primary',
  className = '',
  onClick
}: ButtonProps) => {
  return (
    <button 
      onClick={onClick}
      className={`btn ${variant === 'primary' ? 'btn-primary' : 'btn-outline'} tracking-wide font-medium ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
