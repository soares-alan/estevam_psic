// src/components/sections/AreasSection.tsx
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import Section from '../ui/Section';

/**
 * AreasSection - Componente que apresenta a abordagem psicanalítica do terapeuta
 * com uma citação destacada e princípios fundamentais da prática.
 */
const AreasSection = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  
  // Efeito para animar a seção quando ela se torna visível
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    const section = document.getElementById('areas');
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  // Princípios da abordagem psicanalítica
  const principles = [
    {
      title: t('areas.principles.listening.title'),
      description: t('areas.principles.listening.description'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
        </svg>
      ),
    },
    {
      title: t('areas.principles.unconscious.title'),
      description: t('areas.principles.unconscious.description'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
    },
    {
      title: t('areas.principles.transferencia.title'),
      description: t('areas.principles.transferencia.description'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: t('areas.principles.singularity.title'),
      description: t('areas.principles.singularity.description'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
      ),
    },
  ];

  return (
    <Section id="areas" className="bg-gray-50 overflow-hidden relative">
      {/* Ondas decorativas no background */}
      <div className="absolute inset-0 opacity-5">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute top-0 text-primary w-full">
          <path fill="currentColor" fillOpacity="1" d="M0,128L48,144C96,160,192,192,288,186.7C384,181,480,139,576,149.3C672,160,768,224,864,234.7C960,245,1056,203,1152,170.7C1248,139,1344,117,1392,106.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0 text-primary w-full">
          <path fill="currentColor" fillOpacity="1" d="M0,32L48,53.3C96,75,192,117,288,144C384,171,480,181,576,165.3C672,149,768,107,864,85.3C960,64,1056,64,1152,96C1248,128,1344,192,1392,224L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      
      <div className={`relative z-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Cabeçalho da seção */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-5">{t('areas.title')}</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
        </div>
        
        {/* Citação destacada */}
        <div className={`max-w-4xl mx-auto mb-16 relative transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          <div className="absolute -top-10 -left-2 md:left-0 text-primary/10 text-7xl md:text-9xl font-serif">"</div>
          <div className="relative z-10 bg-white p-8 md:p-12 rounded-xl shadow-lg border-l-4 border-primary">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed italic mb-6">
              {t('areas.description')} <span className="font-medium text-primary">{t('areas.quote')}</span>
            </p>
            <div className="flex items-center justify-end">
              <div className="w-10 h-1 bg-primary mr-3"></div>
              <p className="text-lg font-medium text-dark">{t('areas.author')}</p>
            </div>
          </div>
          <div className="absolute -bottom-10 -right-2 md:right-0 text-primary/10 text-7xl md:text-9xl font-serif rotate-180">"</div>
        </div>
        
        {/* Princípios da abordagem */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {principles.map((principle, index) => (
            <div 
              key={`principle-${index}`}
              className={`bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1 border-t-4 border-primary ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150 + 400}ms` }}
            >
              <div className="h-14 w-14 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                {principle.icon}
              </div>
              <h3 className="text-xl font-medium text-dark mb-3">{principle.title}</h3>
              <p className="text-gray-600">{principle.description}</p>
            </div>
          ))}
        </div>
        
        {/* Separador decorativo e elemento visual final */}
        <div className={`mt-20 flex flex-col items-center transition-all duration-700 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-16 h-0.5 bg-primary/30 rounded-full"></div>
            <div className="w-3 h-3 bg-primary/50 rounded-full"></div>
            <div className="w-16 h-0.5 bg-primary/30 rounded-full"></div>
          </div>
          
          <a 
            href="#contato" 
            className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors group"
          >
            <span>{t('areas.scheduleButton', 'Agende uma sessão')}</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </Section>
  );
};

export default AreasSection;
