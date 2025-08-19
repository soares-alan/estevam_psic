// src/components/ui/SocialIcon.tsx
import { SocialIconProps } from '../../types';

const SocialIcon = ({ icon, href, label }: SocialIconProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="text-dark hover:text-accent transition-colors duration-300 text-xl"
    >
      {icon}
    </a>
  );
};

export default SocialIcon;
