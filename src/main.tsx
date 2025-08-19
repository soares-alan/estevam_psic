// src/main.tsx

// Desabilita a restauração automática de scroll do navegador
if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';

// Garantir que o idioma padrão seja pt-BR antes mesmo do i18n ser inicializado
if (!localStorage.getItem('i18nextLng')) {
  localStorage.setItem('i18nextLng', 'pt-BR');
}

import './i18n';
import './index.css';

// Função para controlar o comportamento de scroll no carregamento da página
const AppWithScrollControl = () => {
  useEffect(() => {
    // Solução definitiva para impedir o scroll automático indesejado
    const htmlElement = document.documentElement;
    
    // Aplicar classe para impedir comportamento de scroll automático no carregamento
    htmlElement.classList.add('initial-load');
    
    // Vamos forçar o scroll para o topo no carregamento inicial
    // e depois permitir comportamento normal
    const isPageLoad = performance.now() < 3000; // Considera os primeiros 3 segundos como carregamento inicial
    
    // Remova qualquer comportamento de scroll suave global
    htmlElement.classList.remove('smooth-scroll');
    
    // Primeiro, vamos parar qualquer scroll em andamento
    if (isPageLoad) {
      // Remove o hash da URL para evitar scroll automático do navegador
      if (window.location.hash) {
        history.replaceState(null, '', window.location.pathname + window.location.search);
      }
      setTimeout(() => {
        window.scrollTo(0, 0);
        document.body.style.overflow = 'hidden';
        setTimeout(() => {
          window.scrollTo(0, 0); // Força novamente após possíveis tentativas do navegador
          document.body.style.overflow = '';
          htmlElement.classList.remove('initial-load');
        }, 500);
      }, 10);
    }

    // Event listener para navegação de hash em links internos
    const handleHashClick = () => {
      // Quando um link interno é clicado, adicionamos a classe de scroll suave
      htmlElement.classList.add('smooth-scroll');
      
      // Depois de um tempo, podemos remover a classe de scroll suave
      setTimeout(() => {
        htmlElement.classList.remove('smooth-scroll');
      }, 1000);
    };

    // Adiciona event listeners para links com hash
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleHashClick);
    });

    return () => {
      // Limpeza: remove os event listeners quando o componente é desmontado
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleHashClick);
      });
    };
  }, []);

  return <App />;
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <AppWithScrollControl />
    </HelmetProvider>
  </React.StrictMode>,
);
