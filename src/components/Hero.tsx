import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-image.webp";
import expertPhoto from "@/assets/expert-photo.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              У вас заблокировали ватцап?
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Профессиональная разблокировка Вацап и Вацап Business с гарантией 100%. 
              Более 5000 восстановленных аккаунтов за 2 года работы.
            </p>
          </div>

          {/* Expert Section */}
          <div className="bg-gradient-to-r from-primary/5 to-primary/10 p-8 rounded-3xl border border-primary/20 relative overflow-hidden">
            <div className="flex items-center gap-6 relative z-10">
              <div className="relative">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img 
                    src={expertPhoto} 
                    alt="Павел Узданов - эксперт по разблокировке Вацап" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-primary-foreground" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-2">Павел Узданов</h3>
                <p className="text-primary font-semibold mb-2">Эксперт по разблокировке Вацап</p>
                <p className="text-muted-foreground text-sm mb-4">
                  2 года опыта • 5000+ восстановленных аккаунтов • 100% гарантия результата
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <a href="tel:+73832188048">
                      <Phone className="h-4 w-4" />
                      Позвонить
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href="https://t.me/bosnsk" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-4 w-4" />
                      Telegram
                    </a>
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
              <MessageCircle className="w-full h-full text-primary" />
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-primary/10 shadow-sm">
            <div className="text-center mb-4">
              <h4 className="text-lg font-semibold text-foreground mb-2">Почему выбирают меня?</h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl border border-primary/20">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium">100% гарантия</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl border border-primary/20">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium">5000+ аккаунтов</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl border border-primary/20">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium">20 дней в среднем</span>
              </div>
            </div>
          </div>
        </div>

        {/* WhatsApp-style mockup */}
        <div className="relative lg:block hidden">
          <div className="relative mx-auto w-80 h-[600px] bg-background rounded-[2.5rem] border-8 border-accent shadow-2xl">
            {/* Phone screen */}
            <div className="w-full h-full bg-gradient-to-b from-primary/5 to-primary/10 rounded-[1.8rem] relative overflow-hidden">
              {/* Status bar */}
              <div className="h-8 bg-foreground/5 flex items-center justify-between px-6 text-xs text-foreground/70">
                <span>9:41</span>
                <div className="flex gap-1">
                  <div className="w-4 h-2 bg-foreground/30 rounded-sm"></div>
                  <div className="w-6 h-2 bg-foreground/30 rounded-sm"></div>
                  <div className="w-4 h-2 bg-foreground/30 rounded-sm"></div>
                </div>
              </div>
              
              {/* WhatsApp header */}
              <div className="h-16 bg-primary flex items-center px-4 text-primary-foreground">
                <div className="text-lg font-semibold">Вацап</div>
              </div>
              
              {/* Block message */}
              <div className="flex-1 flex items-center justify-center p-8">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-destructive/20 rounded-full flex items-center justify-center mx-auto">
                    <MessageCircle className="h-8 w-8 text-destructive" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">Аккаунт заблокирован</h3>
                    <p className="text-sm text-muted-foreground">Ваш номер телефона заблокирован для использования Вацап</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};