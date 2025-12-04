import { Truck, Users, Recycle, Headphones, MapPin, ShoppingCart } from 'lucide-react';
import servicesDelivery from '@/assets/services-delivery.jpg';

const services = [
  {
    icon: MapPin,
    title: 'Visita técnica',
    description: 'Demonstração prática dos materiais conduzida por profissionais capacitados para orientar a melhor solução.',
  },
  {
    icon: Truck,
    title: 'Logística própria',
    description: 'Frota própria com entregas rápidas, rotas otimizadas e capacidade de resposta ágil às demandas.',
  },
  {
    icon: Headphones,
    title: 'Atendimento consultivo',
    description: 'Suporte via WhatsApp, telefone, e-mail e Instagram com equipe especializada.',
  },
  {
    icon: Recycle,
    title: 'Logística reversa',
    description: 'Programa de recolhimento de tubetes, promovendo sustentabilidade e economia circular.',
  },
  {
    icon: Users,
    title: 'Suporte técnico',
    description: 'Orientação especializada na escolha das melhores soluções de embalagem para cada necessidade.',
  },
  {
    icon: ShoppingCart,
    title: 'Vendas em marketplaces',
    description: 'Presença em plataformas digitais para maior praticidade e autonomia na compra.',
  },
];

const Services = () => {
  return (
    <section id="servicos" className="section-padding bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold text-sm rounded-full mb-4">
            Nossos serviços
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Muito além dos produtos
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-4">
            Oferecemos uma experiência completa com atendimento humanizado e soluções personalizadas
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-xl sm:rounded-2xl p-5 sm:p-8 border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="absolute top-0 left-5 sm:left-8 w-16 sm:w-20 h-1 bg-primary rounded-b-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-secondary rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-primary/10 transition-colors duration-300">
                <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm sm:text-base">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Delivery Image + Market Segments */}
        <div className="mt-12 sm:mt-20 grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl">
            <img 
              src={servicesDelivery} 
              alt="Caminhão de entrega NICPACK com caixas para distribuição"
              className="w-full h-56 sm:h-72 object-cover"
            />
          </div>
          <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-primary-foreground mb-3 sm:mb-4">
              Segmentos atendidos
            </h3>
            <p className="text-primary-foreground/80 mb-4 sm:mb-6 text-sm sm:text-base">
              Atuamos no mercado de embalagens industriais, atendendo empresas que necessitam de soluções para proteção, paletização, armazenagem e transporte.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
              {[
                'Indústria',
                'Centros de distribuição',
                'Atacado e varejo',
                'E-commerce',
                'Construção civil',
                'Transporte',
              ].map((segment, index) => (
                <div
                  key={index}
                  className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg sm:rounded-xl py-2 sm:py-3 px-2 sm:px-3 text-center border border-primary-foreground/20"
                >
                  <span className="text-primary-foreground font-medium text-xs sm:text-sm">{segment}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
