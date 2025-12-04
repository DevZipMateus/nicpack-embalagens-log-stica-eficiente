import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contato" className="section-padding bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold text-sm rounded-full mb-4">
            Contato
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Fale conosco
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Estamos prontos para atender você e encontrar a melhor solução para o seu negócio
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Endereço</h3>
                  <p className="text-muted-foreground">
                    Rua Niterói, 349 – Jardim Vista Alegre<br />
                    Embu das Artes/SP – CEP 06807-370
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">E-mail</h3>
                  <a
                    href="mailto:contato@nicpack.com.br"
                    className="text-primary hover:underline"
                  >
                    contato@nicpack.com.br
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Horário de funcionamento</h3>
                  <p className="text-muted-foreground">
                    Segunda a quinta: 8h às 18h<br />
                    Sexta: 8h às 17h
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">WhatsApp</h3>
                  <a
                    href="https://wa.me/5511999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Clique para conversar
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Siga-nos nas redes sociais</h3>
              <div className="flex gap-3">
                <a
                  href="https://instagram.com/nicpackembalagens"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                  aria-label="Instagram da NICPACK"
                >
                  <Instagram size={22} />
                </a>
                <a
                  href="https://facebook.com/nicpackembalagens"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                  aria-label="Facebook da NICPACK"
                >
                  <Facebook size={22} />
                </a>
                <a
                  href="https://linkedin.com/company/nicpack"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                  aria-label="LinkedIn da NICPACK"
                >
                  <Linkedin size={22} />
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-[400px] lg:h-full min-h-[400px] rounded-2xl overflow-hidden card-shadow">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.8!2d-46.85!3d-23.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDM5JzAwLjAiUyA0NsKwNTEnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização NICPACK - Embu das Artes/SP"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
