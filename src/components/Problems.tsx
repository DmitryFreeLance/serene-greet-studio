import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Ban, Clock, Users } from "lucide-react";

export const Problems = () => {
  const problems = [
    {
      icon: Ban,
      title: "Массовые рассылки",
      description: "WhatsApp блокирует за отправку сообщений большому количеству контактов",
    },
    {
      icon: AlertTriangle,
      title: "Спам-активность",
      description: "Автоматические сообщения и боты могут привести к блокировке аккаунта",
    },
    {
      icon: Users,
      title: "Жалобы пользователей",
      description: "Множественные жалобы от других пользователей на ваш аккаунт",
    },
    {
      icon: Clock,
      title: "Подозрительная активность",
      description: "Слишком быстрая отправка сообщений или нестандартное поведение",
    },
  ];

  return (
    <section className="py-24 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Почему блокируют WhatsApp?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            WhatsApp активно борется со спамом и нарушениями. Вот основные причины блокировки аккаунтов
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <Card key={index} className="border-border text-center hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <problem.icon className="h-6 w-6 text-destructive" />
                </div>
                <CardTitle className="text-lg">{problem.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  {problem.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 mt-16 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Аккаунт уже заблокирован?
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Не паникуйте! Я помогу восстановить доступ к вашему WhatsApp используя
            проверенные методы и уникальное программное обеспечение.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="tel:+73832188048"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Получить помощь сейчас
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};