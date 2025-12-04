import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/logo-nicpack.png';
const navLinks = [{
  href: '#inicio',
  label: 'Início'
}, {
  href: '#sobre',
  label: 'Sobre'
}, {
  href: '#produtos',
  label: 'Produtos'
}, {
  href: '#servicos',
  label: 'Serviços'
}, {
  href: '#planos',
  label: 'Planos'
}, {
  href: '#contato',
  label: 'Contato'
}];
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background shadow-sm ${isScrolled ? 'py-3' : 'py-4'}`}>
      <div className="section-container">
        <nav className="flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-2">
            <img src={logo} alt="Logo NICPACK - Embalagens e Descartáveis Ltda ME" className="h-20 md:h-12 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map(link => <li key={link.href}>
                <a href={link.href} className="font-medium text-sm tracking-wide link-underline transition-colors text-foreground hover:text-primary">
                  {link.label}
                </a>
              </li>)}
          </ul>

          {/* CTA Button */}
          <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all duration-300 hover:shadow-lg">
            Solicitar orçamento
          </a>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 text-foreground" aria-label="Menu">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && <div className="md:hidden absolute top-full left-0 right-0 bg-background shadow-lg border-t border-border animate-fade-in">
            <ul className="flex flex-col py-4">
              {navLinks.map(link => <li key={link.href}>
                  <a href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="block px-6 py-3 text-foreground hover:bg-secondary hover:text-primary transition-colors font-medium">
                    {link.label}
                  </a>
                </li>)}
              <li className="px-6 pt-4">
                <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="block text-center px-5 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all">
                  Solicitar orçamento
                </a>
              </li>
            </ul>
          </div>}
      </div>
    </header>;
};
export default Header;