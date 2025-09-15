import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, FileText, Settings, CheckCircle } from "lucide-react";

export const Process = () => {
  const steps = [
    {
      icon: Phone,
      number: "01",
      title: "Консультация",
      description: "Звоните или пишите в Telegram. Проводим диагностику вашего случая и определяем стратегию восстановления.",
    },
    {
      icon: FileText,
      number: "02", 
      title: "Анализ блокировки",
      description: "Анализируем причину блокировки и подбираем оптимальный метод разблокировки для вашего аккаунта.",
    },
    {
      icon: Settings,
      number: "03",
      title: "Восстановление",
      description: "Запускаем процесс разблокировки с использованием специального программного обеспечения.",
    },
    {
      icon: CheckCircle,
      number: "04",
      title: "Результат",
      description: "Получаете полностью восстановленный доступ к WhatsApp со всеми контактами и историей сообщений.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Как проходит разблокировка
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Простой и прозрачный процесс восстановления доступа к вашему WhatsApp
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="border-border hover:shadow-lg transition-all duration-300 h-full">
                <CardHeader className="text-center pb-4">
                  <div className="relative">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <step.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-accent-foreground">{step.number}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border"></div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl">
            <CheckCircle className="h-8 w-8 text-primary flex-shrink-0" />
            <div className="text-left">
              <h3 className="font-bold text-foreground">100% гарантия восстановления</h3>
              <p className="text-sm text-muted-foreground">Возвращаем деньги, если не сможем разблокировать ваш аккаунт</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-foreground mb-6">
            Готовы начать восстановление?
          </h3>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="call" size="lg" asChild>
              <a href="tel:+73832188048">
                <Phone className="h-5 w-5" />
                Позвонить и начать
              </a>
            </Button>
            <Button variant="whatsapp" size="lg" asChild>
              <a href="https://t.me/bosnsk" target="_blank" rel="noopener noreferrer">
                Написать в Telegram
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};