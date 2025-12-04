import { Truck, Users, Recycle, Headphones, MapPin, ShoppingCart } from 'lucide-react';

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
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold text-sm rounded-full mb-4">
            Nossos serviços
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Muito além dos produtos
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Oferecemos uma experiência completa com atendimento humanizado e soluções personalizadas
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="absolute top-0 left-8 w-20 h-1 bg-primary rounded-b-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors duration-300">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Market Segments */}
        <div className="mt-20 bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
              Segmentos atendidos
            </h3>
            <p className="text-primary-foreground/80">
              Atendemos empresas de diversos portes e segmentos com soluções personalizadas
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              'Indústria',
              'Logística',
              'Atacado',
              'E-commerce',
              'Construção',
              'Transporte',
            ].map((segment, index) => (
              <div
                key={index}
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl py-4 px-3 text-center border border-primary-foreground/20"
              >
                <span className="text-primary-foreground font-medium text-sm">{segment}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
