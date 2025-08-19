// src/components/ui/LanguageSelector.tsx
import { useTranslation } from 'react-i18next';
import { LanguageSelectorProps } from '../../types';

const LanguageSelector = ({ className = '' }: LanguageSelectorProps) => {
  const { i18n } = useTranslation();
  

  const changeLanguage = (lng: string) => {
    if (lng === 'pt' || lng === 'pt-BR') {
      i18n.changeLanguage('pt-BR');
      localStorage.setItem('i18nextLng', 'pt-BR');
    } else if (lng === 'en' || lng === 'en-US') {
      i18n.changeLanguage('en-US');
      localStorage.setItem('i18nextLng', 'en-US');
    } else {
      i18n.changeLanguage(lng);
      localStorage.setItem('i18nextLng', lng);
    }
    
  }

  return (
    <div className={`flex space-x-2 ${className}`}>
      <button
        onClick={() => changeLanguage('pt-BR')}
        className={`px-2 py-1 rounded text-sm font-medium transition-colors ${
          i18n.language === 'pt-BR'
            ? 'bg-accent text-white'
            : 'text-dark hover:bg-gray-100'
        }`}
      >
        PT
      </button>
      <button
        onClick={() => changeLanguage('en-US')}
        className={`px-2 py-1 rounded text-sm font-medium transition-colors ${
          i18n.language === 'en-US'
            ? 'bg-accent text-white'
            : 'text-dark hover:bg-gray-100'
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSelector;
