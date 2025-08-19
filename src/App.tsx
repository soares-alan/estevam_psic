// src/App.tsx
import { Suspense, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Routes, Route, HashRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import WhatsAppButton from './components/ui/WhatsAppButton';
import CookieBanner from './components/ui/CookieBanner';


// Componente para rolar ao topo sempre que a rota mudar
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    // Só rola para o topo se NÃO houver hash na URL
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  }, [pathname, hash]);
  return null;
}

const App = () => {
  return (
    <Suspense fallback={<div className="flex h-screen items-center justify-center">Carregando...</div>}>
      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacidade" element={<PrivacyPage />} />
          <Route path="/termos" element={<TermsPage />} />
        </Routes>
        <WhatsAppButton />
        <CookieBanner />
      </HashRouter>
    </Suspense>
  );
};

export default App;
