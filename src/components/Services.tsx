import { 
  Eye, 
  Stethoscope, 
  Pill, 
  Scissors, 
  Syringe, 
  Camera, 
  Home, 
  FlaskConical,
  Activity
} from 'lucide-react';

const services = [
  {
    icon: Eye,
    title: 'Oftalmologista Veterinário',
    description: 'Cuidado completo da saúde ocular do seu pet',
  },
  {
    icon: Activity,
    title: 'Dentista Veterinário',
    description: 'Tratamentos odontológicos especializados',
  },
  {
    icon: Stethoscope,
    title: 'Oncologista',
    description: 'Diagnóstico e tratamento de tumores',
  },
  {
    icon: Pill,
    title: 'Nefrologista',
    description: 'Saúde renal e tratamentos especializados',
  },
  {
    icon: Scissors,
    title: 'Cirurgia Geral e Especializada',
    description: 'Procedimentos gerais e especializados',
  },
  {
    icon: Syringe,
    title: 'Anestesiologista Veterinário',
    description: 'Anestesia segura e monitorada',
  },
  {
    icon: Camera,
    title: 'Ultrassonografia Abdominal',
    description: 'Exames de imagem abdominal',
  },
  {
    icon: Home,
    title: 'Atendimento Domiciliar',
    description: 'Consultas no conforto da sua casa',
  },
  {
    icon: FlaskConical,
    title: 'Exames Laboratoriais',
    description: 'Análises laboratoriais completas',
  },
];

const Services = () => {
  return (
    <section id="servicos" className="section-padding bg-muted/50">
      <div className="container-narrow mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos Serviços
          </h2>
          <p className="text-muted-foreground text-lg">
            Oferecemos atendimento completo com profissionais especializados em diversas áreas da medicina veterinária.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-background rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-sm transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
