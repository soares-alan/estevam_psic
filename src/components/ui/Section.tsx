// src/components/ui/Section.tsx
import { forwardRef } from 'react';
import { SectionProps } from '../../types';

const Section = forwardRef<HTMLElement, SectionProps>(({ id, className = '', children }, ref) => {
  // Determinando idioma para aplicação de classes específicas (útil para ajustes tipográficos)
  const lang = document.documentElement.lang || 'pt-BR';
  const langClass = lang.startsWith('pt') ? 'text-pt' : 'text-en';
  
  return (
    <section 
      id={id}
      ref={ref}
      className={`section min-h-screen flex items-center py-20 md:py-28 ${langClass} ${className}`}
    >
      <div className="container w-full">
        {children}
      </div>
    </section>
  );
});

export default Section;
