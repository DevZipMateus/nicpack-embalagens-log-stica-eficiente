import { Package, Layers, CircleDot, Grip, FileText, Box, Wrench, CornerRightDown } from 'lucide-react';

const products = [
  {
    icon: Layers,
    name: 'Filme stretch',
    description: 'Para paletização e proteção de cargas com alta resistência e aderência.',
  },
  {
    icon: CircleDot,
    name: 'Fita PET e PP',
    description: 'Fitas para arqueação manual e automática com alta resistência à tração.',
  },
  {
    icon: Grip,
    name: 'Selo PET',
    description: 'Selos metálicos e plásticos para fechamento seguro de fitas de arqueação.',
  },
  {
    icon: Package,
    name: 'Fitas adesivas',
    description: 'Fitas transparentes, coloridas e personalizadas para fechamento de caixas.',
  },
  {
    icon: Box,
    name: 'Plástico bolha',
    description: 'Proteção contra impactos e arranhões para produtos sensíveis.',
  },
  {
    icon: FileText,
    name: 'Papel kraft e gomado',
    description: 'Papéis para embalagem, proteção e fechamento ecológico.',
  },
  {
    icon: CornerRightDown,
    name: 'Cantoneiras e tubetes',
    description: 'Proteção de bordas e cantos para evitar danos durante o transporte.',
  },
  {
    icon: Wrench,
    name: 'Aparelhos e acessórios',
    description: 'Esticadores, seladores, desbobinadores e kits completos para aplicação.',
  },
];

const Products = () => {
  return (
    <section id="produtos" className="section-padding bg-secondary">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold text-sm rounded-full mb-4">
            Nossos produtos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Soluções completas em embalagens
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Trabalhamos com materiais para paletização, proteção e fechamento de mercadorias
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-6 card-shadow hover:card-shadow-elevated transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <product.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{product.name}</h3>
              <p className="text-muted-foreground text-sm">{product.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg"
          >
            Solicitar catálogo completo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
