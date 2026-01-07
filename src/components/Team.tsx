import { User } from 'lucide-react';

const teamMembers = [
  {
    name: 'Dr. Nome do Profissional',
    specialty: 'Oftalmologista Veterinário',
    crmv: 'CRMV-SP 00000',
  },
  {
    name: 'Dra. Nome do Profissional',
    specialty: 'Cirurgiã Veterinária',
    crmv: 'CRMV-SP 00000',
  },
  {
    name: 'Dr. Nome do Profissional',
    specialty: 'Oncologista Veterinário',
    crmv: 'CRMV-SP 00000',
  },
  {
    name: 'Dra. Nome do Profissional',
    specialty: 'Anestesiologista Veterinária',
    crmv: 'CRMV-SP 00000',
  },
];

const Team = () => {
  return (
    <section id="equipe" className="section-padding">
      <div className="container-narrow mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossa Equipe
          </h2>
          <p className="text-muted-foreground text-lg">
            Profissionais qualificados e dedicados ao bem-estar do seu pet.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="text-center group"
            >
              {/* Photo Placeholder */}
              <div className="w-32 h-32 mx-auto mb-4 bg-muted rounded-full border-2 border-dashed border-border flex flex-col items-center justify-center text-muted-foreground group-hover:border-primary/30 transition-colors">
                <User className="w-10 h-10 mb-1" />
                <span className="text-xs">Aguardando foto</span>
              </div>

              {/* Info */}
              <h3 className="font-semibold text-foreground mb-1">
                {member.name}
              </h3>
              <p className="text-sm text-primary font-medium mb-1">
                {member.specialty}
              </p>
              <p className="text-xs text-muted-foreground">
                {member.crmv}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
