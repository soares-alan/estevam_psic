// src/components/layout/Header.tsx
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import logoImage from '../../assets/logo.png';
import LanguageSelector from '../ui/LanguageSelector';

const Header = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [scrolled, setScrolled] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();

  // Função para scroll suave ao clicar nos links do menu
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const isPolicyPage = location.pathname === '/privacidade' || location.pathname === '/termos';
    if (isPolicyPage) {
      navigate('/', { replace: false });
      setTimeout(() => {
        document.documentElement.classList.add('smooth-scroll');
        const targetElement = document.getElementById(id);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          window.history.pushState(null, '', `#${id}`);
          setTimeout(() => {
            document.documentElement.classList.remove('smooth-scroll');
          }, 1000);
        }
      }, 100);
    } else {
      document.documentElement.classList.add('smooth-scroll');
      const targetElement = document.getElementById(id);
      if (targetElement) {
        if (isMenuOpen) {
          setIsMenuOpen(false);
        }
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.history.pushState(null, '', `#${id}`);
        setTimeout(() => {
          document.documentElement.classList.remove('smooth-scroll');
        }, 1000);
      }
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
  { name: t('menu.home'), href: '#inicio', id: 'inicio' },
  { name: t('menu.about'), href: '#sobre', id: 'sobre' },
  { name: t('menu.services'), href: '#atendimento', id: 'atendimento' },
  { name: t('menu.areas'), href: '#areas', id: 'areas' },
  { name: t('menu.contact'), href: '#contato', id: 'contato' },
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -70% 0px' }
    );

    // Observe all sections
    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    // Detectar scroll para efeitos na navbar
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 20);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Verificar a posição inicial

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed w-full bg-white/95 backdrop-blur-sm z-50 transition-all duration-300 ${
      scrolled ? 'shadow-md h-16' : 'shadow-sm h-20'
    }`}>
      <div className={`container flex justify-between items-center transition-all duration-300 ${
        scrolled ? 'py-2' : 'py-3'
      }`}>
        {/* Logo */}
        <div className="flex items-center">
          <a href="#inicio" className="nav-link flex items-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 rounded-md" onClick={(e) => handleSmoothScroll(e, 'inicio')}>
            <div className={`relative transition-all duration-300 overflow-hidden ${
              scrolled ? 'h-10 sm:h-12' : 'h-12 sm:h-14'
            } w-auto`}>
              <img 
                src={logoImage} 
                alt="Estevam Holpert - Logo" 
                className="h-full w-auto object-contain" 
                loading="eager"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.onerror = null;
                  target.style.display = 'none';
                  // Fallback para texto em caso de erro no carregamento da imagem
                  const fallbackElement = document.getElementById('logo-fallback');
                  if (fallbackElement) {
                    fallbackElement.style.display = 'block';
                  }
                }}
              />
              <span 
                id="logo-fallback"
                className="hidden text-lg sm:text-xl font-bold text-primary"
                aria-hidden="true"
              >
                Estevam Holpert
              </span>
            </div>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`nav-link transition-colors font-medium ${
                    activeSection === item.id 
                      ? 'nav-link-active text-primary font-semibold' 
                      : 'text-dark hover:text-primary'
                  }`}
                  onClick={(e) => handleSmoothScroll(e, item.id)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <LanguageSelector />
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            type="button"
            className={`p-1.5 rounded-md transition-colors ${
              isMenuOpen ? 'bg-primary/10 text-primary' : 'text-dark hover:bg-gray-100'
            }`}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`md:hidden bg-white border-t shadow-lg absolute w-full top-full left-0 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0 pointer-events-none'
        }`}
      >
        <nav className="container py-4">
          <ul className="space-y-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`nav-link block py-2 px-3 transition-colors rounded-md ${
                    activeSection === item.id 
                      ? 'bg-primary/10 text-primary font-semibold nav-link-active' 
                      : 'text-dark hover:bg-gray-50 hover:text-primary'
                  }`}
                  onClick={(e) => {
                    // Combina o fechamento do menu com o scroll suave
                    handleSmoothScroll(e, item.id);
                  }}
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li className="pt-2 px-3">
              <LanguageSelector />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
