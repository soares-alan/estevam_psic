// src/components/sections/AboutSection.tsx
import { useTranslation } from 'react-i18next';
import Section from '../ui/Section';
import estevamaImage from '../../assets/Estevam.jpg';

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <Section id="sobre" className="bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-start">
          {/* Coluna da imagem (4/12 em desktop) */}
          <div className="lg:col-span-4 relative mx-auto max-w-sm lg:max-w-none">
            {/* Container da foto com sombra e formato arredondado */}
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
              {/* Gradiente overlay para melhor contraste */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 z-10"></div>
              
              <img 
                src={estevamaImage} 
                alt={`${t('about.title')} - Estevam Holpert`}
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              
              {/* Detalhe decorativo */}
              <div className="absolute top-4 left-4 w-24 h-24 rounded-full border-4 border-white/30 -z-10"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-secondary/10 -z-10"></div>
            </div>
            
            {/* Badge de credencial */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white py-2 px-6 rounded-full shadow-lg">
              <p className="text-primary text-sm font-medium">{t('about.credentials')}</p>
            </div>
          </div>
          
          {/* Coluna do conteúdo (8/12 em desktop) */}
          <div className="lg:col-span-8 space-y-8 pt-8 lg:pt-0">
            {/* Cabeçalho */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-3 leading-tight tracking-tight">
                <span className="text-dark">{t('about.greeting.prefix')}</span>{' '}
                <span className="text-primary">{t('about.greeting.name')}</span>
              </h2>
              <div className="flex items-center">
                <div className="h-1 w-12 bg-primary mr-4"></div>
                <p className="text-xl text-primary font-medium tracking-tight">{t('about.profession')}</p>
              </div>
            </div>
            
            {/* Descrição principal */}
            <div className="text-base md:text-lg leading-relaxed text-gray-700">
              <p className="mb-6 text-balanced hyphenate">
                {t('about.description')}
              </p>
              <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6 p-5 bg-white rounded-lg border border-gray-200 shadow-md mb-6">
                <div className="bg-primary text-white p-4 rounded-lg shadow-md flex-shrink-0 transform -rotate-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-lg text-primary mb-1">{t('about.book.author', 'Autor do livro')}</h4>
                  <p className="text-dark font-semibold mb-1">"{t('about.book.title')}"</p>
                  <p className="text-gray-600 text-sm italic">{t('about.book.subtitle')}</p>
                </div>
              </div>
              {/* Lista de especializações */}
            </div>
            

            
            {/* CTA Button */}
            <div className="pt-8">
              <a 
                href="#atendimento" 
                className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg shadow-lg hover:bg-primary-dark transition-all transform hover:-translate-y-1 hover:shadow-xl group"
              >
                <span>{t('about.cta')}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
