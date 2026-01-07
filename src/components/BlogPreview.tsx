import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, FileText } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'Cuidados essenciais com a saúde ocular do seu pet',
    excerpt: 'Saiba como identificar problemas oculares e manter a visão do seu animal saudável.',
    date: '10 Jan 2025',
    category: 'Oftalmologia',
  },
  {
    id: 2,
    title: 'Quando levar seu pet ao dentista veterinário',
    excerpt: 'Conheça os sinais que indicam problemas dentários e a importância da saúde bucal.',
    date: '05 Jan 2025',
    category: 'Odontologia',
  },
  {
    id: 3,
    title: 'Emergências veterinárias: quando procurar ajuda',
    excerpt: 'Aprenda a reconhecer situações de emergência e como agir rapidamente.',
    date: '28 Dez 2024',
    category: 'Emergência',
  },
];

const BlogPreview = () => {
  return (
    <section className="section-padding bg-muted/50">
      <div className="container-narrow mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Artigos e Informativos
          </h2>
          <p className="text-muted-foreground text-lg">
            Dicas e informações para cuidar melhor do seu pet.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-10">
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

                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                <Link
                  to="/blog"
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all"
                >
                  Ler mais
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <Link to="/blog">
              Ver Todos os Artigos
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
