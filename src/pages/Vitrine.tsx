import Header from '@/components/Header';
import { useEffect, useRef } from 'react';

const Vitrine = () => {
  const badgeContainerRef = useRef<HTMLDivElement>(null);

  // Lock body scroll when on this page
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    if (!badgeContainerRef.current) return;

    const badgeId = 'montesite-vitrine-badge';
    badgeContainerRef.current.id = badgeId;

    const existingIframe = badgeContainerRef.current.querySelector('iframe');
    if (existingIframe) return;

    const script = document.createElement('script');
    script.src = 'https://vaabpicspdbolvutnscp.supabase.co/functions/v1/get-footer-iframe';
    script.setAttribute('data-target', badgeId);
    
    const originalBadge = document.getElementById('montesite-footer-badge');
    if (originalBadge) {
      originalBadge.id = 'montesite-footer-badge-original';
    }
    badgeContainerRef.current.id = 'montesite-footer-badge';

    script.onload = () => {
      if (originalBadge) {
        originalBadge.id = 'montesite-footer-badge';
      }
      if (badgeContainerRef.current) {
        badgeContainerRef.current.id = badgeId;
      }
    };

    document.body.appendChild(script);

    return () => {
      if (originalBadge) {
        originalBadge.id = 'montesite-footer-badge';
      }
    };
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
        <footer ref={badgeContainerRef} className="h-[63px] flex-shrink-0 w-full bg-background" />
      </main>
    </div>
  );
};

export default Vitrine;
