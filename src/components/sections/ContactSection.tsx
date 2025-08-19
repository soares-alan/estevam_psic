// src/components/sections/ContactSection.tsx
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import Section from '../ui/Section';

const ContactSection = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  
  // Efeito de animação quando a seção entra na viewport
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
    
    const section = document.getElementById('contato');
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <Section id="contato" className="bg-gradient-to-b from-white via-white to-gray-50 py-10">
      <div className="max-w-2xl mx-auto px-4">
        {/* Heading */}
        <div className={`transition-all duration-700 text-center ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h2 className="heading-primary title-underline-center pb-3 text-2xl md:text-3xl">
            {t('contact.title')}
          </h2>
          <p className="mt-4 text-sm md:text-base text-gray-600 max-w-md mx-auto text-balanced">
            {t('contact.quote')}
          </p>
        </div>

        {/* Contact methods */}
        <div className={`mt-8 grid gap-4 sm:gap-5 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} transition-all duration-700 delay-100 sm:grid-cols-1`}>
          {/* WhatsApp */}
          <a
            href="https://wa.me/5599999999999"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t('contact.whatsapp') || 'WhatsApp'}
            className="group flex items-center justify-between rounded-xl border border-gray-200 bg-white/80 backdrop-blur-sm px-5 py-4 shadow-sm hover:shadow-md hover:border-primary/40 hover:bg-white/90 transition-all duration-300"
          >
            <div className="flex items-center gap-4 min-w-0">
              <div className="relative">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-green-50 ring-1 ring-green-100 group-hover:bg-green-100 transition-colors">
                  <svg className="h-5 w-5 text-green-600" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884"/></svg>
                </span>
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium tracking-tight text-dark truncate">{t('contact.whatsapp')}</p>
                <p className="text-xs text-gray-600 truncate leading-relaxed">{t('contact.whatsappDesc')}</p>
              </div>
            </div>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors">
              <svg className="h-4 w-4 text-primary transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
            </div>
          </a>

          {/* Phone */}
            <a
              href="tel:+5599999999999"
              aria-label={t('contact.phone') || 'Telefone'}
              className="group flex items-center justify-between rounded-xl border border-gray-200 bg-white/80 backdrop-blur-sm px-5 py-4 shadow-sm hover:shadow-md hover:border-primary/40 hover:bg-white/90 transition-all duration-300"
            >
              <div className="flex items-center gap-4 min-w-0">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-50 ring-1 ring-blue-100 group-hover:bg-blue-100 transition-colors">
                  <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-medium tracking-tight text-dark truncate">{t('contact.phone')}</p>
                  <p className="text-xs text-gray-600 truncate leading-relaxed">{t('contact.phoneDesc')}</p>
                </div>
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors">
                <svg className="h-4 w-4 text-primary transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
              </div>
            </a>

          {/* Email */}
          <a
            href="mailto:contato@estevamholpert.com.br"
            aria-label={t('contact.email') || 'E-mail'}
            className="group flex items-center justify-between rounded-xl border border-gray-200 bg-white/80 backdrop-blur-sm px-5 py-4 shadow-sm hover:shadow-md hover:border-primary/40 hover:bg-white/90 transition-all duration-300"
          >
            <div className="flex items-center gap-4 min-w-0">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-purple-50 ring-1 ring-purple-100 group-hover:bg-purple-100 transition-colors">
                <svg className="h-5 w-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </span>
              <div className="min-w-0">
                <p className="text-sm font-medium tracking-tight text-dark truncate">{t('contact.email')}</p>
                <p className="text-xs text-gray-600 truncate leading-relaxed">{t('contact.emailDesc')}</p>
              </div>
            </div>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors">
              <svg className="h-4 w-4 text-primary transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
            </div>
          </a>
        </div>

        {/* Final message */}
        <div className={`mt-10 text-center transition-all duration-700 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-sm md:text-base text-gray-600 max-w-md mx-auto leading-relaxed text-balanced italic">
            {t('contact.finalMessage')}
          </p>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
