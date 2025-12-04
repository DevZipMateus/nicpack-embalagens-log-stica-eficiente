import { Check, ArrowRight } from 'lucide-react';

const plans = [
  {
    name: 'Fornecimento contínuo',
    description: 'Reposição recorrente de materiais com condições especiais',
    features: [
      'Programação de entregas',
      'Preços diferenciados',
      'Prioridade no atendimento',
      'Controle de estoque',
    ],
    highlight: false,
  },
  {
    name: 'Parceria logística',
    description: 'Prioridade nas entregas e acompanhamento dedicado',
    features: [
      'Entrega expressa',
      'Gestor de conta exclusivo',
      'Relatórios mensais',
      'Condições flexíveis',
      'Suporte prioritário',
    ],
    highlight: true,
  },
  {
    name: 'Solução personalizada',
    description: 'Combinação de produtos e suporte técnico sob medida',
    features: [
      'Análise de necessidades',
      'Visita técnica inclusa',
      'Projeto customizado',
      'Treinamento de equipe',
    ],
    highlight: false,
  },
];

const Plans = () => {
  return (
    <section id="planos" className="section-padding bg-secondary">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold text-sm rounded-full mb-4">
            Nossos planos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Escolha a melhor opção para você
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Planos flexíveis que se adaptam às necessidades do seu negócio
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 ${
                plan.highlight
                  ? 'bg-primary text-primary-foreground shadow-2xl scale-105'
                  : 'bg-card card-shadow'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-foreground text-background text-xs font-bold rounded-full">
                  Mais popular
                </div>
              )}
              <h3
                className={`text-xl font-bold mb-2 ${
                  plan.highlight ? 'text-primary-foreground' : 'text-foreground'
                }`}
              >
                {plan.name}
              </h3>
              <p
                className={`text-sm mb-6 ${
                  plan.highlight ? 'text-primary-foreground/80' : 'text-muted-foreground'
                }`}
              >
                {plan.description}
              </p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        plan.highlight ? 'bg-primary-foreground/20' : 'bg-primary/10'
                      }`}
                    >
                      <Check
                        className={`w-3 h-3 ${
                          plan.highlight ? 'text-primary-foreground' : 'text-primary'
                        }`}
                      />
                    </div>
                    <span
                      className={`text-sm ${
                        plan.highlight ? 'text-primary-foreground/90' : 'text-muted-foreground'
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                  plan.highlight
                    ? 'bg-primary-foreground text-primary hover:bg-primary-foreground/90'
                    : 'bg-primary text-primary-foreground hover:bg-primary/90'
                }`}
              >
                Saiba mais
                <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
