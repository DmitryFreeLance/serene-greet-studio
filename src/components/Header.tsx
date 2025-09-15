import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

export const Header = () => {
  return (
    <header className="w-full bg-background/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MessageCircle className="h-8 w-8 text-primary" />
          <h1 className="text-xl font-bold text-foreground">Разблокировка WhatsApp</h1>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Услуги
          </a>
          <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Обо мне
          </a>
          <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Контакты
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" asChild>
            <a href="tel:+73832188048">
              <Phone className="h-4 w-4" />
              Позвонить
            </a>
          </Button>
          <Button variant="whatsapp" size="sm" asChild>
            <a href="https://t.me/bosnsk" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4" />
              Telegram
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};