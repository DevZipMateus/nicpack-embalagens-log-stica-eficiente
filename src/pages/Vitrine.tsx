import Header from '@/components/Header';
import { useEffect } from 'react';

const Vitrine = () => {
  useEffect(() => {
    // Load MonteSite badge script dynamically for this page
    const existingScript = document.querySelector('script[src*="get-footer-iframe"]');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://vaabpicspdbolvutnscp.supabase.co/functions/v1/get-footer-iframe';
      document.body.appendChild(script);
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
        {/* Iframe - fills remaining space minus badge (63px) */}
        <iframe
          src="https://nicpack.egestor.com.br/vitrine/"
          title="Demonstração de Vitrine"
          className="w-full flex-1 border-none"
          style={{ height: 'calc(100% - 63px)' }}
        />
        
        {/* Badge MonteSite - 63px - inside body */}
        <footer id="montesite-footer-badge-vitrine" className="h-[63px] flex-shrink-0 w-full bg-background">
          <div id="montesite-footer-badge" className="h-full w-full" />
        </footer>
      </main>
    </div>
  );
};

export default Vitrine;
