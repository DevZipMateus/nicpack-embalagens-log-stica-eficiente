import Header from '@/components/Header';
import { useEffect, useRef } from 'react';

const Vitrine = () => {
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Copy badge content from main badge to this one
    const mainBadge = document.getElementById('montesite-footer-badge');
    if (mainBadge && badgeRef.current) {
      // Clone the iframe from the main badge
      const iframe = mainBadge.querySelector('iframe');
      if (iframe) {
        const clonedIframe = iframe.cloneNode(true) as HTMLIFrameElement;
        clonedIframe.style.width = '100%';
        clonedIframe.style.height = '100%';
        clonedIframe.style.border = 'none';
        badgeRef.current.innerHTML = '';
        badgeRef.current.appendChild(clonedIframe);
      }
    }
  }, []);

  return (
    <div className="h-screen overflow-hidden flex flex-col">
      {/* Header - 80px */}
      <Header />
      
      {/* Spacer for fixed header */}
      <div className="h-20 flex-shrink-0" />
      
      {/* Main content area */}
      <main className="flex-1 flex flex-col" style={{ height: 'calc(100vh - 80px)' }}>
        {/* Iframe da Vitrine */}
        <iframe
          src="https://nicpack.egestor.com.br/vitrine/"
          title="Demonstração de Vitrine"
          className="w-full flex-1 border-none"
          style={{ height: 'calc(100% - 63px)' }}
        />
        
        {/* Badge MonteSite - 63px */}
        <footer ref={badgeRef} className="h-[63px] flex-shrink-0 w-full bg-background" />
      </main>
    </div>
  );
};

export default Vitrine;
