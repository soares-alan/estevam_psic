// src/pages/PrivacyPage.tsx
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const PrivacyPage = () => {
  const { t } = useTranslation();

  const pageTitle = t('privacy.pageTitle');
  const pageDescription = t('privacy.pageDescription');
  const title = t('privacy.title');
  const lastUpdated = t('privacy.lastUpdated');
  const intro = t('privacy.intro');
  const sections = t('privacy.sections', { returnObjects: true });
  const questions = t('privacy.questions');
  const termsLink = t('privacy.termsLink');
  const contactLink = t('privacy.contactLink');

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Helmet>
      <Header />
      <main className="pt-20">
        <section className="bg-gradient-to-r from-primary/5 to-primary/10 py-12 md:py-16 border-b border-gray-100">
          <div className="container px-6 md:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-semibold text-dark mb-3">
                {title}
              </h1>
              <p className="text-gray-600 text-sm">
                {lastUpdated}
              </p>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16">
          <div className="container px-6 md:px-12">
            <div className="max-w-3xl mx-auto prose prose-gray prose-headings:text-dark prose-headings:font-medium">
              <div className="mb-12 p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                <p className="text-sm text-gray-600 italic">
                  {intro}
                </p>
              </div>
              <div className="space-y-10">
                {Array.isArray(sections) && sections.map((section: any, idx: number) => (
                  <section className="section-item" key={idx}>
                    <h2 className="flex items-center text-xl md:text-2xl font-medium text-dark">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-lg mr-3">{idx + 1}</span>
                      {section.title}
                    </h2>
                    <div className="mt-4 pl-11">
                      <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                        {section.content}
                      </p>
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="py-8 md:py-12 bg-gray-50 border-t border-gray-100">
          <div className="container px-6 md:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-gray-600 mb-4">
                {questions}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="/termos"
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                >
                  <span className="mr-1">{termsLink}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a 
                  href="#contato"
                  onClick={(e) => {
                    e.preventDefault();
                    document.documentElement.classList.add('smooth-scroll');
                    const targetElement = document.getElementById('contato');
                    if (targetElement) {
                      targetElement.scrollIntoView({ behavior: 'smooth' });
                      setTimeout(() => {
                        document.documentElement.classList.remove('smooth-scroll');
                      }, 1000);
                    }
                  }} 
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                >
                  <span className="mr-1">{contactLink}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPage;
