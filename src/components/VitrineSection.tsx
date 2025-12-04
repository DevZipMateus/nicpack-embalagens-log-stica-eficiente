import { ShoppingBag, ExternalLink, Package, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';

const VitrineSection = () => {
  return (
    <section id="vitrine" className="py-20 bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Vitrine Online
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore nosso catálogo completo de produtos e faça seu pedido diretamente pela nossa loja virtual.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-background rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
            <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
              <Package className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground text-lg mb-2">
              Catálogo Completo
            </h3>
            <p className="text-muted-foreground text-sm">
              Acesse todos os nossos produtos com fotos, descrições e especificações técnicas detalhadas.
            </p>
          </div>

          <div className="bg-background rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
            <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
              <CreditCard className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground text-lg mb-2">
              Orçamento Online
            </h3>
            <p className="text-muted-foreground text-sm">
              Monte seu carrinho e solicite um orçamento personalizado de forma rápida e prática.
            </p>
          </div>

          <div className="bg-background rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
            <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
              <ShoppingBag className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground text-lg mb-2">
              Pedidos Simplificados
            </h3>
            <p className="text-muted-foreground text-sm">
              Processo de compra simplificado com atendimento personalizado para sua empresa.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/vitrine"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-xl"
          >
            Acessar Vitrine
            <ExternalLink size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VitrineSection;
