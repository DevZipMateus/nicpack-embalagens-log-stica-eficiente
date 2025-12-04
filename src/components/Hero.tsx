import { ArrowRight, Package, Truck, Shield, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-20"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-primary/80" />

      <div className="section-container relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-6 animate-fade-up opacity-0">
              NICPACK
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-primary-foreground/90 font-light mb-6 animate-fade-up opacity-0 delay-100">
              Transformando logística em eficiência. Proteção, qualidade e agilidade para o seu negócio.
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-up opacity-0 delay-200">
              Soluções completas em embalagens industriais para paletização, proteção e fechamento de mercadorias com mais de 20 anos de experiência.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up opacity-0 delay-300">
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary-foreground text-primary font-bold text-lg hover:bg-primary-foreground/90 transition-all duration-300 hover:shadow-xl"
              >
                Fale conosco
                <ArrowRight size={20} />
              </a>
              <Link
                to="/vitrine"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full btn-outline-white font-semibold text-lg"
              >
                <ShoppingBag size={20} />
                Vitrine Online
              </Link>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="hidden lg:grid grid-cols-1 gap-4 animate-fade-up opacity-0 delay-400">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary-foreground/20 rounded-xl">
                  <Package className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-primary-foreground font-semibold text-lg mb-1">
                    Portfólio completo
                  </h3>
                  <p className="text-primary-foreground/80 text-sm">
                    Filme stretch, fitas, selos, plástico bolha e muito mais.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary-foreground/20 rounded-xl">
                  <Truck className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-primary-foreground font-semibold text-lg mb-1">
                    Logística própria
                  </h3>
                  <p className="text-primary-foreground/80 text-sm">
                    Frota própria com entregas rápidas e rotas otimizadas.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary-foreground/20 rounded-xl">
                  <Shield className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-primary-foreground font-semibold text-lg mb-1">
                    +20 anos de experiência
                  </h3>
                  <p className="text-primary-foreground/80 text-sm">
                    Tradição e confiança no mercado de embalagens.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 75C480 70 600 80 720 85C840 90 960 90 1080 85C1200 80 1320 70 1380 65L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
