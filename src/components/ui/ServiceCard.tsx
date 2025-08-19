// src/components/ui/ServiceCard.tsx
import { ServiceCardProps } from '../../types';

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="text-accent text-4xl mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-center text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
