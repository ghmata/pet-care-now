import { Button } from '@/components/ui/button';
import { MessageCircle, ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToServices = () => {
    const element = document.querySelector('#servicos');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-urgent/10 text-urgent rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-urgent rounded-full animate-pulse" />
              Plantão pelo telefone 19 983989800
            </div>

            {/* Title */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Clínica Veterinária{' '}
                <span className="text-primary">Especializada</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
                Cuidado especializado para seu pet, disponível a qualquer momento. 
                Estrutura completa e profissionais dedicados.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" asChild>
                <a
                  href="https://wa.me/5519983989800?text=Olá! Vim pelo site e gostaria de informações."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Fale Conosco
                </a>
              </Button>
              <Button variant="hero-outline" size="xl" onClick={scrollToServices}>
                Ver Serviços
                <ArrowDown className="w-5 h-5" />
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-8 pt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-success rounded-full" />
                Atendimento imediato
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-success rounded-full" />
                Profissionais qualificados
              </div>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="relative animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
            <div className="aspect-[4/3] bg-muted rounded-2xl border-2 border-dashed border-border flex flex-col items-center justify-center text-muted-foreground">
              <div className="w-20 h-20 bg-muted-foreground/20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <p className="font-medium text-center px-8">Foto da Clínica</p>
              <p className="text-sm mt-1">Aguardando imagem real</p>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-secondary/10 rounded-xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
