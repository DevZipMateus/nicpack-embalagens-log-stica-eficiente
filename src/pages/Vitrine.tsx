import Header from '@/components/Header';

const Vitrine = () => {
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
        
        {/* Badge MonteSite - 63px - carregado via iframe */}
        <footer className="h-[63px] flex-shrink-0 w-full">
          <iframe
            src="https://vaabpicspdbolvutnscp.supabase.co/functions/v1/get-footer-iframe"
            title="MonteSite Badge"
            className="w-full h-full border-none"
            scrolling="no"
          />
        </footer>
      </main>
    </div>
  );
};

export default Vitrine;
