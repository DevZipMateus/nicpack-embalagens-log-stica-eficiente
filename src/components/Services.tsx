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
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 text-primary font-semibold text-xs sm:text-sm rounded-full mb-3 sm:mb-4">
            Nossos serviços
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Muito além dos produtos
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2">
            Oferecemos uma experiência completa com atendimento humanizado e soluções personalizadas
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative glass-card rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-8 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="absolute top-0 left-4 sm:left-5 md:left-8 w-12 sm:w-16 md:w-20 h-1 bg-primary rounded-b-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-primary/10 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 md:mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-primary" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-1.5 sm:mb-2 md:mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-xs sm:text-sm md:text-base">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Delivery Image + Market Segments */}
        <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-20 grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-center">
          <div className="rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-xl">
            <img 
              src={servicesDelivery} 
              alt="Caminhão de entrega NICPACK com caixas para distribuição"
              className="w-full h-40 sm:h-56 md:h-72 object-cover"
            />
          </div>
          <div className="glass-primary rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary-foreground mb-2 sm:mb-3 md:mb-4">
              Segmentos atendidos
            </h3>
            <p className="text-primary-foreground/80 mb-3 sm:mb-4 md:mb-6 text-xs sm:text-sm md:text-base">
              Atuamos no mercado de embalagens industriais, atendendo empresas que necessitam de soluções para proteção, paletização, armazenagem e transporte.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 sm:gap-2 md:gap-3">
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
                  className="bg-primary-foreground/10 backdrop-blur-sm rounded-md sm:rounded-lg md:rounded-xl py-1.5 sm:py-2 md:py-3 px-1.5 sm:px-2 md:px-3 text-center border border-primary-foreground/20"
                >
                  <span className="text-primary-foreground font-medium text-[10px] sm:text-xs md:text-sm">{segment}</span>
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
