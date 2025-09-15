import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, MessageCircle } from "lucide-react";

export const Reviews = () => {
  const reviews = [
    {
      name: "Александр К.",
      text: "Павел помог восстановить мой бизнес-аккаунт всего за 15 дней! Думал, что потеряю всех клиентов, но все обошлось. Профессиональный подход и постоянная связь.",
      rating: 5,
      date: "2 недели назад"
    },
    {
      name: "Мария С.",
      text: "Заблокировали WhatsApp без объяснения причин. Павел разобрался с проблемой за 18 дней. Очень благодарна за помощь! Теперь рекомендую всем знакомым.",
      rating: 5,
      date: "1 месяц назад"
    },
    {
      name: "Дмитрий В.",
      text: "Отличный специалист! Восстановил аккаунт, который другие считали безнадежным. Работает быстро и качественно. Цена полностью соответствует результату.",
      rating: 5,
      date: "3 недели назад"
    },
    {
      name: "Елена П.",
      text: "Обращалась по поводу бизнес-аккаунта. Павел не только восстановил доступ, но и дал советы по безопасности. Очень профессионально и с гарантией!",
      rating: 5,
      date: "1 неделя назад"
    },
    {
      name: "Игорь Л.",
      text: "Был заблокирован навсегда, думал все потеряно. Павел смог восстановить за 25 дней! Единственный, кто действительно помог. Большое спасибо!",
      rating: 5,
      date: "2 месяца назад"
    },
    {
      name: "Анна М.",
      text: "Быстро, качественно, с полным сопровождением процесса. Павел всегда на связи и объясняет каждый шаг. Результат получила раньше обещанного срока.",
      rating: 5,
      date: "3 дня назад"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Отзывы клиентов
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Множество благодарных клиентов уже восстановили свои аккаунты
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {reviews.map((review, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">{review.date}</span>
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  "{review.text}"
                </p>
                
                <div className="pt-2 border-t border-border">
                  <p className="font-semibold text-foreground text-sm">{review.name}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 p-4 bg-accent/50 rounded-lg">
            <MessageCircle className="h-5 w-5 text-primary" />
            <span className="font-medium">
              Подробные описания проблем и их решений в нашем Telegram-канале
            </span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" asChild>
              <a href="https://t.me/WhatsAppblok" target="_blank" rel="noopener noreferrer">
                Перейти в Telegram-канал
              </a>
            </Button>
            <Button size="lg" asChild>
              <a href="#contact">
                Оставить заявку
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};