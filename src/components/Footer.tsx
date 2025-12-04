import logo from '@/assets/logo-nicpack.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="section-container py-8 sm:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8">
          {/* Logo & Description */}
          <div className="col-span-2">
            <img
              src={logo}
              alt="Logo NICPACK"
              className="h-10 sm:h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-background/70 text-xs sm:text-sm max-w-md">
              NICPACK Indústria e Comércio de Embalagens. Transformando logística em eficiência 
              há mais de 20 anos. Proteção, qualidade e agilidade para o seu negócio.
            </p>
            <p className="text-background/50 text-xs mt-4">
              CNPJ: 27.374.838/0001-00
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-background mb-4">Links rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-background/70 hover:text-background text-sm transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-background/70 hover:text-background text-sm transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#produtos" className="text-background/70 hover:text-background text-sm transition-colors">
                  Produtos
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-background/70 hover:text-background text-sm transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#planos" className="text-background/70 hover:text-background text-sm transition-colors">
                  Planos
                </a>
              </li>
              <li>
                <a href="#contato" className="text-background/70 hover:text-background text-sm transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-background mb-4">Contato</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a href="mailto:contato@nicpack.com.br" className="hover:text-background transition-colors">
                  contato@nicpack.com.br
                </a>
              </li>
              <li>Embu das Artes/SP</li>
              <li>Seg-Qui: 8h-18h | Sex: 8h-17h</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-6">
          <p className="text-center text-background/50 text-sm">
            © {currentYear} NICPACK Indústria e Comércio de Embalagens. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
