import { ShoppingBag, ExternalLink, Package, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';
import vitrineStore from '@/assets/vitrine-store.jpg';

const VitrineSection = () => {
  return (
    <section id="vitrine" className="section-padding bg-muted/30">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center mb-8 sm:mb-10 md:mb-12">
          <div className="order-2 lg:order-1">
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 text-primary font-semibold text-xs sm:text-sm rounded-full mb-3 sm:mb-4">
              Loja online
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              Vitrine Online
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
              Explore nosso catálogo completo de produtos e faça seu pedido diretamente pela nossa loja virtual.
            </p>
          </div>
          <div className="order-1 lg:order-2 rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-xl">
            <img 
              src={vitrineStore} 
              alt="Catálogo de produtos de embalagens NICPACK"
              className="w-full h-40 sm:h-48 md:h-64 object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8 md:mb-10">
          <div className="bg-background rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
            <div className="p-2 sm:p-2.5 md:p-3 bg-primary/10 rounded-md sm:rounded-lg md:rounded-xl w-fit mb-2 sm:mb-3 md:mb-4">
              <Package className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground text-sm sm:text-base md:text-lg mb-1.5 sm:mb-2">
              Catálogo Completo
            </h3>
            <p className="text-muted-foreground text-[10px] sm:text-xs md:text-sm">
              Acesse todos os nossos produtos com fotos, descrições e especificações técnicas detalhadas.
            </p>
          </div>

          <div className="bg-background rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
            <div className="p-2 sm:p-2.5 md:p-3 bg-primary/10 rounded-md sm:rounded-lg md:rounded-xl w-fit mb-2 sm:mb-3 md:mb-4">
              <CreditCard className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground text-sm sm:text-base md:text-lg mb-1.5 sm:mb-2">
              Orçamento Online
            </h3>
            <p className="text-muted-foreground text-[10px] sm:text-xs md:text-sm">
              Monte seu carrinho e solicite um orçamento personalizado de forma rápida e prática.
            </p>
          </div>

          <div className="bg-background rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 border border-border shadow-sm hover:shadow-md transition-shadow sm:col-span-2 md:col-span-1">
            <div className="p-2 sm:p-2.5 md:p-3 bg-primary/10 rounded-md sm:rounded-lg md:rounded-xl w-fit mb-2 sm:mb-3 md:mb-4">
              <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground text-sm sm:text-base md:text-lg mb-1.5 sm:mb-2">
              Pedidos Simplificados
            </h3>
            <p className="text-muted-foreground text-[10px] sm:text-xs md:text-sm">
              Processo de compra simplificado com atendimento personalizado para sua empresa.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/vitrine"
            className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-full bg-primary text-primary-foreground font-bold text-sm sm:text-base md:text-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-xl"
          >
            Acessar Vitrine
            <ExternalLink size={16} className="sm:w-[18px] sm:h-[18px] md:w-5 md:h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VitrineSection;
