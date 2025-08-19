// src/components/sections/HeroSection.tsx
import { useTranslation } from 'react-i18next';
import Button from '../ui/Button';
import Section from '../ui/Section';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <Section 
      id="inicio" 
      className="relative bg-primary/5 min-h-[calc(100vh-80px)] flex items-center"
    >
      <div className="max-w-3xl relative z-10">
        <h1 className="mb-2 text-primary heading-primary title-underline">
          {/* Destaque apenas o nome 'Estevam' */}
          {(() => {
            const title = t('hero.title');
            if (title.includes(' ')) {
              const [first, ...rest] = title.split(' ');
              return <><span style={{ color: '#263a92' }}>{first}</span> {rest.join(' ')}</>;
            }
            return <span style={{ color: '#263a92' }}>{title}</span>;
          })()}
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium text-dark mb-6 tracking-tight">
          {t('hero.subtitle')}
        </h2>
        <p className="text-lg md:text-xl mb-8 text-gray-700 leading-relaxed text-balanced">
          {t('hero.description')}
        </p>
        <div>
          <Button 
            onClick={(e) => {
              if (e) e.preventDefault();
              const target = document.getElementById('contato');
              if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
              } else {
                window.location.hash = '#contato';
              }
            }}
            variant="primary"
            className="text-lg tracking-wide"
          >
            {t('hero.cta')}
          </Button>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute right-0 top-1/3 w-1/3 h-64 bg-primary/10 rounded-l-full -z-0"></div>
      <div className="absolute left-1/2 bottom-10 w-1/4 h-40 bg-secondary/10 rounded-full -z-0"></div>
      <div className="absolute right-1/4 top-1/4 w-16 h-16 bg-accent/10 rounded-full -z-0"></div>
    </Section>
  );
};

export default HeroSection;
