import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5519999999999?text=Olá! Vim pelo site e gostaria de informações."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 md:hidden w-14 h-14 bg-success text-success-foreground rounded-full flex items-center justify-center shadow-lg hover:bg-success/90 transition-colors animate-fade-in"
      aria-label="Chamar no WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
};

export default WhatsAppButton;
