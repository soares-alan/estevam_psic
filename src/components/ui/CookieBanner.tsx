// src/components/ui/CookieBanner.tsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const CookieBanner = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Verificar se o usuário já aceitou os cookies
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (!cookiesAccepted) {
      // Mostrar o banner após 2 segundos
      setTimeout(() => {
        setIsVisible(true);
      }, 2000);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-primary shadow-lg z-50 transition-transform duration-500 ease-in-out">
      <div className="container px-6 py-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-dark mb-2">
              {t('cookies.title', 'Uso de Cookies')}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {t('cookies.message', 'Este site utiliza cookies para melhorar sua experiência de navegação. Os cookies nos ajudam a personalizar conteúdo e anúncios, fornecer recursos de mídia social e analisar nosso tráfego. Ao continuar navegando, você concorda com o uso de cookies.')}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto items-center">
            <div className="flex flex-col gap-2 text-center mt-0 md:mt-2">
              <Link
                to="/privacidade"
                className="text-sm text-primary hover:text-primary/80 underline transition-colors"
              >
                {t('cookies.privacyPolicy', 'Política de Privacidade')}
              </Link>
              <Link
                to="/termos"
                className="text-sm text-primary hover:text-primary/80 underline transition-colors"
              >
                {t('cookies.termsAndConditions', 'Termos e Condições')}
              </Link>
            </div>
            <button
              onClick={acceptCookies}
              className="px-4 py-2 text-sm bg-primary text-white hover:bg-primary/90 transition-colors rounded-md"
            >
              {t('cookies.accept', 'Aceitar')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
