import Header from '@/components/Header';

const Vitrine = () => {
  return (
    <div className="h-screen overflow-hidden flex flex-col">
      {/* Header - 80px */}
      <Header />
      
      {/* Spacer for fixed header */}
      <div className="h-20 flex-shrink-0" />
      
      {/* Iframe - fills remaining space minus badge (63px) */}
      <div className="flex-1" style={{ height: 'calc(100vh - 80px - 63px)' }}>
        <iframe
          src="https://nicpack.egestor.com.br/vitrine/"
          title="Demonstração de Vitrine"
          className="w-full h-full border-none"
        />
      </div>
      
      {/* Badge MonteSite - 63px */}
      <div id="montesite-footer-badge" className="h-[63px] flex-shrink-0" />
    </div>
  );
};

export default Vitrine;
