import { Target, Eye, Heart, Award, Users, Scale, CheckCircle } from 'lucide-react';
import aboutWarehouse from '@/assets/about-warehouse.jpg';

const values = [
  { icon: Award, title: 'Qualidade e Eficiência', desc: 'Compromisso com produtos confiáveis, processos ágeis e resultados consistentes.' },
  { icon: Heart, title: 'Atendimento Humanizado', desc: 'Relações próximas, empáticas e transparentes com cada cliente.' },
  { icon: Target, title: 'Inovação Sustentável', desc: 'Soluções que unem tecnologia e responsabilidade ambiental.' },
  { icon: CheckCircle, title: 'Comprometimento', desc: 'Responsabilidade, seriedade e dedicação em todas as etapas.' },
  { icon: Users, title: 'Valorização das Pessoas', desc: 'Crescimento através do desenvolvimento e reconhecimento.' },
  { icon: Scale, title: 'Transparência e Ética', desc: 'Integridade e clareza nas negociações e relacionamentos.' },
];

const About = () => {
  return (
    <section id="sobre" className="section-padding bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold text-sm rounded-full mb-4">
            Sobre nós
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Conheça a NICPACK
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Mais de 20 anos transformando a logística de empresas em todo o Brasil
          </p>
        </div>

        {/* History */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold text-foreground mb-4">Nossa história</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                A Nicpack nasceu com o propósito de entregar muito mais do que materiais para embalagem. 
                Sua história é construída sobre mais de 20 anos de experiência no comércio de soluções 
                para paletização, proteção e fechamento de mercadorias, sempre pautada pela qualidade, 
                eficiência e parceria com os clientes.
              </p>
              <p>
                Localizada em Embu das Artes/SP, próxima ao acesso do Rodoanel, a empresa estruturou 
                uma operação logística ágil e altamente eficiente. Com frota própria, garantimos rotas 
                otimizadas, prazos reduzidos e capacidade de resposta rápida às demandas dos clientes.
              </p>
              <p>
                Um dos pilares que mais nos define é o atendimento humanizado, com equipe comercial 
                especializada preparada para atender via WhatsApp, telefone, e-mail e Instagram, além de 
                visitas técnicas com demonstração prática dos materiais.
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-3xl rotate-3"></div>
              <img 
                src={aboutWarehouse} 
                alt="Armazém NICPACK com paletes embalados em filme stretch" 
                className="relative rounded-2xl shadow-xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-6 sm:p-8 mb-20">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-primary-foreground">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-extrabold mb-1">20+</div>
              <div className="text-xs sm:text-sm opacity-80">Anos de experiência</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-extrabold mb-1">100+</div>
              <div className="text-xs sm:text-sm opacity-80">Produtos disponíveis</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-extrabold mb-1">SP</div>
              <div className="text-xs sm:text-sm opacity-80">Embu das Artes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-extrabold mb-1">24h</div>
              <div className="text-xs sm:text-sm opacity-80">Entrega expressa</div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-16">
          <div className="bg-secondary rounded-2xl p-6 sm:p-8">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              <Target className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Missão</h3>
            <p className="text-muted-foreground">
              Oferecer soluções em embalagens com qualidade, inovação e responsabilidade, 
              assegurando a proteção dos produtos e a excelência no atendimento, contribuindo 
              para o crescimento sustentável dos nossos clientes e parceiros.
            </p>
          </div>
          <div className="bg-secondary rounded-2xl p-6 sm:p-8">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              <Eye className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Visão</h3>
            <p className="text-muted-foreground">
              Ser reconhecida como referência nacional em soluções de embalagem, destacando-se 
              pela inovação, pelo compromisso com a sustentabilidade e pela excelência no 
              relacionamento com clientes, colaboradores e fornecedores.
            </p>
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">Nossos valores</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-4 sm:p-5 text-center card-shadow hover:card-shadow-elevated transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <value.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground text-xs sm:text-sm mb-1">{value.title}</h4>
                <p className="text-[10px] sm:text-xs text-muted-foreground leading-tight">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
