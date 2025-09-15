import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-image.webp";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              У вас заблокировали{" "}
              <span className="text-primary">WhatsApp</span>?
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Профессиональная разблокировка аккаунтов WhatsApp и WhatsApp Business. 
              Опыт работы более 2 лет, статистика восстановления 100%.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button variant="call" size="xl" asChild>
              <a href="tel:+73832188048">
                <Phone className="h-5 w-5" />
                Позвонить сейчас
              </a>
            </Button>
            <Button variant="whatsapp" size="xl" asChild>
              <a href="https://t.me/bosnsk" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                Написать в Telegram
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="flex items-center gap-3 p-4 bg-accent/50 rounded-lg">
              <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
              <span className="text-sm font-medium">100% восстановление</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-accent/50 rounded-lg">
              <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
              <span className="text-sm font-medium">Более 5000 аккаунтов</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-accent/50 rounded-lg">
              <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
              <span className="text-sm font-medium">Среднее время 20 дней</span>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src={heroImage} 
              alt="Павел Узданов - специалист по разблокировке WhatsApp" 
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"></div>
          </div>
          
          {/* Floating card */}
          <div className="absolute -bottom-6 -left-6 bg-background p-6 rounded-xl shadow-xl border border-border max-w-sm">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <MessageCircle className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Павел Узданов</p>
                  <p className="text-xs text-muted-foreground">Эксперт по разблокировке</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                "Помогаю вернуть доступ к WhatsApp с использованием уникальной программы"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};