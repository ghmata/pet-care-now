import { Link } from 'react-router-dom';
import { Facebook, Instagram, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">CV</span>
              </div>
              <div>
                <span className="font-semibold">Clínica Veterinária</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-urgent mb-4">
              <Clock className="w-4 h-4" />
              <span className="font-semibold">Atendimento 24 Horas</span>
            </div>
            <p className="text-sm text-background/70">
              Cuidado especializado para seu pet, a qualquer hora.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a href="#servicos" className="hover:text-background transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#equipe" className="hover:text-background transition-colors">
                  Equipe
                </a>
              </li>
              <li>
                <Link to="/blog" className="hover:text-background transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <a href="#contato" className="hover:text-background transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a href="tel:+5519999999999" className="hover:text-background transition-colors">
                  (19) 99999-9999
                </a>
              </li>
              <li>
                <a href="mailto:contato@clinicavet.com.br" className="hover:text-background transition-colors">
                  contato@clinicavet.com.br
                </a>
              </li>
              <li className="pt-2">
                Rua Exemplo, 123<br />
                Centro, Campinas - SP
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/10 mt-10 pt-6 text-center text-sm text-background/50">
          <p>© {currentYear} Clínica Veterinária. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
