import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Shield, Clock, Zap } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: MessageCircle,
      title: "Разблокировка Вацап",
      description: "Восстановление заблокированных личных аккаунтов Вацап",
      features: ["Любые причины блокировки", "Быстрое восстановление", "Гарантия результата"],
    },
    {
      icon: Shield,
      title: "Вацап Business",
      description: "Разблокировка бизнес-аккаунтов Вацап для компаний",
      features: ["Восстановление бизнес-функций", "Сохранение контактов", "Минимальные простои"],
    },
    {
      icon: Zap,
      title: "Экстренная помощь",
      description: "Срочная разблокировка в кратчайшие сроки",
      features: ["Приоритетная обработка", "Круглосуточная поддержка", "Ускоренное восстановление"],
    },
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div id="about"></div>
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Мои услуги
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Профессиональная разблокировка аккаунтов Вацап с гарантией результата
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-all duration-300 hover:scale-105 flex flex-col">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 flex-grow flex flex-col">
                <ul className="space-y-2 flex-grow">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full mt-auto" asChild>
                  <a href="#contact">
                    Узнать подробнее
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 p-4 bg-accent/50 rounded-lg">
            <Clock className="h-5 w-5 text-primary" />
            <span className="font-medium">Среднее время восстановления: 20 дней</span>
          </div>
        </div>
      </div>
    </section>
  );
};