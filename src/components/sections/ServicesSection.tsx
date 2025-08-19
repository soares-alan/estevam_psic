// src/components/sections/ServicesSection.tsx
import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Section from '../ui/Section';
import estevamaImage from '../../assets/Estevam.jpg';

const ServicesSection: React.FC = () => {
  const { t } = useTranslation();
  
  // Estados para controlar animações e visibilidade
  const [isVisible, setIsVisible] = useState(false);          // Seção está visível na viewport
  const [showSecondMessage, setShowSecondMessage] = useState(false); // Mostrar a segunda mensagem de SMS
  const [isImageLoaded, setIsImageLoaded] = useState(false);  // Imagem de perfil carregada
  const messagesEndRef = useRef<HTMLDivElement>(null);        // Referência para rolar até a última mensagem
  const sectionRef = useRef<HTMLElement>(null);               // Referência para a seção
  
  // Efeito para verificar se estamos em um carregamento inicial de página
  useEffect(() => {
    // No primeiro render, definimos o estado inicial sem animações
    setIsVisible(true);
    
    // Pequeno delay para mostrar a segunda mensagem, mas sem animações que possam causar scroll
    const timer = setTimeout(() => {
      setShowSecondMessage(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Efeito separado para observar interações após o carregamento inicial
  useEffect(() => {
    // Este observer só será usado para detecções de scroll após o carregamento inicial,
    // não causando scroll automático
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    // Usando ref em vez de getElementById para evitar problemas
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  // Scroll para a última mensagem quando aparecer, mas apenas se for uma interação do usuário
  useEffect(() => {
    // Não queremos fazer scroll automático no carregamento inicial da página
    if (!showSecondMessage || !messagesEndRef.current) {
      return;
    }
    
    // Verifica se estamos no carregamento inicial da página ou em uma navegação manual
    const isPageLoad = document.readyState === 'complete' && 
                      performance.navigation && 
                      (performance.navigation.type === 0 || performance.navigation.type === 1);
                      
    const hasTargetHash = window.location.hash === '#atendimento';
    
    // Só faz scroll na segunda mensagem se NÃO for carregamento inicial
    // ou se for explicitamente direcionado pelo hash da URL
    if (!isPageLoad || hasTargetHash) {
      // Adicionamos um pequeno delay para garantir que a interface foi renderizada
      const timer = setTimeout(() => {
        if (messagesEndRef.current && document.hasFocus()) {
          messagesEndRef.current.scrollIntoView({ 
            behavior: 'smooth',
            block: 'center'
          });
        }
      }, 300);
      
      return () => clearTimeout(timer);
    }
  }, [showSecondMessage]);

  // Mensagens de SMS
  const messages = [
    {
      sender: t('services.chat.doctorName', 'Dr. Estevam'),
      text: t('services.chat.doctorMessage', 'Olá! Sua sessão de psicologia online está prestes a começar. Prepare-se para sua consulta no conforto do seu espaço, aproveitando a praticidade e confidencialidade do atendimento online.'),
      time: '09:30'
    },
    {
      sender: t('services.chat.patientName', 'Paciente'),
      text: t('services.chat.patientMessage', 'Obrigado pela mensagem! Fazer a sessão no conforto de casa faz toda a diferença para mim. Estou pronto para começar.'),
      time: '09:32'
    }
  ];

  // Renderização de uma mensagem no estilo SMS com animação
  const MessageBubble = ({ 
    message, 
    isUser, 
    show = true,
    isLast = false
  }: { 
    message: typeof messages[0], 
    isUser: boolean,
    show?: boolean,
    isLast?: boolean
  }) => (
    <div 
      ref={isLast ? messagesEndRef : undefined}
      className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4 transition-all duration-500 ease-out transform ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <div 
        className={`relative max-w-md px-4 py-3 rounded-lg shadow-md ${
          isUser 
            ? 'bg-white text-dark mr-2 rounded-tr-none' 
            : 'bg-primary text-white ml-2 rounded-tl-none'
        }`}
      >
        <span className={`block font-medium mb-1 ${isUser ? 'text-primary' : 'text-white'}`}>
          {message.sender}
        </span>
        <p className="text-sm">{message.text}</p>
        <span className={`block text-xs mt-1 text-right ${isUser ? 'text-gray-500' : 'text-white/80'}`}>
          {message.time}
        </span>
        
        {/* Triângulo para balão de fala */}
        <div 
          className={`absolute top-0 w-3 h-3 transform ${
            isUser 
              ? 'right-0 translate-x-1/2 -translate-y-1/3 bg-white rotate-45' 
              : 'left-0 -translate-x-1/2 -translate-y-1/3 bg-primary rotate-45'
          }`}
        ></div>
      </div>
    </div>
  );

  return (
    <Section id="atendimento" className="bg-gray-50 overflow-hidden">
      <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-4xl md:text-5xl font-bold text-dark mb-5">{t('services.title')}</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-5 rounded-full"></div>
        <p className="text-xl max-w-2xl mx-auto text-gray-700 leading-relaxed">
          {t('services.description')}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center max-w-6xl mx-auto">
        {/* Coluna esquerda - Conversas */}
        <div className={`bg-gray-100 p-5 md:p-7 rounded-2xl shadow-lg transform transition-all duration-700 delay-100 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
        }`}>
          <div className="bg-white rounded-xl p-5 shadow-inner">
            {/* Cabeçalho da conversa */}
            <div className="flex items-center pb-3 mb-5 border-b border-gray-200">
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-primary text-lg">{t('services.chat.headerTitle', 'Psicologia Online')}</h3>
                <p className="text-sm text-gray-500">{t('services.chat.headerSubtitle', 'Atendimento confidencial e seguro')}</p>
              </div>
            </div>
            
            {/* Área de mensagens com animação */}
            <div className="space-y-4">
              <MessageBubble 
                message={messages[0]} 
                isUser={false} 
                show={isVisible}
              />
              <MessageBubble 
                message={messages[1]} 
                isUser={true}
                show={showSecondMessage}
                isLast={true}
              />
            </div>
            
            {/* Indicador de digitação - aparece e desaparece */}
            {!showSecondMessage && (
              <div className="flex items-center space-x-1 ml-2 mt-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-primary/60 typing-dot"></div>
                <div className="w-2 h-2 rounded-full bg-primary/60 typing-dot" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 rounded-full bg-primary/60 typing-dot" style={{ animationDelay: '0.4s' }}></div>
              </div>
            )}
            
            {/* Rodapé da conversa com coração */}
            <div className={`flex justify-center mt-6 transition-all duration-500 ${showSecondMessage ? 'opacity-100' : 'opacity-0'}`}>
              <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="white" viewBox="0 0 24 24" stroke="white">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        {/* Coluna direita - Celular */}
        <div className={`relative flex justify-center items-center transform transition-all duration-700 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Destaque circular por trás do celular com pulsação */}
          <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-primary/10 rounded-full pulse-circle"></div>
          
          <div className="relative z-10">
            {/* Moldura do celular */}
            <div className="relative w-60 md:w-72 h-auto rounded-[36px] bg-dark p-3 shadow-xl">
              {/* Notch do celular */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-dark rounded-b-xl"></div>
              
              {/* Tela do celular */}
              <div className="bg-white rounded-[24px] overflow-hidden h-full">
                {/* Cabeçalho da tela */}
                <div className="bg-primary py-3 px-4">
                  <div className="text-center">
                    <h3 className="text-white text-sm font-medium">{t('services.chat.headerTitle', 'Psicologia Online')}</h3>
                    <p className="text-white text-xs opacity-80 mt-0.5">{t('services.chat.headerSubtitle', 'Atendimento confidencial e seguro')}</p>
                  </div>
                </div>
                
                {/* Conteúdo da tela */}
                <div className="p-4 flex flex-col items-center">
                  {/* Perfil de foto com hover effect */}
                  <div className="w-32 h-32 rounded-lg overflow-hidden border-4 border-gray-200 mb-6 shadow-md hover:shadow-lg transition-shadow">
                    <img 
                      src={estevamaImage} 
                      alt={t('services.doctorImageAlt', 'Dr. Estevam Holpert')} 
                      className={`w-full h-full object-cover transition-transform hover:scale-105 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
                      onLoad={() => setIsImageLoaded(true)}
                      onError={(e) => {
                        // Fallback para caso a imagem não carregue
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = 'https://via.placeholder.com/128?text=Dr.+Estevam';
                        setIsImageLoaded(true);
                      }}
                    />
                    {!isImageLoaded && (
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                      </div>
                    )}
                  </div>
                  
                  {/* Status/Ícones */}
                  <div className="w-full space-y-4">
                    {/* Câmera status */}
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center text-primary mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="flex-1 h-1 bg-gray-200 rounded-full">
                        <div className="w-3/4 h-1 bg-primary rounded-full"></div>
                      </div>
                      <div className="w-6 h-6 ml-2 text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    
                    {/* Áudio status com animação */}
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center text-primary mr-2 animate-pulse">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                        </svg>
                      </div>
                      <div className="flex-1 h-1 bg-gray-200 rounded-full">
                        <div className="w-full h-1 bg-primary rounded-full"></div>
                      </div>
                      <div className="w-6 h-6 ml-2 text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Seção inferior com cards de tipos de atendimento */}
      <div className={`mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        <div className="text-center mb-10">
          <h3 className="text-2xl font-semibold text-dark">{t('services.modalitiesTitle')}</h3>
          <p className="mt-2 text-gray-600">{t('services.modalitiesSubtitle')}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Card 1 - Atendimento Online */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
            <div className="h-16 w-16 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 className="text-2xl font-medium text-dark mb-3">{t('services.types.online.title')}</h4>
            <p className="text-gray-600 mb-5 text-lg">{t('services.types.online.description')}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full">{t('services.types.online.tag1', 'Flexibilidade')}</span>
              <span className="px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full">{t('services.types.online.tag2', 'Conforto')}</span>
              <span className="px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full">{t('services.types.online.tag3', 'Segurança')}</span>
            </div>
          </div>
          
          {/* Card 2 - Atendimento Individual */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
            <div className="h-16 w-16 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h4 className="text-2xl font-medium text-dark mb-3">{t('services.types.individual.title')}</h4>
            <p className="text-gray-600 mb-5 text-lg">{t('services.types.individual.description')}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full">{t('services.types.individual.tag1', 'Personalizado')}</span>
              <span className="px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full">{t('services.types.individual.tag2', 'Confidencial')}</span>
              <span className="px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full">{t('services.types.individual.tag3', 'Dedicado')}</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Botão de Contato Flutuante */}
      <div className={`mt-14 text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        <a 
          href="#contato" 
          className="inline-flex items-center px-8 py-4 bg-primary text-white font-medium text-lg rounded-full shadow-lg hover:bg-primary/90 transition-all transform hover:-translate-y-1 hover:shadow-xl"
          aria-label={t('services.contactButton', 'Entre em contato')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <span>{t('services.contactButton', 'Entre em contato')}</span>
        </a>
      </div>
    </Section>
  );
};

export default ServicesSection;

