import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '@/assets/logo-nicpack.png';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#produtos', label: 'Produtos' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#planos', label: 'Planos' },
  { href: '#contato', label: 'Contato' },
  { href: '/vitrine', label: 'Vitrine', isPage: true },
];
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getHref = (link: typeof navLinks[0]) => {
    if (link.isPage) return link.href;
    return isHomePage ? link.href : `/${link.href}`;
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-3 glass shadow-lg' : 'py-4 bg-background'}`}>
      <div className="section-container">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Logo NICPACK - Embalagens e Descartáveis Ltda ME" className="h-10 sm:h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                {link.isPage ? (
                  <Link
                    to={link.href}
                    className="font-medium text-sm tracking-wide link-underline transition-colors text-foreground hover:text-primary"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    href={getHref(link)}
                    className="font-medium text-sm tracking-wide link-underline transition-colors text-foreground hover:text-primary"
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="hidden lg:inline-flex items-center gap-2 px-4 xl:px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all duration-300 hover:shadow-lg">
            Solicitar orçamento
          </a>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2 text-foreground" aria-label="Menu">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 glass shadow-lg border-t border-border/50 animate-fade-in">
            <ul className="flex flex-col py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  {link.isPage ? (
                    <Link
                      to={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-6 py-3 text-foreground hover:bg-secondary hover:text-primary transition-colors font-medium"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={getHref(link)}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-6 py-3 text-foreground hover:bg-secondary hover:text-primary transition-colors font-medium"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
              <li className="px-6 pt-4">
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center px-5 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all"
                >
                  Solicitar orçamento
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;