import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Calendar, FileText, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const blogPosts = [
  {
    id: 1,
    title: 'Cuidados essenciais com a saúde ocular do seu pet',
    excerpt: 'Saiba como identificar problemas oculares e manter a visão do seu animal saudável. Conheça os sinais de alerta e quando procurar um especialista.',
    date: '10 Jan 2025',
    category: 'Oftalmologia',
  },
  {
    id: 2,
    title: 'Quando levar seu pet ao dentista veterinário',
    excerpt: 'Conheça os sinais que indicam problemas dentários e a importância da saúde bucal para a qualidade de vida do seu animal.',
    date: '05 Jan 2025',
    category: 'Odontologia',
  },
  {
    id: 3,
    title: 'Emergências veterinárias: quando procurar ajuda',
    excerpt: 'Aprenda a reconhecer situações de emergência e como agir rapidamente para garantir a segurança do seu pet.',
    date: '28 Dez 2024',
    category: 'Emergência',
  },
  {
    id: 4,
    title: 'A importância dos exames preventivos',
    excerpt: 'Descubra por que os check-ups regulares são essenciais para detectar problemas de saúde precocemente.',
    date: '20 Dez 2024',
    category: 'Prevenção',
  },
  {
    id: 5,
    title: 'Cuidados pós-operatórios: guia completo',
    excerpt: 'Orientações importantes para garantir uma recuperação tranquila e segura após procedimentos cirúrgicos.',
    date: '15 Dez 2024',
    category: 'Cirurgia',
  },
  {
    id: 6,
    title: 'Sinais de problemas renais em cães e gatos',
    excerpt: 'Aprenda a identificar os sintomas de doenças renais e a importância do diagnóstico precoce.',
    date: '10 Dez 2024',
    category: 'Nefrologia',
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero */}
        <section className="section-padding bg-muted/50">
          <div className="container-narrow mx-auto">
            <Button variant="ghost" size="sm" className="mb-6" asChild>
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar ao início
              </Link>
            </Button>
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Blog
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Artigos, dicas e informações para ajudar você a cuidar melhor do seu pet.
            </p>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="section-padding">
          <div className="container-narrow mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-background rounded-xl border border-border overflow-hidden group hover:shadow-sm hover:border-primary/30 transition-all duration-300"
                >
                  {/* Image Placeholder */}
                  <div className="aspect-video bg-muted flex items-center justify-center text-muted-foreground">
                    <FileText className="w-10 h-10" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3 text-xs text-muted-foreground">
                      <span className="px-2 py-1 bg-primary/10 text-primary rounded font-medium">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                    </div>

                    <h2 className="font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h2>

                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Carregar mais artigos
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Blog;
