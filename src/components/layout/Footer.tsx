// src/components/layout/Footer.tsx
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import logoImage from '../../assets/logo.png';

const Footer = () => {
  const { t } = useTranslation();

  // Links para a seção de Links Úteis
  const legalLinks = [
    { name: t('footer.privacy', 'Política de Privacidade'), href: "/privacidade" },
    { name: t('footer.terms', 'Termos e Condições'), href: "/termos" },
  ];
  
  // Handler para scroll suave em links internos
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.documentElement.classList.add('smooth-scroll');
    
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      
      window.history.pushState(null, '', `#${id}`);
      
      setTimeout(() => {
        document.documentElement.classList.remove('smooth-scroll');
      }, 1000);
    }
  };

  return (
    <footer className="relative bg-light border-t border-gray-100">
      {/* Linha decorativa sutil */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-primary/30 rounded-full"></div>
      
      <div className="container pt-16 pb-8 px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-y-12 gap-x-8">
          {/* Coluna 1: Informações da empresa */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
              <img src={logoImage} alt="Estevam Holpert Logo" className="h-8 w-auto" loading="eager" />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed max-w-md">
              {t('footer.description', 'Psicólogo clínico com formação em psicanálise lacaniana, oferecendo atendimento humanizado e personalizado para promover saúde mental e bem-estar emocional.')}
            </p>
            
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-primary mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>São Paulo, SP</span>
              </div>
              
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-primary mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:contato@estevamholpert.com.br" className="hover:text-primary transition-colors duration-300">contato@estevamholpert.com.br</a>
              </div>
              
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-primary mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+551199999-9999" className="hover:text-primary transition-colors duration-300">(11) 99999-9999</a>
              </div>
            </div>
          </div>
          
          {/* Coluna 2: Links Úteis */}
          <div className="lg:col-span-3">
            <h4 className="text-base font-medium text-dark mb-6">Links Úteis</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a 
                  href="#inicio" 
                  className="text-gray-600 hover:text-primary transition-colors duration-300 flex items-center"
                  onClick={(e) => handleSmoothScroll(e, 'inicio')}
                >
                  <span className="w-1 h-1 bg-primary/60 rounded-full mr-2"></span>
                  {t('menu.home')}
                </a>
              </li>
              <li>
                <a 
                  href="#sobre" 
                  className="text-gray-600 hover:text-primary transition-colors duration-300 flex items-center"
                  onClick={(e) => handleSmoothScroll(e, 'sobre')}
                >
                  <span className="w-1 h-1 bg-primary/60 rounded-full mr-2"></span>
                  {t('menu.about')}
                </a>
              </li>
              <li>
                <a 
                  href="#contato" 
                  className="text-gray-600 hover:text-primary transition-colors duration-300 flex items-center"
                  onClick={(e) => handleSmoothScroll(e, 'contato')}
                >
                  <span className="w-1 h-1 bg-primary/60 rounded-full mr-2"></span>
                  {t('menu.contact')}
                </a>
              </li>
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    to={link.href} 
                    className="text-gray-600 hover:text-primary transition-colors duration-300 flex items-center"
                  >
                    <span className="w-1 h-1 bg-primary/60 rounded-full mr-2"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Coluna 3: Redes Sociais */}
          <div className="lg:col-span-4">
            <h4 className="text-base font-medium text-dark mb-6">{t('footer.social')}</h4>
            <div className="flex flex-col space-y-4">
              <a 
                href="https://www.instagram.com/estevampsicologo/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center space-x-3 text-gray-600 hover:text-primary transition-all duration-300"
              >
                <div className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 group-hover:border-primary/30 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </div>
                <span className="text-sm">Instagram</span>
              </a>
              
              <a 
                href="https://m.youtube.com/channel/UClvVMdD361ETESH-vhjWwqA" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center space-x-3 text-gray-600 hover:text-primary transition-all duration-300"
              >
                <div className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 group-hover:border-primary/30 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
                <span className="text-sm">YouTube</span>
              </a>
              
              <a 
                href="https://br.linkedin.com/in/estevam-holpert-243b151b" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center space-x-3 text-gray-600 hover:text-primary transition-all duration-300"
              >
                <div className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 group-hover:border-primary/30 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <span className="text-sm">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Linha separadora */}
        <div className="mt-12 pt-6 border-t border-gray-100">
          <div className="flex flex-col md:flex-row md:justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-sm text-gray-500">{t('footer.rights')}</p>
            
            {/* Micro ícones de navegação */}
            <div className="flex items-center space-x-4">
              <a 
                href="#inicio" 
                className="text-xs text-gray-400 hover:text-primary transition-colors duration-300"
                onClick={(e) => handleSmoothScroll(e, 'inicio')}
              >
                Início
              </a>
              <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
              <Link 
                to="/privacidade" 
                className="text-xs text-gray-400 hover:text-primary transition-colors duration-300"
              >
                Privacidade
              </Link>
              <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
              <Link 
                to="/termos" 
                className="text-xs text-gray-400 hover:text-primary transition-colors duration-300"
              >
                {t('footer.terms', 'Termos e Condições')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
