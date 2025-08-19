// src/components/ui/ContactItem.tsx
import { ContactItemProps } from '../../types';

const ContactItem = ({ icon, label, value, href }: ContactItemProps) => {
  return (
    <div className="flex items-center mb-4">
      <div className="text-accent text-xl mr-3">
        {icon}
      </div>
      <div>
        <p className="font-medium text-dark">{label}</p>
        <a 
          href={href} 
          className="text-primary hover:underline transition-colors"
          target="_blank" 
          rel="noopener noreferrer"
        >
          {value}
        </a>
      </div>
    </div>
  );
};

export default ContactItem;
