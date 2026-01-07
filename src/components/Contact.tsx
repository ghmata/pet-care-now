import { Button } from '@/components/ui/button';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle 
} from 'lucide-react';

const Contact = () => {
  return (
    <section id="contato" className="section-padding">
      <div className="container-narrow mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Entre em Contato
          </h2>
          <p className="text-muted-foreground text-lg">
            Estamos sempre prontos para atender você e seu pet.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Endereço</h3>
                <p className="text-muted-foreground">
                  Rua Exemplo, 123 - Centro<br />
                  Campinas - SP, 13000-000
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Telefone</h3>
                <a 
                  href="tel:+5519999999999" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  (19) 99999-9999
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">E-mail</h3>
                <a 
                  href="mailto:contato@clinicavet.com.br" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  contato@clinicavet.com.br
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-urgent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-urgent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Horário</h3>
                <p className="text-urgent font-semibold text-lg">
                  24 HORAS
                </p>
                <p className="text-sm text-muted-foreground">
                  Todos os dias, incluindo feriados
                </p>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="pt-4">
              <Button variant="whatsapp" size="xl" className="w-full sm:w-auto" asChild>
                <a
                  href="https://wa.me/5519999999999?text=Olá! Vim pelo site e gostaria de informações."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chamar no WhatsApp
                </a>
              </Button>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="bg-muted rounded-xl border border-border aspect-square lg:aspect-auto flex items-center justify-center text-muted-foreground">
            <div className="text-center p-8">
              <MapPin className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p className="font-medium">Mapa da Localização</p>
              <p className="text-sm mt-1">Integração com Google Maps</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
