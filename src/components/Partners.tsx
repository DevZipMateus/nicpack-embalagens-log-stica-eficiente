import { useEffect, useState } from 'react';

import avonLogo from '@/assets/partners/avon.jpg';
import lojasAmericanasLogo from '@/assets/partners/lojas-americanas.jpg';
import leroyMerlinLogo from '@/assets/partners/leroy-merlin.jpg';
import casasBahiaLogo from '@/assets/partners/casas-bahia.jpg';
import shoptimeLogo from '@/assets/partners/shoptime.jpg';
import senaiLogo from '@/assets/partners/senai.jpg';
import prefeituraLogo from '@/assets/partners/prefeitura.jpg';
import naturaLogo from '@/assets/partners/natura.jpg';
import jequitiLogo from '@/assets/partners/jequiti.jpg';

const partners = [
  { name: 'Avon', logo: avonLogo },
  { name: 'Lojas Americanas', logo: lojasAmericanasLogo },
  { name: 'Leroy Merlin', logo: leroyMerlinLogo },
  { name: 'Casas Bahia', logo: casasBahiaLogo },
  { name: 'Shoptime', logo: shoptimeLogo },
  { name: 'SENAI', logo: senaiLogo },
  { name: 'Prefeitura', logo: prefeituraLogo },
  { name: 'Natura', logo: naturaLogo },
  { name: 'Jequiti', logo: jequitiLogo },
];

const Partners = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % partners.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Calculate visible partners based on screen size (show 5 at a time on desktop)
  const getVisiblePartners = () => {
    const visible = [];
    for (let i = 0; i < 5; i++) {
      const index = (currentIndex + i) % partners.length;
      visible.push(partners[index]);
    }
    return visible;
  };

  return (
    <section className="py-10 sm:py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mb-2 sm:mb-3">
            Nossos Parceiros
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-2xl mx-auto px-2">
            Empresas que confiam na Nicpack para suas soluções em embalagens
          </p>
        </div>

        {/* Desktop: Show multiple logos */}
        <div className="hidden md:flex items-center justify-center gap-8 lg:gap-12">
          {getVisiblePartners().map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className={`transition-all duration-500 ${
                index === 2 ? 'scale-110 opacity-100' : 'scale-90 opacity-60'
              }`}
            >
              <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                <img
                  src={partner.logo}
                  alt={`Logo ${partner.name}`}
                  className="h-16 lg:h-20 w-auto object-contain mx-auto"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile/Tablet: Single logo carousel */}
        <div className="md:hidden flex flex-col items-center">
          <div className="bg-white rounded-lg p-6 shadow-md mb-6">
            <img
              src={partners[currentIndex].logo}
              alt={`Logo ${partners[currentIndex].name}`}
              className="h-20 sm:h-24 w-auto object-contain mx-auto transition-opacity duration-500"
            />
          </div>
          
          {/* Dots indicator */}
          <div className="flex gap-2">
            {partners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-primary w-4' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                aria-label={`Ir para parceiro ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop dots indicator */}
        <div className="hidden md:flex justify-center gap-2 mt-8">
          {partners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex 
                  ? 'bg-primary w-4' 
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
              aria-label={`Ir para parceiro ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
