// src/pages/HomePage.tsx
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import ServicesSection from '../components/sections/ServicesSection';
import AreasSection from '../components/sections/AreasSection';
import ContactSection from '../components/sections/ContactSection';

const HomePage = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Helmet>
        <html lang={i18n.language} />
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
      </Helmet>

      <Header />
      
      <main className="pt-20">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <AreasSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
};

export default HomePage;
