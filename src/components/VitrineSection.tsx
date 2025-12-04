import { ShoppingBag, ExternalLink, Package, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';
import vitrineStore from '@/assets/vitrine-store.jpg';

const VitrineSection = () => {
  return (
    <section id="vitrine" className="py-20 bg-muted/30">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-10 sm:mb-12">
          <div className="order-2 lg:order-1">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold text-sm rounded-full mb-4">
              Loja online
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Vitrine Online
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg">
              Explore nosso catálogo completo de produtos e faça seu pedido diretamente pela nossa loja virtual.
            </p>
          </div>
          <div className="order-1 lg:order-2 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl">
            <img 
              src={vitrineStore} 
              alt="Catálogo de produtos de embalagens NICPACK"
              className="w-full h-48 sm:h-64 object-cover"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
          <div className="bg-background rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
            <div className="p-2.5 sm:p-3 bg-primary/10 rounded-lg sm:rounded-xl w-fit mb-3 sm:mb-4">
              <Package className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground text-base sm:text-lg mb-2">
              Catálogo Completo
            </h3>
            <p className="text-muted-foreground text-xs sm:text-sm">
              Acesse todos os nossos produtos com fotos, descrições e especificações técnicas detalhadas.
            </p>
          </div>

          <div className="bg-background rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
            <div className="p-2.5 sm:p-3 bg-primary/10 rounded-lg sm:rounded-xl w-fit mb-3 sm:mb-4">
              <CreditCard className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground text-base sm:text-lg mb-2">
              Orçamento Online
            </h3>
            <p className="text-muted-foreground text-xs sm:text-sm">
              Monte seu carrinho e solicite um orçamento personalizado de forma rápida e prática.
            </p>
          </div>

          <div className="bg-background rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-border shadow-sm hover:shadow-md transition-shadow sm:col-span-2 md:col-span-1">
            <div className="p-2.5 sm:p-3 bg-primary/10 rounded-lg sm:rounded-xl w-fit mb-3 sm:mb-4">
              <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground text-base sm:text-lg mb-2">
              Pedidos Simplificados
            </h3>
            <p className="text-muted-foreground text-xs sm:text-sm">
              Processo de compra simplificado com atendimento personalizado para sua empresa.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/vitrine"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-primary text-primary-foreground font-bold text-base sm:text-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-xl"
          >
            Acessar Vitrine
            <ExternalLink size={18} className="sm:w-5 sm:h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VitrineSection;
